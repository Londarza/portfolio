"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation"
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()
  if (pathname === "/") {
    return null;
  }
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/home">
          <Image
            src="/Group.png"
            alt="Logo"
            width={120}
            height={100}
            className="transition-transform transform hover:scale-105" // Animación de escala
          />
        </Link>

        {/* Menú en Desktop */}
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

        {/* Menú en Móvil */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white hover:text-[#00FF88]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Menú desplegable en Móvil */}
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
  );
};

export default Navbar;