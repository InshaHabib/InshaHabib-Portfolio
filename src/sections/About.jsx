import { motion } from 'framer-motion';

/**
 * About Section Component
 * Features: Clean introduction without counters
 */
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        {/* Content - Centered */}
        <motion.div variants={itemVariants} className="space-y-6 text-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm"
          >
            About Me
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white">
            Passionate About Creating
            <span className="gradient-text"> Digital Solutions</span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              I’m a passionate MERN Stack Developer with hands-on experience in building modern, scalable, and user-friendly web applications.
            </p>
            <p>
              I specialize in building modern web applications using React, Tailwind CSS, Node.js, HTML, CSS, JavaScript, and MongoDB to create complete full-stack solutions — from responsive frontend interfaces to secure backend systems.
            </p>
            <p>
              I’m currently expanding my skills in Python and exploring AI integration in web applications. I actively use modern AI tools like GitHub Copilot, Cursor AI, Claude, Emergent AI, and Trae to improve productivity, code quality, and development workflows.
            </p>
            <p>
              I believe in writing clean, maintainable code and continuously learning new technologies. My goal is to build digital solutions that solve real-world problems and deliver great user experiences.
             </p>
            <p>
             Let's build something amazing together!
            </p>
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#contact" className="btn-primary inline-block">
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
