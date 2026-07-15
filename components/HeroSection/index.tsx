'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Home');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-navy-dark z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 to-navy-dark/40 z-10" />
        {/* Remplacez src par votre vidéo optimisée plus tard */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-lg md:text-xl text-slate-light max-w-3xl mx-auto mb-10 font-light"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="/investors" 
            className="px-8 py-4 bg-gold text-navy-dark font-semibold rounded-sm hover:bg-gold-light transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a 
            href="/carrieres" 
            className="px-8 py-4 border border-white text-white font-semibold rounded-sm hover:bg-white hover:text-navy-dark transition-all duration-300 transform hover:-translate-y-1"
          >
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}