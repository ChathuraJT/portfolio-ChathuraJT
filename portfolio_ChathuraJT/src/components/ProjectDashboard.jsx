import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiHome, FiGrid } from 'react-icons/fi';
import { projects } from '../data/projects';
import { CategoryFilter } from './Certificates';
import { ProjectCard } from './Projects';

export default function ProjectDashboard() {
  const [category, setCategory] = useState('All');
  const filtered = projects.filter(project => category === 'All' || project.category === category);
  return <main className="learning-section certification-dashboard project-dashboard"><div className="learning-container">
    <nav className="learning-breadcrumb" aria-label="Breadcrumb"><Link to="/"><FiHome /> Home</Link><FiChevronRight /><Link to="/#projects">Projects</Link><FiChevronRight /><span aria-current="page">Dashboard</span></nav>
    <header className="dashboard-heading"><div><p className="learning-eyebrow">IDEAS INTO APPLICATIONS</p><h1>All <span>Projects</span></h1><p>Explore my work across web, full-stack, and mobile development, including the technologies behind each project.</p></div><div className="dashboard-total"><FiGrid /><strong>{projects.length}</strong><span>Projects built</span></div></header>
    <div className="dashboard-layout"><aside className="dashboard-sidebar"><h2>Categories</h2><CategoryFilter sidebar items={projects} label="Projects" value={category} onChange={setCategory} /></aside><section aria-label="Projects"><div className="results-heading"><h2>{category === 'All' ? 'All Projects' : category}</h2><p aria-live="polite">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</p></div><div className="dashboard-project-grid">{filtered.map(project => <ProjectCard key={project.id} project={project} />)}</div></section></div>
  </div></main>;
}
