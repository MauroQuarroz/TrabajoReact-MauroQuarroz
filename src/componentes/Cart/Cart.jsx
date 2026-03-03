import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"


const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0){
        return(
            <>
                <h2>No se han encontrado productos. Asegurese de agragarlos al carrito!!!</h2>
                <Link to="/"><button>Ir a Productos</button></Link>
            </>
        )

    }

  return (
    <div className="cart-container">
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/> )
            
        }
        <h3> Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>

    
    </div>
  )
}

export default Cart