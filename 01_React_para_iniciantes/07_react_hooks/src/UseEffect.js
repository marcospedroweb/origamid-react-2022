import React from 'react';

/* 
  [useEffect]
    Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. 
    Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

  [Array de Dependências]
    No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.

  [Dependências Obrigatórias]
    Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

  [Componente Montou]
    O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.

  [Múltiplos Efeitos]
    Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.

  [Antes de Desmontar]
    As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.
*/

const UseEffect = () => {
  const [contar, setContar] = React.useState(0);
  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  //[useEffect]
  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    //Sempre que um elemento for reenderizado, esse callback é ativado
    //Toda vez que o elemento for reenderizado, todo esse componente tambem será reendezidado
    console.log('Ocorre ao renderizar e ao atualizar');
  }, []);

  //[Array de Dependências]
  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  // Ou seja, só reenderiza novamente quando a depedencia, nesse caso, [contar] for atualizada
  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
    // [Dependências Obrigatórias]
    document.title = 'Total ' + contar;
    //Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.
  }, [contar]);

  //[Componente Montou]
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  // [Antes de Desmontar]
  const [ativo, setAtivo] = React.useState(false);
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    //Quando [ativo] sofrer alteração, ou seja, quando o elemento APARECER na tela, esse effect é executado
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    //Quando [ativo] sofrer alteração, ou seja, quando o elemento SUMIR da tela, o return é utlizado para fazer algo, nesse caso, remover o evento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <>
        <h1>UseEffect</h1>
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </>
      <div>
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
      <>
        <h1>Antes de desmontar</h1>
        <>
          <div>
            <p>Meu App</p>
            <button onClick={() => setAtivo(!ativo)}>Abrir</button>
            {ativo && <p style={{ height: '200vh' }}>Produto</p>}
          </div>
        </>
      </>
    </>
  );
};

export default UseEffect;
