import { useEffect, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export const SiteFooter = () => {
  const { t } = useTranslation();
  const [year, setYear] = useState<string>(() => new Date().getFullYear().toString());

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400 sm:flex-row">
        <p>
          © {year} Hugo Rodrigues. <span>{t.footer.rights}</span>
        </p>
        <a
          href="#hero"
          className="rounded-full border border-slate-800/70 px-4 py-2 font-semibold text-slate-200 transition hover:border-brand-400/60 hover:text-white"
        >
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
};
