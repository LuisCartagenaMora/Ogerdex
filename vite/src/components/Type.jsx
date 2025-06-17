import typeIcons from "../assets/typeIcons.jsx";

function Type({ data }) {
  return (
    <>
      <span className="poke-types-title">Types</span>
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
      </div>
    </>
  );
}

export default Type;
