import React from 'react';

const Arrays = () => {
  const estiloTitulos = {
    fontFamily: 'Helvetica',
  };

  /* 
    JSX Arrays
      O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.

    Keys
     O JSX necessita de uma key única para cada elemento da Array. https://reactjs.org/docs/lists-and-keys.html

    Map
      É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.

    Array de Objetos
      O cenário mais comum é trabalhar com array's de objetos.
  */
  // JSX Arrays
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];
  //Keys
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];
  //Map
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
  //Array de Objetos
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];
  //Exercicio
  const produtosExercicios = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];
  const dados = produtosExercicios.filter(
    ({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
  );

  return (
    <>
      <h1 style={estiloTitulos}>Arrays</h1>
      <>
        <h2 style={estiloTitulos}>JSX Arrays</h2>
        <p>{produtos}</p>
      </>
      <>
        <h2 style={estiloTitulos}>Keys</h2>
        <ul>{empresas}</ul>
      </>
      <>
        <h2 style={estiloTitulos}>Map</h2>
        <ul>
          {filmes.map((filme) => (
            <li key={filme}>{filme}</li>
          ))}
        </ul>
      </>
      <>
        <h2 style={estiloTitulos}>Array de Objetos</h2>
        <ul>
          {livros
            .filter((livro) => livro.ano >= 1998)
            .map((livro) => (
              <li key={livro.nome}>
                {livro.nome}, {livro.ano}
              </li>
            ))}
        </ul>
      </>
      <>
        <h2 style={(estiloTitulos, { marginTop: '100px' })}>Exercicio</h2>
        {/* Organize os produtos como mostrado no vídeo 
        Mostre apenas produtos que forem mais caros que R$ 1500 */}
        {dados.map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h3 style={estiloTitulos}>{nome}</h3>
            <p style={{ fontWeight: '500' }}>Preço: {preco}</p>
            <ul>
              {cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor }}>
                  <span style={{ color: '#fff' }}>{cor}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    </>
  );
};

export default Arrays;
