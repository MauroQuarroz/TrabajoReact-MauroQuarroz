import "./Cartwidget.css"
import { Link } from "react-router-dom"

const Cartwidget = () => {


  
  return (
    <>
    <Link to="/cart">

    <img  className="carritoimg" src="/CarritoDeCompra.png" alt="imagen de carrito de compra" />
 
    </Link>
    </>
  )
}

export default Cartwidget




