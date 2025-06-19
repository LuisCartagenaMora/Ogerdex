async function fetchInfo(id) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const speciesInfo = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  );

  try {
    const [pokemonRes, speciesRes] = await Promise.all([pokemon, speciesInfo]);
    if (!pokemonRes.ok || !speciesRes.ok) {
      throw new Error("Pokémon not found");
    }
    const pokemonData = await pokemonRes.json();
    const speciesData = await speciesRes.json();
    return [pokemonData, speciesData];
  } catch (e) {
    console.error(e);
  }
}

async function fetchAltInfo(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (!response.ok) {
    throw new Error("Pokémon not found");
  }
  return await response.json();
}

async function fetchTypeInfo(types) {
  if (types.length < 2) {
    const firstTypeRes = await fetch(
      `https://pokeapi.co/api/v2/type/${types[0]}/`
    );
    try {
      if (!firstTypeRes.ok) {
        throw new Error("Pokemon's type information could not be found");
      }
      const firstTypeData = await firstTypeRes.json();
      console.log([firstTypeData]);
      return [firstTypeData];
    } catch (e) {
      console.error(e);
    }
  } else {
    const type1 = await fetch(`https://pokeapi.co/api/v2/type/${types[0]}/`);
    const type2 = await fetch(`https://pokeapi.co/api/v2/type/${types[1]}/`);

    try {
      const [firstTypeRes, secondTypeRes] = await Promise.all([type1, type2]);
      if (!firstTypeRes.ok || !secondTypeRes.ok) {
        throw new Error("Pokemon's type information could not be found");
      }
      const firstTypeData = await firstTypeRes.json();
      const secondTypeData = await secondTypeRes.json();
      return [firstTypeData, secondTypeData];
    } catch (e) {
      console.error(e);
    }
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
  const englishEntries = pokeData?.flavor_text_entries.filter((text_entry) => {
    return text_entry.language.name === "en";
  });
  console.log(englishEntries);
  return englishEntries[englishEntries.length - 1].flavor_text;
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

function getPokemonEggCycle(speciesData) {
  return speciesData?.hatch_counter;
}

function getPokemonCaptureRate(pokeData) {
  return pokeData?.capture_rate || null;
}

function getPokemonHeldItem(pokeData) {
  return (
    pokeData?.held_items.map((held_item) => {
      return {
        name: held_item.item.name,
        url: held_item.item.url,
        chance:
          held_item.version_details[held_item.version_details.length - 1]
            ?.rarity, // Only gets the latest gen info
      };
    }) ?? []
  );
}

function getPokemonId(speciesData) {
  return speciesData?.id || null;
}

function getPokemonSprite(pokeData) {
  return [pokeData?.sprites?.front_default, pokeData?.sprites?.front_shiny];
}

function getPokemonType(pokeData) {
  return pokeData?.types.map((p) => p?.type?.name);
}

async function getTypeEffectiveness(types) {
  const typeData = await fetchTypeInfo(types);
  return typeData;
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

async function getAbilityDescription(abilityName) {
  const res = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}/`);
  const data = await res.json();
  // Find the English effect entry
  const effectEntry = data.effect_entries.find(
    (entry) => entry.language.name === "en"
  );
  return effectEntry ? effectEntry.short_effect : "";
}

async function getPokemonAbilities(pokeData) {
  const abilities = {
    ability: [],
    hidden_ability: null,
  };

  for (const abilityObj of pokeData?.abilities ?? []) {
    const name = abilityObj.ability.name;
    const description = await getAbilityDescription(name);

    if (abilityObj.is_hidden) {
      abilities.hidden_ability = { name, description };
    } else {
      abilities.ability.push({ name, description });
    }
  }
  return abilities;
}

async function getMove(move) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${move}/`);
  const data = await res.json();

  return {
    name: data?.name || null,
    type: data?.type?.name || null,
    damage_class: data?.damage_class?.name || null,
    power: data?.power || null,
    accuracy: data?.accuracy || null,
    pp: data?.pp || null,
    priority: data?.priority || null,
    effect:
      data?.effect_entries?.length > 0
        ? data?.effect_entries[0]?.short_effect
        : null,
  };
}

async function getPokemonMoves(pokeData) {
  const moves = await Promise.all(
    pokeData?.moves.map((m) => getMove(m?.move?.name))
  );
  return moves;
}

// async function getEvolution(data, pokeId) {
//   const url = data.evolution_chain["url"];
//   // return getPokemonEvolutionChain(url, pokeId);
//   return getEvolutionV2(url)
// }

//
// async function getPokemonEvolutionChain(url) {
//   const res = await fetch(url); // /evolution-chain/ endpoint is called here
//   const data = await res.json();
//   const evo_chain = [];

//   // IF evolves_to is < 1 (i.e. length is 0) the pokemon doesnt evolver any further.
//   // if(data.chain.evolves_to.length < 1){
//   //   evoChain.push(data.chain.species)
//   // }

//   const evoLength = data.chain.evolves_to;
//   if (evoLength.length <= 2) {
//     evo_chain[0] = data.chain.species;
//     evo_chain[0].id = evo_chain[0].url.slice(42).replace("/", "");
//     if (data.chain.evolves_to.length > 0) {
//       evo_chain[1] = data.chain.evolves_to[0].species;
//       evo_chain[1].id = evo_chain[1].url.slice(42).replace("/", "");
//       evo_chain[1].id = evo_chain[1].url.slice(42).replace("/", "");
//       if (data.chain.evolves_to[0].evolves_to.length > 0) {
//         evo_chain[2] = data.chain.evolves_to[0].evolves_to[0].species;
//         evo_chain[2].id = evo_chain[2].url.slice(42).replace("/", "");
//       }
//     }
//     return evo_chain;
//   } else {
//     const evoChain = evoLength.map((evo) => {
//       evo.species.id = evo.species.url.slice(42).replace("/", "");
//       return evo.species;
//     });

//     //Necessary for the eeveelutions, since eevee isn't inserted in the map function.
//     evoChain.unshift(data.chain.species);
//     evoChain[0].id = data.chain.species.url.slice(42).replace("/", "");
//     return evoChain;
//   }
// }

async function getEvolutionV2(speciesData) {
  const evoChain = [];
  const speciesResponse = await fetch(speciesData?.evolution_chain["url"]);
  const speciesChain = await speciesResponse.json();

  // Helper to get sprite by id or name
  async function getSprite(idOrName) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}/`);
    const data = await res.json();
    return data?.sprites?.front_default || null;
  }

  // Helper to parse evolution requirements
  function parseEvolutionDetails(details) {
    if (!details || details.length === 0) return "None";
    const d = details[0];
    if (d.trigger?.name === "level-up" && d.min_happiness)
      return `Level up with ${d.min_happiness} happiness`;
    if (d.trigger?.name === "level-up" && d.min_level)
      return `Level ${d.min_level}`;
    if (d.trigger?.name === "use-item" && d.item)
      return `Use ${d.item.name.replace("-", " ")}`;
    if (d.trigger?.name === "trade") return "Trade";
    return d.trigger?.name || "Unknown";
  }

  // Recursive traversal
  async function traverse(chain, from = null, evoReq = null) {
    const id = chain.species.url.slice(42).replace("/", "");
    const sprite = await getSprite(id); // Pass id or name here
    evoChain.push({
      name: chain.species.name,
      id,
      sprite,
      evolves_from: from,
      evolution_requirement: evoReq,
    });
    if (chain.evolves_to && chain.evolves_to.length > 0) {
      for (const evo of chain.evolves_to) {
        const req = parseEvolutionDetails(evo.evolution_details);
        await traverse(evo, chain.species.name, req);
      }
    }
  }

  await traverse(speciesChain.chain);
  return evoChain;
}

async function testEnd(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch (e) {
    console.error(e);
  }
}

async function getAltPokemon(pokemon) {
  const pokemonData = await fetchAltInfo(pokemon);

  const name = await getPokemonName(pokemonData);
  const sprite = getPokemonSprite(pokemonData);
  const types = await getPokemonType(pokemonData);
  const typeChart = await getTypeEffectiveness(types);
  const ability = await getPokemonAbilities(pokemonData);
  const stats = pokemonStats(pokemonData);
  const totalStat = await getPokemonTotalStat(pokemonData);

  return {
    name,
    type: types,
    typeChart,
    sprite,
    ability,
    stats,
    totalStat,
  };
}

async function getPokemonForms(data) {
  // Each form will be an object: { name, isMega, isGmax }
  console.log("Inside Pokemon Forms:", data.varieties);
  return (data?.varieties ?? [])
    .map((form) => {
      const formName = form.pokemon.name.toLowerCase();

      return {
        id: Number(form.pokemon.url.slice(34).replace("/", "")),
        name: form.pokemon.name,
        isMega:
          formName.includes("mega") ||
          formName.endsWith("-x") ||
          formName.endsWith("-y"),
        isGmax: formName.includes("gmax"),
        isPaldea: formName.includes("paldea"),
        isAlola: formName.includes("alola"),
        isGalar: formName.includes("galar"),
        isHisui: formName.includes("hisui"),
        url: form.pokemon.url || null,
      };
    })
    .filter(
      (form) =>
        form.isMega ||
        form.isGmax ||
        form.isPaldea ||
        form.isAlola ||
        form.isGalar ||
        form.isHisui
    );
}

export async function getPokemonDetailed(pokemon) {
  // Await fetchInfo here!
  // testEnd(`https://pokeapi.co/api/v2/pokemon-species/67/`);
  // testEnd(`https://pokeapi.co/api/v2/evolution-chain/67/`);

  const [pokemonData, speciesData] = await fetchInfo(pokemon);

  const id = await getPokemonId(speciesData);
  const name = await getPokemonName(pokemonData);
  const cry = await getPokemonCry(pokemonData);
  const mass = getPokemonMass(pokemonData);
  const genera = await getPokemonGenera(speciesData);
  const flavorText = await getPokemonFlavorText(speciesData);
  const baseHappines = await getPokemonBaseHappines(speciesData);
  const eggGroup = await getPokemonEggGroup(speciesData);
  const eggCycle = await getPokemonEggCycle(speciesData);
  const captureRate = await getPokemonCaptureRate(speciesData);
  const heldItems = await getPokemonHeldItem(pokemonData);
  const moves = await getPokemonMoves(pokemonData);
  const sprite = getPokemonSprite(pokemonData);
  const types = await getPokemonType(pokemonData);
  const typeChart = await getTypeEffectiveness(types);
  const ability = await getPokemonAbilities(pokemonData);
  const stats = pokemonStats(pokemonData);
  const totalStat = await getPokemonTotalStat(pokemonData);
  const evo = await getEvolutionV2(speciesData);
  const forms = await getPokemonForms(speciesData, false);
  // const styleForms = await checkStylisticForm(speciesData);

  return {
    id,
    name,
    cry,
    mass,
    genera,
    flavorText,
    baseHappines,
    eggGroup,
    eggCycle,
    captureRate,
    heldItems,
    moves,
    type: types,
    typeChart,
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
  const typeChart = await getTypeEffectiveness(types);
  const ability = await getPokemonAbilities(pokemonData);
  const stats = pokemonStats(pokemonData);
  const totalStat = await getPokemonTotalStat(pokemonData);
  const evo = await getEvolutionV2(speciesData);
  const forms = await getPokemonForms(speciesData, true);

  console.log(ability);
  return {
    id,
    name,
    type: types,
    typeChart,
    sprite,
    ability,
    stats,
    totalStat,
    evo,
    forms,
  };
}

async function getItem(id) {
  console.log(id);
  const response = await fetch(`https://pokeapi.co/api/v2/item/${id}/`);
  console.log("Response: ", response);
  const itemData = await response.json();
  console.log("ItemData: ", itemData);
  return itemData;
}

export { getAltPokemon, getItem };
