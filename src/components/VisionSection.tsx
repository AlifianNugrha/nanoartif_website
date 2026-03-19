import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const { lang, t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;

      // Select all words
      const words = textRef.current.querySelectorAll('.reveal-word');

      gsap.fromTo(words,
        { color: '#d1d5db' }, // Gray-300
        {
          color: '#000000', // Black
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [t]); // Re-run animation if text changes

  const text = t({
    ID: "Nanoartif adalah perusahaan teknologi yang berdedikasi untuk memimpin transformasi digital melalui otomasi AI inovatif dan solusi konsultasi IT yang cerdas.",
    EN: "Nanoartif is a technology company dedicated to leading digital transformation through innovative AI automation and smart IT consulting solutions."
  });

  return (
    <section id="vision" ref={sectionRef} className="section-target py-20 md:py-32 px-6 md:pl-60 md:pr-10 bg-white min-h-[80vh] flex items-center overflow-hidden">
      <div className="max-w-[1200px] ml-auto w-full">
        <div>
          <h2 ref={textRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-sans font-light text-gray-300 leading-[1.3] tracking-tight max-w-5xl normal-case pr-4 md:pr-10">
            {text.split(' ').map((word, i) => (
              <span key={`${lang}-${i}`} className="reveal-word inline-block mr-[0.2em]">
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
