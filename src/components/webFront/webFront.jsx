import React from "react";
import { useState, useEffect } from 'react'
import { SearchTienda } from '../../utils/utils'
import megaLogo from '../../assets/mega.png'
import Loading from "../Loading/Loading";
import '../webFront/webFront.css'
function WebFront() {
  const [loading, setloading] = useState(true);
  const [text, setText] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1500); // Cambia 2000 a la cantidad de tiempo que desees mostrar el spinner
    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="containerWF">
          <h1><span className="resaltado">¡</span> WebFront por tienda <span className="resaltado">!</span></h1>
          <div className="cardWF">
            <input className="inputWF"
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
            <button className="buttonWF" value="Buscar" onClick={() => {
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
        </div>
      )}

    </>
  )
}
export default WebFront