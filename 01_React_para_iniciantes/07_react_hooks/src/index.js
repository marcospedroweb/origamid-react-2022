import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import UseState from './UseState';
// import Exercicio from './ExUseState/Exercicio';
// import Professor from './ExUseState/Professor';
// import UseEffect from './UseEffect';
// import ExUseEffect from './ExUseEffect/ExUseEffect';
// import ProfUseEffect from './ExUseEffect/ProfUseEffect';
// import UseRef from './UseRef';
// import UseMemoCallback from './UseMemoCallback';
// import UseContext from './UseContext';
// import AppContext from './ExUseContext/App';
import CustomHook from './CustomHook';

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
    {/* <Exercicio /> */}
    {/* <Professor /> */}
    {/* <UseEffect /> */}
    {/* <ExUseEffect />
    <ProfUseEffect /> */}
    {/* <UseRef /> */}
    {/* <UseMemoCallback /> */}
    {/* <UseContext /> */}
    {/* <App /> */}
    {/* <AppContext /> */}
    <CustomHook />
  </React.StrictMode>,
);
