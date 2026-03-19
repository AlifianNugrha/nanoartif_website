import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-card', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 80%',
        }
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const productList = [
    { name: 'LW250', range: '250 kW', image: 'https://images.unsplash.com/photo-1466611653911-95282ee3a021?auto=format&fit=crop&w=800' },
    { name: 'LW1.5', range: '1,500 kW', image: 'https://images.unsplash.com/photo-1548610762-7c6abc9d3b40?auto=format&fit=crop&w=800' },
    { name: 'LW4.2', range: '4,200 kW', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800' },
  ];

  return (
    <div ref={pageRef} className="animate-in fade-in duration-700">
      <Hero />
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="text-center mb-20">
          <span className="text-primary-blue font-bold uppercase text-[11px] tracking-widest mb-3 block">Our Turbine Portfolio</span>
          <h2 className="text-3xl md:text-6xl font-condensed font-bold text-black uppercase">POWERING PROGRESS</h2>
        </div>
        
        <div className="products-grid grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
          {productList.map((p, i) => (
            <div key={i} className="product-card group rounded-[30px] overflow-hidden bg-bg-light shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5">
              <div className="h-[300px] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black tracking-tight">{p.name}</h3>
                <p className="text-primary-blue font-bold mt-1 uppercase tracking-wider text-sm">{p.range}</p>
                <div className="mt-6 h-[1px] bg-black/5" />
                <button className="mt-6 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary-blue transition-colors cursor-pointer border-none bg-none outline-none">
                  Technical Data
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
