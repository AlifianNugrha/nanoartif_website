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
      link: 'https://nanobot.nanoartif.my.id',
      label: t({ ID: 'Produk Unggulan', EN: 'Featured Product' })
    },
    {
      name: t({ ID: 'Pembuatan Website', EN: 'Website Development' }),
      description: t({
        ID: 'Landing page, company profile, hingga e-commerce dengan desain modern & responsif.',
        EN: 'Landing pages, company profiles, to e-commerce with modern & responsive design.'
      }),
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200',
      link: '#contact',
      label: t({ ID: 'Jasa Pembuatan', EN: 'Development Service' })
    },
    {
      name: t({ ID: 'Pembuatan Sistem', EN: 'System Development' }),
      description: t({
        ID: 'Sistem informasi, ERP, dan sistem custom untuk otomasi proses bisnis Anda.',
        EN: 'Information systems, ERP, and custom systems to automate your business processes.'
      }),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
      link: '#contact',
      label: t({ ID: 'Jasa Pembuatan', EN: 'Development Service' })
    },
    {
      name: t({ ID: 'Pembuatan Aplikasi', EN: 'App Development' }),
      description: t({
        ID: 'Aplikasi mobile, desktop, hingga solusi AI custom untuk kebutuhan spesifik Anda.',
        EN: 'Mobile apps, desktop apps, to custom AI solutions for your specific needs.'
      }),
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200',
      link: '#contact',
      label: t({ ID: 'Jasa Pembuatan', EN: 'Development Service' })
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

  const handleNavigate = (link: string) => {
    if (link === '#contact') {
      const el = document.getElementById('contact');
      if (el) {
        const offset = 100;
        const pos = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: pos - offset, behavior: 'smooth' });
      }
    }
  };

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
            {t({ ID: 'produk & layanan untuk transformasi digital bisnis Anda', EN: 'products & services for your business digital transformation' })}
          </p>
        </div>

        {/* Responsive Container: Free Horizontal Scroll on Mobile, Flex on Desktop */}
        <div className="flex flex-row overflow-x-auto lg:overflow-x-hidden gap-6 lg:gap-4 lg:h-[480px] w-full pt-4 pb-8 lg:pb-0 no-scrollbar items-stretch">
          {products.map((p, i) => {
            const isExternal = p.link.startsWith('http');
            const CardTag = isExternal ? 'a' : 'div';
            const cardProps = isExternal
              ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
              : { onClick: () => handleNavigate(p.link), role: "button", tabIndex: 0 };

            return (
              <CardTag
                key={i}
                {...cardProps as any}
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
                  <span className="text-white text-[8px] font-bold uppercase tracking-[0.4em] mb-3 opacity-0 lg:group-hover:opacity-100 transition-opacity translate-y-2 lg:group-hover:translate-y-0 delay-75 hidden lg:block">
                    {p.label}
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-condensed font-bold text-white tracking-tight mb-3 lg:mb-2 transition-transform duration-500 lg:group-hover:-translate-y-1">
                    {p.name}
                  </h3>

                  <p className="text-white/70 text-sm font-light leading-relaxed mb-6 lg:mb-0 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-24 lg:group-hover:opacity-100 lg:group-hover:mb-6 transition-all duration-700 overflow-hidden line-clamp-3 lg:line-clamp-2">
                    {p.description}
                  </p>

                  {/* CTA */}
                  {isExternal ? (
                    <div className="flex items-center gap-3 text-white transition-all duration-700 border-t border-white/10 pt-5 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t({ ID: 'Kunjungi Produk', EN: 'Visit Product' })}</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 text-white transition-all duration-700 border-t border-white/10 pt-5 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t({ ID: 'Hubungi Kami', EN: 'Contact Us' })}</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 h-1.5 bg-primary-blue w-0 lg:group-hover:w-full transition-all duration-700"></div>
              </CardTag>
            );
          })}
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
