import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/*
  [Link]
    O Link irá modificar a rota e renderizar o novo componente sem recarregar a página.

  [NavLink]
    O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.
*/

const Header = () => {
  return (
    <>
      <>
        <nav>
          <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link>
        </nav>
      </>
      <>
        <nav>
          <NavLink to="/" end activeStyle={{ color: '#f45' }}>
            Home
          </NavLink>{' '}
          |{' '}
          <NavLink to="sobre" activeStyle={{ color: '#f45' }}>
            Sobre
          </NavLink>{' '}
          |{' '}
          <NavLink to="login" activeStyle={{ color: '#f45' }}>
            Login
          </NavLink>
        </nav>
      </>
    </>
  );
};

export default Header;
