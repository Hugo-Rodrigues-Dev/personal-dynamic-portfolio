import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { InteractiveCard } from '../layout/InteractiveCard';

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            {t.education.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t.education.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.education.items.map((item, index) => (
            <InteractiveCard
              as={motion.article}
              key={item.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl p-6 shadow-soft backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-200">
                {item.meta}
              </p>
              <p className="mt-4 text-sm text-slate-300">{item.description}</p>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
};
