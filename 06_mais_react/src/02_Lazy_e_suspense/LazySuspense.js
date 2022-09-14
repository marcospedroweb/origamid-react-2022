import React from 'react';
// import Contato from './Contato';
//Dessa maneira, [React.lazy(callback)] recebe um callback, que retorna um PROMISSE do [import(ComponenteEndereço)]
const Contato = React.lazy(() => import('./Contato'));

/*
  [Code Splitting]
    Com o Lazy e Suspense podemos dividir o código da nossa aplicação. 
    Dividir em partes que só ira chamar componentes necessarios no momento.
    Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias.
    Isso se utiliza em apenas momentos especificos em que os componentes possuem algo muito grande e que pode "pesar" o app
*/

const LazySuspense = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      <h1>Lazy e suspense</h1>
      {/* [<React.Suspense>] Tudo que colocar dentro é um promisse, que só será mostrado quando o mesmo for carregado, enquanto não carrega, mostra um msg de loading */}
      {/* [fallback={elemento}] É o que será mostrado enquanto o(s) elemento(s) de dentro do suspense não é carregado */}
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </>
  );
};

export default LazySuspense;
