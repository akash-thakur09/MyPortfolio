import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  controls: ReturnType<typeof useAnimation>;
  inView: boolean;
}

export const useScrollAnimation = (threshold = 0.2, triggerOnce = true): UseScrollAnimationReturn => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else if (!triggerOnce) {
      controls.start('initial');
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, inView };
};
