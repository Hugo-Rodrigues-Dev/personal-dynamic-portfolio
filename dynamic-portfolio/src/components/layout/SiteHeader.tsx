import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageSwitch } from './LanguageSwitch';

const navTargets = ['about', 'skills', 'projects', 'experience', 'education', 'contact'] as const;

export const SiteHeader = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 64);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = navTargets.map((key) => ({
    key,
    label: t.nav[key],
    href: `#${key}`
  }));

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-transparent transition-all duration-300 ${
        isScrolled ? 'border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-lg shadow-slate-900/40' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold text-white">
          <img
            src="/assets/images/HugoGrandeTailleLogo.png"
            alt={t.logo.alt}
            className="h-10 w-10 rounded-full border border-slate-700/60 bg-slate-900/80 object-cover"
          />
          <span className="hidden sm:inline">Hugo Rodrigues</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitch />
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-100 transition-colors hover:border-brand-400/60 hover:text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? t.header.navClose : t.header.navToggle}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-slate-900/80 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
              <LanguageSwitch variant="ghost" />
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={handleNavClick}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-brand-500/60 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <Link
                to="/projects/job-application-tracking"
                onClick={handleNavClick}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-brand-500/60 hover:bg-white/10"
              >
                Job Application Tracking
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
