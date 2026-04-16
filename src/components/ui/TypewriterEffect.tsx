// import { cn } from '../../utils/cn';
// import { motion } from 'framer-motion';

// export const TypewriterEffect = ({
//   words,
//   className,
//   cursorClassName,
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   const wordsArray = words.map((word) => {
//     return {
//       ...word,
//       text: word.text.split(''),
//     };
//   });

//   const renderWords = () => {
//     return (
//       <div>
//         {wordsArray.map((word, idx) => {
//           return (
//             <span
//               key={`word-${idx}`}
//               className={cn(`dark:text-white text-black`, word.className)}
//             >
//               {word.text.map((char, index) => (
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{
//                     duration: 0.5,
//                     ease: 'easeInOut',
//                     delay: index * 0.1,
//                   }}
//                   key={`char-${index}`}
//                   className="dark:text-white text-black opacity-0 animate-fadeIn"
//                   style={{
//                     animationDelay: `${index * 0.1}s`,
//                     animationFillMode: 'forwards',
//                   }}
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//               &nbsp;
//             </span>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div
//       className={cn(
//         'text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-center',
//         className
//       )}
//     >
//       {renderWords()}
//       <motion.span
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: 'reverse',
//         }}
//         className={cn(
//           'inline-block rounded-sm w-[4px] h-8 md:h-10 lg:h-12 bg-gradient-to-b from-[#c5f9d7] to-[#f27a7d]',
//           cursorClassName
//         )}
//       />
//     </div>
//   );
// };
import { cn } from '../../utils/cn';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  useEffect(() => {
    if (isInView) {
      animate(
        'span.letter',
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        },
        {
          duration: 0.3,
          delay: stagger(0.05),
          ease: 'easeOut',
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, wordIdx) => {
          return (
            <span key={`word-${wordIdx}`} className="inline-block">
              {word.text.map((char, charIdx) => (
                <motion.span
                  key={`char-${wordIdx}-${charIdx}`}
                  className={cn(
                    'letter inline-block opacity-0 blur-sm',
                    word.className
                  )}
                  initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                >
                  {char}
                </motion.span>
              ))}
              <span>&nbsp;</span>
            </span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        'text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center',
        className
      )}
    >
      <div className="relative inline-block">
        {renderWords()}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 0.5,
          }}
          className={cn(
            'absolute -right-2 top-1/2 -translate-y-1/2 w-[3px] sm:w-[4px] h-6 sm:h-8 md:h-10 lg:h-12 bg-gradient-to-b from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] rounded-full',
            cursorClassName
          )}
        />
      </div>
    </div>
  );
};
