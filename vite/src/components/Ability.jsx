import goldStar from "../assets/star.png";

function Ability({ data, color }) {

  return (
    <div className="pokemon-abilities-section">
      <div className="pokemon-abilities-box">
        <div
          className="abilities-title"
          // Uncomment to include gradient in Abilities title
          // style={{
          //   backgroundImage: color,
          // }}
        >
          Abilities
        </div>
        <ul className="pokemon-abilities">
          {data?.ability?.ability[1] == "none" ? (
            <li>{data?.ability?.ability[0]}</li>
          ) : (
            <>
              <li>{data?.ability?.ability[0] ?? ""}</li>
              <li>{data?.ability?.ability[1] ?? ""}</li>

              <li>
                <img className="hidden-ability-icon" src={goldStar} />
                {data?.ability?.hidden_ability ?? ""}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Ability;
