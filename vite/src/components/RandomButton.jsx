import { useNavigate } from "react-router-dom";
import { MAX_POKEMON } from "../config";
function RandomButton() {
  const navigate = useNavigate();

  async function handleClick() {
    // Gen 1 - 9
    const randNum = Math.floor(Math.random() * MAX_POKEMON);
    navigate("/pokemon/id/" + String(randNum));
  }
  return (
    <>
      <button className="random-button" onClick={handleClick}>
        RANDOM POKEMON
      </button>
    </>
  );
}

export default RandomButton;
