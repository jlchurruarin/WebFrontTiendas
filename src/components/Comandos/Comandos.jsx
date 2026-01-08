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
            <CommandCategory title="Verificaciones básicas de pinpad">
              <Command commandName="* Desconexiones de pinpad" placeHolder="Ver desconexiones de pinpad" command={"grep -E \"New USB device found.*idVendor=11ca, idProduct=022d\" /var/log/messages | awk '{count[$1 \" \" $2]++} END {for (d in count) print d \": \" count[d]}' | sort"}/>
              <Command commandName="* Tipo de USB" placeHolder="lsusb -t" command="lsusb -t" helpText='Muestra información del puerto en donde se encuentra conectado cada dispositivo usb'/>
              <Command commandName="* Ver configuración tty" placeHolder="stty -F /dev/ttyS20 -a" command="stty -F /dev/ttyS20 -a" helpText="Permite ver la configuraciones de conexión entre la POS y Pinpad"/>
              <Command commandName="* Errores lib.log" placeHolder="Ver errores lib.log" command={"grep \"ERROR\" $(awk '/cd / {print $2}' /etc/init.d/emv)/log/lib.log"}/>
              <Command commandName="* Trx pendientes" placeHolder="Ver transaciones pendientes en pinpad" command={"grep \"Trxs Pendientes\" $(awk '/cd / {print $2}' /etc/init.d/emv)/log/lib.log"}/>
            </CommandCategory>
            <CommandCategory title="ARS - Servidor de tienda">
              <Command commandName="* Estado linea de cajas" placeHolder="/home/WMAR/check_POS.sh" command="/home/WMAR/check_POS.sh" helpUrl="https://drive.google.com/file/d/1QY20SzvNonbXEY7cfhNSAx6Ekp4DiheB/edit"/>
              <Command commandName="* Listar de cajas +info" placeHolder="pos ws-list" command="pos ws-list"/>
              <Command commandName="* Estado servicios ARS" placeHolder="service --status-all" command="service --status-all"/>
              <Command commandName="* Reinicio servicios WebFront" placeHolder="Servicios WebFront: status / restart" command={"service Wildfly status\nservice Wildfly restart\nservice ArsPluMnt status\nservice ArsPluMnt restart\nservice POSServerRest status\nservice POSServerRest restart\nservice UserWatcher status\nservice UserWatcher restart\nservice EOD status\nservice EOD restart"}/>
            </CommandCategory>
            <CommandCategory title="Cajas comunes">
              <Command commandName="* Reinicio largo" placeHolder="init 6" command="init 6" helpText='Se puede utilizar por putty o desde VNC'/>
              <Command commandName="* Reinicio corto" placeHolder="init 3" command="init 3" helpText='Se puede utilizar por putty o desde VNC'/>
              <Command commandName="* Bloque comandos error de PinPad" placeHolder="Bloque detener / borrar obj / iniciar" command={"service emv stop\ncd $(awk '/cd / {print $2}' /etc/init.d/emv)/config\nrm application.obj\nrm auditTransaction.obj\nrm auditVoucherTransaction.obj\nrm crypt.properties\nrm LAST_RSA.pem\nrm session.obj\nrm workingKeys.properties\nservice emv start\ncat $(awk '/cd / {print $2}' /etc/init.d/emv)/config/application.obj"} helpText='Utilizado para errores de pinpad "Error de sincronización", "Error de encriptación", etc.'/>
              <Command commandName="* Verificar dispositivos" placeHolder="lsusb" command="lsusb" helpText='Lista los dispositivos usb conectados'/>
              <Command commandName="* Quitar caja de defectuosa" placeHolder="SelfScanning quitar defectuosa" command={'cd gd90\ntouch defect.ctl'} helpText='Se puede utilizar por SSH o desde VNC'/>
              <Command commandName="* Bloque restart servicios Epson" placeHolder="Servicios epson: status / restart" command={"service epson_devicecontrollogserviced status\nservice epson_pcsvcd status\nservice epson_pcsvcd restart\nservice epson_devicecontrollogserviced restart\n"} helpText='Cuando aparece error de impresora'/>
              <Command commandName="* Información del equipo" placeHolder="dmidecode -t system" command="dmidecode -t system" helpText='Muestra la información del equipo, permite conocer el fabricante o proveedor del mismo'/>
            </CommandCategory>
            <CommandCategory title="SelfScanning">
              <Command commandName="* Reinicio largo" placeHolder="init 6" command="init 6" helpText='Se puede utilizar por putty o desde VNC'/>
              <Command commandName="* Reinicio corto" placeHolder="init 3" command="init 3" helpText='Se puede utilizar por putty o desde VNC'/>
              <Command commandName="* Calibrar táctil en SelfScanning" placeHolder='Bloque de comandos para calibrar táctil' command={'cd /etc/opt/elo-usb\n./elova'} helpText='Se debe utilizar comando en ventana de VNC y una persona fisicamente debe tocar los puntos que aparecen en pantalla'/>
              <Command commandName="* Bloque comandos error de PinPad" placeHolder="Bloque detener / borrar obj / iniciar" command={"service emv stop\ncd $(awk '/cd / {print $2}' /etc/init.d/emv)/config\nrm application.obj\nrm auditTransaction.obj\nrm auditVoucherTransaction.obj\nrm crypt.properties\nrm LAST_RSA.pem\nrm session.obj\nrm workingKeys.properties\nservice emv start\ncat $(awk '/cd / {print $2}' /etc/init.d/emv)/config/application.obj"} helpText='Utilizado para errores de pinpad "Error de sincronización", "Error de encriptación", etc.'/>
              <Command commandName="* Verificar dispositivos" placeHolder="lsusb" command="lsusb" helpText='Lista los dispositivos usb conectados'/>
              <Command commandName="* Quitar caja de defectuosa" placeHolder="SelfScanning quitar defectuosa" command={'cd gd90\ntouch defect.ctl'} helpText='Se puede utilizar por SSH o desde VNC'/>
              <Command commandName="* Bloque restart servicios Epson" placeHolder="Servicios epson: status / restart" command={"service epson_devicecontrollogserviced status\nservice epson_pcsvcd status\nservice epson_pcsvcd restart\nservice epson_devicecontrollogserviced restart\n"} helpText='Cuando aparece error de impresora'/>
              <Command commandName="* Información del equipo" placeHolder="dmidecode -t system" command="dmidecode -t system" helpText='Muestra la información del equipo, permite conocer el fabricante o proveedor del mismo'/>
            </CommandCategory>
            <CommandCategory title="SSCO">
              <Command commandName="* ID Hardware PINPAD" placeHolder="vid:0x11CA pid:0x022D" command="vid:0x11CA pid:0x022D" helpText="Vid y Pid para configurar autoconnect"/>
              <Command commandName="* ID Hardware Impresora SSCO" placeHolder="vid:0x4B8 pid:0x0E15" command="vid:0x4B8 pid:0x0E15" helpText="Vid y Pid para configurar autoconnect"/>
              <Command commandName="* Quitar caja de defectuosa" placeHolder="SCO quitar defectuosa" command="/home/reg/gd90/sh/./DECLARE_OK.SH" helpText='Se puede utiliza por SSH'/>
              <Command commandName="* Verificar dispositivos en virtual" placeHolder="lsusb" command="lsusb" helpText='Lista los dispositivos usb conectados, se debe utilizar por SSH'/>
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