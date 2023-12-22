import { useState, useEffect } from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import Loading from "../Loading/Loading";
import '../DigitoControl/DigitoControl.css'

function DigitoControl() {
  const [loading, setloading] = useState(true);
  const [checkDigit, setCheckDigit] = useState(0)
  const [ean12, setEAN12] = useState(0);
  const [ean13, setEAN13] = useState(0);

    
  
    function calculateCheckDigit (ean12){
      if (ean12.length !== 12 || !/^\d+$/.test(ean12)) {
        alert('El código EAN-12 debe contener 12 dígitos numéricos.');
        return;
      }
  
      const digits = ean12.split('').map(Number);
      let sum = 0;
  
      for (let i = 0; i < 12; i++) {
        sum += i % 2 === 0 ? digits[i] : digits[i] * 3;
      }
  
      const cDigit = (10 - (sum % 10)) % 10;
      setCheckDigit(cDigit);
      setEAN13(ean12 + cDigit);
      console.log(cDigit)
      console.log(ean13)
    };

    const handleChange = (event) => {
      // 👇 Get input value from "event"
      if (event.target.value !== null) {
        setEAN12(event.target.value);
      }
  
    };
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
      ) : (
      <div className='containerCkeck'>
        <h1><span className='resaltado'>¡</span> Calcular dígito de control EAN-13 <span className='resaltado'>!</span></h1>
        <div className='containerCheckSum'>
          
          
            <p className='nameComando'>Código EAN-13 sin dígito de control:</p>
            <div className="card">
              <input className='inputCheckSum' placeholder='Ingrese EAN-12' onChange={handleChange}></input>
            </div>
            <p className='nameComando'>Dígito de control calculado:</p>
            <p className='inputCheckSum'>{checkDigit}</p>

            <p className='nameComando'>EAN-13 calculado:</p>
            <p className='inputCheckSum'>{ean13}</p>
          
            <button className='btnCheck' onClick={() => calculateCheckDigit(ean12)} title="copy">
            <RefreshIcon sx={{ color: "#c06500" }}/> Calcular
              </button>
          
          
          
          
        </div>
      </div>)}
    </>

  )
}
export default DigitoControl;