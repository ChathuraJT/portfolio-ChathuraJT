import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CertificationDashboard from './components/CertificationDashboard';
import ProjectDashboard from './components/ProjectDashboard';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return (
    <div className="min-h-screen text-gray-900 transition-colors duration-300 bg-gray-50 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <Routes>
      <Route path="/certifications" element={<CertificationDashboard />} />
      <Route path="/projects" element={<ProjectDashboard />} />
      <Route path="*" element={<>
      <Hero />
      <About />
      {/* <TechStack /> */}
      <Education />
      <Projects />
      <Contact />
      </>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
