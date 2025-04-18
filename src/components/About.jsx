import React from "react";
import Nptel from "../images/nptel.png";
import MsCit from "../images/mscit.jpg";
import forage from "../images/forage.png";

const skills = {
  tech: ["Python", "SQL", "MS Excel", "Power BI", "MS Office"],
  soft: [
    "Communication",
    "Problem Solving",
    "Work Under Pressure",
    "Email Handling",
  ],
};

const education = [
  {
    degree: "B.Tech in AI & Data Science",
    duration: "2021 – Present",
    place: "Sharad Institute Of Technology College Of Engineering",
    cgpa: "CGPA: 6.9",
  },
  {
    degree: "XII (HSC)",
    duration: "2019 – 2021",
    place: "Shri Padamaraje Junior College, Shirol",
    score: "66.6%",
  },
  {
    degree: "X (SSC)",
    duration: "2018 – 2019",
    place: "Shri Padamaraje Mahavidyalay, Shirol",
    score: "80.80%",
  },
];

const certifications = [
  {
    title: "Data Science For Engineers",
    org: "NPTEL",
    logo: Nptel,
  },
  {
    title: "MSCIT",
    org: "Maharashtra State Certification",
    logo: MsCit,
  },
  {
    title: "Data Analytics & Visualization",
    org: "Forage (Accenture)",
    logo: forage,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-950 text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Intro */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">About Me</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
          I'm a B.Tech graduate, trained in problem-solving and coding. I analyze data carefully—looking for patterns and errors. I usually work alone, but when it comes to spreadsheets, I dive in with full focus.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 sm:p-6 rounded-xl bg-gray-800 shadow">
            <h3 className="text-xl sm:text-2xl text-blue-400 font-semibold mb-3 sm:mb-4">
              Technical Skills
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-1 sm:space-y-2 text-sm sm:text-base">
              {skills.tech.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-gray-800 shadow">
            <h3 className="text-xl sm:text-2xl text-sky-400 font-semibold mb-3 sm:mb-4">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-1 sm:space-y-2 text-sm sm:text-base">
              {skills.soft.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 sm:mb-8">
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {education.map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl p-4 sm:p-5 shadow hover:shadow-lg transition"
              >
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
                  {item.degree}
                </h4>
                <p className="text-sm text-gray-400">{item.duration}</p>
                <p className="text-sm text-gray-300 mt-2">{item.place}</p>
                {item.cgpa && (
                  <p className="text-sm text-blue-300 mt-1">{item.cgpa}</p>
                )}
                {item.score && (
                  <p className="text-sm text-blue-300 mt-1">
                    Score: {item.score}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certification Section */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 sm:mb-8">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-lg shadow p-5 flex flex-col items-center hover:shadow-xl transition text-center"
              >
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="h-14 sm:h-16 object-contain mb-3"
                />
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-400 mt-1">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
