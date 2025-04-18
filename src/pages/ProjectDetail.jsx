import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white text-center py-20"
      >
        <h1 className="text-3xl font-bold text-red-500">Project Not Found</h1>
        <Link 
          to="/" 
          className="text-blue-400 mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          <FiArrowLeft /> Back to Home
        </Link>
      </motion.div>
    );
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="bg-gray-950 text-white min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8"
      >
      <div className="max-w-6xl mx-auto">
     

        <motion.div variants={item} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl">{project.shortDescription}</p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-xl shadow-lg object-cover max-h-[500px] border border-gray-800 hover:border-blue-500/30 transition-all duration-300" 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div variants={item} className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              {project.description.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-4 text-gray-300">{paragraph}</p>
              ))}
            </div>

            {project.links && (
              <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <FiGithub /> View Code
                  </a>
                )}
                {project.links.live && (
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={item} className="lg:col-span-1">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sticky top-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Technologies Used</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <li 
                      key={i} 
                      className="bg-blue-900/30 px-3 py-1.5 rounded-full text-sm text-blue-100 border border-blue-800/50 hover:bg-blue-900/50 transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {project.role && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">My Role</h3>
                  <p className="text-gray-300">{project.role}</p>
                </div>
              )}

              {project.duration && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Project Duration</h3>
                  <p className="text-gray-300">{project.duration}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Key Features & Achievements</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.achievements.map((item, i) => (
              <li 
                key={i} 
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {project.gallery && project.gallery.length > 0 && (
          <motion.div variants={item} className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((image, i) => (
                <div 
                  key={i} 
                  className="rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-colors"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${i + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div variants={item} className="pt-8 border-t border-gray-800">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FiArrowLeft /> Back to Projects
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;