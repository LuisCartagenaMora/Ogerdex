import typeIcons from "../assets/typeIcons.jsx";

function Type({ data }) {
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
          {"Add data here" ?? "Type description couldn't be obtained."}
          {/* Display here the typeChart for the pokemon's type or combination of types. use data?.typeChart */}
        </span>
      </div>
    </>
  );
}

export default Type;
