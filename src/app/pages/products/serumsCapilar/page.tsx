import Image from "next/image";
import SectionFrase2 from "@/components/sections/section-frase-2";
import SectionImagenFrase from "@/components/sections/section-imagen-frase";
import SectionColorDegrade from "@/components/sections/section-color-degrade";

export default function SerumsCapilar() {
    return (
        <div>
            <SectionColorDegrade />
            <section className="py-18 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <div className="relative h-100 w-full rounded-lg overflow-hidden">
                            <Image
                                src="/serums-capilar-2.0.png"
                                alt="Serum Capilar"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Sérum Reparador Capilar
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                El Sérum Capilar Reparador es un tratamiento natural que actúa directamente en la raíz del cabello.
                                Su fórmula nutritiva fortalece los folículos, estimula el crecimiento y mejora la salud del cuero
                                cabelludo. Con el uso constante, ayuda a reducir la caída, aportar brillo y dar mayor vitalidad
                                al cabello, logrando una melena más fuerte y saludable de manera natural.
                            </p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Contiene:
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Aceite de ricino, aceite de jojoba, aceite de coco, vitamina E.
                                Natural, formula vegana, libre de sulfatos y parabenos.
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
                                    <span>Con el gotero, aplicar de 3 a 5 gotas directamente en la raíz del cabello, distribuyéndolas en diferentes áreas del cuero cabelludo.</span>
                                </div>
                                <div className="flex items-center text-gray-800">
                                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                    <span>
                                        Masajear suavemente con las yemas de los dedos para favorecer la absorción.

                                    </span>
                                </div>
                                <div className="flex items-center text-gray-800">
                                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                    <span>
                                        Usar preferiblemente en la noche, sobre el cuero cabelludo limpio y seco.

                                    </span>
                                </div>

                                <div className="flex items-center text-gray-800">
                                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                    <span>
                                        Para mejores resultados, aplicar de manera constante 3 a 4 veces por semana.

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
                                    <span>Frasco de vidrio ámbar con gotero.</span>
                                </div>
                                <div className="flex items-center text-gray-800">
                                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                    <span>Contenido: 20 ml.</span>
                                </div>
                                {/* <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Vida útil: 6 meses.</span>
                </div> */}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Precauciones
                            </h3>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center text-gray-800">
                                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                    <span>
                                        Solo para uso externo.
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center text-gray-800">
                                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                    <span>
                                        Conservar en un lugar fresco y alejado de la luz solar.
                                    </span>
                                </div>
                            </div>
                            {/* <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>
                    Suspender su uso si se presenta irritación.
                  </span>
                </div>
              </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <SectionFrase2 />
            <SectionImagenFrase />
        </div>
    );
}
