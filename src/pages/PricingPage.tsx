import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';
import { useLanguage } from '../context/LanguageContext';

export default function PricingPage() {
  const { lang, setLang } = useLanguage();
  const navigate = useNavigate();

  // Simple navbar items for pricing page, mostly pointing to home
  const navItemsID = [
    { name: 'Kembali ke Beranda', id: 'home' }
  ];

  const navItemsEN = [
    { name: 'Back to Home', id: 'home' }
  ];

  const currentNavItems = lang === 'ID' ? navItemsID : navItemsEN;

  const handleNavClick = (id: string) => {
    if (id === 'home') {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white font-main">
      <div className="relative w-full">
        {/* We use the same Navbar, but interactions just route back home */}
        <Navbar
          navItems={currentNavItems}
          activeSection="pricing"
          scrollTo={handleNavClick}
          lang={lang}
          setLang={setLang}
        />
        
        {/* We add a spacer to push content below the fixed navbar */}
        <div className="pt-24 md:pt-32">
          <PricingSection />
        </div>
      </div>
      
      {/* Footer handles its own scrolling logic, but we can override it if we want. 
          For now, just pass a safe dummy function or navigate back to top. */}
      <Footer scrollTo={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
