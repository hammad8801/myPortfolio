import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import {
  IconRocket,
  IconSettings,
} from '@tabler/icons-react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const projects = [
    {
      id: 1,
      title: 'ERP + Cross-Platform App System',
      subtitle: 'Full-Stack Business Solution',
      description: 'Built a complete ERP system using Frappe and extended it into a cross-platform application. Single backend powering web and mobile apps with API-based architecture and real-time data access across platforms.',
      technologies: ['Frappe', 'Python', 'REST API', 'Flutter', 'React Native'],
      category: 'ERP',
      icon: <IconRocket className="w-6 h-6" />,
      color: '#c5f9d7',
      highlights: [
        'Single backend powering web and mobile apps',
        'API-based architecture for seamless integration',
        'Real-time data access across platforms'
      ]
    },
    {
      id: 2,
      title: 'ERP Automation System',
      subtitle: 'Business Workflow Automation',
      description: 'Automated business workflows using ERPNext. Built invoice automation, custom workflows, and a comprehensive reporting system to streamline business operations.',
      technologies: ['Frappe', 'Python', 'ERPNext'],
      category: 'Automation',
      icon: <IconSettings className="w-6 h-6" />,
      color: '#f7d486',
      highlights: [
        'Invoice automation reducing manual effort',
        'Custom workflows for business processes',
        'Comprehensive reporting system'
      ]
    },
  ];

  const categories = ['All', 'ERP', 'Automation'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            linear-gradient(to right, #c5f9d7 1px, transparent 1px),
            linear-gradient(to bottom, #c5f9d7 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-20 right-4 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none"
        style={{ rotate }}
      >
        <div className="w-full h-full border-2 border-[#c5f9d7]/30 rotate-45" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-4 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none"
        animate={{
          rotate: -360,
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full border-2 border-[#f27a7d]/30 rounded-full" />
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
              PROJECTS
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
              <span className="text-white">Featured </span>
              <span className="bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text">
                Work
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#c5f9d7] to-[#f27a7d] text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              <div className="relative bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300 h-full">
                {/* Project Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <span style={{ color: project.color }}>
                      {project.icon}
                    </span>
                  </div>
                  <span 
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ 
                      backgroundColor: `${project.color}20`,
                      color: project.color 
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-white/60 text-xs leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                {hoveredProject === project.id && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      backgroundColor: `${project.color}05`,
                      borderColor: `${project.color}30`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Projects Built', value: '2+', icon: '🚀' },
              { label: 'Technologies Used', value: '10+', icon: '⚡' },
              { label: 'Workflows Automated', value: '5+', icon: '📈' },
              { label: 'Platforms Supported', value: '3+', icon: '📱' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 