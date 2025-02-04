import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function About() {
  const [isFooterMenuOpen, setIsFooterMenuOpen] = useState(false);

  const toggleFooterMenu = () => {
    setIsFooterMenuOpen(!isFooterMenuOpen);
  };

  const workExperience = [
    {
      title: 'Lagerarbetare',
      startDate: '2024/06',
      endDate: '2024/08',
      buildingText: 'Oriola AB',
      location: 'Enköping'
    },
    {
      title: 'Annonsör',
      startDate: '2023/11',
      endDate: '2024/03',
      buildingText: 'Riddermark Bil AB',
      location: 'Stockholm'
    },
    {
      title: 'Servitör/Bartender',
      startDate: '2021/08',
      endDate: '2023/09',
      buildingText: 'Primo Ciao Ciao AB',
      location: 'Stockholm'
    }
  ];

  const education = [
    {
      title: "Frontend Developer",
      startDate: '2014/09',
      endDate: 'Present',
      buildingText: 'Chas Academy',
      location: 'Stockholm'
    },
    {
      title: 'Programmering 1',
      startDate: '2021/09',
      endDate: '2022/03',
      buildingText: 'Hermods',
      location: 'Stockholm'
    },
    {
      title: 'Handel och Administration',
      startDate: '2018/09',
      endDate: '2021/07',
      buildingText: 'Handelsgymnasiet NTI',
      location: 'Stockholm'
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <main className="container mx-auto px-6 py-8 flex-grow">
          <section className="mb-12">
            <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] mb-4 text-center md:text-left">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center md:text-left">
              Hej! Jag är en social och glad kille på 21 år från Stockholm. Några av mina största intressen är att syssla
              med fordon samt att spela golf och tennis. Som person så är jag noggrann, ansvarsfull och strukturerad. Det är
              väldigt viktigt för mig att vara punktlig. Jag är även van vid att hantera stress under press samt att arbeta mot mål.
              Innehar B-körkort.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] mb-4 text-center md:text-left">Work Experience</h2>
            <ul className="list-none text-lg text-gray-600 dark:text-gray-300">
              {workExperience.map((job, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <div>{job.title}</div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                        Full Time
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <FaCalendarAlt className="mr-2" /> {job.startDate} - {job.endDate}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-lg text-gray-500 dark:text-gray-400 mt-4">
                    <FaBuilding className="mr-2" /> {job.buildingText}
                    <FaMapMarkerAlt className="ml-4 mr-2" /> Location: {job.location}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] mb-4 text-center md:text-left">Education</h2>
            <ul className="list-none text-lg text-gray-600 dark:text-gray-300">
              {education.map((edu, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <div>{edu.title}</div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className={`bg-green-100 text-green-700 px-4 py-2 rounded-lg ${edu.title.includes('Programmering 1') ? 'bg-green-100 text-green-700' : ''}`}>
                        {edu.title.includes('Programmering 1') ? 'Part Time' : 'Full Time'}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <FaCalendarAlt className="mr-2" /> {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-lg text-gray-500 dark:text-gray-400 mt-4">
                    <FaBuilding className="mr-2" /> {edu.buildingText}
                    <FaMapMarkerAlt className="ml-4 mr-2" /> Location: {edu.location}
                  </div>
                </li>
              ))}
            </ul>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5]"> Pavan MG </span>
            with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5]"> Love & Coffee</span>
          </p>
        </footer>
      </div>
    </Layout>
  );
}
