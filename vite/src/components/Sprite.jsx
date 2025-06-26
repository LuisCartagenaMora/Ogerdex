import { useState } from "react";
import "../css/loading.css";
import PokeBallGIF from "../assets/pokeball.gif";

function toggleImages(state, data) {
  const imgStyle = {
    width: "auto",
    maxWidth: "200px",
    height: "auto",
    imageRendering: "pixelated",
    display: "block",
    margin: "0 auto",
  };

  if (state === true) {
    return (
      <div>
        <img
          src={data?.sprite[0]}
          alt={`${data?.name} sprite`}
          style={imgStyle}
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={data?.sprite[1]}
          alt={`${data?.name} sprite`}
          style={imgStyle}
        />
      </div>
    );
  }
}

function Sprite({ data }) {
  const [toggle, setToggle] = useState(true);

  if (!data) {
    return (
      <div className="sprite-box">
        <img className="pokeball-gif" src={PokeBallGIF} alt="Loading..." />
      </div>
    );
  }

  return (
    <div
      className="sprite-box"
      onClick={() => setToggle((prev) => !prev)}
      style={{ cursor: "pointer" }}
    >
      {toggleImages(toggle, data)}
    </div>
  );
}

export default Sprite;
