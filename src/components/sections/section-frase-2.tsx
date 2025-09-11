
/**
 * Componente que muestra una sección con una frase inspiradora.
 * la idea es usarlo entre secciones de productos para dar un respiro visual y un mensaje positivo.
 * 
 */
export default function SectionFrase2() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <blockquote className="border-l-4 border-blue-500 pl-4 italic">
          <p className="text-lg text-gray-800">
            "La belleza comienza en el momento en que decides ser tú mismo."
          </p>
          <footer className="mt-2 text-sm text-gray-600">
            - Coco Chanel
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
