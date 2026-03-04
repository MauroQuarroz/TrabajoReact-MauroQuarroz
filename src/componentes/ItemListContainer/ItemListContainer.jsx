import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { db } from "../../services/config"
import { collection, getDocs, query, where} from "firebase/firestore"
import Loader from "../Loader/Loader"
 

const ItemListContainer = () => {

 const [cargador, setCargador] = useState(false)
const [productos, setProductos] = useState([])
const {cat} = useParams()

 useEffect(()=>{
      setCargador(true)
      const obtenerProductos = cat ? query(collection(db, "productos"), where("categoria", "==", cat)) : collection(db, "productos")

      getDocs(obtenerProductos)
        .then(res => {
          const productosObtenidos = res.docs.map(doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setProductos(productosObtenidos)
        })
        .catch(error => console.log(error))
        .finally(()=>{
          setCargador(false)
        })
    },[cat])

  return (
    <>
   <h2>Catálogo</h2>
    {cargador ? <Loader/> : <ItemList productos={productos}/>}
    </>
  )
}

export default ItemListContainer