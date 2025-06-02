import PokemonInfo from "./PokemonInfo";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import { useParams } from "react-router-dom";

function Pokedex() {
  const { pokemonId, pokemonName } = useParams();
  const pokemon = pokemonId ?? pokemonName;
  return (
    <>
      <Header />
      <PokemonInfo pokemon={pokemon} />
      <Footer />
    </>
  );
}

export default Pokedex;
