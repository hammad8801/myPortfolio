import { motion } from 'framer-motion';
import {
  IconHome,
  IconUser,
  IconBulb,
  IconRocket,
  IconBriefcase,
  IconMail,
} from '@tabler/icons-react';
import { cn } from '../utils/cn';

interface MobileNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: IconHome },
  { id: 'about', label: 'About', icon: IconUser },
  { id: 'skills', label: 'Skills', icon: IconBulb },
  { id: 'projects', label: 'Projects', icon: IconRocket },
  { id: 'experience', label: 'Exp', icon: IconBriefcase },
  { id: 'contact', label: 'Contact', icon: IconMail },
];

export default function MobileNav({
  activeSection,
  onNavigate,
}: MobileNavProps) {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 safe-area-inset-bottom"
    >
      <div className="backdrop-blur-xl bg-black/90 border-t border-white/[0.08] px-2 pb-safe">
        <ul className="flex items-center justify-around py-2 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id} className="flex-1">
                <motion.button
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    'relative w-full py-3 px-2 flex flex-col items-center gap-1 transition-all duration-300 rounded-lg',
                    'min-h-[56px] touch-manipulation', // Better touch target
                    isActive
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/70'
                  )}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="relative flex items-center justify-center"
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  >
                    <Icon size={20} stroke={1.5} />

                    {/* Active dot indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeMobile"
                        className="absolute -bottom-2 w-1 h-1 rounded-full bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d]"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                  </motion.div>

                  <span
                    className={cn(
                      'text-[10px] font-medium leading-tight text-center',
                      isActive ? 'text-white' : 'text-white/60'
                    )}
                  >
                    {item.label}
                  </span>

                  {/* Background glow for active item */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#c5f9d7]/10 via-[#f7d486]/10 to-[#f27a7d]/10 rounded-full blur-sm" />
                    </motion.div>
                  )}
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
