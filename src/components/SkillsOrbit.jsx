import { motion } from 'framer-motion';
import { Code2, Database, Boxes, Rocket, Package } from 'lucide-react';

const skills = [
  { name: 'Java', icon: Code2 },
  { name: 'Next.js', icon: Boxes },
  { name: 'Spring Boot', icon: Rocket },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Package },
];

function OrbitBadge({ name, Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-3 py-2 text-cyan-100 backdrop-blur-md">
      <Icon className="h-4 w-4 text-cyan-300" />
      <span className="text-sm font-medium">{name}</span>
      <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-indigo-400/0 opacity-0 transition group-hover:opacity-100" />
    </motion.div>
  );
}

export default function SkillsOrbit() {
  return (
    <section id="skills" className="relative w-full bg-neutral-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Skills</h2>
          <p className="max-w-xl text-sm text-neutral-400">Interactive nodes and subtle reflections emphasize a polished, glass‑like aesthetic.</p>
        </div>

        <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((s, i) => (
            <OrbitBadge key={s.name} name={s.name} Icon={s.icon} delay={i * 0.05} />
          ))}
        </div>

        {/* Rotating halo */}
        <div aria-hidden className="pointer-events-none relative mt-14 h-40 w-full">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 shadow-[0_0_60px_10px_rgba(34,211,238,0.08)]" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-xl" />
        </div>
      </div>
    </section>
  );
}
