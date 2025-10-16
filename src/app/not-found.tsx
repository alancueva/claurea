"use client";

import SectionColorDegrade from "@/components/sections/section-color-degrade";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-2xl w-full text-center">
          <SectionColorDegrade />
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl font-light text-gray-200 tracking-tight">
                404
              </h1>
            </div>

            {/* Message */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-light text-gray-900 tracking-wide">
                Página no encontrada
              </h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
              >
                <Home size={18} />
                Volver al inicio
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-900 text-sm tracking-wide hover:border-gray-900 transition-colors"
              >
                <ArrowLeft size={18} />
                Página anterior
              </button>
            </div>

            {/* Decorative element */}
            <div className="mt-16 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
