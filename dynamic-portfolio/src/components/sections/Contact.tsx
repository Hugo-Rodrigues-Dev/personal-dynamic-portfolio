import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_bottom,_rgba(93,108,246,0.18),_transparent)]" />
      <div className="mx-auto max-w-4xl rounded-[40px] border border-slate-800/70 bg-slate-950/80 p-12 text-center shadow-soft backdrop-blur">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/assets/images/Avatar.png"
            alt={t.contact.avatarAlt}
            className="h-24 w-24 rounded-full border border-slate-700/60 bg-slate-900 object-cover"
          />
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            {t.contact.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white">{t.contact.title}</h2>
          <p className="text-sm text-slate-300">{t.contact.intro}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/hugo-rdg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-slate-800/70 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/70 hover:text-white"
                aria-label={t.contact.linkedin}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Hugo-Rodrigues-Dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-slate-800/70 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/70 hover:text-white"
                aria-label={t.contact.github}
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:rodrigueshugo39@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-slate-800/70 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/70 hover:text-white"
                aria-label={t.contact.email}
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
