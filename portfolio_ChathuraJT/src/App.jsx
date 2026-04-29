import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen text-gray-900 transition-colors duration-300 bg-gray-50 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      {/* <TechStack /> */}
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
