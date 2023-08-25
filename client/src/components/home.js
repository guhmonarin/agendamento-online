import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Agendamento Online</h1>
      <p>Clique no botão abaixo para acessar o calendário de agendamentos:</p>
      <Link to="/calendar">Calendário</Link>
    </div>
  );
};

export default Home;
