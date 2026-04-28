export default function About() {
  const skills = [
    // Frontend
    'React', 'JavaScript', 'TypeScript', 'TailwindCSS', 'HTML/CSS',
    // Backend
    'Node.js', 'Express', 'Python', 'MongoDB',
    // Tools
    'Git', 'VS Code', 'Figma', 'REST API',
  ];

  // Bio
  const bio = `I'm a Undergraduate of Sri Lanka Institute of Information Technology, passionate full-stack developer with 2+ years of experience building web applications. 
    I specialize in modern JavaScript frameworks and have a keen eye for UI/UX design.`;

  return (
    <section id="about" className="relative py-24 transition-colors duration-300 about-background">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-white/60 to-transparent dark:from-black dark:via-black/70 dark:to-transparent"></div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-left">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Bio Text */}
            <div>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {bio}
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                <span className="text-emerald-600 dark:text-emerald-400">Tech</span> Stack
              </h3>
              
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 text-center transition border border-gray-200 rounded-lg cursor-default bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-emerald-50 dark:hover:bg-emerald-600/20 hover:border-emerald-400 dark:hover:border-emerald-400 dark:border-gray-700 group"
                  >
                    <p className="text-sm font-semibold text-gray-700 transition dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid gap-8 pt-12 mt-16 border-t border-gray-200 md:grid-cols-3 dark:border-gray-800">
            <div className="text-left">
              <div className="mb-1 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                15+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            
            <div className="text-left">
              <div className="mb-1 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                2+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            
            <div className="text-left">
              <div className="mb-1 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                100%
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
