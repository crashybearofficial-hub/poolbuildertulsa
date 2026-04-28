import HeroCalculator from "@/components/HeroCalculator";
import Image from "next/image";
import LocalSchema from "@/components/LocalSchema";
import { Zap, Anchor, HardHat, Compass, ArrowRight, ShieldCheck, Landmark } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Engineers | Pool Builder Tulsa",
  description: "Meet the master builders and structural engineers behind Tulsa's most prestigious luxury pool projects. 918 Native. Uncompromising Standards.",
  alternates: {
    canonical: '/about',
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <LocalSchema pageType="Homepage" title="About The Engineers | Pool Builder Tulsa" description="Meet the master builders and structural engineers behind Tulsa's most prestigious luxury pool projects." />
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-luxury.png" 
            alt="Pool Builder Tulsa Engineering Team" 
            fill 
            className="object-cover opacity-30 scale-105 animate-pulse-slow grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <main className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 py-20 md:py-32 max-w-[1600px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">The Master Builders</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                  Engineering <br />
                  <span className="gold-gradient">Heritage.</span>
                </h1>
                <p className="text-base md:text-xl font-serif text-slate-500 italic font-light tracking-wide">
                   Uncompromising Standards. 918 Native.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
                <p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed">
                  We are not salesmen with glossy brochures. We are architectural engineers, masons, and hydraulic specialists dedicated to building century-lasting aquatic environments in Northeastern Oklahoma.
                </p>
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

      {/* 2. THE MANIFESTO */}
      <section className="py-24 md:py-32 bg-black border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
               {/* 
                  TODO: When you generate the team image using the prompt, 
                  replace this src with "/gallery/team-heritage.png" 
               */}
               <Image src="/gallery/team-heritage.png" alt="Principal Engineer Pool Builder Tulsa" fill className="object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <div className="absolute bottom-12 left-12">
                  <p className="text-primary font-black text-xs uppercase tracking-widest mb-2">Principal Engineer</p>
                  <p className="text-white font-serif italic text-2xl">Tulsa, Oklahoma</p>
               </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">The Founder&apos;s Manifesto</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic leading-tight">Refusing to <br /><span className="gold-gradient">Compromise.</span></h2>
              </div>
              
              <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                <p>
                  &quot;The pool industry in Tulsa is broken. For decades, volume-based builders have been pouring thin concrete shells directly onto expansive Oklahoma clay. The result is an epidemic of cracked foundations, sheared plumbing, and failing infrastructure hidden behind pretty tile.&quot;
                </p>
                <p>
                  &quot;We started this firm to build the exact opposite. We approach pool construction the way a commercial firm approaches building a skyscraper. If the geology report demands a 12-inch monolithic floor and bedrock anchoring, we do it. We do not compromise on steel. We do not compromise on concrete PSI. And we never, ever compromise on the subsurface preparation.&quot;
                </p>
                <p>
                  &quot;Your estate deserves a masterwork. We are the engineers who build them.&quot;
                </p>
              </div>

              <div className="p-8 glass-panel rounded-3xl border-primary/20 bg-primary/5 flex items-center gap-6">
                 <ShieldCheck className="text-primary shrink-0" size={40} />
                 <div>
                   <p className="text-white font-bold font-serif italic text-xl">The Lifetime Guarantee</p>
                   <p className="text-slate-500 text-sm italic mt-1">If the earth moves, our shells hold. Period.</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE ENGINEERING ROSTER */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="text-center space-y-6 mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic">The 918 <br /><span className="gold-gradient">Task Force.</span></h2>
            <p className="text-slate-400 text-lg font-light italic max-w-2xl mx-auto">Our firm is built on the belief that a pool builder should be an engineer first and a designer second. Meet the specialized experts behind your estate&apos;s aquatic infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                role: "Principal Engineer", 
                detail: "With over two decades of structural oversight in Oklahoma, the Principal mandates a 6,000 PSI monolithic shell protocol. Every blueprint is reviewed for seismic resilience and thermal shock resistance, ensuring that the pool shell acts as a single, unbreakable unit against the high-plasticity clay of the Tulsa basin.", 
                icon: HardHat 
              },
              { 
                role: "Geological Auditor", 
                detail: "Specializing in the variable terrain of Northeastern Oklahoma, from the limestone shelves of Midtown to the expansive shale of Jenks and Owasso. The Auditor conducts site-specific soil density tests and mandates custom piering or bedrock anchoring when standard footings fail to meet our 50-year stability threshold.", 
                icon: Compass 
              },
              { 
                role: "Chief Hydraulics", 
                detail: "Designing the &quot;Circulation Sovereignty&quot; system. By utilizing 3-inch plumbing and custom manifold arrays, we achieve near-zero friction loss. This allows your estate to run commercial-grade filtration at a fraction of the energy cost, maintaining crystal-clear sovereignty over your water chemistry year-round.", 
                icon: Zap 
              },
              { 
                role: "Permitting Liaison", 
                detail: "Navigating the complex regulatory waters of the City of Tulsa, Board of Adjustment, and historic preservation committees. The Liaison ensures that every structural design is not only engineered for the earth but fully sovereign within the municipal and neighborhood legal frameworks of your specific enclave.", 
                icon: Landmark 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 glass-panel rounded-3xl border-white/5 space-y-6 hover:bg-white/[0.03] transition-all group">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                  <item.icon className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif text-white italic font-bold">{item.role}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 DEEP CONTENT: THE ENGINEERING STANDARD OF NORTHEASTERN OKLAHOMA */}
      <section className="py-24 md:py-32 glass-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-6 text-center">
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white italic">Why We Build <span className="gold-gradient">Differently.</span></h3>
              <p className="text-slate-500 text-lg italic max-w-3xl mx-auto">The difference between a luxury amenity and a structural liability lies in the unseen engineering beneath the tile. We don&apos;t build for the first season; we build for the first century.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-slate-400 text-lg font-light leading-relaxed italic">
              <div className="space-y-8">
                <h4 className="text-white font-serif font-bold text-2xl italic">The Concrete Matrix</h4>
                <p>
                  Most pools in Tulsa are built using a standard 3,500 PSI gunite mix. In a climate where the ground stays relatively stable, this is sufficient. In Oklahoma, it is a recipe for failure. We utilize a high-density 6,000 PSI shotcrete application, applied at high pneumatic velocity to eliminate air pockets and ensure maximum structural density. This matrix is specifically engineered to handle the massive expansion-contraction cycles that characterize the 918 area code, where temperatures can swing 80 degrees in a single week.
                </p>
                <p>
                  Our curing process is just as critical as the application. We implement a 21-day hydration protocol, where the shell is kept under constant moisture to ensure the concrete reaches its full crystalline strength. This prevents the &quot;checking&quot; and surface cracks that plague faster, volume-driven construction projects. By controlling the heat of hydration, we ensure that the chemical bond between the cement and the aggregate is permanent and unyielding.
                </p>
                <p>
                  Furthermore, we analyze the chemical composition of the water table. In parts of Tulsa with high sulfate content in the soil, we utilize Type V sulfate-resistant cement to prevent the subterranean &quot;concrete cancer&quot; that can erode a standard pool shell from the outside in.
                </p>
              </div>
              <div className="space-y-8">
                <h4 className="text-white font-serif font-bold text-2xl italic">Structural Steel Schedules</h4>
                <p>
                  We don&apos;t use standard #3 rebar for our main structural cages. We mandate Grade 60 tensile steel, often utilizing #4 or #5 bars in high-load areas like bond beams and deep-end transitions. Our rebar is tied in a 6-inch grid pattern, creating a steel skeleton that is roughly 40% denser than the industry average. This isn&apos;t just about strength; it&apos;s about load distribution across the unstable Oklahoma clay.
                </p>
                <p>
                  In areas like Midtown Tulsa, where the limestone shelves can create uneven support, or Bixby, where the sandy aquifer soil requires deep stabilization, our steel schedules are custom-calculated by a structural engineer to ensure the pool shell can bridge any geological shifts without losing its integrity. We treat the pool as a monolithic bridge deck, capable of supporting its own weight even if the soil beneath it were to subside.
                </p>
                <p>
                  Additionally, we utilize epoxy-coated steel in sensitive geological zones to prevent the oxidation and &quot;rebar bloom&quot; that can occur in high-groundwater environments. This ensures that the structural core of your pool remains rust-free for the life of the estate.
                </p>
              </div>
            </div>

            <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 space-y-8">
              <h4 className="text-white font-serif font-bold text-3xl italic text-center">Hydraulic Sovereignty</h4>
              <p className="text-slate-400 text-lg font-light leading-relaxed italic text-center max-w-4xl mx-auto">
                A pool is only as healthy as its circulation. We approach hydraulics with the same rigor as our structural shells. While others use 2-inch PVC lines that throttle water flow and force pumps to work harder, we design 3-inch &quot;Sovereign Loops&quot; that maximize hydraulic efficiency.
              </p>
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-primary font-black text-xl">300%</div>
                  <p className="text-[10px] uppercase text-slate-500 tracking-widest font-bold">More Flow Efficiency</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-primary font-black text-xl">Near Zero</div>
                  <p className="text-[10px] uppercase text-slate-500 tracking-widest font-bold">Total Dynamic Head</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-primary font-black text-xl">70%</div>
                  <p className="text-[10px] uppercase text-slate-500 tracking-widest font-bold">Energy Cost Reduction</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm italic leading-relaxed text-center max-w-3xl mx-auto">
                This engineering choice ensures that your filtration system is moving the maximum volume of water with the minimum amount of electrical effort. By reducing the pressure on your equipment, we extend its lifespan and ensure that your water remains perfectly clear even during the hottest Oklahoma summer months. We utilize high-velocity sweep returns and independent skimmer lines to eliminate &quot;dead zones&quot; where bacteria and algae can flourish.
              </p>
            </div>

            <div className="space-y-12">
              <h4 className="text-white font-serif font-bold text-3xl italic text-center">The 918 Stewardship Protocol</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 glass-panel rounded-2xl border-white/5 space-y-4">
                   <h5 className="text-white font-bold text-lg italic">Topographical Sovereignty</h5>
                   <p className="text-slate-500 text-sm leading-relaxed italic">We utilize laser-guided topographical mapping to ensure your pool integrates perfectly with your estate&apos;s natural drainage. No more runoff issues or swampy backyards.</p>
                </div>
                <div className="p-8 glass-panel rounded-2xl border-white/5 space-y-4">
                   <h5 className="text-white font-bold text-lg italic">Acoustic Engineering</h5>
                   <p className="text-slate-500 text-sm leading-relaxed italic">Our equipment bunkers are acoustically dampened, ensuring that the sound of your filtration and heating systems never disturbs the tranquility of your outdoor sanctuary.</p>
                </div>
                <div className="p-8 glass-panel rounded-2xl border-white/5 space-y-4">
                   <h5 className="text-white font-bold text-lg italic">Thermal Efficiency</h5>
                   <p className="text-slate-500 text-sm leading-relaxed italic">Utilizing high-efficiency heat pumps and insulated plumbing, we extend your swimming season into the Oklahoma fall while minimizing carbon impact and utility costs.</p>
                </div>
              </div>
              <p className="text-slate-400 text-lg font-light leading-relaxed italic text-center max-w-4xl mx-auto pt-8">
                Our vision for the future of Tulsa aquatic engineering is one of total structural and aesthetic harmony. We are constantly researching new concrete additives, advanced filtration polymers, and seismic-resilient steel patterns to ensure that our projects remain the gold standard of the 918. When you choose Pool Builder Tulsa, you are investing in a legacy of engineering excellence that will serve your family for generations. We are the stewards of your estate&apos;s aquatic future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FINAL CALL */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-background text-center border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5 animate-pulse-slow pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px] space-y-10 md:space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black text-white italic uppercase tracking-tighter leading-none">
            Hire the <br className="hidden md:block" />
            <span className="gold-gradient underline decoration-white/20 underline-offset-[20px]">Engineers.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed italic">
            Stop gambling with generic contractors. Secure your site survey with Tulsa&apos;s most technical custom pool firm.
          </p>
          <div className="pt-12 flex justify-center">
             <a href="#quote" className="bg-white text-black font-black px-16 py-7 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-2xl flex items-center gap-4">
              Initiate Project Protocol <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
