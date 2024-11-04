import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Loading from "../Loading/Loading";
import styles from'../Comandos/Comandos.module.css'
import Command from './Command/Command';
import CommandCategory from './CommandCategory/CommandCategory';

function Comandos() {
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false)

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
            <CommandCategory title="Autoconnect SSCO">
              <Command commandName="* ID Hardware PINPAD" placeHolder="vid:0x11CA pid:0x022D" command="vid:0x11CA pid:0x022D" helpText="Vid y Pid para configurar autoconnect"/>
              <Command commandName="* ID Hardware Impresora SSCO" placeHolder="vid:0x4B8 pid:0x0E15" command="vid:0x4B8 pid:0x0E15" helpText="Vid y Pid para configurar autoconnect"/>
            </CommandCategory>
            <CommandCategory title="Estado Linea de cajas / ARS">
              <Command commandName="* Estado linea de cajas" placeHolder="/home/WMAR/check_POS.sh" command="/home/WMAR/check_POS.sh"/>
              <Command commandName="* Listar de cajas +info" placeHolder="pos ws-list" command="pos ws-list"/>
              <Command commandName="* Estado servicios ARS" placeHolder="service --status-all" command="service --status-all"/>
              <Command commandName="* Reinicio servicios WebFront" placeHolder="Servicios WebFront: status / restart" command={"service Wildfly status\nservice Wildfly restart\nservice ArsPluMnt status\nservice ArsPluMnt restart\nservice POSServerRest status\nservice POSServerRest restart\nservice UserWatcher status\nservice UserWatcher restart"}/>
            </CommandCategory>
            <CommandCategory title="Error PINPAD / Declarar OK - POS Defectuosa / Servicios EPSON">
              <Command commandName="* Bloque comandos PinPad Error" placeHolder="Bloque detener / borrar obj / iniciar" command={"service emv stop\ncd /home/VTOLServices/emvkit/config/\nrm application.obj\nrm auditTransaction.obj\nrm auditVoucherTransaction.obj\nrm crypt.properties\nrm LAST_RSA.pem\nrm session.obj\nrm workingKeys.properties\nservice emv start\ncat /home/VTOLServices/emvkit/config/application.obj"} />
              <Command commandName="* Declarar OK AutoServicio o SSCO" placeHolder="/home/reg/gd90/sh/./DECLARE_OK.SH" command="/home/reg/gd90/sh/./DECLARE_OK.SH"/>
              <Command commandName="* Verificar dispositivos" placeHolder="lsusb" command="lsusb"/>
              <Command commandName="* Verificar fabricante" placeHolder="dmidecode -t system" command="dmidecode -t system"/>
              <Command commandName="* Bloque restart servicios Epson" placeHolder="Servicios epson: status / restart" command={"service epson_devicecontrollogserviced status\nservice epson_pcsvcd status\nservice epson_pcsvcd restart\nservice epson_devicecontrollogserviced restart\n"}/>
            </CommandCategory>
            <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={open}
                    onClose={() => setOpen(false)}
                    autoHideDuration={1000}
                    message="¡Comando copiado!"
            />
          </div>
        </div>
      )}
    </>

  )
}
export default Comandos;