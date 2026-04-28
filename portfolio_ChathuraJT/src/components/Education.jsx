import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-16 transition-colors duration-300 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            <span className="text-green-600 dark:text-green-400">Education</span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-gray-800 to-gray-700"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-8 ml-4 space-y-8 border-l-2 border-gray-300 dark:border-gray-700 md:ml-6">
          
          {education.map((edu, index) => (
            <div key={edu.id} className="relative pl-10 md:pl-16">
              
              {/* Timeline Node (Icon/Logo) */}
              <div className="absolute -left-[20px] md:-left-[24px] top-6 w-10 h-10 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-950 rounded-full flex items-center justify-center overflow-hidden shadow-sm shadow-gray-400 dark:shadow-gray-900">
                {edu.logo ? (
                  <img src={edu.logo} alt={edu.institution} className="object-cover w-full h-full p-1 bg-white dark:bg-gray-900" />
                ) : (
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                )}
              </div>

              {/* Content Card */}
              <div className="p-5 transition-shadow bg-white border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-800 rounded-xl md:p-6 hover:shadow-md">
                <h3 className="mb-1 text-lg font-bold text-gray-900 md:text-xl dark:text-white">
                  {edu.degree}
                </h3>
                <p className="mb-1 text-base text-gray-800 dark:text-gray-200">
                  {edu.institution}
                </p>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {edu.year}
                </p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>

            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
