import { motion, useScroll, useTransform } from 'framer-motion';
import { IconCalendar, IconMapPin } from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', '65% start'],
  });

  // Floating elements animations (unchanged)
  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Timeline progress from 0 → 1
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Android Development Intern',
      organization: 'Internship',
      period: 'Jan 2023 – Jun 2023',
      location: 'Ahmedabad, India',
      icon: '📱',
      color: '#c5f9d7',
      highlights: [
        'Built apps using Kotlin and Android SDK',
        'Designed responsive UI using XML & ConstraintLayout',
        'Implemented RecyclerView, Navigation Components',
        'Integrated REST APIs using Retrofit'
      ],
      technologies: ['Kotlin', 'Retrofit', 'Room', 'SQLite', 'Android SDK'],
    },
    {
      id: 2,
      type: 'work',
      title: 'Android Developer',
      organization: 'Naqi Trends',
      period: 'Sep 2023 – Dec 2023',
      location: 'Ahmedabad, India',
      icon: '💼',
      color: '#f7d486',
      highlights: [
        'Developed e-commerce Android app "Naqi Trends" for local businesses',
        'Built product management & inventory tracking features',
        'Implemented order placement with email notifications',
        'Used MVVM architecture and Kotlin Coroutines for async performance'
      ],
      technologies: ['Kotlin', 'Firebase', 'Android SDK', 'MVVM'],
    },
    {
      id: 3,
      type: 'work',
      title: 'ERPNext Developer',
      organization: 'Professional Role',
      period: 'Mar 2024 – Dec 2024',
      location: 'Ahmedabad, India',
      icon: '⚙️',
      color: '#f27a7d',
      highlights: [
        'Hands-on with modules: Sales, Purchase, Inventory, HR, Accounts',
        'Configured roles and permissions',
        'Customized forms, reports, and workflows',
        'Worked with SQL and database management'
      ],
      technologies: ['ERPNext', 'Frappe', 'MySQL', 'Python'],
    },
    {
      id: 4,
      type: 'work',
      title: 'Frappe & Cross-Platform Developer',
      organization: 'Self Projects',
      period: 'Jan 2025 – Present',
      location: 'Ahmedabad, India',
      icon: '🔥',
      color: '#c5f9d7',
      highlights: [
        'Built ERP systems using Frappe Framework',
        'Developed cross-platform applications',
        'Integrated backend systems with mobile apps',
        'Automated business workflows using Python'
      ],
      technologies: ['Frappe', 'Python', 'ERPNext', 'Flutter', 'REST API', 'React'],
    },
  ];



  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen relative overflow-hidden"
    >
      {/* Background Mesh Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f27a7d 1px, transparent 1px),
              linear-gradient(to bottom, #f27a7d 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Decor */}
      <motion.div
        className="absolute top-60 left-4 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none"
        style={{ x }}
      >
        <div className="w-full h-full border-2 border-[#f7d486]/30 rounded-full" />
      </motion.div>
      <motion.div
        className="absolute bottom-60 right-4 sm:right-40 w-24 h-24 sm:w-36 sm:h-36 pointer-events-none"
        style={{ rotate }}
      >
        <div className="w-full h-full border-2 border-[#c5f9d7]/30 rotate-45" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <div className="relative">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white/10 absolute -top-8 sm:-top-10 left-0">
              JOURNEY
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text">
                Path
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Simple Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex items-center gap-8">
            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <div className="text-3xl font-bold text-[#c5f9d7]">2023</div>
              <div className="text-sm text-white/50">Started</div>
            </motion.div>
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>
            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <div className="text-3xl font-bold text-[#f27a7d]">Present</div>
              <div className="text-sm text-white/50">Continuing</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline Content */}
        <div className="relative">
          {isMobile ? (
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 border border-white/[0.05]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${exp.color}20` }}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">
                        {exp.title}
                      </h4>
                      <p className="text-[#f7d486] font-medium text-sm">
                        {exp.organization}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-white/60 text-xs">
                        <span>📅 {exp.period}</span>
                        <span>📍 {exp.location}</span>
                      </div>
                      {exp.highlights && (
                        <div className="space-y-2">
                          {exp.highlights.map((hl, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#f7d486] mt-2 flex-shrink-0" />
                              <p className="text-white/80 text-sm leading-relaxed">
                                {hl}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                      {exp.technologies && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Central Timeline Line - positioned between first and last card centers */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 hidden lg:block overflow-hidden"
                style={{
                  top: '8rem', // Start from center of first card
                  height: 'calc(100% - 16rem)', // End at center of last card
                }}
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-b from-[#c5f9d7] via-[#f7d486] to-[#f27a7d]"
                  style={{
                    scaleY: timelineProgress,
                    transformOrigin: 'top center',
                  }}
                  initial={{ scaleY: 0 }}
                />
              </div>

              {/* Timeline Items */}
              <div className="space-y-16 lg:space-y-24">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onHoverStart={() => setHoveredExp(exp.id)}
                    onHoverEnd={() => setHoveredExp(null)}
                    className={`
                      relative flex items-center gap-8
                      ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                    `}
                  >
                    {/* Content Card */}
                    <motion.div
                      className="flex-1 lg:w-5/12"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="relative group">
                        <motion.div
                          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                          style={{ backgroundColor: `${exp.color}30` }}
                          animate={
                            hoveredExp === exp.id ? { scale: [1, 1.1, 1] } : {}
                          }
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                          <motion.div
                            className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-bold"
                            style={{
                              backgroundColor: `${exp.color}20`,
                              border: `2px solid ${exp.color}`,
                              color: exp.color,
                            }}
                            animate={
                              hoveredExp === exp.id
                                ? { rotate: [0, -5, 5, 0] }
                                : {}
                            }
                            transition={{ duration: 0.5 }}
                          >
                            {
                              // I want to add a condition if value is something like Jan 2023 - April 2024 then take only 2023. Only the starting year
                              // and if it is the last experience then put string 'Present'
                              exp.id === experiences[experiences.length - 1].id
                                ? 'Present'
                                : exp.period.includes('–')
                                ? exp.period.split('–')[0].trim()
                                : exp.period
                            }
                          </motion.div>
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div
                              className="text-4xl"
                              animate={
                                hoveredExp === exp.id
                                  ? { rotate: [0, 10, -10, 0], y: [0, -5, 0] }
                                  : {}
                              }
                              transition={{ duration: 1, ease: 'easeInOut' }}
                            >
                              {exp.icon}
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-white mb-1">
                                {exp.title}
                              </h4>
                              <p
                                className="font-medium"
                                style={{ color: exp.color }}
                              >
                                {exp.organization}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-white/60 text-sm">
                              <IconCalendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60 text-sm">
                              <IconMapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          {exp.highlights && (
                            <div className="space-y-2 mb-6">
                              {exp.highlights.map((hl, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2"
                                >
                                  <span style={{ color: exp.color }}>▸</span>
                                  <span className="text-white/70 text-sm">
                                    {hl}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          )}
                          {exp.technologies && (
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.05 }}
                                  whileHover={{ scale: 1.1 }}
                                  className="px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-default"
                                  style={{
                                    borderColor: `${exp.color}40`,
                                    backgroundColor: `${exp.color}10`,
                                    color: exp.color,
                                  }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Timeline Node */}
                    <motion.div
                      className="hidden lg:flex items-center justify-center relative"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: `${exp.color}20` }}
                        animate={
                          hoveredExp === exp.id
                            ? { scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl relative z-10"
                        style={{
                          backgroundColor: `${exp.color}20`,
                          border: `2px solid ${exp.color}`,
                        }}
                        animate={hoveredExp === exp.id ? { rotate: 360 } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {exp.icon}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: [
                              `0 0 20px ${exp.color}40`,
                              `0 0 40px ${exp.color}60`,
                              `0 0 20px ${exp.color}40`,
                            ],
                          }}
                          transition={{ duration: 5 }}
                        />
                      </motion.div>
                      <motion.div
                        className={`absolute w-20 h-0.5 ${
                          idx % 2 === 0 ? 'right-full' : 'left-full'
                        }`}
                        style={{ backgroundColor: exp.color }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </motion.div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-5/12" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Awards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Achievement </span>
            <span className="bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text">
              Trophies
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${award.glow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <motion.div
                    className="text-6xl mb-4 inline-block"
                    animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {award.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {award.title}
                  </h4>
                  <p className="text-white/70">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-light text-white/60 italic">
            "Every experience shapes the developer I'm becoming"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
