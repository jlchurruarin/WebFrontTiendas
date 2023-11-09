import WebFront from './components/webFront/webFront.jsx'
import Comandos from './components/Comandos/Comandos.jsx'
import Nav from './components/Nav/Nav.jsx'
import Mapa from './components/MapTiendas/Mapa.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
          <Routes>
            <Route path="/" element={<WebFront/>} />
            <Route path="/commands" element={<Comandos/>} />
            <Route path="/map" element={<Mapa/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
