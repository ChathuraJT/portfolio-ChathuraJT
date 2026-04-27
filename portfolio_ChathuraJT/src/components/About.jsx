export default function About() {
  const skills = [
    // Frontend
    'React', 'JavaScript', 'TypeScript', 'TailwindCSS', 'HTML/CSS',
    // Backend
    'Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL',
    // Tools
    'Git', 'Docker', 'VS Code', 'Figma', 'REST API',
  ];

  // TODO: Replace with your actual bio
  const bio = `I'm a passionate full-stack developer with 2+ years of experience building web applications. 
    I specialize in modern JavaScript frameworks and have a keen eye for UI/UX design. 
    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
    or sharing knowledge with the developer community.`;

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {bio}
            </p>
            
            <p className="text-gray-400 mb-6">
              I love turning complex problems into simple, beautiful, and intuitive designs. 
              My focus is always on creating products that are engaging and accessible to users.
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              <span className="text-indigo-400">Tech</span> Stack
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-800 hover:bg-indigo-600/20 hover:border-indigo-400 border border-gray-700 rounded-lg py-3 px-4 text-center transition group cursor-default"
                >
                  <p className="text-gray-300 font-semibold group-hover:text-indigo-400 transition">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">
              {/* TODO: Replace with your project count */}
              15+
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">
              {/* TODO: Replace with your experience */}
              2+
            </div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">
              {/* TODO: Replace with your achievement */}
              100%
            </div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
