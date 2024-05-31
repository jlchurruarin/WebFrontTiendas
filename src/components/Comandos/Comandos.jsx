import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Loading from "../Loading/Loading";
import styles from'../Comandos/Comandos.module.css'

function Comandos() {
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false)
  const [value, valuInput] = useState("")
  function copy(copy) {
    setOpen(true);
    navigator.clipboard.writeText(copy);
  }
  function getUpc(value) {

    if (value == "") {
      alert("Campo vacio")
    } else {
      navigator.clipboard.writeText(`grep ${value} /home/server/inq/M_HSHPLU.DAT | cut -c 4-15`);
    }

  }
  function getPromo(value) {

    if (value == "") {
      alert("Ingrese UPC")
    } else {
      navigator.clipboard.writeText(`grep ${value} /root/SKYNET/dpfile3/FILE.PMT`);
    }

  }
  function getGmrec(value) {

    if (value == "") {
      alert("Ingrese UPC")
    } else {
      navigator.clipboard.writeText(`grep ${value} /home/NCR/ArsPluMnt/work/processed/GMREC*`);
    }

  }
  function getPre(value) {

    if (value == "") {
      alert("Ingrese UPC")
    } else {
      navigator.clipboard.writeText(`grep ${value} /home/server/inq/M_HSHPLU.DAT`);
    }

  }
  function getPrePos(value) {

    if (value == "") {
      alert("Ingrese UPC")
    } else {
      navigator.clipboard.writeText(`grep ${value} /home/reg/gd90/inq/S_HSHPLU.DAT`);
    }

  }
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    if (event.target.value !== null) {
      valuInput(event.target.value);
    }

  };
  const comandos = ["service emv stop\ncd /home/VTOLServices/emvkit/config/\nrm application.obj\nrm auditTransaction.obj\nrm auditVoucherTransaction.obj\nrm crypt.properties\nrm LAST_RSA.pem\nrm session.obj\nrm workingKeys.properties\nrm log/*.log\nservice emv start\ncat /home/VTOLServices/emvkit/config/application.obj",
    "/home/WMAR/check_POS.sh", "lsusb", "cat /etc/hosts", "/home/reg/gd90/sh/./DECLARE_OK.SH",
    "service epson_devicecontrollogserviced status\nservice epson_pcsvcd status\nservice epson_pcsvcd restart\nservice epson_devicecontrollogserviced restart\n",
    "service Wildfly status\nservice Wildfly restart\nservice ArsPluMnt status\nservice ArsPluMnt restart\nservice POSServerRest status\nservice POSServerRest restart\nservice UserWatcher status\nservice UserWatcher restart",
    "dmidecode -t system", "service --status-all","pos ws-list","cd /root/SKYNET/dpfile3/ && ll",'cd "/home/reg/DP/NCR/DigitalPromotions/Promotion Files" && ll']
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1500); // Cambia 2000 a la cantidad de tiempo que desees mostrar el spinner
    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, []);
  return (
    <>
      {loading ? (
        <div className={styles.mainContent}> <Loading /></div>
      ) : (
        <div className={styles.mainContent}>
<div className={styles.container}>
        <h1><span className={styles.resaltado}>¡</span> Comandos Soporte POS <span className='resaltado'>!</span></h1>
        <div className={styles.grid}>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Estado linea de cajas</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[1]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[1])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
              <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={1000}
                message="¡Comando copiado!"
              />
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Listar de cajas +info</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[9]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[9])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Verificar dispositivos</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[2]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[2])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Bloque comandos PinPad Error</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value="Bloque detener / borrar obj / iniciar"></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[0])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Verificar Host</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[3]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[3])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Declarar OK AutoServicio o SSCO</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[4]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[4])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Bloque restart servicios Epson </p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value="Servicios epson: status / restart"></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[5])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Bloque servicios WebFront</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value="Servicios WebFront: status / restart"></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[6])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Verificar fabricante</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[7]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[7])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Estado servicios ARS</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[8]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[8])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
      
      )}
    </>

  )
}
export default Comandos;