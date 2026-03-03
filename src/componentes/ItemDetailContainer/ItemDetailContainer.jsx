import { useEffect, useState } from "react"
 import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/config"

const ItemDetailContainer = () => {

const [producto, setProducto] = useState(null)
const {idProd} = useParams()

 useEffect(()=>{
      const filtrarProd = doc(db, "productos", idProd)

      getDoc(filtrarProd)
        .then(res =>{
          const data = res.data()
          const nuevoProducto = {id: res.id, ...data}
          setProducto(nuevoProducto)
        })
        .catch(error => console.log(error))

    },[idProd])


  return (
    <div>
<ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer