import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

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
  }, []);

  const text = "Nanoartif adalah perusahaan teknologi yang berdedikasi untuk memimpin transformasi digital melalui otomasi AI inovatif dan solusi konsultasi IT yang cerdas.";

  return (
    <section id="vision" ref={sectionRef} className="section-target py-32 pl-20 md:pl-60 pr-10 bg-white min-h-[80vh] flex items-center">
      <div className="max-w-[1200px] ml-auto">
        <div>
          <p className="text-secondary-blue text-sm font-secondary uppercase tracking-[0.3em] mb-12">
            Visi Kami
          </p>
          <h2 ref={textRef} className="text-6xl md:text-5xl font-sans font-light text-gray-300 leading-[1.3] tracking-tight max-w-5xl normal-case mr-10">
            {text.split(' ').map((word, i) => (
              <span key={i} className="reveal-word inline-block mr-[0.2em]">
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
