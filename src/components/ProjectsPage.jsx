import React from "react";
import blinkitLogo from "../images/blinkit.png";
import youtubeLogo from "../images/youtube.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "blinkit-dashboard",
    title: "Blinkit Power BI Dashboard",
    image: blinkitLogo,
    description: "...",
    tech: ["Power BI", "Excel", "Data Modeling"],
  },
  {
    id: "youtube-analytics",
    title: "YouTube Analytics Dashboard",
    image: youtubeLogo,
    description: "...",
    tech: ["Excel", "Power BI"],
  },
];

const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">
            Featured <span className="text-white">Projects</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="mb-4 h-40 bg-gray-700 rounded-lg overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <p className="text-blue-400 font-medium text-xs uppercase mb-2 tracking-wider">
                      Technologies
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((tech, t) => (
                        <li
                          key={t}
                          className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-900/50 transition"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* View Details */}
                <Link to={`/project/${project.id}`} className="w-full">
                  <button className="w-full py-2 px-4 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-lg transition flex items-center justify-center gap-2">
                    View Details
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;