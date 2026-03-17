export default function Hero() {
  return (
    <section id="hero" className="mx-4 my-4 h-[60vh] rounded-[30px] relative overflow-hidden bg-black shadow-2xl group">
      <video
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1466611653911-95282ee3a021?auto=format&fit=crop&w=1920"
      >
        <source src="https://player.vimeo.com/external/370331493.hd.mp4?s=d00192e21b790d56c4297897c6c4c9d96e579342&profile_id=174" type="video/mp4" />
      </video>
      <div className="hero-content absolute inset-0 flex items-end pb-6 px-6 z-10">
        <h1 className="text-white text-6xl md:text-8xl font-condensed leading-[0.85] tracking-tighter uppercase">
          COMPANY
        </h1>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
    </section>
  );
}
