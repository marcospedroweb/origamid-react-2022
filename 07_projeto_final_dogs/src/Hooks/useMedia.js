import React from 'react';

const useMedia = (media) => {
  //Hook para verificar o tipo de midia, mobile/desktop
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      //mathMedia verifica a midia. Ex: "(max-width: 762px)"
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    //Isso acontece toda vez que a tela for alterada
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);
  //Retorna o resultado
  return match;
};

export default useMedia;
