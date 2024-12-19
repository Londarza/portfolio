"use client";

import Carrousel from "@/components/carrousel/Carrousel";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Proyectos: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Esto asegura que el componente se renderice solo en el cliente
  }, []);

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
              <span className="font-semibold">Tecnologías:</span> React, Next.js, Tailwind CSS, TypeScript, NextAuth, LandBot, maptiler, Stripe, sweetAlert 2
              <span>Proyecto grupal, donde creamos una app para gimnacios donde integramos todas las necesidades del mismo, donde los usuarios pueden registrarse, logearse con credenciales propias y de terceros, pagar las membresias desde una plataforma de pagos real, ver las clases y profesores filtrando por categorias, se pueden suscribir a clases, contactar con el Admin de la pagina, interactuar con un chatbot, ver la ubicacion del gimnacio. Los profesores pueden crear clases, editarlas y ver todos sus alumnos. La app cuenta con un dashboard de administrador completo contando con CRUD de usuarios, clases, categorias y suscripciones</span>
            </div>
            <div className="proyecto-carrousel">
              <div className="carrousel-placeholder bg-gray-600 rounded-md h-64 mb-4">
                {/* Aquí se incluiría el carrusel de imágenes */}
                <Carrousel/>
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
              <span className="font-semibold">Tecnologías:</span> React, Next.js, Tailwind CSS, TypeScript, Context, js-cookie
              <span>Se creó un Ecommerce de ciclo completo, donde el usuario puede navegar, registrarse, logearse, ver detalles de los productos, agregar y quitar del carrito, efectuar la compra y ver su historial de compras exitosas y rechazadas</span>
            </div>
            <div className="proyecto-carrousel">
              <div className="carrousel-placeholder bg-gray-600 rounded-md h-64 mb-4">
                
              </div>
            </div>
            <div className="proyecto-enlaces space-y-2">
              <a
                href="#"
                target="_blank"
                className="text-[#00A7FF] hover:text-[#00FF88] transition-all duration-300"
              >
                Video del proyecto
              </a>
             
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Proyectos;
