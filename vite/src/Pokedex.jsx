import PokemonInfo from "./PokemonInfo";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import { useParams } from "react-router-dom";

function Pokedex() {
  const { pokemonId } = useParams();
  return (
    <>
      <Header />
      <PokemonInfo pokemonId={pokemonId} />
      <Footer />
    </>
  );
}

export default Pokedex;
