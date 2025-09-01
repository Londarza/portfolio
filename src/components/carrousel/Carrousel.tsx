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
        <motion.p className="p-text" variants={textVariants}>
          {imagesProp.description}
        </motion.p>
      </motion.div>

      { /* Slider con Swiper */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
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
