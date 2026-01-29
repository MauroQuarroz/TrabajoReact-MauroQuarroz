import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer"
import "./App.css"
import Error from "./componentes/Error/Error"


const App = () => {
  return (
    <>
   
   <BrowserRouter>

<Navbar/>

<Routes>

  <Route path="/" element={<ItemListContainer/>}/>  
   <Route path="/categoria/:cat" element={<ItemListContainer/>}/>  
<Route path="/item/:idProd" element={<ItemDetailContainer/>}/>  
<Route path="*" element={<Error/>}/> 

   

</Routes>



</BrowserRouter>
    </>
  )
}

export default App