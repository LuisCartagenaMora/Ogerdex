import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import getPokemon from "../node/Ogerpon.js";
import PokemonCard from "../src/components/PokemonCard.jsx";
import "../src/css/details.css";

function PokemonInfo() {
  const { pokemonId } = useParams();
  const [evoLine, setEvoLine] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    if (!pokemonId) return;
    async function fetchPokemon() {
      try {
        const pokemon = await getPokemon(pokemonId);
        setPokemonName(pokemon?.name);
        const PokemonEvolutions = Object.values(pokemon?.evo);
        setEvoLine(PokemonEvolutions);
      } catch (e) {
        console.error("Failed to fetch Pokémon:", e);
      }
    }
    fetchPokemon();
  }, [pokemonId]);

  function numberOfEvolutions() {
    console.log(evoLine);
    if (evoLine[0]?.name?.toLowerCase() !== pokemonName.toLowerCase()) {
      return <PokemonCard pokemonId={pokemonName} />;
    }

    return evoLine
      .filter((evo) => typeof evo === "object" && evo?.name)
      .map((evo, i) => <PokemonCard key={i} pokemonId={evo.name} />);
  }

  return (
    <>
      <Header />
      <div className="pokemon-cards-section">{numberOfEvolutions()}</div>
      <Footer />
    </>
  );
}

export default PokemonInfo;
