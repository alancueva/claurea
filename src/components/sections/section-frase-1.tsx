export default function SectionFrase1() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Frase principal */}
        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-relaxed mb-8">
          "Mira profundamente en la naturaleza y entonces comprenderás todo mejor."
        </blockquote>
        
        {/* Línea decorativa */}
        <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
        
        {/* Autor */}
        <cite className="text-lg md:text-xl text-gray-500 font-light not-italic">
            Albert Einstein, físico alemán.
        </cite>
      </div>
    </section>
    );
}