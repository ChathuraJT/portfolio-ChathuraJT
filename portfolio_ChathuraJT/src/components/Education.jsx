import { FiBookOpen } from 'react-icons/fi';
import { education } from '../data/education';
import Certificates from './Certificates';
import './Education.css';

export function EducationTimeline() {
  return <div className="education-timeline">{education.map((edu, index) => (
    <article className={`education-entry ${index === 0 ? 'current' : ''}`} key={edu.id}>
      <span className="timeline-dot" />
      <div className="education-card">
        {edu.logo && <img className="institution-logo" src={edu.logo.startsWith('http') ? edu.logo : `/${edu.logo}`} alt={`${edu.institution} logo`} />}
        <span className="education-period">{edu.year}</span>
        <h4>{edu.degree}</h4>
        <p className="institution-name">{edu.institution}</p>
        {edu.description && <p className="education-description">{edu.description}</p>}
      </div>
    </article>
  ))}</div>;
}

export function EducationHeading() {
  return <div className="learning-column-heading"><span className="learning-icon"><FiBookOpen /></span><div><h3>Education</h3><p>My academic journey</p></div></div>;
}

export default function Education() {
  return <section id="education" className="learning-section">
    <div className="learning-container">
      <header className="learning-heading"><h2>Education & <span>Certifications</span></h2><p>My academic background and certifications that have helped me grow and stay up to date with the latest technologies.</p><span className="heading-line" /></header>
      <div className="learning-columns"><div><EducationHeading /><EducationTimeline /></div><div className="certifications-column"><Certificates /></div></div>
    </div>
  </section>;
}
