import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiHome, FiAward } from 'react-icons/fi';
import { certificates } from '../data/certificates';
import { CategoryFilter, CertificateCard } from './Certificates';
import { EducationHeading, EducationTimeline } from './Education';

export default function CertificationDashboard() {
  const [category, setCategory] = useState('All');
  const filtered = certificates.filter(cert => category === 'All' || cert.category === category);
  return <main className="learning-section certification-dashboard"><div className="learning-container">
    <nav className="learning-breadcrumb" aria-label="Breadcrumb"><Link to="/"><FiHome /> Home</Link><FiChevronRight /><Link to="/#education">Education</Link><FiChevronRight /><span>Dashboard</span></nav>
    <header className="dashboard-heading"><div><p className="learning-eyebrow">LEARNING & ACHIEVEMENTS</p><h1>Education & <span>Certifications</span></h1><p>Explore my academic journey, professional certifications, and the skills I am building along the way.</p></div><div className="dashboard-total"><FiAward /><strong>{certificates.length}</strong><span>Certifications earned</span></div></header>
    <div className="dashboard-layout"><aside className="dashboard-sidebar"><h2>Categories</h2><CategoryFilter sidebar value={category} onChange={setCategory} /></aside><section aria-label="Certifications"><div className="results-heading"><h2>{category === 'All' ? 'All Certifications' : category}</h2><p aria-live="polite">{filtered.length} {filtered.length === 1 ? 'credential' : 'credentials'}</p></div><div className="dashboard-certificate-grid">{filtered.map(cert => <CertificateCard key={cert.id} cert={cert} expanded />)}</div></section></div>
    <section className="dashboard-education" aria-label="Academic background"><EducationHeading /><EducationTimeline /></section>
  </div></main>;
}
