import '../src/css/Welcome Page.css'
import '../src/css/searchbar.css'
import '../src/css/randombutton.css'
function App() {

  return (
    <>
      <div className="landing-page-container">
        <div className='title-card'>
          <h1 className='welcome-text'>
            WELCOME TO <span className='welcome-title'> OGERDEX
            </span>
          </h1>

          <div className='description-container'>
            <p className='app-description'>A place where you can find a pokemons information such as their type,
              the abilities they boast, and their individual stat spread plus their base total stats.
              Start by searching the pokemons name or their pokemon id. For example, start by searching
              "bulbasaur" or by its unique id "1".
            </p>
          </div>
          <input className='search-bar' placeholder='Type pokemons name/id'></input>
          <button className='random-button' onMo>RANDOM POKEMON</button>
        </div>

        {/* <div className='pokedex-shell'>
          <div className='pokedex-outer'>
            <div className='cyan-circle'></div>
            <div className='white-circle'></div>
            <div className='red-circle'></div>
            <div className='green-circle'></div>
            <div className='yellow-circle'></div>
            <div className='pokedex-inner'>
              <h1 className="pokedex-text">
                OGERDEX
              </h1>
            </div>
          </div>
        </div> */}
      </div >
    </>
  )
}

export default App
