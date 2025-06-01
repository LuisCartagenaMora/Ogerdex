import loadingIcon from "../assets/unkown.gif";
import "../css/loading.css";
function LoadingIcon() {
  return (
    <div className="loading-icon">
      <img src={loadingIcon} />
      <span className="loading-text">Fetching Pokemon...</span>
    </div>
  );
}

export default LoadingIcon;
