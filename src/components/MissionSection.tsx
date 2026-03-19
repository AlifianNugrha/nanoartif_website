import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const missions = [
    {
      title: t({ ID: "Otomasi Cerdas", EN: "Smart Automation" }),
      desc: t({ 
        ID: "Kami menghadirkan teknologi AI tercanggih untuk mengotomatisasi proses bisnis yang repetitif, meningkatkan efisiensi dan akurasi operasional.",
        EN: "We bring advanced AI technology to automate repetitive business processes, improving operational efficiency and accuracy."
      })
    },
    {
      title: t({ ID: "Transformasi Digital", EN: "Digital Transformation" }),
      desc: t({ 
        ID: "Membantu perusahaan bertransformasi dari sistem tradisional ke ekosistem digital yang modern, scalable, dan aman.",
        EN: "Helping companies transform from traditional systems to modern, scalable, and secure digital ecosystems."
      })
    },
    {
      title: t({ ID: "Inovasi Tanpa Batas", EN: "Boundless Innovation" }),
      desc: t({ 
        ID: "Terus mengeksplorasi teknologi terbaru untuk memberikan solusi IT yang relevan dengan tantangan industri masa kini dan masa depan.",
        EN: "Continuously exploring the latest technologies to provide IT solutions relevant to current and future industry challenges."
      })
    },
    {
      title: t({ ID: "Kemitraan Strategis", EN: "Strategic Partnership" }),
      desc: t({ 
        ID: "Menjadi mitra terpercaya dalam memberikan konsultasi tech yang mendalam untuk membantu pertumbuhan bisnis Anda secara berkelanjutan.",
        EN: "Becoming a trusted partner in providing deep tech consultancy to help your business grow sustainably."
      })
    },
    {
      title: t({ ID: "Keamanan Siber AI", EN: "AI Cyber Security" }),
      desc: t({ 
        ID: "Mengembangkan sistem perlindungan data yang proaktif dengan AI untuk menjaga aset digital Anda dari ancaman keamanan yang terus berkembang.",
        EN: "Developing proactive data protection systems with AI to safeguard your digital assets from ever-evolving security threats."
      })
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

      // Background color transition to BLUE
      gsap.to(containerRef.current, {
        backgroundColor: '#003b5c', // secondary-blue
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
        }
      });

      // Animate text colors for contrast against blue background
      const darkTexts = containerRef.current?.querySelectorAll('h2, h3, span, p:not(.text-gray-600)');
      if (darkTexts) {
        gsap.to(darkTexts, {
          color: '#ffffff',
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "top 10%",
            scrub: true,
          }
        });
      }

      // Special handling for gray description text
      const grayTexts = containerRef.current?.querySelectorAll('.text-gray-600');
      if (grayTexts) {
        gsap.to(grayTexts, {
          color: 'rgba(255, 255, 255, 0.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "top 10%",
            scrub: true,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [t]);

  return (
    <section id="mission" ref={containerRef} className="section-target py-32 px-10 md:px-20 bg-white min-h-screen overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* Left Side: Scrolling Content */}
        <div className="flex flex-col gap-32 ml-10 mr-10">
          {missions.map((mission, index) => (
            <div key={index} className="reveal-item max-w-lg z-10">
              <span className="text-primary-blue font-bold text-sm tracking-widest block mb-6">
                {t({ ID: `Misi ${index + 1}`, EN: `Mission ${index + 1}` })}
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
            <h2 className="text-3xl md:text-5xl font-light text-black leading-[0.8] tracking-tighter normal-case">
              {t({ ID: "Misi Kami", EN: "Our Mission" })}
            </h2>
          </div>

          <div className="mt-6 w-70 h-1 bg-primary-blue relative z-20"></div>
          <p className="mt-4 text-2xl md:text-4xl font-medium text-black max-w-xs tracking-tight relative z-20">
            {t({ 
              ID: "Mendorong efisiensi bisnis melalui keunggulan teknologi otomasi AI.",
              EN: "Driving business efficiency through excellence in AI automation technology."
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
