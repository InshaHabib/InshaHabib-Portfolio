import { motion } from 'framer-motion';
import {
  SiReact,
  SiAxios,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiAndroidstudio,
  SiGithub,
  SiGit,
  SiCanva,
  SiNetlify,
} from 'react-icons/si';
import { HiChatAlt2, HiCode, HiDocumentText, HiOfficeBuilding } from 'react-icons/hi';

// Custom SVG Icons for AI Tools (that don't exist in react-icons)
const CursorIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const ClaudeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);

const GrokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const EmergentIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 19h20L12 2zm0 4.83L17.17 17H6.83L12 6.83z"/>
  </svg>
);

const TraeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
  </svg>
);

const ManusIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

/**
 * Skills Section Component
 * Features: Card-inside-card layout with 2-column grid per category
 */
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
         { name: 'Axios', icon: SiAxios, color: '#5A29E4' }, // new
      ],
    },
    {
      title: 'Backend Development',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB Compass', icon: SiMongodb, color: '#47A248' },
      ],
    },
    {
      title: 'Programming Languages',
      gradient: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Java', icon: HiCode, color: '#007396' },
      ],
    },
    {
      title: 'AI Tools & Assistants',
      gradient: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Cursor', icon: CursorIcon, color: '#000000' },
        { name: 'Claude', icon: ClaudeIcon, color: '#D97757' },
        { name: 'GitHub Copilot', icon: SiGithub, color: '#000000' },
        { name: 'Emergent', icon: EmergentIcon, color: '#4F46E5' },
        { name: 'Trae', icon: TraeIcon, color: '#2563EB' },
        { name: 'Manus', icon: ManusIcon, color: '#7C3AED' },
      ],
    },
    {
      title: 'Design & Productivity Tools',
      gradient: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
        { name: 'Draw.io', icon: HiDocumentText, color: '#F08705' },
        { name: 'MS Office', icon: HiOfficeBuilding, color: '#D83B01' },
      ],
    },
    {
      title: 'Version Control',
      gradient: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
      ],
    },
    {
      title: 'Mobile App Development',
      gradient: 'from-green-600 to-green-700',
      skills: [
        { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      ],
    },
    {
      title: 'Deployment & Hosting',
      gradient: 'from-yellow-400 to-orange-500',
      skills: [
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' }, // new
      ],
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
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
          My Skills
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and tools
        </p>
      </motion.div>

      {/* Category Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group"
          >
            {/* Main Category Card */}
            <div className="h-full glass p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 shadow-md hover:shadow-xl">
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${category.gradient} animate-pulse`} />
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid (2 columns inside card) */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + skillIndex * 0.05,
                      duration: 0.3,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="group/skill"
                  >
                    {/* Individual Skill Item */}
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                      {/* Icon on Left */}
                      <skill.icon
                        className="w-5 h-5 flex-shrink-0 group-hover/skill:scale-110 transition-transform duration-200"
                        style={{ color: skill.color }}
                      />
                      {/* Text on Right */}
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors duration-200 truncate">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
