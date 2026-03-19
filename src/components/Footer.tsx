import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-blue text-white py-24 px-10 md:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 animate-reveal">

          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <h3 className="font-condensed text-4xl md:text-5xl font-light mb-6 tracking-tighter">
              NANO<span className="text-white">ARTIF</span>
            </h3>
            <p className="text-white/70 text-base leading-relaxed max-w-sm font-medium">
              {t({ 
                ID: "Kami adalah perusahaan teknologi yang berdedikasi untuk membangun industri teknologi dan membantu masyarakat menyelesaikan masalah dunia nyata melalui solusi otomasi canggih dan AI.",
                EN: "We are a technology company dedicated to building the tech industry and helping people solve real-world problems through advanced automation and AI solutions."
              })}
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">{t({ ID: "Navigasi", EN: "Navigation" })}</h4>
              <nav className="flex flex-col gap-4">
                <Link to="/company" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Tentang Kami", EN: "About Us" })}</Link>
                <Link to="/technology" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Teknologi", EN: "Technology" })}</Link>
                <Link to="/products" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Produk", EN: "Products" })}</Link>
                <Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Kontak", EN: "Contact" })}</Link>
              </nav>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">{t({ ID: "Legalitas", EN: "Legality" })}</h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Kebijakan Privasi", EN: "Privacy Policy" })}</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Kebijakan Cookie", EN: "Cookie Policy" })}</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{t({ ID: "Syarat & Ketentuan", EN: "Terms & Conditions" })}</a>
              </nav>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">{t({ ID: "Ikuti Kami", EN: "Follow Us" })}</h4>
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                  { name: 'Twitter', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
                  { name: 'Facebook', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> }
                ].map((social) => (
                  <button key={social.name} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary-blue transition-all duration-300 flex items-center justify-center border border-white/10">
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-y border-white/10">
          {[
            { country: '', city: 'Surakarta, Jawa Tengah' }
          ].map((office, i) => (
            <div key={i} className="group cursor-default">
              <span className="block text-primary-blue bg-white rounded-md px-2 py-0.5 text-[9px] font-bold uppercase w-fit mb-2 group-hover:bg-white/90">
                {office.country}
              </span>
              <p className="text-sm text-white/80 font-semibold group-hover:text-white transition-colors">{office.city}</p>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-[11px] text-white/50 font-Light tracking-widest">
          {t({ 
            ID: "© 2026 Nanoartif. Seluruh hak cipta dilindungi.",
            EN: "© 2026 Nanoartif. All rights reserved."
          })}
        </div>
      </div>
    </footer>

  );
}
