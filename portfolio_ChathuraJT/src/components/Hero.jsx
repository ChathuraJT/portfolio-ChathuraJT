import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { BsMouse } from 'react-icons/bs';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function Hero() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // file in /public
    link.download = 'Chathura-Janaka-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen pt-24 pb-12 overflow-hidden transition-colors duration-300 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {particlesReady && (
        <Particles
          id="hero-constellation"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 180,
                  links: { opacity: 0.6 },
                },
              },
            },
            particles: {
              color: { value: '#16a34a' },
              links: {
                color: '#16a34a',
                distance: 140,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                speed: 1.2,
              },
              number: {
                density: { enable: true, area: 900 },
                value: 70,
              },
              opacity: { value: 0.6 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      <div className="relative z-10 grid items-center max-w-6xl gap-12 px-4 py-12 mx-auto sm:px-6 lg:px-8 md:grid-cols-2">
        {/* Left side - Text content */}
        <div className="order-2 space-y-6 text-left animate-fade-in md:order-1">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
            Hi, I'm <span className="text-green-600 dark:text-green-400">Chathura Janaka</span>
          </h1>
          
          <p className="text-2xl font-light text-gray-600 dark:text-gray-300 md:text-3xl h-[40px]">
             <Typewriter
              words={['Front-End Developer','Full-Stack Developer', 'Mobile Application Developer']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          
          <p className="max-w-lg text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Hi, I'm an undergraduate IT student at the Sri Lanka Institute of Information Technology (SLIIT), But before you picture a student buried under textbooks and assignment deadlines, let me paint you a different picture.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white transition transform bg-gray-800 rounded-lg hover:bg-gray-900 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </button>
            
            <button
              onClick={handleContactMe}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-green-600 transition bg-white border border-green-200 rounded-lg dark:text-green-400 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-green-600/50 hover:border-gray-300 dark:hover:border-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right side - Profile Image and Social Icons */}
        <div className="relative flex items-center justify-center order-1 md:order-2">
          <div className="w-64 h-64 p-1 rounded-full shadow-2xl md:w-80 md:h-80 bg-gradient-to-br from-gray-700 to-gray-600 dark:from-gray-800 dark:to-gray-700 hover:shadow-gray-700/50">
            <div className="flex items-center justify-center w-full h-full overflow-hidden bg-white rounded-full dark:bg-gray-900 profile-picture-container">
              <img
                src="/fbpic.jpeg"
                alt="Chathura JT"
                className="object-cover w-full h-full profile-image"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
                }}
              />
              <img
                src="/profile-avatar.gif"
                alt="Chathura Avatar"
                className="object-cover w-full h-full profile-avatar-gif"
              />
            </div>
          </div>

          {/* Social Media Icons (Column wise, right side) */}
          <div className="absolute flex-col hidden gap-6 -right-4 md:-right-12 sm:flex">
            <a href="https://github.com/ChathuraJT" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition transform dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:scale-110">
              <FaGithub size={36} />
            </a>
            <a href="https://www.linkedin.com/in/chathura-janaka-536a63349/" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition transform dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:scale-110">
              <FaLinkedin size={36} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition transform dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:scale-110">
              <FaTwitter size={36} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition transform dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:scale-110">
              <FaFacebook size={36} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute text-gray-500 transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce dark:text-gray-400">
        <BsMouse size={28} />
      </div>
    </section>
  );
}
