import React from 'react';
import './App.css';
import Title from './Title';

/*
  [Import]
    A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript. A importação é efetuada pelo Webpack

  [Componentes]
    Ao importar um componentes, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.

  [Conflito]
    Todos os arquivos serão unidos em um CSS final (quando vc der o npm run build) e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.

  [Evite Conflitos]
    Defina nomes únicos para os componentes e coloque classes com os mesmos nomes
*/

const CssImport = () => {
  return (
    <>
      <Title text={'Isso é um titulo'} />
      <div className="container">CssImport</div>
    </>
  );
};

export default CssImport;
