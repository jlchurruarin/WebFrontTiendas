import React from "react";
import { useState, useEffect } from 'react'
import Loading from "../Loading/Loading";
import styles from '../webFront/webFront.module.css'
function Mapa() {
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
          <h1><span className={styles.resaltado}>¡</span> Mapa de todas las tiendas <span className="resaltado">!</span></h1>
          
          <iframe src="https://www.google.com/maps/d/embed?mid=1fROX-tIf7FeQf03IzBbFN0D2bhj5A_s&ehbc=2E312F" width="1020" height="720"></iframe>
          </div>
          
        </div>
      )}

    </>
  )
}
export default Mapa;