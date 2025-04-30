import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
// Importa aquí los demás componentes de página si los creas

const App = () => {
  return (
    <div className="font-sans">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          {/* Agrega más rutas según los componentes que crees */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// DONE
