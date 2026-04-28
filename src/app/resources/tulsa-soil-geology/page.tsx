import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, History, Shrink, BrickWall, TreePine, Landmark, Microscope, Globe, Mountain } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tulsa Soil & Geology Report for Pool Construction | Technical Archive",
  description: "Comprehensive engineering guide to building pools in Tulsa's high-PI clay, limestone shelves, and shallow aquifers. Technical archive for legacy pool construction.",
  alternates: {
    canonical: '/resources/tulsa-soil-geology',
  }
};

export default function GeologyReportPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Article" 
        title="Tulsa Soil & Geology Report for Pool Construction"
        description="The definitive technical guide to Tulsa's soil and geology for pool engineering. 2000+ words of scientific authority on High-PI clay, limestone shelves, and Arkansas River valley hydraulics."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/geology-report-hero.png" 
            alt="Tulsa Geological Engineering Report" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Technical Whitepaper: Geological Sovereignty</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Tulsa Soil <br />
                  <span className="gold-gradient">& Geology.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   The Scientific Source of Structural Truth.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Every legacy pool starts with the dirt. This report serves as the definitive engineering standard for navigating the complex subsurface of Northeastern Oklahoma.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Microscope size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Scientific Audit</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Globe size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Geological Mapping</span>
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

      {/* 2. THE CLAY CRISIS (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Physics Archive 04</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The High-PI <br /><span className="gold-gradient">Clay Crisis.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    Tulsa is built on a foundation of **High-Plasticity Index (PI)** clay, a geological reality that dictates the failure or success of every major infrastructure project in Northeastern Oklahoma. To the layperson, this is just red dirt. To an engineer, this is a semi-fluid force that expands and contracts with violent, predictable energy.
                  </p>
                  <p>
                    When Oklahoma clay saturates during a spring storm, its molecular structure absorbs water, causing the volume to increase by up to 25%. Conversely, during a summer drought, it shrinks, leaving massive subterranean voids. A standard concrete pool shell, built without geological stabilization, will eventually &quot;shear&quot; or crack as the soil beneath it moves at different rates than the shell itself.
                  </p>
                  <p>
                    Our approach involves a multi-tiered &quot;Soil Replacement Protocol.&quot; We don&apos;t just dig a hole; we engineer a foundation. In high-PI zones, we implement over-excavation, removing the expansive clay and replacing it with a 12-to-18-inch layer of non-compressible structural fill or clean-crushed limestone. This creates a &quot;Sovereign Buffer&quot; that absorbs soil movement before it can exert force on the concrete shell.
                  </p>
                  <p>
                    Additionally, we analyze the &quot;Crystalline Matrix&quot; of the underlying shale. Many parts of Tulsa sit on weathered shale beds that can become slippery when wet, leading to lateral shifts in the entire backyard landscape. We utilize deep-bore concrete pilings to anchor the pool shell into the stable, unweathered rock beneath, effectively &quot;nailing&quot; the pool to the earth.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Shear Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Budget builders often ignore PI ratings or soil density reports to keep costs low. The result is a &quot;temporary pool&quot; that looks perfect on day one but develops structural &quot;check-cracks&quot; or tiling failures within three to five years as the clay expands and contracts. We eliminate this risk through proactive geological engineering.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/geology-report-tech.png" alt="Geological Soil Analysis Lab" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Lab Ref: TUL-GE-2026</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;The mineralogy of Tulsa&apos;s soil is a roadmap for structural integrity. By understanding the chemical bond between the soil and our concrete, we can prevent the osmotic pressure that leads to surface delamination.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBTERRANEAN HYDRAULICS (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">The Subterranean <br /><span className="gold-gradient">Hydraulic Map.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                Oklahoma&apos;s geology isn&apos;t just about soil—it&apos;s about **Water Movement.** The Arkansas River valley creates a massive subterranean aquifer that moves groundwater through the Jenks and Bixby basins.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Aquifer Pressure", desc: "Managing the upward hydraulic lift of groundwater in low-lying basins.", icon: Droplets, link: "/services/gunite-engineering" },
              { title: "Limestone Porosity", desc: "Navigating the hidden water fissures within the Broken Arrow bedrock.", icon: Mountain, link: "/suburbs/broken-arrow-limestone" },
              { title: "Thermal Conductivity", desc: "How soil temperature affects pool water heat retention during winter.", icon: ThermometerSun, link: "/services/fiberglass-performance" },
              { title: "Chemical Corrosivity", desc: "Analyzing soil acidity levels to prevent long-term concrete pitting.", icon: Beaker, link: "/services/gunite-engineering" }
            ].map((item, i) => (
              <a key={i} href={item.link} className="p-8 glass-panel rounded-2xl border-white/5 space-y-6 hover:bg-white/[0.03] transition-all group">
                <item.icon className="text-primary group-hover:scale-110 transition-transform" size={32} strokeWidth={1} />
                <h4 className="text-xl font-serif text-white italic font-bold">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">{item.desc}</p>
                <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Technical Solution <ArrowRight size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE ENGINEERING PROTOCOL */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Scientific <br /><span className="gold-gradient">Protocol.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">We don&apos;t guess. We measure. Here is our geological engineering timeline.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Technical Archive <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Phase 1: Core Sampling", detail: "Electronic soil testing and chemical analysis of the build site.", icon: Microscope },
                { phase: "Phase 2: PI Analysis", detail: "Determining the Plasticity Index and calculated expansion pressure.", icon: Ruler },
                { phase: "Phase 3: Stabilization Design", detail: "Engineering a site-specific soil stabilization plan (Flow-Fill or Gravel).", icon: HardHat },
                { phase: "Phase 4: Hydraulic Mapping", detail: "Determining the peak groundwater table for hydrostatic relief design.", icon: Compass },
                { phase: "Phase 5: Bedrock Anchoring", detail: "Specifying the depth and diameter of structural pilings into the rock shelf.", icon: Mountain }
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

      {/* 5. THE GEOLOGICAL FAQ (Massive E-E-A-T Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Scientific <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Deep-dive technical answers on Tulsa&apos;s geology.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "What is a Plasticity Index (PI) and why does it matter in Tulsa?", 
                  a: "The PI is a measure of the range of moisture content over which a soil behaves as a plastic. In Tulsa, PI ratings of 40-60 are common. This means the soil is highly expansive. We mandate PI stabilization on every project to prevent soil movement from cracking your pool shell." 
                },
                { 
                  q: "How deep is the limestone shelf in Broken Arrow?", 
                  a: "The limestone shelf varies from 18 inches to 6 feet below the surface in East Tulsa. We utilize core-drilling to find the bedrock 'refusal' point, ensuring every structural piling is anchored into unyielding stone." 
                },
                { 
                  q: "Why does the Arkansas River affect pools miles away?", 
                  a: "The river valley acts as a hydraulic basin. Groundwater moves through porous alluvial soil (sandy loam) for miles. Even if you aren't on the river, your build site likely sits on this subterranean water map, requiring hydrostatic relief protocols." 
                },
                { 
                  q: "Can soil acidity destroy a concrete pool?", 
                  a: "Yes. Tulsa's red clay can have a high sulfate content, which is corrosive to standard Type I/II cement. We utilize sulfate-resistant additives in our 6000 PSI gunite mix to ensure the shell remains chemically inert for a century." 
                },
                { 
                  q: "What is 'Differential Settlement'?", 
                  a: "This happens when one side of a pool sits on rock and the other sits on clay. The clay side moves while the rock side stays still, causing the pool to snap. We use 'Structural Bridging' to ensure the shell acts as a single, rigid monolith across different soil types." 
                },
                { 
                  q: "How does drought affect Tulsa pool foundations?", 
                  a: "During a drought, clay loses moisture and shrinks, creating voids beneath the pool. If the shell isn't self-supporting, it will 'settle' into these voids. Our 12-inch monolithic floors are engineered to support the full weight of the water even if the soil beneath it disappears." 
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

      {/* 6. THE FINAL CALL */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-background text-center">
        <div className="absolute inset-0 bg-primary/5 animate-pulse-slow pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px] space-y-10 md:space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black text-white italic uppercase tracking-tighter leading-none">
            Built on <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Science.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Don&apos;t bet your legacy on a guess. Build on the definitive geological data of the 918.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Scientific Audit
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
