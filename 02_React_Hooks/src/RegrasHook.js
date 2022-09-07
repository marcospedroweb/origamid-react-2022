import React from 'react';

/* 
  São regras que devem ser seguidas, caso contrario retorna um erro
  [Top Level]
    Não utilize os hooks dentro de funções, loops ou condicionais.
    Ao utilizar hooks dentro de funções, você deve transformar essa função em um custom hook, adicionando "use" no começo do nome da função. Ex: numeroAleatorio -> useNumeroAleatorio

  [Componentes e Custom Hooks]
    Utilize hooks apenas em componentes e em custom hooks.
*/

const RegrasHook = () => {
  // Exemplos de coisas para não se fazer
  // const App = () => {
  //   // Correto
  //   React.useEffect(() => {
  //     document.title = 'Título novo';
  //   }, []);

  //   let condicao = true;
  //   if (condicao) {
  //     // Errado
  //     React.useEffect(() => {
  //       document.title = 'Título novo';
  //     }, []);
  //   }

  //   function mudarTitulo() {
  //     // Errado
  //     React.useEffect(() => {
  //       document.title = 'Título novo';
  //     }, []);
  //   }

  //   for (let i = 0; i < 10; i++) {
  //     // Errado
  //     React.useEffect(() => {
  //       document.title = 'Título novo';
  //     }, []);
  //   }

  //   return <div></div>;
  // };

  // Exemplos de coisas para não se fazer
  //   import React from 'react';

  // // Errado, mas pode se transformar em um custom hook se começar com useNumeroAleatorio
  // function numeroAleatorio() {
  //   const numero = Math.random();
  //   React.useEffect(() => {
  //     document.title = numero;
  //   }, []);
  //   return numero;
  // }

  // const App = () => {
  //   return <div></div>;
  // };

  // export default App;

  return <div>RegrasHook</div>;
};

export default RegrasHook;
