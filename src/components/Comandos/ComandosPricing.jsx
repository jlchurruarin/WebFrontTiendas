import { useState, useEffect } from 'react'
import Loading from "../Loading/Loading";
import styles from '../Comandos/Comandos.module.css'
import Command from './Command/Command';
import CommandCategory from './CommandCategory/CommandCategory';

function ComandosPricing() {
  const [loading, setloading] = useState(true);

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
            <CommandCategory title="Verificación de Promociones">
              <Command commandName="Obtener información sobre promociones:" 
                placeHolder="Ingrese Id / UPC / Nombre de la promoción" 
                command={`grep $inputValue$ /root/SKYNET/dpfile3/FILE.PMT | awk -F "," '{print "\\n\\x1b[32m******************* VERIFICAR PROMOCIONES *******************\\n\\n\\x1b[0m\\n******************* ID PROMOCIÓN ******************* \\n\\n - "$3"\\n\\n******************* NOMBRE ******************* \\n\\n - \\x1b[33m"$5"\\x1b[0m\\n\\n - Fecha de inicio: "substr($6, 7, 2)"-"substr($6, 5, 2)"-"substr($6, 1, 4)" "$7"\\n - Fecha de fin: "substr($8, 7, 2)"-"substr($8, 5, 2)"-"substr($8, 1, 4)" "$9;if($44 ~ /[[:space:]]/) print "\\x1b[31m - LA PROMOCIÓN TIENE ESPACIOS\\x1b[0m"; else print "\\x1b[32m - LA PROMOCIÓN NO TIENE ESPACIOS\\x1b[0m"; if($44 ~ /[\\.\\.\\.]/) print "\\x1b[31m - LA PROMOCIÓN TIENE PUNTOS EN LOS UPC\\x1b[0m"; print "\\n\\n******************* LISTA DE TIENDAS ******************* \\n\\n - "$25; print "\\n\\n\\x1b[32m******************** FIN *******************\\x1b[0m"'}`} 
                alertMsg='Ingrese el UPC/ID de promoción'
                helpText='Permite buscar las promociones por UPC, nombre o ID'
                helpUrl="https://drive.google.com/open?id=1bJ9mzF-ouhUS1tZebkcQMjKmcW0RqqnU&usp=drive_fs"
                />
              <Command commandName="Obtener información sobre promociones: (Original)" 
                placeHolder="Ingrese Id / UPC / Nombre de la promoción" 
                command={`grep $inputValue$ /root/SKYNET/dpfile3/FILE.PMT`} 
                alertMsg='Ingrese el UPC/ID de promoción'
                helpText='Permite buscar las promociones por UPC, nombre o ID'
                helpUrl="https://drive.google.com/open?id=1bJ9mzF-ouhUS1tZebkcQMjKmcW0RqqnU&usp=drive_fs"
                />
              <Command commandName="Obtener UPC:" 
                placeHolder="'grep NUMERO_SKU /home/server/inq/M_HSHPLU.DAT | cut -c 4-15'" 
                command="grep $inputValue$ /home/server/inq/M_HSHPLU.DAT | cut -c 4-15" 
                alertMsg='Ingrese el UPC'
                helpText='Permite obtener el UPC de un producto con su SKU'
                helpUrl="https://drive.google.com/open?id=1bJ9mzF-ouhUS1tZebkcQMjKmcW0RqqnU&usp=drive_fs"
                />
              <Command commandName="Verificar novedades en GMREC:" 
                placeHolder="'grep NUMERO_UPC /home/NCR/ArsPluMnt/work/processed/GMREC*'" 
                command="grep $inputValue$ /home/NCR/ArsPluMnt/work/processed/GMREC*" 
                alertMsg='Ingrese el UPC'
                helpText='Permite ver las novedades de precio de un producto'
                />
            </CommandCategory>
            <CommandCategory title="Verificar PMT">
              <Command commandName="PMT en ARS" 
                placeHolder="cd /root/SKYNET/dpfile3/ && ll" 
                command="cd /root/SKYNET/dpfile3/ && ll"
                helpText='Permite ver cuando fue la última vez que se actualizó el FILE.PMT, archivo que contiene las promociones'
                />
              <Command commandName="Validar PMT Completo en ARS" 
                placeHolder="Valida todo el PMT de ARS en busca de errores" 
                command={`cat /root/SKYNET/dpfile3/FILE.PMT | awk -F "," '{ if($44 ~ /[[:space:]]/) { print "LA PROMOCION "$3" TIENE ESPACIOS\\x1b[0m"; print "UPC: "; system("grep -o \\"[0-9]\\\\{10,13\\\\}\\" <<< \\"" $44 "\\"") }}'`}
                helpText='Permite validar todo el FILE.PMT en busca de errores'
                />
              <Command commandName="PMT en POS" 
                placeHolder='cd "/home/reg/DP/NCR/DigitalPromotions/Promotion Files" && ll' 
                command='cd "/home/reg/DP/NCR/DigitalPromotions/Promotion Files" && ll'
                helpText='Permite ver cuando fue la última vez que se actualizó el DPFILE de una caja'
                />
            </CommandCategory>
            <CommandCategory title="Verificación de precio regular">
              <Command commandName="Verificar precio en ARS:" 
                placeHolder='grep NRO_UPC /home/server/inq/M_HSHPLU.DAT | sort' 
                command='grep $inputValue$ /home/server/inq/M_HSHPLU.DAT | sort' 
                alertMsg='Ingrese un UPC'
                helpText='Permite verificar el precio de un producto con su UPC'
                />
              <Command 
                commandName="Verificar precio en POS:" 
                placeHolder="grep NRO_UPC /home/reg/gd90/inq/S_HSHPLU.DAT | sort" 
                command="grep $inputValue$ /home/reg/gd90/inq/S_HSHPLU.DAT | sort" 
                alertMsg='Ingrese un UPC'
                helpText='Permite verificar el precio de un producto con su UPC'
                />
            </CommandCategory>
          </div>
        </div>
      )}
    </>

  )
}
export default ComandosPricing;