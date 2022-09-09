import './Title.css';

/*
  [Componentes]
    Ao importar um componentes, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.
*/

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};

export default Title;
