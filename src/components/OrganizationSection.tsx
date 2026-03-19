import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function OrganizationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const team = [
    { name: 'Pandu Alifian Nugroho', role: 'Founder & CEO', image: '/pandu.jpeg', size: 'large' },
    { name: 'Rico Ilham Nugroho', role: 'Operations Manager', image: '/pandu.jpeg', size: 'small' },
    { name: 'Rangga Arlo PP', role: 'Technical Lead', image: '/pandu.jpeg', size: 'small' },
    { name: 'Zidhan Alka BA', role: 'Creative Director', image: '/pandu.jpeg', size: 'small' },
    { name: 'Muhammad Arya Ulhaq', role: 'Strategic Planner', image: '/pandu.jpeg', size: 'small' },
    { name: 'Farrel Kumara H', role: 'Finance Head', image: '/pandu.jpeg', size: 'small' },
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
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="organization" ref={containerRef} className="section-target py-32 bg-[#F0EEEC] overflow-hidden relative">
      {/* Decorative Bookmark Tag - Classic notched ribbon shape */}
      <div
        className="bookmark-tag absolute top-0 left-12 md:left-30 w-32 md:w-48 h-[240px] md:h-[200px] bg-primary-blue z-0 opacity-30"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%)' }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Side: Text */}
        <div className="reveal-text">
          <h2 className="text-2xl md:text-5xl font-light text-black tracking-tight leading-[0.95] mb-8 normal-case">
            {t({ ID: "bertemu dengan talenta penggerak inovasi digital.", EN: "meet the talents driving digital innovation." })}
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">
            {t({ 
              ID: "sekelompok spesialis berdedikasi tinggi yang berkomitmen pada keunggulan teknologi dan inovasi berkelanjutan.",
              EN: "a group of highly dedicated specialists committed to technological excellence and sustainable innovation."
            })}
          </p>
        </div>


        {/* Right Side: Asymmetrical Grid */}
        {/* Right Side: Asymmetrical Grid */}
        <div className="w-full pb-8 md:pb-0">

          {/* MOBILE GRID LAYOUT */}
          <div className="grid md:hidden grid-cols-2 gap-4">
            {/* Main Founder Box (Center-ish) */}
            <div className="team-member col-span-2 group z-20">
              <div className="relative h-64 w-full overflow-hidden rounded-[4px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-gray-100">
                <img src={team[0].image} alt={team[0].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 object-top" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-black normal-case">{team[0].name}</h3>
                <p className="text-primary-blue text-xs font-medium">{team[0].role}</p>
              </div>
            </div>

            {/* Staggered Staff Boxes */}
            {team.slice(1).map((member, i) => (
              <div key={i} className="team-member group z-10">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] shadow-lg grayscale hover:grayscale-0 transition-all duration-700 bg-gray-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 object-top" />
                </div>
                <div className="mt-2">
                  <h4 className="text-[11px] font-bold text-black leading-tight">{member.name}</h4>
                  <p className="text-primary-blue text-[9px] truncate">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP ASYMMETRICAL LAYOUT */}
          <div className="hidden md:block relative h-[700px] w-full mx-auto">
            {/* Main Founder Box (Center-ish) */}
            <div className="team-member absolute top-[10%] left-[10%] w-56 aspect-[4/5] group z-20">
              <div className="relative h-full w-full overflow-hidden rounded-[4px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-gray-100">
                <img src={team[0].image} alt={team[0].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-black normal-case">{team[0].name}</h3>
                <p className="text-primary-blue text-xs font-medium">{team[0].role}</p>
              </div>
            </div>

            {/* Staggered Staff Boxes */}
            {team.slice(1).map((member, i) => {
              const positions = [
                { top: '0', left: '48%', w: '120px' },    // Top Right
                { top: '35%', left: '52%', w: '140px' },  // Middle Right
                { top: '65%', left: '35%', w: '130px' },   // Bottom Left
                { top: '30%', left: '78%', w: '110px' },  // Far Right
                { top: '60%', left: '82%', w: '125px' },  // Bottom Right
              ];
              const pos = positions[i];

              return (
                <div
                  key={i}
                  className="team-member absolute group z-10"
                  style={{ top: pos.top, left: pos.left, width: pos.w }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] shadow-lg grayscale hover:grayscale-0 transition-all duration-700 bg-gray-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="mt-2 transition-opacity duration-300">
                    <h4 className="text-[11px] font-bold text-black leading-tight">{member.name}</h4>
                    <p className="text-primary-blue text-[9px] truncate">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
