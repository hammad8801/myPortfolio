import { useEffect, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '../../utils/cn';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [isInView, setIsInView] = useState(false);
  let wordsArray = words.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (scope.current) {
      observer.observe(scope.current);
    }

    return () => {
      if (scope.current) {
        observer.unobserve(scope.current);
      }
    };
  }, [scope, isInView]);

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          opacity: 1,
          filter: 'blur(0px)',
        },
        {
          duration: 1,
          delay: stagger(0.05),
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0 filter blur-sm"
              style={{
                filter: 'blur(10px)',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-medium', className)}>
      <div>
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
