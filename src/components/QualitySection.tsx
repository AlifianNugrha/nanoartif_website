import { useState } from 'react';

export default function QualitySection() {
  const [openSection, setOpenSection] = useState<string | null>('quality');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'quality',
      title: 'Quality management system',
      label: 'QUALITY',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/80 font-light leading-relaxed text-lg">
          <div className="space-y-6">
            <p>
              The Nanoartif group first introduced its quality management system in 1994, in compliance with international regulation ISO 9001 and certified by SQS. The Quality management system is based on continuous control of company processes.
            </p>
            <p>
              The internal processes, from product development through to customer care are all customer-focused and orientated towards continued product improvement. The aims of our quality policy have always been to continuously improve products, support customers, and also to respect the environment.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Many other products and component parts are certified according to European and international standards. Under this aspect, the European machinery directive and the European standard that regulates the fabrication and assembly of steel and aluminium structures are of fundamental importance.
            </p>
            <p>
              With ISO 45001 certification (Occupational Health and Safety), Nanoartif goes further in meeting the statutory requirements, introducing a system through which health and safety improvements are planned and implemented on an annual basis.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'ecnocity',
      title: 'Ecnocity & Ethics',
      label: 'ECNOCITY',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/80 font-light leading-relaxed text-lg">
          <div className="space-y-6">
            <p>
              Ecnocity represents our commitment to the fusion of ecology and technology. We believe that urban development and industrial excellence must go hand in hand with environmental preservation.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Our ethical code ensures transparency and integrity across all levels of the organization, fostering a culture of responsibility and long-term sustainability.
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
