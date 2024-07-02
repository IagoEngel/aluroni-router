import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
// import Cardapio from './pages/Cardapio';
// import Inicio from 'pages/Inicio';
// const componenteAtual = window.location.pathname === '/' ? <Inicio /> : <Cardapio />;
import Router from './routes';

ReactDOM.render(
  <React.StrictMode>
    {/* {componenteAtual} */}
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
