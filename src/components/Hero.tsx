import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IconArrowDown } from '@tabler/icons-react';
import { TypewriterEffect } from './ui/TypewriterEffect';
import { CyclingTypewriterEffect } from './ui/CyclingTypewriterEffect';
import '../App.css';

const Hero = () => {
  // Removed unused mousePosition for build optimization
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Smooth mouse movement - only on desktop and when motion is allowed
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isReducedMotion || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 10; // Reduced intensity
      const y = (clientY / innerHeight - 0.5) * 10;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isReducedMotion]);

  const words = [
    {
      text: 'Building',
      className: 'text-white',
    },
    {
      text: 'scalable',
      className:
        'bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text',
    },
    {
      text: 'ERP',
      className:
        'bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text',
    },
    {
      text: 'systems',
      className: 'text-white',
    },
    {
      text: '&',
      className: 'text-white',
    },
    {
      text: 'cross-platform',
      className:
        'bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text',
    },
    {
      text: 'applications.',
      className:
        'bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text',
    },
  ];

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Clean background without dark pillars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        {!isReducedMotion && (
          <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c5f9d7]/10 via-transparent to-[#f27a7d]/10" />
          </div>
        )}
      </div>

      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10 w-full"
        style={
          !isReducedMotion && window.innerWidth >= 768
            ? {
                x: mouseXSpring,
                y: mouseYSpring,
              }
            : {}
        }
      >
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="mb-6"
        >
          <motion.span
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs sm:text-sm font-medium text-white/80"
            whileHover={
              !isReducedMotion
                ? { scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }
                : {}
            }
            transition={{ type: 'spring', stiffness: 400 }}
          >
            {!isReducedMotion && (
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-block mr-2"
              >
                👋
              </motion.span>
            )}
            {isReducedMotion && <span className="mr-2">👋</span>}
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        {/* Main heading with improved responsive sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8 leading-tight"
        >
          <span className="text-white block sm:inline">Hi, I'm </span>
          <motion.span
            className="bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text inline-block"
            animate={
              !isReducedMotion
                ? {
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }
                : {}
            }
            transition={
              !isReducedMotion
                ? {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }
                : {}
            }
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Hammad
          </motion.span>

          {/* Decorative elements */}
          {!isReducedMotion ? (
            <motion.span
              className="inline-block ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ✨
            </motion.span>
          ) : (
            <span className="inline-block ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              ✨
            </span>
          )}
        </motion.h1>

        {/* Typewriter effect */}
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <TypewriterEffect words={words} />
        </motion.div>

        {/* Description with cycling typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <CyclingTypewriterEffect
            texts={[
              "Frappe & Cross-Platform App Developer",
              "ERP system development with Frappe / ERPNext",
              "Business workflow automation specialist",
              "Cross-platform application developer (Flutter / React Native)",
              "Building scalable backend systems with Python",
              "Helping businesses operate efficiently with modern tech"
            ]}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed px-4 text-center"
            typingSpeed={40}
            deletingSpeed={20}
            pauseDuration={2500}
          />
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] rounded-full font-medium text-black transition-all duration-300 overflow-hidden w-full sm:w-auto"
            whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
          >
            {!isReducedMotion && (
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get In Touch
              {!isReducedMotion ? (
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              ) : (
                <span>→</span>
              )}
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
          </motion.button>
          <motion.a
            href="/resume/Hammad_Resume.pdf"
            download="Hammad_Resume.pdf"
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium text-white transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
          >
            {!isReducedMotion && (
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download Resume
              {!isReducedMotion ? (
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ⬇️
                </motion.span>
              ) : (
                <span>⬇️</span>
              )}
            </span>
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
          </motion.a>
        </motion.div>

      </motion.div>

      {/* Optimized Floating elements - only when motion is allowed */}
      {!isReducedMotion && (
        <>
          <motion.div
            className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[#c5f9d7]/20 to-transparent rounded-full blur-2xl pointer-events-none"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-[#f27a7d]/20 to-transparent rounded-full blur-2xl pointer-events-none"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 cursor-pointer"
        onClick={handleScrollToAbout}
        whileHover={!isReducedMotion ? { scale: 1.1 } : {}}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
          animate={!isReducedMotion ? { y: [0, -5, 0] } : {}}
          transition={
            !isReducedMotion
              ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              : {}
          }
        >
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-center">
            Scroll to explore
          </span>
          <motion.div
            animate={!isReducedMotion ? { y: [0, 8, 0] } : {}}
            transition={
              !isReducedMotion
                ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                : {}
            }
          >
            <IconArrowDown size={20} />
          </motion.div>
          {!isReducedMotion && (
            <motion.div
              className="w-[2px] h-6 sm:h-8 bg-gradient-to-b from-white/50 to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
