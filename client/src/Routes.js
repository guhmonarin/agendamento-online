import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Calendar from './components/Calendar';


const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/calendar" component={Calendar} />
      </Routes>
    </Router>
  );
};

export default Rotas;
