export default function GeologySection() {
  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Technical Constraint #1</p>
          <h3 className="text-3xl md:text-6xl font-serif font-black text-white leading-[0.9] italic">
            Expansive Clay <br /><span className="text-slate-500">The Silent Shell-Killer.</span>
          </h3>
        </div>
        
        <div className="space-y-6 text-slate-400 text-base md:text-lg font-light leading-relaxed italic">
          <p>
            Tulsa soil isn&apos;t just dirt. It&apos;s a living, breathing geological force. In the rainy season, it exerts thousands of pounds of pressure on your pool. In the drought, it vanishes.
          </p>
          <p>
            Standard Grade 40 steel simply cannot handle the tensile load required to keep a pool from snapping during the Oklahoma earth-shift.
          </p>
          <p>
            Our solution: <strong className="text-primary font-serif">Deep-Bore Stabilization</strong> and Grade 60 Rebar as an uncompromised standard. We don&apos;t build to code; we build to geology.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8 border-t border-white/5">
          <div className="space-y-2">
            <p className="text-primary font-black text-xs uppercase tracking-widest">Shale Grid</p>
            <p className="text-xs md:text-sm text-slate-500">Precision excavation in Jenks & Owasso rock shelves.</p>
          </div>
          <div className="space-y-2">
            <p className="text-primary font-black text-xs uppercase tracking-widest">Hydraulic Relief</p>
            <p className="text-xs md:text-sm text-slate-500">Engineered valves to balance intense groundwater pressure.</p>
          </div>
        </div>
      </div>
      
      <div className="relative glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden border border-primary/20">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 space-y-8 md:space-y-12">
          <div className="text-center space-y-2">
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.5em]">Geological Stratification</p>
            <h4 className="text-lg md:text-xl font-serif text-white italic">Green Country Soil Profile</h4>
          </div>
          
          <div className="space-y-2 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent"></div>
            <div className="h-12 bg-white/5 rounded-xl flex items-center px-4 md:px-6 text-[10px] font-black uppercase text-slate-400 border border-white/5">
              Top Soil / River Loam
            </div>
            <div className="h-24 md:h-32 bg-primary/10 rounded-xl flex items-center justify-between px-4 md:px-6 border border-primary/20 group hover:bg-primary/20 transition-all duration-500">
              <span className="text-xs font-black uppercase text-primary tracking-widest">High-Plasticity Clay</span>
              <span className="text-[10px] text-primary italic font-serif hidden sm:inline">Structural Threat Level: Critical</span>
            </div>
            <div className="h-16 md:h-20 bg-slate-900/50 rounded-xl flex items-center px-4 md:px-6 text-[10px] font-black uppercase text-slate-600 border border-white/5">
              Oklahoma Shale Bedrock
            </div>
          </div>
          
          <p className="text-center text-[10px] md:text-[11px] text-slate-500 font-medium italic px-4 md:px-10 leading-loose">
            &quot;Our foundation stabilization protocols are derived from commercial bridge engineering, ensuring your estate stays level while the neighborhood shifts.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
