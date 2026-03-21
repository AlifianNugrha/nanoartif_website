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
    
    // Check if it's desktop
    const isDesktop = window.innerWidth >= 1024;

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

      if (isDesktop) {
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
      } else {
        // Entrance animation for mobile
        gsap.to(shapeRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        });
      }

    }, containerRef);
    return () => ctx.revert();
  }, [t]);

  return (
    <section
      id="products"
      ref={containerRef}
      className="section-target py-20 lg:py-0 bg-white overflow-hidden lg:min-h-screen flex items-center justify-center relative"
    >
      <div
        ref={shapeRef}
        className="absolute inset-0 bg-secondary-blue z-[60] transform-gpu"
      ></div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-20 text-center relative z-10">

        {/* Title Area */}
        <div className="mb-12 lg:mb-20 px-4">
          <p className="text-xl md:text-3xl text-black font-light leading-snug lg:leading-[1.1] max-w-2xl mx-auto tracking-tight normal-case">
            {t({ ID: 'memberdayakan masyarakat dengan otomasi cerdas', EN: 'empowering people with intelligent automation' })}
          </p>
        </div>

        {/* Responsive Container: Free Horizontal Scroll on Mobile, Flex on Desktop */}
        <div className="flex flex-row overflow-x-auto lg:overflow-x-hidden gap-6 lg:gap-4 lg:h-[480px] w-full pt-4 pb-8 lg:pb-0 no-scrollbar items-stretch">
          {products.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target={p.link !== '#' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="portfolio-card relative flex-shrink-0 w-[70vw] sm:w-[50vw] lg:w-auto lg:flex-1 rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-lg transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer lg:hover:flex-[2.2] aspect-[3/4] lg:aspect-auto"
            >
              {/* Image Container */}
              <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-110">
                <img src={p.image} className="w-full h-full object-cover" alt={p.name as string} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              </div>

              {/* Blue Filter */}
              <div className="absolute inset-0 bg-primary-blue transition-opacity duration-700 opacity-0 group-hover:opacity-30"></div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10 flex flex-col justify-end text-left transition-all duration-500 overflow-hidden">
                <span className="text-white text-[8px] font-bold uppercase tracking-[0.4em] mb-3 opacity-0 lg:group-hover:opacity-100 transition-opacity translate-y-2 lg:group-hover:translate-y-0 delay-75 hidden lg:block">Product Portfolio</span>
                
                <h3 className="text-2xl lg:text-3xl font-condensed font-bold text-white tracking-tight mb-3 lg:mb-2 transition-transform duration-500 lg:group-hover:-translate-y-1">
                  {p.name}
                </h3>
                
                <p className="text-white/70 text-sm font-light leading-relaxed mb-6 lg:mb-0 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-24 lg:group-hover:opacity-100 lg:group-hover:mb-6 transition-all duration-700 overflow-hidden line-clamp-3 lg:line-clamp-2">
                  {p.description}
                </p>
                
                {/* CTA */}
                {p.link !== '#' ? (
                  <div className="flex items-center gap-3 text-white transition-all duration-700 border-t border-white/10 pt-5 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t({ ID: 'Kunjungi Produk', EN: 'Visit Product' })}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                ) : (
                  <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase truncate border-t border-white/10 pt-5 lg:pt-4">{t({ ID: 'Coming Soon', EN: 'Coming Soon' })}</p>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 h-1.5 bg-primary-blue w-0 lg:group-hover:w-full transition-all duration-700"></div>
            </a>
          ))}
        </div>

        {/* Mobile Scroll Indicator (only visible on mobile) */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {products.map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          ))}
        </div>

      </div>
    </section>
  );
}
