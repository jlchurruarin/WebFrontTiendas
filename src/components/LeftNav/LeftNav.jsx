import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { NavLink } from "react-router-dom";
import styles from './LeftNav.module.css';
function LeftNav(){
    return (
        <nav className={styles.sidebar}>
          <ul>
            
          <li>
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
                  <TerminalIcon/>
                  <NavLink
                    to={"/commandspricing"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    })}
                  >
                    Comandos Pricing
                  </NavLink>
                </li>
                <li>
                  <FormatListNumberedIcon />
                  <NavLink
                    to={"/checksum"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    })}
                  >
                    Dígito de control
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
                
            
          </ul>
          <ul className={styles.version}>
        <li><span>v3.1</span></li>
    </ul>
        </nav>
      );

}
export default LeftNav;