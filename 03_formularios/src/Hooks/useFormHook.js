import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
};

const useFormHook = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    // Se o type não precisar de validação, ele apenas retorna true
    if (type === false) return true;
    // Verifica se o valor está vazio
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      // Verifica se no obj existe o regex para ele e verifica se o regex é valido
      setError(types[type].message);
      return false;
    } else {
      // Se não encontrar nenhum erro, retorna true
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    //Se exister valor no error, chama a validação para verificar o erro e mostrar o erro
    if (error) validate(target.value);
    //Se não tiver erro, apenas adiciona o valor
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useFormHook;
