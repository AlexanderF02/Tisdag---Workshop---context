import { useState, useContext } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import PortfolioContext from '../contexts/PortfolioContext';

export default function Home() {
  const [isFooterMenuOpen, setIsFooterMenuOpen] = useState(false);
  const { projects, techSkills } = useContext(PortfolioContext);

  const toggleFooterMenu = () => {
    setIsFooterMenuOpen(!isFooterMenuOpen);
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="flex flex-col items-center justify-center flex-grow mt-8 space-y-8">
          <div className="flex items-center space-x-12">
            <div className="text-right">
              <p className="text-2xl text-gray-600 dark:text-gray-300">Hi 👋,</p>
              <p className="text-2xl text-gray-600 dark:text-gray-300">My name is</p>
              <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5]">
                Alexander Fällström
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300">I build things for the web</p>
            </div>
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                <img
                  src="/profilbild.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center w-full px-6 py-4">
          <div className="flex items-center space-x-6">
            <p className="text-lg text-gray-900 dark:text-white">+46 79 377 45 02</p>
            <p className="text-lg text-gray-900 dark:text-white">alexander.fallstrom@chasacademy.se</p>
            <a href="https://github.com/AlexanderF02" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/alexander_fallstrom/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/alexander-f%C3%A4llstr%C3%B6m-0573b22a6/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 w-full" />
        <footer className="w-full py-4 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex justify-between items-center px-6">
          <button onClick={toggleFooterMenu} className="text-2xl text-gray-900 dark:text-white focus:outline-none lg:hidden">
            {isFooterMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={`flex-col lg:flex-row lg:flex items-center space-x-4 ${isFooterMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
            <Link href="/" passHref>
              <span className="text-lg text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Hem</span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-lg text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Om</span>
            </Link>
            <Link href="/techstack" passHref>
              <span className="text-lg text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Tech Stack</span>
            </Link>
            <Link href="/projects" passHref>
              <span className="text-lg text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Projekt</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="text-lg text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Kontakt</span>
            </Link>
          </nav>
          <p className="text-lg text-right">
            &copy; {new Date().getFullYear()} Designed and built by 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5]"> Alexander Fällström </span>
            with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5]"> Love & Coffee</span>
          </p>
        </footer>
      </div>
    </Layout>
  );
}






