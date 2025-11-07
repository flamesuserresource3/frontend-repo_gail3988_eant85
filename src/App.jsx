import Hero3D from './components/Hero3D';
import AboutScene from './components/AboutScene';
import SkillsOrbit from './components/SkillsOrbit';
import ProjectsGallery from './components/ProjectsGallery';
import ContactGlass from './components/ContactGlass';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Hero3D />
      <AboutScene />
      <SkillsOrbit />
      <ProjectsGallery />
      <ContactGlass />
      <footer className="relative overflow-hidden bg-neutral-950 py-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-cyan-500/10 to-transparent blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-neutral-400">
          <div>© {new Date().getFullYear()} Oussama Amyay</div>
          <nav className="flex gap-4">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
