import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VisionSection from '../components/VisionSection';
import MissionSection from '../components/MissionSection';
import OrganizationSection from '../components/OrganizationSection';
import PresenceSection from '../components/PresenceSection';
import QualitySection from '../components/QualitySection';
import ProductsSection from '../components/ProductsSection';
import SustainabilitySection from '../components/SustainabilitySection';
import SubNav from '../components/SubNav';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

export default function Company() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('vision');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for all sections
      const sections = gsap.utils.toArray('section[id]');
      sections.forEach((section: any) => {
        const content = section.querySelectorAll('.reveal-item');
        
        gsap.from(content, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });

        // Scrollspy logic
        ScrollTrigger.create({
          trigger: section,
          start: 'top 20%',
          end: 'bottom 20%',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(section.id);
            }
          }
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { name: 'Vision', id: 'vision' },
    { name: 'Mission', id: 'mission' },
    { name: 'Organization', id: 'organization' },
    { name: 'Presence', id: 'presence' },
    { name: 'Quality', id: 'quality' },
    { name: 'Certified Products', id: 'products' },
    { name: 'Sustainability', id: 'sustainability' }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={pageRef} className="animate-in fade-in duration-700">
      <Hero />
      <SubNav navItems={navItems} activeSection={activeSection} scrollTo={scrollTo} />
      <main>
        <VisionSection />
        <MissionSection />
        <OrganizationSection />
        <PresenceSection />
        <QualitySection />
        <ProductsSection />
        <SustainabilitySection />
      </main>
    </div>
  );
}
