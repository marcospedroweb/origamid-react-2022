import React from 'react';
import Checkbox from '../Form_Componentes/Checkbox';
import Input from '../Form_Componentes/Input';
import Radio from '../Form_Componentes/Radio';
import Select from '../Form_Componentes/Select';

const Componentes = () => {
  const [nome, setNome] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <>
      <h1>Componentes</h1>
      <form>
        <Input
          label="Nome"
          id="nome"
          type="text"
          value={nome}
          setValue={setNome}
        />
        <Select
          options={['Notebook', 'Smartphone', 'Tablet']}
          value={produto}
          setValue={setProduto}
        />
        <Radio
          options={['azul', 'verde', 'amarelo']}
          value={cor}
          setValue={setCor}
        />
        <Checkbox
          options={['Uva', 'Laranja', 'Limão']}
          value={fruta}
          setValue={setFruta}
        />

        <Checkbox
          options={['Termos e Condições']}
          value={termos}
          setValue={setTermos}
        />
      </form>
    </>
  );
};

export default Componentes;
