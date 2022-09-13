import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Sobre from './Sobre';
/*
  [Head]
    No React não temos acesso direto as tags e informações do Head. Porém com o uso de rotas é essêncial realizar a mudança do título e descrição para cada rota. 
    Podemos fazer isso através de um componente ou custom hook.

  [Helmet]
    Uma extensão famosa é o react-helmet. Ela retona com componente em que você pode definir tags do Head dentro do mesmo.

  > https://github.com/nfl/react-helmet
*/

const Head = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Head;
