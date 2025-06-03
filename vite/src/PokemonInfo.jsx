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
    queryKey: ["pokemon", pokemon],
    queryFn: () => getPokemon(pokemon),
  });

  if (isLoading) return <LoadingIcon />;
  if (error) return <p>Error: {error.message}</p>;

  function numberOfEvolutions() {
    const PokemonEvolutions = Object.values(data?.evo);
    console.log("Evolutions: ")
    console.log(PokemonEvolutions)
    return PokemonEvolutions.map((evo, i) => (
      <PokemonCard
        key={i}
        pokemonId={evo?.id}
        selected={evo?.id == pokemon ? "highlight" : ""}
      />
    ));
  }

  function numberOfForms() {
    if (!data || !data.forms) return null; // Prevents error when data is not ready
    const PokemonForms = Object.values(data.forms);
    return PokemonForms.map((form, i) => {
      if (!form?.url) return null; // Skip if url is missing
      const match = form.url.match(/\/pokemon\/(\d+)\//);
      const id = match ? match[1] : null;
      if (!id) return null; // Skip if id is invalid
      return <PokemonCard key={i} pokemonId={Number(id)} />;
    });
  }
  

  return (
    <>
      <div className="pokemon-cards-section">{numberOfEvolutions()}</div>
      <div className="pokemon-cards-section">{numberOfForms()}</div>
    </>
  );
}

export default PokemonInfo;
