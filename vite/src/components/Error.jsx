import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/error.css";
import SurprisedImage from "../assets/pikachu.jpeg"
import ErrorIcon from "../assets/error_icon.svg"


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
      
      <img src={SurprisedImage} className="surprise-img" alt="Surprised Pikachu"/>

<div className="error"><img src={ErrorIcon} className="icon-img" alt="Error icon" /><span className="error-text">{error}</span></div>
      
      <span >Navigating to previous page...</span>
    </div>
   
    
  );
}
