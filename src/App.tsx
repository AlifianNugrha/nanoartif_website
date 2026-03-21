import { useRef, useLayoutEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Import All Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionSection from './components/VisionSection';
import MissionSection from './components/MissionSection';
import OrganizationSection from './components/OrganizationSection';
import PresenceSection from './components/PresenceSection';
import QualitySection from './components/QualitySection';
import ProductsSection from './components/ProductsSection';
import SustainabilitySection from './components/SustainabilitySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export interface NavItem {
  name: string;
  id: string;
}

function AppContent() {
  const [activeSection, setActiveSection] = useState<string>('vision');
  const appRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLanguage();

  // Daftar navigasi dalam dua bahasa
  const navItemsID = [
    { name: 'Tentang Kami', id: 'vision' },
    { name: 'Misi', id: 'mission' },
    { name: 'Organisasi', id: 'organization' },
    { name: 'Jaringan', id: 'presence' },
    { name: 'Kualitas', id: 'quality' },
    { name: 'Produk', id: 'products' },
    { name: 'Teknologi', id: 'sustainability' },
    { name: 'Kontak', id: 'contact' }
  ];

  const navItemsEN = [
    { name: 'About Us', id: 'vision' },
    { name: 'Mission', id: 'mission' },
    { name: 'Organization', id: 'organization' },
    { name: 'Network', id: 'presence' },
    { name: 'Quality', id: 'quality' },
    { name: 'Products', id: 'products' },
    { name: 'Technology', id: 'sustainability' },
    { name: 'Contact', id: 'contact' }
  ];

  const currentNavItems = lang === 'ID' ? navItemsID : navItemsEN;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Mengambil semua elemen dengan class .section-target
      const sections = gsap.utils.toArray<HTMLElement>('.section-target');

      sections.forEach((section) => {
        // 1. Logika untuk mengupdate Navigasi Aktif saat Scroll
        ScrollTrigger.create({
          trigger: section,
          start: 'top 200px',
          end: 'bottom 200px',
          onToggle: (self) => {
            if (self.isActive && section.id) {
              setActiveSection(section.id);
            }
          }
        });

        // 2. Animasi Reveal (Muncul perlahan) untuk setiap item di dalam section
        const revealElements = section.querySelectorAll('.reveal-item');
        if (revealElements.length > 0) {
          gsap.from(revealElements, {
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          });
        }
      });
    }, appRef);

    return () => ctx.revert(); // Cleanup GSAP
  }, []);

  // Fungsi Scroll Smooth dengan Offset Navbar (100px)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-main" ref={appRef}>
      {/* Main Content */}
      <main className="w-full">
        {/* Section 1: Hero (Full Page, No Navbar initially) */}
        <Hero />

        {/* Wrapper untuk Sticky Navbar dan Konten Selanjutnya */}
        <div className="relative w-full">
          {/* Navbar Melayang */}
          <Navbar
            navItems={currentNavItems}
            activeSection={activeSection}
            scrollTo={scrollTo}
            lang={lang}
            setLang={setLang}
          />

          {/* Urutan Section (Halaman) */}
          <VisionSection />
          <MissionSection />
          <OrganizationSection />
          <PresenceSection />
          <QualitySection />
          <ProductsSection />
          <SustainabilitySection />
          <ContactSection />
        </div>
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;