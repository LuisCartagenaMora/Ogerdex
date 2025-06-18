import goldStar from "../assets/star.png";

function Ability({ data, color }) {
  return (
    <div className="pokemon-abilities-section">
      <div className="pokemon-abilities-box">
        <div className="abilities-title" style={{ backgroundColor: color }}>
          Abilities
        </div>
        <ul className="pokemon-abilities">
          {data?.ability?.ability[1] === "none" ? (
            <li>
              {data?.ability?.ability[0]?.name}
              <span
                className="ability-description"
                style={{ borderColor: color }}
              >
                {data?.ability?.ability[0]?.description ??
                  "Ability description couldn't be fetched"}
              </span>
            </li>
          ) : (
            <>
              <li className="ability">
                {data?.ability?.ability[0]?.name ?? ""}
                <span
                  className="ability-description"
                  style={{ borderColor: color }}
                >
                  {data?.ability?.ability[0]?.description ??
                    "Ability description couldn't be fetched"}
                </span>
              </li>
              <li className="ability">
                {data?.ability?.ability[1]?.name ?? ""}
                <span
                  className="ability-description"
                  style={{ borderColor: color }}
                >
                  {data?.ability?.ability[1]?.description ??
                    "Ability description couldn't be fetched"}
                </span>
              </li>
              {data?.ability?.hidden_ability && (
                <li className="ability">
                  <img
                    className="hidden-ability-icon"
                    src={goldStar}
                    alt="Hidden Ability"
                  />
                  {data?.ability?.hidden_ability?.name ?? ""}
                  <span
                    className="ability-description"
                    style={{ borderColor: color }}
                  >
                    {data?.ability?.hidden_ability?.description ??
                      "Ability description couldn't be fetched"}
                  </span>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Ability;
