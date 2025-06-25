import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/error.css";
import ErrorIcon from "../assets/error_icon.svg";

export default function Error({ error }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        navigate(-1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, navigate]);

  return (
    <div className="error-box">
      <img src={ErrorIcon} alt="Error icon" />
      <span>Error: </span>
      <span>{error}</span>
    </div>
  );
}
