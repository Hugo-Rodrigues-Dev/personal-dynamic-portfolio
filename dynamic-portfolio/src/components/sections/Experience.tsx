import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { InteractiveCard } from '../layout/InteractiveCard';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative bg-white/5 py-24 backdrop-blur-sm">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(53,62,117,0.35),_transparent_65%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            {t.experience.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t.experience.title}</h2>
        </div>

        <div className="relative border-l border-slate-800/70 pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/80 via-brand-500/50 to-transparent" />
          <div className="space-y-10">
            {t.experience.items.map((item, index) => (
              <InteractiveCard
                as={motion.article}
                key={item.key}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl p-6 shadow-soft backdrop-blur"
              >
                <span className="absolute -left-11 top-7 flex h-7 w-7 items-center justify-center rounded-full border border-brand-400/60 bg-slate-950 text-xs font-semibold text-brand-200">
                  {index + 1}
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
                    {item.meta}
                  </p>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
