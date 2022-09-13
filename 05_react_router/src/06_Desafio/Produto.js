import React from 'react';
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';
import './Produto.css';

const Produto = () => {
  const { request, data, loading, error } = useFetch();
  const params = useParams();

  React.useEffect(() => {
    async function fetchData() {
      await request(
        'https://ranekapi.origamid.dev/json/api/produto/' + params.nome,
      );
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  else if (loading) return <p>Carregando...</p>;
  else if (data)
    return (
      <div className="d-flex">
        <div>
          {console.log(data)}
          {data.fotos.map(({ src, titulo }) => {
            return <img key={titulo} src={src} alt={titulo} />;
          })}
        </div>
        <div className="info">
          <h1>{data.nome}</h1>
          <span className="preco">{data.preco}</span>
          <span>{data.descricao}</span>
        </div>
      </div>
    );
  else return null;
};

export default Produto;
