import React from 'react';
import { MapPin, Phone, Clock, Mail, Globe, Users, Award, Heart, MessageCircle } from 'lucide-react';

const ConocenosPage = ({ setActivePage }) => {
  return (
    <div className="min-h-screen bg-teal-50">
      {/* Bento Box Hero Section */}
      <div className="relative w-[95%] max-w-7xl mx-auto px-4 pt-8 pb-12">
        {/* Top Two Big Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Left Hero Card */}
          <div className="lg:col-span-8 bg-[#f6f5ef] rounded-[2rem] p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-900 rounded-full text-sm font-bold mb-8 shadow-sm">
                <span className="mr-2">+</span> Laboratorio Clínico
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Diagnóstico médico de excelencia para el cuidado de <span className="bg-white px-2 rounded-lg">toda tu familia</span>
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                Laboratorio clínico líder en México. Ofrecemos servicios a hoteles, clínicas, empresas y pacientes con la tecnología más avanzada y resultados precisos.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button 
                  onClick={() => setActivePage && setActivePage('paquetes')}
                  className="px-8 py-4 bg-[#1e4a4a] text-white font-semibold rounded-full hover:bg-teal-800 transition-colors shadow-lg hover:scale-105 duration-300"
                >
                  Ver Paquetes
                </button>
                <button 
                  onClick={() => setActivePage && setActivePage('servicios')}
                  className="px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-800 font-semibold rounded-full hover:border-gray-400 transition-colors flex items-center hover:bg-white"
                >
                  Catálogo de servicios <span className="ml-2">›</span>
                </button>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 lg:w-9 lg:h-9 rounded-full bg-gray-300 border-2 border-[#f6f5ef] flex items-center justify-center overflow-hidden relative z-20"><img src="/SALUD es riqueza.png" alt="Avatar 1" className="w-full h-full object-cover" /></div>
                  <div className="w-10 h-10 lg:w-9 lg:h-9 rounded-full bg-gray-400 border-2 border-[#f6f5ef] flex items-center justify-center overflow-hidden relative z-10"><img src="/Bienestar_Mexalab.png" alt="Avatar 2" className="w-full h-full object-cover" /></div>
                  <div className="w-10 h-10 lg:w-9 lg:h-9 rounded-full bg-teal-100 border-2 border-[#f6f5ef] flex items-center justify-center font-bold text-teal-900 relative z-0 text-xs">
                    +1K
                  </div>
                </div>
                <p className="text-xs lg:text-[13px] text-gray-500 max-w-[100px] leading-tight font-medium">
                  pacientes al mes
                </p>
              </div>

              <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-9 lg:h-9 rounded-full bg-teal-900 text-white flex items-center justify-center font-bold text-xs">
                  +5
                </div>
                <p className="text-xs lg:text-[13px] text-gray-500 max-w-[100px] leading-tight font-medium">
                  años en el mercado
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-4 bg-gray-200 rounded-[2rem] relative overflow-hidden min-h-[400px] lg:min-h-full">
            <img src="/mexa_quimico.png" alt="Equipo Médico Mexalab" className="absolute inset-0 w-full h-full object-cover object-top" />
            
            {/* Floating Rating Tag */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl text-gray-900">4.9</span>
                  <div className="flex text-yellow-400">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-medium">en Google Maps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f6f5ef] rounded-[2rem] p-8 flex flex-col relative overflow-hidden min-h-[250px]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 max-w-[200px]">
              Atención médica a domicilio
            </h3>
            <p className="text-gray-500 text-sm mb-6 relative z-10 max-w-[200px]">
              Llevamos nuestro equipo hasta tu hogar u oficina para tu comodidad.
            </p>
            <div className="absolute bottom-0 right-0 w-40 h-40 transform translate-x-4 translate-y-4">
              <div className="w-full h-full bg-teal-100 rounded-full absolute mix-blend-multiply opacity-50 blur-xl"></div>
              <img src="/Bienestar_Mexalab.png" alt="Atención" className="w-full h-full object-contain relative z-10" />
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-[2rem] p-8">
            <h3 className="text-xl font-bold text-teal-900 mb-6">
              Servicios de laboratorio:
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Hematología', 'Química Clínica', 'Inmunología', 'Microbiología', 'Urianálisis', 'Pruebas Especiales'].map(tag => (
                <span key={tag} className="bg-white text-teal-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  • {tag}
                </span>
              ))}
            </div>
            <button onClick={() => setActivePage && setActivePage('servicios')} className="text-teal-900 font-bold hover:underline">
              Saber más ›
            </button>
          </div>

          <div className="bg-[#f6f5ef] rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Resultados precisos y confiables
              </h3>
              <p className="text-gray-500 text-sm">
                Tecnología de última generación y control de calidad.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10">
              <Heart className="w-full h-full text-teal-900" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* About Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 mb-16 border-t-8 border-teal-500">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">¿Quiénes Somos?</h2>
              </div>
              <p className="text-gray-600 mb-8 text-base md:text-lg lg:text-xl leading-relaxed">
                Somos un laboratorio clínico fundado en Ciudad de México, ofreciendo servicios a hoteles, clínicas,
                empresas grandes y medianas. Fundado en medio de la pandemia, buscamos brindar soluciones accesibles 
                y de calidad a los problemas de salud en México.
              </p>

              {/* Mission Section */}
              <div className="bg-teal-50 p-6 lg:p-8 rounded-2xl border-l-4 border-teal-500">
                <h3 className="text-xl lg:text-2xl font-semibold text-teal-700 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-3" />
                  Misión
                </h3>
                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
                  Proporcionar servicios de diagnóstico clínico con la más alta calidad, tecnología de punta 
                  y personal altamente capacitado, contribuyendo al bienestar de nuestros pacientes.
                </p>
              </div>
            </div>
            <div className="flex justify-center relative">
              <img src="/equipo_mexalab.png" alt="Equipo de MexaLab" className="rounded-2xl shadow-xl w-full max-w-lg lg:max-w-xl max-h-[300px] lg:max-h-[400px] object-cover" />
            </div>
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
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border-t-8 border-teal-500">
          <div className="flex items-center mb-8 text-center justify-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">Nuestra Presentación</h3>
          </div>
          <p className="text-center text-gray-600 mb-10 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto">
            Contamos con equipo de última generación para brindarte resultados precisos y confiables en nuestros estudios de imagen.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 flex justify-center items-center p-4">
              <img src="/SALUD es riqueza.png" alt="Salud es riqueza" className="w-full h-64 md:h-80 lg:h-[450px] object-contain transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-teal-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-2xl lg:text-3xl">Alta Precisión</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 flex justify-center items-center p-4">
              <img src="/Bienestar_Mexalab.png" alt="Bienestar Mexalab" className="w-full h-64 md:h-80 lg:h-[450px] object-contain transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-teal-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-2xl lg:text-3xl">Tecnología Avanzada</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 flex justify-center items-center p-4">
              <img src="/calidad_servicio.png" alt="Calidad y Servicio" className="w-full h-64 md:h-80 lg:h-[450px] object-contain transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-teal-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-2xl lg:text-3xl">Resultados Inmediatos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-10 text-center">Contacto</h3>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4 lg:space-y-8">
              <div className="flex items-start p-4 sm:p-6 lg:p-8 bg-teal-50 rounded-2xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-teal-500 rounded-full flex items-center justify-center mr-3 lg:mr-5 mt-1">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-lg lg:text-2xl text-teal-700 mb-2">Sucursal Popular Rastro</h4>
                  <a href="https://maps.google.com/?q=C.+Aluminio+245-PB,+Popular+Rastro,+Venustiano+Carranza,+15220+Ciudad+de+México,+CDMX" target="_blank" rel="noopener noreferrer" className="block text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed hover:text-teal-600 transition-colors break-words">
                    C. Aluminio 245-PB, Popular Rastro,<br />
                    Venustiano Carranza, 15220<br />
                    Ciudad de México, CDMX
                  </a>
                </div>
              </div>
              
              <div className="flex items-start p-4 sm:p-6 lg:p-8 bg-teal-50 rounded-2xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-teal-500 rounded-full flex items-center justify-center mr-3 lg:mr-5 mt-1">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-lg lg:text-2xl text-teal-700 mb-2">Sucursal Tlatelolco</h4>
                  <a href="https://maps.google.com/?q=Av.+Ricardo+Flores+Magón+160-B,+Colonia+Buenavista,+Cuauhtémoc,+Ciudad+de+México,+CDMX" target="_blank" rel="noopener noreferrer" className="block text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed hover:text-teal-600 transition-colors break-words">
                    Av. Ricardo Flores Magón 160-B,<br />
                    Colonia Buenavista, Cuauhtémoc,<br />
                    Ciudad de México, CDMX
                  </a>
                </div>
              </div>
              <div className="flex items-start p-4 sm:p-6 lg:p-8 bg-teal-50 rounded-2xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-teal-500 rounded-full flex items-center justify-center mr-3 lg:mr-5 mt-1">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-lg lg:text-2xl text-teal-700 mb-2">Teléfono</h4>
                  <div className="flex flex-col gap-3 mt-2">
                    <a href="tel:+525584984243" className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors text-base sm:text-lg font-semibold bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-100 w-fit">
                      <Phone className="w-5 h-5 mr-2" />
                      Llamar: 55 8498 4243
                    </a>
                    <a href="https://wa.me/525584984243" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors text-base sm:text-lg font-semibold bg-white px-4 py-2 rounded-lg shadow-sm border border-green-100 w-fit">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp: 55 8498 4243
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-start p-4 sm:p-6 lg:p-8 bg-teal-50 rounded-2xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-teal-500 rounded-full flex items-center justify-center mr-3 lg:mr-5 mt-1">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-lg lg:text-2xl text-teal-700 mb-2">Horario</h4>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-1 break-words">Lunes a Viernes: 7:00 am - 6:00 pm</p>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-1 break-words">Sábado: 7:00 am - 4:00 pm</p>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg break-words">Domingo: 8:00 am - 2:00 pm</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 sm:p-6 lg:p-8 bg-teal-50 rounded-2xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-teal-500 rounded-full flex items-center justify-center mr-3 lg:mr-5 mt-1">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-lg lg:text-2xl text-teal-700 mb-2">Correos Electrónicos</h4>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-1 break-words">resultados@mexalab.com</p>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-1 break-words">servicioalcliente@mexalab.com</p>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg break-words">mexalab.1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center p-4 sm:p-5 bg-teal-500 rounded-2xl text-white hover:bg-teal-600 transition-colors cursor-pointer shadow-lg w-full sm:w-auto justify-center break-words">
              <Globe className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 flex-shrink-0" />
              <span className="font-bold text-base sm:text-xl truncate">laboratoriosmexalab.com</span>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-10 text-center">Permisos y Certificaciones</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-teal-50 p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-xl lg:text-2xl text-teal-700 mb-6 text-center">Aviso de Funcionamiento y Responsable Sanitario</h4>
              </div>
              <p className="text-center mt-auto">
                <a 
                  href="https://digipris.cofepris.gob.mx/getTramite?id=FPx%2FupvD6os2iFsXiD%2BDwwHBbQVBcNL5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-6 py-3 text-lg rounded-xl hover:bg-teal-700 transition-colors font-medium w-full"
                >
                  Ver documento
                </a>
              </p>
            </div>
            
            <div className="group bg-teal-50 p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-xl lg:text-2xl text-teal-700 mb-6 text-center">Aviso de Publicidad</h4>
              </div>
              <p className="text-center mt-auto">
                <a 
                  href="https://digipris.cofepris.gob.mx/getTramiteid=6owRb9nmZWzQMpVdd2Uo%2BAHBbQVBcNL5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-6 py-3 text-lg rounded-xl hover:bg-teal-700 transition-colors font-medium w-full"
                >
                  Ver documento
                </a>
              </p>
            </div>
            
            <div className="group bg-gray-50 p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 flex flex-col justify-center">
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mb-5 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-xl lg:text-2xl text-gray-700 mb-6 text-center">Certificaciones</h4>
              <p className="text-gray-500 text-lg text-center font-medium">En proceso de integración</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConocenosPage;



