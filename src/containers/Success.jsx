import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegará en los proximos días</span>
      </div>
    </div>
  );
}

export default Success;