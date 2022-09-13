import { useParams } from 'react-router-dom';

/*
  [useParams]
    O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.
*/

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};

export default Produto;
