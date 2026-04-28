export default function TrustBar() {
  const partners = [
    { name: "Pentair", role: "Hydraulic Systems", detail: "Smart Water Mastery" },
    { name: "ASA", role: "Shotcrete Standards", detail: "Structural Integrity" },
    { name: "THBA", role: "Tulsa Builder Registry", detail: "Local Compliance" },
    { name: "Grade 60", role: "Steel Specification", detail: "Industrial Strength" },
  ];

  return (
    <div className="bg-black/80 backdrop-blur-md border-y border-white/5 py-16 md:py-20 relative overflow-hidden">
      {/* Subtle Grainy Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
          {/* CENTERED TITLES */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase text-primary tracking-[0.6em]">The Technical Registry</p>
            <h4 className="text-xl md:text-3xl font-serif text-white italic">Engineering Partners & Compliance</h4>
          </div>

          {/* LOGOS UNDERNEATH */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 md:gap-x-24 w-full max-w-6xl">
            {partners.map((p) => (
              <div key={p.name} className="group relative flex flex-col items-center space-y-3 grayscale hover:grayscale-0 transition-all duration-700">
                <p className="text-2xl md:text-4xl font-serif font-black text-white/20 group-hover:text-primary transition-colors tracking-tighter uppercase italic leading-none">
                  {p.name}
                </p>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase text-slate-500 tracking-widest group-hover:text-slate-300 transition-colors">
                    {p.role}
                  </p>
                  <p className="hidden md:block text-[8px] font-bold uppercase text-slate-800 tracking-[0.4em] group-hover:text-primary/40 transition-colors">
                    {p.detail}
                  </p>
                </div>
                
                {/* Decorative Line */}
                <div className="w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700 mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
