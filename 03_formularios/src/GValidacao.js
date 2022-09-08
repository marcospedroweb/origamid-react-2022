import React from 'react';
import Input from './Form_Componentes/Input';

/*
  [onBlur]
    O onBlur é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo. A validação pode ser feita com JavaScript utilizando REGEX.

*/

const GValidacao = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(event, value = '') {
    event.preventDefault();
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form onSubmit={validateCep}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default GValidacao;
