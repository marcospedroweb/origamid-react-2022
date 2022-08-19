import React from 'react';
import Produto from './Produto';

const ProfUseEffect = () => {
  //Estado para variavel produto
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    //Executado sempre que os elementos são reenderizados

    //Pega o valor guardado no local storage
    const produtoLocal = window.localStorage.getItem('produto');
    //Se houver valor, variavel produto recebe novo valor
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    //Chamado apenas quando a variavel [produto] sofre alteração

    //Se produto for diferente de null, armazena aquele valor no localstorage
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    //Responsável por pegar o nome do produto quando o botão é clicado
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {/* Passa a variavel [produto] como argumento para o componente */}
      <Produto produto={produto} />
    </div>
  );
};

export default ProfUseEffect;
