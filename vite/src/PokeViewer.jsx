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
        {console.log(typeIcons[data?.type[0]]?.color)}
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
          <a className="cry" onClick={() => handleClick(data?.cry)}>
            <img src={CryIcon} alt="Cry Icon" />
          </a>
          <div className="poke-sprite-box">
            <div className="sprites">
              <Sprite data={data} />
            </div>
          </div>
          <div
            className="flavor-text-box"
            // style={{
            //   backgroundImage: borderColor(data),
            // }}
             style={{ backgroundColor: typeIcons[data?.type[0]]?.color }}
          >
            <div
              className="flavor-text"
            >
              "{data?.flavorText}"
            </div>
          </div>
        </div>
        <div className="poke-types-title">Types</div>
        <div className="types">
          <Type data={data} />
        </div>
        <div className="abilities">
          <Ability data={data} />
        </div>
        <div className="pokemon-detailed-info">
          <div className="poke-mass-section">
            <span className="poke-mass-title">Mass</span>
            <div className="poke-mass">
              <span>
                Height: {data?.mass[0]}, Weight: {data?.mass[1]}
              </span>
            </div>
          </div>
          <div className="poke-happiness-section">
            <span className="poke-happiness-title">Happiness</span>
          </div>
          <div className="poke-happiness">
            <span>{data?.baseHappines}</span>
          </div>
          <div className="poke-egg-group-section">
            <span className="poke-egg-group-title">Egg Group</span>
          </div>
          <div className="poke-egg-group">
            <span>{data?.eggGroup[0]?.name}, </span>
            <span>{data?.eggGroup[1]?.name}</span>
          </div>
          <div className="poke-capture-rate-section">
            <span className="poke-capture-rate-title">Capture Rate</span>
          </div>
          <div className="poke-capture-rate">
            <span>{data?.captureRate}</span>
          </div>
        </div>
      </div>

      <div className="poke-stats-box">
        <StatChart
          chartDetails={chartDetails}
          color={typeIcons[data?.type[0]]?.color}
        />
      </div>

      <div className="poke-evo-line">
        <Evolution data={data} />
      </div>
      <div className="poke-alt-forms">
        <AltForm forms={data.forms} />
      </div>

      <div className="poke-moves-box">
        <div className="move-name-title">Name</div>
        <div className="move-type-title">Type</div>
        <div className="move-damage-class-title">Damage Class</div>
        <div className="move-power-title">Power</div>
        <div className="move-accuracy-title">Accuracy</div>
        <div className="move-pp-title">PP</div>
        <div className="move-priority-title">Priority</div>
        <div className="move-effect-title">Effect</div>

        {data?.moves.map((move, i) => (
          <>
            <div className="move-name" style={{ gridRowStart: i + 2 }}>
              {move?.name}
            </div>
            <div
              className="move-type"
              style={{
                gridRowStart: i + 2,
                backgroundColor: typeIcons[move?.type]?.color || "#eee", // fallback color
              }}
            >
              {typeIcons[move?.type].icon}
              {move?.type}
            </div>
            <div className="move-damage-class" style={{ gridRowStart: i + 2 }}>
              {move?.damage_class}
            </div>
            <div className="move-power" style={{ gridRowStart: i + 2 }}>
              {move?.power ?? "-"}
            </div>
            <div className="move-accuracy" style={{ gridRowStart: i + 2 }}>
              {move?.accuracy ?? "-"}
            </div>
            <div className="move-pp" style={{ gridRowStart: i + 2 }}>
              {move?.pp}
            </div>
            <div className="move-priority" style={{ gridRowStart: i + 2 }}>
              {move?.priority ?? 0}
            </div>
            <div className="move-effect" style={{ gridRowStart: i + 2 }}>
              {move?.effect}
            </div>
          </>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default PokeViewer;
