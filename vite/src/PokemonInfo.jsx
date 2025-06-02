// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import getPokemon from "../node/Ogerpon.js";
import PokemonCard from "../src/components/PokemonCard.jsx";
import LoadingIcon from "./components/LoadingIcon.jsx";
import "./css/details.css";

function PokemonInfo({ pokemon }) {
  //   const { pokemonId } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => getPokemon(pokemon),
  });

  if (isLoading) return <LoadingIcon />;
  if (error) return <p>Error: {error.message}</p>;

  function numberOfEvolutions() {
    const PokemonEvolutions = Object.values(data?.evo);
    return PokemonEvolutions.map((evo, i) => (
      <PokemonCard
        key={i}
        pokemonId={evo?.id}
        selected={evo?.id == pokemonId ? "highlight" : ""}
      />
    ));
  }

  return (
    <>
      <div className="pokemon-cards-section">{numberOfEvolutions()}</div>
    </>
  );
}

export default PokemonInfo;
