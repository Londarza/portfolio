"use client";
import '@/components/carrousel/Carrousel.scss'
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import images from '@/constants/constants';
import { useState } from 'react';


interface CarrouselProps {
  imagesProp: {
    image: StaticImageData[]
    title: string
    description: string

  }; // Recibe un array de strings con las rutas de las imágenes
}

const Carrousel: React.FC<CarrouselProps> = ({ imagesProp }) => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'previous'>('next')

  // Navegar hacia adelante
  const handleNext = () => {
    if (activeIndex < imagesProp.image.length - 1) {
      setTransitionDirection('next');
      setActiveIndex(prev => prev + 1);
    }
  };

  // Navegar hacia atrás
  const handlePrevious = () => {
    if (activeIndex > 0) {
      setTransitionDirection('previous');
      setActiveIndex(prev => prev - 1);
    }
  };

  // definiendo animaciones

  const textVariants = {
    hidden: {
      opacity: 0,
      y: transitionDirection === 'next' ? 50 : -50,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  }
  const textContainerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }
  return (

    <div className='app__carrousel'>
      {/* Contenido del texto */}
      <motion.div
        className='app__carrousel-contentContainer'
        key={activeIndex}
        variants={textContainerVariant}
        initial='hidden'
        animate='visible'
      >
        <div className='app__carrousel-contentTitle'>
          <motion.h1 className='head-text' variants={textVariants}>Proyecto <span> {imagesProp.title}</span></motion.h1>
        </div>
        <div className='app__carrousel-contentDescription'>
          <motion.p className='p-text' variants={textVariants}>{imagesProp.description}</motion.p>
        </div>



      </motion.div>
        {/* Contenedor de imágenes */}
      <div className='app__carrousel-imagesContainer'>
       {imagesProp.image.map((img, index) => {
          const offset = index - activeIndex;

          // Lógica dinámica para escala, opacidad y posición horizontal
          let scale = 1;
          let opacity = 1;
          const y = `${offset * 96}px`;
          const zIndex = 20 - Math.abs(offset);
          if (offset === 0) {
            scale = 1;
            opacity = 1;
          } else if (Math.abs(offset) === 1) {
            scale = 0.8;
            opacity = 0.66;
          } else {
            scale = 0.6;
            opacity = 0.33;
          }

          return (
            <motion.div
              key={index}
              className='app__carrousel-ImageContainer'
               style={{ zIndex }}
              animate={{
                opacity,
                y,
                scale
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut'
              }}
            >
              <Image
                className='app__carrousel-Image'
                alt={`image-${index}`}
                src={img}
                layout='responsive'
              />
            </motion.div>
          );
        })}
        {/* Controles de navegación */}

        <div className='app__carrousel-Controls'>
          <button className={activeIndex === 0 ? 'disabled' : 'previousContainer'} onClick={handlePrevious}>
            <Image
              alt='previous-img'
              src={activeIndex === 0 ? images.previousDisabled : images.previousEnabled}
            />
          </button>
          <button className={activeIndex === imagesProp.image.length - 1 ? 'disabled' : 'nextContainer'} onClick={handleNext}>
            <Image
              alt='next-img'
              src={activeIndex === imagesProp.image.length - 1 ? images.nextDisabled : images.nextEnabled}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
