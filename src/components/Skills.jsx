// components/Skills.jsx
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiCpu, FiCloud, FiLayers } from 'react-icons/fi';

const Skills = () => {
  const technicalSkills = [
    { name: 'React', icon: <FiCpu className="text-blue-400" /> },
    { name: 'Node.js', icon: <FiServer className="text-green-500" /> },
    { name: 'Express.js', icon: <FiCode className="text-orange-500" /> },
    { name: 'HTML', icon: <FiCode className="text-orange-500" /> },
    { name: 'CSS', icon: <FiCode className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FiCode className="text-yellow-400" /> },
    { name: 'C', icon: <FiCode className="text-yellow-400" /> },
    { name: 'C++', icon: <FiCode className="text-yellow-400" /> },
    { name: 'MongoDB', icon: <FiDatabase className="text-green-400" /> },
    { name: 'PHP', icon: <FiServer className="text-purple-500" /> },
    { name: 'MySQL', icon: <FiDatabase className="text-blue-600" /> },
  ];

  const devOpsSkills = [
    { name: 'Docker', icon: <FiCloud className="text-blue-400" /> },
    { name: 'Kubernetes', icon: <FiCloud className="text-blue-500" /> },
    { name: 'Terraform', icon: <FiCloud className="text-purple-500" /> },
    { name: 'CI/CD', icon: <FiCloud className="text-green-500" /> },
    { name: 'AWS', icon: <FiCloud className="text-orange-500" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            My Skills
          </span>
        </motion.h2>

        {/* Technical Skills - Animated Cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Technical Skills
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="flex flex-col items-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300"
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="text-4xl mb-4 p-3 bg-gray-700/30 rounded-full"
                >
                  {skill.icon}
                </motion.div>
                <motion.span 
                  className="text-lg font-medium text-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {skill.name}
                </motion.span>
                <motion.div 
                  className="w-full mt-4 flex justify-center"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* DevOps Skills - Floating Bubbles */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            DevOps & Cloud Skills
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {devOpsSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-800/50 border border-gray-700 rounded-full hover:border-blue-500 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="text-3xl mb-2">
                  {skill.icon}
                </div>
                <span className="text-lg font-medium text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skill Categories - Animated Accordion */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { 
              title: "Frontend", 
              skills: ["HTML", "CSS", "JavaScript", "React"],
              icon: <FiCode className="text-purple-400" />,
              color: "from-purple-500 to-blue-500" 
            },
            { 
              title: "Backend", 
              skills: ["Node.js", "PHP", "Express"],
              icon: <FiServer className="text-green-400" />,
              color: "from-green-500 to-teal-500" 
            },
            { 
              title: "Database", 
              skills: ["MongoDB", "MySQL"],
              icon: <FiDatabase className="text-yellow-400" />,
              color: "from-yellow-500 to-orange-500" 
            },
            { 
              title: "DevOps", 
              skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS"],
              icon: <FiCloud className="text-blue-400" />,
              color: "from-blue-500 to-cyan-500" 
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="p-3 mr-4 bg-gray-700/30 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.title}
                </h3>
              </div>
              <motion.ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: i * 0.05 + 0.2 }}
                  >
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-purple-500 mr-3"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.span>
                    <span className="text-gray-300">{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;