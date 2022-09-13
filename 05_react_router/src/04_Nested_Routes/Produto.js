/* eslint-disable no-unused-vars */
import { useParams, Route, Routes, NavLink, Outlet } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink> |{' '}
        <NavLink to="avaliacao">Avaliação</NavLink> |{' '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      {/* <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes> */}
      {/* [<Outlet />] Informando ao routes aonde colocar as rotas mostradas em NestedRoutes*/}
      <Outlet />
    </div>
  );
};

export default Produto;
