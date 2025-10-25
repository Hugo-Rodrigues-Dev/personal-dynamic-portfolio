import clsx from 'clsx';
import { useTranslation } from '../../hooks/useTranslation';

export const LanguageSwitch = ({ variant = 'default' }: { variant?: 'default' | 'ghost' }) => {
  const { language, setLanguage, available, t } = useTranslation();

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold',
        variant === 'ghost'
          ? 'border-white/10 bg-transparent text-slate-200'
          : 'border-white/15 bg-white/10 text-white backdrop-blur'
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
