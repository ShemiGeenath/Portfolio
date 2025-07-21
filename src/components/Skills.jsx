// components/Skills.jsx
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiCpu } from 'react-icons/fi';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, icon: <FiCode className="text-orange-500" /> },
    { name: 'CSS', level: 85, icon: <FiCode className="text-blue-500" /> },
    { name: 'JavaScript', level: 80, icon: <FiCode className="text-yellow-400" /> },
    { name: 'React', level: 75, icon: <FiCpu className="text-blue-400" /> },
    { name: 'Node.js', level: 70, icon: <FiServer className="text-green-500" /> },
    { name: 'MongoDB', level: 65, icon: <FiDatabase className="text-green-400" /> },
    { name: 'PHP', level: 60, icon: <FiServer className="text-purple-500" /> },
    { name: 'MySQL', level: 60, icon: <FiDatabase className="text-blue-600" /> },
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="text-xl">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-200">{skill.name}</span>
                </div>
                <span className="text-sm font-mono text-gray-400">{skill.level}%</span>
              </div>

              <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span 
                    className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"], color: "from-purple-500 to-blue-500" },
            { title: "Backend", skills: ["Node.js", "PHP", "Express"], color: "from-green-500 to-teal-500" },
            { title: "Database", skills: ["MongoDB", "MySQL"], color: "from-yellow-500 to-orange-500" },
            { title: "Tools", skills: ["Git", "VS Code", "Figma"], color: "from-pink-500 to-red-500" },
          ].map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;