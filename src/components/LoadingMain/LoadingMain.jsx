import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import styles from '../LoadingMain/LoadingMain.module.css'
import megaLogo from '../../assets/mega.png'
function LoadingMain() {
  return (
    <div className={styles.loading}>
      <PuffLoader color={"#e6621f"} size={70} />
      <img src={megaLogo} alt="" />
    </div>
  );
}

export default LoadingMain;