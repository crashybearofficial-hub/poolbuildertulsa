import LocalSchema from "@/components/LocalSchema";
export const runtime = 'edge';
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const SUBURBS = ["jenks", "broken-arrow", "owasso", "bixby", "midtown"];

export default async function SuburbPage({ params }: { params: Promise<{ suburb: string }> }) {
  const { suburb } = await params;
  
  if (!SUBURBS.includes(suburb.toLowerCase())) {
    notFound();
  }

  const name = suburb.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-background p-10">
      <LocalSchema pageType="Suburb" locationEntity={name} />
      
      <main className="max-w-4xl mx-auto space-y-12 py-20">
        <header className="space-y-4">
          <div className="text-primary font-black uppercase text-sm tracking-widest">Tulsa Metro Suburbs</div>
          <h1 className="text-6xl font-black text-white tracking-tighter uppercase">Custom Pool Builder in {name}, OK</h1>
          <p className="text-xl text-slate-400">Physically and technically present in {name}. We don&apos;t just build pools; we build for {name}&apos;s specific geology.</p>
        </header>

        <section className="bg-slate-900/30 p-8 border-l-4 border-primary">
          <h2 className="text-2xl font-bold mb-4">The {name} Soil Reality</h2>
          <p className="text-slate-300 leading-relaxed">
            Unlike generic contractors, we understand the <strong>Expansive Clay</strong> and <strong>Shale</strong> common in the {name} area. Soil swelling during Oklahoma droughts can snap a standard pool shell like a dry twig. Our foundation reinforcement is engineered specifically for {name}&apos;s variable terrain.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Municipal & HOA Compliance</h2>
          <p className="text-slate-300">
            We handle the City of {name} Building Division permits for you. We understand the specific setbacks and safety fence requirements that distinguish {name} from Tulsa proper.
          </p>
          <p className="text-sm text-slate-500 italic">
            Working with local HOAs? We understand the aesthetic requirements for neighborhoods across {name}.
          </p>
        </section>

        <div className="pt-10 border-t border-slate-800">
          <a href="/" className="text-primary font-black uppercase text-sm hover:underline">&larr; Back to Tulsa Metro HQ</a>
        </div>
      </main>
    </div>
  );
}
