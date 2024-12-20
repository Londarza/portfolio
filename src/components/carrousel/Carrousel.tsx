"use client";

import { useState } from "react";
import Image from "next/image";

interface CarrouselProps {
  images: string[]; // Recibe un array de strings con las rutas de las imágenes
}

const Carrousel: React.FC<CarrouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carrousel-container">
      {/* Imagen actual */}
      <div className="carrousel-slide">
        <Image
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          width={800}
          height={450}
          className="carrousel-image"
          priority
        />
      </div>

      {/* Botones de navegación */}
      <button className="carrousel-button carrousel-button-prev" onClick={handlePrev}>
        &#8592;
      </button>
      <button className="carrousel-button carrousel-button-next" onClick={handleNext}>
        &#8594;
      </button>

      {/* Indicadores (dots) */}
      <div className="carrousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carrousel-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
