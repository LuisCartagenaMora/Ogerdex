import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import getPokemon from "../../node/Ogerpon.js";
import LoadingIcon from "../components/LoadingIcon.jsx";
import Sprite from "./Sprite.jsx";
import Type from "./Type.jsx";
import Ability from "./Ability.jsx";
import StatChart from "./StatChart.jsx";
import Error from "./Error.jsx";
import "../css/details.css";
import typeIcons from "../assets/typeIcons.jsx";

function borderColor(pokemonDetails) {
  const type1Color = typeIcons[pokemonDetails?.type?.[0]]?.color;
  return pokemonDetails?.type?.length === 2
    ? linearGradient(type1Color, typeIcons[pokemonDetails?.type?.[1]]?.color)
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
  // const navigate = useNavigate();

  // If altPokemon is provided, use it directly. Otherwise, fetch with useQuery.
  const shouldUseAlt = !!altPokemon;
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: () => getPokemon(pokemon),
    enabled: !shouldUseAlt && !!pokemon, // Only fetch if altPokemon is not present and pokemon is provided
  });

  const displayData = shouldUseAlt ? altPokemon : data;

  useEffect(() => {
    if (displayData && displayData.stats) {
      setChartDetails({
        labels: Object.keys(displayData.stats),
        values: Object.values(displayData.stats),
      });
    }
  }, [displayData]);

  if (isLoading || !displayData) return <LoadingIcon />;
  if (error) return <Error error={"Pokemon Not Found"} />;

  return (
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
          <a className="pokemon-link" href={`/pokemon/view/${displayData?.id}`}>
            More about this pokemon
          </a>
        </div>
        <StatChart chartDetails={chartDetails} />
      </div>
    </div>
  );
}
