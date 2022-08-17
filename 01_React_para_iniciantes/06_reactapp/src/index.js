import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Arrays from './Arrays';
// import Eventos from './Eventos';
import Component from './Component';
import Desafio from './Desafio/Desafio';

/*
  Extensão react
    Com a extensão, basta escrever "rafce" que será criado o basico para se criar um component
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Arrays /> */}
    {/* <Eventos /> */}
    {/* <Component /> */}
    <Desafio />
  </React.StrictMode>,
);
