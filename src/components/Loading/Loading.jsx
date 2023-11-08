import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import styles from '../Loading/Loading.module.css'
import megaLogo from  '../../assets/mega.png'
function Loading() {
  return (
    <div className={styles.loading}>
      <PuffLoader color={"#E6621F"} size={60} />
      <img src={megaLogo} alt="" />
    </div>
  );
}

export default Loading;