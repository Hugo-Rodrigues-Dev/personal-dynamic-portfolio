import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { InteractiveCard } from '../layout/InteractiveCard';

export const Skills = () => {
  const { t } = useTranslation();
  const groups = Object.entries(t.skills.groups);

  return (
    <section id="skills" className="relative bg-white/5 py-24 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top,_rgba(93,108,246,0.18),_transparent)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            {t.skills.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t.skills.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map(([key, group], index) => (
            <InteractiveCard
              as={motion.article}
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-6 rounded-3xl p-8 shadow-soft backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {group.items.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
};
