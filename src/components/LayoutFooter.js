import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const LayoutFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Laboratorio Clínico</h3>
            <p className="text-gray-300">
              Servicios de diagnóstico clínico con la más alta tecnología y calidad.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="text-gray-300 mb-4">
              <p className="font-semibold text-white mb-1">Sucursal Popular Rastro:</p>
              <p>C. Aluminio 245-PB, Venustiano Carranza, 15220 CDMX</p>
            </div>
            <div className="text-gray-300 mb-4">
              <p className="font-semibold text-white mb-1">Sucursal Tlatelolco:</p>
              <p>Av. Ricardo Flores Magón 160-B, Cuauhtémoc, CDMX</p>
            </div>
            <p className="text-gray-300 mb-2">55 1234 5678</p>
            <p className="text-gray-300">mexalab.1@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/mexalab" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/mexalab" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/mexalab" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Laboratorio Clínico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;