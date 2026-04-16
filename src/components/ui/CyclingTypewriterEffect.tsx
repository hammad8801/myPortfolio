import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const CyclingTypewriterEffect = ({
  texts,
  className,
  cursorClassName,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
}: {
  texts: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (currentText.length < currentFullText.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsWaiting(true);
      }
    }
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div
      className={cn(
        'text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed',
        className
      )}
    >
      <div className="relative inline-block min-h-[2em]">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTextIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inline-block"
          >
            {currentText}
          </motion.span>
        </AnimatePresence>
        
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={cn(
            'inline-block w-[2px] h-5 sm:h-6 md:h-7 lg:h-8 bg-gradient-to-b from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] rounded-full ml-1',
            cursorClassName
          )}
        />
      </div>
    </div>
  );
}; 