interface SubNavProps {
  navItems: { name: string; id: string }[];
  activeSection: string;
  scrollTo: (id: string) => void;
}

export default function SubNav({ navItems, activeSection, scrollTo }: SubNavProps) {
  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-full max-w-fit px-4">
      <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md border border-black/5">
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeSection === item.id 
                  ? 'bg-primary-blue text-white shadow-sm' 
                  : 'text-gray-400 hover:text-black hover:bg-black/5'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
