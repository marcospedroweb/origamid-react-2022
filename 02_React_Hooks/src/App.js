import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    // Essa é uma maneira de usar o context
    // <GlobalContext.Provider value={{ nome: 'Marcos' }}>
    //   {/* Agora, tudo que estiver dentro do [provider] terá acesso ao contexto */}
    //   {/* Dentro de [value], você pode passar qualquer coisa que tudo dentro desse provider poderá acessar */}
    //   <Produto />
    // </GlobalContext.Provider>

    //Outra maneira de usar o context
    <GlobalStorage>
      {/* Tudo que estiver aqui dentro será passado como parametro "children" lá no globalContext */}
      <Produto />
      <div>Isso é uma div</div>
    </GlobalStorage>
  );
};

export default App;
