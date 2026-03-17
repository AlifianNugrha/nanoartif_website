import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProductsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const products = [
    {
      name: 'NANO-BOT',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200',
      specs: { type: 'AI Chatbot', platform: 'Web / Mobile', integration: 'API Ready', focus: 'Automation', status: 'Available' },
      link: 'https://nanobot.nanoartif.my.id'
    },
    {
      name: 'COMING SOON 1',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200',
      specs: { type: 'Secret Project', platform: 'TBA', integration: 'TBA', focus: 'AI Solutions', status: 'In Development' },
      link: '#'
    },
    {
      name: 'COMING SOON 2',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
      specs: { type: 'Secret Project', platform: 'TBA', integration: 'TBA', focus: 'Analytics', status: 'In Development' },
      link: '#'
    },
    {
      name: 'COMING SOON 3',
      image: 'https://images.unsplash.com/photo-1510511459019-5bea12232df6?auto=format&fit=crop&w=1200',
      specs: { type: 'Secret Project', platform: 'TBA', integration: 'TBA', focus: 'Security', status: 'In Development' },
      link: '#'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Create a timeline for the entrance sequence (auto-play)
      const tl = gsap.timeline({ paused: true });

      // 1. Slide up the blue shape (Auto animation)
      tl.to(shapeRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut"
      });

      // 2. Animate cards entrance
      const cards = gsap.utils.toArray<HTMLElement>('.portfolio-card');
      tl.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scale: 0.95,
        ease: "power3.out",
        immediateRender: false
      }, "-=0.6");

      // Pin and trigger
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeaveBack: () => tl.reverse() // Reverse if user scrolls back up
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="section-target py-20 bg-white overflow-hidden min-h-screen flex items-center justify-center relative"
    >
      {/* Slide-up shape overlay */}
      <div
        ref={shapeRef}
        className="absolute inset-0 bg-secondary-blue z-[60] transform-gpu"
      ></div>

      <div className="max-w-[1600px] w-full mx-auto px-10 md:px-20 text-center relative z-10">

        {/* Title & Info */}
        <div className={`transition-all duration-700 relative h-20 ${expandedIndex !== null ? 'opacity-0 h-0 mb-0 pointer-events-none' : 'mb-5'}`}>
          <p id="product-title-1" className="text-3xl text-black font-light leading-relaxed max-w-2xl mx-auto absolute inset-0">
            empowering society with intelligent automation
          </p>
          <p id="product-title-2" className="text-3xl text-black font-light leading-relaxed max-w-2xl mx-auto absolute inset-0 opacity-0">
            let's collaborate to solve real-world problems
          </p>
        </div>

        {/* 4 Cards Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-[350px] md:h-[450px] relative">
          {products.map((p, i) => {
            const isActive = expandedIndex === i;
            const isAnyActive = expandedIndex !== null;
            const isHidden = isAnyActive && !isActive;

            return (
              <div
                key={i}
                onClick={() => !isActive && setExpandedIndex(i)}
                className={`portfolio-card relative rounded-[20px] overflow-hidden group shadow-lg transition-all duration-700 ease-in-out cursor-pointer ${isActive
                  ? 'flex-[10] cursor-default'
                  : isHidden
                    ? 'flex-[0] opacity-0 pointer-events-none'
                    : 'flex-[1]'
                  }`}
              >
                {/* Background Image (Static View) */}
                <div className={`absolute inset-0 transition-all duration-1000 ${isActive ? 'opacity-0 scale-105' : 'opacity-100 group-hover:scale-110'}`}>
                  <img src={p.image} className="w-full h-full object-cover grayscale" alt={p.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Hover Blue Overlay */}
                <div className={`absolute inset-0 bg-primary-blue transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-90'}`}></div>

                {/* Normal Header View */}
                <div className={`absolute inset-0 px-10 py-12 flex flex-col justify-end text-left transition-all duration-500 ${isActive ? 'opacity-0 -translate-y-10 scale-95 pointer-events-none' : 'opacity-100'}`}>
                  <h3 className={`text-4xl md:text-5xl font-condensed font-medium tracking-tight normal-case transition-transform group-hover:translate-x-4 mb-2 ${p.name.includes("COMING") ? "text-white/50" : "text-white"}`}>
                    {p.name}
                  </h3>
                  {p.name.includes("COMING") && <p className="text-xs font-bold text-white/50 tracking-widest uppercase transition-transform group-hover:translate-x-4">In Development</p>}
                </div>

                {/* Expanded State View (Matching Reference Image) */}
                {isActive && (
                  <div className="absolute inset-0 bg-secondary-blue p-10 md:p-16 flex flex-col z-50 animate-in fade-in duration-700 text-left">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-16">
                      <h2 className="text-6xl md:text-8xl font-condensed font-bold text-white tracking-tighter uppercase leading-none">
                        {p.name}
                      </h2>
                      <button onClick={(e) => { e.stopPropagation(); setExpandedIndex(null); }} className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-secondary-blue transition-all hover:scale-110 shadow-xl">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    </div>

                    {/* Specifications Grid */}
                    <div className="w-full">
                      <div className="flex flex-wrap md:flex-nowrap gap-8 pb-10 border-b border-white/20">
                        {[
                          { label: 'Product Type', val: p.specs.type, icon: 'M13 2L3 14h9l-1 8 10-12h-9z' },
                          { label: 'Platform', val: p.specs.platform, icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
                          { label: 'Integration', val: p.specs.integration, icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z' },
                          { label: 'Focus Area', val: p.specs.focus, icon: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z' },
                          { label: 'Status', val: p.specs.status, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
                        ].map((spec, idx) => (
                          <div key={idx} className="flex-1 min-w-[150px] space-y-6">
                            <div className="flex items-center gap-3">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><path d={spec.icon} /></svg>
                              <span className="text-white/60 font-bold uppercase text-[10px] tracking-widest">{spec.label}</span>
                            </div>
                            <div className="text-white text-xl md:text-2xl font-bold tracking-tight">{spec.val}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-12 flex justify-start">
                        {p.name.includes("COMING") ? (
                          <div className="text-xs font-bold text-white/40 tracking-[0.3em] uppercase">STAY TUNED</div>
                        ) : (
                          <a href={p.link} className="group/link flex items-center gap-3 text-xs font-bold text-white/40 tracking-[0.3em] uppercase hover:text-white transition-colors">
                            LEARN MORE ABOUT NANOBOT
                            <svg className="transition-transform group-hover/link:translate-x-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes slideIn {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
