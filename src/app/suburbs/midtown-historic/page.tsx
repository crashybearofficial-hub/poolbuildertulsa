import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, History, Shrink, BrickWall, TreePine, Landmark } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Midtown Tulsa Pool Builder | Historic Estate Engineering",
  description: "Specialized pool construction for Midtown Tulsa. Maple Ridge historic preservation, canopy protection, and tight-access surgical excavation.",
  alternates: {
    canonical: '/suburbs/midtown-historic',
  }
};

export default function MidtownPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Suburb" 
        locationEntity="Midtown Tulsa" 
        description="The definitive guide to luxury pool construction in Midtown Tulsa. 2000+ words of authority on Maple Ridge infrastructure, historic tree preservation, and Tulsa Preservation Commission compliance."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/midtown-enclave-hero.png" 
            alt="Historic Estate Pool Construction Midtown Tulsa" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Location Masterclass: Midtown Stewardship</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Midtown <br />
                  <span className="gold-gradient">Heritage.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   Engineering for the Gilded Era.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Midtown isn&apos;t just a neighborhood; it&apos;s Tulsa&apos;s architectural legacy. We specialize in building modern aquatic sanctuaries within the high-clearance gates of Maple Ridge and Yorktown.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <History size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Historic Specialist</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <TreePine size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Canopy Preservation</span>
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

      {/* 2. THE INFRASTRUCTURE REPORT (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Technical Archive: Midtown</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">Infrastructure <br /><span className="gold-gradient">Archeology.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    Building in **Maple Ridge**, **Terwilleger Heights**, or **Yorktown** is a surgical operation. Unlike the greenfield developments of South Tulsa, Midtown sits on a century-old matrix of unmapped utility lines, brick-lined sewer systems, and hand-laid clay pipes from the 1920s. We don&apos;t just dig; we perform archeology.
                  </p>
                  <p>
                    Our **Surgical Excavation Protocol** utilizes electronic ground-penetrating radar (GPR) to map your estate before a single bucket of dirt is turned. We treat every inch of soil as a potential piece of Tulsa&apos;s history, ensuring that we modernize your lifestyle without disturbing the integrity of the neighborhood&apos;s original infrastructure. This is critical in areas where old lead water mains or abandoned cisterns can create massive structural voids if not handled with engineering precision.
                  </p>
                  <p>
                    Furthermore, Midtown&apos;s old-growth canopy is its crown jewel. We utilize **Air-Spade Root Mapping** to build within feet of protected oaks and elms. By using high-pressure compressed air to clear soil away from the roots without damaging the delicate cambium layer, we can weave our structural steel through the root system. This allows for the construction of a permanent pool shell in a space that generic builders would consider &quot;unbuildable.&quot;
                  </p>
                  <p>
                    For the historic masonry, we maintain a &quot;Gilded Era Protocol.&quot; We don&apos;t use modern cast-concrete coping on a 1920s Tudor manor. We source salvaged brick from the same period or custom-quarry limestone that matches the mineral profile of your home&apos;s original stone. Our goal is a &quot;Seamless Integration&quot; where the new aquatic feature looks as though it was part of the original estate plan.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <Shrink className="text-primary" size={20} />
                  The Tight-Access Mastery
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Many Midtown estates have less than 4 feet of clearance between historic structures or century-old stone walls. We utilize specialized **Micro-Cranes** and **Spider-Excavators** that can pass through a standard side gate, preserving your landscaping and masonry. This eliminates the need for wall-demolition and ensures your estate remains undisturbed during the build.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/midtown-enclave-tech.png" alt="Midtown Technical Infrastructure Process" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Maple Ridge</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;In Midtown, we are stewards of history. Every brick we lay and every root we preserve is a commitment to the architectural integrity of Tulsa&apos;s most prestigious neighborhoods.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORIC COMPLIANCE (New Community Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">The Tulsa <br /><span className="gold-gradient">Preservation Liaison.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                Navigating the **Tulsa Preservation Commission** is a specialized skill. We handle the entire COA (Certificate of Appropriateness) process, ensuring your pool project respects the architectural integrity of Midtown&apos;s historic districts.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "COA Mastery", desc: "100% success rate in navigating Historic District design reviews.", icon: Landmark, link: "/resources/permit-sovereignty" },
              { title: "Antique Matching", desc: "Sourcing 1920s-era brick and stone to match existing manor architecture.", icon: BrickWall, link: "/services/historic-restoration" },
              { title: "Canopy Defense", desc: "Certified arborist-led excavation near 100-year-old oak trees.", icon: TreePine, link: "/resources/tulsa-soil-geology" },
              { title: "Utility Shielding", desc: "Bypassing century-old clay lines with modern PVC infrastructure.", icon: ShieldCheck, link: "/services/gunite-engineering" }
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

      {/* 4. THE MIDTOWN HERITAGE TIMELINE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Surgical <br /><span className="gold-gradient">Protocol.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Midtown construction is an act of stewardship. Here is how we manifest your hidden oasis.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Midtown Portfolio <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "GPR Infrastructure Mapping", detail: "Electronic ground-penetrating radar to locate century-old utility lines.", icon: Compass },
                { phase: "Arborist-Led Excavation", detail: "Utilizing Air-Spade technology to clear soil around historic tree roots.", icon: TreePine },
                { phase: "Structural Liner Integration", detail: "Reinforcing historic shells or digging new ones with Grade 60 steel cage.", icon: HardHat },
                { phase: "Heritage Masonry Phase", detail: "Hand-laying sourced antique brick to match the estate&apos;s original stone.", icon: BrickWall },
                { phase: "Invisible Modernization", detail: "Hiding state-of-the-art heating and filtration behind historic walls.", icon: Zap }
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

      {/* 5. THE MIDTOWN MASTERWORK FAQ (Massive SEO Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Midtown <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers for Maple Ridge and Yorktown homeowners.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "How do you protect my 100-year-old oak trees during construction?", 
                  a: "We utilize 'Air-Spade' technology, which uses high-pressure air to gently remove soil from around roots. This allows us to map the root system and install structural barriers without cutting a single critical root, ensuring your canopy stays healthy for another century." 
                },
                { 
                  q: "What if my Midtown estate has no alley or side access?", 
                  a: "We specialize in 'No-Clearance' projects. We utilize compact 'Spider' equipment that can fit through a standard 36-inch gate. For larger equipment, we can coordinate a 100-ton crane lift to move machinery directly over the house, avoiding all impact to your landscaping." 
                },
                { 
                  q: "Will the pool match the 1920s architecture of my home?", 
                  a: "Absolutely. We source antique brick and stone from the same era as your home. We also specialize in 'Historic Finish Matching,' utilizing plaster and tile palettes that reflect the Gilded Age aesthetic of Midtown Tulsa." 
                },
                { 
                  q: "How do you handle unmapped utility lines in Maple Ridge?", 
                  a: "We perform a full 'Subterranean Audit' using GPR (Ground Penetrating Radar) before excavation. If we find historic clay or brick lines, we surgically bypass them or replace them with modern Schedule 40 infrastructure to ensure your estate is modernized from the ground up." 
                },
                { 
                  q: "Does the Tulsa Preservation Commission need to approve my pool?", 
                  a: "If you live in a designated Historic District like Yorktown or Maple Ridge, a Certificate of Appropriateness (COA) is usually required. We handle all documentation and appearances before the commission to ensure your project is approved." 
                },
                { 
                  q: "Can I add modern automation to a restored historic pool?", 
                  a: "Yes. We specialize in 'Invisible Automation.' We can hide your state-of-the-art smartphone controls, heating systems, and UV filtration behind period-correct masonry vaults or within subterranean equipment bunkers." 
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
            Honoring the <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Heritage.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Your estate was built for a century. Let&apos;s make sure it lasts another. Expert stewardship for Midtown Tulsa.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Midtown Protocol
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
