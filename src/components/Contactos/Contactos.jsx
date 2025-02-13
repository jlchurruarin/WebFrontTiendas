import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import {firebaseApp} from './firebaseConfig';
import styles from "../Contactos/Contactos.module.css"
import { Edit } from '@mui/icons-material';

const ContactsSection = () => {
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [form, setForm] = useState({ name: '', storeNumber: '', phone: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Login error:', error);
      alert('Error logging in. Please check your credentials.');
    }
  };

  const fetchContacts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(contactsList);
      setFilteredContacts(contactsList);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, [user]);

  const handleAddContact = async () => {
    try {
      await addDoc(collection(db, 'contacts'), form);
      setForm({ name: '', storeNumber: '', phone: '' });
      fetchContacts();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const handleUpdateContact = async (id, updatedData) => {
    try {
      await updateDoc(doc(db, 'contacts', id), updatedData);
      fetchContacts();
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    setFilteredContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(value) ||
        contact.storeNumber.toLowerCase().includes(value) ||
        contact.phone.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className={styles.mainContent}>
        
        {!user ? (
            <div className={styles.container}>
        <Card className={styles.cardContainer}>
          <CardContent className={styles.cardContent}>
            <h2 className={styles.Title}>Contactos Tiendas</h2>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '20px', width: '100%'}} // Ajusta el estilo según tu diseño
          InputProps={{
            style: { color: 'white' }, // Cambia el color del texto aquí
          }}
          InputLabelProps={{
            style: { color: 'white' }, // Cambia el color de la etiqueta aquí
          }}
          color="warning"
            />
            <button className={styles.btnLogin} onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </CardContent>
        </Card>
        </div>
      ) : (
        <div>
          
          <Card className={styles.cardContainerLogin}>
          <h3 className={styles.h3SubTitle}>Agregar contacto tienda</h3>
            <CardContent className={styles.cardContentLogin}>
            
              <input  className={styles.textInput} placeholder="Nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              ></input>

              <input  className={styles.textInput}
                placeholder="Numero de Tienda"
                value={form.storeNumber}
                onChange={(e) => setForm({ ...form, storeNumber: e.target.value })}
              ></input>

              <input  className={styles.textInput}
                value={form.phone}
                placeholder="Teléfono"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              ></input>
              <button className={styles.btnAdd} onClick={handleAddContact}>
                Añadir nuevo contacto
              </button>
            </CardContent>
          </Card>
          <TextField
            label="Buscar contactos"
            variant="outlined"
            value={search}
            onChange={handleSearch}
            style={{ marginBottom: '20px', width: '100%'}} // Ajusta el estilo según tu diseño
          InputProps={{
            style: { color: 'white' }, // Cambia el color del texto aquí
          }}
          InputLabelProps={{
            style: { color: 'white' }, // Cambia el color de la etiqueta aquí
          }}
          color="warning"
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="contacts table" className={styles.table}>
              <TableHead>
                <TableRow className={styles.tableRow}>
                  <TableCell className={styles.tableCell}>Nombre</TableCell>
                  <TableCell className={styles.tableCell} align="right">Tienda</TableCell>
                  <TableCell className={styles.tableCell} align="right">Teléfono</TableCell>
                  <TableCell className={styles.tableCell} align="right">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className={styles.tableCell}>{contact.name}</TableCell>
                    <TableCell className={styles.tableCell} align="right">{contact.storeNumber}</TableCell>
                    <TableCell className={styles.tableCell} align="right">{contact.phone}</TableCell>
                    <TableCell className={styles.tableCell} align="right">
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleUpdateContact(contact.id, { ...contact, name: 'Updated Name' })}
                      >
                        <EditIcon></EditIcon>
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDeleteContact(contact.id)}
                        style={{ marginLeft: '8px' }}
                      >
                        <DeleteIcon></DeleteIcon>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
        </div>
  );
};

export default ContactsSection;