import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import MobileNav from './components/Mobilenav';
import { PageLoader } from './components/LazyLoad';

// Direct imports - no lazy loading
import Hero from './components/Hero';
import AboutSection from './components/About';
import SkillsSection from './components/Skills';
import ProjectsSection from './components/Projects';
import ExperienceSection from './components/Experince';
import ContactSection from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic navbar height calculation
  const getNavbarHeight = () => {
    if (typeof window === 'undefined') return 80;
    return window.innerWidth >= 768 ? 80 : 0; // Desktop navbar height, mobile has bottom nav
  };

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Single loader with proper completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Faster loading to prevent incomplete animation

    return () => clearTimeout(timer);
  }, []);

  // 🔽 Scroll to section with proper offset
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = getNavbarHeight();
      const offset = section === 'home' ? 0 : navbarHeight;
      const position =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: position, behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  // 📌 Improved active section tracking
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const navbarHeight = getNavbarHeight();

    const handleScroll = () => {
      const scrollPosition = window.scrollY + navbarHeight + 100; // Better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Show single loader until ready
  if (isLoading) {
    return (
      <AnimatePresence mode="wait">
        <PageLoader />
      </AnimatePresence>
    );
  }

  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden">
        <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      {/* Removed unused background animations for better performance */}

      {/* Sections with mobile-optimized spacing */}
      <main>
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

        <section
          id="about"
          className={`relative min-h-screen flex items-center justify-center ${
            isMobile ? 'pt-0 pb-12' : 'py-12 md:py-20'
          }`}
        >
          <AboutSection />
        </section>

        <section
          id="skills"
          className={`relative min-h-screen flex items-center justify-center ${
            isMobile ? 'pt-0 pb-12' : 'py-12 md:py-20'
          }`}
        >
          <SkillsSection />
        </section>

        <section
          id="projects"
          className={`relative min-h-screen flex items-center justify-center ${
            isMobile ? 'pt-0 pb-12' : 'py-12 md:py-20'
          }`}
        >
          <ProjectsSection />
        </section>

        <section
          id="experience"
          className={`relative min-h-screen flex items-center justify-center ${
            isMobile ? 'pt-0 pb-12' : 'py-12 md:py-20'
          }`}
        >
          <ExperienceSection />
        </section>

        <section
          id="contact"
          className={`relative flex items-center justify-center ${
            isMobile ? 'min-h-screen pt-0 pb-24' : 'min-h-screen py-12 md:py-16'
          }`}
        >
          <ContactSection />
        </section>
      </main>
    </div>
  );
}

export default App;
