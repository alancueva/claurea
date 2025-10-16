/**
 * Componente que renderiza una sección con un degradado de colores
 * @returns {JSX.Element} Un elemento JSX que representa la sección con un degradado de colores
 */

export default function SectionColorDegrade() {
  return (
    <section
      className={`
          fixed 
          inset-0 
          z-[-1] 
          bg-gradient-to-b 
          from-gray-400 
          to-white
        `}
      style={{
        background:
          "linear-gradient(to bottom,rgb(202, 200, 196) 0%,rgb(240, 239, 236) 50%, #ffffff 100%)",
      }}
    ></section>
  );
}
