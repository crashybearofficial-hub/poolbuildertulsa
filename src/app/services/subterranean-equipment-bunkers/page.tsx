import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, Waves, Microscope, Map, VolumeX, Wind, Lock } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subterranean Equipment Bunkers | Silent Pool Filtration Tulsa",
  description: "The definitive technical guide to subterranean pool equipment bunkers. Engineering for acoustic dampening, ventilation sovereignty, and invisible filtration in the 918.",
  alternates: {
    canonical: '/services/subterranean-equipment-bunkers',
  }
};

const faqs = [
  { 
    q: "Why should I build a subterranean equipment bunker?", 
    a: "Standard pool equipment is noisy, unsightly, and exposed to the elements. A subterranean bunker provides absolute 'Acoustic Sovereignty,' ensuring that the only sound in your outdoor sanctuary is the water itself. It also extends equipment life by 30-50% by maintaining a stable, protected thermal environment." 
  },
  { 
    q: "How do you handle ventilation in an underground vault?", 
    a: "We engineer 'Dual-Path Convection' systems that utilize natural and forced-air ventilation. This prevents the buildup of heat and humidity that can damage electronic controllers and pump motors, ensuring your system runs at peak efficiency year-round." 
  },
  { 
    q: "Is an underground vault safe from flooding?", 
    a: "Absolutely. We utilize industrial-grade 'Sump-Sovereignty' protocols, including dual-redundant pumps and high-water alarms linked to your home automation system. The vault itself is sealed with a bituminous crystalline membrane to prevent groundwater infiltration." 
  },
  { 
    q: "Is it difficult to service equipment in a bunker?", 
    a: "No. We design our bunkers with 'Service Sovereignty' in mind, utilizing hydraulic-assist access hatches and LED-lit interiors. Every manifold and valve is positioned for ergonomic access, making it easier to service than a standard above-ground pad." 
  },
  { 
    q: "What are the acoustic dampening standards?", 
    a: "We utilize high-density acoustic foam and vibration-isolation mounts for all pumps. This reduces the mechanical signature to near-zero decibels at the surface, ensuring that your equipment remains invisible to the ear as well as the eye." 
  },
  { 
    q: "Can I build a bunker under my pool deck?", 
    a: "Yes. Many of our most prestigious projects feature 'Deck-Integrated Bunkers.' We utilize load-bearing structural lids that can be tiled or finished to match your deck perfectly, making the mechanical room a literal secret within your estate." 
  }
];

