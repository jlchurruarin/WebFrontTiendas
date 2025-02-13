import React from "react";
import styles from'../../Comandos/Comandos.module.css'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function HelpButton({ helpText, url}) {

    const onHelpClick = () => {
        if (url) {
            window.open(url, "_blank")
        }
        else {
            window.alert("Ayuda no configurada")
        }
    }

    return (
        <>
        <span className={styles.helpButton}>
        <Tooltip title={helpText}>
            <IconButton onClick={onHelpClick} size="small" color="warning" aria-label="ayuda">
                <HelpOutlineIcon/>
            </IconButton>
        </Tooltip>
        </span>
        </>
    )
}

export default HelpButton;