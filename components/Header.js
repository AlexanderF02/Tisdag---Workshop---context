import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={toggleMenu} className="text-2xl text-gray-900 dark:text-white focus:outline-none lg:hidden">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`flex-col lg:flex-row lg:flex items-center space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
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
          <Link href="/admin" passHref>
            <span className="text-lg text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Admin</span>
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/AlexanderF02" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
          </a>
          <a href="https://www.instagram.com/alexander_fallstrom/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/in/alexander-f%C3%A4llstr%C3%B6m-0573b22a6/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;

