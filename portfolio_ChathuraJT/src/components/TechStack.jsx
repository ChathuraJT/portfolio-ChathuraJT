export default function TechStack() {
  const skills = [
    { name: 'React.js', percentage: 90, color: 'bg-red-500' },
    { name: 'Next.js', percentage: 90, color: 'bg-yellow-500' },
    { name: 'Angular', percentage: 90, color: 'bg-orange-500' },
    { name: 'HTML', percentage: 95, color: 'bg-green-500' },
    { name: 'Tailwind CSS', percentage: 95, color: 'bg-gray-600' },
    { name: 'CSS', percentage: 95, color: 'bg-pink-600' },
    { name: 'Vanilla.js', percentage: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 90, color: 'bg-indigo-500' },
    { name: 'Node.js', percentage: 85, color: 'bg-gray-700' },
    { name: 'MongoDB', percentage: 80, color: 'bg-gray-600' },
  ];

  return (
    <section id="tech-stack" className="relative py-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="relative z-10 max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            <span className="text-green-600 dark:text-green-400">Tech</span> Stack
          </h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-gray-800 to-gray-700"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 md:p-5 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:bg-gray-900 dark:border-gray-800 dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase w-4 text-center">
                      {skill.name.charAt(0)}
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {skill.percentage}%
                  </span>
                </div>
                
                {/* Progress Bar Background */}
                <div className="w-full h-2.5 bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden">
                  {/* Progress Bar Fill */}
                  <div 
                    className={`h-full rounded-full ${skill.color}`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}