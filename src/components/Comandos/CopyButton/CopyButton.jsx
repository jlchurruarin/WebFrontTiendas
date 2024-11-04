import React from "react";
import styles from'../../Comandos/Comandos.module.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

function CopyButton({ command = "", onCopyClick}) {

    return (
    <>
        <button className={styles.btnCopy} onClick={onCopyClick} title="copy">
            <ContentCopyIcon sx={{ color: "#c06500" }} />
        </button>
    </>
    )
}

export default CopyButton;