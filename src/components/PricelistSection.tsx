import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function PricelistSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Slide-up reveal animation
      gsap.to(shapeRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Header fade in
      gsap.from('.pricelist-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const categories = [
    {
      label: 'Nanobot',
      plans: [
        {
          name: t({ ID: 'Nanobot AI Platform', EN: 'Nanobot AI Platform' }),
          price: t({ ID: 'Platform AI Cerdas', EN: 'Smart AI Platform' }),
          period: '',
          desc: t({ ID: 'Tingkatkan efisiensi bisnis Anda dengan asisten AI kustom yang pintar mengelola operasional dan layanan pelanggan secara otomatis 24/7.', EN: 'Boost your business efficiency with a custom AI assistant smartly managing operations and customer service automatically 24/7.' }),
          popular: true,
          features: [
            t({ ID: 'Training Model AI Khusus Bisnis', EN: 'Business-Specific AI Model Training' }),
            t({ ID: 'Integrasi Multi-Platform (WA, Web, dll)', EN: 'Multi-Platform Integration (WA, Web, etc)' }),
            t({ ID: 'Dashboard Analitik Lengkap', EN: 'Full Analytics Dashboard' }),
            t({ ID: 'Otomasi Workflow Bisnis', EN: 'Business Workflow Automation' }),
          ],
        }
      ]
    },
    {
      label: 'Website',
      icon: '🌐',
      plans: [
        {
          name: 'Landing Page',
          price: t({ ID: 'Rp 1.5jt', EN: 'Rp 1.5M' }),
          period: '',
          desc: t({ ID: '1-5 halaman responsif', EN: '1-5 responsive pages' }),
          popular: false,
          features: [
            t({ ID: 'Desain modern & responsif', EN: 'Modern & responsive design' }),
            t({ ID: 'SEO optimized', EN: 'SEO optimized' }),
            t({ ID: 'Contact form', EN: 'Contact form' }),
            t({ ID: 'Free domain .com (1 tahun)', EN: 'Free .com domain (1 year)' }),
            t({ ID: 'Free hosting (1 tahun)', EN: 'Free hosting (1 year)' }),
          ],
        },
        {
          name: 'Company Profile',
          price: t({ ID: 'Rp 3.5jt', EN: 'Rp 3.5M' }),
          period: '',
          desc: t({ ID: '5-15 halaman + CMS', EN: '5-15 pages + CMS' }),
          popular: true,
          features: [
            t({ ID: 'Desain premium custom', EN: 'Custom premium design' }),
            t({ ID: 'CMS (Content Management)', EN: 'CMS (Content Management)' }),
            t({ ID: 'Blog & artikel', EN: 'Blog & articles' }),
            t({ ID: 'Google Analytics', EN: 'Google Analytics' }),
            t({ ID: 'Multi bahasa', EN: 'Multi language' }),
            t({ ID: 'Free domain + hosting', EN: 'Free domain + hosting' }),
          ],
        },
        {
          name: 'E-Commerce',
          price: t({ ID: 'Rp 7jt', EN: 'Rp 7M' }),
          period: '',
          desc: t({ ID: 'Toko online lengkap', EN: 'Complete online store' }),
          popular: false,
          features: [
            t({ ID: 'Payment gateway', EN: 'Payment gateway' }),
            t({ ID: 'Manajemen produk', EN: 'Product management' }),
            t({ ID: 'Keranjang belanja', EN: 'Shopping cart' }),
            t({ ID: 'Dashboard admin', EN: 'Admin dashboard' }),
            t({ ID: 'Notifikasi otomatis', EN: 'Auto notifications' }),
            t({ ID: 'Free domain + hosting', EN: 'Free domain + hosting' }),
          ],
        },
      ]
    },
    {
      label: t({ ID: 'Sistem', EN: 'System' }),
      icon: '⚙️',
      plans: [
        {
          name: t({ ID: 'Sistem Informasi', EN: 'Information System' }),
          price: t({ ID: 'Rp 5jt', EN: 'Rp 5M' }),
          period: '',
          desc: t({ ID: 'Manajemen data lengkap', EN: 'Complete data management' }),
          popular: false,
          features: [
            t({ ID: 'CRUD lengkap', EN: 'Complete CRUD' }),
            t({ ID: 'Role & permission', EN: 'Role & permission' }),
            t({ ID: 'Export laporan (PDF/Excel)', EN: 'Report export (PDF/Excel)' }),
            t({ ID: 'Dashboard analitik', EN: 'Analytics dashboard' }),
            t({ ID: 'Login multi-level', EN: 'Multi-level login' }),
          ],
        },
        {
          name: 'ERP System',
          price: t({ ID: 'Rp 15jt', EN: 'Rp 15M' }),
          period: '',
          desc: t({ ID: 'Integrasi bisnis penuh', EN: 'Full business integration' }),
          popular: true,
          features: [
            t({ ID: 'Modul HR, Keuangan, Inventory', EN: 'HR, Finance, Inventory modules' }),
            t({ ID: 'Integrasi antar departemen', EN: 'Cross-department integration' }),
            t({ ID: 'Otomasi proses bisnis', EN: 'Business process automation' }),
            t({ ID: 'Real-time reporting', EN: 'Real-time reporting' }),
            t({ ID: 'Custom workflow engine', EN: 'Custom workflow engine' }),
            t({ ID: 'Training & support', EN: 'Training & support' }),
          ],
        },
        {
          name: t({ ID: 'Sistem Custom', EN: 'Custom System' }),
          price: t({ ID: 'Konsultasi', EN: 'Consult' }),
          period: '',
          desc: t({ ID: 'Solusi sesuai kebutuhan', EN: 'Tailored solutions' }),
          popular: false,
          features: [
            t({ ID: 'Analisis kebutuhan mendalam', EN: 'Deep requirements analysis' }),
            t({ ID: 'Arsitektur custom', EN: 'Custom architecture' }),
            t({ ID: 'Integrasi API pihak ketiga', EN: 'Third-party API integration' }),
            t({ ID: 'Dokumentasi lengkap', EN: 'Full documentation' }),
            t({ ID: 'Maintenance support', EN: 'Maintenance support' }),
          ],
        },
      ]
    },
    {
      label: t({ ID: 'Aplikasi', EN: 'App' }),
      icon: '📱',
      plans: [
        {
          name: t({ ID: 'Mobile App', EN: 'Mobile App' }),
          price: t({ ID: 'Rp 10jt', EN: 'Rp 10M' }),
          period: '',
          desc: t({ ID: 'Android & iOS', EN: 'Android & iOS' }),
          popular: true,
          features: [
            t({ ID: 'Cross-platform (Android & iOS)', EN: 'Cross-platform (Android & iOS)' }),
            t({ ID: 'UI/UX desain premium', EN: 'Premium UI/UX design' }),
            t({ ID: 'Push notification', EN: 'Push notification' }),
            t({ ID: 'App Store & Play Store publish', EN: 'App Store & Play Store publish' }),
            t({ ID: 'Maintenance 3 bulan', EN: '3 months maintenance' }),
          ],
        },
        {
          name: t({ ID: 'Desktop App', EN: 'Desktop App' }),
          price: t({ ID: 'Rp 8jt', EN: 'Rp 8M' }),
          period: '',
          desc: t({ ID: 'Windows / macOS / Linux', EN: 'Windows / macOS / Linux' }),
          popular: false,
          features: [
            t({ ID: 'Native performance', EN: 'Native performance' }),
            t({ ID: 'Auto update', EN: 'Auto update' }),
            t({ ID: 'Offline access penuh', EN: 'Full offline access' }),
            t({ ID: 'Integrasi hardware', EN: 'Hardware integration' }),
            t({ ID: 'License management', EN: 'License management' }),
          ],
        },
        {
          name: t({ ID: 'AI Custom App', EN: 'Custom AI App' }),
          price: t({ ID: 'Konsultasi', EN: 'Consult' }),
          period: '',
          desc: t({ ID: 'Machine learning & AI', EN: 'Machine learning & AI' }),
          popular: false,
          features: [
            t({ ID: 'Machine learning model', EN: 'Machine learning model' }),
            t({ ID: 'Computer vision / NLP', EN: 'Computer vision / NLP' }),
            t({ ID: 'Integrasi dengan Nanobot', EN: 'Integration with Nanobot' }),
            t({ ID: 'Cloud deployment', EN: 'Cloud deployment' }),
            t({ ID: 'Monitoring & retraining', EN: 'Monitoring & retraining' }),
          ],
        },
      ]
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 100;
      const pos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    }
  };

  const current = categories[activeCategory];

  return (
    <section
      id="pricelist"
      ref={sectionRef}
      className="section-target py-16 md:py-24 bg-white overflow-hidden relative"
    >
      {/* Slide-up reveal overlay */}
      <div
        ref={shapeRef}
        className="absolute inset-0 bg-secondary-blue z-20 transform-gpu"
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">

        {/* Header */}
        <div className="pricelist-header mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="text-primary-blue font-bold uppercase text-[11px] tracking-widest mb-4 block">
              {t({ ID: 'Produk & Layanan', EN: 'Products & Services' })}
            </span>
            <h2 className="text-2xl md:text-5xl font-light text-black tracking-tight leading-[1.1] normal-case mb-4">
              {t({ ID: 'Produk dan layanan yang kami sediakan.', EN: 'The products and services we provide.' })}
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
              {t({ 
                ID: 'Harga transparan, tanpa biaya tersembunyi. Hubungi kami untuk penawaran khusus.',
                EN: 'Transparent pricing, no hidden fees. Contact us for special offers.'
              })}
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border
                ${activeCategory === i 
                  ? 'bg-black text-white border-black' 
                  : 'bg-transparent text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black'}
              `}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className={`grid grid-cols-1 ${current.plans.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-3'} gap-6 md:gap-5 mb-10 md:mb-14`}>
          {current.plans.map((plan, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className={`
                pricelist-card relative rounded-[20px] transition-all duration-500
                ${current.plans.length === 1 ? 'md:flex md:items-center md:gap-12 p-8 md:p-12' : 'p-6 md:p-8'}
                ${plan.popular 
                  ? current.plans.length === 1 
                      ? 'bg-black text-white shadow-2xl shadow-black/10 md:mb-0' 
                      : 'bg-black text-white shadow-2xl shadow-black/10 md:-mt-4 md:mb-[-16px]' 
                  : 'bg-[#F0EEEC] text-black'}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && current.plans.length > 1 && (
                <div className="absolute top-6 right-6 bg-primary-blue text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {t({ ID: 'Populer', EN: 'Popular' })}
                </div>
              )}

              {/* Left Column (if single plan) or Top Section */}
              <div className={`${current.plans.length === 1 ? 'md:flex-1' : ''}`}>
                {/* Plan Name */}
                <p className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-4 ${plan.popular ? 'text-white/50' : 'text-gray-400'}`}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-3xl md:text-4xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-black'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm font-light ${plan.popular ? 'text-white/40' : 'text-gray-400'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className={`text-sm font-light mb-5 max-w-sm ${plan.popular ? 'text-white/50' : 'text-gray-400'}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Divider (Hidden on MD if single plan) */}
              <div className={`h-[1px] mb-5 ${current.plans.length === 1 ? 'md:hidden' : ''} ${plan.popular ? 'bg-white/10' : 'bg-black/5'}`} />

              {/* Right Column (if single plan) or Bottom Section */}
              <div className={`${current.plans.length === 1 ? 'md:w-[500px] flex-shrink-0' : ''}`}>
                {/* Features */}
                <ul className={`space-y-3 ${current.plans.length === 1 ? 'mb-8' : 'mb-6'}`}>
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-blue' : 'text-primary-blue'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={`text-sm font-light leading-relaxed ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {activeCategory === 0 ? (
                <a
                  href="https://nanobot.nanoartif.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block w-full py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 text-center
                    ${plan.popular 
                      ? 'bg-white text-black hover:bg-primary-blue hover:text-white' 
                      : 'bg-black text-white hover:bg-primary-blue'}
                  `}
                >
                  {t({ ID: 'Kunjungi Website Resmi', EN: 'Visit Official Website' })}
                </a>
              ) : (
                <button
                  onClick={scrollToContact}
                  className={`
                    w-full py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer border-none
                    ${plan.popular 
                      ? 'bg-white text-black hover:bg-primary-blue hover:text-white' 
                      : 'bg-black text-white hover:bg-primary-blue'}
                  `}
                >
                  {t({ ID: 'Konsultasi Sekarang', EN: 'Consult Now' })}
                </button>
              )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
