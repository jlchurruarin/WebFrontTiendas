
import React from "react";
import CopyButton from "../CopyButton/CopyButton";
import styles from'../../Comandos/Comandos.module.css'
import { useState } from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


function Command({ children, commandName, command, placeHolder = "", alertMsg = "", helpText = ""}) {
    
    const [value, valuInput] = useState("");


    var inputEnable = false;

    if (command.includes("$inputValue$")) {
        inputEnable = true;
    }



    function onCopyClick() {
        console.log(alertMsg)
        console.log(value)
        if (alertMsg == "" ) {
            clipboardCopy(command, value);
        } else {
            if (value == "") {
                alert(alertMsg);
            }
            else 
            {
                clipboardCopy(command, value);
            }
        }
    }

    function clipboardCopy(command, value) {
        command = command.replace("$inputValue$", value);
        navigator.clipboard.writeText(command);
    }

    const handleChange = (event) => {
        // 👇 Get input value from "event"
        if (event.target.value !== null) {
          valuInput(event.target.value);
        }
    
      };


    return (
    <>


    <div className={styles.divCard}>
        <p className={styles.nameComando}>{commandName}
            <span className={styles.helpButton}>
            <Tooltip title={helpText}>
                <IconButton size="small" color="warning" aria-label="ayuda">
                    <HelpOutlineIcon/>
                </IconButton>
            </Tooltip>
            </span>
        </p>
        <div className={styles.card}>
            <input disabled={!inputEnable} className={styles.textInput} placeholder={placeHolder} onChange={handleChange}></input>
            <CopyButton command={command} onCopyClick={onCopyClick}/> 
        </div>
    </div>
    </>
    )
}

export default Command;