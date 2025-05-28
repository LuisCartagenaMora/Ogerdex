import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import getPokemon from "../../node/Ogerpon.js";
import StatChart from "./StatChart.jsx";
import "../css/details.css";

import typeIcons from "../assets/typeIcons.jsx";
import { maxWidth } from "@mui/system";

function borderColor(pokemonDetails) {
  const type1Color = typeIcons[pokemonDetails?.type[0]]?.color;
  return pokemonDetails?.type.length === 2
    ? linearGradient(type1Color, typeIcons[pokemonDetails?.type[1]]?.color)
    : `linear-gradient(${type1Color}, ${type1Color})`;
}

const linearGradient = (color1, color2) => {
  return `linear-gradient(${color1}, ${color2})`;
};

function PokemonCard({ pokemonId, selected }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [chartDetails, setChartDetails] = useState({
    labels: [],
    values: [],
  });

  useEffect(() => {
    async function fetchPokemon() {
      try {
        if (!pokemonId) return;
        const pokemon = await getPokemon(pokemonId);
        setPokemonDetails(pokemon);
        const statLabels = Object.keys(pokemon.stats);
        const values = Object.values(pokemon.stats);
        setChartDetails({ labels: statLabels, values: values });
      } catch (e) {
        console.error("Failed to fetch Pokémon:", e);
      }
    }
    fetchPokemon();
  }, [pokemonId]);

  return (
    <>
      {console.log(pokemonDetails?.type.length < 2)}
      <div
        className="pokedex-background"
        style={{
          backgroundImage: borderColor(pokemonDetails),
        }}
      >
        <div className={"details-card" + selected}>
          {pokemonDetails?.sprite && (
            <img
              className="pokemon-sprite"
              src={pokemonDetails?.sprite}
              alt={`${pokemonDetails?.name} sprite`}
            />
          )}
          <div className="pokemon-details-box">
            <div className="pokemon-name">{pokemonDetails?.name ?? "N/A"}</div>
            <div className="pokemon-types-box">
              <div
                className="pokemon-primary-type"
                style={{
                  backgroundColor: typeIcons[pokemonDetails?.type?.[0]]?.color,
                }}
              >
                {typeIcons[pokemonDetails?.type?.[0]]?.icon}
                {pokemonDetails?.type?.[0] ?? ""}
              </div>
              <div
                className="pokemon-secondary-type"
                style={{
                  backgroundColor: typeIcons[pokemonDetails?.type?.[1]]?.color,
                }}
              >
                {typeIcons[pokemonDetails?.type?.[1]]?.icon}
                {pokemonDetails?.type?.[1] ?? ""}
              </div>
            </div>

            <div className="pokemon-abilities-section">
              <div className="pokemon-regular-abilities-box">
                <span className="regular-abilities-title">Abilities</span>
                <ul className="pokemon-abilities">
                  {pokemonDetails?.ability?.ability[1] == "none" ? (
                    <li>{pokemonDetails?.ability?.ability[0]}</li>
                  ) : (
                    <>
                      <li>{pokemonDetails?.ability?.ability[0]}</li>
                      <li>{pokemonDetails?.ability?.ability[1]}</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="pokemon-hidden-abilities-box">
                <span className="hidden-abilities-title">Hidden Ability</span>
                <ul className="pokemon-hidden-abilities">
                  {<li>{pokemonDetails?.ability?.hidden_ability}</li> ?? ""}
                </ul>
              </div>
            </div>
          </div>
          <StatChart
            chartDetails={chartDetails}
            color={typeIcons[pokemonDetails?.type[0]]?.color}
          />
          {/* <div className="stat-chart">
            <BarChart
              layout="horizontal"
              yAxis={[
                {
                  id: "stats",
                  data: chartDetails.labels,
                  scaleType: "band",
                },
              ]}
              xAxis={[
                {
                  id: "values",
                  scaleType: "linear",
                  hide: true,
                },
              ]}
              series={[
                {
                  data: chartDetails.values,
                  color: "#3b82f6",
                  valueFormatter: (value) => `${value}`,
                },
              ]}
              height={250}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
