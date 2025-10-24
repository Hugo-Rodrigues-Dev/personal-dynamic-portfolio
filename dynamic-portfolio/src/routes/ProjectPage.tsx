import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projectLinks } from '../content/projects';
import type { ProjectDetailKey } from '../content/translations';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { ProjectHeader } from '../components/layout/ProjectHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { useTranslation } from '../hooks/useTranslation';

const projectOrder: ProjectDetailKey[] = ['job', 'python', 'iot'];

const RichText = ({ value }: { value: string }) => (
  <span
    className="[&_code]:rounded [&_code]:bg-slate-900/70 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-brand-200"
    dangerouslySetInnerHTML={{ __html: value }}
  />
);

export const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const projectKey = useMemo<ProjectDetailKey | undefined>(() => {
    return projectOrder.find(
      (key) => t.projectsDetail[key].slug === slug
    );
  }, [slug, t.projectsDetail]);

  const detail = projectKey ? t.projectsDetail[projectKey] : undefined;

  useEffect(() => {
    if (detail) {
      document.title = detail.titleTag;
      const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (metaDescription) {
        metaDescription.content = detail.metaDescription;
      }
    }
  }, [detail]);

  if (!projectKey || !detail) {
    return <Navigate to="/" replace />;
  }

  const meta = projectLinks[projectKey];

  const renderSpecificSections = () => {
    switch (projectKey) {
      case 'job': {
        const jobDetail = t.projectsDetail.job;
        return (
          <>
            <section className="py-20">
              <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
                <div className="md:col-span-1 space-y-4">
                  <h2 className="text-2xl font-semibold text-white">{jobDetail.overview.title}</h2>
                  <p className="text-sm text-slate-300">{jobDetail.overview.intro}</p>
                </div>
                <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
                  {[jobDetail.overview.problem, jobDetail.overview.solution, jobDetail.overview.result].map(
                    (block) => (
                      <div
                        key={block.title}
                        className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300"
                      >
                        <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                        <p className="mt-3">
                          <RichText value={block.body} />
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>

            <section className="bg-slate-950/60 py-20">
              <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[2fr,1fr]">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">{jobDetail.features.title}</h2>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {jobDetail.features.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                        <RichText value={item} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-brand-400/30 bg-brand-500/10 p-6 text-sm text-slate-200 shadow-soft">
                  <h3 className="text-lg font-semibold text-white">{jobDetail.features.stack.title}</h3>
                  <p className="mt-3">
                    <RichText value={jobDetail.features.stack.body} />
                  </p>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[2fr,1fr]">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">{jobDetail.next.title}</h2>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {jobDetail.next.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300">
                  <h3 className="text-lg font-semibold text-white">{jobDetail.next.support.title}</h3>
                  <p className="mt-3">{jobDetail.next.support.body}</p>
                </div>
              </div>
            </section>
          </>
        );
      }
      case 'python': {
        const pythonDetail = t.projectsDetail.python;
        return (
          <>
            <section className="py-20">
              <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[2fr,1fr]">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">{pythonDetail.structure.title}</h2>
                  <p className="text-sm text-slate-300">{pythonDetail.structure.intro}</p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[pythonDetail.structure.basics, pythonDetail.structure.data, pythonDetail.structure.algorithms].map(
                      (block) => (
                        <div
                          key={block.title}
                          className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300"
                        >
                          <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                          <p className="mt-3">{block.body}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="rounded-3xl border border-brand-400/30 bg-brand-500/10 p-6 text-sm text-slate-200 shadow-soft">
                  <p>{detail.hero.media}</p>
                </div>
              </div>
            </section>

            <section className="bg-slate-950/60 py-20">
              <div className="mx-auto max-w-6xl space-y-6 px-6">
                <h2 className="text-2xl font-semibold text-white">{pythonDetail.takeaways.title}</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {pythonDetail.takeaways.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="mx-auto max-w-6xl space-y-8 px-6">
                <h2 className="text-2xl font-semibold text-white">{pythonDetail.roadmap.title}</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {[pythonDetail.roadmap.phase5, pythonDetail.roadmap.phase6, pythonDetail.roadmap.phase7].map(
                    (phase) => (
                      <div
                        key={phase.title}
                        className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300"
                      >
                        <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                        <ul className="mt-3 space-y-2">
                          {phase.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
          </>
        );
      }
      case 'iot': {
        const iotDetail = t.projectsDetail.iot;
        return (
          <>
            <section className="py-20">
              <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[2fr,1fr]">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">{iotDetail.architecture.title}</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[iotDetail.architecture.connection, iotDetail.architecture.selection, iotDetail.architecture.dashboard].map(
                      (block) => (
                        <div
                          key={block.title}
                          className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300"
                        >
                          <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                          <p className="mt-3">{block.body}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="rounded-3xl border border-brand-400/30 bg-brand-500/10 p-6 text-sm text-slate-200 shadow-soft">
                  <p>{detail.hero.media}</p>
                </div>
              </div>
            </section>

            <section className="bg-slate-950/60 py-20">
              <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-semibold text-white">{iotDetail.features.title}</h2>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {iotDetail.features.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-lg font-semibold text-white">{iotDetail.features.ux.title}</h3>
                  <p className="text-sm text-slate-300">{iotDetail.features.ux.body}</p>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[2fr,1fr]">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">{iotDetail.next.title}</h2>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {iotDetail.next.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300">
                  <h3 className="text-lg font-semibold text-white">{iotDetail.next.lessons.title}</h3>
                  <p className="mt-3">{iotDetail.next.lessons.body}</p>
                </div>
              </div>
            </section>
          </>
        );
      }
      default:
        return null;
    }
  };

  return (
    <>
      <ScrollProgress />
      <ProjectHeader current={detail.breadcrumb.current} />
      <main className="bg-slate-950 pt-12 text-slate-200">
        <section className="py-12">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[3fr,2fr]">
            <div className="space-y-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
              >
                <ArrowLeft className="h-4 w-4" />
                {detail.hero.ctaBack}
              </Link>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white">{detail.hero.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {detail.hero.meta.map((metaItem) => (
                    <span
                      key={metaItem}
                      className="rounded-full border border-brand-500/40 bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-100"
                    >
                      {metaItem}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-300">{detail.hero.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={meta.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-brand-200"
                >
                  <Github className="h-4 w-4" />
                  {detail.hero.ctaCode}
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 px-5 py-2 text-xs font-semibold text-slate-200 transition hover:border-brand-400/60 hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  {t.projectsDetail.common.breadcrumb.projects}
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-10 text-sm text-slate-300 shadow-soft backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{t.projectsDetail.common.headerLabel}</h3>
              <p className="mt-4">{detail.hero.media}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {detail.hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-800/70 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {renderSpecificSections()}
      </main>
      <SiteFooter />
    </>
  );
};
