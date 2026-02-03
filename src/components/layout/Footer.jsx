import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

/**
 * Footer Component
 * Features: Social links, copyright, animated elements
 */
const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/inshahabib', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/insha-habib-414441316', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/tech.with.insha', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:inshahabib939@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display font-bold gradient-text">
              Insha Habib
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-display font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-display font-semibold text-gray-900 dark:text-white">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Made with <FaHeart className="text-red-500" /> by Insha Habib
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
