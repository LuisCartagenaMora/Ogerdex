import typeIcons from "../assets/typeIcons.jsx";
import { useState } from "react";

function getSuperEffectiveTypes(data) {
  return (
    data?.typeChart[0]?.damage_relations?.double_damage_to.map((type) => {
      return type.name;
    }) ?? "Type description couldn't be obtained."
  );
}

function getWeakAgainstTypes(data) {
  const weaknesessInfo1 =
    data?.typeChart[0]?.damage_relations?.double_damage_from.map((type) => {
      return type.name;
    }) ?? [];

  const weaknesessInfo2 =
    data?.typeChart[1]?.damage_relations?.double_damage_from.map((type) => {
      return type.name;
    }) ?? [];

  console.log(weaknesessInfo1);
  console.log(weaknesessInfo2);
}

function Type({ data }) {
  const [typeInfo, setTypeInfo] = useState({
    superEffective: [],
  });
  return (
    <>
      <div className="pokemon-types-box">
        <div
          className="pokemon-primary-type"
          style={{
            backgroundColor: typeIcons[data?.type?.[0]]?.color,
          }}
        >
          {typeIcons[data?.type?.[0]]?.icon}
          {data?.type?.[0] ?? ""}
        </div>
        <div
          className="pokemon-secondary-type"
          style={{
            backgroundColor: typeIcons[data?.type?.[1]]?.color,
          }}
        >
          {typeIcons[data?.type?.[1]]?.icon}
          {data?.type?.[1] ?? ""}
        </div>
        {console.log(data?.typeChart)}
        <span className="type-description">
          {"Super Effective: " + getSuperEffectiveTypes(data).join(", ")}
          {"\nWeak Against: " + getWeakAgainstTypes(data).join(", ")}

          {/* Display here the typeChart for the pokemon's type or combination of types. use data?.typeChart */}
        </span>
      </div>
    </>
  );
}

export default Type;
