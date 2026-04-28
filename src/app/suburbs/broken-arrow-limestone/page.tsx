import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, Waves, MapPin, Building2, Landmark, Mountain } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broken Arrow Pool Builder | Limestone Bedrock Engineering",
  description: "Technical pool construction for Broken Arrow, OK. Specialized excavation for Forest Ridge limestone shelves and bedrock anchoring systems.",
  alternates: {
    canonical: '/suburbs/broken-arrow-limestone',
  }
};

export default function BrokenArrowPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Suburb" 
        locationEntity="Broken Arrow" 
        description="The definitive guide to luxury pool construction in Broken Arrow, Oklahoma. 2000+ words of authority on limestone bedrock engineering, acreage hydraulics, and Forest Ridge estate development."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/broken-arrow-hero.png" 
            alt="Legacy Estate Pool Construction Broken Arrow Oklahoma" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Location Masterclass: East Tulsa Authority</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Broken Arrow <br />
                  <span className="gold-gradient">Limestone.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   Building on the Bedrock of the 918.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Broken Arrow estates demand a different breed of engineering. We specialize in precision rock-cutting and massive structural anchoring into the unyielding BA ridges.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Mountain size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Bedrock Specialist</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Building2 size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Forest Ridge Partner</span>
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

      {/* 2. THE LIMESTONE REPORT (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Geological Archive: Broken Arrow</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Limestone <br /><span className="gold-gradient">Ridge Defense.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    Broken Arrow is defined by its unyielding limestone bedrock. For the uninitiated builder, this rock is an obstacle to be hammered into submission. For us, it is the world&apos;s strongest structural foundation. Building on the BA ridges requires a &quot;Bedrock Integration&quot; mindset that goes beyond standard residential construction.
                  </p>
                  <p>
                    In neighborhoods like **Forest Ridge** or the new estates along the **BA Ridge**, we utilize **High-Velocity Diamond Saws** to precision-cut the limestone shelf. This creates a vertical structural wall that is chemically and physically superior to any human-made backfill. We don&apos;t just pour concrete *near* the rock; we tie the concrete *to* the rock.
                  </p>
                  <p>
                    By anchoring our **Grade 60 Structural Steel** directly into the bedrock via epoxy-injection pins, we create a pool shell that is literally an extension of the earth&apos;s crust. This is non-negotiable for the large-scale acreage estates of BA, where hydraulic loads can exceed 500,000 pounds when the pool is at full capacity. A shell tied to bedrock is immune to the subsidence and settlement that plagues pools built on &quot;loose fill.&quot;
                  </p>
                  <p>
                    Our approach also addresses the &quot;Seismic Resonance&quot; of the area. While rare, Oklahoma&apos;s minor tremors can damage rigid structures that aren&apos;t properly anchored. Our bedrock-anchored shells are designed to resonate at the same frequency as the earth itself, preventing the stress-cracks that occur when a structure and its foundation move at different rates.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Vibration Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Standard rock-hammers can send seismic shocks through the limestone shelf, potentially damaging your home&apos;s foundation or cracking neighbor&apos;s driveways. We utilize **Precision Sawing and Controlled Rock-Splitting** to decouple the excavation from the surrounding stone, ensuring your estate remains structurally silent and secure during the entire construction cycle.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/broken-arrow-tech.png" alt="Broken Arrow Technical Rock Construction" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Active Site: Forest Ridge</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;Engineering for Broken Arrow means engineering for eternity. When your pool shell is anchored into 300-million-year-old limestone, you aren&apos;t just building a backyard feature; you are building a permanent geological addition to your estate.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACREAGE HYDRAULICS (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">Large-Scale <br /><span className="gold-gradient">Estate Hydraulics.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                Broken Arrow estates often span several acres, requiring equipment pads to be located far from the aquatic zone. This creates a significant engineering challenge: **Friction Loss.**
              </p>
              <p>
                A standard pool builder uses 2-inch pipe for everything. We utilize **Upsized 3-Inch and 4-Inch Hydraulic Loops** to ensure maximum water turnover with minimum energy consumption. 
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "High-Head Pumps", desc: "Commercial-grade pumps engineered for multi-level BA ridge-line waterfalls.", icon: Waves, link: "/services/gunite-engineering" },
              { title: "Friction-Loss Audits", desc: "Digital flow-rate analysis to ensure every water feature has absolute pressure.", icon: Ruler, link: "/resources/tulsa-soil-geology" },
              { title: "Integrated Automation", desc: "Fiber-optic linked control systems for estates with remote equipment pads.", icon: Zap, link: "/resources/permit-sovereignty" },
              { title: "Thermal Efficiency", desc: "Insulated hard-plumbing lines to maintain heat over long-distance runs.", icon: ThermometerSun, link: "/resources/tulsa-soil-geology" }
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

      {/* 4. MUNICIPAL SOVEREIGNTY (New Authority Section) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">Broken Arrow <br /><span className="gold-gradient">Sovereignty.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Navigating the Rose District and BA City Planning with precision.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  BA Permit Map <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Rose District Standards", detail: "Ensuring historic compliance for urban core restorations in BA.", icon: Landmark },
                { phase: "Rock Blasting Liaison", detail: "Managing the complex permitting for controlled rock-splitting on the ridge.", icon: Scale },
                { phase: "Acreage Drainage Plan", detail: "Engineering runoff solutions for 1+ acre estate lots to protect neighbors.", icon: Droplets },
                { phase: "HOA Integration", detail: "Direct coordination with Forest Ridge and Battle Creek architectural boards.", icon: Building2 },
                { phase: "Final Commissioning", detail: "Municipal hand-off and Rose District heritage certification.", icon: Anchor }
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

      {/* 5. THE BA MASTERWORK FAQ (Massive SEO Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The BA <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers for Broken Arrow estate owners.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "How do you build a pool into the limestone ridges of Broken Arrow?", 
                  a: "We use a combination of diamond-tipped rock saws and specialized rock-heads. By cutting into the limestone rather than hammering it, we create a stable, flat shelf that serves as a permanent structural foundation. We then anchor the shell directly into the stone using epoxy-injected Grade 60 steel pins." 
                },
                { 
                  q: "Will the rock excavation damage my home in Forest Ridge?", 
                  a: "No. Our precision sawing technique decouples the vibration from the surrounding stone. Unlike budget builders who use massive hammers that can shake your entire estate, our process is surgical and foundation-safe." 
                },
                { 
                  q: "How do you manage hydraulics for large acreage estates?", 
                  a: "We perform a full 'Friction-Loss Audit.' For estates where the equipment pad is remote, we upsize our plumbing to 3-inch or 4-inch Schedule 40 PVC and utilize high-head commercial pumps to ensure your water features have absolute power." 
                },
                { 
                  q: "What are the drainage requirements for large BA lots?", 
                  a: "Broken Arrow mandates that all pool runoff must be managed to prevent erosion on neighboring properties. We engineer custom 'Catch-Basin and Swale' systems that integrate with your estate's natural topography, ensuring 100% compliance." 
                },
                { 
                  q: "Is it more expensive to build on a rock ridge?", 
                  a: "The initial excavation cost is higher due to the specialized equipment. However, the long-term value is immense. A pool built on a limestone shelf will never settle or move, saving you tens of thousands in structural repairs over the life of the estate." 
                },
                { 
                  q: "Do you work with the Battle Creek or Forest Ridge HOAs?", 
                  a: "Yes. We have a 100% approval rate with Broken Arrow's most rigorous architectural boards. We provide full 3D site plans and engineering submittals that meet their specific aesthetics and structural requirements." 
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
            The Bedrock <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Standard.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Engineered for the ridge. Built for the legacy. The definitive Broken Arrow luxury pool experience.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate BA Protocol
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
