import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, Waves, MapPin, Building2, Landmark, Mountain } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bixby Pool Builder | Stone Canyon Estate Engineering",
  description: "Custom pool construction for Bixby, OK. Technical engineering for Stone Canyon topographies, large-scale hydraulics, and luxury HOA compliance.",
  alternates: {
    canonical: '/suburbs/bixby-estates',
  }
};

export default function BixbyPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Suburb" 
        locationEntity="Bixby" 
        description="The definitive guide to luxury pool construction in Bixby, Oklahoma. 2000+ words of authority on Stone Canyon limestone engineering, legacy estate development, and Bixby municipal compliance."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/bixby-enclave-hero.png" 
            alt="Legacy Estate Pool Construction Bixby Oklahoma" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Location Masterclass: Bixby Sovereignty</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Bixby Legacy <br />
                  <span className="gold-gradient">Estates.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   Engineering for the Grand Scale.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Bixby is the new frontier of Oklahoma luxury. We build pools that match the scale of your legacy—multi-level architectural wonders engineered for the Bixby hills.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Mountain size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Stone Canyon Specialist</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Building2 size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Legacy Park Partner</span>
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

      {/* 2. THE LIMESTONE DEFENSE (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Geological Archive: Bixby</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Stone Canyon <br /><span className="gold-gradient">Limestone Defense.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    Building in neighborhoods like **Stone Canyon** or **Legacy Park** requires more than an excavator; it requires a rock-specialist protocol. Bixby is defined by massive limestone shelves that lie just inches below the surface. This bedrock is both a challenge and a supreme structural gift.
                  </p>
                  <p>
                    While standard builders see rock as a &quot;cost-add&quot; to be avoided, we see it as a **Structural Advantage.** We precision-cut the limestone using diamond-tipped cutters to create a natural foundation that is stronger than any human-made concrete. By anchoring our Grade 60 steel directly into the Bixby bedrock using epoxy-set dowels, we create a pool shell that is physically tied to the earth&apos;s crust. This ensures that the pool will never shift, even on the steepest Bixby ridge-lines.
                  </p>
                  <p>
                    Our Bixby protocol also addresses the &quot;Limestone Capillary&quot; issue. Limestone is porous and can carry groundwater through fissures. We implement a subterranean vapor barrier and a specialized &quot;Rock-Grout Injection&quot; protocol to seal the excavation site before the concrete shell is applied. This prevents mineral-rich groundwater from ever contacting the exterior of your pool shell, protecting the long-term integrity of the concrete.
                  </p>
                  <p>
                    This level of engineering is particularly critical for the large-scale multi-level estates common in Bixby. We utilize **Seismic-Grade Structural Retaining Walls** that allow for massive fire-pits, sunken lounges, and waterfall grottos to be integrated directly into the sloped terrain. We are not just building a pool; we are reshaping the geology of your estate to support a legacy structure.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Rock Excavation Protocol
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Generic builders often use vibration-heavy rock hammers that can fracture your home&apos;s foundation or damage neighbor relationships. We utilize **High-Velocity Diamond Saws** for the perimeter cuts, ensuring zero vibration transfer to your estate&apos;s existing structures. It is a cleaner, quieter, and structurally superior method for the Bixby hills.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/bixby-enclave-tech.png" alt="Bixby Technical Rock Construction" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Stone Canyon</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;In Bixby, we aren&apos;t just building pools; we are building architectural monuments. Every limestone anchor is a testament to our commitment to century-lasting engineering.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ESTATE LIFESTYLE INTEGRATION (New Community Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">Designing for <br /><span className="gold-gradient">The Bixby Lifestyle.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                In Bixby, a pool is more than a swim-lane—it&apos;s a **Grand Entertaining Pavilion.** Our designs are focused on maximizing the expansive lot sizes of South Tulsa, creating seamless transitions between your indoor living spaces and your outdoor aquatic estate.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Pavilion Integration", desc: "Engineering structural foundations for outdoor kitchens and pool-houses.", icon: Building2, link: "/services/gunite-engineering" },
              { title: "Grand Hydraulics", desc: "High-volume pump systems for dramatic multi-level waterfalls.", icon: Waves, link: "/services/gunite-engineering" },
              { title: "Estate Automation", desc: "Full control of lighting, heat, and water features from your smartphone.", icon: Zap, link: "/resources/permit-sovereignty" },
              { title: "Natural Stone Craft", desc: "Utilizing massive Oklahoma boulders for a rugged, high-end look.", icon: Mountain, link: "/resources/tulsa-soil-geology" }
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

      {/* 4. THE BIXBY MUNICIPAL PROTOCOL */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">Bixby Permit <br /><span className="gold-gradient">Sovereignty.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Navigating Bixby City Hall with 100% precision.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Bixby Project Map <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Bixby Planning Review", detail: "Managing high-end landscape and drainage submittals for city approval.", icon: ClipboardCheck },
                { phase: "Rock Excavation Permit", detail: "Securing specialized blasting or sawing permits for Stone Canyon ridge-lines.", icon: Ruler },
                { phase: "Drainage Engineering", detail: "Creating complex catch-basin plans to manage large-lot runoff during storms.", icon: Droplets },
                { phase: "Infrastructure Liaison", detail: "Direct coordination with Bixby utility providers for high-capacity pool heaters.", icon: Landmark },
                { phase: "Legacy Park HOA Mastery", detail: "Ensuring 100% compliance with Bixby&apos;s most rigorous neighborhood boards.", icon: Building2 }
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

      {/* 5. THE BIXBY MASTERWORK FAQ (Massive SEO Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Bixby <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers for Bixby estate owners.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "How do you handle the rock shelves in Stone Canyon?", 
                  a: "We utilize hydraulic diamond-saws and specialized rock-heads. By precision-cutting the limestone rather than pounding it with a hammer, we create a perfectly flat structural shelf that serves as the world's strongest foundation for your pool." 
                },
                { 
                  q: "Can you build a pool-house or pavilion alongside the pool?", 
                  a: "Yes. In Bixby, many estates require 'Multi-Structure Engineering.' We handle the structural footings for your pavilion and integrate the gas, electric, and plumbing lines directly into the pool's main command center for seamless operation." 
                },
                { 
                  q: "What are the drainage requirements for large Bixby lots?", 
                  a: "Large Bixby estates often have significant runoff. We engineer 'Subterranean Retention Chambers' that manage the extra water during heavy Oklahoma rain cycles, protecting your landscape and meeting Bixby's strict municipal codes." 
                },
                { 
                  q: "Is it possible to heat a 50,000-gallon estate pool efficiently?", 
                  a: "Yes. We utilize 'Commercial-Grade Heat Exchangers' and high-capacity gas lines. When combined with our high-density gunite shells (which act as a thermal battery), your pool will heat faster and retain warmth longer than standard builds." 
                },
                { 
                  q: "Do you work with the Legacy Park HOA?", 
                  a: "Yes. We are very familiar with the architectural standards of Legacy Park and Stone Canyon. We provide full 3D renderings and technical site plans that typically pass board review on the first submittal." 
                },
                { 
                  q: "How does the Bixby water table differ from Jenks?", 
                  a: "Bixby tends to have a much more stable water table than the Jenks river valley, but it features 'Limestone Capillary' issues where water can move through rock fissures. We utilize a 'Rock-Grout Injection' protocol to seal the foundation before the shell is poured." 
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
            The Bixby <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Legacy.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Engineered for the hills. Designed for the legacy. The definitive Bixby estate pool experience.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Bixby Protocol
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
