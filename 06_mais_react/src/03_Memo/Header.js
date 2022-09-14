import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return <div>Header fixo</div>;
};

/*
  [React.memo]
    Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. 
    Use apenas para elementos que não dependam de estados diferentes.
*/

export default React.memo(Header);
