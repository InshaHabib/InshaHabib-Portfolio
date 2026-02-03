import { motion } from 'framer-motion';
import {
  HiCode,
  HiServer,
  HiChatAlt2,
  HiLightningBolt,
  HiColorSwatch,
  HiDocumentText,
} from 'react-icons/hi';

/**
 * Services Section Component
 * Features: Service cards with icons, hover effects, blue/gray theme
 */
const Services = () => {
  const services = [
    {
      icon: HiCode,
      title: 'Frontend Web Development',
      description:
        'Building modern, responsive web applications using React.js and Tailwind CSS with a strong focus on UI/UX and accessibility.',
      features: [
        'React.js Applications',
        'Tailwind CSS Styling',
        'Responsive Design',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: HiServer,
      title: 'Backend Development',
      description:
        'Developing secure and scalable backend systems using Node.js, Express.js, and MongoDB with well-structured REST APIs.',
      features: [
        'Node.js & Express.js',
        'MongoDB Database',
        'Authentication & Security',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: HiChatAlt2,
      title: 'AI Chatbot Development',
      description:
        'Developing intelligent chatbots with advanced AI models including BERT, Claude, and Botpress for natural language processing.',
      features: [
        'BERT Integration',
        'Claude AI Implementation',
        'Natural Language Processing',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: HiLightningBolt,
      title: 'AI Integration',
      description:
        'Building intelligent Python-based AI solutions with BERT model integration for advanced chatbots and NLP tasks. I leverage cutting-edge AI tools like Cursor, Claude, Trae, Manus, and Emergent to accelerate development, and deliver innovative solutions that enhance productivity and user experience.',
      features: [
        'Claude & Cursor',
        'GitHub Copilot',
        'Trae & Emergent',
        'Manus',
      ],
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: HiColorSwatch,
      title: 'Graphic Designing',
      description:
        'Creating visually appealing designs, social media posts, professional presentations, using Canva and modern design tools, with a focus on clean layouts and brand consistency.',
      features: [
        'Canva Design & Editing',
        'Social Media Graphics',
        'Presentation Design',
        'Basic Photo Editing',
      ],
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: HiDocumentText,
      title: 'Documentation & Office Work',
      description:
        'Professional documentation, Excel data analysis, comprehensive reports, and office productivity solutions using Microsoft Office.',
      features: [
        'MS Word Documentation',
        'Excel Data Analysis',
        'PowerPoint Presentations',
        'Professional Reports',
      ],
      color: 'from-blue-600 to-blue-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="section-container bg-white dark:bg-gray-950">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
          What I Offer
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive solutions to bring your digital ideas to life
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            {/* Card */}
            <div className="glass p-8 rounded-2xl h-full flex flex-col overflow-hidden relative border-2 border-transparent hover:border-primary-500/50 transition-all duration-300">
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Ready to start your project?
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary inline-block"
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Services;
