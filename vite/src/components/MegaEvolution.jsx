import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard.jsx";
import { useQuery } from "@tanstack/react-query";
import { getAltPokemon } from "/node/Ogerpon.js";

export default function MegaEvolution({ megaEvo }) {
  const [chartDetails, setChartDetails] = useState({
    labels: [],
    values: [],
  });

  const { data: megaEvoData, error } = useQuery({
    queryKey: ["Mega Evolution", megaEvo.name],
    queryFn: () => getAltPokemon(megaEvo.id),
  });

  useEffect(() => {
    if (megaEvoData && megaEvoData.stats) {
      setChartDetails({
        labels: Object.keys(megaEvoData.stats),
        values: Object.values(megaEvoData.stats),
      });
    }
  }, [megaEvoData]);

  if (error) return <Error error={"Couldn't get Mega Evolution/s"} />;

  return (
    <div className="mega-evo">
      <h1>Mega Evolution</h1>

      <PokemonCard altPokemon={megaEvoData} />
    </div>
  );
}
