import React from 'react';
import { MapPin, Phone, Clock, Mail, Globe, Users, Award, Heart, Facebook, Instagram } from 'lucide-react';

const ConocenosPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">MexaLab</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Laboratorio clínico líder en diagnóstico médico, comprometido con la excelencia y la salud de México
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-teal-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 relative z-10">
        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-t-4 border-teal-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">¿Quiénes Somos?</h2>
          </div>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Empresa dedicada a realizar estudios médicos. Somos un laboratorio clínico fundado en Ciudad de México, ofreciendo servicios a hoteles, clínicas,
            empresas grandes y medianas. Fundado en medio de la pandemia, buscamos brindar soluciones accesibles 
            y de calidad a los problemas de salud en México.
          </p>

          {/* Mission Section */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl mb-8 border-l-4 border-teal-500">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Misión
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Proporcionar servicios de diagnóstico clínico con la más alta calidad, tecnología de punta 
              y personal altamente capacitado, contribuyendo al bienestar de nuestros pacientes.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">Nuestro Equipo</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">Danae Santos</h4>
              <p className="text-teal-600 font-medium">Jefa de Enfermería</p>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">Alejandra Juarez</h4>
              <p className="text-teal-600 font-medium">Administración y Dirección Empresarial</p>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">Martin Contreras</h4>
              <p className="text-teal-600 font-medium">Químico Representante</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Contacto</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-700 mb-2">Dirección</h4>
                  <p className="text-gray-600">
                    Aluminio 245, Col. Popular Rastro,<br />
                    Alc. Venustiano Carranza, CDMX<br />
                    CP: 15220, Mexico City, Mexico
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-700 mb-2">Teléfono</h4>
                  <p className="text-gray-600 text-lg">55 8498 4243</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-700 mb-2">Horario</h4>
                  <p className="text-gray-600">Lunes a Viernes: 7:00 am - 6:00 pm</p>
                  <p className="text-gray-600">Sábado: 7:00 am - 4:00 pm</p>
                  <p className="text-gray-600">Domingo: 8:00 am - 2:00 pm</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-700 mb-2">Correos Electrónicos</h4>
                  <p className="text-gray-600">resultados@mexalab.com</p>
                  <p className="text-gray-600">servicioalcliente@mexalab.com</p>
                  <p className="text-gray-600">mexalab.1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Redes Sociales</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/mexa.lab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white hover:shadow-lg transition-all duration-300"
              >
                <Facebook className="w-5 h-5 mr-2" />
                <span className="font-semibold">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/mexa.labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="w-5 h-5 mr-2" />
                <span className="font-semibold">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-white">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-semibold">www.mexalab.com</span>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Permisos y Certificaciones</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-200">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-teal-700 mb-3 text-center">Aviso de Funcionamiento y Responsable Sanitario</h4>
              <p className="text-center">
                <a 
                  href="https://digipris.cofepris.gob.mx/getTramite?id=FPx%2FupvD6os2iFsXiD%2BDwwHBbQVBcNL5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Ver documento
                </a>
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-200">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-teal-700 mb-3 text-center">Aviso de Publicidad COFEPRIS</h4>
              <p className="text-gray-700 text-center font-semibold mb-2">2309162002A00009</p>
              <p className="text-center">
                <a 
                  href="https://digipris.cofepris.gob.mx/getTramiteid=6owRb9nmZWzQMpVdd2Uo%2BAHBbQVBcNL5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Ver documento
                </a>
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-700 mb-3 text-center">Certificaciones</h4>
              <p className="text-gray-500 text-center font-medium">En proceso de integración</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConocenosPage;



