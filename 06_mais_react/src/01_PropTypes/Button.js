import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// Com o [propTypes], sempre que o componente utiliza um props, você consegue "tipar" o props, caso não passar do tipo esperado, mostra um erro no console

Button.propTypes = {
  // [Margin] deve ser do tipo string, se não colocar dá um erro no console
  margin: PropTypes.string.isRequired,
  // [Width] deve ser do tipo number
  width: PropTypes.number,
  // [Disabled] deve ser do tipo booleano
  disabled: PropTypes.bool,
};

/*
  [defaultProps]
    Podemos também definir valores padrões para as propriedades através do defaultProps. Não é necessário o uso do prop-types para definirmos uma propriedade padrão. 
    Isso faz parte do React.
*/

Button.defaultProps = {
  width: 200,
  disabled: false,
  margin: '16px',
};

export default Button;
