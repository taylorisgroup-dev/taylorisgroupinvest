'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    tag: 'Résultats',
    date: '15 Mai 2024',
    title: 'TAYLORIS Group annonce une croissance de 24% au T1 2024',
    link: '/performance'
  },
  {
    tag: 'Nomination',
    date: '02 Avril 2024',
    title: 'Nomination d\'un nouveau membre au Comité Exécutif',
    link: '/gouvernance'
  },
  {
    tag: 'Partenariat',
    date: '18 Mars 2024',
    title: 'Alliance stratégique avec un leader européen du secteur',
    link: '/these-investissement'
  }
];

export default function NewsSection() {
  const t = useTranslations('Home');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            {t('news.title')}
          </h2>
          <p className="font-sans text-slate max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block p-6 border border-slate-light hover:border-gold hover:shadow-lg transition-all duration-300 bg-slate-light/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold text-gold-dark bg-gold/10 rounded-full">
                  {item.tag}
                </span>
                <span className="text-xs text-slate">{item.date}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-dark mb-3 group-hover:text-gold-dark transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center text-gold font-medium text-sm">
                Lire la suite <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/actualites" className="inline-flex items-center text-navy-dark font-semibold hover:text-gold-dark transition-colors border-b-2 border-gold pb-1">
            Voir toutes les actualités <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}