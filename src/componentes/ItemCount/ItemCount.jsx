import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, inicial, manejadorunitario}) => {

  const [contador, setContador] = useState(inicial)

  const sumar = () => {
    if (contador < stock) {
      setContador (contador + inicial)
    }
  }

const restar = () => {
    if (contador > 1) {
      setContador (contador - 1)
    }
  }


  return (
    <div className="contador-box">
<button onClick={restar}> - </button>
<p> {contador} </p>
<button onClick={sumar}> + </button>
<button onClick={() => manejadorunitario(contador)}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount