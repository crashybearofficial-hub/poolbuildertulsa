import Link from "next/link";

const SUBURBS = [
  { name: "Broken Arrow", href: "/suburbs/broken-arrow-limestone", copy: "Navigating the limestone shelves of Forest Ridge and the BA permit complexity." },
  { name: "Jenks", href: "/suburbs/jenks-luxury", copy: "Elite river-adjacent estates requiring advanced hydraulic soil stabilization." },
  { name: "Bixby", href: "/suburbs/bixby-estates", copy: "Large-scale estate development with complex drainage and HOA compliance." },
  { name: "Midtown", href: "/suburbs/midtown-historic", copy: "Historic restoration and tight-access engineering for Maple Ridge legacies." },
];

export default function NeighborhoodMesh() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">Geographic Sovereignty</p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-black text-white italic leading-none">The 918 <br /><span className="gold-gradient">Enclaves.</span></h2>
          </div>
          <p className="text-slate-500 text-base md:text-lg max-w-sm font-light italic leading-relaxed text-center md:text-left">
            Physically present in Tulsa&apos;s most prestigious neighborhoods. We build where the ground is difficult.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {SUBURBS.map((s, idx) => (
            <Link 
              key={idx} 
              href={s.href}
              className="group p-8 md:p-12 bg-black hover:bg-white/[0.02] transition-all duration-500 flex flex-col justify-between aspect-square"
            >
              <div className="space-y-6">
                <div className="w-12 h-[1px] bg-primary group-hover:w-24 transition-all duration-500"></div>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-white group-hover:gold-gradient transition-all uppercase tracking-tighter italic">{s.name}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light italic group-hover:text-slate-300 transition-colors">{s.copy}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-700 tracking-[0.3em] group-hover:text-primary transition-colors">Project Protocols</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2 duration-500 text-xl">→</span>
              </div>
            </Link>
          ))}
          
          <div className="p-8 md:p-12 bg-black flex flex-col items-center justify-center text-center space-y-6 group cursor-default">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-700">
               <span className="text-slate-800 text-2xl md:text-3xl group-hover:text-primary/30 transition-all">📍</span>
            </div>
            <p className="text-[10px] font-black uppercase text-slate-600 tracking-[0.5em] leading-loose">Serving the <br />Tulsa Metro</p>
          </div>
        </div>
      </div>
    </section>
  );
}
