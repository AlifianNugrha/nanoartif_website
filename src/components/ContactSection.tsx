import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="section-target py-20 px-6 md:px-12 bg-[#F0EEEC] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Side: Contact Info */}
        <div className="contact-item">
          <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight leading-[1.1] mb-4 normal-case">
            Mari bangun masa depan, bersama.
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-sm mb-8">
            Apakah Anda mencari solusi otomasi canggih atau ingin berkolaborasi untuk menyelesaikan masalah dunia nyata. Kami di sini untuk Anda.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-black font-bold uppercase tracking-widest text-[10px] mb-1">Kantor Pusat</h4>
              <p className="text-gray-600 font-medium text-sm">Surakarta, Jawa Tengah<br />Indonesia</p>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase tracking-widest text-[10px] mb-1">Email</h4>
              <p className="text-primary-blue font-medium text-sm hover:text-black transition-colors cursor-pointer">hello@nanoartif.my.id</p>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase tracking-widest text-[10px] mb-1">Telepon</h4>
              <p className="text-gray-600 font-medium text-sm">+62 838-4158-0448</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-item bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 max-w-md ml-auto mr-auto lg:mr-0 w-full">
          <h3 className="text-xl font-light text-black mb-6">Kirim pesan kepada kami</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nama Depan</label>
                <input type="text" className="w-full border-b border-gray-300 py-1.5 focus:outline-none focus:border-primary-blue transition-colors bg-transparent text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nama Belakang</label>
                <input type="text" className="w-full border-b border-gray-300 py-1.5 focus:outline-none focus:border-primary-blue transition-colors bg-transparent text-sm" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Alamat Email</label>
              <input type="email" className="w-full border-b border-gray-300 py-1.5 focus:outline-none focus:border-primary-blue transition-colors bg-transparent text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Pesan</label>
              <textarea rows={3} className="w-full border-b border-gray-300 py-1.5 focus:outline-none focus:border-primary-blue transition-colors bg-transparent resize-none text-sm"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-blue text-white font-light tracking-widest uppercase text-[10px] py-3 rounded hover:bg-black transition-colors mt-2">
              Kirim Pesan
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
