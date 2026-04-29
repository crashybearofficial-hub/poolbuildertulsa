import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import Link from "next/link";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, Mountain, Hammer, Microscope, Landmark } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Owasso Pool Builder | Limestone Bedrock Engineering Specialist",
  description: "The definitive guide to luxury pool construction in Owasso, OK. Specialized engineering for limestone shelf excavation and North Tulsa geological stability.",
  alternates: {
    canonical: '/suburbs/owasso-limestone',
  }
};

const faqs = [
  { 
    q: "How do you handle the limestone bedrock in Owasso?", 
    a: "We utilize heavy-duty hydraulic hammers and diamond-tipped excavation equipment to precisely 'carve' your pool shell into the limestone shelf. This creates a natural, unyielding anchor that prevents the structural shifting common in clay-based developments." 
  },
  { 
    q: "Does building on rock increase the project cost?", 
    a: "While the initial excavation phase (Phase 1: Subsurface Mapping) requires more energy and specialized equipment, it often eliminates the need for expensive piering or chemical soil stabilization required in South Tulsa, leading to a more structurally sovereign foundation." 
  },
  { 
    q: "What are the drainage challenges in North Tulsa?", 
    a: "Owasso's elevation and rock-heavy terrain require specialized 'Sheet Flow Management.' We engineer custom catch-basins and drainage vaults to ensure that heavy Oklahoma rains don't pool against your estate foundation." 
  },
  { 
    q: "Is a pool in Owasso safer from earthquakes?", 
    a: "By anchoring the concrete shell directly into the limestone bedrock, we create a 'Monolithic Resonance' with the earth. This significantly reduces the risk of shear cracks during seismic events compared to pools floating in expansive clay." 
  },
  { 
    q: "What is the typical permit timeline for Owasso?", 
    a: "Owasso city planning is efficient but rigorous. Expect 3-5 weeks for full engineering review. We handle the entire submittal process, including the required drainage impact studies." 
  },
  { 
    q: "Can I build an infinity edge on an Owasso rock shelf?", 
    a: "Absolutely. In fact, the limestone bedrock provides the ideal structural 'deadman' for anchoring the cantilevered bond beams required for a zero-edge or infinity-drop pool." 
  }
];

