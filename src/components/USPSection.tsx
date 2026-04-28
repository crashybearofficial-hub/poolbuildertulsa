export default function USPSection() {
  const comparisons = [
    { feature: "Architectural Intent", salesman: "Bespoke Backyard Dreams", contractor: "Hydraulic Integrity & Flow" },
    { feature: "Structural Backbone", salesman: "Standard Rebar Grid", contractor: "Grade 60 Industrial Steel" },
    { feature: "Climate Longevity", salesman: "UV-Resistant Surface", contractor: "Thermal Shock Mitigation" },
    { feature: "The Consultation", salesman: "Sales Pitch & Deposit", contractor: "Geological Feasibility Study" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 space-y-6">
          <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">Technical Sovereignty</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white italic">Choosing Your <span className="gold-gradient underline decoration-white/10 underline-offset-[15px]">Partner.</span></h2>
          <p className="text-slate-400 text-base md:text-lg font-light italic mt-6">We don&apos;t build for everyone. We build for the 918 homeowner who values engineering over adjectives.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* THE SALESMAN (Problem) */}
          <div className="glass-panel p-8 md:p-16 rounded-[2rem] space-y-10 border-white/5 opacity-50 grayscale hover:opacity-100 transition-all duration-700">
            <div className="space-y-4">
              <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em]">The Common Industry Flaw</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white italic">The Volume Salesman</h3>
            </div>
            
            <div className="space-y-8">
              {comparisons.map((c) => (
                <div key={c.feature} className="border-b border-white/5 pb-6">
                  <p className="text-[9px] uppercase font-black text-slate-600 mb-2 tracking-widest">{c.feature}</p>
                  <p className="text-slate-400 font-serif italic text-base leading-relaxed">&quot;{c.salesman}&quot;</p>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-slate-700 font-bold uppercase tracking-[0.3em]">Driven by commission protocols.</p>
          </div>

          {/* THE MASTER BUILDER (Solution) */}
          <div className="glass-panel p-8 md:p-16 rounded-[2rem] space-y-10 border-primary/20 relative shadow-[0_0_80px_rgba(212,175,55,0.05)]">
            <div className="absolute top-0 right-10 bg-primary text-black font-black text-[9px] uppercase px-6 py-2.5 rounded-b-lg tracking-[0.2em] shadow-xl">918 Gold Standard</div>
            
            <div className="space-y-4">
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Your Strategic Partner</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white italic">The Master Builder</h3>
            </div>
            
            <div className="space-y-8">
              {comparisons.map((c) => (
                <div key={c.feature} className="border-b border-white/10 pb-6">
                  <p className="text-[9px] uppercase font-black text-primary mb-2 tracking-widest">{c.feature}</p>
                  <p className="text-white font-serif font-black text-lg md:text-xl italic leading-relaxed">{c.contractor}</p>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em]">Driven by technical legacy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
