import React from 'react';
import mothersonLogo from "../images/motherson.png";
import excelrLogo from "../images/excelR.png";

// Separate arrays for experience and internship
const workExperience = [
  {
    title: "Customer Support Executive",
    company: "Motherson",
    duration: "Currently Working",
    logo: mothersonLogo,
    description:
      "Handling customer production requirements via email and resolving queries related to product support.",
  },
];

const internships = [
  {
    title: "Business Analyst Training",
    company: "ExcelR",
    duration: "6 months (Online)",
    logo: excelrLogo,
    description:
      "Learned business reporting, requirement gathering, and decision-support analysis.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Work Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">
            Experience
          </h2>
          <div className="relative border-l-2 border-blue-600 pl-6 space-y-12">
            {workExperience.map((item, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[10px] top-1 w-5 h-5 bg-blue-600 rounded-full ring-4 ring-gray-950"></span>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md group-hover:shadow-lg transition flex flex-col sm:flex-row items-start gap-6">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-14 h-14 rounded-md object-contain bg-white p-1"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">
                      {item.company}
                    </p>
                    <p className="text-sm text-gray-400 mb-3">
                      {item.duration}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">
            Internship
          </h2>
          <div className="relative border-l-2 border-blue-600 pl-6 space-y-12">
            {internships.map((item, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[10px] top-1 w-5 h-5 bg-blue-600 rounded-full ring-4 ring-gray-950"></span>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md group-hover:shadow-lg transition flex flex-col sm:flex-row items-start gap-6">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-14 h-14 rounded-md object-contain bg-white p-1"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">
                      {item.company}
                    </p>
                    <p className="text-sm text-gray-400 mb-3">
                      {item.duration}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
