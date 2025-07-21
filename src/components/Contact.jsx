// components/Contact.jsx
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section 
      id="contact" 
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Get In Touch
          </span>
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white">Let's work together</h3>
              <p className="text-gray-400 text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.a
                href="mailto:shemigeenath@example.com"
                className="inline-flex items-center space-x-4 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-gray-800 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FiMail className="text-xl" />
                </div>
                <span className="text-lg">shemigeenath1@gmail.com</span>
              </motion.a>

              <div className="flex justify-center space-x-6 pt-4">
                <motion.a
                  href="https://github.com/ShemiGeenath"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shemira-geenath-a97241354/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin className="text-xl" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="relative mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-purple-600 opacity-20 blur-xl"></div>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-blue-600 opacity-20 blur-xl"></div>
              <div className="relative p-8 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm max-w-md mx-auto">
                <FaTelegramPlane className="text-5xl text-purple-400 mx-auto mb-4" />
                <p className="text-gray-300">
                  Feel free to reach out for collaborations or just a friendly hello!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;