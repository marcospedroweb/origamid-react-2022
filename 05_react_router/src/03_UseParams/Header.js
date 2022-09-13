import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/*
  [NavLink]
    O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.

  [useLocation]
    Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.    
*/

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(location);
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]);

  return (
    <>
      <>
        <nav>
          <NavLink to="/" end activeStyle={{ color: '#f45' }}>
            Home
          </NavLink>{' '}
        </nav>
      </>
    </>
  );
};

export default Header;
