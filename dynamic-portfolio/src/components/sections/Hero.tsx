import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export const Hero = () => {
  const { t, language } = useTranslation();

  const heroCards = useMemo(() => {
    if (language === 'fr') {
      return [
        {
          id: 'ai',
          title: 'IA & Automatisation',
          description: 'LangChain · Azure OpenAI · Agents',
          gradient: 'from-violet-500/80 via-fuchsia-500/70 to-sky-400/80'
        },
        {
          id: 'web',
          title: 'Ingénierie Web',
          description: 'React 19 · Vite · Tailwind CSS',
          gradient: 'from-emerald-500/80 via-teal-400/70 to-cyan-500/80'
        },
        {
          id: 'robotics',
          title: 'Robotique & IoT',
          description: 'micro:bit · Android · UDP',
          gradient: 'from-orange-500/80 via-amber-400/70 to-rose-500/80'
        }
      ];
    }
    return [
      {
        id: 'ai',
        title: 'AI & Automation',
        description: 'LangChain · Azure OpenAI · Agents',
        gradient: 'from-violet-500/80 via-fuchsia-500/70 to-sky-400/80'
      },
      {
        id: 'web',
        title: 'Web Engineering',
        description: 'React 19 · Vite · Tailwind CSS',
        gradient: 'from-emerald-500/80 via-teal-400/70 to-cyan-500/80'
      },
      {
        id: 'robotics',
        title: 'Robotics & IoT',
        description: 'micro:bit · Android · UDP',
        gradient: 'from-orange-500/80 via-amber-400/70 to-rose-500/80'
      }
    ];
  }, [language]);

  return (
    <section id="hero" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_farthest-side_at_top,_rgba(93,108,246,0.45),_transparent)] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-200 shadow-soft">
            {t.hero.eyebrow}
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">{t.hero.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-200"
            >
              {t.hero.ctaProjects}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/70 hover:text-white"
            >
              <MessageSquare className="h-4 w-4" />
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            {(
              language === 'fr'
                ? [
                    { title: '2024 — 2027', subtitle: 'Alternance chez Orange France' },
                    { title: 'CPE Lyon', subtitle: 'Ingénierie Informatique' },
                    { title: 'Focus', subtitle: 'IA · Web · Robotique' }
                  ]
                : [
                    { title: '2024 — 2027', subtitle: 'Apprenticeship @ Orange France' },
                    { title: 'CPE Lyon', subtitle: 'Software Engineering' },
                    { title: 'Focus', subtitle: 'AI · Web · Robotics' }
                  ]
            ).map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 text-sm text-slate-300 backdrop-blur"
              >
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 justify-center">
          <motion.div
            className="pointer-events-none absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative grid w-full max-w-md gap-6">
            {heroCards.map((card, index) => (
              <motion.div
                key={card.id}
                animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                transition={{ delay: index * 0.4, duration: 6, repeat: Infinity, ease: 'easeInOut' as const }}
                className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-soft backdrop-blur"
              >
                <div
                  className={`mb-4 h-10 w-10 rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg`}
                />
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-slate-300">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
