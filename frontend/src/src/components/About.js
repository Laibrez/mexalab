const About = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Conócenos</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Nuestra Historia</h3>
          <p className="text-gray-600 mb-4">
            Mexalab se fundó hace dos años con la visión de ofrecer servicios de laboratorio accesibles y de alta calidad.
          </p>
          <p className="text-gray-600">
            Comenzamos como un pequeño negocio familiar y hoy somos un referente en la Ciudad de México.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Nuestra Sede</h3>
            <p className="text-gray-600">
              Estamos ubicados en el corazón de la Ciudad de México, atendiendo a pacientes de toda la zona metropolitana.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Nuestro Compromiso</h3>
            <p className="text-gray-600">
              Como negocio 100% mexicano, nos enorgullece contribuir al crecimiento del sector salud en nuestro país.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;