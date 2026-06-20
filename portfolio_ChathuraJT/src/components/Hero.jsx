import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-between min-h-screen bg-[#f5f5f5] font-sans text-gray-900 overflow-hidden">

      {/* === BACKGROUND LAYER === */}

      {/* Ambient color blob - Pink/Rose top-left */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '-80px',
          left: '-60px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,182,193,0.55) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Ambient color blob - Blue/Teal top-center-right */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '-60px',
          right: '10%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(173,216,230,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Ambient color blob - Fuchsia/Purple bottom-right */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          bottom: '0px',
          right: '-60px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216,180,254,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Dot grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #b0b0b0 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.35,
        }}
      />

      {/* Grain/noise texture overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] mix-blend-multiply z-0" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Decorative dashed ring - top left (large, partially off screen) */}
      <svg className="absolute -top-40 -left-40 w-[600px] h-[600px] text-gray-400 pointer-events-none opacity-30 z-0" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3" />
      </svg>

      {/* Decorative dashed ring - bottom right (large, partially off screen) */}
      <svg className="absolute -bottom-40 -right-40 w-[600px] h-[600px] text-gray-400 pointer-events-none opacity-30 z-0" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3" />
      </svg>

      {/* Small solid decorative circle - right side */}
      <svg className="absolute top-1/4 right-12 w-[80px] h-[80px] text-gray-300 pointer-events-none opacity-60 z-0" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Centered Hero Body */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4">

        {/* Vertical social rail on the far left (hidden below md) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8">
          <a href="https://github.com/ChathuraJT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-700 hover:text-[#10b981] transition-transform hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/chathura-janaka-536a63349/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-[#10b981] transition-transform hover:scale-110">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-700 hover:text-[#10b981] transition-transform hover:scale-110">
            <FaTwitter size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-700 hover:text-[#10b981] transition-transform hover:scale-110">
            <FaFacebook size={20} />
          </a>
        </div>

        {/* Portrait image in arch shape */}
        <div className="relative w-[230px] h-[300px] md:w-[270px] md:h-[360px] mt-6 bg-gradient-to-b from-gray-200 to-gray-100 overflow-hidden" style={{ borderRadius: '150px 150px 0 0' }}>
          <img
            src="/fbpic.png"
            alt="Chathura Janaka"
            className="w-full h-full object-cover object-top grayscale"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
            }}
          />
        </div>

        {/* Name and Subtitle */}
        <div className="text-center mt-0 z-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#10b981]">
            Chathura Janaka
          </h1>
          <p className="mt-2 text-xs md:text-sm font-semibold tracking-[0.3em] text-gray-600 uppercase">
            Software Engineer // Full-Stack Developer
          </p>
          {/* Mobile-only Download CV button */}
          <div className="mt-6 flex justify-center md:hidden">
            <a
              href="/cv.pdf"
              download="Chathura-Janaka-CV.pdf"
              className="flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 hover:bg-[#10b981] focus:outline-none"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
