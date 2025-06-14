import { useState, useEffect } from "react";
import Sprite from "./Sprite.jsx";
import StatChart from "./StatChart.jsx";
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

  if (error) return <div>Error loading Mega Evolution data.</div>;
  if (!megaEvoData) return <div>Loading...</div>;

  return (
    <div className="poke-mega-evo">
      <h1>Mega Evolution</h1>
      <div className="sprites">
        {/* <img src={megaEvoData.sprite[0]} alt={`${megaEvoData.name} sprite`} /> */}
        <Sprite data={megaEvoData} />
      </div>
      <a className="mega-name-id" href={`/pokemon/view/${megaEvo.id}`}>
        {megaEvo.name} #{megaEvo.id}
      </a>
      <div className="mega-stats">
        <StatChart chartDetails={chartDetails} />
      </div>
    </div>
  );
}
