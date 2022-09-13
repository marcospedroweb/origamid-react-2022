import React from 'react';
import { NavLink } from 'react-router-dom';

/*
  [NavLink]
    O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.
*/

const Header = () => {
  return (
    <>
      <>
        <nav>
          <NavLink to="/" end activeStyle={{ color: '#f45' }}>
            Home
          </NavLink>{' '}
          |{' '}
          <NavLink to="/sobre" end activeStyle={{ color: '#f45' }}>
            Sobre
          </NavLink>
        </nav>
      </>
    </>
  );
};

export default Header;
