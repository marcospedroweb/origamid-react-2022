import HeadInfo from './HeadInfo';

const Sobre = () => {
  return (
    <div>
      {/* Passando as informações necessarias para o componente */}
      <HeadInfo title="Página Sobre" description="Descrição da sobre" />
      <h1>Sobre</h1>
      <p>Essa é a Sobre</p>
    </div>
  );
};

export default Sobre;
