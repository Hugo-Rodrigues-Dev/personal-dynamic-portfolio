import { useEffect, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export const SiteFooter = () => {
  const { t } = useTranslation();
  const [year, setYear] = useState<string>(() => new Date().getFullYear().toString());

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400 sm:flex-row">
        <p>
          © {year} Hugo Rodrigues. <span>{t.footer.rights}</span>
        </p>
        <button
          type="button"
          onClick={handleBackToTop}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold text-slate-100 transition hover:border-brand-400/60 hover:bg-white/10"
        >
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  );
};
