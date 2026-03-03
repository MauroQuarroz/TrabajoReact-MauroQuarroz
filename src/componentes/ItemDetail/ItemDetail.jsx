import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import "./ItemDetail.css";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export const ItemDetail = ({id, detalle, nombre, precio, img, stock,}) => {

  const [cantidad, setCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorUnitario = (cantidad) => {
    setCantidad(cantidad);

    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, cantidad);
    toast.success("Producto agregado", {
    autoClose: 1000,
    hideProgressBar: false,
  });
  };

  return (
    <div className="detalle-pepe">
      <h2> Producto: {nombre} </h2>
      <h3> Stock: {stock} </h3>
      <h3> Precio: ${precio} </h3>
      <img src={img} alt={detalle} />
      <p> {detalle} </p>

      {cantidad > 0 ? ( <div className="botoneraItems">
        <Link className="IraFin" to="/cart"> Ir al carrito </Link>
        <Link className="VolveraComprar" to="/"> Seguir comprando </Link> </div>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          manejadorunitario={manejadorUnitario}
        />
      )}
    </div>
  );
};
