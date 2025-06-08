// Search for ElasticSearch and implement it for searching capabilities.
// import { useQuery } from "@tanstack/react-query";
// import getPokemonById from "../node/Ogerpon.js";
// import LoadingIcon from "./components/LoadingIcon.jsx";
// import "./css/details.css";

import { useNavigate } from "react-router-dom";
import PokemonInfo from "../PokemonInfo.jsx";

/*function handleInput(name) {
  //if(typeof name == "string") return <PokemonInfo pokemon={name} />
  //Otherwise, should return <ErrorMessage />
}*/

function SearchBar() {
  const navigate = useNavigate();

  function handleInput(input) {
    if (input) return navigate(`/pokemon/view/${input}`);
  }
  return (
    <>
      <input
        className="search-bar"
        placeholder="Type pokemon's name/id"
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
