import React from 'react';

/* 
  [useRef]
    Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. 
    Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.
    Geralmenter utilizamos isso em formularios

  [focus()]
    É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.

  [Referência]
    O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.
*/

const UseRef = () => {
  const video = React.useRef();
  React.useEffect(() => {
    console.log(video.current);
  }, []);

  //Exemplo real
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  //isso seria semelhante ao dom
  const inputElement = React.useRef();
  // const inputElement = document.querySelector('input');

  function handleClick() {
    //Adiciona a variavel estado, os comentarios anteriores e o valor que está dentro do input
    setComentarios((comentarios) => [...comentarios, input]);
    //Transforma o valor do input em vazio
    setInput('');
    //Como o input está marcado com refencia [React.useRef()]
    //não é necessario usar DOM para utilizar o focus()
    inputElement.current.focus();
  }

  //[Referência]
  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClickReferencia() {
    //Quando o botão é clicado, isso é executado

    //Usa a variavel de estado para mostrar uma mensagem
    setNotificacao('Obrigado por comprar');
    //Remove qualquer timeout na variavel referencia [timeoutRef], evitando os "pulos"
    clearTimeout(timeoutRef.current);
    //Adiciona um timeout na variavel referencia [timeoutRef]
    timeoutRef.current = setTimeout(() => {
      //Usa a variavel de estado apagar a mensagem
      setNotificacao(null);
    }, 1000);
    //Adiciona 1 na variavel contar
    setContar(contar + 1);
  }

  return (
    <>
      <video ref={video}></video>
      <>
        <h1>Exemplo real</h1>
        <div>
          <ul>
            {comentarios.map((comentario) => (
              <li key={comentario}>{comentario}</li>
            ))}
          </ul>
          {/* [value={input}] variavel com estado */}
          {/* [value={input}] variavel com estado */}
          <input
            type="text"
            value={input}
            ref={inputElement}
            onChange={({ target }) => setInput(target.value)}
          />
          {/* Ao clicar no botão, executa o handleClick */}
          <button onClick={handleClick}>Enviar</button>
        </div>
      </>
      <>
        <h1>Referência</h1>
        <div>
          <p>{notificacao}</p>
          <button onClick={handleClickReferencia}>{contar}</button>
        </div>
      </>
    </>
  );
};

export default UseRef;
