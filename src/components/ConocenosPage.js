import React from 'react';
import { MapPin, Phone, Clock, Mail, Globe, Users, Award, Heart, Facebook, Instagram } from 'lucide-react';

const ConocenosPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-medical-blue text-white">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">MexaLab</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Laboratorio clínico líder en diagnóstico médico, comprometido con la excelencia y la salud de México
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-t-4 border-medical-blue">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-text-gray">¿Quiénes Somos?</h2>
          </div>
          <p className="text-text-gray mb-6 text-lg leading-relaxed">
            Empresa dedicada a realizar estudios médicos. Somos un laboratorio clínico fundado en Ciudad de México, ofreciendo servicios a hoteles, clínicas,
            empresas grandes y medianas. Fundado en medio de la pandemia, buscamos brindar soluciones accesibles 
            y de calidad a los problemas de salud en México.
          </p>

          {/* Mission Section */}
          <div className="bg-light-gray p-8 rounded-xl mb-8 border-l-4 border-health-green">
            <h3 className="text-2xl font-semibold text-text-gray mb-4 flex items-center">
              <Award className="w-6 h-6 mr-2 text-health-green" />
              Misión
            </h3>
            <p className="text-text-gray text-lg leading-relaxed">
              Proporcionar servicios de diagnóstico clínico con la más alta calidad, tecnología de punta 
              y personal altamente capacitado, contribuyendo al bienestar de nuestros pacientes.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-text-gray">Nuestro Equipo</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-light-gray rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-10 h-10 text-medical-blue" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-text-gray mb-2">Danae Santos</h4>
              <p className="text-medical-blue font-medium">Jefa de Enfermería</p>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-light-gray rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-10 h-10 text-medical-blue" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-text-gray mb-2">Alejandra Juarez</h4>
              <p className="text-medical-blue font-medium">Administración y Dirección Empresarial</p>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-light-gray rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-10 h-10 text-medical-blue" />
                </div>
              </div>
              <h4 className="font-bold text-xl text-text-gray mb-2">Martin Contreras</h4>
              <p className="text-medical-blue font-medium">Químico Representante</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-3xl font-semibold text-text-gray mb-8 text-center">Contacto</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-light-gray rounded-lg">
                <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-text-gray mb-2">Dirección</h4>
                  <p className="text-text-gray">
                    Aluminio 245, Col. Popular Rastro,<br />
                    Alc. Venustiano Carranza, CDMX<br />
                    CP: 15220, Mexico City, Mexico
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-light-gray rounded-lg">
                <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-text-gray mb-2">Teléfono</h4>
                  <p className="text-text-gray text-lg">55 8498 4243</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-light-gray rounded-lg">
                <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-text-gray mb-2">Horario</h4>
                  <p className="text-text-gray">Lunes a Viernes: 7:00 am - 6:00 pm</p>
                  <p className="text-text-gray">Sábado: 7:00 am - 4:00 pm</p>
                  <p className="text-text-gray">Domingo: 8:00 am - 2:00 pm</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-light-gray rounded-lg">
                <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-text-gray mb-2">Correos Electrónicos</h4>
                  <p className="text-text-gray">resultados@mexalab.com</p>
                  <p className="text-text-gray">servicioalcliente@mexalab.com</p>
                  <p className="text-text-gray">mexalab.1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-bold text-text-gray mb-4 text-center">Redes Sociales</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/mexa.lab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-500 rounded-lg text-white hover:shadow-lg transition-all duration-300"
              >
                <Facebook className="w-5 h-5 mr-2" />
                <span className="font-semibold">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/mexa.labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-pink-500 rounded-lg text-white hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="w-5 h-5 mr-2" />
                <span className="font-semibold">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center p-4 bg-medical-blue rounded-lg text-white">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-semibold">www.mexalab.com</span>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-semibold text-text-gray mb-8 text-center">Permisos y Certificaciones</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-light-gray p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-text-gray mb-3 text-center">Aviso de Funcionamiento y Responsable Sanitario</h4>
              <p className="text-center">
                <a 
                  href="https://digipris.cofepris.gob.mx/getTramite?id=FPx%2FupvD6os2iFsXiD%2BDwwHBbQVBcNL5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-medical-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Ver documento
                </a>
              </p>
            </div>
            
            <div className="group bg-light-gray p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-text-gray mb-3 text-center">Aviso de Publicidad COFEPRIS</h4>
              <p className="text-text-gray text-center font-semibold mb-2">2309162002A00009</p>
              <p className="text-center">
                <a 
                  href="https://digipris.cofepris.gob.mx/getTramiteid=6owRb9nmZWzQMpVdd2Uo%2BAHBbQVBcNL5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-medical-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Ver documento
                </a>
              </p>
            </div>
            
            <div className="group bg-light-gray p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-text-gray mb-3 text-center">Certificaciones</h4>
              <p className="text-text-gray text-center font-medium">En proceso de integración</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConocenosPage;



