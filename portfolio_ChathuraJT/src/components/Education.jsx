import { education } from '../data/education';
import Certificates from './Certificates';
import { SectionBackground } from './About';

export default function Education() {
  return (
    <section id="education" className="relative py-16 overflow-hidden bg-[#f5f5f5]">
      <SectionBackground blobVariant="default" />

      <div className="relative z-10 max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            <span className="text-[#10b981]">Education & Certificates</span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#10b981] rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

          {/* Education Side */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-800 text-center lg:text-left">Education</h3>
            {/* Timeline */}
            <div className="relative mt-8 ml-4 space-y-8 border-l-2 border-gray-200 md:ml-6">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-10 md:pl-12">
                  {/* Timeline Node */}
                  <div className="absolute -left-[20px] md:-left-[24px] top-6 w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-[#f5f5f5] rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                    {edu.logo ? (
                      <img src={edu.logo} alt={edu.institution} className="object-cover w-full h-full p-1 bg-white" />
                    ) : (
                      <svg className="w-5 h-5 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="p-4 md:p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#10b981]/30 transition-all">
                    <h3 className="mb-1 text-base font-bold text-gray-900 md:text-lg">{edu.degree}</h3>
                    <p className="mb-1 text-sm font-semibold text-[#10b981]">{edu.institution}</p>
                    <p className="mb-2 text-xs text-gray-500">{edu.year}</p>
                    <p className="text-xs leading-relaxed text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Side */}
          <Certificates />

        </div>
      </div>
    </section>
  );
}
