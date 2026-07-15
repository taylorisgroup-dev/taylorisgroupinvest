'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Déterminer la langue actuelle et l'autre langue
  const currentLang = pathname.startsWith('/en') ? 'en' : 'fr';
  const otherLang = currentLang === 'fr' ? 'en' : 'fr';
  const otherLangPath = pathname.replace(`/${currentLang}`, `/${otherLang}`);

  const navLinks = [
    { href: `/${currentLang}`, label: currentLang === 'fr' ? 'Accueil' : 'Home' },
    { href: `/${currentLang}/gouvernance`, label: currentLang === 'fr' ? 'Gouvernance' : 'Governance' },
    { href: `/${currentLang}/these-investissement`, label: currentLang === 'fr' ? 'Thèse d\'Investissement' : 'Investment Thesis' },
    { href: `/${currentLang}/performance`, label: currentLang === 'fr' ? 'Performance' : 'Results' },
    { href: `/${currentLang}/carrieres`, label: currentLang === 'fr' ? 'Carrières' : 'Careers' },
    { href: `/${currentLang}/contact`, label: currentLang === 'fr' ? 'Contact' : 'Contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${currentLang}`} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
              <span className="text-navy-dark font-serif font-bold text-xl">T</span>
            </div>
            <span className="text-white font-serif font-semibold text-xl tracking-wide">
              TAYLORIS GROUP
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-slate-light hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Switcher de langue */}
            <Link
              href={otherLangPath}
              className="flex items-center space-x-1 text-slate-light hover:text-white transition-colors"
            >
              <Globe size={16} />
              <span className="text-xs uppercase">{otherLang}</span>
            </Link>

            {/* CTA Investisseurs */}
            <Link
              href={`/${currentLang}/investors`}
              className="px-5 py-2 bg-gold text-navy-dark text-sm font-semibold rounded-sm hover:bg-gold-light transition-all duration-300"
            >
              {currentLang === 'fr' ? 'Espace Investisseurs' : 'Investor Area'}
            </Link>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-navy-light border-t border-white/10"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium ${
                  pathname === link.href ? 'text-gold' : 'text-slate-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-white/10" />
            <Link
              href={otherLangPath}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 text-slate-light"
            >
              <Globe size={16} />
              <span className="uppercase">Switch to {otherLang}</span>
            </Link>
            <Link
              href={`/${currentLang}/investors`}
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 bg-gold text-navy-dark text-center font-semibold rounded-sm"
            >
              {currentLang === 'fr' ? 'Espace Investisseurs' : 'Investor Area'}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}