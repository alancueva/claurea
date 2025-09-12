/**
 * Props para el componente ButtonGreen
 */
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
  }
  
/**
 * Botón verde con estilo minimalista para Claurea
 * @param children - Contenido del botón
 * @param onClick - Función opcional que se ejecuta al hacer clic
 * @returns Componente de botón estilizado
 */
export default function ButtonGreen({ children, onClick }: ButtonProps) {
    return (
        <button
            className="bg-transparent hover:bg-green-600 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded-full"
            onClick={onClick}>
            {children}
        </button>
    )
}