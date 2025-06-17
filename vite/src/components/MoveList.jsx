import typeIcons from "/src/assets/typeIcons.jsx";
import "/src/css/characteristics.css";
export default function MoveList({ moves }) {
  return (
    <div className="poke-moves-box">
      <div className="move-name-title">Name</div>
      <div className="move-type-title">Type</div>
      <div className="move-damage-class-title">Damage Class</div>
      <div className="move-power-title">Power</div>
      <div className="move-accuracy-title">Accuracy</div>
      <div className="move-pp-title">PP</div>
      <div className="move-priority-title">Priority</div>
      <div className="move-effect-title">Effect</div>

      {moves.map((move, i) => (
        <>
          <div className="move-name" style={{ gridRowStart: i + 2 }}>
            {move?.name}
          </div>
          <div
            className="move-type"
            style={{
              gridRowStart: i + 2,
              backgroundColor: typeIcons[move?.type]?.color || "#eee", // fallback color
            }}
          >
            {typeIcons[move?.type].icon}
            {move?.type}
          </div>
          <div className="move-damage-class" style={{ gridRowStart: i + 2 }}>
            {move?.damage_class}
          </div>
          <div className="move-power" style={{ gridRowStart: i + 2 }}>
            {move?.power ?? "-"}
          </div>
          <div className="move-accuracy" style={{ gridRowStart: i + 2 }}>
            {move?.accuracy ?? "-"}
          </div>
          <div className="move-pp" style={{ gridRowStart: i + 2 }}>
            {move?.pp}
          </div>
          <div className="move-priority" style={{ gridRowStart: i + 2 }}>
            {move?.priority ?? 0}
          </div>
          <div className="move-effect" style={{ gridRowStart: i + 2 }}>
            {move?.effect ?? "N/A"}
          </div>
        </>
      ))}
    </div>
  );
}
