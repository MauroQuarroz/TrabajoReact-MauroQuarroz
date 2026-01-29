import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import "./ItemDetail.css"

export const ItemDetail = ({categoria, detalle, nombre, precio, img, stock}) => {

const [cantidad, setCantidad] = useState(0)

const manejadorUnitario = (cantidad) => {
  setCantidad(cantidad)
}

  return (
    <div className="detalle-pepe">
<h2> Producto: {nombre} </h2>
<h2> Categoria: {categoria} </h2>
<h3> Precio: {precio} </h3>
<img src={img} alt={detalle} />
<p> {detalle} </p>

{cantidad > 0 ? (<Link to="/carrito"> Ir a finalizar compra </Link>) : (<ItemCount inicial={1} stock={stock} manejadorunitario={manejadorUnitario}/>)

}



</div>
  )


}
