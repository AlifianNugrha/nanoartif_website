import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PresenceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const locations = [
    { city: 'Jakarta, Indonesia', desc: 'Pusat operasional, konsultasi IT, dan manajemen proyek digital.' },
    { city: 'Bandung, Indonesia', desc: 'Hub riset dan pengembangan (R&D) untuk solusi otomasi AI.' },
    { city: 'Surabaya, Indonesia', desc: 'Layanan dukungan pelanggan dan implementasi infrastruktur IT.' },
    { city: 'Yogyakarta, Indonesia', desc: 'Pusat pengembangan perangkat lunak dan talenta teknologi.' },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Scale-up image animation
      gsap.fromTo(imageRef.current,
        { scale: 0.8, borderRadius: '60px' },
        {
          scale: 1,
          borderRadius: '0px',
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 95%",
            end: "bottom 95%",
            scrub: true,
            snap: {
              snapTo: 1,
              duration: 0.15,
              delay: 0,
              ease: "power1.in"
            }
          }
        }
      );

      // Background color transition to BLUE
      gsap.to(containerRef.current, {
        backgroundColor: '#003b5c', // secondary-blue
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: true,
        }
      });

      // Animate text colors for contrast
      const textElements = containerRef.current?.querySelectorAll('.color-transition');
      if (textElements) {
        gsap.to(textElements, {
          color: '#ffffff',
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          }
        });
      }

      // Bento Grid Entrance Animation
      const bentoItems = containerRef.current?.querySelectorAll('.bento-item');
      if (bentoItems) {
        const directions = [
          { x: -100, y: 0 },  // Item 1: From Left
          { x: 0, y: -100 },  // Item 2: From Top
          { x: 0, y: 100 },   // Item 3: From Bottom
          { x: 100, y: 0 }    // Item 4: From Right
        ];
        bentoItems.forEach((item, i) => {
          gsap.from(item, {
            x: directions[i].x,
            y: directions[i].y,
            opacity: 0,
            duration: 1.2,
            delay: i * 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              toggleActions: "play none none reverse"
            }
          });
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="presence" ref={containerRef} className="section-target pb-32 md:pb-48 bg-[#F0EEEC] overflow-hidden">

      {/* Centered Scaling Map Visualization - Flush to Top */}
      <div className="flex justify-center w-full mb-32 px-0">
        <div
          ref={imageRef}
          className="relative w-full h-[500px] md:h-[500px] overflow-hidden  pointer-events-none origin-center"
        >
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1920"
            alt="Global Map"
            className="w-full h-full object-cover grayscale opacity-80"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
            <div className="w-1 h-20 bg-white/30 mb-8 rounded-full"></div>
            <p className="font-bold text-3xl md:text-6xl tracking-[0.3em] text-white drop-shadow-2xl font-light">JARINGAN LOKAL</p>
            <div className="mt-8 flex items-center gap-4 text-white/80 font-bold tracking-widest text-xs uppercase">
              <span>Jakarta</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span>Bandung</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span>Surabaya</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 md:px-20 mt-70">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Title + Description */}
          <div className="lg:w-1/3">
            <span className="text-white font-light text-[12px] tracking-widest mb-6 block">
              Ekosistem Teknologi Terintegrasi
            </span>

            <p className="text-3xl text-white font-light leading-relaxed color-transition max-w-sm mr-10">
              Nanoartif mengoperasikan jaringan teknologi di kota-kota besar Indonesia untuk memberikan solusi IT yang responsif dan berkualitas tinggi.
            </p>
          </div>

          {/* Right Column: Bento Pinwheel Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[100px]">
              {/* Item 1: Wide Top Left - From Left */}
              <div className="bento-item lg:col-span-2 lg:row-span-2 bg-white/95 p-12 transition-all hover:-translate-y-2 group flex flex-col justify-between">
                <div>
                  <h4 className="text-primary-blue font-bold text-2xl mb-4 tracking-wide group-hover:text-black transition-colors">
                    {locations[0].city}
                  </h4>
                  <p className="text-lg text-gray-500 leading-relaxed font-medium">
                    {locations[0].desc}
                  </p>
                </div>
                <div className="text-6xl self-end opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:rotate-12">🇮🇩</div>
              </div>

              {/* Item 2: Tall Top Right - From Top */}
              <div className="bento-item lg:col-span-1 lg:row-span-3 bg-white/95 p-10 transition-all hover:-translate-y-2 group flex flex-col items-center text-center justify-center">
                <div className="text-5xl mb-8 opacity-20 group-hover:opacity-100 transition-all scale-100 group-hover:scale-125">🇮🇩</div>
                <h4 className="text-primary-blue font-bold text-xl mb-4 tracking-wide group-hover:text-black transition-colors">
                  {locations[1].city}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {locations[1].desc}
                </p>
              </div>

              {/* Item 3: Tall Bottom Left - From Bottom */}
              <div className="bento-item lg:col-span-1 lg:row-span-3 bg-white/95 p-10 transition-all hover:-translate-y-2 group flex flex-col items-center text-center justify-center">
                <div className="text-5xl mb-8 opacity-20 group-hover:opacity-100 transition-all scale-100 group-hover:scale-125">🇮🇩</div>
                <h4 className="text-primary-blue font-bold text-xl mb-4 tracking-wide group-hover:text-black transition-colors">
                  {locations[2].city}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {locations[2].desc}
                </p>
              </div>

              {/* Item 4: Wide Bottom Right - From Right */}
              <div className="bento-item lg:col-span-2 lg:row-span-2 bg-white/95 p-12 transition-all hover:-translate-y-2 group flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h4 className="text-primary-blue font-bold text-2xl mb-4 tracking-wide group-hover:text-black transition-colors">
                    {locations[3].city}
                  </h4>
                  <div className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity">🇮🇩</div>
                </div>
                <p className="text-lg text-gray-500 leading-relaxed font-medium mt-4">
                  {locations[3].desc}
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="max-w-[1400px] mx-auto px-10 md:px-20 mt-32">
          <div className="pt-20 border-t border-white/10">
            <p className="text-white/40 text-xs font-light tracking-[0.3em] mb-12 text-center">
              Kemitraan Strategis & Kolaborasi Teknologi
            </p>

            {/* Infinite Marquee */}
            <div className="relative flex overflow-x-hidden group">
              <div className="animate-marquee whitespace-nowrap flex items-center py-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-white/20 text-xl md:text-2xl font-condensed font-bold mx-12 hover:text-white/60 transition-colors cursor-default grayscale">
                      COMPANY_PARTNER_{i}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mx-4"></div>
                  </div>
                ))}
              </div>

              <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-white/20 text-xl md:text-2xl font-light font-bold mx-12 hover:text-white/60 transition-colors cursor-default grayscale">
                      COMPANY_PARTNER_{i}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mx-4"></div>
                  </div>
                ))}
              </div>

              {/* Gradient Overlays for smooth edges */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#003b5c] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#003b5c] to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
