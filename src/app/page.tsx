import Image from "next/image";
import SectionClaurea from "./section-claurea";
import RotatingText from "../components/rotating-text";
import SectionProductos from "../components/section-productos";
import AboutClaurea from "../components/aboutClaurea";

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
      <SectionProductos />
      <SectionClaurea />
      <AboutClaurea />
    </div>
  );
}
