import { useEffect, useState } from "react"
 import { ItemDetail } from "../ItemDetail/ItemDetail"
 import { obtenerProductosSolo } from "../../../asyncmock"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

const [producto, setProducto] = useState(null)
const {idProd} = useParams()

useEffect(()=>{ 
  

  obtenerProductosSolo(idProd)
  .then(respuesta=> setProducto(respuesta))
},[idProd])



  return (
    <div>
<ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer