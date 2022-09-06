import React from 'react';
import { GlobalContext } from './GlobalContext';
//Para usar o value do context é necessario trazer o contexto

const Produto = () => {
  const global = React.useContext(GlobalContext); //Recebe tudo passado dentro de value
  return (
    <>
      <div>Componente produto, {global.nome}</div>
      <div>
        <button onClick={() => global.setContar(global.contar + 1)}>
          Contar ({global.contar})
        </button>
      </div>
    </>
  );
};

export default Produto;
