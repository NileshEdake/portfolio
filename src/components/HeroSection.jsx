import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='home' className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div 
        className="max-w-4xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="text-blue-400 mb-4 font-medium tracking-widest text-sm sm:text-base"
          variants={itemVariants}
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>
        
        <motion.h1 
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
        Reading the story <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          behind the numbers.
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          I'm <span className="text-blue-400 font-medium">Yogiraj Bhandare</span> -I read between the rows and beyond the columns — uncovering patterns, predicting trends, and bringing data to life.
        </motion.p>
        
        <motion.div 
          className="flex justify-center gap-4 flex-wrap"
          variants={itemVariants}
        >
          <a
            href="#projects"
            className="group relative flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="group relative flex items-center justify-center border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
            <FiDownload className="ml-2 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
        
        
      </motion.div>
    </section>
  );
};

export default HeroSection;