import { useState } from 'react';

export default function QualitySection() {
  const [openSection, setOpenSection] = useState<string | null>('quality');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'quality',
      title: 'Sistem Manajemen Kualitas',
      label: 'KUALITAS',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/80 font-light leading-relaxed text-lg">
          <div className="space-y-6">
            <p>
              Nanoartif menerapkan standar manajemen kualitas tinggi dalam setiap pengembangan perangkat lunak dan solusi AI kami. Kami mengacu pada standar internasional seperti ISO 9001 untuk memastikan setiap output memenuhi ekspektasi klien secara konsisten.
            </p>
            <p>
              Proses internal kami, mulai dari riset AI hingga implementasi teknis, berfokus pada kebutuhan pengguna dan perbaikan berkelanjutan. Tujuan kami adalah menciptakan produk digital yang andal, aman, dan efisien.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Keamanan data adalah prioritas utama kami. Kami menerapkan prinsip-prinsip ISO 27001 (Sistem Manajemen Keamanan Informasi) untuk melindungi aset digital dan data sensitif klien kami dari ancaman siber.
            </p>
            <p>
              Dengan fokus pada pengembangan tangkas (Agile), Nanoartif memastikan fleksibilitas dan kecepatan dalam beradaptasi dengan perubahan kebutuhan bisnis, sambil tetap menjaga kualitas kode yang bersih dan terstandarisasi.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'ecnocity',
      title: 'Etika AI & Transparansi',
      label: 'ETIKA',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/80 font-light leading-relaxed text-lg">
          <div className="space-y-6">
            <p>
              Kami percaya bahwa teknologi AI harus dikembangkan dengan tanggung jawab moral yang tinggi. Transparansi dalam algoritma dan penggunaan data adalah komitmen kami untuk membangun kepercayaan dengan mitra kami.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Kode etik kami memastikan bahwa setiap solusi otomasi yang kami ciptakan memberikan dampak positif bagi efisiensi kerja tanpa mengabaikan faktor kemanusiaan dan keberlanjutan digital.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="quality" className="section-target pt-10 pb-48 bg-secondary-blue">
      <div className="max-w-[1400px] mx-auto px-10 md:px-20">

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="relative">
              {/* File Folder Tab */}
              <div className={`
                absolute -top-6 left-0 h-10 px-8 rounded-t-[20px] transition-all duration-500 flex items-center
                ${openSection === section.id ? 'bg-[#004c7a] w-48' : 'bg-white/5 w-32'}
              `}>
                <div className="w-2 h-2 rounded-full bg-primary-blue"></div>
              </div>

              {/* Folder Main Container */}
              <div className={`
                relative overflow-hidden transition-all duration-700 border border-white/10 rounded-[40px] rounded-tl-none
                ${openSection === section.id ? 'bg-[#004c7a]' : 'bg-transparent'}
              `}>
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full py-12 px-10 flex items-center justify-between text-left group"
                >
                  <h2 className="text-3xl md:text-5xl font-condensed text-white tracking-tight group-hover:translate-x-4 transition-transform duration-500 font-medium normal-case">
                    {section.title}
                  </h2>

                  <div className="flex items-center gap-4">
                    <div className={`
                      px-6 py-3 rounded-full flex items-center gap-3 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-500
                      ${openSection === section.id ? 'bg-white text-secondary-blue' : 'bg-primary-blue text-white hover:bg-[#007cc2]'}
                    `}>
                      {section.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-500 ${openSection === section.id ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                      >
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                <div className={`
                  grid overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${openSection === section.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}>
                  <div className="min-h-0 px-10 pb-20">
                    <div className="pt-10 border-t border-white/5">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
