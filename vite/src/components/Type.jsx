import typeIcons from "../assets/typeIcons.jsx";
import { useState, useEffect } from "react";

// ======================================
// Offensive Type Info

function getSuperEffectiveTypes(data) {
  const superEffective1 =
    data?.typeChart[0]?.damage_relations?.double_damage_to.map((type) => {
      return type.name;
    }) ?? [];

  const superEffective2 =
    data?.typeChart[1]?.damage_relations?.double_damage_to.map((type) => {
      return type.name;
    }) ?? [];

  return [superEffective1, superEffective2];
}

function getWeakDamageTo(data) {
  const weakDamageTo1 =
    data?.typeChart[0]?.damage_relations?.half_damage_to.map((type) => {
      return type.name;
    }) ?? [];

  const weakDamageTo2 =
    data?.typeChart[1]?.damage_relations?.half_damage_to.map((type) => {
      return type.name;
    }) ?? [];

  return [weakDamageTo1, weakDamageTo2];
}

function getNoDamageTo(data) {
  const NoDamageTo1 =
    data?.typeChart[0]?.damage_relations?.no_damage_to.map((type) => {
      return type.name;
    }) ?? [];

  const NoDamageTo2 =
    data?.typeChart[1]?.damage_relations?.no_damage_to.map((type) => {
      return type.name;
    }) ?? [];
  return [NoDamageTo1, NoDamageTo2];
}

// ======================================

// ======================================
// Defensive Type Info

function getWeakFrom(data) {
  console.log("weakness: ", data);
  const weaknesessInfo1 =
    data?.typeChart[0]?.damage_relations?.double_damage_from.map((type) => {
      return type.name;
    }) ?? [];

  const weaknesessInfo2 =
    data?.typeChart[1]?.damage_relations?.double_damage_from.map((type) => {
      return type.name;
    }) ?? [];

  return [...weaknesessInfo1, ...weaknesessInfo2];
}

function getResistFrom(data) {
  const resistsInfo1 =
    data?.typeChart[0]?.damage_relations?.half_damage_from.map((type) => {
      return type.name;
    }) ?? [];

  const resistsInfo2 =
    data?.typeChart[1]?.damage_relations?.half_damage_from.map((type) => {
      return type.name;
    }) ?? [];

  return [...resistsInfo1, ...resistsInfo2];
}

function getImmuneFrom(data) {
  const immuneInfo1 =
    data?.typeChart[0]?.damage_relations?.no_damage_from.map((type) => {
      return type.name;
    }) ?? [];

  const immuneInfo2 =
    data?.typeChart[1]?.damage_relations?.no_damage_from.map((type) => {
      return type.name;
    }) ?? [];

  return [...immuneInfo1, ...immuneInfo2];
}
// ======================================

function processDefensiveTypes(data) {
  const weakFrom = getWeakFrom(data);
  const resistFrom = getResistFrom(data);
  const immuneFrom = getImmuneFrom(data);

  // Remove immune types from weak and resist
  const filteredWeak = weakFrom
    .filter((type) => !resistFrom.includes(type))
    .filter((type) => !immuneFrom.includes(type));
  const filteredResist = resistFrom.filter(
    (type) => !immuneFrom.includes(type)
  );

  // Count occurrences for weaknesses (x2, x4, etc.)
  const weakCount = {};
  filteredWeak.forEach((type) => {
    weakCount[type] = (weakCount[type] || 0) + 1;
  });

  // Count occurrences for resistances (x0.5, x0.25, etc.)
  const resistCount = {};
  filteredResist.forEach((type) => {
    resistCount[type] = (resistCount[type] || 0) + 1;
  });

  // Build final objects with multipliers
  const finalWeak = {};
  Object.entries(weakCount).forEach(([type, count]) => {
    finalWeak[type] = `x${2 ** count}`; // 2^count (e.g., 2, 4)
  });

  const finalResist = {};
  Object.entries(resistCount).forEach(([type, count]) => {
    finalResist[type] = `x${0.5 ** count}`; // 0.5^count (e.g., 0.5, 0.25)
  });

  // Immune types are always x0
  const finalImmune = {};
  immuneFrom.forEach((type) => {
    finalImmune[type] = "x0";
  });

  return {
    weakFrom: finalWeak,
    resistantFrom: finalResist,
    immuneFrom: finalImmune,
  };
}

function Type({ data }) {
  const [typeInfo, setTypeInfo] = useState({
    superEffectiveTo: [],
    weakDamageTo: [],
    noDamageTo: [],
    weakFrom: {},
    resistantFrom: {},
    immuneFrom: {},
  });

  useEffect(() => {
    // Process defensive types
    const processed = processDefensiveTypes(data);

    setTypeInfo({
      superEffectiveTo: getSuperEffectiveTypes(data),
      weakDamageTo: getWeakDamageTo(data),
      noDamageTo: getNoDamageTo(data),
      weakFrom: processed.weakFrom,
      resistantFrom: processed.resistantFrom,
      immuneFrom: processed.immuneFrom,
    });
  }, [data]);

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
        <span className="type-description">
          <strong>Weak To:</strong>
          {typeInfo.weakFrom && Object.entries(typeInfo.weakFrom).length > 0 ? (
            <ul>
              {Object.entries(typeInfo.weakFrom).map(([type, multiplier]) => (
                <li
                  key={type}
                  className="individual-type"
                  style={{
                    backgroundColor: typeIcons[type]?.color,
                  }}
                >
                  {multiplier} {type}
                </li>
              ))}
            </ul>
          ) : (
            <span>None</span>
          )}

          <strong>Resistant To:</strong>
          {typeInfo.resistantFrom &&
          Object.entries(typeInfo.resistantFrom).length > 0 ? (
            <ul>
              {Object.entries(typeInfo.resistantFrom).map(
                ([type, multiplier]) => (
                  <li
                    key={type}
                    className="individual-type"
                    style={{
                      backgroundColor: typeIcons[type]?.color,
                    }}
                  >
                    {multiplier} {type}
                  </li>
                )
              )}
            </ul>
          ) : (
            <span>None</span>
          )}

          <strong>Immune To:</strong>
          {typeInfo.immuneFrom &&
          Object.entries(typeInfo.immuneFrom).length > 0 ? (
            <ul>
              {Object.entries(typeInfo.immuneFrom).map(([type, multiplier]) => (
                <li
                  key={type}
                  className="individual-type"
                  style={{
                    backgroundColor: typeIcons[type]?.color,
                  }}
                >
                  {multiplier} {type}
                </li>
              ))}
            </ul>
          ) : (
            <span>None</span>
          )}
        </span>
      </div>
    </>
  );
}

export default Type;
