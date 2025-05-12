"use client";
import '@/components/carrousel/Carrousel.scss'
import Image from 'next/image';

import images from '@/constants/constants';
interface CarrouselProps {
  imagesProp: string[]; // Recibe un array de strings con las rutas de las imágenes
}

const Carrousel: React.FC<CarrouselProps> = ({ imagesProp }) => {


  return (
    
    <div className='app__carrousel'>
      <div className='app__carrousel-contentContainer'>
        <div className='app__carrousel-contentTitle'>
          <h1 className='head-text'>Primer <span> Carrousel</span></h1>
        </div>
        <div className='app__carrousel-contentDescription'>
          <p className='p-text'>Soy la gran descripcion, teman ante mi</p>
        </div>
        <div className='app__carrousel-contentButton'>
          <button className='p-text'>Soy el botton</button>
        </div>


      </div>

      <div className='app__carrousel-imagesContainer'>
        <div className='app__carrousel-FirstContainer'>
          <Image className='IMG-first' alt='first-image' src={images.profile} width={200} height={300}/>
        </div>
        <div className='app__carrousel-SecondContainer'>
          <Image className='IMG-second' alt='second-image' src={images.adidas} width={200} height={300} />
        </div>
        <div className='app__carrousel-ThirdContainer'>
          <Image className='IMG-third' alt='third-image' src={images.amazon} width={200} height={300} />
        </div>
        <div className='app__carrousel-Controls'>
          <button className='previousContainer'>
          <Image alt='previous-img' src={images.previousDisabled} />
          </button>
          <button className='nextContainer'>
          <Image alt='next-img' src={images.nextEnabled} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
