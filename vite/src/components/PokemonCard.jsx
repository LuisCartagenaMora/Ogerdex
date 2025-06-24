import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getPokemon from "../../node/Ogerpon.js";
import LoadingIcon from "../components/LoadingIcon.jsx";
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

export default function PokemonCard({ pokemonId }) {
  const [chartDetails, setChartDetails] = useState({
    labels: [],
    values: [],
  });

  const { data: pokemon, error } = useQuery({
    queryKey: ["pokemonId", pokemonId],
    queryFn: () => getPokemon(pokemonId),
  });

  useEffect(() => {
    if (pokemon && pokemon.stats) {
      setChartDetails({
        labels: Object.keys(pokemon.stats),
        values: Object.values(pokemon.stats),
      });
    }
  }, [pokemon]);

  if (!pokemon) return <LoadingIcon />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div
        className="pokedex-background"
        style={{
          backgroundImage: borderColor(pokemon),
        }}
      >
        <div className="details-card">
          <Sprite data={pokemon} />
          <div className="pokemon-details-box">
            <div className="pokemon-name">{pokemon?.name ?? "N/A"}</div>
            <Type data={pokemon} />
            <Ability data={pokemon} color={borderColor(pokemon)} />
            <a className="pokemon-link" href={`/pokemon/view/${pokemon?.id}`}>
              More about this pokemon
            </a>
          </div>
          <StatChart chartDetails={chartDetails} />
        </div>
      </div>
    </>
  );
}
