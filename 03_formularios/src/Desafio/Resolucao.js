import React from 'react';
import Radio from '../Form_Componentes/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Resolucao = () => {
  const [acertos, setAcertos] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [value, setValue] = React.useState(null);
  const [etapa, setEtapa] = React.useState(0);
  const perguntaAtual = perguntas[etapa];

  function handleSubmit(event) {
    event.preventDefault();
    if (value === perguntaAtual.resposta)
      setAcertos({ ...acertos, [perguntaAtual.id]: perguntaAtual.resposta });
    setEtapa(etapa + 1);
  }

  function resultado() {
    return perguntas.filter(({ id, resposta }) => resposta === acertos[id]);
  }

  if (perguntaAtual)
    return (
      <>
        <>
          <span style={{ fontWeight: 500 }}>
            Pergunta {etapa + 1} de {perguntas.length}
          </span>
        </>
        <fieldset style={{ marginTop: '32px' }}>
          <legend style={{ fontWeight: 'bold' }}>
            {perguntaAtual.pergunta}
          </legend>
          <>
            <form onSubmit={handleSubmit}>
              <Radio
                options={perguntaAtual.options}
                value={value}
                setValue={setValue}
              />
              <button onClick={handleSubmit} style={{ marginTop: '16px' }}>
                Proximo
              </button>
            </form>
          </>
        </fieldset>
      </>
    );
  else
    return (
      <span style={{ fontWeight: 500 }}>
        Você acertou {resultado().length} de {perguntas.length}
      </span>
    );
};

export default Resolucao;
