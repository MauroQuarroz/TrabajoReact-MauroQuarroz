import { Link } from "react-router-dom"
import "./Item.css"


const Item = ({id,nombre, img, precio,stock}) => {


return (
    <div className="producto-card">
<img src={img} alt={nombre} />
<h2>Producto: {nombre} </h2>
<h2>Stock: {stock} </h2>
<p>Precio: ${precio}</p>
<Link to={`/item/${id}`}><button> Ver producto </button></Link>

    </div>
  )
}

export default Item