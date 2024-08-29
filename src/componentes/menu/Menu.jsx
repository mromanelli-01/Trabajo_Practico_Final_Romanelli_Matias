import { Link } from "react-router-dom"
import './Menu.css'; 
const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/bebidas"> Whisky </Link></li>
                <li><Link to="/login"> Iniciar Sesión </Link></li>
                <li><Link to="/registro"> Registrarse </Link></li>

                
            </ul>



        </nav>
    )
}

export default Menu;