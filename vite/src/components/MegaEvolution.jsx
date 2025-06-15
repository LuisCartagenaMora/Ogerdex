import { useState, useEffect } from "react";
import Sprite from "./Sprite.jsx";
import StatChart from "./StatChart.jsx";
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

  if (error) return <div>Error loading Mega Evolution data.</div>;
  if (!megaEvoData) return <div>Loading...</div>;

  return (
    <div className="mega-evo">
      <h1>Mega Evolution</h1>
      {console.log(megaEvoData)}
      <PokemonCard altPokemon={megaEvoData} />
    </div>

    // <>
    //   <div className="pokedex-background">
    //     <div className={"details-card"}>
    //       <Sprite data={megaEvoData} />
    //       <div className="pokemon-details-box">
    //         <div className="pokemon-name">{megaEvoData?.name ?? "N/A"}</div>
    //         <Type data={megaEvoData} />
    //         <Ability data={megaEvoData} />
    //         <a
    //           className="pokemon-link"
    //           href={`/pokemon/view/${megaEvoData?.id}`}
    //         >
    //           More about this pokemon
    //         </a>
    //       </div>
    //       <StatChart chartDetails={chartDetails} />
    //     </div>
    //   </div>
    // </>
  );
}
