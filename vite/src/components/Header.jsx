import '../css/header.css'
import SearchBar from "../components/SearchBar.jsx"
function Header() {

    return (
        <>
            <div className="header-box">
                <div className="header-component">
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default Header
