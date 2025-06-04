import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {getAltPokemon} from "../../node/Ogerpon.js";
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

function AltPokemonCard({ url}) {
  const [chartDetails, setChartDetails] = useState({
    labels: [],
    values: [],
  });

  const { data, error } = useQuery({
    queryKey: ["pokemon", url.slice(34).replace("/","")],
    queryFn: () => getAltPokemon(url),
  });

  useEffect(() => {
    if (data && data.stats) {
      setChartDetails({
        labels: Object.keys(data.stats),
        values: Object.values(data.stats),
      });
    }
  }, [data]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div
        className="pokedex-background"
        style={{
          backgroundImage: borderColor(data),
        }}
      >
        <div className={"details-card"}>
          <Sprite data={data} />
          <div className="pokemon-details-box">
            <div className="pokemon-name">{data?.name ?? "N/A"}</div>
            <Type data={data} />
            <Ability data={data} />
          </div>
          <StatChart
            chartDetails={chartDetails}
            color={typeIcons[data?.type[0]]?.color}
          />
        </div>
      </div>
    </>
  );
}

export default AltPokemonCard;
