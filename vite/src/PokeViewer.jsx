import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getPokemonDetailed } from "../node/Ogerpon";
import Sprite from "./components/Sprite.jsx";
import Type from "./components/Type.jsx";
import Ability from "./components/Ability.jsx";
import Evolution from "./components/Evolution.jsx";
import AltForm from "./components/AltForm.jsx";
import StatChart from "./components/StatChart.jsx";
import MoveList from "./components/MoveList.jsx";
import LoadingIcon from "./components/LoadingIcon.jsx";
import typeIcons from "./assets/typeIcons.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./css/characteristics.css";
import CryIcon from "./assets/Speaker_Icon.svg";

function borderColor(pokemonDetails) {
  const type1Color = typeIcons[pokemonDetails?.type[0]]?.color;
  return pokemonDetails?.type.length === 2
    ? linearGradient(type1Color, typeIcons[pokemonDetails?.type[1]]?.color)
    : `linear-gradient(${type1Color}, ${type1Color})`;
}

const linearGradient = (color1, color2) => {
  return `linear-gradient(${color1}, ${color2})`;
};

function handleClick(cry) {
  let pokeCry = new Audio(cry);
  pokeCry.volume = 0.4; //Seems right to me
  if (pokeCry !== undefined) pokeCry.play();
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
          <div
            className="poke-name-box"
            // style={{
            //   backgroundImage: borderColor(data),
            // }}
            style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            <div className="name-id">
              <h4>
                {data?.name} #{data?.id}
              </h4>
              <div className="genera">
                <h5>{data?.genera}</h5>
              </div>
            </div>
          </div>
          <div className="cry-text-box">
            <a className="cry" onClick={() => handleClick(data?.cry)}>
              <img src={CryIcon} alt="Cry Icon" />
            </a>
          </div>

          <div className="poke-sprite-box">
            <div className="sprites">
              <Sprite data={data} />
              <span
                style={{
                  textTransform: "none",
                  fontStyle: "italic",
                  color: "grey",
                }}
              >
                Click sprite for Shiny Version.
              </span>
            </div>
          </div>
          <div
            className="flavor-text-box"
            // style={{
            //   backgroundImage: borderColor(data),
            // }}
            style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            <div className="flavor-text">"{data?.flavorText}"</div>
          </div>
        </div>

        <div className="pokemon-basic-info">
          <div className="pokemon-type-section">
         
            <div
              className="poke-types-title"
              style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
            >
              Type
            </div>
            <div className="types">
              <Type data={data} />
            </div>
          </div>
          <div className="pokemon-ability-section">
            <div className="abilities">
              <Ability data={data} color={typeIcons[data?.type[0]]?.color} />
            </div>
          </div>
        </div>
      </div>

      <div className="pokemon-detailed-info">
        <div className="poke-mass-section">
          <span
            className="poke-mass-title"
            style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            Mass
          </span>
          <div className="poke-mass">
            <span>Height: {data?.mass[0]}</span>
            <span>Weight: {data?.mass[1]}</span>
          </div>
        </div>

        <div className="poke-happiness-section">
          <span
            className="poke-happiness-title"
            style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            Happiness
          </span>
          <div className="poke-happiness">
            <span>{data?.baseHappines || "N/A"}</span>
          </div>
        </div>

        <div className="poke-egg-group-section">
          <span
            className="poke-egg-group-title"
            style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            Egg Group
          </span>
          <div className="poke-egg-group">
            <span>{data?.eggGroup[0]?.name}</span>
            {data?.eggGroup[1] ? <span>{data?.eggGroup[1]?.name}</span> : ""}
          </div>
        </div>

        <div className="poke-egg-cycle-section">
          <span
            className="poke-egg-cycle-title"
            style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            Egg Cycle
          </span>
          <div className="poke-egg-cycle">
            <span>{data?.eggCycle}</span>
          </div>
        </div>

        <div className="poke-capture-rate-section">
          <span
            className="poke-capture-rate-title"
            style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            Capture Rate
          </span>
          <div className="poke-capture-rate">
            <span>{data?.captureRate}</span>
          </div>
        </div>

        <div className="poke-held-items-section">
          <span
            className="poke-held-items-title"
            style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            Held Items
          </span>
          <div className="poke-held-items">
            {data?.heldItems && data.heldItems.length > 0 ? (
              data.heldItems.map((item) => (
                <div className="held-item" key={item.name}>
                  <a href={`/item/${item.url.slice(30).replace("/", "")}`}>
                    {item?.name.replace("-", " ")}
                  </a>
                  <span> ({item.chance}%)</span>
                </div>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
      </div>

      <div className="poke-stats-box">
        <StatChart chartDetails={chartDetails} />
      </div>

      <div className="poke-evo-line">
        <Evolution data={data} />
      </div>
      <div className="poke-alt-forms">
     
        <AltForm forms={data.forms} />
      </div>

      <MoveList moves={data?.moves} />

      <Footer />
    </>
  );
}

export default PokeViewer;
