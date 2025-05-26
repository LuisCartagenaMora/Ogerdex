async function getPokemonInfo(criteria, pokemon) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/${criteria}/${pokemon}/`
  );
  const data = await response.json();
  return data;
}

function calcBaseStat(...args) {
  return args.reduce((total, stat) => total + stat, 0);
}

async function getPokemonName(pokemon) {
  const data = await getPokemonInfo("pokemon", pokemon);
  return data?.name;
}

async function getPokemonId(pokemon) {
  const data = await getPokemonInfo("pokemon", pokemon);
  return data.id;
}

async function getPokemonSprite(pokemon) {
  const data = await getPokemonInfo("pokemon", pokemon);
  return data.sprites.front_default;
  // return data.sprites.front_default
}

async function getPokemonType(pokemon) {
  const data = await getPokemonInfo("pokemon", pokemon);
  return data.types.map((t) => t.type.name);
}

async function pokemonStats(pokemon) {
  const statsData = await getPokemonInfo("pokemon", pokemon);
  // return statsData.stats;
  const stats = statsData.stats;
  return {
    hp: stats[0].base_stat,
    attack: stats[1].base_stat,
    defense: stats[2].base_stat,
    specialAttack: stats[3].base_stat,
    specialDefense: stats[4].base_stat,
    speed: stats[5].base_stat,
  };
}

async function getPokemonTotalStat(pokemon) {
  const stats = await pokemonStats(pokemon);
  return calcBaseStat(
    stats.hp,
    stats.attack,
    stats.defense,
    stats.specialAttack,
    stats.specialDefense,
    stats.speed
  );
}

async function getPokemonAbilities(pokemon) {
  const data = await getPokemonInfo("pokemon", pokemon);
  const abilities = {
    ability: ["none", "none"],
    hidden_ability: "none",
  };
  let slot = 0;
  data.abilities.forEach((ability) => {
    if (ability.is_hidden) {
      abilities.hidden_ability = ability.ability.name;
    } else {
      abilities.ability[slot] = ability.ability.name;
      slot++;
    }
  });
  return abilities;
}

async function getMove(move, config) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${move}/`);
  const data = await res.json();
  if (config === "name") {
    return { name: data.name };
  } else if (config === "basic") {
    return {
      name: data.name,
      type: data.type.name,
      damage_class: data.damage_class.name,
      power: data.power,
    };
  } else if (config === "all") {
    return {
      name: data.name,
      type: data.type.name,
      damage_class: data.damage_class.name,
      power: data.power,
      accuracy: data.accuracy,
      pp: data.pp,
      priority: data.priority,
      effect:
        data.effect_entries.length > 0
          ? data.effect_entries[0].short_effect
          : null,
    };
  }
}

// async function getPokemonMoves(pokemon, config) {
//   const data = await getPokemonInfo("pokemon", pokemon);
//   const moves = await Promise.all(
//     data.moves.slice(0, 5).map((m) => getMove(m.move.name, config))
//   );
//   return moves;
// }

async function getEvolution(pokemon) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
  );
  const data = await res.json();
  const url = data.evolution_chain["url"];
  return getPokemonEvolutionChain(url);
}

//
async function getPokemonEvolutionChain(url) {
  const res = await fetch(url);
  const data = await res.json();
  const evo_chain = {
    0: "None",
    1: "None",
    2: "None",
  };

  const evoLength = data.chain.evolves_to;
  if (evoLength.length <= 2) {
    evo_chain[0] = data.chain.species;
    if (data.chain.evolves_to.length > 0) {
      evo_chain[1] = data.chain.evolves_to[0].species;
      if (data.chain.evolves_to[0].evolves_to.length > 0) {
        evo_chain[2] = data.chain.evolves_to[0].evolves_to[0].species;
      }
    }
    return evo_chain;
  } else {
    const evoChain = evoLength.map((evo) => {
      return evo.species;
    });

    evoChain[0] = data.chain.species;
    return evoChain;
  }
  // -----------------------------------------------
  //Succesfully fetches the eeveelutions.
  // -----------------------------------------------
}

async function getPokemonForms(pokemon) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
  );
  const data = await res.json();
  return data;
}

export default async function getPokemon(pokemon) {
  const id = await getPokemonId(pokemon);
  const name = await getPokemonName(id);
  console.log(name);
  const sprite = await getPokemonSprite(id);
  const types = await getPokemonType(id);
  const ability = await getPokemonAbilities(id);
  const stats = await pokemonStats(id);
  const totalStat = await getPokemonTotalStat(id);
  const evo = await getEvolution(id);
  const forms = await getPokemonForms(id);

  return {
    id,
    name,
    type: types,
    sprite,
    ability,
    stats,
    totalStat,
    evo,
    forms,
  };
}
