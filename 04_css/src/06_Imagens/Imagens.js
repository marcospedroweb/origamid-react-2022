import React from 'react';

/*
  [Imagens]
    Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.

  [Background]
    No CSS podemos utilizar o caminho direto. É importante colocar o ./, pois o webpack vai utilizar isso e substituir para o caminho final do site.

  [SVG]
    Um svg pode ser adicionado da mesma forma que as anteriores, porém ele também pode ser adicionado como um componente. Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre o mesmo.

  [Componentes SVG]
    Além da importação direto como componentes, podemos também definirmos cada SVG como um componente. 
    Assim deixamos o svg mais dinamico com os parametros
    Lembre-se, propriedades que tiverem hífens serão modificadas: fill-rule vira fillRule

*/

import foto from './img/foto.jpg';
import './Style.css';
import { ReactComponent as Dog } from './img/dog.svg';
import DogSvg from './DogSvg';

const Imagens = () => {
  return (
    <>
      <div style={{ margin: '32px auto', width: '80vw' }}>
        <h1>Imagens</h1>
        <>
          <img src={foto} style={{ maxWidth: '100%' }} alt="" />
        </>
        <>
          <p className="fundo"></p>
        </>
        <>
          <Dog />
        </>
        <>
          <DogSvg color="#84e" />
        </>
      </div>
    </>
  );
};

export default Imagens;
