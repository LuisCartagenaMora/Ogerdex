// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import getPokemon from "../node/Ogerpon.js";
import PokemonCard from "../src/components/PokemonCard.jsx";
import LoadingIcon from "./components/LoadingIcon.jsx";
import "./css/details.css";

function PokemonInfo({ pokemon }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: () => getPokemon(pokemon),
  });

  if (isLoading) return <LoadingIcon />;
  if (error) return <p>Error: {error.message}</p>;

  function numberOfEvolutions() {
    const PokemonEvolutions = Object.values(data?.evo);
 
    return PokemonEvolutions.map((evo, i) => (
      <PokemonCard key={i} pokemon={evo?.id} />
    ));
  }


  return (
    <>
      <div className="pokemon-cards-section">{numberOfEvolutions()}</div>
      {/* <div className="pokemon-cards-section">{numberOfForms()}</div> */}
    </>
  );
}

export default PokemonInfo;
