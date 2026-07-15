'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = {
  fr: [
    { name: 'Gouvernance', href: '/gouvernance' },
    { name: 'Thèse d\'Investissement', href: '/these-investissement' },
    { name: 'Performance', href: '/performance' },
    { name: 'Carrières', href: '/carrieres' },
    { name: 'Contact', href: '/contact' },
  ],
  en: [
    { name: 'Governance', href: '/governance' },
    { name: 'Investment Thesis', href: '/investment-thesis' },
    { name: 'Performance', href: '/results' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact-us' },
  ],
};

export default function Header() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'fr';
  const currentLang = locale === 'en' ? 'en' : 'fr';
  const items = navItems[currentLang as keyof typeof navItems];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-gold tracking-wider">
              TAYLORIS GROUP
            </h1>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-light hover:text-gold transition-colors duration-300 text-sm font-medium uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <Link
              href={pathname.replace(`/${locale}`, locale === 'fr' ? '/en' : '/fr')}
              className="text-xs font-bold text-white border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition"
            >
              {locale === 'fr' ? 'EN' : 'FR'}
            </Link>
            <Link
              href={`/${locale}/investors/login`}
              className="bg-gold text-navy font-bold px-5 py-2 rounded-sm hover:bg-gold-light transition-colors duration-300 text-sm"
            >
              Espace Investisseurs
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}