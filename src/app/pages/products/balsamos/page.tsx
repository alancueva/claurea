import Image from "next/image";

export default function Balsamos() {
  return (
    <div>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="relative h-100 w-full rounded-lg overflow-hidden">
              <Image
                src="/balsamos-image.png"
                alt="balsamos"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Bálsamo Labial Vegano
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nuestro bálsamo está elaborado con ingredientes de origen
                natural que hidratan y protegen los labios a profundidad.
                Gracias a su fórmula nutritiva, ayuda a prevenir la resequedad,
                suaviza la piel y aporta un delicado brillo natural con un sutil
                toque de color gracias a los pigmentos de origen vegetal. Es un
                producto unisex, ideal tanto para mujeres como para hombres que
                desean mantener unos labios saludables, frescos y bien cuidados
                durante todo el día.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contiene:
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Manteca de cacao, vitamina E, glicerina, mica vegetal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modo de uso
              </h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Aplicar directamente sobre los labios limpios.</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Reaplicar durante el día, según sea necesario.</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>
                    Uso continuo para mantener labios hidratados y protegidos.
                  </span>
                </div>
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>
                    Usar también por las noches para despertar con unos labios
                    suaves, radiantes y profundamente humectados.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Presentación
              </h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Envase PET 100% reciclable.</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Contenido: 10 g.</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Vida útil: 6 meses.</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Precauciones
              </h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-800">
                  <span>Uso externo únicamente. Mantener en un lugar fresco, seco y protegido de la luz solar.</span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-96 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/jonas-denil.jpg"
            alt="Imagen de fondo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Degradado superpuesto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>

        {/* Contenido opcional sobre la imagen */}
        {/* <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Título Sobre la Imagen
          </h2>
          <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
            Un texto descriptivo que se ve perfectamente sobre la imagen con degradado. 
            Ideal para call-to-actions o mensajes importantes.
          </p>
          <div className="mt-8">
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Llamada a la Acción
            </button>
          </div>
        </div> 
      </div>*/}
      </section>
    </div>
  );
}
