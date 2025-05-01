import { useState } from 'react';
import LayoutNavbar from './components/LayoutNavbar';
import ConocenosPage from './components/ConocenosPage';
import DomicilioPage from './components/DomicilioPage';
import ServiciosPage from './components/ServiciosPage';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  const [activePage, setActivePage] = useState('conocenos');

  const renderPage = () => {
    switch(activePage) {
      case 'conocenos':
        return <ConocenosPage />;
      case 'domicilio':
        return <DomicilioPage />;
      case 'servicios':
        return <ServiciosPage />;
      default:
        return <ConocenosPage />;
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