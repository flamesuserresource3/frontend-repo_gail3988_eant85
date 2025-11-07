import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero3D() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.8, 0.6]);

  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = ((e.clientX - w / 2) / w) * 10;
      const y = ((e.clientY - h / 2) / h) * 10;
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic gradient lighting overlays (do not block pointer) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="select-none bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl md:text-7xl">
          Oussama Amyay — Full Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base text-neutral-300 sm:text-lg">
          Building immersive, performant web experiences with modern full‑stack engineering and cinematic 3D interactions.
        </motion.p>
        <motion.div
          style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
          className="mt-10 flex items-center gap-4">
          <a href="#projects" className="rounded-full bg-cyan-500/20 px-5 py-2 text-cyan-200 backdrop-blur-md ring-1 ring-cyan-400/40 transition hover:bg-cyan-500/30 hover:ring-cyan-300">
            View Projects
          </a>
          <a href="#contact" className="rounded-full bg-white/5 px-5 py-2 text-white/90 backdrop-blur-md ring-1 ring-white/10 transition hover:bg-white/10">
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle floor reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-950/80 to-transparent" />
    </section>
  );
}
