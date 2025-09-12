
import SectionHeader from "@/components/sections/section-header";

export default function about() {
  return (
    <div className="min-h-screen bg-white">
      <SectionHeader
        imagen="https://plus.unsplash.com/premium_photo-1755025099451-a66aa4051332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXw2c01WalRMU2tlUXx8ZW58MHx8fHx8"
        titulo="Acerca de Claurea"
        descripcion="Piel que respira, vida que florece – Claurea, tu naturaleza sin filtros."
      />
     
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid ms:grid-cols-6 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
                <p>
                Claurea nació de una pasión personal que tomó forma en enero de 2023, cuando me propuse crear un bálsamo labial que fuera más que un producto: algo sencillo, puro y confiable. Con mis conocimientos en Química, formulé una mezcla equilibrada de ingredientes naturales que hidratan y protegen los labios a profundidad, sin químicos raros ni complicaciones. Ese bálsamo fue el primer paso de un sueño: ofrecer cuidado facial que se sienta como una extensión de tu piel, no como una máscara.
                </p>
                <p>
                En diciembre de 2024, ese sueño creció y se convirtió en Claurea, una marca con una idea clara: belleza natural, consciencia sostenible. Al bálsamo se sumó un sérum fortalecedor para pestañas y cejas, creado con aceites naturales para nutrir, revitalizar y realzar la mirada de forma práctica y vegana. Cada gota está pensada para quienes quieren verse bien sin esfuerzo, con productos que funcionan y respetan tanto tu piel como el planeta.
                </p>
                <p>
                Claurea no es solo para mujeres o solo para hombres; es para todos los que buscan cuidado real, sin reglas ni promesas vacías. Cada fórmula lleva detrás una intención consciente: usar lo mejor de la naturaleza, con empaques que cuidan el medio ambiente y un enfoque que dice "sé tú, pero con un toque especial". Desde aquel primer bálsamo hasta el sérum de hoy, Claurea es un compromiso con la autenticidad – porque tu piel merece sentirse viva, cómoda y, sobre todo, tuya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">Nuestra Misión</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 ">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "Hacer que el cuidado facial sea un acto de libertad. Con ingredientes que vienen de la tierra, protegemos y realzamos lo que ya eres, sin rutinas largas ni promesas vacías. Claurea es para quienes viven rápido, aman intensamente y no negocian su esencia – porque tu piel merece ser tan auténtica como tú."
            </p>
            <div className="inline-flex items-center space-x-2 text-green-700">
              {/* <Leaf className="w-5 h-5" /> */}
              <span className="font-medium">Belleza Natural</span>
              {/* <Leaf className="w-5 h-5" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
