import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageSwitch } from './LanguageSwitch';

type ProjectBreadcrumbProps = {
  current: string;
};

export const ProjectHeader = ({ current }: ProjectBreadcrumbProps) => {
  const { t } = useTranslation();

  return (
    <header className="border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <nav
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400"
          aria-label={t.projectsDetail.common.breadcrumbLabel}
        >
          <Link
            to="/"
            className="rounded-full border border-transparent px-3 py-1 text-slate-200 transition hover:border-brand-400/60 hover:text-white"
          >
            {t.projectsDetail.common.breadcrumb.home}
          </Link>
          <span>/</span>
          <Link
            to={{ pathname: '/', hash: '#projects' }}
            className="rounded-full border border-transparent px-3 py-1 text-slate-200 transition hover:border-brand-400/60 hover:text-white"
          >
            {t.projectsDetail.common.breadcrumb.projects}
          </Link>
          <span>/</span>
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white">
            {current}
          </span>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden text-xs font-semibold uppercase tracking-wider text-slate-500 md:inline">
            {t.projectsDetail.common.headerLabel}
          </span>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
};
