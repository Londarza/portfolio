"use client"

import images from "@/constants/constants";
import Image from "next/image";
import '@/components/navbar/NavBar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

//import Link from "next/link";
//import Image from "next/image";
//import { FaBars } from "react-icons/fa";
import { useState } from "react";


const Navbar: React.FC = () => {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false)

  return (
    <div className="app">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Image src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {['Home', 'Sobre Mi / About', 'Trabajos / Work' , 'Habilidades / Skills','Testimonios / Testimonials','Contacto / Contact'].map((item) => (
            <li className="app__flex p-text" key={`Link-${item}`}>
              <div></div>
              <a href={`/${item}`}> {item}</a>
            </li>
          ))}
        </ul>
        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
              {['Home', 'Sobre Mi / About', 'Trabajos / Work' , 'Habilidades / Skills','Testimonios / Testimonials','Contacto / Contact'].map((item) => (
                <li className="" key={item}>                  
                  <a onClick={() => setToggle(false)} href={`/${item}`}> {item}</a>
                </li>
              ))}
              </ul>


            </motion.div>
          )}
        </div>

      </nav>

    </div>

  );
};

export default Navbar;


/*  RETURN VIEJO

return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo *
        <Link href="/">
          <Image
            src="/Group.png"
            alt="Logo"
            width={120}
            height={100}
            className="transition-transform transform hover:scale-105" // Animación de escala
          />
        </Link>

        {/* Menú en Desktop *
        <div className="hidden md:flex space-x-8">
          <Link
            href="/cv"
            className="text-white hover:text-[#00FF88] transition-colors duration-300"
          >
            CV
          </Link>
          <Link
            href="/home"
            className="text-white hover:text-[#00FF88] transition-colors duration-300"
          >
            Proyectos
          </Link>
          <Link
            href="/sobremi"
            className="text-white hover:text-[#00FF88] transition-colors duration-300"
          >
            Sobre mí
          </Link>
        </div>

        {/* Menú en Móvil *
        <div className="md:hidden flex items-center">
          <button
            className="text-white hover:text-[#00FF88]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Menú desplegable en Móvil *
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 py-4">
          <Link
            href="/home"
            className="text-white hover:text-[#00FF88] transition-colors duration-300"
          >
            CV
          </Link>
          <Link
            href="/proyectos"
            className="text-white hover:text-[#00FF88] transition-colors duration-300"
          >
            Proyectos
          </Link>
          <Link
            href="/sobremi"
            className="text-white hover:text-[#00FF88] transition-colors duration-300"
          >
            Sobre mí
          </Link>
        </div>
      )}
    </nav>
  )

*/