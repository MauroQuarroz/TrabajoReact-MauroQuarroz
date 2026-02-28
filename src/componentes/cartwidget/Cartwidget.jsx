import "./cartwidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const Cartwidget = () => {

const {cantidadTotal} = useContext(CarritoContext)
  
  return (
    <>
    <Link to="/cart">
    <img src="/CarritoDeCompra.png" alt="imagen de carrito de compra" />
 {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
    </Link>
    </>
  )
}

export default Cartwidget




