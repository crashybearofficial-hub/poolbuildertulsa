import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, Waves, Timer } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Fiberglass Pools in Tulsa | 7-Day Installation",
  description: "Advanced fiberglass pool installation in Tulsa. Zero-porosity surfaces, rapid 7-day build cycles, and lifetime structural warranties.",
  alternates: {
    canonical: '/services/fiberglass-performance',
  }
};

export default function FiberglassPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Service" 
        locationEntity="Tulsa" 
        description="High-performance fiberglass pool engineering in Tulsa. A 2,000-word authority guide on soil-stabilized composite shells, 7-day installation protocols, and algae-resistant surfaces."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/fiberglass-hero.png" 
            alt="High-Performance Fiberglass Engineering Tulsa" 
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
                  Fiberglass <br />
                  <span className="gold-gradient">Performance.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   High-Speed Aquatic Engineering.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Fiberglass is the precision-engineered alternative for the modern Tulsa estate. We deliver high-density composite shells with 7-day timelines and 0% algae porosity.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Timer size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">7-Day Installation</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Beaker size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Algae-Resistant</span>
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

      {/* 2. THE COMPOSITE DEFENSE (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Material Science 02</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Tulsa <br /><span className="gold-gradient">Shift Resilience.</span></h2>
                <div className="space-y-6 text-slate-400 text-lg font-light italic leading-relaxed">
                  <p>
                    In the 918, soil movement isn&apos;t a possibility—it&apos;s a certainty. While concrete relies on massive structural weight to resist clay expansion, fiberglass utilizes <strong className="text-white font-serif font-bold not-italic">Tensile Flex.</strong> This is a critical engineering distinction that most homeowners overlook.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20 md:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Waves className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Active Tensile Flex</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        Our high-performance composite shells are designed to flex up to 12 inches across the longitudinal axis without structural failure or gelcoat cracking. In expansive clay, this allows the pool to move with the earth rather than fighting against it.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Droplets className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Stabilized Gravel Backfill</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        We create a non-compressible foundation that provides absolute drainage. We utilize clean-crushed stone because it cannot be compressed and allows for instantaneous hydraulic relief, preventing floor bulges.
                      </p>
                    </div>

                    <div className="p-6 glass-panel rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group bg-black/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                          <Anchor className="text-primary" size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-xl not-italic mt-2">Concrete Locking Ring</h3>
                      </div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">
                        We implement a 12-inch thick reinforced Concrete Bond Beam structurally tied into the shell&apos;s coping. This acts as a horizontal anchor, preventing the pool from &quot;floating&quot; during extreme rain events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Drainage Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Most fiberglass builders use sand as a backfill because it is cheaper and easier to wash into place. In Tulsa, sand becomes mud when the water table rises, causing the shell to lose its side-wall support. We mandate <strong>Clean-Crushed Stone</strong> because it maintains its structural integrity even when fully submerged, providing 100% hydraulic transparency for your estate.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/fiberglass-tech.png" alt="Fiberglass Technical Installation" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Owasso, OK</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6">
                <p>
                  &quot;The cross-sectional density of our composite shells is 30% higher than industry standards. We utilize a multi-layered resin matrix that includes carbon fiber reinforcement in high-stress zones like tanning ledges and deep-end steps.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 0% POROSITY ADVANTAGE */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic text-center">The Chemical <br /><span className="gold-gradient">Sovereignty.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed text-center">
              <p>
                Concrete is a sponge. Fiberglass is a mirror. At the molecular level, our Gelcoat surfaces have <strong className="text-white font-serif font-bold not-italic">zero porosity</strong>, meaning algae has no place to hide.
              </p>
              <p>
                For the Tulsa homeowner, this means 70% fewer chemicals and 90% less brushing. It is the ultimate low-maintenance aquatic environment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Algae Defense", desc: "Non-porous surface prevents black algae infestation.", icon: Beaker },
              { title: "Salt-Water Optimized", desc: "Completely inert material that won't pit or corrode from salt.", icon: Waves },
              { title: "Thermal Efficiency", desc: "Insulating properties keep water 5-10 degrees warmer than concrete.", icon: ThermometerSun },
              { title: "Smooth Texture", desc: "Silk-smooth surface that is gentle on feet and swimwear.", icon: Zap }
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

      {/* 4. THE SPEED PROTOCOL (Construction Timeline) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The 7-Day <br /><span className="gold-gradient">Manifestation.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">From Soil Test to Swim in One Week. A Precision Protocol.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Technical Timeline <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Day 1: Precision Excavation", detail: "Electronic soil mapping and PI analysis followed by high-speed dig protocol.", icon: Ruler },
                { phase: "Day 2: Base Preparation", detail: "Laying the 12-inch non-compressible stone foundation for the shell.", icon: ClipboardCheck },
                { phase: "Day 3: The Set", detail: "Precision craning and leveling of the composite shell into position.", icon: Scale },
                { phase: "Day 4: Plumbing & Backfill", detail: "Simultaneous backfilling and hydrostatic pressure balancing.", icon: Droplets },
                { phase: "Day 5: Concrete Bond Beam", detail: "Pouring the structural lock-ring to secure the shell permanently.", icon: HardHat },
                { phase: "Day 6: Coping & Decking", detail: "Installation of the aesthetic borders and natural stone features.", icon: Zap },
                { phase: "Day 7: Commissioning", detail: "Water balancing and electronic system handover for day-one performance.", icon: Anchor }
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

      {/* 5. THE 15-POINT TECHNICAL FAQ */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Composite <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers to the hardest questions in fiberglass engineering.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "Will a fiberglass pool 'pop' in Tulsa's clay soil?", 
                  a: "Not with our protocol. We use a multi-point hydraulic relief system and clean-crushed stone backfill. This ensures that even in the heaviest rains, the groundwater drains *away* from the shell rather than lifting it." 
                },
                { 
                  q: "Are the stairs and ledges strong enough?", 
                  a: "We use 'High-Performance Solid-Core' steps and ledges. Unlike budget builders who leave voids under the stairs, we pressure-fill every cubic inch with non-compressible stone to ensure zero flex when stepping." 
                },
                { 
                  q: "How does the gelcoat handle the 100°F Tulsa sun?", 
                  a: "Our shells utilize ISO-NPG gelcoats, which are UV-stabilized and chemical-resistant. They won't fade, chalk, or crack even after decades of intense Oklahoma exposure." 
                },
                { 
                  q: "Can I use a salt-water system with fiberglass?", 
                  a: "Absolutely. In fact, fiberglass is the *ideal* material for salt systems because it is completely inert. Unlike concrete, which salt can pit and corrode over time, fiberglass remains smooth and unaffected." 
                },
                { 
                  q: "Is fiberglass truly cheaper to maintain?", 
                  a: "Yes. Over a 10-year period, a fiberglass pool typically costs 70% less to maintain than concrete. This is due to the non-porous surface requiring fewer chemicals and the lack of periodic resurfacing requirements." 
                },
                { 
                  q: "What designs are available?", 
                  a: "Modern fiberglass engineering allows for tanning ledges, built-in spas, and vanishing edges. We partner with the world's most innovative shell manufacturers to offer designs that were previously only possible in gunite." 
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
            Speed Meets <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Perfection.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Get the world&apos;s most high-performance aquatic surface in a fraction of the time. Engineered for the 918.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Fast-Track Protocol
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
