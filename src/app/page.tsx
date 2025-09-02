
import Image from "next/image";

export default function Home() {
  return (
   
     <div className="relative min-h-screen w-full max-w-full overflow-hidden">
      {/* Imagen que ocupa toda la pantalla */}
      <Image
        src="/pexels-jahoo-388415.jpg"
        alt="Picture of the author"
        fill // Usa layout="fill" para ocupar el contenedor
        className="object-cover" // Asegura que la imagen cubra el contenedor sin distorsionarse
        priority // Carga la imagen inmediatamente
      />
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/50 to-transparent"
      ></div>
      {/* Capa de degradado para el efecto de difuminado en la parte inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
      ></div>
    </div>
  );
}
