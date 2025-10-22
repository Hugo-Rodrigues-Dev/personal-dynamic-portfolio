import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[2fr,3fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            {t.about.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t.about.title}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-lg text-slate-300"
        >
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
        </motion.div>
      </div>
    </section>
  );
};
