import React, { useState, useEffect } from 'react';
import { Card, CardContent, AppBar, Toolbar, Typography } from '@mui/material';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import megaLogo from '../../assets/mega.png';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { firebaseApp } from './firebaseConfig';
import styles from "../Contactos/Contactos.module.css";

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchContacts();
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Login error:', error);
      alert('Error logging in. Please check your credentials.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error logging out.');
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
  const handleCopyPhone = (phone) => {
    navigator.clipboard.writeText(phone);
    alert(`Teléfono ${phone} copiado al portapapeles.`);
  };

  return (
    <div className={styles.mainContent}>
      {user && (
        <AppBar position="static" className={styles.appBar}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Bienvenido, {user.email}
            </Typography>
            <button className={styles.btnSession} onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </Toolbar>
        </AppBar>
      )}

      {!user ? (
        <div className={styles.container}>
          <Card className={styles.cardContainer}>
            <CardContent className={styles.cardContent}>
              <img src={megaLogo}></img>
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
                style={{ marginBottom: '20px', width: '100%' }}
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
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
                style={{ marginBottom: '20px', width: '100%' }}
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
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
              <input
                className={styles.textInput}
                placeholder="Nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              ></input>
              <input
                className={styles.textInput}
                placeholder="Numero de Tienda"
                value={form.storeNumber}
                onChange={(e) => setForm({ ...form, storeNumber: e.target.value })}
              ></input>

              <input
                className={styles.textInput}
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
            focused
            value={search}
            onChange={handleSearch}
            style={{ marginBottom: '20px', width: '100%' }}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
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
        <>
        
        
        
        </>
        {user.email !== 'sopmda@gdnargentina.com' && (
          <>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => handleUpdateContact(contact.id, { ...contact, name: 'Updated Name' })}
            >
              <EditIcon />
            </Button>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => handleDeleteContact(contact.id)}
              style={{ marginLeft: '8px' }}
            >
              <DeleteIcon />
            </Button>
          </>
        )}
        <Button
          variant="outlined"
          color="warning"
          style={{ marginLeft: '8px' }}
          onClick={() => handleCopyPhone(contact.phone)}
        >
          <ContentCopyIcon />

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
