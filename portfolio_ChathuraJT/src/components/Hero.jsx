export default function Hero() {
  const handleDownloadCV = () => {
    // TODO: Replace with your actual CV file path
    console.log('Download CV clicked');
    // Example: window.open('/path/to/your/cv.pdf', '_blank');
  };

  const handleContactMe = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-left space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-indigo-400">Chathura JT</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Full-Stack Developer & Problem Solver
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            I build beautiful, responsive web applications with modern technologies. 
            Passionate about creating seamless user experiences and clean code.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </button>
            
            <button
              onClick={handleContactMe}
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-indigo-400 font-semibold py-3 px-8 rounded-lg transition border border-indigo-600/50 hover:border-indigo-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-600 p-1 shadow-2xl hover:shadow-indigo-500/50 transition">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Chathura JT"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
