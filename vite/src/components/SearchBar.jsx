// Search for ElasticSearch and implement it for searching capabilities.
// import { useQuery } from "@tanstack/react-query";
// import getPokemonById from "../node/Ogerpon.js";
// import LoadingIcon from "./components/LoadingIcon.jsx";
// import "./css/details.css";

import PokemonInfo from "../PokemonInfo.jsx";

function handleInput(name) {
  console.log(name);
  return <PokemonInfo pokemonId={name} />;
}

function SearchBar() {
  return (
    <>
      <input
        className="search-bar"
        placeholder="Type pokemons name/id"
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleInput(e.target.value);
          }
        }}
      />
    </>
  );
}

export default SearchBar;
