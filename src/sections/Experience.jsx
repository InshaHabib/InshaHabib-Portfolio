import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';

/**
 * Experience Section Component
 * Features: Timeline with work and education history
 */
const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'MERN Stack Developer | Team Leader',
      company: 'CodeCelix, NASTP Rawalpindi',
      period: 'Nov 2025 - Present',
      description:
        'Developing web applications using React.js, Node.js, JavaScript, Mongodb, Tailwind CSS, and CSS. ',
      achievements: [
        'Led a team of 5 developers and managed task distribution',
        'Optimized application performance, reducing load time by 60%',
        'Implemented reusable components and clean coding practices',
      ],
      icon: HiBriefcase,
    },
    {
      type: 'work',
      title: 'Front End Web Developer Intern',
      company: 'U Devs',
      period: 'Oct 2025 - Dec 2025',
      description:
        'Worked on front-end development using HTML, CSS, JavaScript, React, and Tailwind CSS.',
      achievements: [
        'Developed 6+ responsive UI components for production use',
        'Improved UI consistency and code quality by following best practices',
        'Integrated REST APIs into React applications',
      ],
      icon: HiBriefcase,
    },
    {
      type: 'work',
      title: 'Front End Web Developer Intern',
      company: 'Apexcify Technologys & Elevvo Pathways ',
      period: 'Aug 2025 - Sep 2025',
      description:
        'Worked on modern front-end practices with React, JavaScript, Tailwind CSS, HTML, and CSS.',
      achievements: [
        'Built responsive layouts following modern UI/UX principles',
        'Converted Figma designs into pixel-perfect React components',
        'Collaborated with senior developers to fix UI bugs',
      ],
      icon: HiBriefcase,
    },
    {
      type: 'work',
      title: 'Final Year Project E-commerce Platform (Industry-Based)',
      company: 'Ebryx Pvt. Ltd.',
      period: 'Oct 2024 – June 2025',
      description:
        'Built full-stack e-commerce platform using MERN Stack, Tailwind CSS, and Firebase.',
      achievements: [
        'Implemented role-based dashboards for Admin, Buyer, and Seller',
        'Developed authentication and secure APIs using Node.js and JWT',
        'Integrated chatbot and real-time features',
      ],
      icon: HiBriefcase,
    },
    {
      type: 'work',
      title: 'Web Developer Intern',
      company: 'Disruptive Brain Pvt. Ltd.',
      period: 'July 2023 - Sep 2023',
      description:
        'Designed responsive websites using HTML, CSS, and, JavaScript.',
      achievements: [
        'Created responsive landing pages for multiple clients',
        'Improved website layout and cross-browser compatibility',
        'Gained hands-on experience in real-world web projects',
      ],
      icon: HiBriefcase,
    },
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="experience"
      className="section-container bg-gradient-to-b from-white to-orange-50 dark:from-gray-950 dark:to-gray-900"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
          Journey
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A timeline of my professional journey
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-neon-pink to-neon-purple" />

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative mb-12 ${
              index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
            }`}
          >
            <div className="flex items-start gap-4 md:gap-8">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 ${
                  exp.type === 'work' ? 'bg-primary-500' : 'bg-neon-purple'
                } w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-lg`}
              >
                <exp.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                className={`glass p-6 rounded-2xl ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                } w-full`}
              >
                {/* Period Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-3">
                  {exp.period}
                </div>

                {/* Title & Company */}
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg font-semibold text-primary-500 mb-3">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-primary-500 mt-1">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
