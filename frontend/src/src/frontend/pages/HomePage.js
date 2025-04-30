import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <div className="container mx-auto px-4 py-12 text-center">
        <Link 
          to="/services" 
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300 inline-block mt-8"
        >
          Ver Todos los Servicios
        </Link>
      </div>
    </div>
  );
};

export default HomePage;