import { Link } from 'react-router-dom';

export default function Header() {
  const navLinks = [
    { name: 'Vision', path: '/#vision' },
    { name: 'Group', path: '/#group' },
    { name: 'Tech', path: '/#tech' },
    { name: 'Products', path: '/#products' },
    { name: 'Sustainability', path: '/#sustainability' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 pointer-events-none">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center pointer-events-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-condensed font-bold tracking-tighter text-black hover:opacity-80 transition-opacity no-underline">
          NANO<span className="text-primary-blue">ARTIF</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex bg-white/95 backdrop-blur-md px-10 py-3.5 rounded-full gap-8 shadow-lg border border-black/5">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[14px] font-condensed uppercase tracking-wide font-semibold text-gray-500 hover:text-primary-blue transition-colors no-underline"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Global Buttons */}
        <div className="flex items-center gap-3">
           <button className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-primary-blue/20">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
           </button>
           <button className="w-12 h-12 bg-white text-black border border-black/5 rounded-full flex items-center justify-center font-bold text-xs transition-transform hover:scale-110 shadow-sm border-black/5">EN</button>
        </div>
      </div>
    </header>
  );
}
