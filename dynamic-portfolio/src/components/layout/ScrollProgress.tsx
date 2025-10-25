import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const ScrollProgress = () => {
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const updateProgress = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const maxScroll = scrollHeight - clientHeight;
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progress.set(Math.min(Math.max(ratio, 0), 1));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [progress]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-slate-900/20 backdrop-blur">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
};
