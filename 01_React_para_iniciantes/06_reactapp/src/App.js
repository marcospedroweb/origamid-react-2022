import React from 'react';

/*
  Atributos
    Atributos podem ser passados como no HTML, porém com alguns casos especiais.

  Casos Especiais
    O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className.

  camelCase
    Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.

  Expressões / Variáveis
    Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves {}.

  Style
    O style irá receber um objeto com as propriedades do elemento em camelCase.
*/

const App = () => {
  const text = 'Insira seu nome';
  const titulo = 'Isso é um titulo';
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };
  // [React.Fragment] Cria uma "div invisivel", e adiciona o conteudo dentro dele no root
  // É possivel utilizar apenas <>Seu conteudo</> no lugar do React.Fragment
  return (
    <>
      <>
        <h1 style={estiloH1}>{titulo}</h1>
        <p style={{ color: 'green' }}>Isso é um paragrafo</p>
      </>
      <React.Fragment>
        <form className="classe-css">
          <label htmlFor="nome">{text}</label>
          <input type="text" id="nome" />
        </form>
        <p>{200 + 25}</p>
        <video autoPlay />
      </React.Fragment>
    </>
  );
};

export default App;
