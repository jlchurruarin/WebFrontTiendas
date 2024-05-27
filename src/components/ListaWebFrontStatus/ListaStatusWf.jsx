import React, { useState } from 'react';

function ListaStatusWf() {
  const [storeStatus, setStoreStatus] = useState({});

  const stores = [
    { name: 'Tienda 1', ip: '29.160.209.252' },
    // Agrega más tiendas aquí si es necesario
  ];

  const pingStore = async (ip) => {
    try {
      const response = await fetch(`https://${ip}:8443`);
      if (response.ok) {
        setStoreStatus(prevStatus => ({ ...prevStatus, [ip]: 'green' }));
      } else {
        setStoreStatus(prevStatus => ({ ...prevStatus, [ip]: 'red' }));
      }
    } catch (error) {
      setStoreStatus(prevStatus => ({ ...prevStatus, [ip]: 'gray' }));
    }
  };

  const renderCircles = () => {
    return stores.map(store => (
      <div key={store.ip} style={{ display: 'inline-block', margin: '10px' }}>
        <p>{store.name}</p>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: storeStatus[store.ip] || 'gray' }}></div>
      </div>
    ));
  };

  const pingAllStores = () => {
    stores.forEach(store => pingStore(store.ip));
  };

  return (
    <div>
      <button onClick={pingAllStores}>Hacer Ping a todas las tiendas</button>
      <div>
        {renderCircles()}
      </div>
    </div>
  );
}

export default ListaStatusWf;
