import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getPokemonDetailed } from "../node/Ogerpon";
import Sprite from "./components/Sprite.jsx";
import Type from "./components/Type.jsx";
import Ability from "./components/Ability.jsx";
import StatChart from "./components/StatChart.jsx";
import LoadingIcon from "./components/LoadingIcon.jsx";
import typeIcons from "./assets/typeIcons.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./css/characteristics.css";
import CryIcon from "./assets/Speaker_Icon.svg";

function handleClick(cry) {
  let pokeCry = new Audio(cry);
  if (pokeCry !== undefined) pokeCry.play();
  console.log("Queue pokemon cry");
}

function PokeViewer() {
  const [chartDetails, setChartDetails] = useState({
    labels: [],
    values: [],
  });
  const { pokemonId, pokemonName } = useParams();
  const pokemon = pokemonId ?? pokemonName;

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: () => getPokemonDetailed(pokemon),
  });

  useEffect(() => {
    if (data && data.stats) {
      setChartDetails({
        labels: Object.keys(data.stats),
        values: Object.values(data.stats),
      });
    }
  }, [data]);

  if (isLoading) return <LoadingIcon />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <Header />
      <div className="pokeview">
        <div className="poke-char-section">
          <div className="poke-name-box">
            <div className="name-id">
              <h4>
                {data?.name} #{data?.id}
              </h4>
              <div className="genera">
                <h5>{data?.genera}</h5>
              </div>
            </div>
          </div>
          <div className="poke-sprite-box">
            <div className="sprites">
              <a className="cry" onClick={() => handleClick(data?.cry)}>
                <img src={CryIcon} alt="Cry Icon" />
              </a>

              <Sprite className="sprite" data={data} />
            </div>
            <div className="flavor-text">
              <span>{data?.flavorText}</span>
            </div>
          </div>
        </div>
        <div className="types">
          <Type data={data} />
        </div>
        <div className="abilities">
          <Ability data={data} />
        </div>
        <div className="poke-mass">
          <span>
            Height: {data?.mass[0]}, Weight: {data?.mass[1]}
          </span>
        </div>
        <div className="happines">
          <span>{data?.baseHappines}</span>
        </div>
        <div className="egg-group">
          <span>{data?.eggGroup[0]?.name}, </span>
          <span>{data?.eggGroup[1]?.name}</span>
        </div>
        <div className="capture-rate">
          <span>{data?.captureRate}</span>
        </div>
      </div>
      <div className="poke-stats-box">
        <StatChart
          chartDetails={chartDetails}
          color={typeIcons[data?.type[0]]?.color}
        />
      </div>
      <div className="poke-moves-box"></div>

      <Footer />
    </>
  );
}

export default PokeViewer;
