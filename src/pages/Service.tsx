import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        }
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const services = [
    { title: 'MAINTENANCE', icon: '🛠️', desc: 'Predictive and corrective maintenance programs.' },
    { title: 'SPARE PARTS', icon: '🔩', desc: 'Original spare parts for maximum durability.' },
    { title: 'MONITORING', icon: '💻', desc: '24/7 remote monitoring of turbine performance.' },
    { title: 'TRAINING', icon: '🎓', desc: 'Technical training for on-site personnel.' }
  ];

  return (
    <div ref={pageRef} className="animate-in fade-in duration-700">
      <Hero />
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="text-center mb-20">
          <span className="text-primary-blue font-bold uppercase text-[11px] tracking-widest mb-3 block">Our Maintenance & Support</span>
          <h2 className="text-4xl md:text-6xl font-condensed font-bold text-black uppercase">RELIABILITY THROUGH SERVICE</h2>
        </div>
        
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {services.map((s, i) => (
            <div key={i} className="service-card group text-center p-12 rounded-[40px] bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold text-primary-blue mb-4 tracking-wider">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
