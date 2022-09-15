import React from 'react';
import Exemplo from './Exemplo';

/*
  [React.useReducer]
    O useReducer serve para lidarmos com estados que possuam funções fixas responsáveis por modificar o mesmo.
*/

function reducer(state, action) {
  // [state] é [state]
  // [action] vem dentro do dispatch(action)
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'reduzir':
      return state - 1;
    default:
      throw new Error();
  }
}

const UseReducer = () => {
  // [React.useReducer(Função, ValorInicial)] é semelhante ao React.useState a diferença que para evitar N funções que alteram o estado do elemento, com o reducer, utilizamos apenas uma função que será responsavel por QUALQUER mudança de estado
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <>
        {' '}
        <div>
          {/* É muito comum passarmos um objeto no dispatch, quando queremos fazer uma ação complexa */}
          <button onClick={() => dispatch('aumentar')}>+</button>
          <button onClick={() => dispatch('reduzir')}>-</button>
          <p>{state}</p>
        </div>
      </>
      <>
        <h1>Exemplo</h1>
        <Exemplo />
      </>
    </>
  );
};

export default UseReducer;
