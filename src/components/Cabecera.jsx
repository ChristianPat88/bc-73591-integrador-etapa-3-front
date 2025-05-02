import './Cabecera.scss'
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"

const Cabecera = () => {
    return (
        <header className="main-header">
            <input type="checkbox" id="menu" />

            <NavBar />

            <SearchBar />


        </header>
    )
}

export default Cabecera