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
  return data.name;
}

async function getPokemonSprite(pokemon) {
  const data = await getPokemonInfo("pokemon", pokemon);
  return data.sprites.versions["generation-viii"].icons.front_default;
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
  // console.log("THIS: " + statsData);
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
  // const evolution_chain = {
  //   pre_evo: 'None'
  // };
  // if (data.evolves_from_species) {
  //   evolution_chain.pre_evo = data.evolves_from_species.name;
  // } else {
  //   return 'None';
  // }
  // return evolution_chain;
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
  evo_chain[0] = data.chain.species;
  if (data.chain.evolves_to.length > 0) {
    evo_chain[1] = data.chain.evolves_to[0].species;
    if (data.chain.evolves_to[0].evolves_to.length > 0) {
      evo_chain[2] = data.chain.evolves_to[0].evolves_to[0].species;
    }
  }
  return evo_chain;
}

async function getPokemonForms(pokemon) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
  );
  const data = await res.json();
  console.log(data.varieties);
}

export default async function getPokemon(pokemon) {
  const name = await getPokemonName(pokemon);
  const sprite = await getPokemonSprite(pokemon);
  const types = await getPokemonType(pokemon);
  const ability = await getPokemonAbilities(pokemon);
  const stats = await pokemonStats(pokemon);
  const totalStat = await getPokemonTotalStat(pokemon);
  const evo = await getEvolution(pokemon); // should be evolution-chain ID, not pokemon ID
  const forms = await getPokemonForms(pokemon);

  return {
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
