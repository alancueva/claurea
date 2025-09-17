"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function SectionProductos() {
  const productos = [
    {
      id: 1,
      titulo: "Bálsamo",
      descripcion: "Bálsamo elaborado con ingredientes de origen natural que hidratan y protegen los labios a profundidad.",
      imagen: "/labios-lip-care.png",
      link: "/pages/products/balsamos",
      beneficios: ["Hidratación profunda", "Ingredientes naturales", "Brillo natural con toque de color"]
    },
    {
      id: 2,
      titulo: "Sérum Pestañas y Cejas",
      descripcion: "Sérum elaborado con una mezcla de aceites naturales que nutren profundamente, hidratan y revitalizan pestañas y cejas.",
      imagen: "/serums-p-c.jpg",
      link: "/pages/products/serumsPestaniasCejas",
      beneficios: ["Nutrición intensa", "Fortalecimiento y crecimiento", "Hidratación natura"]
    },
    {
      id: 3,
      titulo: "Sérum Capilar",
      descripcion: "El Sérum es un tratamiento natural que actúa directamente en la raíz del cabello. Su fórmula nutritiva fortalece los folículos, estimula el crecimiento y mejora la salud del cuero cabelludo.",
      imagen: "/cuero-cabelludo.jpg",
      link: "/pages/products/serumsCapilar",
      beneficios: ["Fortalecimiento de raíces", "Crecimiento saludable", "Cuidado del cuero cabelludo"]
    }
  ];

  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const router = useRouter();
  const handleProductClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestros productos están diseñados con fórmulas innovadoras y
            extractos naturales para brindarte frescura, protección y
            bienestar en cada aplicación.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform ${hoveredProduct === producto.id ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
                }`}
              onMouseEnter={() => setHoveredProduct(producto.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(producto.link)}
            >
              <div className="flex flex-col">
                {/* Imagen del producto */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={producto.imagen}
                    alt={producto.titulo}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                </div>

                {/* Contenido del producto */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {producto.titulo}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {producto.descripcion}
                    </p>
                  </div>

                  {/* Beneficios */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {producto.beneficios.map((beneficio, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {beneficio}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Precio y botón */}
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-blue-600">
                      {/* {producto.precio} */}
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold transition-colors">
                      <span className="mr-2">Ver producto</span>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredProduct === producto.id ? 'translate-x-2' : ''
                        }`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}