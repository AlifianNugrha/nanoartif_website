import { useState } from 'react';

interface NavItem {
  name: string;
  id: string;
}

interface NavbarProps {
  navItems: NavItem[];
  activeSection: string;
  scrollTo: (id: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
}

export default function Navbar({ navItems, activeSection, scrollTo, lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <div className="w-full z-[9999] pointer-events-none sticky top-0 py-4 md:py-6 px-4 md:px-8 h-fit">
      <div className="max-w-[1600px] mx-auto flex justify-between items-start md:items-center pointer-events-auto">

        {/* Mobile menu and Desktop Navigation Pill */}
        <div className={`bg-[#F0EEEC] transition-all duration-300 overflow-hidden ${isOpen ? 'rounded-[20px] shadow-lg max-h-[500px]' : 'rounded-full max-h-[50px] md:max-h-none'}`}>
          <div className="flex items-center justify-between md:hidden px-6 py-3 min-w-[150px]">
            <span className="font-secondary font-bold text-sm text-primary-blue tracking-widest">{lang === 'ID' ? 'MENU' : 'MENU'}</span>
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></> : <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>}
              </svg>
            </button>
          </div>

          <nav className={`md:px-7 md:py-3.5 flex-col md:flex-row items-center gap-1 md:gap-3 ${isOpen ? 'flex pb-3 px-3' : 'hidden md:flex'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-[14px] md:text-[15px] p-3 md:p-0 w-full md:w-auto text-center rounded-lg md:rounded-none font-secondary uppercase tracking-normal transition-all duration-300 font-normal whitespace-nowrap ${activeSection === item.id ? 'bg-primary-blue text-white md:bg-transparent md:text-primary-blue' : 'text-black hover:text-primary-blue hover:bg-gray-200 md:hover:bg-transparent'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Top Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={() => handleScroll('contact')}
              className="w-10 h-10 md:w-12 md:h-12 bg-primary-blue text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-primary-blue/20 cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
            <button 
              onClick={() => handleScroll('contact')}
              className="w-10 h-10 md:w-12 md:h-12 bg-primary-blue text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-primary-blue/20 cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </button>
            <button 
              onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
              className="w-10 h-10 md:w-12 md:h-12 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-transform hover:scale-110 shadow-lg shadow-primary-blue/20 cursor-pointer"
            >
              {lang}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
