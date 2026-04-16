// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { Suspense, lazy } from 'react';

// // // // Loading component
// // // export const PageLoader = () => (
// // //   <motion.div
// // //     initial={{ opacity: 0 }}
// // //     animate={{ opacity: 1 }}
// // //     exit={{ opacity: 0 }}
// // //     className="fixed inset-0 bg-black z-50 flex items-center justify-center"
// // //   >
// // //     <div className="text-center">
// // //       <div className="relative w-24 h-24 mx-auto mb-4">
// // //         <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
// // //         <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
// // //       </div>
// // //       <p className="text-white/60 animate-pulse">Loading...</p>
// // //     </div>
// // //   </motion.div>
// // // );

// // // // Section loader for lazy loaded sections
// // // export const SectionLoader = () => (
// // //   <div className="min-h-[400px] flex items-center justify-center">
// // //     <div className="text-center">
// // //       <div className="w-16 h-16 mx-auto mb-4">
// // //         <div className="w-full h-full border-4 border-white/10 border-t-primary/50 rounded-full animate-spin"></div>
// // //       </div>
// // //     </div>
// // //   </div>
// // // );

// // // // Lazy load wrapper
// // // export const LazySection = ({
// // //   component: Component,
// // //   fallback = <SectionLoader />,
// // // }: {
// // //   component: React.ComponentType;
// // //   fallback?: React.ReactNode;
// // // }) => {
// // //   return (
// // //     <Suspense fallback={fallback}>
// // //       <Component />
// // //     </Suspense>
// // //   );
// // // };

// // // // Export lazy loaded components
// // // export const LazyHero = lazy(() => import('./Hero'));
// // // export const LazyAbout = lazy(() => import('./About'));
// // // export const LazySkills = lazy(() => import('./Skills'));
// // // export const LazyExperience = lazy(() => import('./Experince'));
// // // export const LazyContact = lazy(() => import('./Contact'));

// // // LazyLoad.tsx
// // import { motion } from 'framer-motion';
// // import { Suspense, lazy } from 'react';

// // // Page-level loader with animated glowing ring
// // export const PageLoader = () => (
// //   <motion.div
// //     initial={{ opacity: 0 }}
// //     animate={{ opacity: 1 }}
// //     exit={{ opacity: 0 }}
// //     className="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-xl"
// //   >
// //     <div className="relative flex flex-col items-center justify-center">
// //       <div className="relative w-24 h-24 mb-4">
// //         <motion.div
// //           className="absolute inset-0 rounded-full border-4 border-white/10"
// //           animate={{ rotate: 360 }}
// //           transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
// //         />
// //         <div className="absolute inset-0 border-t-4 border-[#f7d486] border-solid rounded-full animate-spin"></div>
// //         <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-[#c5f9d7]/10 via-[#f7d486]/10 to-[#f27a7d]/10 blur-xl"></div>
// //       </div>
// //       <motion.p
// //         className="text-white/60 tracking-wide text-sm animate-pulse"
// //         initial={{ opacity: 0.4 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
// //       >
// //         Waking up the pixels...
// //       </motion.p>
// //     </div>
// //   </motion.div>
// // );

// // // Section-level loader with minimalist spinner
// // export const SectionLoader = () => (
// //   <div className="min-h-[300px] flex items-center justify-center">
// //     <div className="relative w-16 h-16">
// //       <div className="absolute inset-0 rounded-full border-4 border-white/10 border-t-[#f27a7d] animate-spin" />
// //       <div className="absolute inset-3 rounded-full bg-[#c5f9d7]/10 blur-lg" />
// //     </div>
// //   </div>
// // );

// // // Lazy wrapper with fallback
// // export const LazySection = ({
// //   component: Component,
// //   fallback = <SectionLoader />,
// // }: {
// //   component: React.ComponentType;
// //   fallback?: React.ReactNode;
// // }) => {
// //   return (
// //     <Suspense fallback={fallback}>
// //       <Component />
// //     </Suspense>
// //   );
// // };

// // // Lazy-loaded components
// // export const LazyHero = lazy(() => import('./Hero'));
// // export const LazyAbout = lazy(() => import('./About'));
// // export const LazySkills = lazy(() => import('./Skills'));
// // export const LazyExperience = lazy(() => import('./Experince'));
// // export const LazyContact = lazy(() => import('./Contact'));

