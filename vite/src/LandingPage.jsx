import "../src/css/Welcome Page.css";
import "../src/css/searchbar.css";
import "../src/css/randombutton.css";
import RandomButton from "../src/components/RandomButton.jsx";
import SearchBar from "../src/components/SearchBar.jsx";
function LandingPage() {
  return (
    <>
      <div className="landing-page-container">
        <div className="title-card">
          <h1 className="welcome-text">
            WELCOME TO <span className="welcome-title"> OGERDEX</span>
          </h1>

          <div className="description-container">
            <p className="app-description">
              A place where you can find a pokemons information such as their
              type, the abilities they boast, and their individual stat spread
              plus their base total stats. Start by searching the pokemons name
              or their pokemon id. For example, start by searching "bulbasaur"
              or by its unique id "1".
            </p>
          </div>
          <SearchBar />
          <RandomButton />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
