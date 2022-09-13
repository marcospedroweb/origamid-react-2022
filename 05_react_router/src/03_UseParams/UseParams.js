import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './Produto';
import Home from './Home';
import Header from './Header';

/*
  [Rota Dinâmica]
    O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma variável dentro do componente. 
    Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone.

  [useParams]
    O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.

  [useLocation]
    Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.
*/

const UseParams = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UseParams;
