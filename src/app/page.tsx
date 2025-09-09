import Image from "next/image";
import Link from "next/link";
import SectionClaurea from "./section-claurea";
import RotatingText from "../components/rotating-text";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen w-full max-w-full overflow-hidden">
        {/* Imagen para desktop */}
        <Image
          src="/mountains-8540699_1920.jpg"
          alt="Claurea"
          fill
          className="object-cover rounded-b-lg hidden md:block"
          priority
        />
        {/* Imagen para móviles */}
        <Image
          src="/lake-5612720_1920.jpg"
          alt="Claurea móvil"
          fill
          className="object-cover rounded-b-lg md:hidden"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Fondo semitransparente más oscuro en móviles */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/10 transition-all"></div>
          <div className="relative px-8 py-6 text-center max-w-lg">
            <RotatingText />
          </div>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Belleza Natural Auténtica
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Nuestros productos están diseñados con fórmulas innovadoras y
              extractos naturales para brindarte frescura, protección y
              bienestar en cada aplicación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bálsamos */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-green-200/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mr-4">
                    {/* <Droplets className="w-8 h-8 text-green-600" /> */}
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">
                    Bálsamos
                  </h3>
                </div>

                <p className="text-gray-800 mb-6 leading-relaxed text-lg">
                  Nuestro bálsamo está elaborado con ingredientes de origen
                  natural que hidratan y protegen los labios a profundidad.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-800">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                    <span>Manteca de cacao</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                    <span>vitamina E</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                    <span>Glicerina y Mica vegetal</span>
                  </div>
                </div>
                <Link href="/pages/products/balsamos">
                  <button className="w-full py-3 bg-green-700 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
                    Ver Bálsamos
                  </button>
                </Link>
              </div>
            </div>

            {/* Serums */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-green-200/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mr-4">
                    {/* <Sparkles className="w-8 h-8 text-emerald-600" /> */}
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">Serums</h3>
                </div>

                <p className="text-gray-800 mb-6 leading-relaxed text-lg">
                  Nuestro sérum está elaborado con una mezcla de aceites
                  naturales que nutren profundamente, hidratan y revitalizan
                  pestañas y cejas.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-800">
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                    <span>Aceite de ricino</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                    <span>Aceite de jojoba</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                    <span>Oleato de romero y Vitamina E</span>
                  </div>
                </div>
                <Link href="/pages/products/serums">
                  <button className="w-full py-3 bg-green-700 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
                    Ver Serums
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionClaurea />
    </div>
  );
}
