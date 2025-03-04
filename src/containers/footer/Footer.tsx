import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
//styles
import './Footer.scss'
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Derechos de Autor */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Lautaro Ondarza. Todos los derechos reservados.</p>
        </div>

        {/* Enlaces de Redes Sociales */}
        <div className="flex space-x-6">
          <Link href="https://www.linkedin.com/in/lautaro-ondarza/" target="_blank" className="text-white hover:text-[#00FF88] transition-colors duration-300">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://github.com/lautaro-ondarza" target="_blank" className="text-white hover:text-[#00FF88] transition-colors duration-300">
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
