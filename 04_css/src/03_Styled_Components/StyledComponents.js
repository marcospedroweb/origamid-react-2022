import React from 'react';
import styled from 'styled-components';

/* 
  [Styled Components]
    Permite escrevermos o CSS diretamente no JavaScript. 
    Ao invés de classes, criamos componentes com um estilo único.

  [Instalação]
    npm install styled-components

    Plugin de VS Code
      vscode-styled-components

  [styled]
    O styled é um objeto com diferentes métodos que representam as tags de HTML.

  [Template String Transpilation]
    O uso dos backticks para passarmos a string com os valores do CSS, é válido no JavaScript. Esses valores são passados como argumento da função.

  [Props]
    Podemos passar propriedades como em um component de React.

  [Estado]
    Podemos passar o estado como uma propriedade e modificarmos certos estilos com base no mesmo.

  [Pseudo]
    Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento.
*/
// [styled.ELEMENTO_HTML`.estilo: valor`]
const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-weight: bold;
`;

// [PROPS]
const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

// [Estado e Pseudo elements]
const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;

const StyledComponents = () => {
  function template(value, total) {
    console.log(value);
    console.log(total);
  }
  const total = 1000;
  template`Isso é ${total} um teste`;

  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      <Titulo>Meu titulo</Titulo>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempore
        reiciendis, esse animi accusantium doloribus impedit! Maxime iure,
        impedit quae, similique dolorum ipsum facilis consectetur deleniti odio
        aliquam assumenda tempore molestiae, asperiores reprehenderit deserunt
        quas hic obcaecati rerum? Ea animi quis accusamus, illo doloribus iste
        atque modi sunt nemo provident.
      </Paragrafo>
      <div>StyledComponents</div>
      <>
        <div>
          <Preco cor="#53d956">R$ 2999</Preco>
          <Preco cor="#84e">R$ 1999</Preco>
        </div>
      </>
      <>
        <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
          Ativar
        </Button>
      </>
    </>
  );
};

export default StyledComponents;
