import { SectionBackground } from './About';

export default function TechStack() {
  const skills = [
    { name: 'React.js', percentage: 90 },
    { name: 'Next.js', percentage: 90 },
    { name: 'Angular', percentage: 90 },
    { name: 'HTML', percentage: 95 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'CSS', percentage: 95 },
    { name: 'Vanilla.js', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'MongoDB', percentage: 80 },
  ];

  return (
    <section id="tech-stack" className="relative py-16 overflow-hidden bg-[#f5f5f5]">
      <SectionBackground blobVariant="default" />
      <div className="relative z-10 max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            <span className="text-[#10b981]">Tech</span> Stack
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#10b981] rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 md:p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-[#10b981]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981] text-xs font-bold">
                    {skill.name.charAt(0)}
                  </span>
                  <span className="text-base font-bold text-gray-900">{skill.name}</span>
                </div>
                <span className="text-xs font-semibold text-[#10b981]">{skill.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-[#10b981]" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}