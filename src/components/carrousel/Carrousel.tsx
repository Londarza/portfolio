"use client";
import "@/components/carrousel/Carrousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarrouselProps {
  imagesProp: {
    image: StaticImageData[];
    title: string;
    description: string;
    link?: string;
  };
}

const Carrousel: React.FC<CarrouselProps> = ({ imagesProp }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="app__carrousel">
      { /* Texto descriptivo */}
      <motion.div
        className="app__carrousel-contentContainer"
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="head-text" variants={textVariants}>
          Proyecto <span>{imagesProp.title}</span>
        </motion.h1>
        <motion.div className="app__carrousel-text" variants={textVariants}>
          <p className="p-text app__carrousel-description">
            {imagesProp.description}
          </p>
          {imagesProp.link && (
            <a
              href={imagesProp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="app__carrousel-link"
            >
              Link al Deploy
            </a>
          )}
        </motion.div>
      </motion.div>

      { /* Slider con Swiper */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1.05, spaceBetween: 14 },
          640: { slidesPerView: 1.2, spaceBetween: 16 },
          900: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 24 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="app__carrousel-swiper"
      >
        {imagesProp.image.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              className="app__carrousel-Image"
              alt={`Proyecto imagen ${index + 1}`}
              src={img}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;
