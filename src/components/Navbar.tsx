import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'skills', label: 'Skills', icon: '💡' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'contact', label: 'Contact', icon: '📧' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 transition-all duration-300',
          isScrolled && 'py-3 md:py-4'
        )}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            animate={{
              backdropFilter: isScrolled ? 'blur(20px)' : 'blur(12px)',
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              'relative mx-auto transition-all duration-300',
              'max-w-fit',
              isScrolled ? 'shadow-2xl' : 'shadow-xl'
            )}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(197, 249, 215, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(247, 212, 134, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(242, 122, 125, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(197, 249, 215, 0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />
              <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
            </div>

            {/* Desktop Navigation */}
            <ul className="relative hidden md:flex items-center gap-1 lg:gap-4 xl:gap-6 px-4 lg:px-6 xl:px-8 py-3 lg:py-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={cn(
                      'relative px-2 lg:px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300',
                      'hover:text-white group touch-manipulation focus:outline-none focus:ring-0',
                      activeSection === item.id ? 'text-white' : 'text-white/60'
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-1 lg:gap-2">
                      <motion.span
                        className="text-sm md:text-base lg:text-lg"
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, -5, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="hidden lg:inline text-xs lg:text-sm">
                        {item.label}
                      </span>
                    </span>

                    {/* Active indicator with glow effect */}
                    {activeSection === item.id && (
                      <>
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c5f9d7]/20 via-[#f7d486]/20 to-[#f27a7d]/20"
                          transition={{
                            type: 'spring',
                            duration: 0.6,
                            bounce: 0.2,
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: [
                              '0 0 20px rgba(197, 249, 215, 0.3)',
                              '0 0 30px rgba(247, 212, 134, 0.3)',
                              '0 0 20px rgba(242, 122, 125, 0.3)',
                              '0 0 20px rgba(197, 249, 215, 0.3)',
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </>
                    )}

                    {/* Hover effect with ripple */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/[0.08] opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover particles effect */}
                    <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/30 rounded-full"
                          initial={{
                            x: '50%',
                            y: '50%',
                            scale: 0,
                          }}
                          animate={{
                            x: [
                              '50%',
                              `${30 + i * 20}%`,
                              `${70 - i * 20}%`,
                              '50%',
                            ],
                            y: [
                              '50%',
                              `${20 + i * 15}%`,
                              `${80 - i * 15}%`,
                              '50%',
                            ],
                            scale: [0, 1, 1, 0],
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                            ease: 'easeOut',
                          }}
                        />
                      ))}
                    </div>
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Navigation Toggle */}
            <div className="relative md:hidden px-6 py-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 text-white p-2 focus:outline-none focus:ring-0"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  className="w-6 h-5 flex flex-col justify-between"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 },
                    }}
                    className="w-full h-0.5 bg-white rounded-full origin-left"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    className="w-full h-0.5 bg-white rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 },
                    }}
                    className="w-full h-0.5 bg-white rounded-full origin-left"
                  />
                </motion.div>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-black/90 backdrop-blur-xl border-l border-white/10 z-40 md:hidden"
            >
              <div className="pt-20 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      'w-full text-left py-4 px-4 rounded-lg transition-all duration-300',
                      'flex items-center gap-3',
                      activeSection === item.id
                        ? 'bg-white/10 text-white'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeMobile"
                        className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d]"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
