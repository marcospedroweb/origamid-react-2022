import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Essa é a home</p>
      <Link to="produto/notebook">Notebook</Link> |{' '}
      <Link to="produto/notebook">Smartphone</Link>
    </>
  );
};

export default Home;
