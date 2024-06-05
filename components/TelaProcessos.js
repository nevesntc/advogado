Copiar// /components/TelaProcessos.js
import React from 'react';
import { Link } from 'react-router-dom';

const processosExemplo = [
  { id: 1, titulo: 'Processo 1', descricao: 'Descrição do processo 1' },
  { id: 2, titulo: 'Processo 2', descricao: 'Descrição do processo 2' },
];

const TelaProcessos = () => {
  return (
    <div>
      <h2>Lista de Processos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {processosExemplo.map(processo => (
          <div key={processo.id} style={{ border: '1px solid #000', margin: '10px', padding: '10px' }}>
            <h3>{processo.titulo}</h3>
            <p>{processo.descricao}</p>
          </div>
        ))}
      </div>
      <Link to="/">Voltar para a tela principal</Link>
    </div>
  );
};

export default TelaProcessos;