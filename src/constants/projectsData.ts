
import { proyectImages } from "@/constants/constants";
import { StaticImageData } from "next/image";


export const projectsData: Record<string, {
  image: StaticImageData[],
  title: string,
  description: string
}> = {
  namaste: {
    image: proyectImages.namaste,
    title: "Namaste",
    description: "Proyecto individual para la gestión de turnos en un SPA (Salón de Belleza). Los clientes pueden registrarse, iniciar sesión, agendar turnos para diversos servicios y cancelar sus reservas cuando lo necesiten. Se implementó Redux para manejar estados globales, garantizando una experiencia fluida y consistente. Además, se diseñó con una selección de colores cuidadosamente elegida y un enfoque en la usabilidad, asegurando una interfaz intuitiva y atractiva. Tecnologías utilizadas: React,Vite, Redux, Axios, Typescript, Styled Components,Typeorm"
  },
  hiptek: {
    image: proyectImages.hiptek,
    title: "Hiptek",
    description: "Se desarrolló un ecommerce de ciclo completo, donde los usuarios pueden realizar diversas acciones como navegar entre los productos, registrarse, iniciar sesión, visualizar detalles de los productos, agregar o quitar artículos del carrito, realizar compras y revisar su historial de compras exitosas o rechazadas. La aplicación fue diseñada para proporcionar una experiencia de compra intuitiva y eficiente, facilitando tanto la navegación como el proceso de pago.Tecnologías utilizadas:React, Next.js, Tailwind CSS, TypeScript, Context API, js-cookie"
  },
  forgefit: {
    image: proyectImages.forgefit,
    title: "Forgefit",
    description:  "Proyecto grupal en el que desarrollamos una app para gimnasios, donde integramos diversas funcionalidades para mejorar la experiencia de los usuarios y los administradores. Los usuarios pueden registrarse, logearse con credenciales propias y de terceros, pagar membresías, ver clases y profesores, y suscribirse a clases. Los profesores pueden crear y gestionar clases, mientras que los administradores tienen acceso a un dashboard completo para gestionar usuarios, clases, categorías y suscripciones. Tecnologías utilizadas:React, Next.js, Tailwind CSS, TypeScript, NextAuth, LandBot, maptiler, Stripe, SweetAlert 2"
  },
  pomodoro: {
    image: proyectImages.pomodoro,
    title: "Pomodoro",
    description: "Primer App creada para celular usando React Native, una app pomodoro simple para aprender los conceptos basicos de react Native. Se incluyen estados generales para controlar el tiempo de actividad y descanso, se agregan sonidos en la app."
  }
};
