import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/error.css";

export default function Error({ error }) {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        navigate(-1);
        setShowMessage(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, navigate]);

  return (
    <div className="error-box">
      <img src="./assets/error_icon.svg" alt="Error icon" />
      <span>Error: </span>
      <span>{error}</span>
    </div>
  );
}
