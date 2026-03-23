import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 100;
      const pos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-target py-24 md:py-32 bg-[#F0EEEC] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 text-center relative z-10">
        <div className="cta-content max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-black tracking-tight leading-[1.1] normal-case mb-6">
            {t({ 
              ID: 'Butuh solusi custom untuk bisnis Anda?', 
              EN: 'Need a custom solution for your business?' 
            })}
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            {t({ 
              ID: 'Tim ahli kami siap membantu merancang dan membangun sistem serta aplikasi yang sesuai dengan kebutuhan unik perusahaan Anda.',
              EN: 'Our expert team is ready to help design and build systems and applications tailored to your company\'s unique needs.'
            })}
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 bg-primary-blue text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-300 cursor-pointer border-none group"
          >
            {t({ ID: 'Konsultasi Gratis Sekarang', EN: 'Consult for Free Now' })}
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
