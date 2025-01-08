"use client";

import { Box, Modal, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close"; // Importar el icono de cerrar

interface CarrouselProps {
  images: string[]; // Recibe un array de strings con las rutas de las imágenes
}

const Carrousel: React.FC<CarrouselProps> = ({ images }) => {
  const [openModal, setOpenModal] = useState(false); // Estado para el modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Imagen seleccionada

  // Función para abrir el modal con la imagen seleccionada
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setOpenModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 800, mx: "auto" }}>
      <Swiper
        modules={[Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        pagination={{ clickable: true }}
        navigation
        loop={true}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              width={800}
              height={450}
              style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              onClick={() => handleImageClick(src)} // Maneja el click
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal para ver imagen en pantalla completa */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "80vw", // Modal ocupa el 80% del ancho
            maxHeight: "80vh", // Modal ocupa el 80% de la altura
            position: "relative",
            backgroundColor: "white",
            borderRadius: "8px", // Redondear bordes
            overflow: "hidden",
          }}
        >
          {/* Botón de cerrar */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={window.innerWidth} // Ajusta al tamaño de la ventana
              height={window.innerHeight} // Ajusta al tamaño de la ventana
              style={{ objectFit: "contain" }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Carrousel;
