import React from 'react';

const Produto = ({ produto }) => {
  //Recebe o parametro {produto}
  //Define uma variavel de estado [dados]
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    //Se o parametro [produto] houver, executa as linha seguintes
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  //Se dados for null, ou seja, não existe a variavel [produto], retorna null
  if (dados === null) return null;
  return (
    // Se existir, imprime na tela
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
