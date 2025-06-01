import goldStar from "../assets/star.png";

function Ability({ data }) {
  return (
    <div className="pokemon-abilities-section">
      <div className="pokemon-abilities-box">
        <div className="abilities-title">Abilities</div>
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
