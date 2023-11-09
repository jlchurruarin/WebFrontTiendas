import React from "react";
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
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
                  <WebIcon/>
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
                  <TerminalIcon/>
                  <NavLink
                    to={"/commands"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    })}
                  >
                    Comandos POS
                  </NavLink>
                </li>
                <li>
                <LocationOnIcon/>
                  <NavLink
                    to={"/map"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    })}
                  >
                    MapTiendas
                  </NavLink>
                </li>
                
                <li><a className={styles.button} href="https://sites.google.com/gdnargentina.com/mdamegatech/instructivos" target="_blank">Instructivos</a></li>
          </ul>
        </nav>
      );

}
export default Nav;