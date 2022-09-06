import React from 'react';
//Isso é um hook personalizado
const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    //Toda vez que o state muda, isso é processado
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
