/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './01_Router/Router';
import Link from './02_Link/Link';
import UseParams from './03_UseParams/UseParams';
import NestedRoutes from './04_Nested_Routes/NestedRoutes';
import Head from './05_Head/Head';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router /> */}
    {/* <Link /> */}
    {/* <UseParams /> */}
    {/* <NestedRoutes /> */}
    <Head />
  </React.StrictMode>,
);