export default function EquipmentBunkersPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Service" 
        specificService="Subterranean Equipment Bunkers" 
        description="The definitive technical guide to subterranean pool equipment bunkers. 1200+ words of authority on acoustic dampening, ventilation sovereignty, and invisible filtration."
        faqs={faqs}
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/bunker-hero.png" 
            alt="Subterranean Pool Equipment Bunker Engineering" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Engineering Masterclass: Acoustic Sovereignty</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Silent <br />
                  <span className="gold-gradient">Filtration.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   The Architecture of Invisibility.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  A luxury sanctuary should be silent. We specialize in engineering subterranean equipment bunkers that remove the noise and clutter of pool ownership from your estate.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <VolumeX size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Zero Acoustic Footprint</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Wind size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Active Ventilation</span>
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

      {/* 2. THE BUNKER MANIFESTO (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Technical Archive: Subterranean Architecture</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Invisible <br /><span className="gold-gradient">Machine Room.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    In the highest tier of luxury pool design, the presence of mechanical equipment is considered a &quot;design failure.&quot; Standard above-ground equipment pads—with their humming pumps, clacking heaters, and PVC spaghetti—disturb the visual and acoustic tranquility of a high-end estate. We solve this through the engineering of **Subterranean Equipment Bunkers.**
                  </p>
                  <p>
                    A bunker is not merely a hole in the ground; it is a precisely engineered **Environmental Control Vault.** We utilize Grade 60 steel-reinforced shotcrete to create a monolithic subterranean chamber, often integrated directly into the structural footprint of the pool deck or the estate foundation. This chamber is sealed with an industrial-grade **Crystalline Bituminous Membrane** to ensure it remains 100% bone-dry, even in the wettest Oklahoma river-valley conditions.
                  </p>
                  <p>
                    The primary challenge of an underground vault is **Ventilation Sovereignty.** Without proper airflow, the heat generated by high-performance variable-speed pumps and high-BTU gas heaters will rapidly exceed the operating limits of the electronics. We engineer custom &quot;Passive-Active&quot; ventilation arrays that utilize the natural convection of the earth combined with sensor-driven forced-air fans to maintain a constant 75-degree environment. This thermal stability extends the life of your Hayward or Pentair control boards by up to 50% by eliminating the extreme heat cycles common in Oklahoma summers.
                  </p>
                  <p>
                    Acoustically, we treat the bunker as a recording studio. We utilize **Vibration-Isolation Pedestals** for all rotating machinery, preventing the mechanical hum from resonating through the concrete shell. The interior walls are lined with high-density acoustic dampening panels, ensuring that when you stand on the pool deck directly above the bunker, the decibel level is zero. This **Acoustic Sovereignty** is the hallmark of a true masterwork project.
                  </p>
                  <p>
                    Accessibility is maintained through **Hydraulic-Assist Access Hatches.** These lids are designed to be load-bearing and can be inlaid with the same stone or tile used for your pool deck. When closed, the seam is virtually invisible. Inside, the vault is illuminated by industrial-grade LED arrays and features a custom plumbing manifold layout that makes seasonal maintenance and chemical balancing an ergonomic pleasure for your estate manager.
                  </p>
                  <p>
                    Finally, we implement **Redundant Sump-Sovereignty.** Every bunker features a deep-well sump pit with dual-redundant pumps. If one pump fails, the second activates automatically, and an alert is sent to your smartphone via our integrated monitoring system. This ensures that your mechanical investment is protected from even the most catastrophic Oklahoma flood events.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Heat Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Generic builders who try to bury equipment often create &quot;ovens&quot; that melt pump seals and fry control boards. We mandate **Active Thermal Monitoring** in every bunker, ensuring that the vault temperature never exceeds the manufacturer&apos;s technical limits for sensitive electronics.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/bunker-tech.png" alt="Technical Equipment Bunker Construction" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: South Tulsa Ridge</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;The ultimate luxury is the sound of silence. In Tulsa, we build the subterranean infrastructure that allows your outdoor sanctuary to remain perfectly quiet, perfectly clean, and perfectly invisible.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VAULT SOVEREIGNTY (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">Environmental & Structural <br /><span className="gold-gradient">Sovereignty.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                Protecting your estate&apos;s mechanical core requires a mastery of subterranean architecture. We utilize commercial-grade standards for residential aquatic vaults.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Acoustic Shielding", desc: "High-density dampening that reduces equipment noise to near-zero decibels.", icon: VolumeX, link: "/services/gunite-engineering" },
              { title: "Thermal Sync", desc: "Active cooling systems that maintain a stable 75-degree environment year-round.", icon: ThermometerSun, link: "/services/vanishing-edge-hydraulics" },
              { title: "Sump Redundancy", desc: "Dual-pump arrays with high-water alarms linked to your estate automation.", icon: Lock, link: "/resources/permit-sovereignty" },
              { title: "Inlaid Access", desc: "Structural lids that are tiled or finished to match your deck with sub-millimeter precision.", icon: Ruler, link: "/services/gunite-engineering" }
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

      {/* 4. THE BUNKER ENGINEERING TIMELINE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Vault <br /><span className="gold-gradient">Protocol.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Engineering the invisible is an act of structural precision. Here is how we manifest your subterranean machine room.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Bunker Portfolio <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Hydrostatic Vault Mapping", detail: "Determining the precise groundwater pressure to calibrate our crystalline waterproofing schedule.", icon: Microscope },
                { phase: "Reinforced Vault Phase", detail: "Construction of the Grade 60 steel-reinforced shotcrete vault with independent sumps.", icon: HardHat },
                { phase: "Acoustic Conditioning", detail: "Installation of vibration-isolation mounts and high-density dampening panels.", icon: VolumeX },
                { phase: "Thermal Array Setup", detail: "Integration of convection-driven ventilation channels and active forced-air cooling.", icon: Wind },
                { phase: "Structural Lid Tuning", detail: "Final calibration of hydraulic-assist lids and sub-millimeter stone inlay finishing.", icon: Ruler }
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

      {/* 5. THE BUNKER MASTERWORK FAQ (Massive SEO Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Vault <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct technical answers for subterranean equipment owners.</p>
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
            Absolute <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Silence.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Your estate was built for tranquility. Let&apos;s keep it that way. The definitive Tulsa subterranean equipment experience.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Bunker Protocol
             </a>
          </div>
        </div>
      </section>

    </div>
  );
}
