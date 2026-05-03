import React from 'react';
import { MapPin, Phone, Clock, Mail, Globe, Users, Award, Heart } from 'lucide-react';

const ConocenosPage = () => {
  return (
    <div className="min-h-screen bg-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-teal-600 text-white">
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
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">¿Quiénes Somos?</h2>
          </div>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Somos un laboratorio clínico fundado en Ciudad de México, ofreciendo servicios a hoteles, clínicas,
            empresas grandes y medianas. Fundado en medio de la pandemia, buscamos brindar soluciones accesibles 
            y de calidad a los problemas de salud en México.
          </p>

          {/* Mission Section */}
          <div className="bg-teal-50 p-8 rounded-xl mb-8 border-l-4 border-teal-500">
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

        {/* Team Section - Oculto temporalmente */}
        <div className="hidden bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">Nuestro Equipo</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-teal-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">Danae Santos</h4>
              <p className="text-teal-600 font-medium">Jefa de Enfermería</p>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-teal-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">Alejandra Juarez</h4>
              <p className="text-teal-600 font-medium">Administración y Dirección Empresarial</p>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-teal-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">Martin Contreras</h4>
              <p className="text-teal-600 font-medium">Químico Representante</p>
            </div>
          </div>
        </div>

        {/* Ultrasound Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-t-4 border-teal-500">
          <div className="flex items-center mb-8 text-center justify-center">
            <h3 className="text-3xl font-semibold text-gray-800">Nuestra Presentación</h3>
          </div>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Contamos con equipo de última generación para brindarte resultados precisos y confiables en nuestros estudios de imagen.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/SALUD es riqueza.png" alt="Salud es riqueza" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-teal-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Alta Precisión</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/Bienestar_Mexalab.png" alt="Bienestar Mexalab" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-teal-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Tecnología Avanzada</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/calidad_servicio.png" alt="Calidad y Servicio" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-teal-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Resultados Inmediatos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Contacto</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-teal-50 rounded-lg">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-700 mb-2">Sucursal Popular Rastro</h4>
                  <p className="text-gray-600 mb-4">
                    C. Aluminio 245-PB, Popular Rastro,<br />
                    Venustiano Carranza, 15220<br />
                    Ciudad de México, CDMX
                  </p>
                  <h4 className="font-bold text-teal-700 mb-2 border-t pt-4 border-teal-100">Sucursal Tlatelolco</h4>
                  <p className="text-gray-600">
                    Av. Ricardo Flores Magón 160-B,<br />
                    Colonia Buenavista, Cuauhtémoc,<br />
                    Ciudad de México, CDMX
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-teal-50 rounded-lg">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-700 mb-2">Teléfono</h4>
                  <p className="text-gray-600 text-lg">55 1234 5678</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-teal-50 rounded-lg">
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
              
              <div className="flex items-start p-4 bg-teal-50 rounded-lg">
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
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center p-4 bg-teal-500 rounded-lg text-white">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-semibold">laboratoriosmexalab.com</span>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Permisos y Certificaciones</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-teal-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-200">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
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
            
            <div className="group bg-teal-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-200">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-teal-700 mb-3 text-center">Aviso de Publicidad</h4>
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
            
            <div className="group bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mb-4 mx-auto">
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



