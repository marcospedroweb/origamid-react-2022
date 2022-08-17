import React from 'react';
import Header from './Header';
import Produtos from './Produtos';
import Home from './Home';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const Desafio = () => {
  const { pathname } = window.location;
  return (
    <>
      <Header />
      {pathname === '/Home' ? <Home /> : <Produtos />}
    </>
  );
};

export default Desafio;
