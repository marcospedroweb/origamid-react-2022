import React from 'react';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Exercicio = () => {
  const [produtos, setProdutos] = React.useState([]);

  async function fetchProduto(url) {
    const response = await fetch(url);
    const dados = await response.json();
    setProdutos((produtos) => [...produtos, dados]);
  }

  function handleClick({ target }) {
    const nomeProduto = target.textContent.toLowerCase();
    fetchProduto(
      `https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`,
    );
  }

  return (
    <>
      <h1>Exercicio</h1>
      <div>
        <button onClick={handleClick}>Tablet</button>{' '}
        <button onClick={handleClick}>Smartphone</button>{' '}
        <button onClick={handleClick}>Notebook</button>
      </div>
      <ul>
        {produtos.map(({ id, nome, preco }) => (
          <li key={id}>
            {nome}, {preco}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Exercicio;
