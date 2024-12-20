"use client";

import Carrousel from "@/components/carrousel/Carrousel";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Proyectos: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Esto asegura que el componente se renderice solo en el cliente
  }, []);
  const forgeFitImages = [
    "/forgefit/Sin título.png",
    "/forgefit/Sin título2.jpg",
    "/forgefit/Sin título3.jpg",
    "/forgefit/Sin título4.jpg",
    "/forgefit/Sin título5.jpg",
    "/forgefit/Sin título6.jpg",
    "/forgefit/Sin título7.jpg",
    "/forgefit/Sin título8.jpg",
    "/forgefit/Sin título9.jpg",
  ];
  const hiptekImages = [
    "/hiptek/hiptek1.jpg",
    "/hiptek/hiptek1.jpg",
    "/hiptek/hiptek2.jpg",
    "/hiptek/hiptek3.jpg",
    "/hiptek/hiptek4.jpg",
    "/hiptek/hiptek5.jpg",
    "/hiptek/hiptek6.jpg",
    "/hiptek/hiptek7.jpg",
    "/hiptek/hiptek8.jpg",
  ];
  const namasteImages = [
    "/namaste/namaste.jpg",
    "/namaste/namaste1.jpg",
    "/namaste/namaste2.jpg",
    "/namaste/namaste3.jpg",
    "/namaste/namaste4.jpg",
    "/namaste/namaste5.jpg",
    "/namaste/namaste6.jpg",
    "/namaste/namaste7.jpg",
  ];
  return (
    <main className="proyectos-main min-h-screen bg-gray-900 text-white">
      {/* Título de la sección */}
      <section className="proyectos-header text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold animate__animated animate__fadeInUp animate__delay-1s">
          Proyectos en los que he participado
        </h1>
      </section>

      {/* Lista de proyectos */}
      <section className="proyectos-list grid grid-cols-1 gap-12 px-6 sm:px-12 md:grid-cols-2 xl:grid-cols-3">
        {/* Proyecto 1 */}
        <div className="proyecto-card bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
          <h2 className="proyecto-titulo text-2xl font-semibold p-6 bg-gray-700">
            ForgeFit
          </h2>
          <div className="proyecto-contenido p-6 space-y-4">
            <div className="proyecto-tecnologias text-gray-300">
              <span className="font-semibold">Tecnologías utilizadas:</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>NextAuth</li>
                <li>LandBot</li>
                <li>maptiler</li>
                <li>Stripe</li>
                <li>SweetAlert 2</li>
              </ul>
            </div>
            <div className="proyecto-descripcion text-gray-300">
              <p>
                Proyecto grupal en el que desarrollamos una app para gimnasios,
                donde integramos diversas funcionalidades para mejorar la
                experiencia de los usuarios y los administradores. Los usuarios
                pueden registrarse, logearse con credenciales propias y de
                terceros, pagar membresías, ver clases y profesores, y
                suscribirse a clases. Los profesores pueden crear y gestionar
                clases, mientras que los administradores tienen acceso a un
                dashboard completo para gestionar usuarios, clases, categorías y
                suscripciones.
              </p>
            </div>

            <div className="proyecto-carrousel">
              <div className="carrousel-placeholder bg-gray-600 rounded-md h-64 mb-4">
                {/* Aquí se incluiría el carrusel de imágenes */}
                <Carrousel images={forgeFitImages} />
              </div>
            </div>
            <div className="proyecto-enlaces space-y-2">
              <a
                href="https://vimeo.com/1037638264?share=copy"
                target="_blank"
                className="text-[#00A7FF] hover:text-[#00FF88] transition-all duration-300"
              >
                Video del proyecto
              </a>
              {/* ReactPlayer renderizado solo en el cliente */}
              {isClient && (
                <ReactPlayer
                  url="https://vimeo.com/1037638264?share=copy"
                  width="100%"
                  height="200px"
                  controls
                  className="rounded-md overflow-hidden"
                />
              )}
              <a
                href="https://pf-webgym-qv6r.vercel.app/"
                target="_blank"
                className="text-[#00A7FF] hover:text-[#00FF88] transition-all duration-300"
              >
                Ver Deploy
              </a>
              <a
                href="https://github.com/DiaczukMatias/PF-WEBGYM/"
                target="_blank"
                className="text-[#00A7FF] hover:text-[#00FF88] transition-all duration-300"
              >
                Ver Github
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="proyecto-card bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
          <h2 className="proyecto-titulo text-2xl font-semibold p-6 bg-gray-700">
            HipTek
          </h2>
          <div className="proyecto-contenido p-6 space-y-4">
            <div className="proyecto-tecnologias text-gray-300">
              <span className="font-semibold">Tecnologías utilizadas:</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Context API</li>
                <li>js-cookie</li>
              </ul>
            </div>
            <div className="proyecto-descripcion text-gray-300">
              <p>
                Se desarrolló un ecommerce de ciclo completo, donde los usuarios
                pueden realizar diversas acciones como navegar entre los
                productos, registrarse, iniciar sesión, visualizar detalles de
                los productos, agregar o quitar artículos del carrito, realizar
                compras y revisar su historial de compras exitosas o rechazadas.
                La aplicación fue diseñada para proporcionar una experiencia de
                compra intuitiva y eficiente, facilitando tanto la navegación
                como el proceso de pago.
              </p>
            </div>

            <div className="proyecto-carrousel">
              <div className="carrousel-placeholder bg-gray-600 rounded-md h-64 mb-4">
                {/* Aquí se incluiría el carrusel de imágenes */}
                <Carrousel images={hiptekImages} />
              </div>
            </div>
            <div className="proyecto-enlaces space-y-2">
              <a
                href="#"
                target="_blank"
                className="text-[#00A7FF] hover:text-[#00FF88] transition-all duration-300"
              >
                Ver Github
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="proyecto-card bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
          <h2 className="proyecto-titulo text-2xl font-semibold p-6 bg-gray-700">
            Namaste
          </h2>
          <div className="proyecto-contenido p-6 space-y-4">
            <div className="proyecto-tecnologias text-gray-300">
              <span className="font-semibold">Tecnologías utilizadas:</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>React</li>
                <li>Vite</li>
                <li>Redux</li>
                <li>Axios</li>
                <li>Typescript</li>
                <li>Styled Components</li>
                <li>Typeorm</li>
              </ul>
            </div>
            <div className="proyecto-descripcion text-gray-300">
              <p>
                Proyecto individual para la gestión de turnos en un SPA (Salón
                de Belleza). Los clientes pueden registrarse, iniciar sesión,
                agendar turnos para diversos servicios y cancelar sus reservas
                cuando lo necesiten. Se implementó Redux para manejar estados
                globales, garantizando una experiencia fluida y consistente.
                Además, se diseñó con una selección de colores cuidadosamente
                elegida y un enfoque en la usabilidad, asegurando una interfaz
                intuitiva y atractiva.
              </p>
            </div>

            <div className="proyecto-carrousel">
              <div className="carrousel-placeholder bg-gray-600 rounded-md h-64 mb-4">
                {/* Aquí se incluiría el carrusel de imágenes */}
                <Carrousel images={namasteImages} />
              </div>
            </div>
            <div className="proyecto-enlaces space-y-2">
              <a
                href="https://github.com/Londarza/appTurnos"
                target="_blank"
                className="text-[#00A7FF] hover:text-[#00FF88] transition-all duration-300"
              >
                Ver Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Proyectos;
