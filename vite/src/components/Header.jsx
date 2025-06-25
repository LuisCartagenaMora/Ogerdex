import "../css/header.css";
import SearchBar from "../components/SearchBar.jsx";
import RandomButton from "../components/RandomButton.jsx";
import ReturnButton from "../components/ReturnButton.jsx";
function Header() {
  return (
    <>
      <div className="header-box">
        <div className="header-component">
          <ReturnButton />
          <SearchBar />
          <RandomButton />
        </div>
      </div>
    </>
  );
}

export default Header;
