import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPokemon from "../node/Ogerpon.js";
import "../src/css/details.css";

import typeIcons from "./assets/typeIcons.jsx";

function PokemonInfo() {
  const { pokemonId } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [chartDetails, setChartDetails] = useState({
    labels: [],
    values: [],
  });

  const types = Object.keys(typeIcons);
  const icons = Object.values(typeIcons);

  //   -------------------------------------------------------------------------------------------

  //   const x = types.findIndex(pokemonDetails?.type?.[0]);
  //   const typeKey = types.values(); // or pokemonDetails?.type?.[0]?.toLowerCase()
  //   const iconElement = typeIcons[typeKey];
  const x = types.forEach((type) => {
    return type == pokemonDetails?.type?.[0];
  });
  console.log(x);
  // ---------------------------------------------------------------------------------------------
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemon = await getPokemon(pokemonId);
        console.log(pokemon);
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

  if (!pokemonDetails) {
    return (
      <>
        <Header />
        <div className="details-box">Loading Pokémon data...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="details-card">
        {pokemonDetails.sprite && (
          <img
            className="pokemon-sprite"
            src={pokemonDetails.sprite}
            alt={`${pokemonDetails.name} sprite`}
          />
        )}
        <div className="pokemon-details-box">
          <div className="pokemon-name">{pokemonDetails.name ?? "N/A"}</div>
          <div className="pokemon-types-box">
            <div className="pokemon-primary-type">
              {console.log("THIS: " + pokemonDetails?.type?.[0])}
              {pokemonDetails?.type?.[0] ?? ""}
            </div>
            <div className="pokemon-secondary-type">
              {pokemonDetails?.type?.[1] ?? ""}
            </div>
          </div>

          <div className="pokemon-abilities-section">
            <div className="pokemon-regular-abilities-box">
              <span className="regular-abilities-title">Abilities</span>
              <ul className="pokemon-abilities">
                {pokemonDetails.ability.ability[1] == "none" ? (
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
                {<li>{pokemonDetails.ability?.hidden_ability}</li> ?? ""}
              </ul>
            </div>
          </div>
        </div>
        <BarChart
          className="stat-chart"
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
          height={300}
        />
      </div>
      <Footer />
    </>
  );
}

export default PokemonInfo;
