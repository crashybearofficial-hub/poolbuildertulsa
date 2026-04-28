import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, History, Shrink, BrickWall } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historic Pool Restoration & Midtown Tulsa Engineering",
  description: "Specialized historic pool restoration in Tulsa's Maple Ridge and Yorktown. Antique masonry matching, canopy preservation, and tight-access excavation.",
  alternates: {
    canonical: '/services/historic-restoration',
  }
};

export default function RestorationPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Service" 
        locationEntity="Tulsa" 
        description="The definitive guide to historic pool restoration in Midtown Tulsa. A 2,000-word authority manifest on tight-access engineering, historic masonry matching, and structural shell resurrection."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/restoration-hero.png" 
            alt="Historic Pool Restoration Midtown Tulsa" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Technical Whitepaper: Midtown Authority</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Historic <br />
                  <span className="gold-gradient">Restoration.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   The Resurrecting of Tulsa&apos;s Gilded Era.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Restoring a historic pool is an act of stewardship. We combine surgical engineering with heritage masonry to bring 1920s estates into the 21st century.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <History size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Heritage Certified</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Shrink size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Tight-Access Expert</span>
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

      {/* 2. THE SURGICAL DEFENSE (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Midtown Engineering 03</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Tight-Access <br /><span className="gold-gradient">Surgical Strike.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    Midtown Tulsa estates were not built with modern machinery in mind. Narrow alleyways, century-old oak canopies, and historic masonry walls often leave us with less than 40 inches of clearance. While generic builders refuse these projects or suggest &quot;destroying to build,&quot; we view these constraints as an engineering challenge.
                  </p>
                  <p>
                    We utilize specialized **High-Torque Compact Excavation** equipment and electric-driven machinery to minimize noise and emissions in quiet Midtown neighborhoods. We can navigate a 36-inch garden gate without disturbing a single historic brick. This &quot;Surgical Strike&quot; approach preserves the soul of your estate while we work beneath the surface to modernize its infrastructure.
                  </p>
                  <p>
                    Our <strong>Subterranean Utility Mapping Protocol</strong> is essential in historic districts. In Maple Ridge and Terwilleger Heights, many utility lines are century-old and poorly mapped. We utilize ground-penetrating radar (GPR) and precision hand-digging to ensure that your estate&apos;s antique water and sewer lines are protected throughout the excavation phase.
                  </p>
                  <p>
                    Furthermore, we address the unique &quot;settlement profile&quot; of older homes. When we excavate next to a historic foundation, we implement temporary shoring and vibration monitoring to ensure the integrity of the main residence. It is a level of caution that only a firm with deep roots in Tulsa architecture can provide.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Historic Root Shield
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                   Restoring a pool near 100-year-old Pecan or Oak trees requires <strong>Air-Spade Excavation.</strong> This process uses compressed air to blow away soil without damaging the delicate root bark. We then install structural root barriers that protect your pool shell from future root intrusion while allowing the tree to continue thriving as a centerpiece of your estate.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/restoration-tech.png" alt="Historic Restoration Process" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Maple Ridge</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6">
                <p>
                  &quot;Restoration is as much about chemistry as it is about masonry. We analyze the mineral content of original coping to ensure our repair mortar doesn&apos;t cause a salt reaction with the surrounding stone.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MASONRY MATCHING (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">The Heritage <br /><span className="gold-gradient">Masonry Ledger.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                The greatest failure in restoration is a &quot;visible repair.&quot; We spend weeks sourcing **Period-Correct Masonry** to ensure our work is indistinguishable from the original 1920s architecture.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Brick Matching", desc: "Sourcing antique Tulsa brick from the same era to match color and texture.", icon: BrickWall },
              { title: "Lime Mortar Ratios", desc: "Utilizing historic mortar recipes to prevent structural cracking in old stone.", icon: Beaker },
              { title: "Glass Tile Revival", desc: "Authentic iridescent glass tiles that reflect the Gilded Age aesthetic.", icon: Zap },
              { title: "Structural Grouting", desc: "Injecting high-density foam to stabilize settling historic decks.", icon: ShieldCheck }
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

      {/* 4. THE RESTORATION TIMELINE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Resurrecting <br /><span className="gold-gradient">Timeline.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Restoration is not a race. It is a meticulous technical process.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Technical Protocol <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Diagnostic Phase", detail: "Electronic leak detection and structural core sampling of the existing shell.", icon: ClipboardCheck },
                { phase: "Heritage Compliance", detail: "Navigating the City of Tulsa Historic Preservation Office for permit approval.", icon: Compass },
                { phase: "Structural Resurrection", detail: "Internal re-lining with Grade 60 steel and high-velocity gunite overlay.", icon: HardHat },
                { phase: "Plumbing Modernization", detail: "Upgrading 100-year-old lead or copper lines to Schedule 40 hydraulic loops.", icon: Droplets },
                { phase: "Masonry Integration", detail: "Hand-laying period-correct stone and brick features to match original architecture.", icon: BrickWall },
                { phase: "Aesthetic Refinement", detail: "Final plastering with high-density silicate finishes for modern longevity.", icon: Beaker },
                { phase: "Systems Handover", detail: "Commissioning automated chemical and heating systems for modern comfort.", icon: Anchor }
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

      {/* 5. THE TECHNICAL FAQ */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Restoration <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Answers to the unique challenges of Midtown Tulsa estates.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "Do I need Historic Preservation Office (HPO) approval for a restoration?", 
                  a: "In districts like Maple Ridge or Yorktown, yes. We handle the entire submittal process, including architectural drawings that prove the restoration maintains the historic character of the neighborhood." 
                },
                { 
                  q: "Can you save a pool shell that is leaking or cracked?", 
                  a: "Yes, through a process called 'Structural Over-Lining.' We essentially build a new, modern pool shell *inside* your historic shell, preserving the footprint while delivering 21st-century structural integrity." 
                },
                { 
                  q: "How do you get equipment into a backyard with no alley access?", 
                  a: "We utilize compact 'Spider' cranes and micro-excavators that can fit through a standard pedestrian gate. If necessary, we can lift equipment over the house via a 100-ton crane to avoid disturbing the landscape." 
                },
                { 
                  q: "Can you match the original brick from 1925?", 
                  a: "We maintain a proprietary database of antique brick sources in Oklahoma and surrounding states. We can typically match 100-year-old brick to within 95% of color and texture." 
                },
                { 
                  q: "Is it possible to add modern features like a heater or salt system?", 
                  a: "Absolutely. We specialize in 'Invisible Modernization,' where we hide state-of-the-art automation and heating equipment behind historic masonry walls or subterranean vaults." 
                },
                { 
                  q: "What about the old trees in Midtown?", 
                  a: "We are one of the few builders in Tulsa that utilizes Air-Spade technology to excavate around historic tree roots without causing damage, ensuring your estate's canopy remains intact." 
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
      <section className="py-24 md:py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/5 animate-pulse-slow pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px] text-center space-y-10 md:space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black text-white italic uppercase tracking-tighter leading-none">
            Honoring the <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Legacy.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Your estate was built to last a century. Let&apos;s make sure it lasts another. Expert restoration for Midtown Tulsa.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Restoration Protocol
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
