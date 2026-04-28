import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Performance Gunite Pool Engineering in Tulsa",
  description: "Specialized gunite pool construction engineered for Tulsa's high-PI clay soils. 6,000 PSI concrete, Grade 60 steel, and legacy structural integrity.",
  alternates: {
    canonical: '/services/gunite-engineering',
  }
};

export default function GunitePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Service" 
        locationEntity="Tulsa" 
        description="The definitive technical guide to high-performance gunite pool engineering in Tulsa. 2000+ words of engineering authority on Grade 60 steel, 6000 PSI shells, and Oklahoma soil stabilization."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/raw_gunite.png" 
            alt="Raw Gunite Engineering Tulsa" 
            fill 
            className="object-cover opacity-30 scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <main className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 py-20 md:py-32 max-w-[1600px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Technical Whitepaper: Pool Builder Tulsa</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  The Gunite <br />
                  <span className="gold-gradient">Masterclass.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   A 2,000-Word Deep-Dive into Structural Sovereignty.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Building a pool in Oklahoma is a battle against geology. This document serves as the definitive engineering standard for high-performance aquatic environments.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Zap size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">6000 PSI Shell</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <ShieldCheck size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Grade 60 Steel</span>
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

      {/* 2. THE GEOLOGY REPORT */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Geological Archive 01</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Tulsa <br /><span className="gold-gradient">Clay Defense.</span></h2>
                <div className="space-y-6 text-slate-400 text-lg font-light italic leading-relaxed">
                  <p>
                    Tulsa homeowners often encounter the &quot;High-Plasticity Index&quot; (PI) crisis. High PI clay is not merely soil; it is a semi-fluid geological force that expands by up to 20% when saturated and shrinks violently during the Oklahoma drought cycles. This movement creates a constant &quot;heaving&quot; action that can shear through standard residential foundations.
                  </p>
                  <p>
                    When a standard builder uses Grade 40 steel and a 4000 PSI shell, they are betting against physics. The expansion pressure of wet clay can exceed 5,000 pounds per square foot—easily enough to snap a cold-joint or cause a structural shear in a brittle shell. We compensate by designing a shell that is effectively a &quot;floating fortress,&quot; capable of resisting these massive lateral loads without micro-fracturing.
                  </p>
                  <p>
                    Our approach involves a multi-layered soil stabilization protocol. Before a single ounce of steel is laid, we analyze the soil density and, if necessary, implement a 12-inch sub-base of compacted structural fill or crushed limestone. This creates a buffer zone that absorbs soil movement before it reaches the pool shell, a step that 90% of volume builders skip to save time.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Midtown Shale Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  In neighborhoods like Maple Ridge and Terwilleger Heights, we often encounter a mix of river loam and rock shelves. Standard builders often &quot;over-dig&quot; and backfill with loose soil—a fatal error that leads to sinking bond beams. We utilize <strong>Structural Flow Fill</strong> and, when required, bedrock anchors to ensure the pool sits on a foundation of unyielding density.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/gunite-masterpiece.png" alt="Engineering Case Study - Gunite Application" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Jenks, OK</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6">
                <p>
                  &quot;Pneumatic velocity is the unseen factor in gunite quality. If the nozzle velocity isn&apos;t sufficient, you get low-density pockets that lead to future spalling. Our nozzlemen are certified to maintain a specific exit-velocity that ensures the silicate crystals are packed with maximum force.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE HYDROSTATIC CRISIS */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic text-center">The Hydrostatic <br /><span className="gold-gradient">Relief Protocol.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed text-center">
              <p>
                Have you ever seen a pool &quot;pop&quot; out of the ground after a heavy rain? This is the catastrophic result of <strong>Hydrostatic Pressure</strong>—effectively turning your pool into a 200,000-pound boat.
              </p>
              <p>
                In Tulsa&apos;s river valley, this is a constant threat. Most builders rely on a single, generic relief valve. We implement a <strong>Multi-Point Hydraulic Balance System.</strong>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Deep-Sump Drainage", desc: "A dedicated gravel-packed sump pit under the deep end floor.", icon: Droplets },
              { title: "Dual Relief Valves", desc: "Redundant spring-loaded valves to equalize floor pressure automatically.", icon: Anchor },
              { title: "Ballast Engineering", desc: "Increasing shell thickness in high-water zones to act as a counter-weight.", icon: Scale },
              { title: "Soil Moisture Mapping", desc: "Pre-construction soil testing to determine the local water table peak.", icon: Ruler }
            ].map((item, i) => (
              <div key={i} className="p-8 glass-panel rounded-2xl border-white/5 space-y-6 hover:bg-white/[0.03] transition-all">
                <item.icon className="text-primary" size={32} strokeWidth={1} />
                <h4 className="text-xl font-serif text-white italic font-bold">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE CHEMICAL BOND ARCHIVE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Material Sovereignty</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Silicate <br /><span className="gold-gradient">Monolith.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg font-light italic leading-relaxed">
                  <p>
                    Why 6,000 PSI? Standard concrete is porous. At the molecular level, it looks like a sponge. This allows pool chemicals to migrate into the shell, eventually reaching the steel and causing <strong>Spalling</strong>.
                  </p>
                  <p>
                    Our Gunite application achieves a density that is 50% higher than the industry standard. The result is a shell with near-zero porosity. It is a chemically inert environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
              {[
                { title: "Thermal Shock Mitigation", desc: "Managed hydration cycles to prevent micro-cracking during 100°F summers.", icon: ThermometerSun },
                { title: "Aggregate Selection", desc: "Washed, high-silicate Oklahoma river sand for a pure chemical bond.", icon: Beaker },
                { title: "Nozzle Precision", desc: "Certified master-craftsmen managing water-to-dry-mix ratio in real-time.", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 p-10 glass-panel rounded-3xl border-white/5 group hover:border-primary/20 transition-all">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-all self-start">
                    <item.icon className="text-primary" size={24} strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-white font-serif font-bold text-xl italic">{item.title}</h5>
                    <p className="text-slate-500 text-base italic font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 15-POINT TECHNICAL FAQ */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Engineering <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers to the hardest questions in Tulsa pool engineering.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "What is the true difference between Shotcrete and Gunite?", 
                  a: "Technically, both are pneumatic applications. However, Gunite is a 'dry-mix' process where the water is added at the nozzle. This allows our master-craftsmen to adjust the mix in real-time based on current humidity and temperature, ensuring a much more precise cure than factory-mixed 'wet' shotcrete." 
                },
                { 
                  q: "Why use Grade 60 steel instead of Grade 40?", 
                  a: "Grade 60 steel has a yield strength of 60,000 PSI, whereas Grade 40 has only 40,000 PSI. In Tulsa's expansive clay, that 50% increase in tensile strength is the difference between a pool that stays level and a pool that shears during a drought cycle." 
                },
                { 
                  q: "Can I build a vanishing edge pool on a sloped lot in Sand Springs?", 
                  a: "Yes, but it requires a 'Cantilevered Structural Foundation.' We utilize deep-bore concrete pilings that anchor the pool shell directly into the limestone bed, ensuring the infinity edge remains perfectly level despite the slope." 
                },
                { 
                  q: "How does the 28-day hydration protocol work?", 
                  a: "Gunite doesn't 'dry'; it cures chemically. We mandate a managed hydration cycle where the shell is kept moist for 28 days. This allows the silicate crystals to grow and interlock fully, reaching their maximum design strength without micro-fracturing." 
                },
                { 
                  q: "Will a Gunite pool settle or move?", 
                  a: "Every structure moves slightly. However, by using high-PI soil stabilization and Grade 60 steel, we ensure the shell moves as a single, rigid monolith. This prevent 'differential settlement'—the uneven sinking that causes cracks in budget builds." 
                },
                { 
                  q: "What is the lifespan of a 6000 PSI shell?", 
                  a: "If engineered correctly, a high-density gunite shell is a 100-year structure. While the aesthetic finish (plaster or pebble) may need refreshing every 15-20 years, the structural skeleton is effectively a permanent part of the estate." 
                }
              ].map((faq, i) => (
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

      {/* 6. THE 9-PHASE PROTOCOL TIMELINE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Build <br /><span className="gold-gradient">Sovereignty.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">From Soil Test to Legacy Handover.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Initiate Protocol <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Phase 1: Geological Survey", detail: "Electronic soil mapping and PI (Plasticity Index) analysis to determine the ballast requirements.", icon: ClipboardCheck },
                { phase: "Phase 2: Precision Excavation", detail: "Dual-laser guided excavation to within 1/4 inch of architectural specifications.", icon: Ruler },
                { phase: "Phase 3: Skeletal Reinforcement", detail: "Installation of the hand-tied Grade 60 steel cage with specific Midtown-depth piling.", icon: HardHat },
                { phase: "Phase 4: Plumbing Hard-Lines", detail: "Schedule 40 PVC pressurized loops for zero-leak hydraulic integrity.", icon: Droplets },
                { phase: "Phase 5: Pneumatic Application", detail: "The high-velocity 6000 PSI gunite application by certified master nozzlemen.", icon: Zap },
                { phase: "Phase 6: The 28-Day Cure", detail: "Managed hydration management to ensure maximum silicate bond strength.", icon: ThermometerSun },
                { phase: "Phase 7: Technical Tile & Masonry", detail: "Installation of freeze-thaw resistant glass tiles and natural stone coping.", icon: ShieldCheck },
                { phase: "Phase 8: High-Density Plastering", detail: "Applying the final vapor barrier and aesthetic finish (Pebble or Polished Stone).", icon: Beaker },
                { phase: "Phase 9: Hydraulic Commissioning", detail: "Balancing the turnover rates and automated chemical systems for day-one performance.", icon: Anchor }
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

      {/* 7. THE FINAL CALL */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/5 animate-pulse-slow pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px] text-center space-y-10 md:space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black text-white italic uppercase tracking-tighter leading-none">
            Claim Your <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Monolith.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Don&apos;t build a temporary pool. Build a permanent legacy engineered for the Tulsa terrain.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Project Protocol
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
