import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../01_Router/Home';
import Header from './Header';
import Login from './Login';
import Sobre from './Sobre';

/*
  [Link]
    O Link irá modificar a rota e renderizar o novo componente sem recarregar a página.

  [NavLink]
    O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.

  [useNavigate]
    O hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.
*/

const Link = () => {
  return (
    <BrowserRouter>
      {/* Tudo que ficar aqui fora, aparecerá independente da rota */}
      <Header />
      <Routes>
        {/* Aqui ficará as rotas */}
        {/* <Route path="URI" element={ElementoReact} /> */}
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Link;
