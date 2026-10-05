import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiExternalLink, FiGrid } from 'react-icons/fi';
import { certificates } from '../data/certificates';

export function CategoryFilter({ value, onChange, sidebar = false, items = certificates, label = 'Certifications' }) {
  const categories = ['All', ...new Set(items.map(item => item.category))];
  return <div className={sidebar ? 'category-sidebar' : 'category-pills'} aria-label={`${label} categories`}>{categories.map(category => (
    <button key={category} type="button" aria-pressed={value === category} className={value === category ? 'selected' : ''} onClick={() => onChange(category)}>
      {category === 'All' && sidebar ? `All ${label}` : category}
      {sidebar && <span>{category === 'All' ? items.length : items.filter(item => item.category === category).length}</span>}
    </button>
  ))}</div>;
}

export function CertificateCard({ cert, expanded = false }) {
  return <article className={`certificate-card ${expanded ? 'expanded' : ''}`}>
    <a className="credential-image" href={`/${cert.image}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title} credential`}><img src={`/${cert.image}`} alt={`${cert.title} certificate`} loading="lazy" /></a>
    <div className="credential-details"><span className={`category-badge ${cert.category.toLowerCase().replaceAll(' ', '-')}`}>{cert.category}</span><h4>{cert.title}</h4><p>{cert.provider}</p>
      {expanded && <><p className="credential-description">{cert.description}</p><div className="credential-actions"><a href={`/${cert.image}`} target="_blank" rel="noopener noreferrer">View Credential <FiExternalLink /></a>{cert.verificationUrl && <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">Verify <FiExternalLink /></a>}</div></>}
    </div>
  </article>;
}

export default function Certificates() {
  const [category, setCategory] = useState('All');
  const filtered = certificates.filter(cert => category === 'All' || cert.category === category);
  return <>
    <div className="learning-column-heading"><span className="learning-icon"><FiAward /></span><div><h3>Certifications</h3><p>Professional certifications and achievements</p></div><div className="certification-count"><strong>{certificates.length}</strong><span>Certifications</span></div></div>
    <CategoryFilter value={category} onChange={setCategory} />
    <div className="certificate-preview-grid">{filtered.slice(0, 6).map(cert => <CertificateCard key={cert.id} cert={cert} />)}</div>
    <Link className="view-certifications" to="/certifications"><FiGrid /> View All Certifications ({certificates.length}) <FiArrowRight /></Link>
  </>;
}
