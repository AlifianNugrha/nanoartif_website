import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white py-24 px-10 md:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 animate-reveal">

          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <h3 className="font-condensed text-5xl font-light mb-6 tracking-tighter">
              NANO<span className="text-white">ARTIF</span>
            </h3>
            <p className="text-white/70 text-base leading-relaxed max-w-sm font-medium">
              Kami adalah perusahaan teknologi yang berdedikasi untuk membangun industri teknologi dan membantu masyarakat menyelesaikan masalah dunia nyata melalui solusi otomasi canggih dan AI.
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">Navigasi</h4>
              <nav className="flex flex-col gap-4">
                <Link to="/company" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">Tentang Kami</Link>
                <Link to="/technology" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">Teknologi</Link>
                <Link to="/products" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">Produk</Link>
                <Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">Kontak</Link>
              </nav>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">Legalitas</h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">Kebijakan Privasi</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">Kebijakan Cookie</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-semibold">Syarat & Ketentuan</a>
              </nav>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">Ikuti Kami</h4>
              <div className="flex gap-4">
                {['IN', 'TW', 'FB'].map((social) => (
                  <button key={social} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary-blue transition-all duration-300 font-bold text-xs flex items-center justify-center border border-white/10">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-y border-white/10">
          {[
            { country: 'Indonesia - HQ', city: 'Surakarta, Jawa Tengah' }
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
          © 2026 Nanoartif. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
