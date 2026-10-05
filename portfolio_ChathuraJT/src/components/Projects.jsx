import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink, FiGithub, FiGrid } from 'react-icons/fi';
import { projects } from '../data/projects';
import { CategoryFilter } from './Certificates';
import './Education.css';
import './Projects.css';

export function ProjectCard({ project }) {
  const hasRepository = /^https?:\/\//.test(project.githubLink || '');
  return <article className="project-card">
    <div className="project-image"><img src={`/${project.image}`} alt={`${project.title} preview`} loading="lazy" /></div>
    <div className="project-details">
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-technologies" aria-label={`${project.title} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <div className="project-actions">
        {hasRepository && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}><FiGithub /> GitHub <FiExternalLink /></a>}
      </div>
    </div>
  </article>;
}

export default function Projects() {
  const [category, setCategory] = useState('All');
  const filtered = projects.filter(project => category === 'All' || project.category === category);
  return <section id="projects" className="learning-section projects-section"><div className="learning-container">
    <header className="learning-heading"><h2>Featured <span>Projects</span></h2><p>A selection of the applications I have built, from full-stack platforms to mobile experiences.</p><span className="heading-line" /></header>
    <CategoryFilter items={projects} label="Projects" value={category} onChange={setCategory} />
    <div className="project-preview-grid">{filtered.slice(0, 4).map(project => <ProjectCard key={project.id} project={project} />)}</div>
    <Link className="view-certifications" to="/projects"><FiGrid /> View All Projects ({projects.length}) <FiArrowRight /></Link>
    <a className="project-github-profile" href="https://github.com/ChathuraJT" target="_blank" rel="noopener noreferrer"><FiGithub /> Visit My GitHub <FiExternalLink /></a>
  </div></section>;
}
