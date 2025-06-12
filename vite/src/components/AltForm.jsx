import Sprite from "./Sprite.jsx";
function AltForm({ data }) {
  //Search for the pokemon alternate form ie hisuain, galarian, etc..
  console.log("ALTFORM DATA");
  console.log(data?.forms);
  data?.forms.map((form) => {
    return (
      <div className="poke-form-section">
        {true ? (
          // Render something if isMega is true
          <div className="poke-mega-evo">
            <div classname="mega-sprite">
              <Sprite data={data} />
            </div>
            <div className="mega-name-id">
              {data?.name} #{data?.id}
            </div>
          </div>
        ) : (
          // Render something else if isMega is false
          <div className="poke-gmax">
            <div classname="gmax-sprite">
              <Sprite data={data} />
            </div>
            <div className="gmax-name-id">
              {data?.name} #{data?.id}
            </div>
          </div>
        )}
      </div>
    );
  });
}

export default AltForm;
