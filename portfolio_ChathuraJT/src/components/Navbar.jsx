import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const selectedSection = pathname === '/certifications' ? 'education' : pathname === '/projects' ? 'projects' : activeSection;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.slice(1));
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (pathname !== '/') {
      navigate(`/${href}`);
      setIsOpen(false);
      return;
    }
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Chathura-Janaka-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled || pathname !== '/'
          ? `top-4 left-4 right-4 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-[calc(100%-2rem)] lg:max-w-6xl bg-white/95 backdrop-blur-md border border-gray-200 ${isOpen ? 'rounded-2xl' : 'rounded-full'}`
          : 'top-0 left-0 right-0 w-full bg-transparent border-b border-transparent pt-4 pb-2'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-[#10b981]"></div>
              <span className="relative z-10 text-white font-bold text-xl leading-none">C</span>
            </div>
            <a href="/" onClick={(event) => { event.preventDefault(); navigate('/'); window.scrollTo(0, 0); }} className="font-bold text-xl tracking-tight text-gray-900">
              Chathura JT
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={`/${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[13px] font-semibold transition-colors ${
                  selectedSection === link.href.slice(1)
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
              <FiDownload className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={`/${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-2 text-sm font-semibold transition ${
                  selectedSection === link.href.slice(1)
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="mt-4 flex w-full items-center justify-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            >
              Download CV
              <FiDownload className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
