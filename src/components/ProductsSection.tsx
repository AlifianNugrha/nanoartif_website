import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function ProductsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const products = [
    {
      name: 'NANO-BOT',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200',
      specs: { 
        type: t({ ID: 'AI Chatbot', EN: 'AI Chatbot' }), 
        platform: 'Web / Mobile', 
        integration: 'API Ready', 
        focus: t({ ID: 'Otomasi', EN: 'Automation' }), 
        status: t({ ID: 'Tersedia', EN: 'Available' }) 
      },
      link: 'https://nanobot.nanoartif.my.id'
    },
    {
      name: t({ ID: 'SEGERA HADIR 1', EN: 'COMING SOON 1' }),
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200',
      specs: { 
        type: t({ ID: 'Proyek Rahasia', EN: 'Secret Project' }), 
        platform: 'TBA', 
        integration: 'TBA', 
        focus: t({ ID: 'Solusi AI', EN: 'AI Solutions' }), 
        status: t({ ID: 'Dalam Pengembangan', EN: 'In Development' }) 
      },
      link: '#'
    },
    {
      name: t({ ID: 'SEGERA HADIR 2', EN: 'COMING SOON 2' }),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
      specs: { 
        type: t({ ID: 'Proyek Rahasia', EN: 'Secret Project' }), 
        platform: 'TBA', 
        integration: 'TBA', 
        focus: t({ ID: 'Analitik', EN: 'Analytics' }), 
        status: t({ ID: 'Dalam Pengembangan', EN: 'In Development' }) 
      },
      link: '#'
    },
    {
      name: t({ ID: 'SEGERA HADIR 3', EN: 'COMING SOON 3' }),
      image: 'https://images.unsplash.com/photo-1510511459019-5bea12232df6?auto=format&fit=crop&w=1200',
      specs: { 
        type: t({ ID: 'Proyek Rahasia', EN: 'Secret Project' }), 
        platform: 'TBA', 
        integration: 'TBA', 
        focus: t({ ID: 'Keamanan', EN: 'Security' }), 
        status: t({ ID: 'Dalam Pengembangan', EN: 'In Development' }) 
      },
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
  }, [expandedIndex, t]);

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

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-20 text-center relative z-10">

        {/* Title & Info */}
        <div className={`transition-all duration-700 relative h-20 ${expandedIndex !== null ? 'opacity-0 h-0 mb-0 pointer-events-none' : 'mb-5'}`}>
          <p id="product-title-1" className="text-3xl text-black font-light leading-relaxed max-w-2xl mx-auto absolute inset-0">
            {t({ ID: 'memberdayakan masyarakat dengan otomasi cerdas', EN: 'empowering people with intelligent automation' })}
          </p>
          <p id="product-title-2" className="text-3xl text-black font-light leading-relaxed max-w-2xl mx-auto absolute inset-0 opacity-0">
            {t({ ID: 'mari berkolaborasi untuk menyelesaikan masalah dunia nyata', EN: 'let\'s collaborate to solve real-world problems' })}
          </p>
        </div>

        {/* 4 Cards Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-[550px] md:h-[450px] relative w-full overflow-x-hidden">
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
                  <img src={p.image} className="w-full h-full object-cover grayscale" alt={p.name as string} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Hover Blue Overlay */}
                <div className={`absolute inset-0 bg-primary-blue transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-90'}`}></div>

                {/* Normal Header View */}
                <div className={`absolute inset-0 px-6 py-8 md:px-10 md:py-12 flex flex-col justify-end text-left transition-all duration-500 overflow-hidden ${isActive ? 'opacity-0 -translate-y-10 scale-95 pointer-events-none' : 'opacity-100'}`}>
                  <h3 className={`text-2xl md:text-3xl lg:text-5xl font-condensed font-medium tracking-tight normal-case transition-transform group-hover:translate-x-4 mb-2 truncate ${(p.name as string).includes("COMING") || (p.name as string).includes("HADIR") ? "text-white/50" : "text-white"}`}>
                    {p.name}
                  </h3>
                  {((p.name as string).includes("COMING") || (p.name as string).includes("HADIR")) && <p className="text-[10px] md:text-xs font-bold text-white/50 tracking-widest uppercase transition-transform group-hover:translate-x-4">{t({ ID: 'Dalam Pengembangan', EN: 'In Development' })}</p>}
                </div>

                {/* Expanded State View (Matching Reference Image) */}
                {isActive && (
                  <div className="absolute inset-0 bg-secondary-blue p-6 md:p-10 lg:p-16 flex flex-col z-50 animate-in fade-in duration-700 text-left overflow-y-auto no-scrollbar">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-8 md:mb-16">
                      <h2 className="text-4xl md:text-6xl lg:text-8xl font-condensed font-bold text-white tracking-tighter uppercase leading-none truncate pr-4">
                        {p.name}
                      </h2>
                      <button onClick={(e) => { e.stopPropagation(); setExpandedIndex(null); }} className="min-w-[40px] w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-secondary-blue transition-all hover:scale-110 shadow-xl shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    </div>

                    {/* Specifications Grid */}
                    <div className="w-full">
                      <div className="flex flex-wrap md:flex-nowrap gap-8 pb-10 border-b border-white/20">
                        {[
                          { label: t({ ID: 'Tipe Produk', EN: 'Product Type' }), val: p.specs.type, icon: 'M13 2L3 14h9l-1 8 10-12h-9z' },
                          { label: 'Platform', val: p.specs.platform, icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
                          { label: 'Integration', val: p.specs.integration, icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z' },
                          { label: t({ ID: 'Fokus Area', EN: 'Focus Area' }), val: p.specs.focus, icon: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z' },
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
                      <div className="mt-8 md:mt-12 flex justify-start pb-6">
                        {(p.name as string).includes("COMING") || (p.name as string).includes("HADIR") ? (
                          <div className="text-[10px] md:text-xs font-bold text-white/40 tracking-[0.3em] uppercase">{t({ ID: 'TETAP PANTAU', EN: 'STAY TUNED' })}</div>
                        ) : (
                          <a href={p.link} className="group/link flex items-center gap-3 text-[10px] items-center md:text-xs font-bold text-white/40 tracking-[0.1em] md:tracking-[0.3em] uppercase hover:text-white transition-colors">
                            {t({ ID: 'PELAJARI LEBIH LANJUT', EN: 'LEARN MORE' })}
                            <svg className="transition-transform group-hover/link:translate-x-2 w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
