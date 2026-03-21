import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function OrganizationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const team = [
    { name: 'Pandu Alifian Nugroho', role: 'Founder and Leader', image: '/pandu.jpeg', size: 'large' },
    { name: 'Rico Ilham Nugroho', role: 'Team Management', image: '/pandu.jpeg', size: 'small' },
    { name: 'Rangga Arlo PP', role: 'Team Management', image: '/pandu.jpeg', size: 'small' },
    { name: 'Zidhan Alka BA', role: 'Team Management', image: '/pandu.jpeg', size: 'small' },
    { name: 'Muhammad Arya Ulhaq', role: 'Team Management', image: '/pandu.jpeg', size: 'small' },
    { name: 'Farrel Kumara H', role: 'Team Management', image: '/pandu.jpeg', size: 'small' },
  ];


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Bookmark animation
      gsap.from('.bookmark-tag', {
        yPercent: -100,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      gsap.from('.reveal-text', {
        x: -50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
      gsap.from('.team-member', {
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="organization" ref={containerRef} className="section-target py-32 bg-[#F0EEEC] relative">
      {/* Decorative Bookmark Tag */}
      <div
        className="bookmark-tag absolute top-0 left-12 md:left-30 w-32 md:w-48 h-[200px] bg-primary-blue z-0 opacity-10"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%)' }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-10 md:px-20 flex flex-col gap-16 md:gap-24 relative z-10">

        {/* Top: Introduction Text */}
        <div className="reveal-text max-w-3xl">
          <h2 className="text-2xl md:text-5xl font-light text-black tracking-tight leading-[0.95] mb-8 normal-case">
            {t({ ID: "bertemu dengan talenta penggerak inovasi digital.", EN: "meet the talents driving digital innovation." })}
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xl">
            {t({
              ID: "sekelompok spesialis berdedikasi tinggi yang berkomitmen pada keunggulan teknologi dan inovasi berkelanjutan.",
              EN: "a group of highly dedicated specialists committed to technological excellence and sustainable innovation."
            })}
          </p>
        </div>


        {/* Bottom: Team List (Horizontal Wrap) */}
        <div className="w-full">
          <div className="flex flex-wrap gap-x-12 gap-y-10 md:gap-x-20 md:gap-y-16">
            {team.map((member, i) => (
              <div
                key={i}
                className="team-member group transition-all duration-300"
              >
                <div className="relative border-l-2 border-primary-blue/20 pl-6 py-1 hover:border-primary-blue">
                  <h3 className="text-sm md:text-lg font-light text-black normal-case leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-blue text-[9px] md:text-[11px] font-normal tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
