export default function Hero() {
  return (
    <section id="hero" className="mx-4 my-4 h-[60vh] rounded-[30px] relative overflow-hidden bg-black shadow-2xl group">
      <img
        src="/background.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
      />
      <div className="hero-content absolute inset-0 flex items-end pb-6 lg:pb-8 px-6 lg:px-10 z-10">
        <h1 translate="no" className="text-white text-5xl sm:text-6xl md:text-8xl font-condensed leading-[0.85] tracking-tighter uppercase">
          NANO<span className="text-white">ARTIF</span>
        </h1>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
    </section>
  );
}
