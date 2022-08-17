import React from 'react';
import Header from './Header';
import Footer from './Footer';

/*
  Componentes
    O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar durante o curso com os chamos componentes funcionais.

  Extensão react
    Com a extensão, basta escrever "rafce" que será criado o basico para se criar um component

  Interface
    Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.

  Return
    Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (string, array, um elemento JSX, null e etc).

  React.Fragment
    Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento, envolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <></>
*/

const Component = () => {
  return (
    <>
      <Header />
      <div>
        <p>Esse é meu App</p>
      </div>
      <Footer />
    </>
  );
};

export default Component;
