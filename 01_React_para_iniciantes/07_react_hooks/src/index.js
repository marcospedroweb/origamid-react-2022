import React from 'react';
import ReactDOM from 'react-dom/client';
// import UseState from './UseState';
import Exercicio from './Exercicio/Exercicio';
import Professor from './Exercicio/Professor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //[React.StrictMode]
  // Tudo que possa ser reenderizado o estado, ele reenderiza 2 vezes seguidas durante o modo de produção
  // Quando for o build, não faz essa reenderização dupla

  /* 
  [React.StrictMode]
    O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim é possível identificarmos funções com efeitos coláterais (side effects) e eliminarmos as mesmas.

    Funções com efeitos coláterais são aquelas que modificam estados que estão fora das mesmas.
  
  */
  <React.StrictMode>
    {/* <UseState /> */}
    <Exercicio />
    <Professor />
  </React.StrictMode>,
);
