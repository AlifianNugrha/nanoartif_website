import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const missions = [
    {
      title: "Otomasi Cerdas",
      desc: "Kami menghadirkan teknologi AI tercanggih untuk mengotomatisasi proses bisnis yang repetitif, meningkatkan efisiensi dan akurasi operasional."
    },
    {
      title: "Transformasi Digital",
      desc: "Membantu perusahaan bertransformasi dari sistem tradisional ke ekosistem digital yang modern, scalable, dan aman."
    },
    {
      title: "Inovasi Tanpa Batas",
      desc: "Terus mengeksplorasi teknologi terbaru untuk memberikan solusi IT yang relevan dengan tantangan industri masa kini dan masa depan."
    },
    {
      title: "Kemitraan Strategis",
      desc: "Menjadi mitra terpercaya dalam memberikan konsultasi tech yang mendalam untuk membantu pertumbuhan bisnis Anda secara berkelanjutan."
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Sticky logic for the background text container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightRef.current,
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" ref={containerRef} className="section-target py-32 px-10 md:px-20 bg-[#F0EEEC] min-h-screen overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* Left Side: Scrolling Content */}
        <div className="flex flex-col gap-32 ml-10 mr-10">
          {missions.map((mission, index) => (
            <div key={index} className="reveal-item max-w-lg z-10">
              <span className="text-primary-blue font-bold text-sm tracking-widest block mb-6">
                Mission {index + 1}
              </span>
              <h3 className="text-2xl md:text-4xl font-light mb-8 text-black leading-tight normal-case">
                {mission.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {mission.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Content */}
        <div ref={rightRef} className="hidden md:flex flex-col justify-center h-screen items-start relative  ml-10 pb-70">

          {/* Background Text */}
          <div className="reveal-item">
            <h2 className="text-4xl md:text-5xl font-light text-black leading-[0.8] tracking-tighter normal-case">
              Misi Kami
            </h2>
          </div>

          <div className="mt-6 w-70 h-1 bg-primary-blue relative z-20"></div>
          <p className="mt-4 text-4xl font-medium text-black max-w-xs tracking-tight relative z-20">
            Mendorong efisiensi bisnis melalui keunggulan teknologi otomasi AI.
          </p>
        </div>
      </div>
    </section>
  );
}
