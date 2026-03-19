import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function ProductsSection() {
  const { t } = useLanguage();

  const products = [
    {
      name: 'Nanobot',
      description: t({ 
        ID: 'Asisten AI cerdas untuk otomasi operasional bisnis Anda 24/7.',
        EN: 'Smart AI assistant for automating your business operations 24/7.'
      }),
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200',
      link: 'https://nanobot.nanoartif.my.id'
    },
    {
      name: t({ ID: 'SEGERA HADIR 1', EN: 'COMING SOON 1' }),
      description: t({ 
        ID: 'Platform analitik data berbasis AI untuk wawasan bisnis yang tajam.',
        EN: 'AI-driven data analytics platform for sharp business insights.'
      }),
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200',
      link: '#'
    },
    {
      name: t({ ID: 'SEGERA HADIR 2', EN: 'COMING SOON 2' }),
      description: t({ 
        ID: 'Sistem otomasi industri yang mengintegrasikan mesin dengan AI.',
        EN: 'Industrial automation system integrating machines with AI.'
      }),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
      link: '#'
    },
    {
      name: t({ ID: 'SEGERA HADIR 3', EN: 'COMING SOON 3' }),
      description: t({ 
        ID: 'Layanan keamanan cyber tingkat lanjut dengan pengawasan AI.',
        EN: 'Advanced cyber security services with AI surveillance.'
      }),
      image: 'https://images.unsplash.com/photo-1510511459019-5bea12232df6?auto=format&fit=crop&w=1200',
      link: '#'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.to(shapeRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut"
      });

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

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeaveBack: () => tl.reverse()
      });

    }, containerRef);
    return () => ctx.revert();
  }, [t]);

  return (
    <section
      id="products"
      ref={containerRef}
      className="section-target py-20 bg-white overflow-hidden min-h-screen flex items-center justify-center relative"
    >
      <div
        ref={shapeRef}
        className="absolute inset-0 bg-secondary-blue z-[60] transform-gpu"
      ></div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-20 text-center relative z-10">

        {/* Title Area */}
        <div className="mb-12 relative h-16">
          <p className="text-2xl md:text-3xl text-black font-light leading-relaxed max-w-2xl mx-auto absolute inset-0 text-center tracking-tight">
            {t({ ID: 'memberdayakan masyarakat dengan otomasi cerdas', EN: 'empowering people with intelligent automation' })}
          </p>
        </div>

        {/* 4 Hover-Expanding Cards Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-[550px] md:h-[480px] relative w-full overflow-x-hidden pt-4">
          {products.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target={p.link !== '#' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="portfolio-card flex-1 relative rounded-[28px] overflow-hidden group shadow-lg transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer hover:flex-[2.2]"
            >
              {/* Image Container with Zoom Effect */}
              <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-110">
                <img src={p.image} className="w-full h-full object-cover" alt={p.name as string} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              </div>

              {/* Blue Filter Overlay on Hover */}
              <div className="absolute inset-0 bg-primary-blue transition-opacity duration-700 opacity-0 group-hover:opacity-30"></div>

              {/* Info Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col justify-end text-left transition-all duration-500 overflow-hidden">
                <span className="text-white text-[8px] font-bold uppercase tracking-[0.4em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 delay-75">Product Portfolio</span>
                
                <h3 className="text-xl lg:text-3xl font-condensed font-bold text-white tracking-tight mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                  {p.name}
                </h3>
                
                {/* Short Description: Visible on Hover */}
                <p className="text-white/70 text-sm font-light leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mb-6 transition-all duration-700 overflow-hidden line-clamp-2">
                  {p.description}
                </p>
                
                {/* CTA Link Indicator */}
                {p.link !== '#' ? (
                  <div className="flex items-center gap-3 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150 border-t border-white/10 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t({ ID: 'Kunjungi Produk', EN: 'Visit Product' })}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                ) : (
                  <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase truncate border-t border-white/10 pt-4">{t({ ID: 'Coming Soon', EN: 'Coming Soon' })}</p>
                )}
              </div>
              
              {/* Visual Decorative Bar */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-primary-blue w-0 group-hover:w-full transition-all duration-700"></div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
