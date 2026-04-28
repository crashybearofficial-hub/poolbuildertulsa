import LocalSchema from "@/components/LocalSchema";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const SERVICES = ["gunite", "fiberglass", "remodeling"];

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  
  if (!SERVICES.includes(service.toLowerCase())) {
    notFound();
  }

  const name = service.charAt(0).toUpperCase() + service.slice(1);

  return (
    <div className="min-h-screen bg-background p-10">
      <LocalSchema pageType="Service" locationEntity="Tulsa" specificService={name} />
      
      <main className="max-w-4xl mx-auto space-y-12 py-20">
        <header className="space-y-4">
          <div className="text-primary font-black uppercase text-sm tracking-widest">Engineering Excellence</div>
          <h1 className="text-6xl font-black text-white tracking-tighter uppercase">{name} Experts in Tulsa</h1>
          <p className="text-xl text-slate-400">The Definitive Guide to {name} Construction in the Oklahoma Earth-Shift environment.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 p-8 border border-slate-800 rounded">
            <h2 className="text-xl font-bold mb-4">Structural Specs</h2>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><strong className="text-white">Steel:</strong> Grade 60 Rebar for maximum tensile strength.</li>
              <li><strong className="text-white">Concrete:</strong> Specific PSI ratings for thermal shock resistance.</li>
              <li><strong className="text-white">Cure Time:</strong> Strictly monitored for Oklahoma humidity levels.</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 p-8 border border-slate-800 rounded">
            <h2 className="text-xl font-bold mb-4">Tulsa Durability</h2>
            <p className="text-sm text-slate-400">
              Our {name} builds handle the 110°F to -10°F temperature swings. We use UV-resistant finishes that won&apos;t fade or chalk under the intense Green Country sun.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-accent">Oklahoma Construction Roadmap</h2>
          <div className="space-y-4 border-l-2 border-slate-800 pl-6 ml-2">
            <div>
              <h4 className="font-bold text-white">Phase 1: Excavation & Soil Management</h4>
              <p className="text-sm text-slate-500">Handling the local shale and high-plasticity clay.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">Phase 2: Steel & Hydraulic Efficiency</h4>
              <p className="text-sm text-slate-500">Pressure testing for Oklahoma&apos;s variable ground pressure.</p>
            </div>
            {/* Additional phases */}
          </div>
        </section>

        <div className="pt-10 border-t border-slate-800">
          <a href="/" className="text-primary font-black uppercase text-sm hover:underline">&larr; Return to Homepage</a>
        </div>
      </main>
    </div>
  );
}
