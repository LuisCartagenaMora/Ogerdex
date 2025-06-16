import Arrow from "../assets/arrow.svg";
import Sprite from "./Sprite.jsx";
import React from "react";

function groupByEvolvesFrom(evolutions) {
  return Object.values(
    evolutions.reduce((acc, evo) => {
      acc[evo.evolves_from] = acc[evo.evolves_from] || [];
      acc[evo.evolves_from].push(evo);
      return acc;
    }, {})
  );
}

function Evolution({ data }) {
  const groupedEvo = groupByEvolvesFrom(data.evo);

  return (
    groupedEvo.length > 0 && (
      <div className="poke-evo-section">
        {groupedEvo.map((group, groupIdx) => (
          <div className="evo-group" key={groupIdx}>
            {group.map((evo, evoIdx) => (
              <div className="individual-pokemon" key={evo.id}>
                {/* Only show arrow and requirement if not the first group */}
                {groupIdx > 0 && (
                  <>
                    <div className="poke-lvl-req">
                      <img
                        className="arrow"
                        src={Arrow}
                        alt="evolution arrow"
                      />
                      {evo.evolution_requirement && (
                      <div className="poke-lvl-req">
                        {evo.evolution_requirement}
                      </div>
                    )}
                    </div>
                    
                  </>
                )}
                <div className="pokemon-evo-info">
                  <div className="poke-sprite">
                    <img src={evo.sprite} alt={`${evo.name} sprite`} />
                  </div>
                  <div className="poke-name-id">
                    <a
                      href={`/pokemon/view/${evo.id}`}
                      style={{ color: "black" }}
                    >
                      {evo.name}
                    </a>
                    #{evo.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  );
}

export default Evolution;
