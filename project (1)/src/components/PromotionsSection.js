const PromotionsSection = () => {
  const promotions = [
    { title: '2x1 en estudios básicos', description: 'Aprovecha esta promoción válida todo el mes', code: 'MXLAB2X1' },
    { title: '20% de descuento', description: 'En tu primera consulta con estudios incluidos', code: 'MXLAB20' },
  ];

  return (
    <div id="promociones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Promociones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promotions.map((promo, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
              <p className="mb-4">{promo.description}</p>
              <div className="bg-white text-blue-600 px-4 py-2 rounded inline-block font-mono">
                {promo.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsSection;