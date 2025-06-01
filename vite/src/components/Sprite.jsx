function Sprite({ data }) {
  return (
    data?.sprite && (
      <div className="sprite-box">
        <img
          className="pokemon-sprite"
          src={data?.sprite}
          alt={`${data?.name} sprite`}
        />
      </div>
    )
  );
}

export default Sprite;
