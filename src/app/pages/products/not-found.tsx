"use client";
import { Home, Package, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const products = [
    { name: 'Bálsamo', href: '/pages/products/balsamo' },
    { name: 'Sérum Pestañas y Cejas', href: '/pages/products/serumsPestaniasCejas' },
    { name: 'Sérum Reparador Capilar', href: '/pages/products/serumReparadorCapilar' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
     
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="max-w-3xl w-full text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <Package size={40} className="text-gray-400" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl font-light text-gray-900 tracking-wide">
              Producto no encontrado
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              El producto que buscas no existe o ha sido descontinuado. 
              Explora nuestra colección de productos naturales.
            </p>
          </div>

          {/* Products Grid */}
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Nuestros Productos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {products.map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="p-6 border border-gray-200 hover:border-gray-900 transition-all duration-300 group"
                >
                  <p className="text-sm text-gray-900 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
            >
              <Package size={18} />
              Ver todos los productos
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-900 text-sm tracking-wide hover:border-gray-900 transition-colors"
            >
              <Home size={18} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}