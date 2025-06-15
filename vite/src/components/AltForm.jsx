import { getAltPokemon } from "/node/Ogerpon.js";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import MegaEvolution from "./MegaEvolution.jsx";
import GmaxForm from "./GmaxForm.jsx";

function AltForm({ forms }) {
  return forms.map((form) => (
    <div className="poke-form-section" key={form.name}>
      {form.isMega && <MegaEvolution megaEvo={form} />}
      {form.isGmax && <GmaxForm gMax={form} />}
    </div>
  ));
}

export default AltForm;
