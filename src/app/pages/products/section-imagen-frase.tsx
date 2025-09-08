import Image from "next/image";

/**
 * Componente que muestra una sección con una imagen de fondo y un texto superpuesto.
 * La imagen tiene un degradado para mejorar la legibilidad del texto.
 */
export default function SectionImagenFrase() {
  return (
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent"></div>

        {/* Contenido opcional sobre la imagen */}
        <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-gray-300 px-4 max-w-3xl mx-auto">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                    Auténtica Belleza Natural
                  </h2>
                  {/* <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                    Un texto descriptivo que se ve perfectamente sobre la imagen con degradado. 
                    Ideal para call-to-actions o mensajes importantes.
                  </p> */}
                  {/* <div className="mt-8">
                    <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                      Llamada a la Acción
                    </button>
                  </div> */}
                </div> 
              </div>
      </section>
  );
}
