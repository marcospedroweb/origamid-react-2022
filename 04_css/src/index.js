/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import CssImport from './01_CSS_import/CssImport';
import CssModule from './02_CSS_Module/CssModule';
import StyledComponents from './03_Styled_Components/StyledComponents';
import CSSFrameworks from './04_CSS_Frameworks/CSSFrameworks';
import Animacoes from './05_Animações/Animacoes';
import Imagens from './06_Imagens/Imagens';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CssImport /> */}
    {/* <CssModule /> */}
    {/* <StyledComponents /> */}
    {/* <CSSFrameworks /> */}
    {/* <Animacoes /> */}
    <Imagens />
  </React.StrictMode>,
);
