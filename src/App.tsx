import { motion } from 'framer-motion';
import DeviceScene from './components/DeviceScene';
import { projects } from './data/projects';

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
  const featuredProject = projects[0];

  return (
    <>
      <header className="site-header animate-fade-in">
        <a className="brand animate-slide-left" href="#top" aria-label="Equilibriumpress home">
          <span>EP</span>
          Equilibriumpress
        </a>
        <nav aria-label="Hoofdnavigatie" className="animate-fade-in delay-400">
          <a href="#apps">Apps</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell app-hero">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Equilibriumpress</p>
            <h1 className="hero-title" aria-label="Beautiful apps for travel maps and discovery">
              <span className="hero-line"><HeroWord delay={0.25}>Beautiful</HeroWord></span>
              <span className="hero-line"><HeroWord delay={0.35}>apps</HeroWord><HeroWord delay={0.45} dim>for</HeroWord></span>
              <span className="hero-line"><HeroWord delay={0.55}>travel,</HeroWord><HeroWord delay={0.65}>maps</HeroWord></span>
              <span className="hero-line"><HeroWord delay={0.75} dim>&</HeroWord><HeroWord delay={0.85}>discovery.</HeroWord></span>
            </h1>
            <p className="intro">Een portfolio van iOS-apps en webtools voor routes, kaarten, reisgidsen en visuele publicatieflows.</p>
            <div className="actions animate-fade-up delay-600">
              <a className="button primary" href="#apps">Bekijk apps</a>
              <a className="button secondary" href="#contact">Contact</a>
            </div>
          </motion.div>
          <motion.div
            className="hero-device-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DeviceScene />
          </motion.div>
        </section>

        <section id="apps" className="featured-app section-shell">
          <div className="featured-media">
            <img src={featuredProject.image} alt={`${featuredProject.title} screenshot`} />
          </div>
          <div className="featured-copy">
            <p className="eyebrow">Featured app</p>
            <h2>{featuredProject.title}</h2>
            <p>{featuredProject.description}</p>
            <div className="project-tags">
              {featuredProject.metrics?.map(metric => <span key={metric}>{metric}</span>)}
            </div>
            <div className="actions">
              <a className="button primary" href="#contact">Vraag demo</a>
              <a className="button secondary" href="https://github.com/Equilibriumpress">GitHub</a>
            </div>
          </div>
        </section>

        <section className="portfolio-list section-shell">
          <div className="portfolio-heading">
            <p className="eyebrow">App portfolio</p>
            <h2>Selected apps and tools.</h2>
          </div>
          {projects.map((project, index) => (
            <motion.article
              className="app-row"
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <div className={`app-row-visual ${project.accent}`}>
                {project.image ? <img src={project.image} alt={`${project.title} screenshot`} /> : null}
              </div>
              <div className="app-row-copy">
                <p className="label">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.metrics?.map(metric => <span key={metric}>{metric}</span>)}
                  {project.status ? <span>{project.status}</span> : null}
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <section id="about" className="about-section section-shell">
          <p className="eyebrow">About</p>
          <h2>Small apps, sharp focus.</h2>
          <p>Equilibriumpress werkt aan compacte producten met duidelijke flows, sterke kaarten en een premium iOS-gevoel. Eerst de kernervaring. Daarna pas uitbreiding.</p>
        </section>

        <section id="contact" className="contact-section section-shell">
          <h2>Let’s build beautiful travel apps.</h2>
          <div className="actions">
            <a className="button primary" href="https://github.com/Equilibriumpress">GitHub</a>
            <a className="button secondary" href="mailto:marcel.petersen.nl@gmail.com">Email</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Equilibriumpress</p>
        <a href="#top">Terug naar boven</a>
      </footer>
    </>
  );
}
