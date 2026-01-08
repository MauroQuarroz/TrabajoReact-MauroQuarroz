import Cartwidget from "../cartwidget/cartwidget"
import CarritoDeCompra from "../../assets/LogoMarca.png";
import "./navbar.css"

const Navbar = () => {
  return (
    <header>
      
<img className = "logo" src={CarritoDeCompra} alt="logo de la marca." />
<h1>Pepe electrodomésticos</h1>
<nav>
  <ul>
    <li>Hogar</li>
    <li>Entretenimiento</li>
    <li>Herramientas</li>
    <li>Tecnología</li>
    </ul>
</nav>
<Cartwidget/>

    </header>
  )
}

export default Navbar