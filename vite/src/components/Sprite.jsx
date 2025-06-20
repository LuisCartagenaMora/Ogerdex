import { useState } from "react";

function toggleImages(state, data) {
  if (state === true) {
    return (
      <div className="pokemon-sprite">
        <img src={data?.sprite[0]} alt={`${data?.name} sprite`} />
      </div>
    );
  } else {
    return (
      <div className="pokemon-sprite">
        <img src={data?.sprite[1]} alt={`${data?.name} sprite`} />
      </div>
    );
  }
}

function Sprite({ data }) {
  const [toggle, setToggle] = useState(true);
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
