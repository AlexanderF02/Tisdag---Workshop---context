import { useState, useContext } from 'react';
import PortfolioContext from '../contexts/PortfolioContext';
import Layout from '../components/Layout';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Admin() {
  const { projects, setProjects, techSkills, setTechSkills } = useContext(PortfolioContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [newProject, setNewProject] = useState({ title: "", description: "", tech: "", link: "" });
  const [newTechSkill, setNewTechSkill] = useState({ name: "", image: "" });

  const handleLogin = () => {
    if (credentials.username === "admin" && credentials.password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  };

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ title: "", description: "", tech: "", link: "" });
  };

  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const addTechSkill = () => {
    setTechSkills([...techSkills, newTechSkill]);
    setNewTechSkill({ name: "", image: "" });
  };

  const deleteTechSkill = (index) => {
    const updatedTechSkills = techSkills.filter((_, i) => i !== index);
    setTechSkills(updatedTechSkills);
  };

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1 className="text-4xl font-semibold mb-4">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="mb-4 p-2 border border-gray-300 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="mb-4 p-2 border border-gray-300 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <button onClick={handleLogin} className="p-2 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] text-white rounded">Login</button>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-semibold mb-4">Admin Page</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Add New Project</h2>
          <input
            type="text"
            placeholder="Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded bg-white dark:bg-gray-800 text-black dark:text-white w-full"
          />
          <textarea
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded bg-white dark:bg-gray-800 text-black dark:text-white w-full"
          />
          <input
            type="text"
            placeholder="Tech Used"
            value={newProject.tech}
            onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded bg-white dark:bg-gray-800 text-black dark:text-white w-full"
          />
          <input
            type="text"
            placeholder="Code Link"
            value={newProject.link}
            onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded bg-white dark:bg-gray-800 text-black dark:text-white w-full"
          />
          <button onClick={addProject} className="p-2 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] text-white rounded">Add Project</button>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Current Projects</h2>
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
                </div>
                <button onClick={() => deleteProject(index)} className="mt-4 p-2 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] text-white rounded">Delete</button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Add New Tech Skill</h2>
          <input
            type="text"
            placeholder="Name"
            value={newTechSkill.name}
            onChange={(e) => setNewTechSkill({ ...newTechSkill, name: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded bg-white dark:bg-gray-800 text-black dark:text-white w-full"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newTechSkill.image}
            onChange={(e) => setNewTechSkill({ ...newTechSkill, image: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded bg-white dark:bg-gray-800 text-black dark:text-white w-full"
          />
          <button onClick={addTechSkill} className="p-2 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] text-white rounded">Add Tech Skill</button>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Current Tech Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techSkills.map((skill, index) => (
              <div key={index} className="flex items-center justify-center">
                <img src={skill.image} alt={skill.name} className="w-20 h-20" />
                <button onClick={() => deleteTechSkill(index)} className="ml-4 p-2 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] text-white rounded">Delete</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}