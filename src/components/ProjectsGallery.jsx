import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Analytics Dashboard',
    desc: 'High‑frequency streams, smooth transitions, and holographic cards.',
    link: '#',
  },
  {
    title: '3D Product Visualizer',
    desc: 'Interactive R3F scenes and performant shaders with elegant UI.',
    link: '#',
  },
  {
    title: 'SaaS Platform',
    desc: 'Robust backend, authentication, and polished UI animations.',
    link: '#',
  },
];

function Card({ title, desc, link, i }) {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="group relative h-56 w-[22rem] flex-shrink-0 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 text-white backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 via-indigo-400/10 to-transparent" />
      </div>
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 max-w-sm text-sm text-neutral-300">{desc}</p>
        </div>
        <div className="flex items-center gap-2 text-cyan-300">
          <span className="text-sm">Live Preview</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsGallery() {
  return (
    <section id="projects" className="relative w-full bg-neutral-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Projects</h2>
          <p className="max-w-xl text-sm text-neutral-400">Horizontally scrolling holographic gallery with perspective depth.</p>
        </div>

        <div className="no-scrollbar relative -mx-6 overflow-x-auto px-6">
          <div className="flex w-max gap-6 [perspective:1200px]">
            {projects.map((p, idx) => (
              <Card key={p.title} title={p.title} desc={p.desc} link={p.link} i={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
