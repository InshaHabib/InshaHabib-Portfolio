import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';

/**
 * Education Section Component
 * Features: Clean card-based education timeline
 */
const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      shortName: 'BSSE',
      institution: 'Foundation University Islamabad',
      period: '2021 - 2025',
      description: 'Major in Software Engineering with focus on software development and algorithms.',
      status: 'Completed',
    },
    {
      degree: 'Intermediate / F.Sc',
      shortName: 'Intermediate',
      institution: 'Allama Iqbal College Naushera',
      period: '2018 - 2020',
      description: 'Pre-Engineering with subjects including Mathematics, Physics, and Chemistry.',
      status: 'Completed',
    },
    {
      degree: 'Matriculation / SSC',
      shortName: 'Matric',
      institution: 'Allama Iqbal School Naushera',
      period: '2016 - 2018',
      description: 'Secondary School Certificate with Science subjects.',
      status: 'Completed',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="education"
      className="section-container bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900"
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
          Academic Background
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Academic journey and qualifications
        </p>
      </motion.div>

      {/* Education Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            {/* Card */}
            <div className="glass p-6 rounded-2xl h-full flex flex-col overflow-hidden relative border-2 border-transparent hover:border-primary-500/50 transition-all duration-300">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4 shadow-lg"
              >
                <HiAcademicCap className="w-8 h-8 text-white" />
              </motion.div>

              {/* Status Badge */}
              <div className="inline-block self-start px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold mb-3">
                {edu.status}
              </div>

              {/* Degree */}
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                {edu.shortName}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {edu.degree}
              </p>

              {/* Institution & Period */}
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                {edu.period}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                {edu.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
