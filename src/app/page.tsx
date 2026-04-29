import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import TrustBar from "@/components/TrustBar";
import GeologySection from "@/components/GeologySection";
import USPSection from "@/components/USPSection";
import NeighborhoodMesh from "@/components/NeighborhoodMesh";
import FAQSection from "@/components/FAQSection";
import MasterworksGallery from "@/components/MasterworksGallery";
import Image from "next/image";
import { ShieldCheck, Compass, Anchor, Scale, Ruler } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Gunite Pools & Legacy Aquatic Engineering",
  description: "Tulsa's premier technical pool engineering firm. We specialize in high-performance gunite construction, complex terrain, and luxury estate pools.",
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Homepage" 
        locationEntity="Tulsa" 
        description="Bespoke luxury pool engineering for Tulsa's elite estates. Master-builders of high-performance aquatic environments."
      />
      
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-luxury.png" 
            alt="Million Dollar Luxury Pool Builder in Tulsa" 
            fill 
            className="object-cover opacity-60 scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
        </div>

        <main className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 py-20 md:py-32 max-w-[1600px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="lg:w-3/5 space-y-8 md:space-y-12 text-center lg:text-left">
              <div className="space-y-2 md:space-y-4">
                <p className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs animate-fade-in">Established Authority | 918 Native</p>
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-8xl font-serif font-black leading-[0.85] text-white tracking-tighter uppercase italic">
                  Pool Builder <br />
                  <span className="gold-gradient">Tulsa.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                  Legacy Engineering.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light italic">
                  Your home is built on a geological minefield. We build the aquatic foundations that <span className="text-primary font-serif">command it.</span>
                </p>
                <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-[0.3em] leading-loose">
                  High-Performance pool construction for the Tulsa Metro. Built for the heat, the clay, and the centuries.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 pt-6">
                <a href="#quote" className="bg-gradient-to-r from-primary to-[#B8860B] text-black font-black px-10 md:px-14 py-4 md:py-6 rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all transform hover:scale-105 shadow-2xl">
                  Secure Your Estimate
                </a>
                <a href="#authority-network" className="glass-panel text-white font-black px-10 md:px-14 py-4 md:py-6 rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all hover:bg-white/10">
                  View Specs
                </a>
              </div>
            </div>

            <div id="quote" className="lg:w-2/5 w-full flex justify-center lg:justify-end animate-slide-up">
              <HeroCalculator />
            </div>
          </div>
        </main>
      </section>

      {/* 2. TRUST & HERITAGE BAR */}
      <section className="relative z-20 -mt-10">
        <TrustBar />
      </section>

      {/* 3. THE GEOLOGY THREAT */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold italic text-white leading-tight">
              Tulsa Clay is a <span className="gold-gradient">Killer.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light tracking-wide italic">
              Industry standard builders are failing the 918. Here is how we ensure you don&apos;t join them.
            </p>
          </div>
          <GeologySection />
        </div>
      </section>

      {/* 4. THE MASTER BUILDER'S MANIFESTO */}
      <section className="py-24 md:py-32 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 max-w-7xl mx-auto">
            <div className="w-full md:w-2/5 relative">
              <div className="aspect-[4/5] bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700">
                <Image src="/hero-luxury.png" alt="Master Builder" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass-panel p-6 md:p-8 rounded-2xl border border-primary/20 hidden sm:block">
                <p className="text-primary font-black text-xl md:text-2xl mb-1 italic font-serif">20+</p>
                <p className="text-[9px] uppercase font-bold text-slate-500 tracking-[0.4em]">Years of Heritage</p>
              </div>
            </div>
            
            <div className="w-full md:w-3/5 space-y-6 md:space-y-10 text-center md:text-left">
              <div className="space-y-4">
                <p className="text-primary font-bold uppercase text-[10px] tracking-[0.5em]">Confidential Consultation</p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight italic">
                  The Industry is Full <br className="hidden md:block" />
                  of <span className="underline decoration-primary decoration-2 underline-offset-[10px] text-primary">Salesmen.</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                      <Compass className="text-primary" size={24} />
                    </div>
                    <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Engineers, Not Salesmen</h3>
                  </div>
                  <p className="text-sm text-slate-400/90 leading-relaxed italic">
                    You need a builder who understands why Sand Springs limestone behaves differently under load than Owasso shale. A builder who knows the difference between a pool that looks good in year one and stands true in year twenty.
                  </p>
                </div>

                <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                      <Anchor className="text-primary" size={24} />
                    </div>
                    <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Absolute Structural Respect</h3>
                  </div>
                  <p className="text-sm text-slate-400/90 leading-relaxed italic">
                    In Oklahoma, the ground is alive. It breathes, shifts, and destroys anything built without respect. We build for the extreme—calculating for worst-case soil expansion scenarios that standard codes ignore.
                  </p>
                </div>

                <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                      <Scale className="text-primary" size={24} />
                    </div>
                    <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Masterworks Over Volume</h3>
                  </div>
                  <p className="text-sm text-slate-400/90 leading-relaxed italic">
                    We don&apos;t do volume. Every project we accept is treated as a masterwork of aquatic engineering. We are the firm people call when they want it done correctly the first time, or to salvage a failed project.
                  </p>
                </div>

                <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                      <Ruler className="text-primary" size={24} />
                    </div>
                    <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Commercial-Grade Rigor</h3>
                  </div>
                  <p className="text-sm text-slate-400/90 leading-relaxed italic">
                    Building a luxury pool is a legacy investment. We respect that legacy by applying the same engineering rigor to your backyard that you would expect in a multi-million dollar commercial foundation.
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="font-serif font-bold text-white text-xl md:text-2xl italic">— The Principal Engineer</p>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.5em] mt-2">918 Native & Master Mason</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 TECHNICAL DEEP DIVE: THE ENGINEERING STANDARD */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px]">Technical Specifications</p>
                <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic leading-tight">The 6,000 PSI <br /><span className="gold-gradient">Sovereignty.</span></h2>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-8 text-slate-400 text-lg font-light leading-relaxed italic">
                <p>
                  While the industry standard for gunite shells is often 3,000 to 4,000 PSI, we strictly mandate a 6,000 PSI monolithic pour protocol. Why? Because the thermal shock differential in Tulsa—where temperatures can swing 50 degrees in 12 hours—demands a concrete density that resists micro-fracturing at a molecular level.
                </p>
                <p>
                  Our steel reinforcement schedules are calculated using Grade 60 tensile rebar, tied at 6-inch centers in high-stress areas like transitions and deep-end coves. This isn&apos;t just &quot;over-building&quot;; it is engineering for the reality of high-plasticity clay that exerts thousands of pounds of pressure against your pool walls during a drought cycle.
                </p>
                <p>
                  We also implement a proprietary &quot;Hydraulic Efficiency&quot; standard. Most builders use 2-inch plumbing because it is cheaper. We use 3-inch suction lines and sweeping radius elbows instead of standard 90-degree fittings. This reduces friction loss (TDH), allows your variable-speed pumps to run at lower RPMs, and saves you thousands in energy costs while providing superior water clarity.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold mb-2">Monolithic Pours</h4>
                  <p className="text-xs text-slate-500 italic">Eliminating cold-joints in the shell structure to prevent localized stress points and future leaks.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold mb-2">Curing Protocols</h4>
                  <p className="text-xs text-slate-500 italic">21-day hydration cycles monitored by digital sensors to ensure peak structural hydration of the concrete matrix.</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 md:p-12 rounded-[3rem] border-white/5 space-y-8 sticky top-32">
              <h3 className="text-2xl font-serif font-bold text-white italic">Case Study: The Midtown Limestone Enclave</h3>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                In 2024, we were called to a project in Maple Ridge where a previous builder had hit solid limestone at 4 feet and stopped. They attempted to &quot;float&quot; the pool shell on top of the rock. 
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold text-xs">1</span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">The Solution</h5>
                    <p className="text-xs text-slate-500 italic">We executed precision pneumatic rock removal to reach a 9-foot depth, then core-drilled the limestone to install bedrock anchors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold text-xs">2</span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">The Outcome</h5>
                    <p className="text-xs text-slate-500 italic">The shell is now structurally tied to the earth&apos;s mantle. It is effectively part of the Oklahoma geology, immovable and eternal.</p>
                  </div>
                </div>
              </div>
              <Image 
                src="/hero-luxury.png" 
                alt="Limestone Engineering Case Study" 
                width={600} 
                height={400} 
                className="rounded-2xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. MASTERWORKS GALLERY (Portfolio) */}
      <MasterworksGallery />

      {/* 6. THE 918 DIFFERENCE */}
      <USPSection />

      {/* 7. NEIGHBORHOOD EXCLUSIVITY */}
      <NeighborhoodMesh />

      {/* 8. TECHNICAL ARCHIVE */}
      <FAQSection />

      {/* 4. THE ENGINEERING MANIFESTO (Deep Authority Section) */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px] relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-6">
              <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">The Technical Manifesto</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white italic leading-[1.1]">Structural <br /><span className="gold-gradient">Sovereignty.</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-slate-400 text-lg md:text-xl font-light leading-relaxed italic">
              <div className="space-y-8">
                <p>
                  The Oklahoma soil is a living, moving entity. In the 918, we don&apos;t build pools; we build geological anchors. The standard residential pool in Tulsa is designed to last 15 years before the first structural crack appears. We refuse that timeline. Our engineering philosophy is rooted in &quot;Structural Sovereignty&quot;—the idea that an aquatic environment should remain completely independent of the soil&apos;s movement.
                </p>
                <p>
                  To achieve this, we utilize a monolithic shotcrete protocol that far exceeds municipal requirements. While the city may allow for a 4,000 PSI shell, we mandate a 6,000 PSI high-density matrix. This density is critical not just for strength, but for porosity. A denser shell is a more chemically inert shell, preventing the silicate-based &quot;spalling&quot; that occurs when pool chemicals migrate into the concrete and oxidize the reinforcement steel.
                </p>
              </div>
              <div className="space-y-8">
                <p>
                  Our steel schedules are equally uncompromising. We utilize Grade 60 tensile steel, tied in a grid pattern that is 40% denser than the industry average. In high-stress zones like bond beams and deep-end transitions, we implement &quot;Skeletal Overbuilding,&quot; ensuring that even if the surrounding earth shifts by several inches, the pool shell acts as a single, unbreakable unit.
                </p>
                <p>
                  This is the difference between a pool builder and a structural engineering firm. We approach every backyard in Midtown, Jenks, or Bixby as a unique geological challenge. From the river-valley aquifers to the limestone ridge-lines, we engineer for the specific physics of your estate. Your legacy deserves a structure that is as permanent as the land it sits upon. We are the architects of that permanence.
                </p>
              </div>
            </div>

            <div className="p-12 glass-panel rounded-[3rem] border-primary/20 bg-primary/5 space-y-10">
               <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="shrink-0 w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <ShieldCheck className="text-primary" size={48} />
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white italic">The 50-Year Structural Guarantee</h3>
                    <p className="text-slate-500 text-base md:text-lg italic font-light leading-relaxed">
                      Our shells are engineered to withstand the most extreme Oklahoma soil cycles. If the earth moves, our monolith holds. We provide the industry&apos;s most comprehensive structural warranty because our engineering makes failure an impossibility.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FINAL CALL */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/5 animate-pulse-slow pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px] text-center space-y-10 md:space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black text-white italic uppercase tracking-tighter leading-none">
            Secure Your <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Legacy.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Stop gambling with generic contractors. Hire the engineers who are defining the standard of luxury in the 918.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Project Protocol
            </a>
          </div>
        </div>
      </section>

      {/* 10. TOPICAL AUTHORITY HUB — Internal Link Mesh */}
      <section id="authority-network" className="py-24 md:py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px] space-y-16 md:space-y-24">
          <div className="text-center space-y-4">
            <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px]">The Authority Network</p>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white italic">Every Answer. <span className="gold-gradient">One Source.</span></h2>
            <p className="text-slate-500 text-lg font-light italic max-w-2xl mx-auto">Navigate the complete technical archive of Tulsa&apos;s most authoritative pool engineering resource. From soil reports to hydraulic schematics.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* MONEY PAGES — Services */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary border-b border-primary/20 pb-4">Engineering Silos</h3>
              <ul className="space-y-3">
                {[
                  { name: "Gunite Shell Engineering", sub: "6,000 PSI · Grade 60 Steel", href: "/services/gunite-engineering" },
                  { name: "Vanishing Edge Hydraulics", sub: "Laminar Flow · Infinity Design", href: "/services/vanishing-edge-hydraulics" },
                  { name: "Silent Equipment Bunkers", sub: "Subterranean · Zero Decibel", href: "/services/subterranean-equipment-bunkers" },
                  { name: "Fiberglass Performance", sub: "7-Day Install · Zero Porosity", href: "/services/fiberglass-performance" },
                  { name: "Historic Restoration", sub: "Maple Ridge · Heritage Masonry", href: "/services/historic-restoration" }
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="flex flex-col gap-1 p-5 glass-panel rounded-2xl border-white/5 hover:border-primary/20 hover:bg-white/[0.02] transition-all group">
                      <span className="text-white font-serif font-bold italic text-base group-hover:text-primary transition-colors">{link.name}</span>
                      <span className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">{link.sub}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LOCATION PAGES — Suburbs */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary border-b border-primary/20 pb-4">Luxury Enclaves</h3>
              <ul className="space-y-3">
                {[
                  { name: "Jenks Luxury Enclave", sub: "Arkansas River · Aquifer Engineering", href: "/suburbs/jenks-luxury" },
                  { name: "Owasso Limestone Shelf", sub: "Stone Canyon · Bedrock Anchoring", href: "/suburbs/owasso-limestone" },
                  { name: "Glenpool Alluvial Basin", sub: "Southern Valley · Soil Stabilization", href: "/suburbs/glenpool-alluvial" },
                  { name: "Bixby Estate Enclave", sub: "Stone Canyon · Grand-Scale Hydraulics", href: "/suburbs/bixby-estates" },
                  { name: "Midtown Historic Enclave", sub: "Maple Ridge · Air-Spade Canopy", href: "/suburbs/midtown-historic" },
                  { name: "Broken Arrow Bedrock", sub: "Forest Ridge · Bedrock Anchoring", href: "/suburbs/broken-arrow-limestone" }
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="flex flex-col gap-1 p-5 glass-panel rounded-2xl border-white/5 hover:border-primary/20 hover:bg-white/[0.02] transition-all group">
                      <span className="text-white font-serif font-bold italic text-base group-hover:text-primary transition-colors">{link.name}</span>
                      <span className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">{link.sub}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCE PAGES — E-E-A-T */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary border-b border-primary/20 pb-4">Technical Archive</h3>
              <ul className="space-y-3">
                {[
                  { name: "Tulsa Soil & Geology Report", sub: "High-PI Clay · Limestone Shelves · Aquifer Maps", href: "/resources/tulsa-soil-geology" },
                  { name: "Permit Sovereignty Guide", sub: "COA · Floodplain Variances · HOA Liaison", href: "/resources/permit-sovereignty" },
                  { name: "Engineering Heritage", sub: "The Principal Architect · E-E-A-T", href: "/about" }
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="flex flex-col gap-1 p-5 glass-panel rounded-2xl border-white/5 hover:border-primary/20 hover:bg-white/[0.02] transition-all group">
                      <span className="text-white font-serif font-bold italic text-base group-hover:text-primary transition-colors">{link.name}</span>
                      <span className="text-slate-600 text-[10px] uppercase tracking-widest font-bold leading-relaxed">{link.sub}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
