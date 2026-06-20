import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SectionBackground } from './About';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send('service_mamahnm', 'template_d8ylcgs', {
        name: formData.name, email: formData.email, message: formData.message,
      }, '86j2hzMQ7SiYwm9Hb');
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
    }
  };

  const inputClass = "w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20 transition";

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#f5f5f5]">
      <SectionBackground blobVariant="alt" />
      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Get In <span className="text-[#10b981]">Touch</span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#10b981] rounded-full"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Your message here..." className={`${inputClass} resize-none`}></textarea>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-gray-900 rounded-lg hover:bg-[#10b981] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </button>
              {submitted && (
                <div className="px-4 py-3 text-center text-[#10b981] border border-[#10b981]/30 rounded-lg bg-[#10b981]/10">
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>

            {[
              { label: 'Email', value: 'chathurajanaka9@gmail.com', href: 'mailto:chathurajanaka9@gmail.com', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
              { label: 'Phone', value: '+94 72 4218 823', href: 'tel:+94724218823', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
              { label: 'Location', value: 'Malabe, Sri Lanka', href: null, icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></> },
            ].map(({ label, value, href, icon }) => (
              <div key={label} className="flex gap-4 group">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-[#10b981]/10 group-hover:bg-[#10b981] transition-colors">
                  <svg className="w-6 h-6 text-[#10b981] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-500">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold text-gray-900 hover:text-[#10b981] transition-colors break-all">{value}</a>
                  ) : (
                    <p className="font-semibold text-gray-900">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-gray-200">
              <p className="mb-4 text-gray-600 text-sm">Follow me on social media</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/ChathuraJT', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                  { href: 'https://www.linkedin.com/in/chathura-janaka-536a63349/', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                ].map(({ href, path }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#10b981] hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// email js =service_mamahnm