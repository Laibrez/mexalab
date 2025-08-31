import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot is the new API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

