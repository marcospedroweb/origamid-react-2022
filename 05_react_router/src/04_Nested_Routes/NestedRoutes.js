import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './Produto';
import Home from './Home';
import Header from './Header';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

/*
  [Nested Routes]
    Utilizamos nested routes quando precizamos de rotas dentro de rotas. 
    Como por exemplo: perfil/editar e perfil/certificados e etc. Utilize o \* para definir que existem outras rotas dentro.
*/

const NestedRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NestedRoutes;
