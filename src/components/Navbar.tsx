'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Zap, MapPin, FileText, ArrowRight } from 'lucide-react';

const NAV_STRUCTURE = [
  {
    label: "Engineering Silos",
    icon: Zap,
    items: [
      { name: "Gunite Shell Engineering", sub: "6,000 PSI · Grade 60 Steel", href: "/services/gunite-engineering" },
      { name: "Fiberglass Performance", sub: "7-Day Install · Zero Porosity", href: "/services/fiberglass-performance" },
      { name: "Historic Restoration", sub: "Maple Ridge · Heritage Masonry", href: "/services/historic-restoration" },
    ]
  },
  {
    label: "Luxury Enclaves",
    icon: MapPin,
    items: [
      { name: "Jenks Luxury Enclave", sub: "Arkansas River · Aquifer Engineering", href: "/suburbs/jenks-luxury" },
      { name: "Bixby Estate Enclave", sub: "Stone Canyon · Grand Hydraulics", href: "/suburbs/bixby-estates" },
      { name: "Midtown Historic", sub: "Maple Ridge · Air-Spade Canopy", href: "/suburbs/midtown-historic" },
      { name: "Broken Arrow Limestone", sub: "Forest Ridge · Bedrock Anchoring", href: "/suburbs/broken-arrow-limestone" },
    ]
  },
  {
    label: "Technical Archive",
    icon: FileText,
    items: [
      { name: "Tulsa Soil & Geology", sub: "High-PI Clay · Limestone · Aquifers", href: "/resources/tulsa-soil-geology" },
      { name: "Permit Sovereignty", sub: "COA · Floodplain · HOA Liaison", href: "/resources/permit-sovereignty" },
      { name: "Engineering Heritage", sub: "The Master Builders · 918 Native", href: "/about" },
    ]
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-2 md:py-3' : 'py-4 md:py-8'}`}>
        <div className="container mx-auto px-4 md:px-12 lg:px-24 xl:px-32 max-w-[1600px]">
          <div className={`glass-panel rounded-full px-6 md:px-12 py-3 md:py-5 flex items-center justify-between transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-black/90 border-primary/20 shadow-2xl' : 'bg-transparent border-white/5'}`}>
            
            {/* LOGO */}
            <Link href="/" className="flex flex-col shrink-0">
              <span className="text-lg md:text-2xl font-serif font-black text-white italic leading-none tracking-tighter">
                PoolBuilder<span className="gold-gradient">Tulsa.</span>
              </span>
              <span className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-1.5 ml-0.5 hidden xs:block">Engineering Legacy</span>
            </Link>

            {/* DESKTOP MEGA-MENU */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_STRUCTURE.map((group, i) => (
                <div key={i} className="relative">
                  <button
                    onMouseEnter={() => setActiveDropdown(i)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
                    className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-colors tracking-[0.3em] py-2"
                  >
                    {group.label}
                    <ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === i ? 'rotate-180 text-primary' : ''}`} />
                  </button>

                  {/* DROPDOWN PANEL */}
                  <div
                    onMouseEnter={() => setActiveDropdown(i)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 transition-all duration-300 ${activeDropdown === i ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                  >
                    <div className="bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-3 shadow-[0_30px_80px_rgba(0,0,0,0.8)] space-y-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start justify-between gap-4 p-4 rounded-xl hover:bg-white/[0.04] group transition-all"
                        >
                          <div>
                            <p className="text-white font-serif font-bold italic text-sm group-hover:text-primary transition-colors">{item.name}</p>
                            <p className="text-slate-600 text-[9px] uppercase tracking-widest font-bold mt-0.5">{item.sub}</p>
                          </div>
                          <ArrowRight size={12} className="text-primary/0 group-hover:text-primary/60 transition-all mt-1 shrink-0 -translate-x-1 group-hover:translate-x-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA & HAMBURGER */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="hidden sm:flex items-center space-x-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em]">Live Status</span>
              </div>
              
              <a href="#quote" className="hidden sm:block bg-white hover:bg-primary text-black font-black px-8 py-3.5 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl">
                Initiate
              </a>

              {/* Hamburger */}
              <button 
                onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileExpanded(null); }}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-2 focus:outline-none"
              >
                <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[90] lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl"></div>
        <div className="relative h-full flex flex-col overflow-y-auto pt-28 pb-12 px-8 space-y-4">
          
          {NAV_STRUCTURE.map((group, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-2xl font-serif font-black text-white italic">{group.label}</span>
                <ChevronDown size={16} className={`text-primary transition-transform duration-300 ${mobileExpanded === i ? 'rotate-180' : ''}`} />
              </button>

              <div className={`transition-all duration-300 overflow-hidden ${mobileExpanded === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 space-y-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-col gap-1 px-6 py-4 bg-white/[0.03] rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <span className="text-white font-serif font-bold italic">{item.name}</span>
                      <span className="text-slate-600 text-[9px] uppercase tracking-widest font-bold">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="pt-8">
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#quote"
              className="block w-full text-center bg-primary text-black font-black py-7 rounded-2xl text-xs uppercase tracking-[0.4em] shadow-2xl"
            >
              Initiate Project Protocol
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
