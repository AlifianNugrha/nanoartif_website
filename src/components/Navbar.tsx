

interface NavItem {
  name: string;
  id: string;
}

interface NavbarProps {
  navItems: NavItem[];
  activeSection: string;
  scrollTo: (id: string) => void;
}

export default function Navbar({ navItems, activeSection, scrollTo }: NavbarProps) {
  return (
    <div className="w-full z-[9999] pointer-events-none sticky top-0 py-6 px-8 h-fit">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center pointer-events-auto">

        {/* Navigation Pill */}
        <nav className="bg-[#F0EEEC] px-7 py-3.5 rounded-full flex items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[15px] font-secondary uppercase tracking-normal transition-all duration-300 font-normal whitespace-nowrap ${activeSection === item.id ? 'text-primary-blue' : 'text-black hover:text-primary-blue'
                }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Top Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-primary-blue/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
            <button className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-primary-blue/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </button>
            <button className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold text-xs transition-transform hover:scale-110 shadow-lg shadow-primary-blue/20">EN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
