async function fetchInfo(id) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const speciesInfo = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  );

  try {
    const [pokemonRes, speciesRes] = await Promise.all([pokemon, speciesInfo]);
    const pokemonData = await pokemonRes.json();
    const speciesData = await speciesRes.json();
    return [pokemonData, speciesData];
  } catch (e) {
    console.error(e);
  }
}

async function fetchAltInfo(id) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  try {
    const pokemonData = await pokemon.json();
    return pokemonData;
  } catch (e) {
    console.error(e);
  }
}

function calcBaseStat(...args) {
  return args.reduce((total, stat) => total + stat, 0);
}

function getPokemonName(pokeData) {
  return pokeData?.name || null;
}

function getPokemonCry(pokeData) {
  return pokeData?.cries?.latest || null;
}

function getPokemonGenera(pokeData) {
  //English version
  return pokeData?.genera[7]?.genus || null;
}

function getPokemonFlavorText(pokeData) {
  return pokeData?.flavor_text_entries[91]?.flavor_text || null;
}

function getPokemonMass(pokeData) {
  const height = pokeData?.height;
  const weight = pokeData?.weight;
  return [height, weight];
}

function getPokemonBaseHappines(pokeData) {
  return pokeData?.base_happiness || null;
}

function getPokemonEggGroup(pokeData) {
  return pokeData?.egg_groups;
}

function getPokemonCaptureRate(pokeData) {
  return pokeData?.capture_rate || null;
}

function getPokemonId(speciesData) {
  return speciesData?.id || null;
}

function getPokemonSprite(pokeData) {
  return pokeData?.sprites?.front_default || null;
}

function getPokemonType(pokeData) {
  return pokeData?.types.map((p) => p?.type?.name);
}

function pokemonStats(pokeData) {
  const stats = pokeData.stats;
  return {
    hp: stats[0].base_stat,
    attack: stats[1].base_stat,
    defense: stats[2].base_stat,
    "sp.Atk": stats[3].base_stat,
    "sp.Def": stats[4].base_stat,
    speed: stats[5].base_stat,
  };
}

function getPokemonTotalStat(pokemon) {
  const stats = pokemonStats(pokemon);
  return calcBaseStat(
    stats.hp,
    stats.attack,
    stats.defense,
    stats.specialAttack,
    stats.specialDefense,
    stats.speed
  );
}

function getPokemonAbilities(pokeData) {
  const abilities = {
    ability: ["none", "none"],
    hidden_ability: "none",
  };
  let slot = 0;
  pokeData?.abilities.forEach((ability) => {
    if (ability.is_hidden) {
      abilities.hidden_ability = ability.ability.name;
    } else {
      abilities.ability[slot] = ability.ability.name;
      slot++;
    }
  });
  return abilities;
}

// async function getMove(move) {
//   const res = await fetch(`https://pokeapi.co/api/v2/move/${move}/`);
//   const data = await res.json();
//   if (config === "name") {
//     return { name: data.name };
//   } else if (config === "basic") {
//     return {
//       name: data.name,
//       type: data.type.name,
//       damage_class: data.damage_class.name,
//       power: data.power,
//     };
//   } else if (config === "all") {
//     return {
//       name: data?.name || null,
//       type: data?.type?.name || null,
//       damage_class: data?.damage_class?.name || null,
//       power: data?.power || null,
//       accuracy: data?.accuracy || null,
//       pp: data?.pp || null,
//       priority: data?.priority || null,
//       effect:
//         data?.effect_entries?.length > 0
//           ? data?.effect_entries[0]?.short_effect
//           : null,
//     };
//   }
// }

// async function getPokemonMoves(pokeData) {
//   const moves = await Promise.all(
//     pokeData?.moves.slice(0, 5).map((m) => getMove(m?.move?.name, config))
//   );
//   return moves;
// }

async function getEvolution(data, pokeId) {
  const url = data.evolution_chain["url"];
  return getPokemonEvolutionChain(url, pokeId);
}

