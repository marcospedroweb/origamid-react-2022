import React from 'react';
//Exemplo real de context

/*
  [createContext]
    O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.

  [Provider]
    O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto.

  [useContext]
    O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value. Devemos passar o contexto criado como seu agumento.
*/

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  //Dessa maneira, posso passar o provider direto
  //[children] será tudo que será passado dentro do globalStorage como componente em OUTRO componente
  //E da mesma maneira, posso passar o value aqui
  const [contar, setContar] = React.useState(0);
  return (
    <GlobalContext.Provider value={{ nome: 'Marcos', contar, setContar }}>
      {children}
    </GlobalContext.Provider>
  );
};
