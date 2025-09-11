export default function SectionAboutClaurea() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagen de la naturaleza - Izquierda */}
            <div className="relative overflow-hidden rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWxlemF8ZW58MHx8MHx8fDA%3D"
                alt="Naturaleza serena representando Claurea"
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
  
            {/* Descripción - Derecha */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                  Acerca de{" "}
                  <span className="font-normal text-emerald-800">Claurea</span>
                </h2>
                <div className="w-16 h-0.5 bg-emerald-600"></div>
              </div>
  
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg lg:text-xl font-light">
                Claurea nace con una visión: el cuidado facial debe ser auténtico y sostenible.
                Creamos productos que hidratan y revitalizan con ingredientes de origen natural, sin químicos agresivos y con empaques responsables.
                </p>
                
                <p className="text-base lg:text-lg">
                Nuestro enfoque minimalista se refleja en fórmulas limpias y rutinas fáciles: un bálsamo, un sérum, y estás listo. Claurea respeta tu piel y el planeta, porque la verdadera belleza empieza cuando te sientes tú.
                </p> 
              </div>
  
              <div className="pt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Auntenticidad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Sostenibilidad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Minimalismo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  