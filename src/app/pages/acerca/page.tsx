export default function about() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 to-emerald-100/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-8">
                <img src="/claurea-1-11.svg" alt="Claurea Logo" className="w-16 h-16" style={{ filter: 'invert(34%) sepia(77%) saturate(1042%) hue-rotate(74deg) brightness(92%) contrast(92%)' }} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-light text-gray-900 mb-6">
              Clau<span className="text-green-600">rea</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Belleza natural que honra la pureza de la naturaleza. Creamos
              bálsamos y serums con ingredientes orgánicos para nutrir tu piel
              de manera consciente y sostenible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid ms:grid-cols-6 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
                <p>
                  Claurea nació de la pasión por redescubrir los secretos de belleza 
                  que la naturaleza nos ha ofrecido durante milenios.
                  Creemos que la verdadera belleza surge cuando respetamos tanto
                  nuestra piel como el planeta que nos sustenta.
                </p>
                <p>
                  Cada producto es una promesa de pureza, formulado con
                  ingredientes cuidadosamente seleccionados y procesos que
                  preservan la potencia natural de cada elemento. No solo
                  cuidamos tu piel, cuidamos el futuro.
                </p>
                <p>
                  Desde nuestros bálsamos nutritivos hasta nuestros serums
                  revitalizantes, cada fórmula es un testimonio de nuestro
                  compromiso con la excelencia natural y la sostenibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Nuestra Misión</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-green-100">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "Democratizar el acceso a la belleza natural auténtica, creando productos 
              que nutren la piel mientras honran y protegen nuestro planeta."
            </p>
            <div className="inline-flex items-center space-x-2 text-green-600">
              {/* <Leaf className="w-5 h-5" /> */}
              <span className="font-medium">Belleza Consciente • Naturaleza Respetada</span>
              {/* <Leaf className="w-5 h-5" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
