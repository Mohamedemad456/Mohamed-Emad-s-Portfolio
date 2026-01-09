import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-linear-to-r from-cyan-600 via-purple-600 to-emerald-600"
      style={{ scaleX }}
    />
  );
}

