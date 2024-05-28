import React from "react";
import { Breadcrumbs } from '@mui/material';
import { NavLink } from "react-router-dom";
import styles from './BreadcrumbsNav.module.css';
function BreadcrumbsNav(){
return(
<Breadcrumbs aria-label="breadcrumb" className={styles.BreadcrumbsNav}>
<NavLink
                    to={"/"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#898989",
                    })}
                  >
                    WebFront
                  </NavLink>
                  <NavLink
                    to={"/commands"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#898989",
                    })}
                  >
                    Comandos POS
                  </NavLink>
                  <NavLink
                    to={"/commandspricing"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#898989",
                    })}
                  >
                    Comandos Pricing
                  </NavLink>
                  <NavLink
                    to={"/checksum"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#898989",
                    })}
                  >
                    Dígito de control
                  </NavLink>
                  <NavLink
                    to={"/map"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#898989",
                    })}
                  >
                    MapTiendas
                  </NavLink>
      </Breadcrumbs>

);
}
export default BreadcrumbsNav;
