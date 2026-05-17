import { useState } from 'react';
import LayoutNavbar from './components/LayoutNavbar';
import ConocenosPage from './components/ConocenosPage';
import DomicilioPage from './components/DomicilioPage';
import ServiciosPage from './components/ServiciosPage';
import LayoutFooter from './components/LayoutFooter';
import PaquetesPage from './components/PaquetesPage';
import ServicioDetallePage from './components/ServicioDetallePage';

const App = () => {
  const [activePage, setActivePage] = useState('conocenos');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderPage = () => {
    switch(activePage) {
      case 'conocenos':
        return <ConocenosPage setActivePage={setActivePage} />;
      case 'domicilio':
        return <DomicilioPage />;
      case 'servicios':
        return <ServiciosPage setActivePage={setActivePage} setSelectedCategory={setSelectedCategory} />;
      case 'paquetes':
        return <PaquetesPage />;
      case 'servicio_detalle':
        return <ServicioDetallePage category={selectedCategory} setActivePage={setActivePage} />;
      default:
        return <ConocenosPage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LayoutNavbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;

// DONE