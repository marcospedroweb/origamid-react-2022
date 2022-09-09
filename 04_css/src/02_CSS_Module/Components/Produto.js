import styles from './Produto.module.css';

/* 
  [Nome unico]
    Ao colocarmos [.module.] no nosso arquivo css, quando importarmos esse arquivo, o webpack forma um Objeto. 
    Nesse objeto tem todas as estilizações que criamos só que com um porém, toda CLASSE que criarmos, o webpack transformara essa classe em unica, colocando algum codigo a frente dessa classe.
    Ex: .TituloMain -> .[ComponenteName]_TituloMain_[CodigoGerado]
*/

const Produto = () => {
  return (
    <div>
      {/* Como o css se tornou um objeto, precisamos acessar a classe igual acessamos um obj */}
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

export default Produto;
