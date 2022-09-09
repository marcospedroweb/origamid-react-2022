/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from '../01_Input/Input';
import Textarea from '../02_Textarea/Textarea';
import Select from '../03_Select/Select';
import Radio from '../04_Radio/Radio';
import Checkbox from '../05_Checkbox/Checkbox';
import Componentes from '../06_Componentes/Componentes';
import Validacao from '../07_Validacao/Validacao';
import useForm from '../08_useForm/useForm';
import Resolucao from './Desafio/Resolucao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AInput /> */}
    {/* <BTextarea /> */}
    {/* <CSelect /> */}
    {/* <DRadio /> */}
    {/* <ECheckbox /> */}
    {/* <FComponentes /> */}
    {/* <GValidacao /> */}
    {/* <HuseForm /> */}
    <Resolucao />
  </React.StrictMode>,
);
