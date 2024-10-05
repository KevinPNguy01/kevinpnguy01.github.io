import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './output.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Kevin Nguy's Portfolio"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);