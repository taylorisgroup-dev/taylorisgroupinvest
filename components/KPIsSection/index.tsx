'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

// Données factices pour l'exemple (à remplacer par un appel API/Sanity plus tard)
const kpiData = [
  { id: 'revenue', label: 'CA Consolidé', value: 450, suffix: 'M€' },
  { id: 'ebitda', label: 'Marge EBITDA', value: 28, suffix: '%' },
  { id: 'subsidiaries', label: 'Filiales', value: 12, suffix: '' },
  { id: 'recurrence', label: 'Revenus Récurrents', value: 85, suffix: '%' },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function KPIsSection() {
  const t = useTranslations('Home');

  return (
    <section className="py-20 bg-navy-light border-t border-navy-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-navy-dark rounded-sm border border-navy-dark hover:border-gold/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 font-serif">
                <CountUp end={kpi.value} />{kpi.suffix}
              </div>
              <div className="text-slate-light font-sans text-sm uppercase tracking-wider">
                {t(`kpis.${kpi.id}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}