import { motion } from 'framer-motion';
import DeviceScene from './components/DeviceScene';
import ProjectCard from './components/ProjectCard';
import SectionHeader from './components/SectionHeader';
import { processSteps, projects } from './data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Equilibriumpress home">
          <span>EP</span>
          Equilibriumpress
        </a>
        <nav aria-label="Hoofdnavigatie">
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
            <p className="eyebrow">Premium app studio</p>
            <h1>Websites en apps die snel live gaan.</h1>
            <p className="intro">
              Equilibriumpress bouwt compacte digitale producten met kaarten, routes, 3D-presentatie en een publicatieflow via GitHub Pages, Vercel, TestFlight en App Store.
            </p>
            <div className="actions">
              <a className="button primary" href="#werk">Bekijk projecten</a>
              <a className="button secondary" href="https://github.com/Equilibriumpress/equilibriumpress">Open GitHub</a>
            </div>
            <div className="stats" aria-label="Kernpunten">
              <div><strong>React</strong><span>Vite + TypeScript</span></div>
              <div><strong>3D</strong><span>React Three Fiber</span></div>
              <div><strong>Pages</strong><span>GitHub Actions</span></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <DeviceScene />
          </motion.div>
        </section>

        <section id="apps" className="section-shell">
          <SectionHeader
            eyebrow="Focus"
            title="Een moderne basis voor app showcases."
            text="De site is opgebouwd als productstudio: visueel sterk, snel aanpasbaar en klaar voor echte screenshots, cases en links."
          />
          <div className="feature-grid">
            {['3D hero', 'Motion design', 'Responsive cards'].map((item, index) => (
              <motion.article
                className="feature-card"
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="feature-index">0{index + 1}</span>
                <h3>{item}</h3>
                <p>
                  {index === 0 && 'Een interactieve 3D-preview in de hero, geschikt voor apppresentatie en productgevoel.'}
                  {index === 1 && 'Subtiele animaties met Framer Motion, zonder zware visuele ruis.'}
                  {index === 2 && 'Sterke mobile layout, nette spacing en componenten die je makkelijk uitbreidt.'}
                </p>
              </motion.article>
            ))}
          </div>
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
            text="Deze voorbeelden staan nu als content in de site. Later vervang je ze door echte screenshots en links."
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
            De workflow bouwt de React-site met Vite en publiceert de map <code>dist</code> via GitHub Pages. Activeer Pages met GitHub Actions als bron.
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
