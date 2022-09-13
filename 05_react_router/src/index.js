/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './01_Router/Router';
import Link from './02_Link/Link';
import UseParams from './03_UseParams/UseParams';
import NestedRoutes from './04_Nested_Routes/NestedRoutes';
import Head from './05_Head/Head';
import App from './06_Desafio/App';
import AppProf from './07_Desafio_Professor/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router /> */}
    {/* <Link /> */}
    {/* <UseParams /> */}
    {/* <NestedRoutes /> */}
    {/* <Head /> */}
    {/* <App /> */}
    <AppProf />
  </React.StrictMode>,
);
