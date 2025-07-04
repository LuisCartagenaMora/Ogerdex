import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Pokedex from "./Pokedex";
import PokeViewer from "./PokeViewer";
import ItemViewer from "./ItemViewer";

function PokeRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pokemon/random/:pokemonId" element={<Pokedex />} />
      <Route path="/pokemon/view/:pokemonId" element={<PokeViewer />} />
      <Route path="/pokemon/view/:pokemonName" element={<PokeViewer />} />
      <Route path="/item/:id" element={<ItemViewer />} />
    </Routes>
  );
}

export default PokeRouter;
