import WebFront from './components/webFront/webFront.jsx'
import Comandos from './components/Comandos/Comandos.jsx'
import ComandosPricing from './components/Comandos/ComandosPricing.jsx'
import DigitoControl from './components/DigitoControl/DigitoControl.jsx'
import Nav from './components/Nav/Nav.jsx'
import Mapa from './components/MapTiendas/Mapa.jsx'
import MonitorTiendas from './components/MonitorTiendas/MonitorTiendas.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftNav from './components/LeftNav/LeftNav.jsx'

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
            <Route path="/checksum" element={<DigitoControl/>} />
            <Route path="/map" element={<Mapa/>} />
            <Route path="/monitortiendas" element={<MonitorTiendas/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
