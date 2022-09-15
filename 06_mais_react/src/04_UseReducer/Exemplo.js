import React from 'react';

function reducer(state, action, ae) {
  switch (action.type) {
    case 'remover':
      return state.filter((item) => item !== action.content);
    case 'adicionar':
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, [
    'Item 1',
    'Item 1',
    'Item 1',
    'Item 1',
  ]);

  return (
    <div>
      {/* É muito comum passarmos um objeto no dispatch, quando queremos fazer uma ação complexa */}
      <button onClick={() => dispatch({ type: 'remover', content: 'Item 1' })}>
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'adicionar', content: 'Item 2' })}
      >
        +
      </button>
      <p>{state}</p>
    </div>
  );
};

export default Exemplo;
