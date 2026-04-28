import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, Waves, Microscope, Map, Gauge } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vanishing Edge Hydraulics | Infinity Pool Engineering Tulsa",
  description: "The definitive technical guide to vanishing edge and infinity pool hydraulics. Engineering for surge tanks, laminar flow, and structural hydrostatic balance in the 918.",
  alternates: {
    canonical: '/services/vanishing-edge-hydraulics',
  }
};

const faqs = [
  { 
    q: "How do you calculate the size of a surge tank for a vanishing edge?", 
    a: "Surge tank volume is a function of 'Total GPM Over Weir' and 'Bather Load Displacement.' We utilize a safety factor of 1.5x the calculated surge volume to ensure the system never runs dry during peak evaporation or heavy bather use, maintaining a perfect, silent spillover." 
  },
  { 
    q: "Is an infinity edge safe for Oklahoma clay soil?", 
    a: "Yes, provided the structural bond beam is anchored into the unyielding sub-base or piered to bedrock. In Tulsa, we utilize Grade 60 steel and a massive cantilevered foundation to ensure the 'vanishing' wall never tilts or loses its horizontal precision." 
  },
  { 
    q: "How do you maintain a perfect 'Laminar Flow' over the edge?", 
    a: "Laminar flow requires near-zero turbulence at the weir wall. We engineer specialized manifold returns that diffuse water velocity before it reaches the surface, ensuring a glass-like edge even at high flow rates." 
  },
  { 
    q: "Do infinity pools use more water or energy?", 
    a: "While they require a dedicated surge pump, we utilize variable-speed 'Sovereign' pumps that run at optimized RPMs. This allows you to maintain the edge effect with up to 70% less energy than standard fixed-speed systems." 
  },
  { 
    q: "How do you handle the 'Hard Water' scaling on the weir wall?", 
    a: "Oklahoma's water can be mineral-heavy. We integrate automated 'Saturation Index' controllers and acid-feed systems that maintain perfectly balanced water, preventing the calcium buildup that can ruin the aesthetics of a vanishing edge." 
  },
  { 
    q: "Can a vanishing edge be built on a flat lot?", 
    a: "Absolutely. We utilize 'Raised-Beam' vanishing edges to create a 360-degree perimeter overflow effect, often referred to as a 'Slot Edge' or 'Knife Edge' pool, which provides a stunning modern look even without a natural slope." 
  }
];

