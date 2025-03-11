import { useState, useContext } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import PortfolioContext from '../contexts/PortfolioContext';

export default function Projects() {
  const [isFooterMenuOpen, setIsFooterMenuOpen] = useState(false);
  const { projects } = useContext(PortfolioContext);

  const toggleFooterMenu = () => {
    setIsFooterMenuOpen(!isFooterMenuOpen);
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <main className="container mx-auto px-6 py-8 flex-grow">
          <section className="mb-12">
            <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] mb-4 text-center md:text-left">Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center md:text-left">
              Things I’ve built so far
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Tech Used:</strong> {project.tech}</p>
                  <div className="flex space-x-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                      <FaGithub className="mr-2" /> View Code
                    </a>
                    {project.vercelLink && (
                      <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                        <IoLogoVercel className="mr-2" /> View on Vercel
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <div className="flex justify-end items-center w-full px-6 py-4">
          <div className="flex items-center space-x-6">
            <p className="text-lg text-gray-900 dark:text-white">+46 79 337 45 02</p>
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