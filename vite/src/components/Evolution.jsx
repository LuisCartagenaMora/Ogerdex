import Arrow from "../assets/arrow.svg";
import Sprite from "./Sprite.jsx";
function Evolution({ data }) {
  console.log("Evolution component");
  console.log(data);
  // return (
  //   <div className="poke-evo-section">
  //     {data?.evo.map((evo) => {
  //       {
  //         console.log(evo.sprite);
  //       }
  //       return (
  //         <div className="individual-pokemon">
  //           {evo.evolution_requirement === null ? (
  //             ""
  //           ) : (
  //             <div className="individual-pokemon">
  //               <div className="poke-lvl-req">
  //                 <img className="arrow" src={Arrow} />
  //                 {evo.evolution_requirement ?? "N/A"}
  //               </div>
  //               <div className="pokemon-evo-info">
  //                 <div className="poke-sprite">
  //                   {<img src={evo.sprite} /> ?? "N/A"}
  //                 </div>
  //                 <div className="poke-name-id">
  //                   {evo.name ?? "N/A"} #{evo.id ?? "N/A"}
  //                 </div>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  return (
    data?.evo.length > 1 && (
      <div className="poke-evo-section">
        {data?.evo.map((evo, index) => (
          <div key={index} className="individual-pokemon">
            {/* Only show arrow and requirement if not the first Pokémon */}
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
                <a
                  href={`/pokemon/view/${evo.name}}`}
                  style={{ color: "black" }}
                >
                  {evo.name}
                </a>{" "}
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
