import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import PokemonInfo from "./PokemonInfo";

function PokeRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pokemon/id/:pokemonId" element={<PokemonInfo />} />
      {/* <Route path="/pokemon/name/:pokemonName" element={<PokemonInfo />} /> */}
    </Routes>
  );
}

export default PokeRouter;
