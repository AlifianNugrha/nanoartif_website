import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  scrollTo?: (id: string) => void;
}

export default function Footer({ scrollTo }: FooterProps) {
  const { t } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (scrollTo) {
      scrollTo(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-blue text-white py-24 px-10 md:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">

          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <h3 translate="no" className="font-condensed text-4xl md:text-5xl font-light mb-6 tracking-tighter">
              NANO<span className="text-white">ARTIF</span>
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm font-medium">
              {t({ 
                ID: "Kami adalah perusahaan teknologi yang berdedikasi untuk membangun industri teknologi dan membantu masyarakat melalui solusi otomasi canggih dan AI.",
                EN: "We are a technology company dedicated to building the tech industry and helping people through advanced automation and AI solutions."
              })}
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">{t({ ID: "Navigasi", EN: "Navigation" })}</h4>
              <nav className="flex flex-col gap-4">
                <a href="#vision" onClick={(e) => handleLinkClick(e, 'vision')} className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Tentang Kami", EN: "About Us" })}</a>
                <a href="#organization" onClick={(e) => handleLinkClick(e, 'organization')} className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Tim", EN: "Team" })}</a>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Produk", EN: "Products" })}</a>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Kontak", EN: "Contact" })}</a>
              </nav>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">{t({ ID: "Hubungi Kami", EN: "Contact Us" })}</h4>
              <nav className="flex flex-col gap-4">
                <p className="text-white/60 text-sm font-semibold">Surakarta, Jawa Tengah</p>
                <a href="mailto:hello@nanoartif.my.id" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">hello@nanoartif.my.id</a>
                <a href="tel:+6283841580448" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">+62 838-4158-0448</a>
              </nav>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">{t({ ID: "Ikuti Kami", EN: "Follow Us" })}</h4>
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', url: 'https://instagram.com/alifian_nugraha', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                  { name: 'LinkedIn', url: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary-blue transition-all duration-300 flex items-center justify-center border border-white/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] text-white/50 font-Light tracking-widest">
            {t({ 
              ID: "© 2026 Nanoartif. Seluruh hak cipta dilindungi.",
              EN: "© 2026 Nanoartif. All rights reserved."
            })}
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-widest font-semibold">{t({ ID: "Kebijakan Privasi", EN: "Privacy Policy" })}</a>
            <a href="#" className="text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-widest font-semibold">{t({ ID: "Syarat & Ketentuan", EN: "Terms" })}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
