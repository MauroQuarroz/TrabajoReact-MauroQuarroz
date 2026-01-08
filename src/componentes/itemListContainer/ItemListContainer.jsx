import "./itemListContainer.css"

const ItemListContainer = ({bienvenida, texto}) => {
  return (
    <>
    <h1>{bienvenida}</h1>
    <p>{texto}</p>
    </>
  )
}

export default ItemListContainer