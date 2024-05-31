import React from "react";
import { useState, useEffect } from 'react'
import { SearchTienda } from '../../utils/utils'
import megaLogo from '../../assets/mega.png'
import Loading from "../Loading/Loading";
import styles from '../webFront/webFront.module.css'
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
        <div className={styles.mainContent}> <Loading /></div>
       
      ) : (
        <div className={styles.mainContent}>
<div className={styles.containerWF}>
          <h1><span className={styles.resaltado}>¡</span> WebFront por tienda <span className={styles.resaltado}>!</span></h1>
          <div className={styles.cardWF}>
            <input className={styles.inputWF}
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
            <button className={styles.buttonWF} value="Buscar" onClick={() => {
              SearchTienda(text);
              setText("");
            }}
            >Buscar</button>
          </div>
          <p className={styles.readTheDocs}>
            Click en el botón <span className={styles.resaltado}>" Buscar "</span> para abrir el WebFront de la tienda ingresada
          </p>
          <p className={styles.readTheDocs}>
            <span className={styles.resaltado}>Recordá tener activa la VPN</span>
          </p>
        </div>
        </div>
        
      )}

    </>
  )
}
export default WebFront