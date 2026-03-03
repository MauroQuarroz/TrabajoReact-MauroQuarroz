import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer"
import Error from "./componentes/Error/Error"
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componentes/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckOut from "./componentes/CheckOut/CheckOut"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css"
const App = () => {
  return (
    <>
   
   <BrowserRouter>
 <CarritoProvider>
<Navbar/>

<Routes>

  <Route path="/" element={<ItemListContainer/>}/>  
   <Route path="/categoria/:cat" element={<ItemListContainer/>}/>  
<Route path="/item/:idProd" element={<ItemDetailContainer/>}/>  
<Route path="/cart" element={<Cart/>} />
<Route path="*" element={<Error/>}/> 
 <Route path="/checkout" element={<CheckOut/>}/>

   

</Routes>

</CarritoProvider>
<ToastContainer />

</BrowserRouter>
    </>
  )
}

export default App