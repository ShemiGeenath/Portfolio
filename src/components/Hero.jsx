// components/Hero.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Full Stack Developer",
  "Cloud & DevOps Enthusiast",
  "Problem Solver",
  "Thrives Under Pressure"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 px-4 sm:px-6 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-3xl animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-3xl animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full bg-indigo-600 opacity-20 blur-3xl animate-float3"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="space-y-3 md:space-y-4">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            >
              <span className="block text-lg sm:text-xl md:text-2xl text-purple-400 mb-1 md:mb-2">
                Hi, I'm
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Shemira Geenath
              </span>
            </motion.h1>

            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300"
            >
              {texts[textIndex]}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-base sm:text-lg max-w-lg"
            >
              A Second year software engineering undergraduate with a passion for developing scalable
and maintainable software
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
             <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#projects"
className="px-6 py-3 bg-gradient-to-r from-purple-200 to-blue-100 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base drop-shadow-md"
      >
        View Projects
      </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400 hover:bg-opacity-10 transition-all duration-300 text-sm sm:text-base"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-3 sm:gap-4 pt-3 sm:pt-4"
          >
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/ShemiGeenath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/shemira-geenath-a97241354/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="shemigeenath1@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
             href="/SHEMIRA-GEENATH (CV).pdf"
              download
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FiDownload className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated image/illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-80 sm:h-96">
            {/* Glowing orb */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.1, 1] : 1,
                opacity: isHovered ? [0.8, 1, 0.8] : 0.8,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 blur-xl opacity-80"
            ></motion.div>
            
            {/* 3D avatar or illustration */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <div >
<img src="/src/assets/1.jpeg" alt="Profile" className="w-102 h-102 rounded-full mt-4" />
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                 
{/* <img src="/src/assets/1.jpeg" alt="Profile" className="w-72 h-72 rounded-full mt-4" /> */}

                </div>
              </div>
            </motion.div>
            
            {/* Floating tech icons */}
            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-full h-full"
            >
              {['React', 'Node', 'JS', 'CSS', 'HTML', 'MongoDB'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isHovered ? 0.7 : 0.3,
                    x: Math.cos(i * 60 * (Math.PI/180)) * 120,
                    y: Math.sin(i * 60 * (Math.PI/180)) * 120,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute text-xs font-mono font-bold ${
                    i % 2 === 0 ? 'text-purple-300' : 'text-blue-300'
                  }`}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;