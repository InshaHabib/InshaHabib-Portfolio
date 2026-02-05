import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

/**
 * Projects Section Component
 * Features: Project cards with hover effects, buttons, and modal
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Crypto Tracker Dashboard',
      description: 'Real-time cryptocurrency tracking and portfolio management.',
      longDescription:
        'A comprehensive cryptocurrency tracking dashboard built with React, Tailwind CSS, Node.js, and JavaScript. Features include real-time price tracking, portfolio management, market analysis, news feed, and customizable watchlists.',
      image: '/pro1.webp',
      tags: ['React','JavaScript', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://insha-cryptotrackerdashboard.netlify.app',
      githubUrl: 'https://github.com/InshaHabib/Crypto-Tracker-Dashboard',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'AI Automate',
      description: 'AI-powered web application for business process automation.',
      longDescription:
        'An AI-powered web application for automating business processes. Features include workflow automation, ai chatbots, CRM automation, real-time analytics, and marketing automtion tools.',
      image: '/pro2.jpeg',
      tags: ['React', 'JavaScript', 'TailwindCSS'],
      liveUrl: 'https://ai-based-business-automation.netlify.app',
      githubUrl: 'https://github.com/InshaHabib/AI-Automate',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'CGPA Calculator',
      description: 'Web app to calculate cumulative GPA for students.',
      longDescription:
        'A comprehensive CGPA calculator web application. Features include semester-wise GPA calculation, cumulative GPA tracking, academic performance visualization, and export functionality.',  
      image: '/pro4.jpg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://cgpa-calculator-web.netlify.app',
      githubUrl: 'https://github.com/InshaHabib/CGPA-Calculator',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 4,
      title: 'PollHub',
      description: 'A real-time platform to create polls and surveys.',
      longDescription:
        'PollHub is a full-stack MERN application that allows users to create polls, vote in real-time, and view live results with interactive charts. Features include user authentication, multiple-choice & single-choice polls, poll expiration, category-based browsing, and live result visualization.',
      image: '/pro5.jpg',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Chart.js', 'TailwindCSS'],
      liveUrl: 'https://pollinghub.netlify.app',
      githubUrl: 'https://github.com/InshaHabib/PollHub',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 5,
      title: 'A Complete E-Commerce Platform',
      description: 'Full-featured e-commerce platform with shopping cart, checkout, and chatbot.',
      longDescription:
        'Developed a complete e-commerce platform using MERN stack with secure user authentication and responsive design.',
      image: '/pro3.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express','Chatbot'],
      liveUrl: '',
      githubUrl: 'https://github.com/InshaHabib/A-Complete-E-commerce-Platform',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 6,
      title: 'TaskFlow',
      description: 'A productivity app for task management and collaboration.',
      longDescription:
        'TaskFlow is a clean and user-friendly task management UI designed to help users organize tasks efficiently.',
      image: '/pro7.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: ' https://inshahabib.github.io/TaskFlow',
      githubUrl: 'https://github.com/InshaHabib/TaskFlow',
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 7,
      title: 'Book Library App',
      description: 'A web application for managing and browsing a digital book library.',
      longDescription:
        'Developed a book library app with a feature to search books directly on Google. This allowed users to easily find book details and information quickly within the app.',
      image: '/pro6.jpg',
      tags: ['Android', 'Firebase', 'Java'],
      liveUrl: '',
      githubUrl: 'https://github.com/InshaHabib/Book-Library-App',
      color: 'from-orange-500 to-red-500',
    },
    // {
    //   id: 7,
    //   title: 'AI Chatbot Platform',
    //   description: 'Intelligent chatbot with NLP and machine learning',
    //   longDescription:
    //     'An advanced AI chatbot platform using natural language processing. Features include multi-language support, sentiment analysis, conversation history, training dashboard, and API integration.',
    //   image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    //   tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   color: 'from-cyan-500 to-blue-500',
    // },
    // {
    //   id: 8,
    //   title: 'Portfolio Builder',
    //   description: 'Drag-and-drop portfolio website builder',
    //   longDescription:
    //     'A no-code portfolio builder with drag-and-drop interface. Features include customizable templates, real-time preview, SEO optimization, custom domain support, and analytics.',
    //   image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
    //   tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   color: 'from-emerald-500 to-green-500',
    // },
    // {
    //   id: 9,
    //   title: 'Expense Tracker',
    //   description: 'Smart expense tracking with budget insights',
    //   longDescription:
    //     'A comprehensive expense tracking application with AI-powered insights. Features include automatic categorization, budget planning, financial reports, receipt scanning, and multi-currency support.',
    //   image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    //   tags: ['React', 'Firebase', 'Chart.js', 'OCR'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   color: 'from-amber-500 to-orange-500',
    // },
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
    <section id="projects" className="section-container bg-white dark:bg-gray-950">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
          Portfolio
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of my best work, from web applications.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-900 border-2 border-transparent hover:border-primary-500/50 transition-all duration-300">
              {/* Project Image */}
              <div 
                className="relative h-64 overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                >
                  <span className="text-white text-lg font-bold">View Details</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors font-semibold text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <SiGithub className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <HiX size={24} />
              </button>

              {/* Modal Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-60`}
                />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <HiExternalLink />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center gap-2"
                  >
                    <HiCode />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
