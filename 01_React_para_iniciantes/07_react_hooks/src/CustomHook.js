import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';
/* 
  [useLocalStorage]
    Podemos criar nossos próprios hooks, assim evitamos a repetição de código. Todo custom hook deve começar com a palavra use. Exemplo: useNomeDoHook. 
    Podemos retornar o que quisermos do hook, seja um valor único, uma array ou um objeto.

*/

const CustomHook = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.textContent);
  }

  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;
  else if (loading) return <p>Carregando...</p>;
  else if (data)
    return (
      <div>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default CustomHook;
