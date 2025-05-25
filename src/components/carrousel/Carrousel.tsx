"use client";
import '@/components/carrousel/Carrousel.scss'
import Image, { StaticImageData } from 'next/image';
import {  motion } from 'framer-motion';
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
  const [transitionDirection, setTransitionDirection] = useState('next')
  // funcion para flecha atras y adelante
  const handleNext = () => {
    setTransitionDirection('next')
    setActiveIndex((prevIndex: number) => prevIndex === 2 ? prevIndex : prevIndex + 1)
  }
  const handlePrevious = () => {
    setTransitionDirection('previous')
    setActiveIndex((prevIndex: number) => prevIndex === 0 ? prevIndex : prevIndex - 1)
  }

  // definiendo animaciones

  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === 'next' ? 100 : -100,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    visible: {
      opacity: 1,
      x: 0,
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

      <div className='app__carrousel-imagesContainer'>
        <motion.div
          className='app__carrousel-FirstContainer'
          animate={{
            opacity: activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
            x: activeIndex === 0 ? '0px' : activeIndex === 1 ? '96px' : '96 px', 
            scale: activeIndex === 0 ? 1 : activeIndex === 1 ? 1.2 : 1.2
          }}
          transition={{
            duration: 0.5,
            delay:0,
            ease: 'easeInOut'
          }}
        >
          <Image className='IMG-first' alt='first-image' src={imagesProp.image[0]} width={200} height={300} />
        </motion.div>
        <motion.div
          className='app__carrousel-SecondContainer'
          animate={{
            opacity: activeIndex === 0 ? 0.66 : activeIndex === 1 ? 1 : 0,
            x: activeIndex === 0 ? '-96px' : activeIndex === 1 ? '0px' : '96 px', 
            scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2
          }}
          transition={{
            duration: 0.5,
            delay:0,
            ease: 'easeInOut'
          }}
        >
          <Image className='IMG-second' alt='second-image' src={imagesProp.image[1]} width={200} height={300} />
        </motion.div>
        <motion.div
          className='app__carrousel-ThirdContainer'
          animate={{
            opacity: activeIndex === 0 ? 0.33 : activeIndex === 1 ? 0.66 : 1,
            x: activeIndex === 0 ? '-192px' : activeIndex === 1 ? '-96px' : '0px', 
            scale: activeIndex === 0 ? 0.6 : activeIndex === 1 ? 0.8 : 1
          }}
          transition={{
            duration: 0.5,
            delay:0,
            ease: 'easeInOut'
          }}
        >
          <Image className='IMG-third' alt='third-image' src={imagesProp.image[2]} width={200} height={300} />
        </motion.div>
        <div className='app__carrousel-Controls'>
          <button className={activeIndex === 0 ? 'disabled' : 'previousContainer'} onClick={handlePrevious}>
            <Image
              alt='previous-img'
              src={activeIndex === 0 ? images.previousDisabled : images.previousEnabled}
            />
          </button>
          <button className={activeIndex === 2 ? 'disabled' : 'nextContainer'} onClick={handleNext}>
            <Image
              alt='next-img'
              src={activeIndex === 2 ? images.nextDisabled : images.nextEnabled}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
