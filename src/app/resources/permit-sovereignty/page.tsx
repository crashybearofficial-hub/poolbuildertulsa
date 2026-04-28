import HeroCalculator from "@/components/HeroCalculator";
import LocalSchema from "@/components/LocalSchema";
import Image from "next/image";
import { Zap, Atom, ShieldCheck, ArrowRight, ClipboardCheck, Compass, Droplets, HardHat, Beaker, Ruler, Scale, AlertTriangle, ThermometerSun, Anchor, History, Shrink, BrickWall, TreePine, Landmark, Microscope, Globe, Mountain, FileText, Gavel, Waves } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tulsa Pool Permitting & HOA Approval Guide | Permit Sovereignty",
  description: "Expert guide to navigating City of Tulsa pool permits, floodplain variances, and complex HOA architectural reviews. The absolute authority on Oklahoma aquatic compliance.",
  alternates: {
    canonical: '/resources/permit-sovereignty',
  }
};

export default function PermitSovereigntyPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema 
        pageType="Article" 
        title="Tulsa Pool Permitting & HOA Approval Guide"
        description="The definitive technical guide to pool permitting in Tulsa, Jenks, Bixby, and Broken Arrow. 2000+ words of authority on municipal codes, drainage easements, and historic compliance."
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/permit-sovereignty-hero.png" 
            alt="Pool Permitting Sovereignty Tulsa Oklahoma" 
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
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Technical Whitepaper: Regulatory Sovereignty</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Permit <br />
                  <span className="gold-gradient">Sovereignty.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   Navigating the Bureaucracy of the 918.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  Building a luxury pool is 50% engineering and 50% diplomacy. We own the regulatory process across every jurisdiction in Northeastern Oklahoma.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <FileText size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Code Specialist</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Gavel size={14} className="text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Approval Liaison</span>
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

      {/* 2. THE MUNICIPAL MATRIX (Authority Content) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">Regulatory Archive 05</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">The Municipal <br /><span className="gold-gradient">Matrix.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                  <p>
                    Navigating the **City of Tulsa** versus satellite municipalities like **Jenks**, **Bixby**, or **Broken Arrow** requires four distinct sets of engineering blueprints. Each jurisdiction operates under a unique philosophy regarding drainage runoff, utility easements, and public-works integration. We don&apos;t just fill out forms; we manage the inter-municipal matrix.
                  </p>
                  <p>
                    For the **City of Tulsa**, the challenge is often rooted in historic stewardship and aging infrastructure. In districts like Maple Ridge or Brookside, we often encounter utility lines that were laid during the 1920s. We maintain a direct line of communication with the **Tulsa Preservation Commission** and **Development Services** to ensure that your modern pool modernization is approved without sacrificing the neighborhood&apos;s architectural integrity.
                  </p>
                  <p>
                    In **Jenks** and **Bixby**, the regulatory focus shifts to **Hydraulic Impact Sovereignty.** Because these areas are inextricably linked to the Arkansas River floodplains, the city engineering departments mandate rigorous, peer-reviewed drainage plans. We provide a full **Civil Engineering Drainage Manifest** for every project, utilizing 3D topographical modeling to prove that your pool will have zero negative impact on the surrounding water table.
                  </p>
                  <p>
                    Furthermore, we handle the complex &quot;Easement Encroachment&quot; process. If your ideal pool site is partially obstructed by a dormant utility line or a legacy drainage easement, we coordinate the technical submittals to ONEOK, PSO, and Cox Communications to secure the necessary waivers or manage the professional relocation of the infrastructure. We are your advocates at the city planning table.
                  </p>
                </div>
              </div>
              
              <div className="p-10 glass-panel rounded-3xl border-primary/20 bg-primary/5 space-y-4">
                <h4 className="text-white font-serif font-bold text-xl italic flex items-center gap-3">
                  <AlertTriangle className="text-primary" size={20} />
                  The Easement Warning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Budget builders often &quot;guess&quot; at utility setbacks or build over &quot;abandoned&quot; lines without proper verification. In Broken Arrow or Owasso, this can result in an immediate municipal work-stoppage and a court-ordered structure removal. We perform a **Certified Utility Audit** on every lot before the first excavator arrives on site.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/gallery/permit-sovereignty-tech.png" alt="Official City of Tulsa Permit Approval" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-12 right-12 glass-panel px-6 py-3 rounded-full border-primary/30">
                    <span className="text-primary font-black text-[9px] uppercase tracking-widest">Authority Status: ACTIVE</span>
                </div>
              </div>
              <div className="prose prose-invert text-slate-500 text-sm italic leading-relaxed px-6 text-center">
                <p>
                  &quot;Regulatory compliance is the invisible backbone of a luxury build. We own the permits, the variances, and the board approvals so you can focus on the vision.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DRAINAGE SOVEREIGNTY (New Authority Section) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white italic">Hydraulic & Drainage <br /><span className="gold-gradient">Sovereignty.</span></h2>
            <div className="space-y-10 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
              <p>
                The number one reason for permit rejection in Northeastern Oklahoma is **Drainage Impact.** We have mastered the art of the &quot;Zero-Runoff&quot; engineering plan, allowing us to build in complex floodplain zones where others fail.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Floodplain Variances", desc: "Successfully securing build-permits in secondary floodplain zones.", icon: Waves, link: "/suburbs/jenks-luxury" },
              { title: "Retention Vaults", desc: "Engineering subterranean water storage to meet new city drainage laws.", icon: Anchor, link: "/services/gunite-engineering" },
              { title: "Erosion Control", desc: "Implementing silt-sovereignty protocols to protect your estate and neighbors.", icon: ShieldCheck, link: "/services/fiberglass-performance" },
              { title: "Utility Relocation", desc: "Managing the complex logistics of moving gas, electric, or fiber lines.", icon: Zap, link: "/services/historic-restoration" }
            ].map((item, i) => (
              <a key={i} href={item.link} className="p-8 glass-panel rounded-2xl border-white/5 space-y-6 hover:bg-white/[0.03] transition-all group text-left">
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

      {/* 4. THE HOA PROTOCOL */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-4xl font-serif font-black text-white italic leading-tight uppercase">The Board <br /><span className="gold-gradient">Liaison.</span></h2>
              <p className="text-slate-500 text-lg italic font-light">Navigating the aesthetic gatekeepers of Oklahoma&apos;s most exclusive neighborhoods.</p>
              <div className="pt-8">
                <a href="#quote" className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] border-b border-primary/30 pb-2 w-fit">
                  Approval Portfolio <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {[
                { phase: "Aesthetic Alignment", detail: "Creating 3D architectural renderings that match your neighborhood&apos;s CC&Rs.", icon: Microscope },
                { phase: "Technical Submittals", detail: "Providing full site-plans, drainage maps, and material boards for review.", icon: ClipboardCheck },
                { phase: "Board Representation", detail: "Personally attending HOA meetings to defend the engineering and design.", icon: Gavel },
                { phase: "Stone Canyon Standards", detail: "Meeting the specific rock-wall and masonry requirements of Bixby&apos;s elite.", icon: Mountain },
                { phase: "Forest Ridge Compliance", detail: "Navigating the architectural standards of BA&apos;s premier legacy neighborhood.", icon: Landmark }
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

      {/* 5. THE PERMIT AUTHORITY FAQ (Massive E-E-A-T Block) */}
      <section className="py-16 md:py-24 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">The Approval <br /><span className="gold-gradient">Archive.</span></h2>
              <p className="text-slate-400 text-lg font-light italic">Direct answers on the bureaucracy of building in the 918.</p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  q: "How long does a pool permit take in the City of Tulsa?", 
                  a: "Typically 4 to 6 weeks, depending on the complexity of the drainage plan and whether your property sits in a Historic District. We utilize an 'Electronic Fast-Track' system that ensures our submittals are technically perfect, reducing the back-and-forth with reviewers." 
                },
                { 
                  q: "Can you build a pool in a designated floodplain?", 
                  a: "Yes, but it requires a 'Floodplain Variance.' This involves specialized engineering to prove the pool will not displace floodwater or impede the flow of the basin. We have a high success rate with these complex submittals in the Jenks and Bixby river zones." 
                },
                { 
                  q: "What are the specific drainage requirements for Bixby?", 
                  a: "Bixby mandates that all new pools must have an engineered drainage plan that prevents runoff into neighboring properties. We utilize catch-basins and subterranean retention pits that integrate seamlessly into your landscape to meet these standards." 
                },
                { 
                  q: "Do I need an HOA permit before the City permit?", 
                  a: "Most municipalities in Northeastern Oklahoma require an HOA approval letter before they will issue a building permit. We handle the HOA submittal first to ensure we have the necessary 'Green Light' before moving to the city level." 
                },
                { 
                  q: "What happens if a utility line is found where the pool should be?", 
                  a: "If it's a private line (irrigation, secondary electric), we relocate it. If it's a public utility easement, we work with the utility company to apply for an 'Easement Encroachment' or coordinate a professional relocation. We handle all the coordination with ONEOK, AEP, and Cox." 
                },
                { 
                  q: "Are the permit fees included in the project cost?", 
                  a: "Yes. We operate on a 'Sovereignty Basis,' meaning we handle all permit fees, engineering stamps, and architectural renderings as part of our comprehensive turn-key service." 
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
            Total <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Sovereignty.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Don&apos;t get stuck in red tape. Partner with the builder that owns the regulatory process from submittal to final inspection.
          </p>
          <div className="pt-12">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl">
              Initiate Regulatory Protocol
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
