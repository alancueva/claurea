
import Image from "next/image";

export default function Home() {
  return (
    <div>

    <div className="relative min-h-screen w-full max-w-full overflow-hidden">
      {/* Imagen difuminada */}
      <Image
        src="/jon-flobrant.jpg"
        alt="Claurea"
        fill
        className="object-cover rounded-xl"
        priority
      />
      {/* Gradientes superior e inferior */}
      {/* <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/50 to-transparent"></div> */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div> */}
      {/* Descripción centrada */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/50 rounded-lg px-8 py-6 shadow-lg text-center max-w-lg">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Claurea</h1>
          <p className="text-lg text-gray-700">
            Belleza que florece con la pureza de la naturaleza, fresca y auténtica como tú.
          </p>
        </div>
      </div>

      

    </div>



 <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Belleza Natural Auténtica
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Cada producto está formulado con extractos botánicos seleccionados cuidadosamente 
              para revelar la belleza natural de tu piel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bálsamos */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    {/* <Droplets className="w-8 h-8 text-green-600" /> */}
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">Bálsamos</h3>
                </div>
                
                <p className="text-green-700 mb-6 leading-relaxed text-lg">
                  Hidratación profunda y reparación intensiva con aceites esenciales y mantecas naturales. 
                  Perfectos para nutrir y proteger tu piel día y noche.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span>Aceite de Jojoba orgánico</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span>Manteca de Karité pura</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span>Extracto de Caléndula</span>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Ver Bálsamos
                </button>
              </div>
            </div>

            {/* Serums */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    {/* <Sparkles className="w-8 h-8 text-emerald-600" /> */}
                  </div>
                  <h3 className="text-3xl font-bold text-emerald-800">Serums</h3>
                </div>
                
                <p className="text-emerald-700 mb-6 leading-relaxed text-lg">
                  Concentrados activos de alta absorción para resultados visibles. Formulados con 
                  ingredientes botánicos de última generación.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-emerald-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>Vitamina C natural</span>
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>Ácido Hialurónico vegetal</span>
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>Péptidos de plantas</span>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
                  Ver Serums
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
