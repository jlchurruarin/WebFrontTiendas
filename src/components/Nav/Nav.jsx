import React from "react";
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from "react-router-dom";
import megaLogo from  '../../assets/mega.png'
import styles from '../Nav/Nav.module.css';
function Nav(){
    return (
        <nav className={styles.nav}>
          <ul>
          <li>
            <a href="/">
          <img src={megaLogo} className={styles.logo} alt="Vite logo" />
        </a>
            </li>
          </ul>
          <ul className={styles.liLink}>
                <li >
                  <NavLink
                    to={"/"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    })}
                  >
                    WebFront
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/commands"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    })}
                  >
                    Comandos POS
                  </NavLink>
                </li>
                <li><LocationOnIcon/><a href="https://www.google.com/maps/d/u/0/viewer?mid=1fROX-tIf7FeQf03IzBbFN0D2bhj5A_s&ll=-31.74198896616553%2C-55.02777490954791&z=4" target="_blank">MapTiendas</a></li>
                <li><a className={styles.button} href="https://sites.google.com/gdnargentina.com/mdamegatech/instructivos" target="_blank">Instructivos</a></li>
          </ul>
        </nav>
      );

}
export default Nav;