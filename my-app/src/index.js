import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Api from './components/Api';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Api/>
  </React.StrictMode>,
  document.getElementById('root')
);

