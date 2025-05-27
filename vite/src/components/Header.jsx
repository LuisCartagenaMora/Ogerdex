import '../css/header.css'
import SearchBar from "../components/SearchBar.jsx"
import RandomButton from "../components/RandomButton.jsx"
function Header() {

    return (
        <>
            <div className="header-box">
                <div className="header-component">
                    <SearchBar />
                    <RandomButton />
                </div>
            </div>
        </>
    )
}

export default Header
