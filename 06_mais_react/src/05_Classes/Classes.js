import React from 'react';
import Produtos from './Produtos';

/*
  [extends React.Component]
    Antes dos hooks a única forma de criarmos componentes com estados reativos, era através da extensão da classe React.Component. 
    O JSX que é renderizado pelo componente de classe deve estar dentro do retorno do método render().

  [this.props]
    As propriedades ficam dentro do objeto da classe, e podem ser acessadas através do this.props;

  [this.state]
    Para definirmos um estado, temos que definir o valor inicial do mesmo no contructor da classe. 
    Como essa classe é uma extensão, é necessários usarmos o super com o valor das propriedades do Component.

  [this.setState()]
    O this.setState é um método especial utilizado para atualizarmos o this.state. Ele irá renderizar o componente, toda vez que for ativado.

  [Métodos]
    Os métodos podem ser definidos no corpo da classe. 
    Mas para passarmos os mesmos como um callback é necessário utilizarmos o bind, para que o método mantenha o contexto da classe em this.

  [Ciclo de Vida]
    Assim como podemos usar o useEffect para efeitos que acontecem de acordo com mudanças no componente. Temos também alguns métodos na classe para lidar com esse ciclo de vida do componente. Aqui mostro apenas 3, mas existem diversos outros métodos.
*/

const Classes = () => {
  const [ativar, setAtivar] = React.useState(true);

  return (
    <div>
      {ativar && <Produtos titulo="Esse é pelo this.props" />}
      <hr />
      <button onClick={() => setAtivar(!ativar)}>
        {ativar ? 'Sumir componente' : 'Aparecer componente'}
      </button>
    </div>
  );
};

export default Classes;
