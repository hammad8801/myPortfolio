import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const contactItems = [
    {
      label: 'Email',
      value: 'hmansuriwr@gmail.com',
      icon: <IconMail size={24} />,
      link: 'mailto:hmansuriwr@gmail.com',
      color: '#c5f9d7',
    },
    {
      label: 'Phone',
      value: '+91 7862040233',
      icon: <IconPhone size={24} />,
      link: 'tel:+917862040233',
      color: '#f7d486',
    },
    {
      label: 'Location',
      value: 'Ahmedabad, India',
      icon: <IconMapPin size={24} />,
      color: '#f27a7d',
    },
  ];

  const socials = [
    {
      label: 'LinkedIn',
      icon: <IconBrandLinkedin size={32} />,
      href: 'https://www.linkedin.com/in/hammadmansuri88/',
      color: '#0077b5',
    },
  ];

  return (
    <section
      className={`w-full relative overflow-hidden ${
        isMobile ? 'py-8 px-4' : 'py-16 px-8'
      }`}
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #f7d486 1px, transparent 1px), linear-gradient(to bottom, #f7d486 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="relative">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white/10 absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2">
              CONTACT
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">
              <span className="text-white">Get in </span>
              <span className="bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text">
                Touch
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Mobile Layout */}
        {isMobile ? (
          <div className="space-y-6">
            {/* Contact Cards - Stacked vertically for mobile */}
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link || '#'}
                  target={item.link ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block bg-white/[0.02] backdrop-blur-sm p-4 rounded-2xl border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl text-2xl"
                      style={{
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">
                        {item.label}
                      </h4>
                      <p className="text-white/70 text-sm break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-white text-lg font-semibold mb-4 text-center">
                Connect with me
              </h4>
              <div className="flex justify-center gap-6">
                {socials.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-6 text-center"
            >
              <blockquote className="text-white/60 italic text-base font-light">
                "Let's build something that makes businesses run smarter."
              </blockquote>
              <footer className="mt-2 text-white/40 text-sm">
                — Hammad
              </footer>
            </motion.div>
          </div>
        ) : (
          /* Desktop Layout */
          <>
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link || '#'}
                  target={item.link ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredCard(item.label)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group bg-black/80 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover effect */}
                  {hoveredCard === item.label && (
                    <motion.div
                      layoutId="cardHover"
                      className="absolute inset-0 bg-white/[0.02] rounded-3xl"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-xl mb-4 text-2xl"
                      style={{
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {item.label}
                    </h4>
                    <p className="text-white/70 break-words">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center gap-8 mb-12"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5"
                  style={{ color: social.color }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <blockquote className="text-white/60 border-l-4 border-[#c5f9d7] pl-6 italic text-xl font-light max-w-2xl mx-auto">
                "Let's build something that makes businesses run smarter."
                <footer className="mt-4 text-white/40 text-base text-right">
                  — Hammad
                </footer>
              </blockquote>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
