import { Metadata } from "next";
import LocalSchema from "@/components/LocalSchema";
import { Gavel, ClipboardCheck, Scale, HardHat, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Pool Builder Tulsa",
  description: "Terms of Engineering Service and Rules of Engagement for luxury pool construction projects in the Tulsa Metro.",
  alternates: {
    canonical: '/terms',
  }
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden pt-24 md:pt-32">
      <LocalSchema pageType="Homepage" />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1200px] py-16 md:py-24">
        
        <div className="space-y-6 mb-16 md:mb-24 text-center md:text-left border-b border-white/10 pb-12">
          <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Legal & Operational Framework</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
            Terms of <br />
            <span className="gold-gradient">Service.</span>
          </h1>
          <p className="text-lg md:text-xl font-serif text-slate-500 italic font-light tracking-wide max-w-2xl">
             The Rules of Engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          
          <div className="md:col-span-1 space-y-6 sticky top-32">
             <div className="p-8 glass-panel rounded-2xl border-primary/20 bg-primary/5 space-y-6">
                <Gavel size={32} className="text-primary" />
                <h3 className="text-white font-serif font-bold text-xl italic">Operational Integrity</h3>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  By submitting an inquiry or engaging in a consultation, you agree to these operational parameters. We build complex, multi-variable environments. Precision requires rules.
                </p>
             </div>
             <div className="space-y-4">
               <a href="/privacy" className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest border border-white/5 bg-white/5 p-4 rounded-xl">
                 <ShieldCheck size={14} /> Review Privacy Protocol
               </a>
             </div>
          </div>

          <div className="md:col-span-2 space-y-12 text-slate-400 text-lg font-light leading-relaxed italic">
            
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <ClipboardCheck className="text-primary" size={24} />
                Consultation Parameters & Architectural Estimates
              </h2>
              <p>
                The estimates provided via our digital &quot;Hero Calculator&quot; or initial phone briefings are preliminary architectural budgets. They are designed to provide a high-level framework for your project based on standard Tulsa market variables. They do not constitute a legally binding contract or a final project cost.
              </p>
              <p>
                A final, binding quotation is only provided after a comprehensive on-site survey. This survey includes a multi-tiered geological audit, GPR (Ground Penetrating Radar) scanning to locate century-old Midtown infrastructure, property line verification via licensed survey, and a rigorous utility easement review. We do not commit to a build price until the physics of the site are fully understood and mapped.
              </p>
              <p>
                By engaging in our consultation process, you acknowledge that our engineering team invests significant intellectual energy into the feasibility analysis of your estate. We reserve the right to decline projects that do not meet our minimum structural standards or that pose an unacceptable risk to the geological integrity of the surrounding properties.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <HardHat className="text-primary" size={24} />
                Geological Disclaimers & Subsurface Discovery
              </h2>
              <p>
                Northeastern Oklahoma is defined by complex, high-variability subsurface conditions, including high-PI (Plasticity Index) clay, sudden limestone shelves, and shallow alluvial aquifers. While we conduct rigorous pre-construction testing, the nature of geology means that &quot;unknown-unknowns&quot; are a possibility in any major excavation.
              </p>
              <p>
                The discovery of unmapped subterranean hazards—such as massive bedrock shelves requiring extended hydraulic hammering, hidden century-old brick sewer lines in Midtown, or extreme groundwater pressure requiring industrial-grade de-watering rigs—may necessitate engineering addendums to the original contract. We maintain a &quot;No-Compromise&quot; structural policy: we do not build on unstable ground, and we will halt excavation if geological realities demand a structural pivot to ensure the 50-year integrity of the shell.
              </p>
              <p>
                Any additional costs incurred due to these geological discoveries will be presented with full technical transparency and civil engineering documentation. We act as your stewards in these scenarios, finding the most cost-effective solution that maintains the structural sovereignty of your project.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <Scale className="text-primary" size={24} />
                Intellectual Property, Sovereignty & Design Rights
              </h2>
              <p>
                Pool Builder Tulsa operates as a master-build firm, not a generic service provider. All 3D architectural renderings, structural blueprints, drainage matrices, and technical reports created during the consultation and design phase remain the exclusive intellectual property of our engineering team until a construction contract is fully executed.
              </p>
              <p>
                You may not take our proprietary structural designs or hydraulic maps to a third-party or generic pool contractor for &quot;bidding&quot; or execution. Doing so violates our architectural copyright and undermines the safety and integrity of the intended structure. Our designs are engineered for our specific build protocols; executing them with sub-standard materials or generic methods poses a significant risk to your estate.
              </p>
              <p>
                Upon completion of the project and final payment, you are granted a permanent license to utilize the structural blueprints and operating manuals for the maintenance and future servicing of the pool. However, the underlying engineering methodologies and design patterns remain the property of Pool Builder Tulsa.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <ShieldCheck className="text-primary" size={24} />
                The Performance Standard: Force Majeure & Local Climate
              </h2>
              <p>
                Oklahoma weather is an extreme variable that dictates our engineering constraints. Our structures are designed and warranted to withstand the massive thermal expansion and contraction cycles associated with 100°F+ Oklahoma summers and sub-zero winter blasts. However, our terms of service recognize the role of &quot;Force Majeure&quot; in both construction timelines and structural performance thresholds.
              </p>
              <p>
                While our shells are warranted against structural failure due to predictable geological movement, we are not liable for damage caused by extraordinary seismic events, catastrophic flooding beyond engineered drainage capacity, or other geological anomalies that exceed the standard 50-year residential engineering parameters of the 918 area. We build for the next century of Tulsa weather, utilizing the most advanced shotcrete and Grade 60 steel protocols available in the modern market.
              </p>
              <p>
                Furthermore, construction timelines in the 918 are subject to the &quot;Clay Saturation Factor.&quot; If heavy spring rains saturate the high-PI clay soil at your build site, we will pause excavation or steel-tying to prevent sub-base destabilization. This is a technical requirement, not a delay of convenience. Protecting your property&apos;s structural integrity is our highest operational priority, and we will not compromise the foundation for the sake of a calendar deadline.
              </p>
              <p>
                In the event of a weather-related delay, we provide a full &quot;Structural Integrity Report&quot; explaining the engineering rationale behind the pause. This ensures that you are fully informed of the technical constraints affecting your project and that the ultimate sovereign quality of the build is never in question.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <Compass className="text-primary" size={24} />
                Structural Maintenance Sovereignty & Equipment Standards
              </h2>
              <p>
                Your engagement with Pool Builder Tulsa grants you absolute sovereignty over the operation of your estate&apos;s aquatic features. Upon project completion, we provide a comprehensive &quot;Sovereign Operating Manual&quot; specific to your project&apos;s hydraulics and automation system. However, the warranty remains contingent upon adherence to these engineering maintenance standards.
              </p>
              <p>
                Because we utilize high-velocity 3-inch plumbing and advanced manifold arrays, the chemical and hydraulic balance of the pool must be maintained within specific engineering tolerances. Utilizing unauthorized third-party technicians who do not understand the &quot;Sovereign Loop&quot; architecture may void certain structural and equipment warranties. We recommend utilizing our certified maintenance partners who are trained in the specific engineering protocols of our builds.
              </p>
              <p>
                Furthermore, the use of sub-standard winterization techniques in the Oklahoma climate can lead to thermal stress on the high-PSI concrete matrix. We mandate a &quot;Professional Winterization Protocol&quot; for all projects within the first five years of the warranty period. This ensures that the shell and plumbing remain protected during the critical early years of the concrete&apos;s lifecycle.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <Gavel className="text-primary" size={24} />
                Dispute Resolution & Engineering Arbitration
              </h2>
              <p>
                In the rare event of a technical dispute regarding structural performance or project execution, both parties agree to a mandatory &quot;Engineering Arbitration&quot; process. This ensures that any disagreements are resolved by professional structural engineers and master-builders who understand the specific geological constraints of Northeastern Oklahoma, rather than by generic legal mediators.
              </p>
              <p>
                The arbitration will be conducted according to the standards of the American Society of Civil Engineers (ASCE) and the Oklahoma Board of Licensure for Professional Engineers and Land Surveyors. This focus on technical reality ensures a fair and scientifically sound resolution for both the estate owner and the build firm. We are committed to a &quot;No-Conflict&quot; build experience, where technical excellence is the primary benchmark of success.
              </p>
              <p>
                By signing a project protocol with Pool Builder Tulsa, you acknowledge that you are entering into a relationship based on technical trust and architectural stewardship. We take this responsibility with the utmost seriousness, and we expect our clients to value the engineering precision that defines our brand.
              </p>
            </section>

            <div className="pt-12 border-t border-white/10 text-sm text-slate-500">
              <p>Last Updated: April 28, 2026</p>
              <p className="mt-2">For contract-specific inquiries, technical clarifications, or to request a full &quot;Operational Sovereignty Audit,&quot; please coordinate directly with the Principal Engineer. We are committed to absolute operational clarity and the long-term success of your estate&apos;s aquatic infrastructure.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
