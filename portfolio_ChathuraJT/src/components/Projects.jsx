import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-emerald-400 dark:hover:border-emerald-600 transition transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col"
            >
              {/* Placeholder for project image */}
              <div className="h-48 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-10 transition"></div>
                <div className="text-gray-600 dark:text-gray-300 text-center text-sm font-semibold">
                  Project Screenshot
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-white dark:bg-gray-700/50 hover:bg-emerald-50 dark:hover:bg-emerald-600/30 text-emerald-600 dark:text-emerald-300 text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600/50 hover:border-emerald-400 dark:hover:border-emerald-600/50 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-gray-900 dark:text-white hover:text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                  
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 font-semibold py-3 px-8 rounded-lg transition border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600"
          >
            {/* TODO: Replace with your GitHub profile URL */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
