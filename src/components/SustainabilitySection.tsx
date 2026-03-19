import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

export default function SustainabilitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const colors = [
    "#005a8d", // Primary Blue
    "#003b5c", // Secondary Blue
    "#007cc2", // Lighter Blue
    "#002b46", // Darkest Blue
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initialize shapes to cover text completely
      gsap.set(".line-shape", { scaleX: 1 });

      gsap.to(".line-shape", {
        scaleX: 0,
        transformOrigin: "right",
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [t]);

  const lines = [
    t({ ID: "Teknologi bukan sekadar", EN: "Technology is not just" }),
    t({ ID: "pilihan yang kita ambil.", EN: "a choice we make." }),
    t({ ID: "Ini adalah komitmen untuk", EN: "It is a commitment for" }),
    t({ ID: "masa depan digital kita.", EN: "our digital future." })
  ];


  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="section-target pt-32 pb-40 md:pt-60 md:pb-80 px-6 md:px-10 bg-white"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-5xl lg:text-[45px] font-light tracking-tighter leading-[0.9] flex flex-col items-center normal-case">
          {lines.map((line, index) => {
            const currentColor = colors[index % colors.length];

            return (
              <div key={index} className="relative inline-block overflow-hidden py-1">
                {/* REVEALED TEXT */}
                <span
                  className="inline-block whitespace-nowrap"
                  style={{ color: currentColor }}
                >
                  {line}
                </span>

                {/* ANIMATED SOLID OVERLAY */}
                <div
                  className="line-shape absolute inset-0 z-10"
                  style={{
                    backgroundColor: currentColor,
                    opacity: 1
                  }}
                />
              </div>
            );
          })}
        </h2>


      </div>
    </section>
  );
}
