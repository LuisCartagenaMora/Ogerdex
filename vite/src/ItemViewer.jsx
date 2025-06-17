import { useQuery } from "@tanstack/react-query";
import LoadingIcon from "../src/components/LoadingIcon.jsx";
import { getItem } from "/node/Ogerpon.js";
import { useParams } from "react-router-dom";
import "../src/css/items.css";
export default function ItemViewer() {
  const { id } = useParams();
  const {
    data: itemData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getItem(id),
  });

  if (isLoading) return <LoadingIcon />;
  if (error) return <div>Item could not be found</div>;

  return (
    <>
      <div className="item-section">
        <div className="item-box">
          <div className="item-name">{itemData.name.replace("-", " ")}</div>
          <div className="item-sprite">
            <img src={itemData.sprites.default}></img>
          </div>
          <div className="item-effect">{itemData.effect_entries[0].effect}</div>
        </div>
      </div>

      <div className="pokemon-list-section">
        <div className="section-title">
          <span>Held by...</span>
        </div>
        <ul className="pokemon-list">
          {itemData.held_by_pokemon
            .filter(
              (poke) =>
                !poke.pokemon.name.includes("mega") &&
                !poke.pokemon.name.includes("gmax") &&
                !poke.pokemon.name.includes("alola") &&
                !poke.pokemon.name.includes("galar") &&
                !poke.pokemon.name.includes("hisui") &&
                !poke.pokemon.name.includes("paldea") &&
                !poke.pokemon.name.startsWith("pikachu-")
            )
            .map((poke) => (
              <li className="pokemon" key={poke.pokemon.name}>
                <a
                  href={`/pokemon/view/${poke.pokemon.url
                    .slice(34)
                    .replace("/", "")}`}
                >
                  {poke.pokemon.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
