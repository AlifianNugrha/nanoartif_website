import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

export default function Sustainability() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sdg-card', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sdg-grid',
          start: 'top 80%',
        }
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const sdgs = [
    { num: '7', title: 'AFFORDABLE AND CLEAN ENERGY', icon: '🔋', color: '#fcc30b' },
    { num: '9', title: 'INDUSTRY, INNOVATION AND INFRASTRUCTURE', icon: '🏗️', color: '#f36d25' },
    { num: '10', title: 'REDUCED INEQUALITIES', icon: '🤝', color: '#e11484' },
    { num: '15', title: 'LIFE ON LAND', icon: '🌱', color: '#56c02b' }
  ];

  return (
    <div ref={pageRef} className="animate-in fade-in duration-700">
      <Hero />
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="text-center mb-20">
          <span className="text-primary-blue font-bold uppercase text-[11px] tracking-widest mb-3 block">Our Sustainability Strategy</span>
          <h2 className="text-4xl md:text-6xl font-condensed font-bold text-black uppercase">NANOARTIF FOR SDGS</h2>
        </div>
        
        <div className="sdg-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {sdgs.map((s, i) => (
            <div key={i} className="sdg-card group bg-white rounded-[40px] p-12 text-center shadow-sm hover:shadow-2xl transition-all duration-500 border-b-[10px] border-black/5" style={{ borderBottomColor: s.color }}>
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-extrabold mb-4" style={{ color: s.color }}>SDG No.{s.num}</h3>
              <p className="text-sm font-bold text-gray-700 leading-relaxed">{s.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