export default function VanishingEdgePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Service" 
        specificService="Vanishing Edge Hydraulics" 
        description="The definitive technical guide to vanishing edge and infinity pool hydraulics. 1200+ words of authority on surge tank engineering, laminar flow, and structural hydrostatic balance."
        faqs={faqs}
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/vanishing-hero.png" 
            alt="Vanishing Edge Infinity Pool Hydraulics Engineering" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Engineering Masterclass: Zero-Edge Sovereignty</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Vanishing <br />
                  <span className="gold-gradient">Hydraulics.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   The Physics of Infinite Water.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  A vanishing edge is not a design choice; it is a hydraulic challenge. We specialize in the precision engineering required to maintain a perfect, silent spillover in the Oklahoma climate.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Gauge size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Hydraulic Precision</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Droplets size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Laminar Flow</span>
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

      {/* 2. THE HYDRAULIC MANIFESTO (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Technical Archive: Zero-Edge Engineering</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Science of <br /><span className="gold-gradient">The Weir Wall.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    A **Vanishing Edge** (or Infinity Pool) is one of the most complex aquatic structures to engineer, particularly in an environment as geologically volatile as Northeastern Oklahoma. The &quot;illusion&quot; of water disappearing over the horizon is achieved through a precise balance of structural cantilevered beams, surge tank volume, and multi-pump hydraulic loops. If any of these factors is miscalculated by even a fraction of an inch, the entire effect—and the structural integrity of the pool—is compromised.
                  </p>
                  <p>
                    The core of the system is the **Weir Wall.** We engineer this wall with a slight internal taper and a &quot;Knife Edge&quot; finish to ensure a clean break of the water surface. Most builders use a standard bullnose tile, which causes water to &quot;cling&quot; to the wall, leading to unsightly calcium streaks and a noisy, splashing spillover. Our technical approach ensures a **Laminar Flow**—a glass-like sheet of water that remains silent and visually perfect regardless of wind speed or bather load.
                  </p>
                  <p>
                    Behind the weir wall lies the **Surge Tank** (or Catch Basin). This is the &quot;lungs&quot; of the infinity pool. In the 918 area code, where evaporation can reach half an inch per day in the summer, the surge tank must be engineered with a massive reserve capacity. We utilize automated **Ultrasonic Water Level Sensors** to maintain the precise volume needed to keep the edge effect active while preventing pump cavitation. Our surge tanks are also structurally independent, allowing them to expand and contract at a different rate than the main pool shell without causing shear cracks.
                  </p>
                  <p>
                    Hydraulically, a vanishing edge requires a **Dedicated Edge Loop.** We utilize high-efficiency variable-speed pumps that are custom-tuned to the specific GPM (Gallons Per Minute) required by the weir wall&apos;s length. By utilizing 3-inch or 4-inch plumbing manifolds, we minimize &quot;Total Dynamic Head&quot; (friction loss), allowing you to maintain a massive 40-foot vanishing edge at a fraction of the energy cost of a standard system.
                  </p>
                  <p>
                    Structurally, the vanishing edge wall is often a **Cantilevered Retaining Structure.** In Tulsa&apos;s high-PI clay, this wall must be piered to bedrock or anchored with massive &quot;deadman&quot; footings to prevent it from tilting toward the slope. We utilize Grade 60 steel and a specialized shotcrete application with 6,000 PSI density to ensure that the weir wall remains perfectly level—to within 1/16th of an inch—over the entire life of the estate.
                  </p>
                  <p>
                    Finally, we address the **Saturation Index Challenge.** Infinity pools have a high rate of water aeration, which leads to rapid pH spikes and mineral precipitation. We integrate automated CO2-injection or acid-feed systems that maintain perfectly balanced water chemistry, protecting the stone finishes on the weir wall and ensuring that your vanishing edge remains a masterwork of clarity.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Levelness Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  A vanishing edge that is out of level by even 1/8th of an inch will have &quot;dry spots&quot; where water doesn&apos;t flow. Most builders rely on traditional levels; we utilize **Sub-Millimeter Laser Alignment** during the steel-tie and shotcrete phases to ensure a mathematically perfect horizontal line.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/vanishing-tech.png" alt="Technical Vanishing Edge Construction" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: River Ridge Estate</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;The vanishing edge is the ultimate test of a pool builder&apos;s technical discipline. In Tulsa, we engineer these systems to be both structurally immortal and hydraulically silent, creating a seamless transition from your sanctuary to the Oklahoma sky.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HYDRAULIC SOVEREIGNTY (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">The Physics of <br /><span className="gold-gradient">Infinite Water.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                Managing water over a weir wall requires a mastery of fluid dynamics. We utilize commercial-grade engineering to ensure your vanishing edge is a masterwork of performance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Surge Vaults", desc: "Independent subterranean tanks engineered for massive reserve capacity and zero noise.", icon: Gauge, link: "/services/gunite-engineering" },
              { title: "Laminar Diffusers", desc: "Proprietary manifold returns that eliminate surface turbulence for a glass-like edge.", icon: Droplets, link: "/services/fiberglass-performance" },
              { title: "Ultrasonic Levels", desc: "Sub-millimeter precision sensors that maintain the perfect water level automatically.", icon: Waves, link: "/services/vanishing-edge-hydraulics" },
              { title: "Structural Pins", desc: "Grade 60 steel anchors that lock the weir wall into the unyielding Oklahoma bedrock.", icon: Anchor, link: "/services/gunite-engineering" }
            ].map((item, i) => (
              <a key={i} href={item.link} className="p-8 glass-panel rounded-2xl border-white/5 space-y-6 hover:bg-white/[0.03] transition-all group text-left">
                <item.icon className="text-primary group-hover:scale-110 transition-transform" size={32} strokeWidth={1} />
                <h4 className="text-xl font-serif text-white italic font-bold">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">{item.desc}</p>
                <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Technical Authority <ArrowRight size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE INFINITY ENGINEERING TIMELINE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Edge <br /><span className="gold-gradient">Protocol.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Creating a perfect horizon is an act of mathematical discipline. Here is how we build the infinite.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Vanishing Portfolio <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Hydraulic GPM Mapping", detail: "Calculating the precise flow rates needed for your specific weir wall length and wind exposure.", icon: Microscope },
                { phase: "Cantilevered Steel Phase", detail: "Installation of the Grade 60 structural cage with specialized rock-set anchors.", icon: HardHat },
                { phase: "Knife-Edge Formwork", detail: "Precision forming of the weir wall with sub-millimeter laser alignment.", icon: Ruler },
                { phase: "Surge Tank Integration", detail: "Independent structural vault construction with waterproof membrane lining.", icon: Anchor },
                { phase: "Balance Tuning", detail: "Final calibration of the variable-speed 'Sovereign' loops for a silent, perfect edge.", icon: Gauge }
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

      {/* 5. THE INFINITY MASTERWORK FAQ (Massive SEO Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Infinity <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct technical answers for zero-edge pool owners.</p>
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
            The Infinite <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Horizon.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Engineered for the ridge. Designed for the legacy. The definitive Tulsa vanishing edge experience.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Infinity Protocol
             </a>
          </div>
        </div>
      </section>

    </div>
  );
}
