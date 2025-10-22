import clsx from 'clsx';
import { useTranslation } from '../../hooks/useTranslation';

export const LanguageSwitch = ({ variant = 'default' }: { variant?: 'default' | 'ghost' }) => {
  const { language, setLanguage, available, t } = useTranslation();

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold',
        variant === 'ghost'
          ? 'border-slate-700/50 bg-slate-900/60 text-slate-300'
          : 'border-slate-800/60 bg-slate-900/80 text-slate-200'
      )}
      role="group"
      aria-label={t.language.switchLabel}
    >
      {available.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={clsx(
            'rounded-full px-2.5 py-1 transition-colors',
            language === item
              ? 'bg-brand-500 text-white shadow-soft'
              : 'text-slate-400 hover:text-white'
          )}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
