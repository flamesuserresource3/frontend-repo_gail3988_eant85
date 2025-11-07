import { motion } from 'framer-motion';

export default function AboutScene() {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-28">
      {/* Abstract connected nodes background */}
      <div aria-hidden className="absolute inset-0">
        <svg className="h-full w-full opacity-20" viewBox="0 0 800 400" preserveAspectRatio="none">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(24)].map((_, i) => (
            <circle key={i} cx={(i * 33) % 800} cy={(i * 67) % 400} r={(i % 5) * 6 + 3} fill="url(#g)" />
          ))}
          {[...Array(12)].map((_, i) => (
            <line key={`l-${i}`} x1={(i * 66) % 800} y1={(i * 33) % 400} x2={((i + 3) * 66) % 800} y2={((i + 5) * 33) % 400} stroke="#22d3ee22" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30, blur: 6 }}
          whileInView={{ opacity: 1, x: 0, blur: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">About</h2>
          <p className="text-neutral-300 leading-relaxed">
            I craft elegant, scalable solutions across the stack — from reactive frontends to robust backend systems. My focus is performance,
            accessibility, and thoughtful motion that enhances clarity.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            I love shaping immersive experiences: real‑time 3D, data‑driven visuals, and smooth interactions that feel tactile. When the problem
            demands it, I dive deep into systems, APIs, and infrastructure to deliver reliable platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative h-72 w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 p-0.5 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent" />
          {/* Morphing shapes */}
          <div className="absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="absolute -right-10 top-1/3 h-40 w-40 rounded-full bg-indigo-400/20 blur-2xl" />
          <svg className="relative h-full w-full" viewBox="0 0 600 300" preserveAspectRatio="none">
            <path d="M0 150 Q150 60 300 150 T600 150" fill="none" stroke="#67e8f9" strokeOpacity="0.25" strokeWidth="2" />
            <path d="M0 160 Q150 90 300 160 T600 160" fill="none" stroke="#818cf8" strokeOpacity="0.2" strokeWidth="2" />
            <circle cx="300" cy="150" r="80" fill="#67e8f915" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
