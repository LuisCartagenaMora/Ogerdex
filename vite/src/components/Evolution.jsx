import Arrow from "../assets/arrow.svg";
import Sprite from "./Sprite.jsx";
function Evolution({ data }) {
  console.log("Evolution component");
  console.log(data);
  return (
    <div className="poke-evo-section">
      {data?.evo.map((evo) => {
        {
          console.log(evo.sprite);
        }
        return (
          <div>
            {evo.evolution_requirement === null ? (
              ""
            ) : (
              <div className="poke-lvl-req">
                <img className="arrow" src={Arrow} />
                {evo.evolution_requirement ?? "N/A"}
              </div>
            )}
            <div className="pokemon-evo">
              <div className="poke-sprite">
                {<img src={evo.sprite} /> ?? "N/A"}
              </div>
              <div className="poke-name-id">
                {evo.name ?? "N/A"} #{evo.id ?? "N/A"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Evolution;
