import { useQuery } from "@tanstack/react-query";
import { getAltPokemon } from "/node/Ogerpon.js";
import Sprite from "./Sprite.jsx";
export default function GmaxForm({ gMax }) {
  const { data: gMaxData, error } = useQuery({
    queryKey: ["Mega Evolution", gMax.name],
    queryFn: () => getAltPokemon(gMax.id),
  });

  if (error) "A new error was found!";

  return (
    <div className="poke-gmax">
      <h1>Gigantamax Form</h1>
      <div classname="gmax-sprite">
        {/* <img src={gMaxData?.sprite[0]} alt={`${gMax.name} sprite`} /> */}
        <Sprite data={gMaxData} />
      </div>
      <div className="gmax-name-id">{gMax.name}</div>
    </div>
  );
}
