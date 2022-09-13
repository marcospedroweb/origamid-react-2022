/* eslint-disable no-unused-vars */
import React from 'react';
import HeadInfo from './HeadInfo';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      {/* Passando as informações necessarias para o componente */}
      {/* <HeadInfo title="Página Home" description="Descrição da home" /> */}

      {/* Utilizando uma extensão */}
      <Helmet>
        <title>Página Home helmet</title>
        <meta name="description" content="Descrição da pagina home helmet" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

export default Home;
