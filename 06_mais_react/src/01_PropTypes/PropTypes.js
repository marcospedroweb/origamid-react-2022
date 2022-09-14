import React from 'react';
import Button from './Button';

/*
  [PropTypes]
    O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. 
    É também possível especificar se uma propriedade é obrigatória ou não. 
    O prop-types já vem instalado no create-react-app, basta importarmos o mesmo para utilizarmos.

  [defaultProps]
    Podemos também definir valores padrões para as propriedades através do defaultProps. Não é necessário o uso do prop-types para definirmos uma propriedade padrão. 
    Isso faz parte do React.
*/

const PropTypes = () => {
  return (
    <>
      <Button width={300} margin="100px">
        Clique aqui
      </Button>
      <Button>Clique aqui</Button>
    </>
  );
};

export default PropTypes;
