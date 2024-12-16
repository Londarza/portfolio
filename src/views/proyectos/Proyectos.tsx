"use client";

const Proyectos: React.FC = () => {
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
            Proyecto 1
          </h2>
          <div className="proyecto-contenido p-6 space-y-4">
            <div className="proyecto-tecnologias text-gray-300">
              <span className="font-semibold">Tecnologías:</span> React, Next.js, Tailwind CSS, TypeScript, NextAuth
            </div>
            <div className="proyecto-carrousel">
              <div className="carrousel-placeholder bg-gray-600 rounded-md h-64 mb-4">
                {/* Aquí se incluiría el carrusel de imágenes */}
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
              <a
                href="#"
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
            Proyecto 2
          </h2>
          <div className="proyecto-contenido p-6 space-y-4">
            <div className="proyecto-tecnologias text-gray-300">
              <span className="font-semibold">Tecnologías:</span> React, Next.js, Tailwind CSS, TypeScript, Context, Redux
            </div>
            <div className="proyecto-carrousel">
              <div className="carrousel-placeholder bg-gray-600 rounded-md h-64 mb-4">
                {/* Aquí se incluiría el carrusel de imágenes */}
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
              <a
                href="#"
                target="_blank"
                className="text-[#00A7FF] hover:text-[#00FF88] transition-all duration-300"
              >
                Ver Deploy
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Proyectos;
