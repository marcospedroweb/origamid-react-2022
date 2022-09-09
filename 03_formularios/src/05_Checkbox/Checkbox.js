import React from 'react';

/* 
  [Checkbox]
    O estado do checkbox está relacionado ao checked.

  [Múltiplos]
    Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.
*/

const Checkbox = () => {
  // [Checkbox]
  const [checkbox, setCheckbox] = React.useState(false);

  // [Múltiplos]
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked)
      //Adiciona aquela cor do checkbox ao array
      setCores([...cores, target.value]);
    // Remove aquela cor do checkbox que estava selecionada
    // Se for o target.value, remove essa cor do array
    else setCores(cores.filter((cor) => cor !== target.value));
  }

  function handleChecked(cor) {
    // Essa função serve para verificar se já há aquela cor no array
    // Se tiver, retorna true, marcando aquele checkbox
    return cores.includes(cor);
  }

  // [EXERCICIO]
  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  return (
    <>
      <>
        <h1>Checkbox</h1>
        <form>
          <label>
            <input
              type="checkbox"
              value="termos"
              checked={checkbox}
              onChange={({ target }) => setCheckbox(target.checked)}
            />
            Li os termos.
          </label>
        </form>
        {checkbox && <p>Leu os termos</p>}
      </>
      <>
        <h1>Múltiplos</h1>
        <form>
          <label>
            <input
              type="checkbox"
              value="azul"
              checked={handleChecked('azul')}
              onChange={handleChange}
            />
            Azul
          </label>
          <label>
            <input
              type="checkbox"
              value="vermelho"
              checked={handleChecked('vermelho')}
              onChange={handleChange}
            />
            Vermelho
          </label>
          <label>
            <input
              type="checkbox"
              value="verde"
              checked={handleChecked('verde')}
              onChange={handleChange}
            />
            Verde
          </label>
          <label>
            <input
              type="checkbox"
              value="amarelo"
              checked={handleChecked('amarelo')}
              onChange={handleChange}
            />
            Amarelo
          </label>
          <label>
            <input
              type="checkbox"
              value="roxo"
              checked={handleChecked('roxo')}
              onChange={handleChange}
            />
            Roxo
          </label>
          <ul>
            {cores.map((cor) => (
              <li key={cor}>{cor}</li>
            ))}
          </ul>
        </form>
      </>
      <>
        <hr />
        <h1>Exercicio</h1>
        <form>
          {coresArray.map((cor) => {
            return (
              <label key={cor} style={{ textTransform: 'capitalize' }}>
                <input
                  type="checkbox"
                  value={cor}
                  checked={handleChecked(cor)}
                  onChange={handleChange}
                />
                {cor}
              </label>
            );
          })}
          <ul>
            {cores.map((cor) => (
              <li key={cor}>{cor}</li>
            ))}
          </ul>
        </form>
      </>
    </>
  );
};

export default Checkbox;
