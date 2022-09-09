import React from 'react';
import Produto from './Components/Produto';

/* 
  [CSS]
    Os modules garantem que as classes utilizada sejam sempre ÚNICAS, evitando o conflito. 
    O modo já vem configurando com o create-react-app, basta definirmos o nome do arquivo css com a palavra .module. 
    Ex: Produto.module.css. Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes únicos para as classes.

  [Nome unico]
    Ao colocarmos [.module.] no nosso arquivo css, quando importarmos esse arquivo, o webpack forma um Objeto. 
    Nesse objeto tem todas as estilizações que criamos só que com um porém, toda CLASSE que criarmos, o webpack transformara essa classe em unica, colocando algum codigo a frente dessa classe.
    Ex: .TituloMain -> .[ComponenteName]_TituloMain_[CodigoGerado]

  [camelCase]
    Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hífens titulo-principal.

  [Funcionalidades Extras]
    O CSS Modules disponibiliza algumas funcionalidades extras para o CSS, como a definição de variáveis, composição de elementos e definição de classes no contexto global. Não aconselho o uso, pois a sintaxe não é bem suportada pela IDE (VS Code) e pelo eslint.
*/

const CssModule = () => {
  return <Produto />;
};

export default CssModule;
