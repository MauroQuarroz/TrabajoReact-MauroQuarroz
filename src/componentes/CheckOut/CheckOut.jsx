import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom"
import Loader from "../Loader/Loader"
import "./CheckOut.css"

const CheckOut = () => {
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState();
  const [loading, setLoading] = useState(false);

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos!!!");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos de email no coinciden!");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

setLoading(true);

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      }),
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
            setLoading(false);
          })
          .catch((error) => {
            setError(
              "Se produjo un error al crear la orden, intentalo de nuevo por favor.",);
            setLoading(false);
          });
      })
      .catch((error) => {
        setError("No se puede actualizar el stock.");
        setLoading(false);
      });
  };



  return (
    <div className="checkout-container">
{loading ? (
  <h1>Generando su orden... <div><Loader/></div> </h1>
      ) :
ordenId ? (
   <div className="mensaje-exito">
        <h1>¡Compra realizada con exito!</h1>
        <p>Muchas gracias {nombre}, tu orden de compra es: <strong>{ordenId}</strong></p>
        <Link to="/" className="btn-volver">Volver a la tienda</Link>
    </div>
):( <>
          <h2>Resumen:</h2>
          <form onSubmit={manejadorFormulario}>
            {carrito.map((producto) => (
              <div key={producto.item.id} className="resumen-item">
                <img src={producto.item.img} alt= {producto.item.nombre}/>
                <p>
                  {producto.item.nombre} x {producto.cantidad}
                </p>
                <p>Precio unitario: ${producto.item.precio}</p>
                <p>Precio x {producto.cantidad}: ${producto.item.precio*producto.cantidad}</p>
                <hr />
                
              </div>
            ))}
            <h2 className="total-pago">El monto total de la compra es de : ${total}</h2>

            <div className="formulario-datos">
                <div className="formulario-grupo">
                    <label>Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="formulario-grupo">   
                    <label>Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="formulario-grupo">
                    <label >Telefono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="formulario-grupo">
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="formulario-grupo">
                    <label>Email Confirmacion</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
            </div>

            {error && <p className="error-mensaje" style={{ color: "red" }}>{error}</p>}

            <button type="submit" className="btn-confirmar">Confirmar Compra</button>
          </form>
        </>
)}
    </div>
  );
};

export default CheckOut;