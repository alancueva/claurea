import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/sections/section-header";
import ButtonGreen from "@/components/button/button-green";

export default function Productos() {
  return (
    <div className="min-h-screen">
      <SectionHeader
        imagen="https://images.unsplash.com/photo-1747227825543-5da2c9f03222?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MHw2c01WalRMU2tlUXx8ZW58MHx8fHx8"
        titulo="Nuestros Productos"
        descripcion="Descubre nuestra colección completa de bálsamos y serums, cada uno
          formulado con ingredientes naturales selectos para nutrir y
          transformar tu piel."
      />
      <div className="overflow-hidden bg-gray-200 py-20 sm:py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Primera sección que describe productos */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Balsamos
                </p>
                <p className="mt-6 text-lg/8 text-gray-900">
                  Nuestro bálsamo está elaborado con ingredientes de origen
                  natural que hidratan y protegen los labios a profundidad.
                  Gracias a su fórmula nutritiva, ayuda a prevenir la resequedad,
                  suaviza la piel y aporta un delicado brillo natural con un sutil
                  toque de color gracias a los pigmentos de origen vegetal. Es un
                  producto unisex, ideal tanto para mujeres como para hombres que
                  desean mantener unos labios saludables, frescos y bien cuidados
                  durante todo el día.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Ingredientes:</h4>
                    <p className="text-gray-700">
                      Manteca de cacao, vitamina E, glicerina, mica vegetal
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Uso:</h4>
                    <p className="text-gray-700">
                      Aplicar directamente sobre labios limpios. Reaplicar según
                      necesidad, incluso por las noches.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Presentación:</h4>
                    <p className="text-gray-700">
                      10g en envase PET 100% reciclable. Vida útil: 6 meses.
                    </p>
                  </div>

                  <div>
                    <Link href="/pages/products/balsamos">
                      <ButtonGreen> Más información</ButtonGreen>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-150 w-full rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10 ">
              <Image
                src="/labios-lip-care.png"
                alt="balsamos"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Segunda sección que describe productos */}
          <div className="mt-8 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base/7 font-semibold text-gray-400">Deploy faster</h2> */}
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Serums Pestañas y Cejas
                </p>
                <p className="mt-6 text-lg/8 text-gray-900">
                  Nuestro sérum está elaborado con una mezcla de aceites naturales
                  que nutren profundamente, hidratan y revitalizan pestañas y
                  cejas. Favorece su crecimiento, aportando mayor volumen y salud,
                  realzando la belleza natural de tu mirada. Además, ayuda a
                  reparar el daño causado por el uso frecuente de
                  máscara de pestañas.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Ingredientes:</h4>
                    <p className="text-gray-700">
                      Aceite de ricino, Aceite de jojoba, Oleato de romero y
                      Vitamina E.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Uso:</h4>
                    <p className="text-gray-700">
                      Aplicar sobre pestañas y cejas limpias, preferiblemente en
                      la noche.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Presentación:</h4>
                    <p className="text-gray-700">
                      10 ml en envase PET 100% reciclable. Vida útil: 6 meses.
                    </p>
                  </div>

                  <div>
                    <Link href="/pages/products/serumsPestaniasCejas">
                      <ButtonGreen> Más información</ButtonGreen>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-150 w-full rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10 ">
              <Image
                alt="Product screenshot"
                src="/serums-p-c.jpg"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>


          {/* tercera sección que describe productos */}
          <div className="mt-8 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base/7 font-semibold text-gray-400">Deploy faster</h2> */}
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Serums Reparador Capilar
                </p>
                <p className="mt-6 text-lg/8 text-gray-900">
                  Un tratamiento natural diseñado para aplicarse en la raíz del cabello, donde nutre e hidrata directamente el folículo capilar. Su acción ayuda a fortalecer el crecimiento, mejorar la salud del cuero cabelludo y prevenir la caída, logrando un cabello más resistente, brillante y con vitalidad.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Ingredientes:</h4>
                    <p className="text-gray-700">
                      Aceite de ricino, Aceite de jojoba,  aceite de coco, vitamina E. 
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Uso:</h4>
                    <p className="text-gray-700">
                      Con el gotero, aplicar de 3 a 5 gotas directamente en la raíz del cabello
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Presentación:</h4>
                    <p className="text-gray-700">
                      20 ml en envase.
                    </p>
                  </div>

                  <div>
                    <Link href="/pages/products/serumsCapilar">
                      <ButtonGreen> Más información</ButtonGreen>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-150 w-full rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10 ">
              <Image
                alt="Product screenshot"
                src="/cuero-cabelludo.jpg"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
