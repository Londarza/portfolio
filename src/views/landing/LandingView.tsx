"use client";
import { useRouter } from "next/navigation";
import 'animate.css';

const LandingView: React.FC = () => {
  const router = useRouter();

  return (
    <main className="landing-main min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="landing-hero flex-grow relative flex flex-col items-center justify-center px-6 text-center space-y-8 md:space-y-12">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="background-radial opacity-20 animate-pulse"></div>
          <div className="background-linear opacity-40 animate-pulse"></div>
        </div>

        {/* Animación para el contenido */}
        <div className="content-container relative z-10 space-y-8 md:space-y-10">
          {/* Título */}
          <h1 className="main-title text-5xl md:text-7xl font-bold animate__animated animate__fadeInUp animate__delay-1s">
            Hola, soy{" "}
            <span className="highlighted-text">Lautaro Ondarza</span>
          </h1>

          {/* Descripción */}
          <p className="description text-xl md:text-2xl text-gray-300 animate__animated animate__fadeInUp animate__delay-2s">
            Transformo ideas en interfaces atractivas y funcionales.
          </p>

          {/* Botones para descargar el CV */}
          <div className="cv-buttons mt-8 flex flex-col md:flex-row gap-6 justify-center animate__animated animate__fadeInUp animate__delay-3s">
            <a
              href="/cv%20Lautaro%20Ondarza%20(eng).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button px-8 py-4 bg-[#00A7FF] text-white font-semibold rounded-md hover:bg-[#00A7FF] transition-all duration-300 transform hover:scale-105"
            >
              Descargar CV (EN)
            </a>
            <a
              href="/cv%20Lautaro%20Ondarza.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button px-8 py-4 bg-[#00A7FF] text-white font-semibold rounded-md hover:bg-[#00A7FF] transition-all duration-300 transform hover:scale-105"
            >
              Descargar CV (ES)
            </a>
          </div>

          {/* Botón explorar portfolio */}
          <div className="explore-button-container mt-10 animate__animated animate__fadeInUp animate__delay-4s">
            <button
              className="landing__button-explorar"
              onClick={() => router.push("/home")}
            >
              Explorar Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingView;
