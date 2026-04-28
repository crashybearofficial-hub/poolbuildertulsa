export default function FAQSection() {
  const faqs = [
    { 
      q: "How does Gunite hydration differ in the 918 climate?", 
      a: "Tulsa's fluctuating humidity and 100°F+ summers create extreme surface evaporation. We implement a custom hydration protocol for 28 days to ensure the structural shell reaches its maximum theoretical PSI without thermal shock cracking." 
    },
    { 
      q: "The Problem with Midtown Utilities?", 
      a: "Historical areas like Maple Ridge and Terwilleger Heights have antiquated gas and water lines. We perform deep-bore sonic mapping before excavation to avoid the catastrophic utility strikes common with budget builders." 
    },
    { 
      q: "Grade 60 vs Grade 40 Steel?", 
      a: "Generic builders use Grade 40 because it's cheaper and easier to bend. We mandate Grade 60 because it offers 50% more tensile strength—the only way to truly stabilize a heavy pool in expansive Oklahoma clay." 
    },
    { 
      q: "Administrative Sovereignty (Permits)?", 
      a: "We manage the entire municipal friction point. From the City of Tulsa Planning Division to the Jenks Public Works setbacks, we handle the bureaucracy so you don't have to." 
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          <div className="text-center space-y-6">
            <p className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">Technical Archive</p>
            <h2 className="text-3xl md:text-6xl lg:text-[5rem] font-serif font-black text-white italic tracking-tighter uppercase leading-none">The Reality <br /><span className="gold-gradient">Check.</span></h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="group p-6 md:p-12 glass-panel rounded-2xl md:rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-700 space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-primary font-serif font-black text-2xl md:text-4xl italic opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <h4 className="text-lg md:text-2xl font-serif font-bold text-white italic group-hover:gold-gradient transition-all">
                    {faq.q}
                  </h4>
                </div>
                <div className="pl-10 md:pl-20 relative">
                  <div className="absolute left-4 md:left-8 top-2 bottom-2 w-[1px] bg-white/10 group-hover:bg-primary/50 transition-colors"></div>
                  <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed italic group-hover:text-slate-200 transition-colors">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <p className="text-[9px] text-slate-600 font-black uppercase tracking-[0.6em]">Exclusive Engineering Access | Project Protocol 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
