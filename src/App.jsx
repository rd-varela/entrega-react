import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

    </BrowserRouter>

  )
}

//<Route path="/item" element={<ItemDetailContainer/>} />
//<ItemListContainer item='Item1'/>

export default App
