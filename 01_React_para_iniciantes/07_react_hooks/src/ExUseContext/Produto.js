import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <>
      <h1>Produtos</h1>
      <ul>
        {global.produto.map((produto) => (
          <li>{produto.nome}</li>
        ))}
      </ul>
    </>
  );
};

export default Produto;
