import React from 'react';
import ReactDOM from 'react-dom';

import 'bootswatch/dist/yeti/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App title="React and Typescript" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
