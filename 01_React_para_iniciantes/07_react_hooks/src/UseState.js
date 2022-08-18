import React from 'react';

/* 
  Estado
    O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

  Hooks
    Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.
*/

const UseState = () => {
  //Estado
  let ativoEstado = true;
  function disableBtn() {
    // Mesmo com o valor da variavel mudando, o react não renderiza novamente o elemento
    ativoEstado = !ativoEstado;
  }

  /* 
    [React.useState]
      O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

      Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.
  
  */
  // Toda vez que a função [setAtivo] for ativada, renderize novamente ele e os filhos do mesmo
  // Geralmente, destruturamos o retorno, com [valor, setValor], utilize no segunda variavel, o nome "set" concatenado com o nome do valor inicial
  const [ativo, setAtivo] = React.useState(true);

  /* 
    Múltiplos Estados
     Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

    Props
      Podemos passar o estado e a função de modificação como propriedades para outros elementos.
  */

  const [dados, setDados] = React.useState({ nome: 'Fulano', idade: '30' });

  function handleClick() {
    // [...dados] utilizando props e aplicando uma nova propriedade para o objeto
    setDados({ ...dados, faculdade: 'Possui faculdade' });
  }

  /* 
    Reatividade
      Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.

    Callback
      Podemos passar uma função de callback para atualizar o estado. 
      A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.
  */
  //Reativo
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);
  function handleClickNaoReativo() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    //Nesse caso, muda o estado do array, mas não reenderiza o mesmo
    items.push('Novo Item');
  }
  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item']);
    /*
      Semelhante a
      () =>{
        items = [...items, 'Novo Item'];
      }
    */
  }

  //callback
  //Podemos utilizar um função diretamente
  const [ativoCall, setAtivoCall] = React.useState(true);
  function handleClickCall() {
    /*
      Se você dá apenas um valor, ele substitui o [ativoCall] pelo valor que você passou
      Ex: 
        const [ativoCall, setAtivoCall] = React.useState(true);
        console.log(ativoCall); // true
        setAtivoCall('banana')
        console.log(ativoCall); // banana

      Entretanto, se você passar uma função, o primeiro parametro será o valor inicial de [ativoCall]
      Ex:
        const [ativoCall, setAtivoCall] = React.useState('maça');
        setAtivoCall((valorInicial)=>{
          console.log(ativoCall); // 'maça'
          return 'feijão';
        });
        console.log(ativoCall); // 'feijão'
    */

    // usando um callback (função), o 1° parametro dessa função será o valor inicial/atual do estado
    // Nesse caso, a função possui o valor inicial [ativoCall] de true, retornando false
    // E a função [setAtivoCall] "faz" ativoCall = false, dai em diante se torna o valor da variavel
    setAtivoCall((anterior) => !anterior);

    //Nesse caso abaixo, [anterior] não existe
    // setAtivoCall(!anterior);
  }

  return (
    <>
      <h1>useState</h1>
      <>
        <h2>Estado</h2>
        <button onClick={disableBtn} disabled={!ativoEstado}>
          {ativoEstado ? 'Botão Ativo' : 'Botão Inativo'}
        </button>
      </>
      <>
        <h2>useState</h2>
        {/* Toda vez que a função [setAtivo] for ativada, renderize novamente ele e os filhos do mesmo */}
        <button onClick={() => setAtivo(!ativo)}>
          {ativo ? 'Botão Ativo' : 'Botão Inativo'}
        </button>
      </>
      <>
        <h2>props</h2>
        {/* Toda vez que a função [setAtivo] for ativada, renderize novamente ele e os filhos do mesmo */}
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
        <button onClick={handleClick}>Faculdade</button>
      </>
      <>
        <h2>Reatividade</h2>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        <button onClick={handleClickNaoReativo}>Adicionar Item</button>
        <button onClick={handleClickReativo}>Adicionar Reativo</button>
      </>
      <>
        <h2>Callback</h2>
        <button onClick={handleClickCall}>
          {ativoCall ? 'Está Ativo' : 'Está Inativo'}
        </button>
      </>
    </>
  );
};

export default UseState;
