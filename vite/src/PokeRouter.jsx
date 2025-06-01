import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Pokedex from "./Pokedex";
import PokemonInfo from "./PokemonInfo";

function PokeRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pokemon/id/:pokemonId" element={<Pokedex />} />
      {/* <Route path="/pokemon/name/:pokemonName" element={<PokemonInfo />} /> */}
    </Routes>
  );
}

export default PokeRouter;
