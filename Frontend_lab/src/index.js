import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot es la nueva API en React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


