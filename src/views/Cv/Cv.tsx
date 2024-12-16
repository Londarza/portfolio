import React from "react";
import Image from "next/image";

const Cv: React.FC = () => {
  return (
    <div className="cv-container">
      {/* Información básica */}
      <header className="cv-header">
        <Image
          height={150}
          width={150}
          src="/Perfil.jpg"
          alt="Lautaro Emanuel Ondarza Martinez"
          className="cv-image"
        />
        <div className="cv-info">
          <h1 className="cv-name">Lautaro Emanuel Ondarza Martinez</h1>
          <p className="cv-title">Desarrollador Full Stack | Especializado en Front-End</p>
          <p className="cv-contact">
            📍 Argentina, Buenos Aires | 📞 (+54) 11 2242 7074 | 📧{" "}
            <a href="mailto:lautaro.ondarza@gmail.com" className="cv-link">
              lautaro.ondarza@gmail.com
            </a>
          </p>
          <p className="cv-contact">
            💼{" "}
            <a
              href="https://www.linkedin.com/in/lautaro-ondarza/"
              className="cv-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            | 💻{" "}
            <a
              href="https://github.com/LOndarza"
              className="cv-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </header>

      {/* Perfil Profesional */}
      <section className="cv-section">
        <h2 className="cv-section-title">Perfil Profesional</h2>
        <p className="cv-section-content">
          Desarrollador Full Stack con sólida experiencia académica y proyectos grupales. Especializado en el
          desarrollo Front-End, con habilidades avanzadas en React.js, Next.js, Tailwind CSS, y TypeScript, entre
          otras tecnologías modernas. En constante aprendizaje, completé los bootcamps de Digital House (2023) y Henry
          (2024), adquiriendo un profundo conocimiento del stack MERN y tecnologías relevantes para el mercado actual.
          Destaco en la creación de interfaces de usuario intuitivas, diseño de sistemas escalables y colaboración en
          equipos multidisciplinarios.
        </p>
      </section>

      {/* Proyectos Relevantes */}
      <section className="cv-section">
        <h2 className="cv-section-title">Proyectos Relevantes</h2>

        {/* Proyecto 1 */}
        <div className="cv-project">
          <h3 className="cv-project-title">ForgeFit (Nov. 2024 - Dic. 2024)</h3>
          <p className="cv-project-role">Rol: Full Stack Developer | Proyecto grupal académico (Henry Bootcamp)</p>
          <p className="cv-project-description">
            Plataforma completa para gimnasios, que permite gestión de usuarios, clases, pagos y administración de
            contenido.
          </p>
          <ul className="cv-project-list">
            <li>Desarrollo de funcionalidades Front-End con Next.js, TypeScript, y Tailwind CSS.</li>
            <li>Implementación de notificaciones con EmailJS y alertas dinámicas con SweetAlert.</li>
            <li>Base de datos relacional diseñada con PostgreSQL y TypeORM.</li>
          </ul>
          <div className="cv-project-link">
            <a href="https://pf-webgym-qv6r.vercel.app/" className="cv-link" target="_blank" rel="noopener noreferrer">
              🔗 Deploy en Vercel
            </a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="cv-project">
          <h3 className="cv-project-title">Blackvision (May. 2024 - Ago. 2024)</h3>
          <p className="cv-project-role">Rol: Full Stack Developer | Proyecto grupal académico (Henry Bootcamp)</p>
          <p className="cv-project-description">
            E-commerce de lentes con funcionalidades de registro, carrito, compras y panel administrativo.
          </p>
          <ul className="cv-project-list">
            <li>Traducción de diseño a componentes responsive.</li>
            <li>Manejo de Sessions y Cookies para autenticación y gestión de usuarios.</li>
            <li>Desarrollo de servidor y diseño de base de datos escalable con Sequelize.</li>
          </ul>
          <div className="cv-project-link">
            <a href="https://github.com/Londarza/grupo_3_blackvision" className="cv-link" target="_blank" rel="noopener noreferrer">
              🔗 Repositorio en GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experiencia Profesional */}
      <section className="cv-section">
        <h2 className="cv-section-title">Experiencia Profesional</h2>
        <div className="cv-job">
          <h3 className="cv-job-title">Mercado Libre (2021 - Actualidad)</h3>
          <p className="cv-job-role">Rol: Repartidor Última Milla</p>
          <ul className="cv-job-list">
            <li>Optimización de rutas para entregas eficientes en tiempo y costo.</li>
            <li>Manejo diario de clientes, desarrollando habilidades de comunicación y resolución de problemas.</li>
          </ul>
        </div>

        <div className="cv-job">
          <h3 className="cv-job-title">ADT Security Services (Sept. 2014 - Nov. 2019)</h3>
          <p className="cv-job-role">Rol: Operador Clientes de Riesgo</p>
          <ul className="cv-job-list">
            <li>Negociación con clientes en situaciones críticas para evitar bajas del servicio.</li>
            <li>Trabajo bajo objetivos grupales e individuales, cumpliendo consistentemente las metas asignadas.</li>
          </ul>
        </div>
      </section>

      {/* Educación */}
      <section className="cv-section">
        <h2 className="cv-section-title">Educación</h2>
        <div className="cv-education">
          <h3 className="cv-education-title">Full Stack Web Developer</h3>
          <p className="cv-education-content">Henry Bootcamp (Mar. 2024 - Dic. 2024)</p>
        </div>
        <div className="cv-education">
          <h3 className="cv-education-title">Full Stack Web Developer</h3>
          <p className="cv-education-content">Digital House (Abr. 2023 - Oct. 2023)</p>
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section className="cv-section">
        <h2 className="cv-section-title">Habilidades Técnicas</h2>
        <ul className="cv-skills-list">
          <li>Lenguajes de Programación: JavaScript, TypeScript</li>
          <li>Frameworks y Librerías: React.js, Next.js, Redux Toolkit, React Query, Tailwind CSS, Styled Components, Express.js, Node.js</li>
          <li>Bases de Datos: PostgreSQL, MySQL, MongoDB, Sequelice</li>
          <li>Herramientas: Git, Postman, ThunderClient, VS Code</li>
          <li>Metodologías Ágiles: Scrum</li>
        </ul>
      </section>

      {/* Idiomas */}
      <section className="cv-section">
        <h2 className="cv-section-title">Idiomas</h2>
        <p className="cv-language">Inglés C2 (Proficiente)</p>
      </section>
    </div>
  );
};

export default Cv;
