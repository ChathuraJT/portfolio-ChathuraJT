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
    <section className="flex items-center justify-center min-h-screen pt-24 pb-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="grid items-center max-w-6xl gap-12 px-4 py-12 mx-auto sm:px-6 lg:px-8 md:grid-cols-2">
        {/* Left side - Text content */}
        <div className="space-y-6 text-left animate-fade-in">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
            Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">Chathura Janaka</span>
          </h1>
          
          <p className="text-2xl font-light text-gray-600 dark:text-gray-300 md:text-3xl">
            Full-Stack Developer & Problem Solver
          </p>
          
          <p className="max-w-lg text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            I build beautiful, responsive web applications with modern technologies. 
            Passionate about creating seamless user experiences and clean code.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white transition transform bg-emerald-600 rounded-lg hover:bg-emerald-700 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </button>
            
            <button
              onClick={handleContactMe}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-emerald-600 dark:text-emerald-400 transition bg-white dark:bg-gray-800 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 border-emerald-200 dark:border-emerald-600/50 hover:border-emerald-400 dark:hover:border-emerald-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 p-1 transition rounded-full shadow-2xl md:w-80 md:h-80 bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 hover:shadow-emerald-500/50">
            <div className="flex items-center justify-center w-full h-full overflow-hidden bg-white dark:bg-gray-900 rounded-full">
              <img
                src="/fbpic.jpeg"
                alt="Chathura JT"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
