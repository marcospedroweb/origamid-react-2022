import React from 'react';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  return (
    <>
      <h1>Produtos</h1>
      <ul>
        {produtos.map(({ nome, propriedades }) => (
          <li key={nome}>
            {nome}
            <ul>
              {propriedades.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Produtos;
