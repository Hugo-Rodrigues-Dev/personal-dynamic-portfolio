import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { Education } from '../components/sections/Education';
import { Experience } from '../components/sections/Experience';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { useTranslation } from '../hooks/useTranslation';

export const HomePage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = 'Portfolio | Hugo Rodrigues';
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = t.meta.description;
    }
  }, [t.meta.description]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const section = document.querySelector(location.hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
};
