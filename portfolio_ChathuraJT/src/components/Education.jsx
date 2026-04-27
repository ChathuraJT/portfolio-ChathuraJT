import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-indigo-400">Education</span> & Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 to-cyan-600 hidden md:block"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative">
                <div className={`md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="flex md:w-1/2 md:justify-end">
                    <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-950 border-4 border-indigo-600 rounded-full">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>

                    {/* Mobile dot */}
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="w-4 h-4 bg-indigo-600 rounded-full mt-2"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 ml-8 md:ml-0">
                    <div className="bg-gray-900 border border-gray-800 hover:border-indigo-600/50 rounded-lg p-6 transition">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                        </svg>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-indigo-400 font-semibold text-sm">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-3 font-medium">
                        {edu.year}
                      </p>

                      <p className="text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-800">
          <p className="text-gray-400 mb-4">
            Want to know more about my background?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
