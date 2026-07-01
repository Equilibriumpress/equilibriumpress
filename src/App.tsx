import { motion } from 'framer-motion';
import DeviceScene from './components/DeviceScene';
import ProjectCard from './components/ProjectCard';
import SectionHeader from './components/SectionHeader';
import { processSteps, projects } from './data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function HeroWord({ children, dim = false, delay = 0 }: { children: string; dim?: boolean; delay?: number }) {
  return (
    <span className="word-wrap">
      <span className={dim ? 'dimmed' : ''} style={{ animationDelay: `${delay}s` }}>{children}</span>
    </span>
  );
}

export default function App() {
  return (
    <>
      <header className="site-header animate-fade-in">
        <a className="brand animate-slide-left" href="#top" aria-label="Equilibriumpress home">
          <span>EP</span>
          Equilibriumpress
        </a>
        <nav aria-label="Hoofdnavigatie" className="animate-fade-in delay-400">
          <a href="#apps">Apps</a>
          <a href="#proces">Proces</a>
          <a href="#werk">Werk</a>
          <a href="#deploy">Deploy</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Portfolio for map-first apps</p>
            <h1 className="hero-title" aria-label="Maps routes and apps built for exploration">
              <span className="hero-line">
                <HeroWord delay={0.25}>Maps,</HeroWord>
                <HeroWord delay={0.35}>routes</HeroWord>
              </span>
              <span className="hero-line">
                <HeroWord delay={0.45} dim>and</HeroWord>
                <HeroWord delay={0.55}>apps</HeroWord>
              </span>
              <span className="hero-line">
                <HeroWord delay={0.65}>built</HeroWord>
                <HeroWord delay={0.75} dim>for</HeroWord>
                <HeroWord delay={0.85}>exploration.</HeroWord>
              </span>
            </h1>
            <p className="intro">
              Equilibriumpress bouwt iOS-apps en webtools voor routes, kaarten, reisgidsen en publicatieflows.
            </p>
            <div className="actions animate-fade-up delay-600">
              <a className="button primary" href="#werk">Bekijk projecten</a>
              <a className="button secondary" href="https://github.com/Equilibriumpress/equilibriumpress">Open GitHub</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DeviceScene />
          </motion.div>
        </section>

        <section id="apps" className="hero-panels">
          <article className="hero-panel light animate-fade-up delay-900">
            <span>01</span>
            <h3>iOS route apps</h3>
            <p>Routekaarten, zoekflows, favorieten, lagen en detailpagina’s.</p>
          </article>
          <article className="hero-panel cream animate-fade-up delay-1000">
            <span>02</span>
            <h3>Map tools</h3>
            <p>GPX, kaartstijlen, posterdesign, video en exportflows.</p>
          </article>
          <article className="hero-panel dark animate-fade-up delay-1100">
            <span>03</span>
            <h3>App Store ready</h3>
            <p>Van prototype naar GitHub Pages, TestFlight en release.</p>
          </article>
        </section>

        <section id="proces" className="section-shell process-section">
          <SectionHeader eyebrow="Proces" title="Van idee naar live in vier stappen." />
          <div className="timeline">
            {processSteps.map(([number, title, text]) => (
              <motion.article
                className="timeline-item"
                key={number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5 }}
              >
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="werk" className="section-shell">
          <SectionHeader
            eyebrow="Werk"
            title="Projecten met kaarten, routes en publicatieflows."
            text="Eerste focus: echte appbeelden, korte cases en duidelijke technische context."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="deploy" className="section-shell deploy-card">
          <p className="eyebrow">Deploy</p>
          <h2>Klaar voor GitHub Pages.</h2>
          <p>
            De workflow bouwt de React-site met Vite en publiceert de map <code>dist</code> via GitHub Pages.
          </p>
          <a className="button primary" href="https://github.com/Equilibriumpress/equilibriumpress/actions">Bekijk Actions</a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Equilibriumpress</p>
        <a href="#top">Terug naar boven</a>
      </footer>
    </>
  );
}
