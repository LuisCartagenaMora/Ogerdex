import Arrow from "../assets/arrow.svg";
import Sprite from "./Sprite.jsx";
function Evolution({ data }) {
  return (
    data?.evo.length > 1 && (
      <div className="poke-evo-section">
        {data?.evo.map((evo, index) => (
          <div key={index} className="individual-pokemon">
            {index > 0 && (
              <div className="poke-lvl-req">
                {evo.evolution_requirement && (
                  <>
                    <img className="arrow" src={Arrow} alt="evolution arrow" />
                    {evo.evolution_requirement}
                  </>
                )}
              </div>
            )}
            <div className="pokemon-evo-info">
              <div className="poke-sprite">
                <img src={evo.sprite} alt={`${evo.name} sprite`} />
              </div>
              <div className="poke-name-id">
                <a href={`/pokemon/view/${evo.id}`} style={{ color: "black" }}>
                  {evo.name}
                </a>
                #{evo.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default Evolution;
