import WebFront from './components/webFront/webFront.jsx'
import Comandos from './components/Comandos/Comandos.jsx'
import DigitoControl from './components/DigitoControl/DigitoControl.jsx'
import Nav from './components/Nav/Nav.jsx'
import Mapa from './components/MapTiendas/Mapa.jsx'
import Footer from './components/footer/footer.jsx'
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
            <Route path="/checksum" element={<DigitoControl/>} />
            <Route path="/map" element={<Mapa/>} />
          </Routes>
          
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
