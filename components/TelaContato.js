Copiar// /components/TelaContato.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TelaContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Código para enviar a mensagem
    alert('Mensagem enviada');
  };

  return (
    <div>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <Link to="/">Voltar para a tela principal</Link>
    </div>
  );
};

export default TelaContato;