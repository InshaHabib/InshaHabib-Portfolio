import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Services from './sections/Services';
import Contact from './sections/Contact';

/**
 * Main App Component
 * Orchestrates all sections and manages dark mode
 */
function App() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 custom-scrollbar">
      {/* Navigation */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
