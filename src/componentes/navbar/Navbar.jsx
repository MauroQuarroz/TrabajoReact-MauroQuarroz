import Cartwidget from "../cartwidget/cartwidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header-pepe">
      <Link to="/">
        <img className="logo-nav" src="/LogoMarca.png" alt="logo de la marca." />
      </Link>
      <Link to="/">
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
      <Cartwidget />
    </header>
  );
};

export default Navbar;
