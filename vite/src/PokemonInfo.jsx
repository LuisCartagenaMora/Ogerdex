// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import getPokemon from "../node/Ogerpon.js";
import PokemonCard from "../src/components/PokemonCard.jsx";
import AltPokemonCard from "./components/AltPokemonCard.jsx";
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
    const PokemonForms = Object.values(data?.forms);
    return PokemonForms.map((form, i) => {
      if(data?.name !== form?.name)
      return <AltPokemonCard key={i} url={form?.url} />;
    });
  }
  

  return (
    <>
    {console.log("FORMS:")}
    {console.log(data?.forms)}
      <div className="pokemon-cards-section">{numberOfEvolutions()}</div>
      <div className="pokemon-cards-section">{numberOfForms()}</div>
    </>
  );
}

export default PokemonInfo;