export default function OwassoPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Suburb" 
        locationEntity="Owasso" 
        description="The definitive guide to luxury pool construction in Owasso, Oklahoma. 1200+ words of authority on limestone bedrock engineering, North Tulsa hydraulics, and rock-shelf excavation."
        faqs={faqs}
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/owasso-hero.png" 
            alt="Luxury Pool Construction Owasso Oklahoma Limestone" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Location Masterclass: North Tulsa Authority</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Owasso <br />
                  <span className="gold-gradient">Limestone.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   Bedrock Engineering for the 918.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Owasso isn&apos;t just a suburb; it&apos;s a geological fortress. We specialize in carving luxury aquatic sanctuaries directly into the limestone shelves of North Tulsa.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Mountain size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Bedrock Specialist</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Hammer size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Rock Excavation</span>
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

      {/* 2. THE BEDROCK REPORT (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Geological Archive: Owasso</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Limestone <br /><span className="gold-gradient">Sovereignty.</span></h2>
                <div className="space-y-6 text-slate-400 text-lg font-light italic leading-relaxed">
                  <p>
                    Building in <strong className="text-white font-serif font-bold not-italic">Owasso</strong> or <strong className="text-white font-serif font-bold not-italic">Stone Canyon</strong> is an exercise in structural dominance. Unlike the expansive clay basins of <Link href="/suburbs/jenks-luxury" className="text-primary underline decoration-primary/20 underline-offset-4 hover:decoration-primary transition-all">Jenks</Link> and <Link href="/suburbs/bixby-estates" className="text-primary underline decoration-primary/20 underline-offset-4 hover:decoration-primary transition-all">Bixby</Link>, North Tulsa is defined by massive limestone shelves that lie mere inches below the topsoil. This bedrock is both a challenge and a massive engineering advantage for the discerning homeowner.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Anchor className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Bedrock Anchoring</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        We utilize 10,000-lb hydraulic hammers to carve the pool shell directly into the rock. Your pool shell is literally one with the earth, providing mathematically unmatched structural resilience.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Droplets className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Subsurface Drainage</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        Water travels along the limestone shelf. We engineer custom subterranean &quot;Curtain Drains&quot; to intercept groundwater, preventing hydrostatic pressure that causes spalling.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20 md:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Mountain className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Tiered Aquatic Environments</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        For estates in Stone Canyon, we utilize the natural elevation. The bedrock provides the foundation for multi-level waterfalls and <Link href="/services/vanishing-edge-hydraulics" className="text-primary underline hover:decoration-primary transition-all">zero-edge basins</Link> that seem to grow out of the landscape.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Hammer className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Seismic Resonance</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        By anchoring Grade 60 rebar directly into drilled rock-set pins, the pool shell moves in perfect sync with the bedrock during seismic cycles for resonant sovereignty.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Microscope className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Mineral Isolation</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        Limestone is highly alkaline. We utilize an advanced bituminous membrane between the rock and the shotcrete to ensure chemical isolation and structural purity for decades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Fill-Dirt Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Builders in Owasso often take shortcuts by bringing in &quot;fill dirt&quot; to avoid the cost of rock excavation. This is a catastrophic engineering error. Dirt fill on top of a limestone shelf will eventually compress or wash away, leaving your pool shell unsupported. We mandate a **100% Bedrock Foundation** policy for all Owasso projects.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/owasso-tech.png" alt="Owasso Technical Rock Excavation" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Stone Canyon</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;In Owasso, we are not just building; we are sculpting. The limestone bedrock is the most stable foundation in the 918, and we utilize it to build aquatic legacies that are virtually immortal.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NORTH TULSA HYDRAULICS (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">Hydraulic & Sheet Flow <br /><span className="gold-gradient">Sovereignty.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                The elevation changes in North Tulsa demand a specialized approach to <strong className="text-white font-serif font-bold not-italic">Sheet Flow Management.</strong> We don&apos;t just build pools; we re-engineer your estate&apos;s relationship with Oklahoma&apos;s weather.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Rock-Vault Plumbing", desc: "Engineered plumbing channels carved directly into the limestone for thermal stability.", icon: Droplets, link: "/services/gunite-engineering" },
              { title: "Elevation Mastery", desc: "Utilizing Owasso&apos;s natural topography for breathtaking multi-level aquatic features.", icon: Compass, link: "/services/fiberglass-performance" },
              { title: "Seismic Anchoring", desc: "Rock-set steel pins that lock your pool shell into the stable North Tulsa bedrock.", icon: Anchor, link: "/services/gunite-engineering" },
              { title: "Drainage Sovereignty", desc: "High-capacity catch basins designed to handle the rapid runoff of rock-heavy terrain.", icon: Landmark, link: "/resources/permit-sovereignty" }
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

      {/* 4. THE OWASSO ENGINEERING TIMELINE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Bedrock <br /><span className="gold-gradient">Protocol.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">North Tulsa construction is an act of geological precision. Here is how we manifest your limestone oasis.</p>
              <div className="pt-8">
                <Link href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Owasso Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Subsurface Rock Mapping", detail: "Electronic scanning to determine the precise depth and density of the limestone shelf.", icon: Microscope },
                { phase: "Hydraulic Hammer Phase", detail: "Utilizing 10,000-lb hammers to carve the structural pocket into the bedrock.", icon: Hammer },
                { phase: "Rock-Set Reinforcement", detail: "Drilling and epoxy-setting Grade 60 steel pins to lock the pool into the rock.", icon: HardHat },
                { phase: "High-Velocity Shotcrete", detail: "Applying 6,000 PSI concrete at pneumatic speed for maximum crystalline density.", icon: Zap },
                { phase: "Crystalline Hydration", detail: "A 21-day controlled curing process to ensure structural immortality.", icon: Droplets }
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

      {/* 5. THE OWASSO MASTERWORK FAQ (Massive SEO Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Owasso <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers for Stone Canyon and North Tulsa estate owners.</p>
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
            Built on <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Bedrock.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Your estate was built for a century. Let&apos;s make sure it lasts another. Expert bedrock stewardship for Owasso and North Tulsa.
          </p>
          <div className="pt-12">
             <Link href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Owasso Protocol
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
