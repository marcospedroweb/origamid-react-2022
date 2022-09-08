import React from 'react';
import Input from './Form_Componentes/Input';
import useForm from './Hooks/useForm';

const HuseForm = () => {
  const cep = useForm('cep');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="cep" label="CEP" type="text" {...cep} />
      <button>Enviar</button>
    </form>
  );
};

export default HuseForm;
