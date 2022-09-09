import React from 'react';
import Slide from './Mini_Slide/Slide';
import Produto from './Produto';
import './Style.css';

/*
  [Animation]
    Anime a entrada de elementos utilizando a propriedade animation.

  [Slide]
    Anime a entrada de elementos utilizando a propriedade animation.

*/

const Animacoes = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div className="container-xxl mt-5">
      <>
        <h1>Animação basica</h1>
        <div className="container-xxl">
          <div className="mt-5">
            <button onClick={() => setAtivar(!ativar)}>Ativar</button>
            {ativar && <Produto />}
          </div>
        </div>
      </>
      <>
        <h1 className="my-4">Mini slide</h1>
        <Slide />
      </>
    </div>
  );
};

export default Animacoes;
