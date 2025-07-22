// components/Projects.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiChevronRight } from 'react-icons/fi';
import { useState, useRef } from 'react';
import { projects } from '../data/projects';
import { useInView } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

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
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  };

  // Animation for the section title
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  };

  // Animation for the view more button
  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)"
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Featured Projects
          </span>
        </motion.h2>

        <motion.div
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-2xl bg-gray-800 border border-gray-700 hover:border-transparent transition-all duration-500"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              custom={index} // Pass index for custom animation timing
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.2, 0.8, 0.2, 1]
              }}
            >
              {/* Glow effect - enhanced animation */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.5 }
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-xl blur-lg opacity-70"></div>
              </motion.div>

              <div className="relative flex flex-col md:flex-row h-full z-10 bg-gray-800 rounded-2xl overflow-hidden">
                <motion.div 
                  className="md:w-1/2 h-64 md:h-auto overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.1 + 0.3 }
                  } : {}}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>

                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 + 0.4 }
                    } : {}}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  </motion.div>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { 
                      opacity: 1,
                      transition: { delay: index * 0.1 + 0.5 }
                    } : {}}
                  >
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-gray-700 text-purple-300 group-hover:bg-purple-900 group-hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 + 0.6 }
                    } : {}}
                  >
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-purple-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="text-white text-lg" />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink className="text-white text-lg" />
                        </motion.a>
                      )}
                    </div>
                    
                    <motion.button
                      className="flex items-center text-sm text-purple-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View details <FiChevronRight className="ml-1" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="flex justify-center mt-16"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
        >
          <a
            href="https://github.com/ShemiGeenath"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-500 hover:bg-opacity-10 transition-all duration-300 group"
          >
            <FiGithub className="mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-800 rounded-2xl shadow-2xl border border-gray-700"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layoutId={`card-${selectedProject.id}`} // Add layoutId for smooth transition
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                onClick={() => setSelectedProject(null)}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX className="text-white text-xl" />
              </button>

              <div className="p-8">
                <motion.div 
                  className="flex flex-col md:flex-row gap-8 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { delay: 0.2 }
                  }}
                >
                  <motion.div 
                    className="md:w-1/2"
                    initial={{ scale: 0.95 }}
                    animate={{ 
                      scale: 1,
                      transition: { delay: 0.3 }
                    }}
                  >
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full rounded-xl shadow-lg"
                    />
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.4 }
                    }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-gray-700 text-purple-300"
                          initial={{ scale: 0 }}
                          animate={{ 
                            scale: 1,
                            transition: { 
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }
                          }}
                          transition={{ delay: 0.5 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 5px 15px rgba(124, 58, 237, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: 0.6 }
                        }}
                      >
                        <FiGithub className="mr-2" />
                        View Code
                      </motion.a>
                      {selectedProject.demo && (
                        <motion.a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 0.7 }
                          }}
                        >
                          <FiExternalLink className="mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Additional project details with animation */}
                <motion.div 
                  className="bg-gray-700 rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.8 }
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Project Highlights</h3>
                  <ul className="space-y-3 text-gray-300">
                    {selectedProject.highlights?.map((highlight, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            delay: 0.9 + i * 0.1,
                            type: "spring",
                            stiffness: 100
                          }
                        }}
                      >
                        <span className="text-purple-400 mr-2">•</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;