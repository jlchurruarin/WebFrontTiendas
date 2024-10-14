import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Loading from "../Loading/Loading";
import styles from '../Comandos/Comandos.module.css'

function ComandosPricing() {
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
  function getPromoInfo(value){
    if(value==""){
       alert("Ingrese UPC/Texto")
    }else{
      //navigator.clipboard.writeText(`grep ${value} /root/SKYNET/dpfile3/FILE.PMT | awk -F "," '{print "\\n\\x1b[32m******************* VERIFICAR PROMOCIONES *******************\\n\\n\\x1b[0m\\n******************* ID PROMOCIÓN ******************* \\n\\n - "$3"\\n\\n******************* NOMBRE ******************* \\n\\n - \\x1b[33m"$5"\\x1b[0m\\n\\n - Fecha de inicio: "substr($6, 7, 2)"-"substr($6, 5, 2)"-"substr($6, 1, 4)" "$7"\\n - Fecha de fin: "substr($8, 7, 2)"-"substr($8, 5, 2)"-"substr($8, 1, 4)" "$9;if($108 ~ /[[:space:]]/) print "\\x1b[31m - LA PROMOCIÓN TIENE ESPACIOS\\x1b[0m"; else print "\\x1b[32m - LA PROMOCIÓN NO TIENE ESPACIOS\\x1b[0m"; print "\\n\\n******************* LISTA DE TIENDAS ******************* \\n\\n - "$25; print "\\n\\n\\x1b[32m******************** FIN *******************\\x1b[0m" }'`);
      navigator.clipboard.writeText(`grep ${value} /root/SKYNET/dpfile3/FILE.PMT | awk -F "," '{print "\\n\\x1b[32m******************* VERIFICAR PROMOCIONES *******************\\n\\n\\x1b[0m\\n******************* ID PROMOCIÓN ******************* \\n\\n - "$3"\\n\\n******************* NOMBRE ******************* \\n\\n - \\x1b[33m"$5"\\x1b[0m\\n\\n - Fecha de inicio: "substr($6, 7, 2)"-"substr($6, 5, 2)"-"substr($6, 1, 4)" "$7"\\n - Fecha de fin: "substr($8, 7, 2)"-"substr($8, 5, 2)"-"substr($8, 1, 4)" "$9;if($108 ~ /[[:space:]]/) print "\\x1b[31m - LA PROMOCIÓN TIENE ESPACIOS\\x1b[0m"; else print "\\x1b[32m - LA PROMOCIÓN NO TIENE ESPACIOS\\x1b[0m"; if($108 ~ /[\\.\\.\\.]/) print "\\x1b[31m - LA PROMOCIÓN TIENE PUNTOS EN LOS UPC\\x1b[0m"; print "\\n\\n******************* LISTA DE TIENDAS ******************* \\n\\n - "$25; print "\\n\\n\\x1b[32m******************** FIN *******************\\x1b[0m"}'`);
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


<div className={styles.h3SubTitle}>
<h3 className={styles.subTitle}>Verificación de Promociones</h3>
<div className={styles.grid}>
<div className={styles.divCard}>
            <p className={styles.nameComando}>Promoción info:</p>
            <div className={styles.card}>
              <input className={styles.textInput} placeholder='Ingrese Id / UPC / dato relacionado' onChange={handleChange}></input>
              <button className={styles.btnCopy} onClick={() => getPromoInfo(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Obtener UPC:</p>
            <div className={styles.card}>
              <input className={styles.textInput} placeholder='grep NUMERO_SKU /home/server/inq/M_HSHPLU.DAT | cut -c 4-15' onChange={handleChange}></input>
              <button className={styles.btnCopy} onClick={() => getUpc(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Verificar novedades en GMREC:</p>
            <div className={styles.card}>
              <input className={styles.textInput} placeholder='grep NUMERO_UPC /home/NCR/ArsPluMnt/work/processed/GMREC*' onChange={handleChange}></input>
              <button className={styles.btnCopy} onClick={() => getGmrec(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
  </div>
  </div>

<div className={styles.h3SubTitle}>
<h3 className={styles.subTitle}>Verificar PMT</h3>
<div className={styles.grid}>
<div className={styles.divCard}>
            <p className={styles.nameComando}>PMT en ARS</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[10]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[10])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>PMT en POS</p>
            <div className={styles.card}>
              <input disabled className={styles.textInput} value={comandos[11]}></input>
              <button className={styles.btnCopy} onClick={() => copy(comandos[11])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          </div>
          </div>

 
  


  <div className={styles.h3SubTitle}>
<h3 className={styles.subTitle}>Verificación de precio regular</h3>
<div className={styles.grid}>
<div className={styles.divCard}>
            <p className={styles.nameComando}>Verificar precio en  ARS:</p>
            <div className={styles.card}>
              <input className={styles.textInput} placeholder='grep NRO_UPC /home/reg/gd90/inq/M_HSHPLU.DAT | sort' onChange={handleChange}></input>
              <button className={styles.btnCopy} onClick={() => getPre(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className={styles.divCard}>
            <p className={styles.nameComando}>Verificar precio en POS:</p>
            <div className={styles.card}>
              <input className={styles.textInput} placeholder='grep NRO_UPC /home/server/inq/S_HSHPLU.DAT | sort' onChange={handleChange}></input>
              <button className={styles.btnCopy} onClick={() => getPrePos(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>

  </div>
  </div>
  </div>
        
          
          
          
          


  </div>
      
      )}
    </>

  )
}
export default ComandosPricing;