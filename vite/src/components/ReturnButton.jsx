import { useNavigate } from "react-router-dom";
import "../css/returnbutton.css";

export default function ReturnButton() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="return-button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Return
      </button>
    </div>
  );
}
