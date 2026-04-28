import { Metadata } from "next";
import LocalSchema from "@/components/LocalSchema";
import { ShieldCheck, Lock, EyeOff, Server, Gavel } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Protocol | Pool Builder Tulsa",
  description: "Uncompromising data sovereignty and engineering confidentiality for high-net-worth estate projects in the Tulsa Metro.",
  alternates: {
    canonical: '/privacy',
  }
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden pt-24 md:pt-32">
      <LocalSchema pageType="Homepage" />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1200px] py-16 md:py-24">
        
        <div className="space-y-6 mb-16 md:mb-24 text-center md:text-left border-b border-white/10 pb-12">
          <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-fade-in">Legal & Security Framework</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.1] text-white tracking-tighter uppercase italic">
            Privacy <br />
            <span className="gold-gradient">Protocol.</span>
          </h1>
          <p className="text-lg md:text-xl font-serif text-slate-500 italic font-light tracking-wide max-w-2xl">
             Uncompromising Data Sovereignty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          
          <div className="md:col-span-1 space-y-6 sticky top-32">
             <div className="p-8 glass-panel rounded-2xl border-primary/20 bg-primary/5 space-y-6">
                <ShieldCheck size={32} className="text-primary" />
                <h3 className="text-white font-serif font-bold text-xl italic">The 918 Guarantee</h3>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  We are engineers, not data brokers. The information you provide is utilized solely for the purpose of architectural design, geological analysis, and structural execution.
                </p>
             </div>
             <div className="space-y-4">
               <a href="/terms" className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest border border-white/5 bg-white/5 p-4 rounded-xl">
                 <Server size={14} /> Review Terms of Service
               </a>
             </div>
          </div>

          <div className="md:col-span-2 space-y-12 text-slate-400 text-lg font-light leading-relaxed italic">
            
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <Lock className="text-primary" size={24} />
                Engineering Confidentiality
              </h2>
              <p>
                When you initiate a project protocol with Pool Builder Tulsa, you are submitting sensitive data regarding your estate&apos;s location, topography, and financial parameters. We treat this data with the same uncompromising rigor as our concrete structural engineering. We recognize that for our high-net-worth clients in Midtown, Jenks, and Bixby, privacy is not just a preference—it is a security requirement.
              </p>
              <p>
                Your property blueprints, utility maps, and HOA architectural submittals remain strictly confidential and are stored on secure, encrypted servers. They will never be utilized in public marketing materials without explicit, written sovereign consent. We maintain a &quot;No-Drone-Zone&quot; policy for construction progress unless otherwise authorized by the estate owner, ensuring that your project remains a private legacy.
              </p>
              <p>
                Our internal protocols for data handling are modeled after commercial engineering standards. Access to sensitive lot data is limited to the Principal Engineer and the Lead Structural Architect assigned to your project. This minimization of exposure ensures that your personal information and estate layout are never accessible to unauthorized third parties or low-level contractors.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <EyeOff className="text-primary" size={24} />
                Third-Party Isolation & Ecosystem Defense
              </h2>
              <p>
                The luxury pool industry is plagued by lead-generation networks that sell your contact information to the lowest bidder. **We do not participate in this ecosystem.** Our firm is built on a foundation of professional independence and ethical stewardship.
              </p>
              <p>
                Pool Builder Tulsa operates as a closed-loop engineering firm. The data collected via our Hero Calculator or consultation forms is reviewed exclusively by our internal team. We do not sell, rent, or lease your data to third-party vendors, sub-contractors, or marketing agencies under any circumstances. When we coordinate with municipal utility providers (ONEOK, AEP, etc.), we share only the minimum technical data required to secure building permits and variances.
              </p>
              <p>
                Furthermore, our website utilizes a hardened tracking architecture. We do not utilize intrusive third-party advertising pixels that follow you across the web. Our analytics are focused solely on improving the technical delivery of our engineering reports, ensuring that you receive the highest quality structural data without being tracked by the broader ad-tech complex.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <Server className="text-primary" size={24} />
                Data Retention, Sovereignty & Archival Integrity
              </h2>
              <p>
                We retain project data (including geological core samples, CC&R approvals, and structural blueprints) indefinitely to service any future warranty claims, estate modifications, or resale inspections. This archival integrity is a value-add for your property, providing a complete structural history for future estate managers. However, you maintain absolute sovereignty over your personal profile.
              </p>
              <p>
                If you wish to terminate an inquiry or request the deletion of your consultation data from our active queue, you may do so instantly by contacting the Principal Engineer. We provide a &quot;Right to be Forgotten&quot; that exceeds standard Oklahoma regulatory requirements, aligning with global privacy standards like GDPR and CCPA.
              </p>
              <p>
                In the event of a catastrophic server failure or data breach, we maintain an air-gapped backup protocol that ensures your structural blueprints and engineering data can be recovered without exposure to the public internet. This multi-layered defense-in-depth strategy is designed to protect your project from inception through the full lifecycle of the pool.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <ShieldCheck className="text-primary" size={24} />
                The Security Manifesto: Protecting the 918
              </h2>
              <p>
                Our commitment to privacy is rooted in our role as the premier technical authority in the Tulsa Metro. We understand that a luxury pool is more than an amenity; it is a significant financial and structural investment. Protecting the privacy of our clients is a critical component of protecting the value of their estates. Our firm operates under a strict &quot;Confidentiality-by-Design&quot; philosophy, where every engineering tool and digital interface is built with privacy as the primary constraint.
              </p>
              <p>
                From the moment you enter your data into our calculator to the final municipal inspection, every interaction is filtered through our privacy-first framework. We don&apos;t just build pools; we build secure environments. This includes the implementation of secure communication channels for project updates and the use of encrypted document sharing for all structural plans and contracts. We utilize end-to-end encryption for all digital project files, ensuring that your estate&apos;s architectural secrets are protected from interception.
              </p>
              <p>
                As we continue to scale the Pool Builder Tulsa platform, our privacy protocols will evolve alongside new technological challenges. We remain dedicated to being the most transparent, secure, and authoritative partner for your aquatic engineering needs. Your data is your property, and we treat it with the same respect we show for your land. We perform quarterly security audits on our lead-management infrastructure to ensure that no vulnerabilities exist in the pipeline between your consultation and our engineering execution.
              </p>
              <p>
                Finally, we maintain a strict &quot;Physical Privacy&quot; protocol on-site. Our crews are trained to respect the boundaries of your estate, and we utilize temporary privacy fencing and screening during the construction phase to ensure your project remains hidden from public view. We understand that the construction of a luxury pool is a private event, and we go to great lengths to ensure that your neighbors and the general public are not privy to the details of your structural modernization.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-4">
                <Gavel className="text-primary" size={24} />
                Inter-Agency Data Stewardship & Municipal Compliance
              </h2>
              <p>
                In the course of securing building permits, historic variances, and utility encroachments, we are required to share certain technical data with municipal bodies such as the City of Tulsa, Jenks Public Works, or Bixby Planning. Our role as your data steward is to manage this flow with surgical precision. We only submit the specific engineering blueprints and site-plans required by law, and we advocate for the protection of your estate&apos;s broader privacy within the public record. We treat the municipal submittal process as a controlled data exchange, ensuring that no superfluous personal details are exposed to the public domain.
              </p>
              <p>
                We handle all interactions with the **Tulsa Preservation Commission** and local HOAs with a focus on &quot;Aesthetic Privacy.&quot; While these boards require design clarity, we ensure that the internal structural engineering and security features of your pool remain confidential and out of the public design review documents whenever possible. This balance of transparency and secrecy is a specialized skill that we have mastered over decades of building in Tulsa&apos;s most exclusive enclaves. We recognize that the privacy of your estate is part of its value, and we defend that value at every step of the regulatory process.
              </p>
              <p>
                If a project requires a public hearing for a variance, our Principal Engineer personally represents the project, framing the discussion around technical necessity and structural sovereignty. This allows us to keep the conversation focused on engineering realities rather than personal estate details, maintaining your privacy even in a public regulatory environment. We also maintain a strict &quot;Post-Construction Data Purge&quot; option for clients who wish to have their temporary build-site data permanently removed from our active digital workstreams once the final inspection is complete.
              </p>
              <p>
                Our vision for privacy sovereignty is one of absolute client control. As digital threats evolve, our firm remains committed to implementing the most advanced cybersecurity measures to protect the integrity of your project data. We don&apos;t just build for today; we build for a future where your estate&apos;s data is as secure as its concrete foundation. By choosing Pool Builder Tulsa, you are choosing a partner that values your anonymity and security as much as your architectural vision.
              </p>
            </section>

            <div className="pt-12 border-t border-white/10 text-sm text-slate-500">
              <p>Last Updated: April 28, 2026</p>
              <p className="mt-2">For legal inquiries, data audits, or to request a &quot;Privacy Sovereignty Report&quot; for your specific project, please contact our administrative team. We are committed to absolute operational transparency and the uncompromising protection of your estate&apos;s data.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
