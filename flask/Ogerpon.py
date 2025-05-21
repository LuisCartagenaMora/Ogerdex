from bs4 import BeautifulSoup
import requests
import json

def getPokemonInfo(criteria, pokemon):
    request = requests.get("https://pokeapi.co/api/v2/" + criteria + "/" + str(pokemon) + "/")
    json_string = request.text
    data = json.loads(json_string)
    return data

def calcBaseStat(*args):
    base_stat = 0
    for arg in args:
        base_stat +=arg
    return base_stat

def getPokemonName(pokemon):
    pokemon = getPokemonInfo("pokemon", pokemon)
    return pokemon["name"]

def getPokemonType(pokemon):
    types = []
    pokemon = getPokemonInfo("pokemon", pokemon)
    for type in pokemon["types"]:
        types.append(type["type"]["name"])
    # return pokemon["types"][0]["type"]["name"]
    return types

def pokemonStats(pokemon):
    pokemon_stats = getPokemonInfo("pokemon", pokemon)
    return {
        'hp': pokemon_stats["stats"][0]['base_stat'],
        'attack': pokemon_stats["stats"][1]['base_stat'],
        'defense': pokemon_stats["stats"][2]['base_stat'],
        'sp. attack': pokemon_stats["stats"][3]['base_stat'],
        'sp. defense': pokemon_stats["stats"][4]['base_stat'],
        'speed': pokemon_stats["stats"][5]['base_stat'],
        'base_stat': calcBaseStat(pokemon_stats["stats"][0]['base_stat'], pokemon_stats["stats"][1]['base_stat'], pokemon_stats["stats"][2]['base_stat'], pokemon_stats["stats"][3]['base_stat'], pokemon_stats["stats"][4]['base_stat'], pokemon_stats["stats"][5]['base_stat'])
    }


def getPokemonAbilities(pokemon):
    slot=0
    abilities = {
        'ability': ['none', 'none'],
        'hidden_ability': 'none'
    }
    pokemon = getPokemonInfo("pokemon", pokemon)
    for ability in pokemon["abilities"]:
        if ability["is_hidden"] is True:
            abilities["hidden_ability"] = ability["ability"]["name"]
        else:
            abilities["ability"][slot] = ability["ability"]["name"]
            slot+=1
    return abilities

def getMove(move, config):
    request = requests.get("https://pokeapi.co/api/v2/move/" + str(move) + "/")
    data = request.json()
    if config == 'name':
        move_info = {
            "name": data["name"],
        }
    elif config == 'basic':
        move_info = {
            "name": data["name"],
            "type": data["type"]["name"],
            "damage_class": data["damage_class"]["name"],
            "power": data["power"],
        }
    elif config == 'all':
        move_info = {
            "name": data["name"],
            "type": data["type"]["name"],
            "damage_class": data["damage_class"]["name"],
            "power": data["power"],
            "accuracy": data["accuracy"],
            "pp": data["pp"],
            "priority": data["priority"],
            "effect": data["effect_entries"][0]["short_effect"] if data["effect_entries"] else None
        }
    return move_info
    
    
# Need to add [:5], otherwise all moves are loaded causing a heavy API call.
def getPokemonMoves(pokemon, config):
    move_list = []
    pokemon_info = getPokemonInfo("pokemon", pokemon)
    for move in pokemon_info["moves"][:5]:
        move_list.append(getMove(move["move"]["name"], config))

    return move_list
        
# Gets the current pokemons pre-evolution or post evolution, if either exist, otherwise displays 'None'
# Parameter(Integer or String)
def getEvolution(pokemon):
    evolvesFrom = requests.get("https://pokeapi.co/api/v2/pokemon-species/" + str(pokemon) + "/")
    evo_data = evolvesFrom.json()
    # return data["chain"]["evolves_to"][0]["species"]["name"]
    evolution_chain = {
        'pre_evo': 'None',
    }
    print(evo_data)
    if evo_data["evolves_from_species"] is None:
        return "None"
    else:
        evolution_chain["pre_evo"] = evo_data["evolves_from_species"]["name"]

    # if post_evo_data["chain"]
    return evolution_chain

# This function requires the initial evoluton chains id (e.g. Venasaur chain -> 1, Charizard -> 2, Blastoise -> 3)
# Parameter(Integer)
def getPokemonEvolutionChain(chainId):
    response = requests.get("https://pokeapi.co/api/v2/evolution-chain/" + str(chainId) + "/")
    evo_data = response.json()
    evo_chain = {
        0: "None",
        1: "None",
        2: "None"
    }
    # Stores the initial pokemon in the evolution chain.
    evo_chain[0] = evo_data["chain"]["species"]
    # Stores the initial pokemon in the evolution chain. If a pokemon does not,
    # continue the chain it returns the object with one pokemon.
    if evo_data["chain"]["evolves_to"]:
        print(evo_data["chain"]["evolves_to"][0]["species"]) 
        evo_chain[1] = evo_data["chain"]["evolves_to"][0]["species"]

    # Stores the initial pokemon in the evolution chain. If a pokemon does not,
    # continue the chain it returns the object with two pokemon.
    if evo_data["chain"]["evolves_to"][0]["evolves_to"] :
        print(evo_data["chain"]["evolves_to"][0]["evolves_to"][0]["species"])
        evo_chain[2] = evo_data["chain"]["evolves_to"][0]["evolves_to"][0]["species"]

    return evo_chain


# getPokemonMoves func works, but takes takes a while before fetching limited number of moves.
def getPokemon(pokemon):
    name = getPokemonName(pokemon)
    types = getPokemonType(pokemon)
    ability = getPokemonAbilities(pokemon)
    stats = pokemonStats(pokemon)
    # moves = getPokemonMoves(pokemon, 'name')
    evo = getPokemonEvolutionChain(pokemon)
    print("Name: " + name)
    print("Type: " + str(types))
    print("Abilities: " + str(ability))
    print("Stats: " + str(stats))
    # print("Moves: " + str(moves))
    print("Evolutions: " + str(evo))
    return {
        "name": name,
        "type": types,
        "ability": ability,
        "stats": stats,
        "evo": evo
    }

getPokemon(134)