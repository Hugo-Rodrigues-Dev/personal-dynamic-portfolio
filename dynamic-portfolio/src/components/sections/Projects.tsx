import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectLinks } from '../../content/projects';
import type { ProjectKey } from '../../content/projects';
import { useTranslation } from '../../hooks/useTranslation';

const cardKeys: ProjectKey[] = ['job', 'python', 'iot'];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              {t.projects.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">{t.projects.title}</h2>
          </div>
          <a
            href="https://github.com/Hugo-Rodrigues-Dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-slate-800/70 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/60 hover:text-white"
          >
            <Github className="h-4 w-4" />
            {t.projects.cta}
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardKeys.map((key, index) => {
            const card = t.projects.cards[key];
            const meta = projectLinks[key];
            const detail = t.projectsDetail[key];
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex h-full flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 shadow-soft backdrop-blur"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-200">
                      {card.tags[0]}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{card.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-800/70 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={meta.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-brand-400/60 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    {card.code}
                  </a>
                  <Link
                    to={`/projects/${detail.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
                  >
                    {card.more}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
