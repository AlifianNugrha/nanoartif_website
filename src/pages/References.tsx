import Hero from '../components/Hero';

export default function References() {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-blue font-bold uppercase text-[11px] tracking-widest mb-3 block">Success Stories</span>
          <h2 className="text-4xl md:text-6xl font-condensed font-bold text-black uppercase mb-8">OUR REFERENCES</h2>
          <p className="text-lg text-gray-600 leading-relaxed uppercase tracking-wide">
            Explore our worldwide installations and see how Nanoartif wind turbines 
            are making a difference in diverse environments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
           <div className="rounded-[40px] overflow-hidden shadow-2xl group">
             <img src="https://images.unsplash.com/photo-1466611653911-95282ee3a021?auto=format&fit=crop&w=800" className="w-full h-auto block group-hover:scale-110 transition-transform duration-1000" alt="Reference 1" />
           </div>
           <div className="rounded-[40px] overflow-hidden shadow-2xl group">
             <img src="https://images.unsplash.com/photo-1548610762-7c6abc9d3b40?auto=format&fit=crop&w=800" className="w-full h-auto block group-hover:scale-110 transition-transform duration-1000" alt="Reference 2" />
           </div>
        </div>
      </section>
    </div>
  );
}
