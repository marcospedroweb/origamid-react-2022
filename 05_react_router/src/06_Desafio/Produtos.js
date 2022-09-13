import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import './Produtos.css';

const Produtos = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request('https://ranekapi.origamid.dev/json/api/produto/');
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  else if (loading) return <p>Carregando...</p>;
  else if (data)
    return (
      <div className="d-flex">
        {data.map(({ id, nome, fotos }) => (
          <Link key={id} to={nome}>
            <div>
              <img src={fotos[0].src} alt={fotos[0].titulo} />
              <h1>{nome}</h1>
            </div>
          </Link>
        ))}
      </div>
    );
  else return null;
};

export default Produtos;
