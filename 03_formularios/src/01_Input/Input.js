import React from 'react';

/*
  [Reatividade]
    Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange.

  [Form]
    No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="".

  [Múltiplos Campos]
    Podemos definir um estado para cada campo.
*/

const Input = () => {
  // [Reatividade]
  const [nome, setNome] = React.useState('');

  // [Form]
  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, email);
  }

  // [Múltiplos Campos]
  const [email, setEmail] = React.useState('');

  // [Objeto]
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });
  function handleChange({ target }) {
    //Destruturando o ELEMENTO DOM
    //Pegando seus atributos [id, nesse caso o "name" ou "email"] e [value, o que usuario digitou]
    const { id, value } = target;
    //Pegando os valores anteriores do objeto form e adicionando o novo valor
    setForm({ ...form, [id]: value });
  }

  //Exercicio
  const [formApi, setFormApi] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  const [responseApi, setResponseApi] = React.useState(null);

  function submitForm(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(formApi),
    }).then((r) => setResponseApi(r));
  }

  function handleChangeAPI({ target }) {
    const { id, value } = target;
    setFormApi({ ...formApi, [id]: value });
  }

  // [Exercicio professor]
  const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'Cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Numero',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    },
  ];

  const [formProf, setformProf] = React.useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  const [response, setResponse] = React.useState(null);

  function handleSubmitProf(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formProf),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChangeProf({ target }) {
    const { id, value } = target;
    setformProf({ ...formProf, [id]: value });
  }

  return (
    <>
      <>
        <h1>Reatividade</h1>
        <form>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <p>{nome}</p>
        </form>
        <hr />
      </>
      <>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <button>Enviar</button>
        </form>
      </>
      <>
        <h1>Múltiplos Campos</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button>Enviar</button>
        </form>
      </>
      <>
        <h1>Objeto</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={form.nome}
            onChange={handleChange}
          />
          {form.nome}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
          {form.email}
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </>
      <>
        <h1>Exercicio</h1>
        <p>Faça um fetch (POST) para a API abaixo</p>
        <p>Para a criação ser aceita é necessário enviar dodos de: </p>
        <p>nome, email, senha, cep, rua, numero, bairro, cidade e estado</p>
        <form onSubmit={submitForm}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={formApi.nome}
            onChange={handleChangeAPI}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formApi.email}
            onChange={handleChangeAPI}
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={formApi.senha}
            onChange={handleChangeAPI}
          />
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            value={formApi.cep}
            onChange={handleChangeAPI}
          />
          <label htmlFor="rua">Rua</label>
          <input
            type="text"
            id="rua"
            value={formApi.rua}
            onChange={handleChangeAPI}
          />
          <label htmlFor="numero">Numero</label>
          <input
            type="text"
            id="numero"
            value={formApi.numero}
            onChange={handleChangeAPI}
          />
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            value={formApi.bairro}
            onChange={handleChangeAPI}
          />
          <label htmlFor="cidade">cidade</label>
          <input
            type="text"
            id="cidade"
            value={formApi.cidade}
            onChange={handleChangeAPI}
          />
          <label htmlFor="estado">estado</label>
          <input
            type="text"
            id="estado"
            value={formApi.estado}
            onChange={handleChangeAPI}
          />
          <h2>
            Respota: {responseApi && responseApi.ok && <p>Usuario criado</p>}
          </h2>
          <button type="submit">Enviar</button>
        </form>
      </>
      <>
        <h1>Exercicio professor</h1>
        <form onSubmit={handleSubmitProf}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={formProf.nome}
            onChange={handleChangeProf}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formProf.email}
            onChange={handleChangeProf}
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={formProf.senha}
            onChange={handleChangeProf}
          />
          <label htmlFor="cep">Cep</label>
          <input
            type="text"
            id="cep"
            value={formProf.cep}
            onChange={handleChangeProf}
          />
          <label htmlFor="senha">Rua</label>
          <input
            type="text"
            id="rua"
            value={formProf.rua}
            onChange={handleChangeProf}
          />
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            id="numero"
            value={formProf.numero}
            onChange={handleChangeProf}
          />
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            value={formProf.bairro}
            onChange={handleChangeProf}
          />
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            value={formProf.cidade}
            onChange={handleChangeProf}
          />
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            id="estado"
            value={formProf.estado}
            onChange={handleChangeProf}
          />
          <button>Enviar</button>
          {response && response.ok && <p>Usuário Criado</p>}
        </form>
      </>
    </>
  );
};

export default Input;
