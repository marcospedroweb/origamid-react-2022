import React from 'react';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const ExUseEffect = () => {
  const [dados, setDados] = React.useState(null);
  const [dadosLocal, setDadosLocal] = React.useState(
    localStorage.getItem('produto'),
  );

  async function fetchProduto(produto) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const dadosJson = await response.json();
    setDados(dadosJson);
  }

  React.useEffect(() => {
    if (dados) setDadosLocal(dados.nome);
  }, [dados]);

  React.useEffect(() => {
    if (dadosLocal) {
      fetchProduto(dadosLocal);
      localStorage.setItem('produto', dadosLocal);
    }
  }, [dadosLocal]);

  return (
    <>
      <h1>Prefêrencia: {dados && <span>{dados.nome}</span>}</h1>
      <>
        <button onClick={() => fetchProduto('notebook')}>Notebook</button>{' '}
        <button onClick={() => fetchProduto('smartphone')}>Smartphone</button>
      </>
      <>
        {dados && (
          <>
            <h2>{dados.nome}</h2>
            <p>R$ {dados.preco}</p>
          </>
        )}
      </>
    </>
  );
};

export default ExUseEffect;
