
/**
 * Interfaz que define las propiedades del componente SectionHeader
 */
interface SectionHeaderProps {
  imagen: string;
  titulo: string;
  descripcion: string;
}


/**
 * Componente que renderiza una sección hero con imagen de fondo, título y descripción
 * 
 * @param {SectionHeaderProps} props - Las propiedades del componente
 * @param {string} props.imagen - URL de la imagen de fondo
 * @param {string} props.titulo - Título principal que se mostrará sobre la imagen
 * @param {string} props.descripcion - Descripción o subtítulo que aparece debajo del título
 * 
 * @returns {JSX.Element} Un elemento JSX que representa una sección hero con overlay oscuro
 * 
 * @example
 * ```tsx
 * <SectionHeader
 *   imagen="/mi-imagen.jpg"
 *   titulo="Mi Título"
 *   descripcion="Mi descripción aquí"
 * />
 * ```
 */

export default function SectionHeader({
  imagen,
  titulo,
  descripcion
}: SectionHeaderProps) {

  return (
    <div
      className="relative w-full h-100 flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url('${imagen}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Capa oscura para que se vea mejor el texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {titulo}
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl">
          {descripcion}
        </p>
      </div>
    </div>
  );

}