// import { motion } from 'framer-motion';
// import { Suspense, lazy } from 'react';
// export const PageLoader = () => (
//   <motion.div
//     className="fixed inset-0 bg-black z-50 flex items-center justify-center"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//   >
//     <div className="relative w-[300px] h-[300px]">
//       {/* Core node */}
//       <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg z-20" />

//       {/* Orbiting dots */}
//       {Array.from({ length: 6 }).map((_, i) => {
//         const angle = (i * 60 * Math.PI) / 180;
//         const x = Math.cos(angle) * 100;
//         const y = Math.sin(angle) * 100;
//         return (
//           <motion.div
//             key={i}
//             className="absolute w-3 h-3 bg-gradient-to-tr from-[#f7d486] via-[#f27a7d] to-[#c5f9d7] rounded-full shadow-md"
//             style={{
//               left: '50%',
//               top: '50%',
//               transform: `translate(${x}px, ${y}px)`,
//             }}
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.8, 1, 0.8],
//             }}
//             transition={{
//               duration: 2 + i * 0.3,
//               repeat: Infinity,
//               repeatType: 'mirror',
//               ease: 'easeInOut',
//             }}
//           />
//         );
//       })}

//       {/* Connecting lines (simulated with ::before and animated pulse) */}
//       <svg
//         className="absolute top-0 left-0 w-full h-full"
//         viewBox="0 0 300 300"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <motion.polyline
//           points="150,150 150,50 250,150 150,250 50,150 150,50"
//           fill="none"
//           stroke="#f7d486"
//           strokeWidth="1.5"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             repeatType: 'mirror',
//             ease: 'easeInOut',
//           }}
//           strokeDasharray="6"
//         />
//       </svg>
//     </div>

//     {/* Caption */}
//     <motion.p
//       className="absolute bottom-20 text-white/60 text-sm tracking-wider animate-pulse"
//       initial={{ opacity: 0.3 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
//     >
//       Aligning the stars...
//     </motion.p>
//   </motion.div>
// );

// // ✨ SectionLoader with minimalist spinner
// export const SectionLoader = () => (
//   <div className="min-h-[300px] flex items-center justify-center">
//     <div className="relative w-16 h-16">
//       <div className="absolute inset-0 rounded-full border-4 border-white/10 border-t-[#f27a7d] animate-spin" />
//       <div className="absolute inset-3 rounded-full bg-[#c5f9d7]/10 blur-lg" />
//     </div>
//   </div>
// );

// // 🧩 Lazy Section Wrapper
// export const LazySection = ({
//   component: Component,
//   fallback = <SectionLoader />,
// }: {
//   component: React.ComponentType;
//   fallback?: React.ReactNode;
// }) => {
//   return (
//     <Suspense fallback={fallback}>
//       <Component />
//     </Suspense>
//   );
// };

// // 🔄 Lazy Imports
// export const LazyHero = lazy(() => import('./Hero'));
// export const LazyAbout = lazy(() => import('./About'));
// export const LazySkills = lazy(() => import('./Skills'));
// export const LazyExperience = lazy(() => import('./Experince'));
// export const LazyContact = lazy(() => import('./Contact'));

import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';

// Simple, single loader that completes properly
export const PageLoader = () => (
  <motion.div
    className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative w-[300px] h-[300px]">
      {/* Core node */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg z-20" />

      {/* Orbiting stars */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = Math.cos(angle) * 100;
        const y = Math.sin(angle) * 100;
        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-tr from-[#f7d486] via-[#f27a7d] to-[#c5f9d7] rounded-full shadow-md"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(${x}px, ${y}px)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Animated connecting lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.polyline
          points="150,150 150,50 250,150 150,250 50,150 150,50"
          fill="none"
          stroke="#f7d486"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          strokeDasharray="6"
        />
      </svg>
    </div>

    {/* Caption */}
    <motion.p
      className="absolute bottom-20 text-white/60 text-sm tracking-wider animate-pulse"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
    >
      Aligning the stars...
    </motion.p>
  </motion.div>
);

// No section loader to avoid double loading
export const SectionLoader = () => null;

// Lazy Section Wrapper without fallback spinner
export const LazySection = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

// Lazy Imports
export const LazyHero = lazy(() => import('./Hero'));
export const LazyAbout = lazy(() => import('./About'));
export const LazySkills = lazy(() => import('./Skills'));
export const LazyExperience = lazy(() => import('./Experince'));
export const LazyContact = lazy(() => import('./Contact'));
