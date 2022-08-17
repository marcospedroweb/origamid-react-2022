/*
  Webpack
    - Agrupa (bundle) o código do seu aplicativo
    - Permite definirmos os componentes em diferentes arquivos para melhor organização
    - Facilita a importação de código externo instalado via NPM
    - https://webpack.js.org/

  Babel
    - Transforma JSX return <div></div> em funções de React React.createElement()
    - Transforma JavaScript novo const em JavaScript antigo var
    - https://babeljs.io/

  [Instalado tudo necessario para desenvolver com React]
  * npm init -y
  * npm install webpack webpack-cli webpack-dev-server --save-dev
  * Criar arquivos mínimos. 
    Atualização de 2021, na versão 4 do dev-server é necessário indicar o caminho do arquivo index.html.
      - webpack.config.js
      - index.html
      - src/
        - index.js
  * webpack.config.js
      module.exports = {
        devServer: {
          static: './',
        },
      };
  * Adicionar os scripts de desenvolvimento e build ao package.json
      "scripts": {
        "start": "webpack serve --mode development --open --hot",
        "build": "webpack --mode production"
      },

  * Instalando o React
      npm install react react-dom

  * Importar o react e DOM
      import ReactDOM from 'react-dom/client';
      import React from 'react';

  * Instalando o Babel 
      npm install @babel/core @babel/preset-react babel-loader --save-dev

  * Atualizando o webpack
      module.exports = {
      // indica que o devserver deve utilizar a raiz para servir o html.
      // atualização de 2021
      devServer: {
        static: './',
      },
      // Nos módulos
      module: {
        // Aplique as seguintes regras
        rules: [
          {
            // Nos arquivos que terminam ($) com .js
            test: /\.js$/,
            // Não procure nada em node_modules
            exclude: /node_modules/,
            // Use o seguinte:
            use: {
              // Babel
              loader: 'babel-loader',
              // Com as opções padrões para o React
              options: {
                presets: ['@babel/preset-react'],
              },
            },
          },
        ],
      },
    };

  * Iniciar o React
      ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

*/

import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// ReactDOM.createRoot(<App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