//
async function getPokemonEvolutionChain(url) {
  const res = await fetch(url); // /evolution-chain/ endpoint is called here
  const data = await res.json();
  const evo_chain = [];

  // IF evolves_to is < 1 (i.e. length is 0) the pokemon doesnt evolver any further.
  // if(data.chain.evolves_to.length < 1){
  //   evoChain.push(data.chain.species)
  // }

  const evoLength = data.chain.evolves_to;
  if (evoLength.length <= 2) {
    evo_chain[0] = data.chain.species;
    evo_chain[0].id = evo_chain[0].url.slice(42).replace("/", "");
    if (data.chain.evolves_to.length > 0) {
      evo_chain[1] = data.chain.evolves_to[0].species;
      evo_chain[1].id = evo_chain[1].url.slice(42).replace("/", "");
      evo_chain[1].id = evo_chain[1].url.slice(42).replace("/", "");
      if (data.chain.evolves_to[0].evolves_to.length > 0) {
        evo_chain[2] = data.chain.evolves_to[0].evolves_to[0].species;
        evo_chain[2].id = evo_chain[2].url.slice(42).replace("/", "");
      }
    }
    return evo_chain;
  } else {
    const evoChain = evoLength.map((evo) => {
      evo.species.id = evo.species.url.slice(42).replace("/", "");
      return evo.species;
    });

    //Necessary for the eeveelutions, since eevee isn't inserted in the map function.
    evoChain.unshift(data.chain.species);
    evoChain[0].id = data.chain.species.url.slice(42).replace("/", "");
    return evoChain;
  }
}

async function testEnd(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("--------------------------");
    console.log("ENDPOINT DATA");
    console.log(data);
    console.log("--------------------------");
  } catch (e) {
    console.error(e);
  }
}

async function getAltPokemon(pokemon) {
  const pokemonData = await fetchAltInfo(pokemon);

  const name = await getPokemonName(pokemonData);
  const sprite = await getPokemonSprite(pokemonData);
  const types = await getPokemonType(pokemonData);
  const ability = getPokemonAbilities(pokemonData);
  const stats = pokemonStats(pokemonData);
  const totalStat = await getPokemonTotalStat(pokemonData);

  return {
    name,
    type: types,
    sprite,
    ability,
    stats,
    totalStat,
  };
}

async function getPokemonForms(data) {
  const promises = (data?.varieties ?? []).map(async (form) => {
    if (data?.name !== form?.pokemon?.name) {
      const x = await getAltPokemon(
        form?.pokemon?.url.slice(34).replace("/", "")
      );
      return x;
    }
    return undefined;
  });
  // Wait for all promises to resolve, then filter out undefined
  const results = await Promise.all(promises);
  return results.filter(Boolean);
}

export async function getPokemonDetailed(pokemon) {
  // Await fetchInfo here!
  const [pokemonData, speciesData] = await fetchInfo(pokemon);

  const id = await getPokemonId(speciesData);
  const name = await getPokemonName(pokemonData);
  const cry = await getPokemonCry(pokemonData);
  const mass = await getPokemonMass(pokemonData);
  const genera = await getPokemonGenera(speciesData);
  const flavorText = await getPokemonFlavorText(speciesData);
  const baseHappines = await getPokemonBaseHappines(speciesData);
  const eggGroup = await getPokemonEggGroup(speciesData);
  const captureRate = await getPokemonCaptureRate(speciesData);
  const sprite = await getPokemonSprite(pokemonData);
  const types = await getPokemonType(pokemonData);
  const ability = getPokemonAbilities(pokemonData);
  const stats = pokemonStats(pokemonData);
  const totalStat = await getPokemonTotalStat(pokemonData);
  const evo = await getEvolution(speciesData);
  const forms = await getPokemonForms(speciesData);

  return {
    id,
    name,
    cry,
    mass,
    genera,
    flavorText,
    baseHappines,
    eggGroup,
    captureRate,
    type: types,
    sprite,
    ability,
    stats,
    totalStat,
    evo,
    forms,
  };
}

export default async function getPokemon(pokemon) {
  // Await fetchInfo here!
  const [pokemonData, speciesData] = await fetchInfo(pokemon);

  const id = await getPokemonId(speciesData);
  const name = await getPokemonName(pokemonData);
  const sprite = await getPokemonSprite(pokemonData);
  const types = await getPokemonType(pokemonData);
  const ability = getPokemonAbilities(pokemonData);
  const stats = pokemonStats(pokemonData);
  const totalStat = await getPokemonTotalStat(pokemonData);
  const evo = await getEvolution(speciesData);
  const forms = await getPokemonForms(speciesData);

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

testEnd(`https://pokeapi.co/api/v2/pokemon-species/1/`);
const x = getPokemonDetailed(1);
console.log(x);
