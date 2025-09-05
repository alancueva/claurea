import Link from "next/link";
import Image from "next/image";

export default function Productos() {
  return (
    <div className="overflow-hidden bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Cabecera personalizada */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre nuestra colección completa de bálsamos y serums, cada uno
            formulado con ingredientes naturales selectos para nutrir y
            transformar tu piel.
          </p>
        </div>
        {/* Primera sección que describe productos */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base/7 font-semibold text-gray-400">Deploy faster</h2> */}
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
                    <button className="bg-transparent hover:bg-green-600 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded">
                      ver más
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-150 w-full rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10 ">
            <Image
              src="/bal-sa-mo.png"
              alt="balsamos"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* </div>
          <Image
            alt="Product screenshot"
            src="/bal-sa-mo.png"
            className="w-3xl h-200 max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          /> */}
        </div>

        {/* Segunda sección que describe productos */}
        <div className="mt-8 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base/7 font-semibold text-gray-400">Deploy faster</h2> */}
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Serums
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
                  <Link href="/pages/products/serums">
                    <button className="bg-transparent hover:bg-green-600 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded">
                      ver más
                    </button>
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
      </div>
    </div>
  );
}
