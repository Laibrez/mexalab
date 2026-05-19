import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';

const LayoutFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="w-[95%] max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">Laboratorio Clínico</h3>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              Servicios de diagnóstico clínico con la más alta tecnología y calidad.
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">Contacto</h3>
            <div className="mb-3 text-sm lg:text-base">
              <div className="flex items-center mb-1">
                <MapPin className="w-4 h-4 text-teal-400 mr-2" />
                <p className="font-bold text-white">Sucursal Popular Rastro:</p>
              </div>
              <a href="https://maps.google.com/?q=C.+Aluminio+245-PB,+Popular+Rastro,+Venustiano+Carranza,+15220+Ciudad+de+México,+CDMX" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors block ml-6">
                C. Aluminio 245-PB, Venustiano Carranza, 15220 CDMX
              </a>
            </div>
            <div className="mb-3 text-sm lg:text-base">
              <div className="flex items-center mb-1">
                <MapPin className="w-4 h-4 text-teal-400 mr-2" />
                <p className="font-bold text-white">Sucursal Tlatelolco:</p>
              </div>
              <a href="https://maps.google.com/?q=Av.+Ricardo+Flores+Magón+160-B,+Colonia+Buenavista,+Cuauhtémoc,+Ciudad+de+México,+CDMX" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors block ml-6">
                Av. Ricardo Flores Magón 160-B, Cuauhtémoc, CDMX
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-4 mb-4">
              <a href="tel:+525584984243" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors text-sm lg:text-base font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Llamar: 55 8498 4243
              </a>
              <a href="https://wa.me/525584984243" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm lg:text-base font-semibold">
                <MessageCircle className="w-4 h-4 mr-2" />
                Mandar mensaje: 55 8498 4243
              </a>
            </div>
            <p className="text-gray-300 text-sm lg:text-base">mexalab.1@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/mexalab" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://twitter.com/mexalab" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://instagram.com/mexalab" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Laboratorio Clínico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;