import React from 'react';

/* 
  [Radio]
    No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. 
    O que retornar true irá marcar o botão.

  [Diferentes Grupos]
  Defina um estado para cada grupo.
*/

const DRadio = () => {
  const [radio, setRadio] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }

  //[Diferentes grupos]
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <>
      <form>
        <label>
          <input
            type="radio"
            value="notebook"
            checked={radio === 'notebook'}
            onChange={handleChange}
          />
          Notebook
        </label>
        <label>
          <input
            type="radio"
            value="smartphone"
            checked={radio === 'smartphone'}
            onChange={handleChange}
          />
          Smartphone
        </label>
        <label>
          <input
            type="radio"
            value="tablet"
            checked={radio === 'tablet'}
            onChange={handleChange}
          />
          Tablet
        </label>
      </form>
      <>
        <h1>Diferentes grupos</h1>
        <form>
          <h2>Dispositivo</h2>
          <label>
            <input
              type="radio"
              value="notebook"
              checked={produto === 'notebook'}
              onChange={({ target }) => setProduto(target.value)}
            />
            Notebook
          </label>
          <label>
            <input
              type="radio"
              value="smartphone"
              checked={produto === 'smartphone'}
              onChange={({ target }) => setProduto(target.value)}
            />
            Smartphone
          </label>

          <h2>Cor</h2>
          <label>
            <input
              type="radio"
              value="azul"
              checked={cor === 'azul'}
              onChange={({ target }) => setCor(target.value)}
            />
            Azul
          </label>
          <label>
            <input
              type="radio"
              value="vermelho"
              checked={cor === 'vermelho'}
              onChange={({ target }) => setCor(target.value)}
            />
            Vermelho
          </label>
        </form>
      </>
    </>
  );
};

export default DRadio;
