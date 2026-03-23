import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.pricing-header', 
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
      
      // Category Titles Animation
      gsap.utils.toArray('.category-title').forEach((title: any) => {
        gsap.fromTo(title, 
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: title, start: 'top 85%' }
          }
        );
      });

      // Cards Animation per Category Grid
      gsap.utils.toArray('.cards-grid').forEach((grid: any) => {
        const cards = grid.children;
        gsap.fromTo(cards, 
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: grid, start: 'top 85%' }
          }
        );
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const categories = [
    {
      label: t({ ID: 'Pembuatan Website', EN: 'Website Development' }),
      icon: '🌐',
      plans: [
        {
          name: t({ ID: 'Landing Page', EN: 'Landing Page' }),
          normalPrice: 'Rp 2.500.000',
          discountPrice: 'Rp 1.500.000',
          desc: t({ ID: 'Ideal untuk promosi satu produk atau kampanye marketing.', EN: 'Ideal for single product promotion or marketing campaigns.' }),
          popular: false,
          features: [
            t({ ID: '1 Halaman (Panjang)', EN: '1 Page (Long Scroll)' }),
            t({ ID: 'Desain Responsif', EN: 'Responsive Design' }),
            t({ ID: 'Copywriting Promosi', EN: 'Promotional Copywriting' }),
            t({ ID: 'Integrasi WhatsApp', EN: 'WhatsApp Integration' }),
            t({ ID: 'Revisi 2x', EN: '2x Revisions' }),
          ]
        },
        {
          name: t({ ID: 'Company Profile', EN: 'Company Profile' }),
          normalPrice: 'Rp 5.500.000',
          discountPrice: 'Rp 3.500.000',
          desc: t({ ID: 'Website resmi perusahaan untuk kredibilitas B2B.', EN: 'Official company website for B2B credibility.' }),
          popular: true,
          features: [
            t({ ID: 'Hingga 5 Halaman', EN: 'Up to 5 Pages' }),
            t({ ID: 'Premium UI/UX Design', EN: 'Premium UI/UX Design' }),
            t({ ID: 'Sistem CMS (Admin Panel)', EN: 'CMS System (Admin Panel)' }),
            t({ ID: 'Optimasi SEO Dasar', EN: 'Basic SEO Optimization' }),
            t({ ID: 'Domain & Hosting 1 Thn', EN: 'Free Domain & Hosting (1 Yr)' }),
            t({ ID: 'Revisi 3x', EN: '3x Revisions' }),
          ]
        },
        {
          name: t({ ID: 'E-Commerce', EN: 'E-Commerce' }),
          normalPrice: 'Rp 10.000.000',
          discountPrice: 'Rp 7.000.000',
          desc: t({ ID: 'Toko online kustom dengan pembayaran terintegrasi.', EN: 'Custom online store with integrated payments.' }),
          popular: false,
          features: [
            t({ ID: 'Halaman Produk Tak Terbatas', EN: 'Unlimited Product Pages' }),
            t({ ID: 'Payment Gateway Integration', EN: 'Payment Gateway Integration' }),
            t({ ID: 'Keranjang & Checkout', EN: 'Cart & Checkout' }),
            t({ ID: 'Dashboard Manajemen Stok', EN: 'Inventory Management Dashboard' }),
            t({ ID: 'Setup Ongkos Kirim', EN: 'Shipping Costs Setup' }),
            t({ ID: 'Revisi 5x', EN: '5x Revisions' }),
          ]
        }
      ]
    },
    {
      label: t({ ID: 'Pembuatan Aplikasi', EN: 'App Development' }),
      icon: '📱',
      plans: [
        {
          name: t({ ID: 'Aplikasi Android Basic', EN: 'Basic Android App' }),
          normalPrice: 'Rp 15.000.000',
          discountPrice: 'Rp 9.500.000',
          desc: t({ ID: 'Aplikasi fungsional khusus untuk ekosistem Android.', EN: 'Functional app specifically for the Android ecosystem.' }),
          popular: false,
          features: [
            t({ ID: 'UI/UX Standar Kustom', EN: 'Custom Standard UI/UX' }),
            t({ ID: 'Fitur Login & Pendaftaran', EN: 'Login & Registration' }),
            t({ ID: 'Integrasi Database Kustom', EN: 'Custom Database Integration' }),
            t({ ID: 'Bantuan Rilis PlayStore', EN: 'PlayStore Release Assistance' }),
            t({ ID: 'Perbaikan Bug 2 Bulan', EN: '2-Month Bug Fixing' }),
          ]
        },
        {
          name: t({ ID: 'Aplikasi Cross-Platform', EN: 'Cross-Platform App' }),
          normalPrice: 'Rp 25.000.000',
          discountPrice: 'Rp 17.500.000',
          desc: t({ ID: 'Satu coding untuk rilis dua aplikasi (Android & iOS).', EN: 'One codebase to release two apps (Android & iOS).' }),
          popular: true,
          features: [
            t({ ID: 'React Native / Flutter Framework', EN: 'React Native / Flutter Framework' }),
            t({ ID: 'Rilis PlayStore & AppStore', EN: 'PlayStore & AppStore Release' }),
            t({ ID: 'Push Notifications', EN: 'Push Notifications' }),
            t({ ID: 'Integrasi Backend API Lengkap', EN: 'Full Backend API Integration' }),
            t({ ID: 'Otomatisasi Email & Notif', EN: 'Email & Notification Automation' }),
          ]
        },
        {
          name: t({ ID: 'Native App Performa Tinggi', EN: 'High-Performance Native App' }),
          normalPrice: 'Rp 45.000.000',
          discountPrice: 'Rp 32.000.000',
          desc: t({ ID: 'Aplikasi native Swift/Kotlin untuk fungsi hardware khusus.', EN: 'Swift/Kotlin native app for specific hardware functions.' }),
          popular: false,
          features: [
            t({ ID: 'Akses Hardware Penuh (Kamera/GPS)', EN: 'Full Hardware Access (Camera/GPS)' }),
            t({ ID: 'Performa & Kecepatan Maksimal', EN: 'Max Performance & Speed' }),
            t({ ID: 'Sinkronisasi Data Real-Time', EN: 'Real-Time Data Sync' }),
            t({ ID: 'Desain Animasi Kualitas Atas', EN: 'Top Quality Animation Design' }),
            t({ ID: 'Dukungan Prioritas 24/7', EN: '24/7 Priority Support' }),
          ]
        }
      ]
    },
    {
      label: t({ ID: 'Pembuatan Sistem', EN: 'System Development' }),
      icon: '⚙️',
      plans: [
        {
          name: t({ ID: 'Sistem Informasi Dasar', EN: 'Basic Info System' }),
          normalPrice: 'Rp 10.000.000',
          discountPrice: 'Rp 6.500.000',
          desc: t({ ID: 'Digitalisasi manajemen data, kas, & pelaporan harian.', EN: 'Digitalization of data management, cash flow, & daily reporting.' }),
          popular: false,
          features: [
            t({ ID: 'Database Manajemen', EN: 'Database Management' }),
            t({ ID: 'Sistem Login User & Admin', EN: 'User & Admin Login' }),
            t({ ID: 'Laporan Eksport PDF/Excel', EN: 'Export PDF/Excel Reports' }),
            t({ ID: 'Dashboard Admin Cepat', EN: 'Fast Admin Dashboard' }),
            t({ ID: 'Training Karyawan', EN: 'Employee Training' }),
          ]
        },
        {
          name: t({ ID: 'ERP Skala Menengah', EN: 'Mid-Scale ERP' }),
          normalPrice: 'Rp 30.000.000',
          discountPrice: 'Rp 18.500.000',
          desc: t({ ID: 'Integrasi HRD, Finance, Gudang & Sales dalam satu sistem.', EN: 'Integrate HR, Finance, Warehouse & Sales in one system.' }),
          popular: true,
          features: [
            t({ ID: 'Multi-Divisi & Hak Akses', EN: 'Multi-Division & Access Rights' }),
            t({ ID: 'Otomatisasi Laporan Keuangan', EN: 'Automated Financial Reports' }),
            t({ ID: 'Tracking Inventaris Real-Time', EN: 'Real-Time Inventory Tracking' }),
            t({ ID: 'Notifikasi Otomatis', EN: 'Automated Notifications' }),
            t({ ID: 'Maintenance Gratis 3 Bulan', EN: 'Free Maintenance (3 Mos)' }),
          ]
        },
        {
          name: t({ ID: 'Sistem Enterprise Custom', EN: 'Custom Enterprise System' }),
          normalPrice: 'Rp 50.000.000',
          discountPrice: 'Rp 35.000.000',
          desc: t({ ID: 'Sistem kompleks skala besar dengan microservices.', EN: 'Complex large-scale system with microservices architecture.' }),
          popular: false,
          features: [
            t({ ID: 'Arsitektur Microservices', EN: 'Microservices Architecture' }),
            t({ ID: 'Akses API Lengkap', EN: 'Full API Access' }),
            t({ ID: 'Keamanan Data Enkripsi', EN: 'Encrypted Data Security' }),
            t({ ID: 'Optimasi High-Traffic', EN: 'High-Traffic Optimization' }),
            t({ ID: 'Dedicated Server Setup', EN: 'Dedicated Server Setup' }),
          ]
        }
      ]
    },
    {
      label: t({ ID: 'Solusi AI', EN: 'AI Solutions' }),
      icon: '🤖',
      plans: [
        {
          name: t({ ID: 'Custom AI Chatbot', EN: 'Custom AI Chatbot' }),
          normalPrice: 'Rp 15.000.000',
          discountPrice: 'Rp 9.500.000',
          desc: t({ ID: 'Otomasi CS terintegrasi WA, IG, dan Website.', EN: 'CS automation integrated with WA, IG, and Website.' }),
          popular: true,
          features: [
            t({ ID: 'Training Model dengan Data Bisnis', EN: 'Model Training with Business Data' }),
            t({ ID: 'Integrasi WhatsApp Official', EN: 'Official WhatsApp Integration' }),
            t({ ID: 'Otomatisasi Leads', EN: 'Leads Automation' }),
            t({ ID: 'Dashboard Percakapan', EN: 'Conversation Dashboard' }),
          ]
        },
        {
          name: t({ ID: 'Dashboard Analitik AI', EN: 'AI Analytics Dashboard' }),
          normalPrice: 'Rp 40.000.000',
          discountPrice: 'Rp 28.000.000',
          desc: t({ ID: 'Sistem prediksi tren bisnis dari big data perusahaan.', EN: 'Business trend prediction system from enterprise big data.' }),
          popular: false,
          features: [
            t({ ID: 'Machine Learning Kustom', EN: 'Custom Machine Learning' }),
            t({ ID: 'Visualisasi Data Real-time', EN: 'Real-time Data Visualization' }),
            t({ ID: 'Prediksi & Support Keputusan', EN: 'Prediction & Decision Support' }),
            t({ ID: 'Integrasi Multi-Database', EN: 'Multi-Database Integration' }),
          ]
        }
      ]
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-[#F8F9FA] relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10 w-full">
        
        {/* Header */}
        <div className="pricing-header mb-20 md:mb-28 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#003b5c] mb-6 tracking-tight leading-tight">
            {t({ ID: 'Pilihan Paket Investasi', EN: 'Investment Package Options' })}
          </h2>
          <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed">
            {t({ 
              ID: 'Solusi digital premium dengan fitur lengkap dan transparansi harga. Diskon spesial berlaku untuk proyek bulan ini.', 
              EN: 'Premium digital solutions with full features and price transparency. Special discounts apply for projects this month.' 
            })}
          </p>
        </div>

        {/* Categories Stacked Vertically */}
        <div className="flex flex-col gap-24 md:gap-32 w-full">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="w-full">
              
              {/* Category Title */}
              <div className="category-title flex items-center justify-center gap-4 mb-12 md:mb-16">
                <span className="text-3xl md:text-4xl filter drop-shadow-md">{cat.icon}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#003b5c]">
                  {cat.label}
                </h3>
              </div>

              {/* Pricing Cards Grid */}
              <div className={`cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${cat.plans.length < 3 ? 'lg:justify-center lg:flex' : 'justify-items-center'} w-full`}>
                {cat.plans.map((plan, i) => (
                  <div
                    key={`${catIdx}-${i}`}
                    className={`
                      ${cat.plans.length < 3 ? 'lg:w-[350px]' : 'w-full'}
                      max-w-[360px] relative rounded-3xl p-6 md:p-8 md:py-9 transition-all duration-500
                      ${plan.popular 
                        ? 'bg-[#003b5c] text-white shadow-2xl scale-100 lg:scale-[1.02] z-10' 
                        : 'bg-white text-gray-800 shadow-xl scale-100 z-0'}
                    `}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#ffb703] text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border-2 border-white">
                        {t({ ID: 'Paling Populer', EN: 'Most Popular' })}
                      </div>
                    )}

                    {/* Plan Name */}
                    <h4 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#003b5c]'}`}>
                      {plan.name}
                    </h4>
                    
                    <p className={`text-[13px] mb-6 leading-relaxed ${plan.popular ? 'text-blue-100/90' : 'text-gray-500'}`}>
                      {plan.desc}
                    </p>

                    {/* Price Area */}
                    <div className="mb-5">
                      <span className={`text-xs font-medium line-through block mb-1 ${plan.popular ? 'text-blue-200/80' : 'text-gray-400'}`}>
                        {plan.normalPrice}
                      </span>
                      <div className="flex items-end gap-1">
                        <span className={`text-[1.8rem] md:text-[2.2rem] leading-none font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-primary-blue'}`}>
                          {plan.discountPrice}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`h-px w-full mb-6 ${plan.popular ? 'bg-white/15' : 'bg-gray-200'}`} />

                    {/* Features List with Checkmarks */}
                    <ul className="space-y-3 mb-8 min-h-[170px]">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2">
                          <svg 
                            className={`w-[18px] h-[18px] flex-shrink-0 mt-[2px] ${plan.popular ? 'text-[#ffb703]' : 'text-primary-blue'}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth="3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`text-[13px] leading-relaxed font-medium ${plan.popular ? 'text-white/95' : 'text-gray-700'}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      className={`
                        w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5
                        ${plan.popular
                          ? 'bg-[#ffb703] text-black hover:bg-[#ffc333]'
                          : 'bg-[#003b5c] text-white hover:bg-primary-blue'}
                      `}
                    >
                      {t({ ID: 'Pilih Paket Ini', EN: 'Choose This Plan' })}
                    </button>

                  </div>
                ))}
              </div>

              {/* Separator between categories except the last one */}
              {catIdx !== categories.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-24 md:mt-32 opacity-70"></div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-20 pt-10 text-center">
          <p className="text-gray-400 text-sm font-medium">
            {t({ ID: '*Harga dapat disesuaikan dengan kebutuhan modul & kerumitan fitur perusahan Anda.', EN: '*Pricing can be adjusted based on module needs & feature complexity of your company.' })}
          </p>
        </div>

      </div>
    </section>
  );
}
