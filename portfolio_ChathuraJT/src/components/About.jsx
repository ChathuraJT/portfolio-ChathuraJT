
// Reusable background shared across all sections
export function SectionBackground({ blobVariant = 'default' }) {
  const blobs = {
    default: (
      <>
        <div className="absolute pointer-events-none z-0" style={{ top: '-80px', left: '-60px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,182,193,0.45) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute pointer-events-none z-0" style={{ bottom: '0px', right: '-60px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(216,180,254,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </>
    ),
    alt: (
      <>
        <div className="absolute pointer-events-none z-0" style={{ top: '-60px', right: '5%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(173,216,230,0.45) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute pointer-events-none z-0" style={{ bottom: '0px', left: '-40px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,182,193,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </>
    ),
  };

  return (
    <>
      {blobs[blobVariant] || blobs.default}
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle, #b0b0b0 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.3 }} />
      {/* Grain texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] mix-blend-multiply z-0" aria-hidden="true">
        <filter id={`noise-${blobVariant}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#noise-${blobVariant})`} />
      </svg>
      {/* Dashed ring top-left */}
      <svg className="absolute -top-40 -left-40 w-[500px] h-[500px] text-gray-400 pointer-events-none opacity-20 z-0" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3" />
      </svg>
      {/* Dashed ring bottom-right */}
      <svg className="absolute -bottom-40 -right-40 w-[500px] h-[500px] text-gray-400 pointer-events-none opacity-20 z-0" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3" />
      </svg>
    </>
  );
}

export default function About() {
  const bio = `Hi, I'm an undergraduate IT student at the Sri Lanka Institute of Information Technology (SLIIT), But before you picture a student buried under textbooks and assignment deadlines, let me paint you a different picture.
I'm the kind of developer who opens a browser and sees a canvas. Not a webpage. A canvas. A space where physics, light, shadow, animation, and interaction can collide into something that feels less like software and more like an experience you step into.
That obsession is what drives everything I build.`;

  const techTags = [
    'React.js', 'Next.js', 'Angular', 'HTML', 'Tailwind CSS',
    'CSS', 'Vanilla.js', 'JavaScript', 'Node.js', 'MongoDB',
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#f5f5f5]">
      <SectionBackground blobVariant="alt" />

      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl">
              About <span className="text-[#10b981]">Me</span>
            </h2>
            <div className="w-16 h-1 bg-[#10b981] rounded-full mx-auto"></div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-center leading-relaxed text-gray-700 whitespace-pre-line">
              {bio}
            </p>
          </div>

          {/* Tech Tags */}
          <div className="mt-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#10b981] bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-[#10b981]/40 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
