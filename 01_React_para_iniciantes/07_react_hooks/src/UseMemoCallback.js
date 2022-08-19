import React from 'react';

/*
  [useMemo]
    Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.

  [useCallback]
    Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.
    Dificilmente você irá encontrar um cenário em que essa função seja útil
    Vale ressaltar que isso não melhora o desempenho
*/

function operacaoLenta() {
  let c;
  for (let i = 0; i < 1000000; i++) c = i + i / 10;
  return c;
}

//Callback
const set1 = new Set();
const set2 = new Set();

const UseMemoCallback = () => {
  const [contar, setContar] = React.useState(0);
  // [React.useMemo], o segundo parametro é a array de dependencias
  const valor = React.useMemo(() => {
    //Esse não é um caso tão necessario para usar o useMemo
    const localStorageItem = window.localStorage.getItem('produto');
    // só será executado uma vez
    // ficará salvo na memoria
    return localStorageItem;
  }, []);
  // console.log(valor);

  //Caso mais necessario para [useMemo]
  const t1 = performance.now();
  //Com o [React.useMemo], ele salva essa operação na memoria, não executando o for novamente todas as vezes que a tela é reenderizada
  const valorFor = React.useMemo(() => operacaoLenta(), []);
  console.log('Resultado da conta: ', valorFor);
  console.log('Duração da execução: ', performance.now() - t1);

  //[UseCallback]
  const [contarCall, setContarCall] = React.useState(0);
  const handleClick = React.useCallback(() => {
    setContar((contarCall) => contarCall + 1);
  }, []);

  //Exemplo call
  // [new Set()] É semelhante a um array, só que recebe apenas 1 item
  const set1 = new Set();
  const set2 = new Set();
  //Essa função é criada e armazenada sempre quando reenderiza
  const func1 = () => {
    console.log('Teste');
  };
  //Essa função é criada e armazenada sempre quando reenderiza
  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2:', set2);

  return (
    <>
      <>
        {' '}
        <h1>UseMemo</h1>
        <button onClick={() => setContar(contar + 1)}>
          {valor} {contar}
        </button>
      </>
      <>
        <h1>UseCallback</h1>
        <button onClick={handleClick}>{contarCall}</button>
        <>
          <h2>Exemplo useCallback</h2>
          <div>
            <div>
              <div>
                <p onClick={func1}>Produto 1</p>
                <p onClick={func2}>Produto 2</p>
              </div>
              <button onClick={() => setContar(contar + 1)}>{contar}</button>
            </div>
          </div>
        </>
      </>
    </>
  );
};

export default UseMemoCallback;
