import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className={`project-visual ${project.accent}`} />
      <p className="label">{project.type}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </motion.article>
  );
}
