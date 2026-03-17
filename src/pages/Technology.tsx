import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

export default function Technology() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('section').forEach((section: any) => {
        gsap.from(section.querySelectorAll('.reveal-item'), {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="animate-in fade-in duration-700">
      <Hero />
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
          <div className="reveal-item">
            <span className="text-primary-blue font-bold uppercase text-[11px] tracking-widest mb-3 block">The Heart of the System</span>
            <h2 className="text-4xl md:text-6xl font-condensed font-bold text-black uppercase mb-8 leading-[1.1]">DIRECT-DRIVE TECHNOLOGY</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our gearless technology provides unmatched reliability and efficiency. 
              By removing the gearbox, we reduce wear and maintenance costs while 
              maximizing energy yield.
            </p>
          </div>
          <div className="reveal-item rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" alt="Tech" className="w-full h-auto block" />
          </div>
        </div>
      </section>
    </div>
  );
}
