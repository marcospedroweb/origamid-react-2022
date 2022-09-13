import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './Sobre';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';

/* 
  [React Router Dom]
    É uma extensão que permite gerenciarmos as rotas do React. Ela é desenvolvida e mantida pela empresa React Trainning.

    https://reacttraining.com/react-router/
    https://github.com/ReactTraining/react-router/blob/dev/docs/api-reference.md

  > npm install history react-router-dom@6.0.0-beta.0

  [BrowserRouter, Routes e Route]
    O [BrowserRouter] deve ser o componente pai que envolve tudo que depender do react-router. 
    O [Routes] define a área em que vamos colocar os nossos Route. 
    O [Route] recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.
*/

const Router = () => {
  return (
    <BrowserRouter>
      {/* Tudo que ficar aqui fora, aparecerá independente da rota */}
      <Header />
      <Routes>
        {/* Aqui ficará as rotas */}
        {/* <Route path="URI" element={ElementoReact} /> */}
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        {/* Coloco uma opção para caso o usuario digite um rota invalida */}
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
