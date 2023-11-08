import WebFront from './components/webFront/webFront.jsx'
import Comandos from './components/Comandos/Comandos.jsx'
import Nav from './components/Nav/Nav.jsx'
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
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
