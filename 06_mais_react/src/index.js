/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from './01_PropTypes/PropTypes';
import LazySuspense from './02_Lazy_e_suspense/LazySuspense';
import Memo from './03_Memo/Memo';
import UseReducer from './04_UseReducera/UseReducer';
import Classes from './05_Classes/Classes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PropTypes /> */}
    {/* <LazySuspense /> */}
    {/* <Memo /> */}
    {/* <UseReducer /> */}
    <Classes />
  </React.StrictMode>,
);
