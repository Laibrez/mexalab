import { useState } from 'react';
import LayoutNavbar from './components/LayoutNavbar';
import HomePage from './components/HomePage';
import ConocenosPage from './components/ConocenosPage';
import DomicilioPage from './components/DomicilioPage';
import ServiciosPage from './components/ServiciosPage';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'conocenos':
        return <ConocenosPage />;
      case 'domicilio':
        return <DomicilioPage />;
      case 'servicios':
        return <ServiciosPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LayoutNavbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;

// DONE