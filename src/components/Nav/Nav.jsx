import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { NavLink } from "react-router-dom";
import megaLogo from  '../../assets/mega.png'
import styles from '../Nav/Nav.module.css';
function Nav(){
    return (
        <nav className={styles.nav}>
          <ul >
          
            <li><a className={styles.button} href="https://sites.google.com/gdnargentina.com/mdamegatech/instructivos" target="_blank">Instructivos</a></li>
          </ul>
        </nav>
      );

}
export default Nav;