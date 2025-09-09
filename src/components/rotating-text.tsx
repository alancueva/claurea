'use client';

import { useState, useEffect } from 'react';

const phrases = [
  "Belleza que florece con la pureza de la naturaleza, fresca y auténtica como tú.",
  "Descubre el poder de los ingredientes naturales en cada gota.",
  "Tu piel merece lo mejor que la naturaleza puede ofrecer.",
  "Cuidado natural, resultados extraordinarios.",
  "Donde la ciencia se encuentra con la sabiduría ancestral.",
  "Belleza consciente, planeta protegido.",
  "Ingredientes puros para una belleza sin límites."
];

/**
 * Componente que muestra una frase que se cambia cada 8 segundos.
 */
export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // Tiempo de transición
      
    }, 8000); // Cada frase se muestra por 8 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <p 
      className={`text-3xl text-gray-200 font-semibold drop-shadow-lg transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {phrases[currentIndex]}
    </p>
  );
}
