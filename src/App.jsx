import WebFront from './components/webFront/webFront.jsx'
import Comandos from './components/Comandos/Comandos.jsx'
import ComandosPricing from './components/Comandos/ComandosPricing.jsx'
import DigitoControl from './components/DigitoControl/DigitoControl.jsx'
import Nav from './components/Nav/Nav.jsx'
import Mapa from './components/MapTiendas/Mapa.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftNav from './components/LeftNav/LeftNav.jsx'
import DirectorioTiendas from './components/DirectorioTiendas/DirectorioTiendas.jsx'
import ContactsSection from './components/Contactos/Contactos.jsx'

function App() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
      <LeftNav/>
          <Routes>
            <Route path="/" element={<WebFront/>} />
            <Route path="/commands" element={<Comandos/>} />
            <Route path="/commandspricing" element={<ComandosPricing/>} />
            <Route path="/contactos" element={<ContactsSection/>} />
            <Route path="/tiendas" element={<DirectorioTiendas/>} />
            <Route path="/checksum" element={<DigitoControl/>} />
            <Route path="/map" element={<Mapa/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
