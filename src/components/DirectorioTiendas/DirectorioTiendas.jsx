import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import styles from "../DirectorioTiendas/DirectorioTiendas.module.css"
import * as XLSX from "xlsx";

function DirectorioTiendas (){
  const [tiendas, setTiendas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  // Función para leer el archivo Excel al montar el componente
  useEffect(() => {
    const cargarExcel = async () => {
      try {
        const respuesta = await fetch("/directoriotiendas.xlsx"); // Ruta del archivo en la carpeta public
        const blob = await respuesta.arrayBuffer();
        const workbook = XLSX.read(blob, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Convertimos la data JSON en un array de tiendas
        const tiendasData = jsonData.slice(2).map((row) => ({
          nroTienda:row[0],
          nombre: row[3],
          ciudad: row[8],
          direccion: row[10],
          
        }));

        setTiendas(tiendasData);
      } catch (error) {
        console.error("Error al cargar el archivo Excel:", error);
      }
    };

    cargarExcel();
  }, []);

  // Función para manejar la búsqueda
  const handleBuscar = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtramos las tiendas según el término de búsqueda
  const tiendasFiltradas = tiendas.filter((tienda) =>
    (tienda.nombre && tienda.nombre.toLowerCase().includes(busqueda.toLowerCase())) ||
    (tienda.nroTienda && tienda.nroTienda.toString().toLowerCase().includes(busqueda.toLowerCase()))
  );

  return (
    <div className={styles.mainContent}>
        <div className={styles.container}>
        <TextField
          label="Buscar tienda"
          variant="outlined"
          value={busqueda}
          onChange={handleBuscar}
          style={{ marginBottom: '20px', width: '100%'}} // Ajusta el estilo según tu diseño
          InputProps={{
            style: { color: 'white' }, // Cambia el color del texto aquí
          }}
          InputLabelProps={{
            style: { color: 'white' }, // Cambia el color de la etiqueta aquí
          }}
          color="warning"
          focused
        />
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className={styles.table}>
        <TableHead>
        <TableRow className={styles.tableRow}>
            <TableCell className={styles.tableCell}>Tienda</TableCell>
            <TableCell align="right" className={styles.tableCell}>Nombre</TableCell>
            <TableCell align="right" className={styles.tableCell}>Provincia</TableCell>
            <TableCell align="right" className={styles.tableCell}>Dirección</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tiendasFiltradas.map((tienda,index) => (
            <TableRow key={index} 
            >
              <TableCell align="right" className={styles.tableCell}>{tienda.nroTienda}</TableCell>
              <TableCell align="right" className={styles.tableCell}>{tienda.nombre}</TableCell>
              <TableCell align="right" className={styles.tableCell}>{tienda.ciudad}</TableCell>
              <TableCell align="right" className={styles.tableCell}>{tienda.direccion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  );
};

export default DirectorioTiendas;
