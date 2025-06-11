function Evolution({ data }) {
  console.log("Evolution component");
  console.log(data);
  return (
    <div className="poke-evo-section">
      <div className="pokemon-evo">{data?.evo.map((evo) => {
        return evo.name
      })}</div>
    </div>
  );
}

export default Evolution;
