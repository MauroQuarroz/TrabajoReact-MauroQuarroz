import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"

const Navbar = () => {

const {cantidadTotal} = useContext(CarritoContext)


  return (
    <header className="header-pepe">
      <Link  to="/">
        <img className="logo-nav" src="/LogoMarca.png" alt="logo de la marca." />
      </Link>
      <Link className="linktitulo" to="/">
        <h1>Pepe electrodomésticos</h1>
      </Link>

      <nav>
        <ul>
          <li><Link to="/categoria/hogar">hogar</Link></li>
          <li><Link to="/categoria/entretenimiento">entretenimiento</Link></li>
          <li><Link to="/categoria/herramientas">herramientas</Link></li>
          <li><Link to="/categoria/tecnologia">tecnologia</Link></li>
        </ul>
      </nav>
      <Link className="linknumero" to="/cart">{cantidadTotal > 0 && <strong className="numero"> {cantidadTotal} </strong>  }</Link><Cartwidget/>
      
    </header>
  );
};

export default Navbar;
