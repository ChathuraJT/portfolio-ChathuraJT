import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-gray-800 text-center lg:text-left">Certificates</h3>
      {/* Timeline */}
      <div className="relative mt-8 ml-4 space-y-8 border-l-2 border-gray-200 md:ml-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="relative pl-10 md:pl-12">
            {/* Timeline Node */}
            <div className="absolute -left-[20px] md:-left-[24px] top-6 w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-[#f5f5f5] rounded-full flex items-center justify-center overflow-hidden shadow-sm">
              <svg className="w-5 h-5 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>

            {/* Content Card */}
            <div className="p-4 md:p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#10b981]/30 transition-all flex flex-col sm:flex-row gap-4">
              {cert.image && (
                <div className="w-full sm:w-1/3 shrink-0">
                  <img src={`/${cert.image}`} alt={cert.title} className="object-cover w-full h-24 rounded shadow-sm border border-gray-100" />
                </div>
              )}
              <div className="flex-1">
                <h3 className="mb-2 text-base font-bold text-gray-900 md:text-lg">{cert.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: cert.description }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
