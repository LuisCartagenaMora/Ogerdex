import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import getEvolution from "../node/Ogerpon.js";
import PokemonCard from "../src/components/PokemonCard.jsx";
import "../src/css/details.css";

function PokemonInfo() {
  const { pokemonId } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [evoLine, setEvoLine] = useState("");

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemon = await getEvolution(pokemonId);
        const x = Object.values(pokemon?.evo);
        setEvoLine(x.length);
        setPokemonDetails(pokemon);
      } catch (e) {
        console.error("Failed to fetch Pokémon:", e);
      }
    }
    fetchPokemon();
  }, [pokemonId]);

  console.log(pokemonDetails?.evo[0]?.name);
  console.log(pokemonDetails?.evo[1]?.name);
  console.log(pokemonDetails?.evo[2]?.name);
  return (
    <>
      <Header />
      <PokemonCard pokemonId={pokemonDetails?.evo[0]?.name} />
      <PokemonCard pokemonId={pokemonDetails?.evo[1]?.name} />
      <PokemonCard pokemonId={pokemonDetails?.evo[2]?.name} />
      <Footer />
    </>
  );
}

export default PokemonInfo;
