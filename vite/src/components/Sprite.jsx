import { useState } from "react";

function toggleImages(state, data) {
  const isBaby = data?.isBaby;
  const imgStyle = {
    width: isBaby ? "70px" : "120px", // Baby Pokémon are smaller
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
    return null; // or just return null
  }
  return (
    data?.sprite && (
      <div
        className="sprite-box"
        onClick={() => {
          setToggle(toggle ? false : true);
        }}
      >
        {toggleImages(toggle, data)}
      </div>
    )
  );
}

export default Sprite;
