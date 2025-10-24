import { useEffect } from 'react';
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

  useEffect(() => {
    document.title = 'Portfolio | Hugo Rodrigues';
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = t.meta.description;
    }
  }, [t.meta.description]);

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
