import Image from "next/image";

export default function SectionClaurea() {
  // Objetivos del lado izquierdo
  const leftObjectives = [
    {
      title: "Pureza Radical",
      description:
        "Ingredientes que nacieron del bosque, no del laboratorio, y se lo dicen al espejo cada vez que los usas.",
    },
    {
      title: "Vida sin Frenos",
      description:
        "Un toque rápido, un instante, y estás listo; para quienes viven corriendo, trabajando, amando o llorando, sin que la piel se quiebre bajo presión.",
    }
  ];

  // Objetivos del lado derecho
  const rightObjectives = [
    {
      title: "Igualdad Total",
      description:
        "sol, viento, estrés – Claurea los iguala para pieles que no vienen con género.",
    },
    {
      title: "Lealtad Eterna",
      description:
        "Que Claurea sea ese recuerdo suave, como la primera vez que alguien te miró y dijo tus labios tienen color de verdad.",
    }
  ];
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Claurea
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Autentico Cuidado Natural
          </p>
        </div>

        {/* Layout principal con logo al centro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Objetivos del lado izquierdo */}
          <div className="space-y-8 lg:order-1">
            {leftObjectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 lg:text-right lg:flex-row-reverse lg:space-x-reverse"
              >
                <div className="lg:order-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Logo central */}
          <div className="flex justify-center items-center lg:order-2">
            <div className="w-80 h-80 rounded-full shadow-1xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 bg-white/70 backdrop-blur-sm border border-blue-100">
              <Image
                src="/logo claurea-15.svg"
                alt="Logo Claurea"
                width={192}
                height={192}
                className="fill-green-500 text-blue-500 w-full h-full"
              />
            </div>
          </div>

          {/* Objetivos del lado derecho */}
          <div className="space-y-8 lg:order-3">
            {rightObjectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
