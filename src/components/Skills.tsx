import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  IconCode,
  IconServer,
  IconBrush,
  IconTools,
  IconApi,
  IconDeviceMobile,
} from '@tabler/icons-react';
import { FaJs, FaReact, FaAndroid } from 'react-icons/fa';
import {
  SiFlutter,
  SiPython,
  SiGit,
  SiHtml5,
  SiCss3,
  SiAndroidstudio,
} from 'react-icons/si';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Backend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillCategories = [
    {
      title: 'Backend',
      icon: <IconServer className="h-5 w-5" />,
      color: '#3776AB',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 90, color: '#3776AB' },
        { name: 'Frappe Framework', icon: <IconCode className="w-5 h-5" />, level: 88, color: '#0089FF' },
        { name: 'ERPNext', icon: <IconCode className="w-5 h-5" />, level: 85, color: '#0089FF' },
      ],
    },
    {
      title: 'Cross-Platform',
      icon: <IconDeviceMobile className="h-5 w-5" />,
      color: '#02569B',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      skills: [
        { name: 'Flutter', icon: <SiFlutter />, level: 85, color: '#02569B' },
        { name: 'Android', icon: <FaAndroid />, level: 82, color: '#3DDC84' },
        { name: 'REST API Integration', icon: <IconApi className="w-5 h-5" />, level: 88, color: '#FF6C37' },
        { name: 'Mobile + Web Apps', icon: <IconDeviceMobile className="w-5 h-5" />, level: 85, color: '#7C3AED' },
      ],
    },
    {
      title: 'Frontend',
      icon: <IconBrush className="h-5 w-5" />,
      color: '#61DAFB',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      skills: [
        { name: 'React', icon: <FaReact />, level: 80, color: '#61DAFB' },
        { name: 'HTML', icon: <SiHtml5 />, level: 90, color: '#E34F26' },
        { name: 'CSS', icon: <SiCss3 />, level: 88, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
      ],
    },
    {
      title: 'Tools',
      icon: <IconTools className="h-5 w-5" />,
      color: '#F05032',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 88, color: '#F05032' },
        { name: 'VS Code', icon: <IconCode className="w-5 h-5" />, level: 90, color: '#007ACC' },
        { name: 'Android Studio', icon: <SiAndroidstudio />, level: 82, color: '#3DDC84' },
      ],
    },
    {
      title: 'Other',
      icon: <IconCode className="h-5 w-5" />,
      color: '#6B73FF',
      bgGradient: 'from-indigo-500/20 to-purple-500/20',
      skills: [
        { name: 'Automation Scripts', icon: <SiPython />, level: 85, color: '#3776AB' },
        { name: 'API Integration', icon: <IconApi className="w-5 h-5" />, level: 88, color: '#FF6C37' },
        { name: 'System Design', icon: <IconServer className="w-5 h-5" />, level: 78, color: '#6B73FF' },
      ],
    },
  ];

  const activeCategory = skillCategories.find(
    (cat) => cat.title === selectedCategory
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen relative overflow-hidden"
    >
      {/* Background Mesh Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #f7d486 1px, transparent 1px),
            linear-gradient(to bottom, #f7d486 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Simplified Floating Geometric Elements */}
      <motion.div
        className="absolute top-40 right-4 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 pointer-events-none"
        style={{ rotate }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#f7d486]/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-4 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none"
        animate={{
          rotate: -360,
          y: [0, 15, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full border-2 border-[#c5f9d7]/30 rounded-lg rotate-45" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        {/* Consistent Title Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <div className="relative">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white/10 absolute -top-8 sm:-top-10 left-0">
              SKILLS
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text">
                Arsenal
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Mobile Layout - All categories visible */}
        {isMobile ? (
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 border border-white/[0.05]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <span style={{ color: category.color }}>
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {category.title}
                    </h4>
                    <p className="text-white/50 text-sm">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="bg-black/30 rounded-xl p-4 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="text-2xl"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </div>
                          <span className="font-medium text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-white/70">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop Layout - Category selector with fixed content height */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Category Selector */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24">
                <h4 className="text-xl font-bold text-white mb-6">
                  Categories
                </h4>

                <div className="space-y-3">
                  {skillCategories.map((category, index) => (
                    <motion.button
                      key={category.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedCategory(category.title)}
                      className="w-full relative group"
                      whileHover={{ x: 10 }}
                    >
                      <div
                        className={`
                        relative bg-black/50 backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300
                        ${
                          selectedCategory === category.title
                            ? 'border-white/30 bg-white/5'
                            : 'border-white/10 hover:border-white/20'
                        }
                      `}
                      >
                        {/* Active Gradient Background */}
                        {selectedCategory === category.title && (
                          <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-gradient-to-r from-[#c5f9d7]/10 via-[#f7d486]/10 to-[#f27a7d]/10 rounded-2xl"
                            transition={{ type: 'spring', duration: 0.6 }}
                          />
                        )}

                        <div className="relative flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${category.color}20` }}
                          >
                            <span style={{ color: category.color }}>
                              {category.icon}
                            </span>
                          </div>
                          <div className="text-left">
                            <h5 className="font-semibold text-white">
                              {category.title}
                            </h5>
                            <p className="text-sm text-white/50">
                              {category.skills.length} skills
                            </p>
                          </div>

                          {/* Skill count indicator */}
                          <div className="ml-auto">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                              <span className="text-sm font-bold text-white/70">
                                {category.skills.length}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills Display with fixed height */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              {/* Active Category Skills */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/[0.05] min-h-[400px] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${activeCategory?.color}20` }}
                  >
                    <span
                      className="text-2xl"
                      style={{ color: activeCategory?.color }}
                    >
                      {activeCategory?.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {activeCategory?.title}
                    </h4>
                    <p className="text-white/50">Mastery Level</p>
                  </div>
                </div>

                {/* Skills Grid with consistent layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr flex-1 items-start">
                  {activeCategory?.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative group"
                    >
                      <div className="relative bg-black/30 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                        {/* Skill Icon & Info */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="text-3xl"
                              style={{ color: skill.color }}
                              animate={{
                                rotate: hoveredSkill === skill.name ? 360 : 0,
                                scale: hoveredSkill === skill.name ? 1.2 : 1,
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              {skill.icon}
                            </motion.div>
                            <h5 className="font-semibold text-white">
                              {skill.name}
                            </h5>
                          </div>
                          <motion.span
                            className="text-2xl font-bold"
                            style={{ color: skill.color }}
                            animate={{
                              scale:
                                hoveredSkill === skill.name ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>

                        {/* Progress Ring */}
                        <div className="flex-grow flex items-center justify-center">
                          <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle
                                cx="48"
                                cy="48"
                                r="36"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="8"
                                fill="none"
                              />
                              <motion.circle
                                cx="48"
                                cy="48"
                                r="36"
                                stroke={skill.color}
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 36}`}
                                initial={{
                                  strokeDashoffset: 2 * Math.PI * 36,
                                }}
                                animate={{
                                  strokeDashoffset:
                                    2 * Math.PI * 36 * (1 - skill.level / 100),
                                }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}

      </div>
    </div>
  );
}
