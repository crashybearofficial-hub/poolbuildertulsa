import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, Waves, MapPin, Building2, Landmark } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jenks Pool Builder | Luxury River-Adjacent Pool Engineering",
  description: "Specialized pool construction for Jenks, OK. Engineering solutions for Arkansas River basin soils, high water tables, and luxury estate environments.",
  alternates: {
    canonical: '/suburbs/jenks-luxury',
  }
};

export default function JenksPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Suburb" 
        locationEntity="Jenks" 
        description="The definitive guide to luxury pool construction in Jenks, Oklahoma. 2000+ words of authority on river-valley engineering, high-PI clay stabilization, and South Tulsa estate development."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/jenks-hero.png" 
            alt="Luxury Pool Construction Jenks Oklahoma" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Location Masterclass: South Tulsa Authority</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Jenks Luxury <br />
                  <span className="gold-gradient">Enclaves.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   Engineering for the Arkansas River Valley.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Building in Jenks requires more than an eye for design—it requires a deep understanding of river-valley hydraulics and high-plasticity clay stabilization.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Arkansas River Valley</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Building2 size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Estate Specialist</span>
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

      {/* 2. THE RIVER VALLEY REPORT (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Geological Archive: Jenks</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Arkansas <br /><span className="gold-gradient">Aquifer Crisis.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    Jenks is uniquely positioned along the Arkansas River, a geological reality that brings a specific set of engineering challenges that differ wildly from the limestone-heavy regions of Midtown or the clay-dominant South Tulsa. On the valley floor, the subterranean water table is often less than 6 feet below the surface. This is effectively an underground river that exerts constant upward hydrostatic pressure on any hollow structure—including a swimming pool.
                  </p>
                  <p>
                    Building a legacy pool in this environment requires an <strong>Active Dewatering Protocol.</strong> Most volume-based builders ignore the water table during construction, which can lead to &quot;floating shells&quot; or massive structural shifts during a heavy rain event. We utilize industrial-grade subterranean dewatering pumps and a 12-to-18-inch foundation of non-compressible #57 stone to create a stable, dry environment for the shell. This ensures the shotcrete cures in an ideal state, uncompromised by groundwater infiltration.
                  </p>
                  <p>
                    Our approach to Jenks soil also involves addressing the &quot;Alluvial Compression&quot; factor. Because Jenks sits on layers of river-deposited sand and silt (alluvial deposits), the earth can settle unevenly depending on the season. We utilize Grade 60 tensile steel and a denser structural schedule—often tied on 6-inch centers with double-mats in the floor—to create a monolithic shell that can bridge these subtle shifts in the sub-base. We treat the pool as a structural bridge deck, capable of supporting its own load regardless of the shifting sand beneath it.
                  </p>
                  <p>
                    For the Jenks ridges, we shift our engineering focus to **Structural Retention & Lateral Load Management.** On sloped lots overlooking the river, we engineer massive cantilevered bond beams that anchor the pool into the unyielding shale or rock shelf beneath the silt. This allows for the construction of breathtaking infinity edges that will never tilt or shift toward the valley. We don&apos;t just build a pool; we build a retaining structure that stabilizes the entire backyard of your estate.
                  </p>
                  <p>
                    Additionally, we implement a **Silt-Sovereignty Protocol.** In the river valley, fine silts can clog drainage systems over time. We utilize premium non-woven geotextile liners to separate our structural fill from the native soil, ensuring that your drainage system remains functional for the life of the structure. This is a critical engineering detail that saves homeowners tens of thousands in future landscape repairs.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Sandy Soil Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Much of Jenks features sandy, alluvial soil from ancient river deposits. Standard &quot;dry-dig&quot; methods often fail as the walls cave in during the reinforcement phase. We utilize <strong>Hydro-Stabilization</strong> and temporary shoring during excavation to maintain structural wall integrity until the skeletal steel is tied and the gunite is applied at high pneumatic velocity. This eliminates the risk of property-line destabilization during the build.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/jenks-tech.png" alt="Jenks Technical Construction" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Southern Woods</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;The drainage profile in Jenks is the most complex in the 918. We coordinate with municipal engineers to ensure that every cubic inch of runoff is managed, preventing erosion that could undermine the pool deck or the estate foundation.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MUNICIPAL SOVEREIGNTY (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">The Jenks <br /><span className="gold-gradient">Regulatory Mastery.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                Jenks City Planning is notoriously rigorous regarding drainage easements and utility setbacks. We maintain a direct line of communication with **Jenks Public Works** to ensure every project is 100% compliant from day one.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Easement Defense", desc: "Expert navigation of utility and drainage easements to maximize your lot utility.", icon: Landmark, link: "/resources/permit-sovereignty" },
              { title: "Drainage Impact", desc: "Engineered runoff plans that exceed Jenks municipal requirements.", icon: Droplets, link: "/resources/tulsa-soil-geology" },
              { title: "Permit Fast-Track", desc: "Automated submittal systems that reduce approval time for Jenks estates.", icon: ClipboardCheck, link: "/resources/permit-sovereignty" },
              { title: "HOA Sovereignty", desc: "Dedicated liaison for neighborhood boards in Southern Woods and Wind River.", icon: Building2, link: "/resources/permit-sovereignty" }
            ].map((item, i) => (
              <a key={i} href={item.link} className="p-8 glass-panel rounded-2xl border-white/5 space-y-6 hover:bg-white/[0.03] transition-all group text-left">
                <item.icon className="text-primary group-hover:scale-110 transition-transform" size={32} strokeWidth={1} />
                <h4 className="text-xl font-serif text-white italic font-bold">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">{item.desc}</p>
                <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Technical Resource <ArrowRight size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE JENKS LEGACY TIMELINE */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Southern <br /><span className="gold-gradient">Standard.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Building for the next 50 years of Jenks growth.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Jenks Portfolio <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Hydrostatic Analysis", detail: "Electronic water table mapping to determine the precise hydrostatic relief requirements.", icon: Beaker },
                { phase: "Load-Bearing Piling", detail: "Installation of deep-bore piers for sloped lots near the river ridge.", icon: HardHat },
                { phase: "Hydraulic Balancing", detail: "Engineering high-head pump systems for multi-level waterfalls and infinity edges.", icon: Droplets },
                { phase: "Landscape Integration", detail: "Collaborative design with Tulsa&apos;s leading landscape architects for a seamless estate look.", icon: Compass },
                { phase: "Regulatory Handover", detail: "Final municipal inspections and Jenks-specific operating manuals for your new system.", icon: Anchor }
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

      {/* 5. THE JENKS MASTERWORK FAQ (Massive SEO Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Jenks <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers for Jenks estate owners.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "How does the Jenks water table affect my pool construction?", 
                  a: "The high water table near the Arkansas River requires a 'Continuous Dewatering Protocol.' We install subterranean pump systems during construction to keep the excavation dry, ensuring the gunite shell sets in an ideal environment without groundwater contamination." 
                },
                { 
                  q: "What are the common setback requirements in Jenks?", 
                  a: "Jenks typical utility setbacks range from 5 to 15 feet depending on the neighborhood. We handle all the 'Call-Before-You-Dig' utility mapping and ensure the pool is positioned to maximize your available land while remaining 100% compliant." 
                },
                { 
                  q: "Can you build an infinity edge overlooking the river?", 
                  a: "Yes. Many Jenks lots have a natural slope toward the valley. We specialize in 'Cantilevered Structural Retaining Walls' that allow the pool to hang over the edge of the ridge, providing the quintessential Jenks infinity-edge view." 
                },
                { 
                  q: "How do you handle the sandy soil in Southern Woods?", 
                  a: "Sandy soil requires 'Hydro-Boring' and reinforced structural forms to prevent cave-ins. We use a more intensive skeletal steel cage (Grade 60) to provide the tensile strength needed to bridge the gaps in unstable alluvial soil." 
                },
                { 
                  q: "What is the timeline for a luxury project in Jenks?", 
                  a: "For a high-end gunite estate, the timeline is typically 12-16 weeks. This includes the rigorous Jenks permitting process, specialized foundation work, and intricate natural stone masonry." 
                },
                { 
                  q: "Are there specific drainage requirements for Jenks pools?", 
                  a: "Yes. Jenks mandates that all pool drainage must be managed on-site or directed to approved city storm systems. We engineer custom french-drain and catch-basin systems that exceed these requirements, protecting your landscape and the neighborhood infrastructure." 
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
            The South <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Standard.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Engineered for the river valley. Designed for the legacy. The definitive Jenks luxury pool experience.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Jenks Protocol
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
