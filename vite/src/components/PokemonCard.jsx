import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getPokemon from "../../node/Ogerpon.js";
import Sprite from "./Sprite.jsx";
import Type from "./Type.jsx";
import Ability from "./Ability.jsx";
import StatChart from "./StatChart.jsx";
import "../css/details.css";

import typeIcons from "../assets/typeIcons.jsx";

function borderColor(pokemonDetails) {
  const type1Color = typeIcons[pokemonDetails?.type[0]]?.color;
  return pokemonDetails?.type.length === 2
    ? linearGradient(type1Color, typeIcons[pokemonDetails?.type[1]]?.color)
    : `linear-gradient(${type1Color}, ${type1Color})`;
}

const linearGradient = (color1, color2) => {
  return `linear-gradient(${color1}, ${color2})`;
};

export default function PokemonCard({ pokemon, altPokemon }) {
  const [chartDetails, setChartDetails] = useState({
    labels: [],
    values: [],
  });

  // Use altPokemon if provided, otherwise fetch with useQuery
  const shouldUseAlt = !!altPokemon;
  const { data, error } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: () => getPokemon(pokemon),
    enabled: !shouldUseAlt, // Don't fetch if altPokemon is present
  });

  const displayData = data ?? altPokemon;

  useEffect(() => {
    if (displayData && displayData.stats) {
      setChartDetails({
        labels: Object.keys(displayData.stats),
        values: Object.values(displayData.stats),
      });
    }
  }, [displayData]);

  if (!displayData) return null;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div
        className="pokedex-background"
        style={{
          backgroundImage: borderColor(displayData),
        }}
      >
        <div className="details-card">
          <Sprite data={displayData} />
          <div className="pokemon-details-box">
            <div className="pokemon-name">{displayData?.name ?? "N/A"}</div>
            <Type data={displayData} />
            <Ability data={displayData} color={borderColor(displayData)} />
            <a
              className="pokemon-link"
              href={`/pokemon/view/${displayData?.id}`}
            >
              More about this pokemon
            </a>
          </div>
          <StatChart chartDetails={chartDetails} />
        </div>
      </div>
    </>
  );
}
