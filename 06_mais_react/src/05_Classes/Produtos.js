import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    // Quando se utiliza [Constructor] é necessario passar o props como parametro
    // Além disso, chamar o [super()] para executar o construtor da classe herdada
    super();
    this.variavelDoCostrutor = 'Isso é uma variavel criada no construtor';
    // Para ser reativo, é necessario criar o [this.state] e passar as propriedades que serão state
    this.state = {
      contar: 0,
    };

    this.aumentarDez = this.aumentarDez.bind(this);
  }

  componentDidMount() {
    // Acontece quando o componente é montado
    console.log('O componente foi montado');
  }

  componentDidUpdate() {
    // Acontece quando o componente for reenderizado
    console.log('O componente foi reenderizado');
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    // Acontece antes do elemento desmontar, ou seja, antes do elemento sair da tela
    console.log('Componente saiu da tela');
  }

  // Criando metodos
  aumentarDez() {
    this.setState((state) => ({
      contar: state.contar + 10,
    }));
  }

  render() {
    return (
      <>
        <>
          {' '}
          <h1>Componente de Classe</h1>
          <p>{this.props.titulo}</p>
          <p>{this.variavelDoCostrutor}</p>
        </>
        <>
          <h2>This.state</h2>
          <p>{this.state.contar}</p>
          {/* Utilizamos o [this.setState(Objeto)] para atualizar o estado e objeto dentro do mesmo passando o que deve ser atribuido, porém essa não é maneira recomendada */}
          <button
            onClick={() => this.setState({ contar: this.state.contar - 1 })}
          >
            Diminuir
          </button>
          {/* A maneira recomenada é essa, this.setState((state, props) => (Objeto)) */}{' '}
          <button
            onClick={() =>
              this.setState((state) => ({
                contar: state.contar + 1,
              }))
            }
          >
            Aumentar
          </button>{' '}
          <button onClick={this.aumentarDez}>Aumentar 10</button>
        </>
      </>
    );
  }
}

export default Produtos;
