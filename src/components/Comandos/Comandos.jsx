import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Loading from "../Loading/Loading";
import '../Comandos/Comandos.css'

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
    "dmidecode -t system", "service --status-all"]
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1500); // Cambia 2000 a la cantidad de tiempo que desees mostrar el spinner
    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (<div className='container'>
        <h1><span className='resaltado'>¡</span> Comandos Soporte POS <span className='resaltado'>!</span></h1>
        <div className='grid'>
          <div className='divCard'>
            <p className='nameComando'>Estado linea de cajas</p>
            <div className="card">
              <input disabled className='textInput' value={comandos[1]}></input>
              <button className='btnCopy' onClick={() => copy(comandos[1])} title="copy">
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
          <div className='divCard'>
            <p className='nameComando'>Verificar dispositivos</p>
            <div className="card">
              <input disabled className='textInput' value={comandos[2]}></input>
              <button className='btnCopy' onClick={() => copy(comandos[2])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Bloque comandos PinPad Error</p>
            <div className="card">
              <input disabled className='textInput' value="Bloque detener / borrar obj / iniciar"></input>
              <button className='btnCopy' onClick={() => copy(comandos[0])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Verificar Host</p>
            <div className="card">
              <input disabled className='textInput' value={comandos[3]}></input>
              <button className='btnCopy' onClick={() => copy(comandos[3])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Declarar OK AutoServicio o SSCO</p>
            <div className="card">
              <input disabled className='textInput' value={comandos[4]}></input>
              <button className='btnCopy' onClick={() => copy(comandos[4])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Bloque restart servicios Epson </p>
            <div className="card">
              <input disabled className='textInput' value="Servicios epson: status / restart"></input>
              <button className='btnCopy' onClick={() => copy(comandos[5])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Bloque servicios WebFront</p>
            <div className="card">
              <input disabled className='textInput' value="Servicios WebFront: status / restart"></input>
              <button className='btnCopy' onClick={() => copy(comandos[6])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Verificar fabricante</p>
            <div className="card">
              <input disabled className='textInput' value={comandos[7]}></input>
              <button className='btnCopy' onClick={() => copy(comandos[7])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Estado servicios ARS</p>
            <div className="card">
              <input disabled className='textInput' value={comandos[8]}></input>
              <button className='btnCopy' onClick={() => copy(comandos[8])} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Obtener UPC:</p>
            <div className="card">
              <input className='textInput' placeholder='grep NUMERO_SKU /home/server/inq/M_HSHPLU.DAT | cut -c 4-15' onChange={handleChange}></input>
              <button className='btnCopy' onClick={() => getUpc(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Promociones asociadas a un UPC:</p>
            <div className="card">
              <input className='textInput' placeholder='grep NUMERO_UPC /root/SKYNET/dpfile3/FILE.PMT' onChange={handleChange}></input>
              <button className='btnCopy' onClick={() => getPromo(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Verificar novedades en GMREC:</p>
            <div className="card">
              <input className='textInput' placeholder='grep NUMERO_UPC /home/NCR/ArsPluMnt/work/processed/GMREC*' onChange={handleChange}></input>
              <button className='btnCopy' onClick={() => getGmrec(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Verificar precio en  ARS:</p>
            <div className="card">
              <input className='textInput' placeholder='grep NRO_UPC /home/reg/gd90/inq/M_HSHPLU.DAT | sort' onChange={handleChange}></input>
              <button className='btnCopy' onClick={() => getPre(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
          <div className='divCard'>
            <p className='nameComando'>Verificar precio en POS:</p>
            <div className="card">
              <input className='textInput' placeholder='grep NRO_UPC /home/server/inq/S_HSHPLU.DAT | sort' onChange={handleChange}></input>
              <button className='btnCopy' onClick={() => getPrePos(value)} title="copy">
                <ContentCopyIcon sx={{ color: "#c06500" }} />
              </button>
            </div>
          </div>
        </div>
      </div>)}
    </>

  )
}
export default Comandos;