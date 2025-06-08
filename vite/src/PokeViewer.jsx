import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import getPokemon from "../node/Ogerpon";
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

function handleClick() {
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
    queryFn: () => getPokemon(pokemon),
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
      {console.log("DATA THING HERE")}
      {console.log(data)}
      <div>
        <Header />
        <div className="poke-char-section">
          <div className="poke-name-box">
            <div className="name-id">
              <h4>
                {data?.name} #{data?.id}
              </h4>
              <div className="genera">
                <h5>genera go here</h5>
              </div>
            </div>
          </div>
          <div className="poke-sprite-box">
            <button className="cry" onClick={handleClick}>
              <img src={CryIcon} alt="Cry Icon" />
            </button>
            <div className="sprites">
              <div className="norm-sprite">
                <Sprite data={data} />
              </div>
              <div className="shiny-sprite">
                <Sprite data={data} />
              </div>
            </div>
            <div className="flavor-text">
              Lorem Ipsuum or something go here (This is the flavor text)
            </div>
          </div>
          <div className="types">
            <Type data={data} />
          </div>
          <div className="abilities">
            <Ability data={data} />
          </div>
          <div className="poke-mass">
            <span>Height and Weight go here</span>
          </div>
          <div className="happines">
            <span>Happines go here</span>
          </div>
          <div className="egg-group">
            <span>Egg Group go here</span>
          </div>
          <div className="capture-rate">
            <span>Capture rate go here</span>
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
      </div>
    </>
  );
}

export default PokeViewer;
