import Image from "next/image";
import SectionFrase2 from "@/components/sections/section-frase-2";
import SectionImagenFrase from "@/components/sections/section-imagen-frase";
import SectionColorDegrade from "@/components/sections/section-color-degrade";

export default function Serums() {
  return (
    <div>
      <SectionColorDegrade />
      <section className="py-18 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="relative h-100 w-full rounded-lg overflow-hidden">
              <Image
                src="/hidratalash-2.png"
                alt="Serum Fortalecedor de Pestañas y Cejas"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Sérum Fortalecedor de Pestañas y Cejas
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nuestro sérum está elaborado con una mezcla de aceites naturales
                que nutren profundamente, hidratan y revitalizan pestañas y
                cejas. Favorece su crecimiento, aportando mayor volumen y salud,
                realzando la belleza natural de tu mirada. Además, ayuda a
                reparar el daño causado por el uso frecuente de
                máscara de pestañas.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contiene:
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Aceite de ricino, Aceite de jojoba, Oleato de romero y Vitamina
                E.
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
                  <span>Retirar el exceso de producto del cepillo.</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>
                    Aplicar sobre pestañas y cejas limpias, preferiblemente en
                    la noche.
                  </span>
                </div>
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>
                    Utilizar diariamente para obtener mejores resultados.
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
                  <span>Contenido: 10 ml.</span>
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
                  <span>
                    Uso externo únicamente. Mantener en un lugar fresco, seco y protegido de la luz solar.
                  </span>
                </div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>
                    En caso de piel sensible o condiciones particulares,
                    consultar con un dermatólogo.
                  </span>
                </div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>
                    Suspender su uso si se presenta irritación.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionFrase2 />
      <SectionImagenFrase />
    </div>
  );
}
