import { useState, useEffect } from 'react'
import Loading from "../Loading/Loading";
import styles from '../Comandos/Comandos.module.css'
import Command from './Command/Command';
import CommandCategory from './CommandCategory/CommandCategory';

function ComandosPricing() {
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false)
  const [value, valuInput] = useState("")

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
              <Command commandName="Promoción info:" placeHolder="Ingrese Id / UPC / dato relacionado" command={`grep $inputValue$ /root/SKYNET/dpfile3/FILE.PMT | awk -F "," '{print "\\n\\x1b[32m******************* VERIFICAR PROMOCIONES *******************\\n\\n\\x1b[0m\\n******************* ID PROMOCIÓN ******************* \\n\\n - "$3"\\n\\n******************* NOMBRE ******************* \\n\\n - \\x1b[33m"$5"\\x1b[0m\\n\\n - Fecha de inicio: "substr($6, 7, 2)"-"substr($6, 5, 2)"-"substr($6, 1, 4)" "$7"\\n - Fecha de fin: "substr($8, 7, 2)"-"substr($8, 5, 2)"-"substr($8, 1, 4)" "$9;if($44 ~ /[[:space:]]/) print "\\x1b[31m - LA PROMOCIÓN TIENE ESPACIOS\\x1b[0m"; else print "\\x1b[32m - LA PROMOCIÓN NO TIENE ESPACIOS\\x1b[0m"; if($44 ~ /[\\.\\.\\.]/) print "\\x1b[31m - LA PROMOCIÓN TIENE PUNTOS EN LOS UPC\\x1b[0m"; print "\\n\\n******************* LISTA DE TIENDAS ******************* \\n\\n - "$25; print "\\n\\n\\x1b[32m******************** FIN *******************\\x1b[0m"'}`} alertMsg='Ingrese el UPC/ID de promoción'/>
              <Command commandName="Obtener UPC:" placeHolder="'grep NUMERO_SKU /home/server/inq/M_HSHPLU.DAT | cut -c 4-15'" command="grep $inputValue$ /home/server/inq/M_HSHPLU.DAT | cut -c 4-15" alertMsg='Ingrese el UPC'/>
              <Command commandName="Verificar novedades en GMREC:" placeHolder="'grep NUMERO_UPC /home/NCR/ArsPluMnt/work/processed/GMREC*'" command="grep $inputValue$ /home/NCR/ArsPluMnt/work/processed/GMREC*" alertMsg='Ingrese el UPC'/>
            </CommandCategory>
            <CommandCategory title="Verificar PMT">
              <Command commandName="PMT en ARS" placeHolder="cd /root/SKYNET/dpfile3/ && ll" command="cd /root/SKYNET/dpfile3/ && ll"/>
              <Command commandName="Validar PMT Completo en ARS" placeHolder="Valida todo el PMT de ARS en busca de errores" command={`cat /root/SKYNET/dpfile3/FILE.PMT | awk -F "," '{ if($44 ~ /[[:space:]]/) { print "LA PROMOCION "$3" TIENE ESPACIOS\\x1b[0m"; print "UPC: "; system("grep -o \\"[0-9]\\\\{10,13\\\\}\\" <<< \\"" $44 "\\"") }}'`}/>
              <Command commandName="PMT en POS" placeHolder='cd "/home/reg/DP/NCR/DigitalPromotions/Promotion Files" && ll' command='cd "/home/reg/DP/NCR/DigitalPromotions/Promotion Files" && ll'/>
            </CommandCategory>
            <CommandCategory title="Verificación de precio regular">
            <Command commandName="Verificar precio en ARS:" placeHolder='grep NRO_UPC /home/server/inq/S_HSHPLU.DAT | sort' command='grep $inputValue$ /home/server/inq/S_HSHPLU.DAT | sort' alertMsg='Ingrese un UPC'/>
            <Command commandName="Verificar precio en POS:" placeHolder="grep NRO_UPC /home/reg/gd90/inq/M_HSHPLU.DAT | sort" command="grep $inputValue$ /home/reg/gd90/inq/M_HSHPLU.DAT | sort" alertMsg='Ingrese un UPC'/>
            </CommandCategory>
          </div>
        </div>
      )}
    </>

  )
}
export default ComandosPricing;