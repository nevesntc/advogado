Copiar// /components/TelaPrincipal.js
import React from 'react';
import { Link } from 'react-router-dom';

const TelaPrincipal = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div style={{ backgroundImage: 'url(/background.jpg)', height: '300px', backgroundSize: 'cover' }}>
        <h1>Bem vindo ao AppJurídico</h1>
      </div>
      <Link to="/processos">Ver Processos</Link>
      <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
};

export default TelaPrincipal;
