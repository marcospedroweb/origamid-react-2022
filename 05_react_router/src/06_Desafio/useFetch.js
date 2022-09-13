import React from 'react';

const useFetch = () => {
  //Estado para segurar os dados
  const [data, setData] = React.useState(null);
  //Estado para erros, caso tenha
  const [error, setError] = React.useState(null);
  //Estado para o loading
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      // É executa independente do resultado de try/catch
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
