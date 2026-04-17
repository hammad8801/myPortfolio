import { motion } from 'framer-motion';
import {
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
} from '@tabler/icons-react';
import { useState, useRef } from 'react';

export default function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Removed unused scroll transforms for build optimization

  const skills = [
    { name: 'Python', color: '#3776AB', level: 90 },
    { name: 'Frappe', color: '#0089FF', level: 88 },
    { name: 'Flutter', color: '#02569B', level: 85 },
    { name: 'JavaScript', color: '#61DAFB', level: 80 },
    { name: 'REST APIs', color: '#FF6C37', level: 88 },
    { name: 'ERPNext', color: '#0089FF', level: 85 },
  ];

  const experiences = [
    { year: '2023', event: 'Started Android Development', icon: '📱' },
    { year: '2024', event: 'ERPNext Developer & Frappe Journey', icon: '⚙️' },
    { year: '2025', event: 'Built ERP + Cross-Platform Apps', icon: '🔥' },
    { year: 'Now', event: 'Scaling Business Solutions', icon: '✨' },
  ];

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

      {/* Simplified Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-4 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 pointer-events-none"
        animate={{
          rotate: 360,
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full border-2 border-[#c5f9d7]/30 rotate-45" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-4 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 pointer-events-none"
        animate={{
          rotate: -360,
          x: [0, 15, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full border-2 border-[#f27a7d]/30 rounded-full" />
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
              ABOUT
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
              <span className="text-white">The </span>
              <span className="bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text">
                Story
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Simplified Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] rounded-3xl"
                animate={{
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Content Container */}
              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 m-1">
                {/* Profile Image with Hover Effect */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#c5f9d7] to-[#f27a7d] rounded-full"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <img
                      src="/images/About.png"
                      alt="Hammad"
                      className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full z-10"
                    />
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
                  Hammad
                </h4>
                <p className="text-[#f7d486] text-center mb-6 font-medium">
                  Frappe & Cross-Platform Developer
                </p>

                {/* Creative Bio */}
                <div className="space-y-4 mb-6">
                  <p className="text-white/80 text-center leading-relaxed text-sm sm:text-base">
                    Developer focused on building end-to-end business solutions using Frappe Framework and modern app technologies.
                  </p>
                  <p className="text-white/70 text-center leading-relaxed text-sm">
                    <span className="text-[#c5f9d7] font-semibold">ERP & Cross-Platform Specialist</span> — Building scalable ERP systems and modern applications that run on web, mobile, and multiple platforms.
                  </p>
                  <p className="text-white/70 text-center leading-relaxed text-sm">
                    Helping businesses operate efficiently by combining powerful backend systems with flexible, user-friendly applications.
                  </p>
                </div>

                {/* Contact Info with Icons */}
                <div className="space-y-3">
                  <motion.a
                    href="mailto:hmansuriwr@gmail.com"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                    whileHover={{ x: 3 }}
                  >
                    <IconMail
                      size={18}
                      className="text-[#f7d486] group-hover:rotate-6 transition-transform"
                    />
                    <span className="text-sm">hmansuriwr@gmail.com</span>
                  </motion.a>
                  <motion.div
                    className="flex items-center gap-3 text-white/70"
                    whileHover={{ x: 3 }}
                  >
                    <IconMapPin size={18} className="text-[#c5f9d7]" />
                    <span className="text-sm">Ahmedabad, India</span>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-8">
                  {[
                    {
                      icon: IconBrandLinkedin,
                      href: 'https://www.linkedin.com/in/hammadmansuri88/',
                      color: '#0077b5',
                    },
                  ].map(({ icon: Icon, href, color }, index) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      style={{ color }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Timeline & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Journey Timeline */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center sm:text-left">
                My Journey
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl group-hover:scale-110 transition-transform">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[#f7d486] font-bold text-sm">
                          {exp.year}
                        </div>
                        <div className="text-white/80 text-sm leading-relaxed">
                          {exp.event}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Showcase */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center sm:text-left">
                Core Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-white/60 text-xs sm:text-sm">
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
                        transition={{ delay: index * 0.1, duration: 1 }}
                      />
                    </div>
                    {activeSkill === skill.name && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          backgroundColor: `${skill.color}20`,
                          borderColor: skill.color,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 sm:p-8"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center sm:text-left">
                Philosophy
              </h4>
              <blockquote className="text-white/80 text-sm sm:text-base leading-relaxed italic">
                "I believe in building <span className="text-[#c5f9d7] font-semibold">powerful ERP systems and cross-platform applications</span> that help businesses operate efficiently. Every solution should be scalable, user-friendly, and built to last."
              </blockquote>
              <footer className="mt-4 text-[#c5f9d7] text-sm">
                — Hammad, Frappe & Cross-Platform Developer
              </footer>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
