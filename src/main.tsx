import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';

import 'react-toastify/dist/ReactToastify.css';

import { IMCProvider } from './context/IMCProvider';

ReactDOM.render(
  <React.StrictMode>
    <IMCProvider>
      <App />
    </IMCProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

