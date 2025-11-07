import { motion } from 'framer-motion';

export default function ContactGlass() {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-28">
      {/* 3D rotating globe substitute (soft neon ring) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="h-80 w-80 rounded-full border border-cyan-400/20 shadow-[0_0_120px_20px_rgba(34,211,238,0.07)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <h2 className="mb-8 text-center text-3xl font-semibold text-white sm:text-4xl">Get in touch</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-neutral-400">Name</label>
              <input className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-white outline-none ring-1 ring-transparent transition focus:ring-cyan-400/40" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-400">Email</label>
              <input type="email" className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-white outline-none ring-1 ring-transparent transition focus:ring-cyan-400/40" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm text-neutral-400">Message</label>
            <textarea rows="5" className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-white outline-none ring-1 ring-transparent transition focus:ring-cyan-400/40" placeholder="Tell me about your project..." />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-3 text-neutral-400">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
              <a href="mailto:hello@example.com" className="transition hover:text-cyan-300">Email</a>
            </div>
            <button type="button" className="rounded-lg bg-cyan-500/20 px-4 py-2 text-cyan-100 ring-1 ring-cyan-400/40 transition hover:bg-cyan-500/30">Send</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
