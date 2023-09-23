import { useState } from 'react'
import {SearchTienda} from './utils/utils.js'
import megaLogo from  './assets/mega.png'
import './App.css'

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <a href="https://sites.google.com/gdnargentina.com/mdamegatech/instructivos" target="_blank">
          <img src={megaLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>WebFront por tienda</h1>
      <div className="card">
      <input
            type="text"
            placeholder="Ingresa número de tienda"
            name=""
            id=""
            onChange={(e) => {
              setText(e.target.value);
            }}
           autoFocus
            value={text}
          />
        <button value="Buscar" onClick={() => {
          SearchTienda(text);
          setText("");
        }}
        >Buscar</button>
      </div>
      <p className="read-the-docs">
        Click en el botón <span className='resaltado'>" Buscar "</span> para abrir el WebFront de la tienda ingresada
      </p>
      <p className="read-the-docs">
        <span className='resaltado'>Recordá tener activa la VPN</span>
      </p>
    </>
  )
}

export default App
