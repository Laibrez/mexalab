import React from 'react';
import { Droplet, Microscope, HeartPulse, Users, CheckCircle, Award, Clock, Shield, Zap } from 'lucide-react';

const HomePage = ({ setActivePage }) => {
  const services = [
    {
      icon: Droplet,
      title: 'Análisis de sangre',
      description: 'Resultados precisos con equipos certificados.',
      color: 'medical-blue'
    },
    {
      icon: Microscope,
      title: 'Estudios especializados',
      description: 'Pruebas avanzadas para diagnósticos confiables.',
      color: 'medical-blue'
    },
    {
      icon: HeartPulse,
      title: 'Chequeos preventivos',
      description: 'Cuida tu salud antes de que sea urgente.',
      color: 'health-green'
    },
    {
      icon: Users,
      title: 'Atención personalizada',
      description: 'Trato humano y profesional.',
      color: 'health-green'
    }
  ];

  const whyChooseUs = [
    { icon: Award, text: 'Personal certificado' },
    { icon: Zap, text: 'Tecnología moderna' },
    { icon: Clock, text: 'Entrega rápida de resultados' },
    { icon: Users, text: 'Atención cercana' },
    { icon: Shield, text: 'Cumplimiento normativo' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-text-gray mb-6">
              Laboratorio Clínico MexaLab
            </h1>
            <p className="text-xl md:text-2xl text-text-gray mb-8 leading-relaxed">
              Resultados confiables, rápidos y precisos para tu tranquilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-health-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg">
                🟢 Agendar cita
              </button>
              <button 
                onClick={() => setActivePage('servicios')}
                className="bg-medical-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                🔵 Ver estudios
              </button>
            </div>
          </div>
          {/* Decorative curve */}
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 0L60 8.33333C120 16.6667 240 33.3333 360 41.6667C480 50 600 50 720 41.6667C840 33.3333 960 16.6667 1080 16.6667C1200 16.6667 1320 33.3333 1380 41.6667L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="#F4F6F8"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-gray mb-4">Servicios</h2>
            <p className="text-xl text-text-gray">Atención integral para tu bienestar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300 text-center"
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: service.color === 'medical-blue' ? 'rgba(31, 106, 225, 0.1)' : 'rgba(47, 191, 113, 0.1)' }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: service.color === 'medical-blue' ? '#1F6AE1' : '#2FBF71' }} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-text-gray mb-3">{service.title}</h3>
                  <p className="text-text-gray leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose MexaLab Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-text-gray mb-4">¿Por qué elegir MexaLab?</h2>
              <p className="text-xl text-text-gray">Confianza y calidad en cada análisis</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-medical-blue" />
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-health-green mr-2 flex-shrink-0" />
                      <p className="font-semibold text-text-gray">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-medical-blue rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">¿Listo para cuidar tu salud?</h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda tu cita hoy y obtén resultados confiables con nuestro equipo profesional
            </p>
            <button className="bg-white text-medical-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
              Agendar ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
