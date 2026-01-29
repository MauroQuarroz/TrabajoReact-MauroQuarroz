import { useParams } from "react-router-dom"
import "./itemListContainer.css"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { obtenerProductos , obtenerProductosCategoria } from "../../../asyncmock"

 

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const {cat} = useParams()

useEffect(()=>{
  const funcionDoble = cat ? obtenerProductosCategoria : obtenerProductos

  funcionDoble(cat)
  .then(respuesta=> setProductos(respuesta))
},[cat])

  return (
    <>
   <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer