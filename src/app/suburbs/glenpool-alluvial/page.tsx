import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import Link from "next/link";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, Waves, Building2, Landmark, Microscope, Map } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glenpool Pool Builder | Alluvial Soil & Southern Valley Engineering",
  description: "The definitive guide to luxury pool construction in Glenpool, OK. Specialized engineering for alluvial soil stabilization and high-water table management in the Southern Tulsa valley.",
  alternates: {
    canonical: '/suburbs/glenpool-alluvial',
  }
};

const faqs = [
  { 
    q: "How does the Glenpool water table affect my pool construction?", 
    a: "Glenpool's proximity to the Arkansas River valley means the subterranean water table is frequently high. we utilize 'Active Hydrostatic Relief' systems—including dual-valve relief points and subterranean dewatering channels—to ensure your pool shell remains perfectly buoyant and structurally sovereign." 
  },
  { 
    q: "What is the specific 'Alluvial' challenge in the Southern Valley?", 
    a: "Unlike the rock-heavy north, the Southern Valley is defined by alluvial deposits—fine silts and sands that can shift or liquefy under load. We utilize Grade 60 steel mats and a 'Deep-Piling' protocol where necessary to anchor the structure into the stable clay or shale below the alluvial layer." 
  },
  { 
    q: "How do you handle drainage for Glenpool estates?", 
    a: "We engineer custom 'Estate-Scale' drainage arrays, including high-capacity French drains and catch-basin manifolds that direct water away from the pool shell and the home's foundation, protecting the long-term integrity of your landscape." 
  },
  { 
    q: "Is a gunite pool better for sandy soil?", 
    a: "Yes. A monolithic gunite (shotcrete) shell provides the structural rigidity needed to bridge any subtle shifts in sandy or alluvial soil. Our 6,000 PSI application creates a single, unbreakable unit that is far superior to modular systems in unstable terrain." 
  },
  { 
    q: "What is the municipal permitting process in Glenpool?", 
    a: "Glenpool is growing rapidly and has updated their drainage impact requirements. We handle all the coordination with Glenpool City Planning, including the submission of engineered site-plans and hydraulic runoff calculations." 
  },
  { 
    q: "Can I build a pool near a natural drainage easement?", 
    a: "Yes, but it requires 'Encroachment Sovereignty.' We utilize specialized structural setbacks and reinforced retaining walls to ensure your pool is safe while remaining fully compliant with Southern Valley municipal codes." 
  }
];

export default function GlenpoolPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Suburb" 
        locationEntity="Glenpool" 
        description="The definitive guide to luxury pool construction in Glenpool, Oklahoma. 1200+ words of authority on alluvial soil stabilization, Southern Valley hydraulics, and high-water table engineering."
        faqs={faqs}
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/glenpool-hero.png" 
            alt="Luxury Pool Construction Glenpool Oklahoma Alluvial" 
            fill 
            className="object-cover opacity-40 scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <main className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 py-20 md:py-32 max-w-[1600px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Location Masterclass: Southern Valley Authority</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Glenpool <br />
                  <span className="gold-gradient">Alluvial.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   Engineering for the Aquifer.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  The Southern Valley demands a different kind of strength. We specialize in stabilizing the alluvial terrain of Glenpool to create permanent aquatic environments.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Waves size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Aquifer Specialist</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Building2 size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Estate Stability</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="quote" className="lg:w-2/5 w-full flex justify-center lg:justify-end animate-slide-up">
              <div className="relative p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                <div className="bg-slate-950/95 backdrop-blur-3xl rounded-[2.4rem] p-2 border border-white/10">
                  <HeroCalculator />
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* 2. THE ALLUVIAL REPORT (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Geological Archive: Glenpool</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Southern <br /><span className="gold-gradient">Aquifer Crisis.</span></h2>
                <div className="space-y-6 text-slate-400 text-lg font-light italic leading-relaxed">
                  <p>
                    <strong className="text-white font-serif font-bold not-italic">Glenpool</strong> sits at a critical intersection of Oklahoma geology. While the &quot;918&quot; is famous for its clay, the Southern Valley around Glenpool is defined by <strong className="text-white font-serif font-bold not-italic">Alluvial Deposits</strong>—centuries of river-deposited sand, silt, and fine minerals that create a &quot;shifting sub-base.&quot; Building a luxury estate pool here is not a simple digging exercise; it is an act of subterranean stabilization.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <HardHat className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Alluvial Protocol</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        To combat soil liquefaction, we engineer a Monolithic Mat Foundation. A double-grid of Grade 60 steel and 6,000 PSI concrete creates a rigid bridge deck across unstable layers.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Waves className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Active Hydrostatic Defense</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        We implement oversized relief valves and a subterranean drainage vault of non-compressible stone to channel groundwater around the shell, maintaining total structural sovereignty.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20 md:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Map className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Estate-Scale Drainage</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        We engineer topographical flow patterns directing runoff into custom catch-basins and manifold arrays, protecting both your pool and home&apos;s foundation from erosion in boggy alluvial soils.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <ShieldCheck className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Aquifer-Isolation Barrier</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        Advanced crystalline waterproofing additives in the shotcrete prevent groundwater &quot;wicking,&quot; protecting the internal steel skeleton from oxidation in high-humidity environments.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Landmark className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Regulatory Sovereignty</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        We coordinate with Glenpool Municipal Engineers to ensure structural designs are compliant with evolving regulations, treating the permitting process as a technical defense of your project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Silt Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Builders who don&apos;t understand alluvial deposits often experience &quot;cave-ins&quot; during construction, leading to uneven wall thickness and structural weak points. We utilize <strong className="text-white font-serif font-bold not-italic">Mechanical Shoring</strong> and high-velocity shotcrete to ensure that the vertical walls of your pool are as stable as the floor, regardless of the fine silt content in the soil.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/glenpool-tech.png" alt="Glenpool Technical Alluvial Construction" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Southern Enclave</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;The Southern Valley is a living geological system. In Glenpool, we don&apos;t just build against the earth; we build in harmony with the aquifer, ensuring that your investment is protected from the unseen forces of nature.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOUTHERN HYDRAULICS (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">Aquifer & Drainage <br /><span className="gold-gradient">Sovereignty.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                In Glenpool, managing the water you don&apos;t see is just as important as the water you do. We approach hydraulics with a focus on long-term structural stability.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Active Relief", desc: "Dual-point hydrostatic relief valves to prevent shell buoyancy in high-water events.", icon: Waves, link: "/services/gunite-engineering" },
              { title: "Silt Management", desc: "Geotextile-lined drainage vaults that prevent fine Glenpool silts from clogging your system.", icon: Map, link: "/resources/tulsa-soil-geology" },
              { title: "Monolithic Mats", desc: "Engineered foundation mats that bridge the gaps in alluvial or sandy Southern Valley soil.", icon: Scale, link: "/services/gunite-engineering" },
              { title: "Municipal Sync", desc: "Expert navigation of Glenpool&apos;s evolving drainage and impact regulations.", icon: Landmark, link: "/resources/permit-sovereignty" }
            ].map((item, i) => (
              <Link key={i} href={item.link} className="p-8 glass-panel rounded-2xl border-white/5 space-y-6 hover:bg-white/[0.03] transition-all group text-left">
                <item.icon className="text-primary group-hover:scale-110 transition-transform" size={32} strokeWidth={1} />
                <h4 className="text-xl font-serif text-white italic font-bold">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">{item.desc}</p>
                <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Technical Authority <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE GLENPOOL ENGINEERING TIMELINE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Alluvial <br /><span className="gold-gradient">Protocol.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Building in the Southern Valley requires a commitment to structural physics. Here is how we build in Glenpool.</p>
              <div className="pt-8">
                <Link href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Glenpool Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Alluvial Core Sampling", detail: "Determining the precise silt-to-clay ratio to calibrate our structural steel schedule.", icon: Microscope },
                { phase: "Hydrostatic Infrastructure", detail: "Installation of subterranean drainage vaults and active relief channels.", icon: Droplets },
                { phase: "Monolithic Steel Grid", detail: "Double-matting Grade 60 steel to provide the tensile strength needed for shifting soil.", icon: HardHat },
                { phase: "Crystalline Shotcrete", detail: "Application of 6,000 PSI concrete with advanced aquifer-isolation additives.", icon: Zap },
                { phase: "Hydraulic Balance", detail: "Engineering high-volume circulation loops for Southern Valley heat cycles.", icon: Waves }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 p-8 border border-white/5 rounded-3xl group hover:bg-white/[0.02] transition-all items-start">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-all">
                    <step.icon className="text-slate-500 group-hover:text-primary transition-colors" size={24} strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-white font-serif font-bold text-xl italic">{step.phase}</h5>
                    <p className="text-slate-500 text-sm italic font-light leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE GLENPOOL MASTERWORK FAQ (Massive SEO Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Glenpool <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers for Southern Valley estate owners.</p>
            </div>

            <div className="space-y-10">
              {faqs.map((faq, i) => (
                <div key={i} className="space-y-4 border-b border-white/5 pb-8">
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-white italic flex items-start gap-4">
                    <span className="text-primary opacity-30">Q.</span>
                    {faq.q}
                  </h4>
                  <div className="pl-10 text-slate-500 text-lg font-light italic leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE FINAL CALL */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-background text-center">
        <div className="absolute inset-0 bg-primary/5 animate-pulse-slow pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px] space-y-10 md:space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black text-white italic uppercase tracking-tighter leading-none">
            Steward of <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">The Valley.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Building in Glenpool is a geological commitment. Secure your Southern Valley estate with Tulsa&apos;s most technical builder.
          </p>
          <div className="pt-12">
             <Link href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Glenpool Protocol
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
