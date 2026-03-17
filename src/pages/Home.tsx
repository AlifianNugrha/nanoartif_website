import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Title Animation
      gsap.from('.hero-content h1', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      });

      // Section Reveals
      gsap.utils.toArray('.home-reveal').forEach((el: any) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        });
      });
    }, homeRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={homeRef} className="animate-in fade-in duration-700">
      <Hero />
      
      {/* Introduction */}
      <section className="py-24 px-6 md:px-20 bg-white home-reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
           <div className="reveal-item">
              <span className="text-primary-blue font-bold uppercase text-[11px] tracking-widest mb-3 block">Welcome to Nanoartif</span>
              <h2 className="text-4xl md:text-6xl font-condensed leading-[1.1] mb-8 text-black uppercase font-bold">PIONEERING THE NEXT GENERATION OF WIND ENERGY.</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Experience the power of direct-drive technology and modular design. 
                We are building a sustainable future, one turbine at a time.
              </p>
              <Link to="/technology" className="inline-block px-8 py-3 bg-primary-blue text-white rounded-full font-bold uppercase text-[13px] tracking-wider hover:bg-black transition-all no-underline mt-4 shadow-lg shadow-primary-blue/20">
                Explore Our Technology
              </Link>
           </div>
           <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img className="w-full h-auto block hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1548610762-7c6abc9d3b40?auto=format&fit=crop&w=1200" alt="Wind Farm" />
           </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="bg-bg-light py-24 px-6 md:px-20 home-reveal">
        <div className="text-center mb-20">
          <span className="text-primary-blue font-bold uppercase text-[11px] tracking-widest mb-3 block">Why Nanoartif?</span>
          <h2 className="text-4xl md:text-6xl font-condensed leading-[1.1] text-black uppercase font-bold">ENGINEERING EXCELLENCE</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {[
            { icon: '⚙️', title: 'GEARLESS TECH', desc: 'Unmatched reliability and reduced maintenance costs.' },
            { icon: '🧩', title: 'MODULAR DESIGN', desc: 'Customized solutions for the most challenging terrains.' },
            { icon: '🌿', title: 'SUSTAINABILITY', desc: 'Committed to the UN Sustainable Development Goals.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[30px] border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 text-center group">
              <span className="text-5xl block mb-6 group-hover:scale-110 transition-transform">{item.icon}</span>
              <h4 className="font-condensed font-bold text-xl mb-3 tracking-wide">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary-blue py-32 px-6 text-center text-white home-reveal relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466611653911-95282ee3a021?auto=format&fit=crop&w=1920')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-condensed font-bold mb-8 tracking-tighter">READY TO HARNESS THE WIND?</h2>
            <p className="text-lg md:text-xl font-light text-white/70 max-w-2xl mx-auto mb-12">
              Join us in the energy transition. Our experts are ready to help you design 
              your next wind project.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link to="/company" className="px-10 py-4 bg-primary-blue text-white rounded-full font-bold uppercase text-[13px] tracking-wider hover:bg-white hover:text-primary-blue transition-all no-underline shadow-xl shadow-primary-blue/20">Learn About Us</Link>
              <Link to="/references" className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-full font-bold uppercase text-[13px] tracking-wider hover:bg-white hover:text-secondary-blue transition-all no-underline">See References</Link>
            </div>
          </div>
      </section>
    </div>
  );
}
