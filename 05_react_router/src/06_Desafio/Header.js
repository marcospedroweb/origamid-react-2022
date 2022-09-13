import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/produtos">
          <button>Produtos</button>
        </Link>
        <Link to="/contato">
          <button>Contato</button>
        </Link>
      </nav>
    </>
  );
};

export default Header;
