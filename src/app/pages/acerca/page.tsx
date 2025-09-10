export default function about() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-8">
                <img src="/claurea-1-11.svg" alt="Claurea Logo" className="w-16 h-16" style={{ filter: 'invert(34%) sepia(77%) saturate(1042%) hue-rotate(74deg) brightness(92%) contrast(92%)' }} />
            </div> */}
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Acerca de Claurea
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Piel que respira, vida que florece – Claurea, tu naturaleza sin filtros.
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
                Claurea nació en diciembre de 2024 con una idea clara: cuidar tu piel de forma natural y sin complicaciones. Empezamos con un bálsamo para labios y un sérum para pestañas y cejas, pensados para quienes quieren verse bien sin esfuerzo. Sin químicos raros, sin reglas. 
                </p>
                <p>

                Es cuidado fácil, para hombres y mujeres, que te hace sentir como tú, pero con un toque especial. Claurea no vende promesas, sino productos que funcionan y te hacen sentir cómodo en tu propia piel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">Nuestra Misión</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 ">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "Hacer que el cuidado facial sea un acto de libertad. Con ingredientes que vienen de la tierra, protegemos y realzamos lo que ya eres, sin rutinas largas ni promesas vacías. Claurea es para quienes viven rápido, aman intensamente y no negocian su esencia – porque tu piel merece ser tan auténtica como tú."
            </p>
            <div className="inline-flex items-center space-x-2 text-green-700">
              {/* <Leaf className="w-5 h-5" /> */}
              <span className="font-medium">Belleza Natural</span>
              {/* <Leaf className="w-5 h-5" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
