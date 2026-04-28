'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Loader } from 'lucide-react';

const SUBURBS = [
  { name: 'Tulsa', permitFee: 400 },
  { name: 'Jenks', permitFee: 350 },
  { name: 'Broken Arrow', permitFee: 300 },
  { name: 'Owasso', permitFee: 325 },
  { name: 'Bixby', permitFee: 350 },
];

const SOIL_TYPES = [
  { name: 'Stable Loam', multiplier: 1 },
  { name: 'Heavy Clay', multiplier: 1.15, note: "Tulsa's expansive clay requires extra steel reinforcement to prevent structural cracking." },
  { name: 'Rock/Shale', multiplier: 1.25, note: 'Shale excavation in Owasso/Jenks requires specialized heavy equipment.' },
];

const POOL_TYPES = [
  { name: 'Gunite (Technical Masterpiece)', basePrice: 85000 },
  { name: 'Fiberglass (High-Speed Performance)', basePrice: 65000 },
  { name: 'Luxury Remodel (Legacy Restoration)', basePrice: 50000 },
];

type FormState = 'idle' | 'open' | 'loading' | 'success' | 'error';

export default function HeroCalculator() {
  const [suburb, setSuburb] = useState(SUBURBS[0]);
  const [soil, setSoil] = useState(SOIL_TYPES[0]);
  const [pool, setPool] = useState(POOL_TYPES[0]);
  const [sloped, setSloped] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');

  // Contact fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const calculateEstimate = () => {
    let price = pool.basePrice * soil.multiplier;
    price += suburb.permitFee;
    if (sloped) price += 12000;
    return price;
  };

  const estimate = calculateEstimate();
  const minEstimate = Math.round(estimate * 0.98);
  const maxEstimate = Math.round(estimate * 1.05);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_name: name,
          client_email: email,
          client_phone: phone,
          municipality: suburb.name,
          soil_profile: soil.name,
          engineering_focus: pool.name,
          is_sloped_lot: sloped,
          quoted_min_price: minEstimate,
          quoted_max_price: maxEstimate,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed.');
      }

      setFormState('success');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setFormState('error');
    }
  };

  return (
    <div className="glass-panel p-6 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 italic">The Investment <span className="gold-gradient">Architect.</span></h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">Confidential Tulsa Project Estimator v.2026</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">Municipality</label>
            <select
              className="w-full bg-slate-900/80 border border-white/10 p-3 rounded-lg text-sm focus:border-primary outline-none transition-all cursor-pointer hover:bg-slate-800 text-white"
              onChange={(e) => setSuburb(SUBURBS.find(s => s.name === e.target.value) || SUBURBS[0])}
            >
              {SUBURBS.map(s => <option key={s.name} value={s.name} className="bg-slate-900 text-white">{s.name}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">Soil Profile</label>
            <select
              className="w-full bg-slate-900/80 border border-white/10 p-3 rounded-lg text-sm focus:border-primary outline-none transition-all cursor-pointer hover:bg-slate-800 text-white"
              onChange={(e) => setSoil(SOIL_TYPES.find(s => s.name === e.target.value) || SOIL_TYPES[0])}
            >
              {SOIL_TYPES.map(s => <option key={s.name} value={s.name} className="bg-slate-900 text-white">{s.name}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">Engineering Focus</label>
          <select
            className="w-full bg-slate-900/80 border border-white/10 p-4 rounded-lg text-sm focus:border-primary outline-none transition-all cursor-pointer hover:bg-slate-800 text-white"
            onChange={(e) => setPool(POOL_TYPES.find(p => p.name === e.target.value) || POOL_TYPES[0])}
          >
            {POOL_TYPES.map(p => <option key={p.name} value={p.name} className="bg-slate-900 text-white">{p.name}</option>)}
          </select>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/5">
          <input
            type="checkbox"
            id="sloped"
            checked={sloped}
            onChange={(e) => setSloped(e.target.checked)}
            className="w-5 h-5 rounded border-white/10 bg-transparent text-primary focus:ring-primary cursor-pointer"
          />
          <label htmlFor="sloped" className="text-[10px] font-black uppercase text-slate-300 tracking-wide cursor-pointer">
            Engineered Grading & Retaining (Sloped Lots)
          </label>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-white/10 space-y-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] font-black uppercase text-primary tracking-[0.3em] mb-2">Projected Capital Investment</p>
          <p className="text-4xl md:text-5xl font-serif font-black text-white leading-none">
            ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}
          </p>
          <p className="text-[10px] text-slate-500 mt-4 max-w-xs leading-relaxed">
            *Includes all {suburb.name} municipal compliance and site-specific geological stabilization.
          </p>
        </div>

        {/* ── IDLE STATE: CTA button ── */}
        {formState === 'idle' && (
          <button
            onClick={() => setFormState('open')}
            className="w-full bg-gradient-to-r from-primary via-[#F5E050] to-[#B8860B] text-black font-black py-5 rounded-xl uppercase text-xs tracking-[0.2em] shadow-2xl hover:brightness-110 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            Get My Free Quote <ArrowRight size={14} />
          </button>
        )}

        {/* ── OPEN STATE: Contact form ── */}
        {(formState === 'open' || formState === 'error') && (
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">Lock In This Estimate</p>
            <input
              type="text"
              placeholder="Full Name *"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 p-3 rounded-lg text-sm text-white placeholder-slate-600 focus:border-primary outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Email Address *"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 p-3 rounded-lg text-sm text-white placeholder-slate-600 focus:border-primary outline-none transition-all"
            />
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 p-3 rounded-lg text-sm text-white placeholder-slate-600 focus:border-primary outline-none transition-all"
            />
            {formState === 'error' && (
              <p className="text-red-400 text-xs text-center">{errorMsg}</p>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-[#F5E050] to-[#B8860B] text-black font-black py-5 rounded-xl uppercase text-xs tracking-[0.2em] shadow-2xl hover:brightness-110 transition-all transform hover:-translate-y-1"
            >
              Send My Quote Request
            </button>
            <p className="text-[10px] text-slate-600 text-center leading-relaxed">
              By submitting, you agree to our{' '}
              <a href="/privacy" className="text-slate-500 hover:text-primary transition-colors underline">Privacy Protocol</a>.
              We never sell your data.
            </p>
          </form>
        )}

        {/* ── LOADING STATE ── */}
        {formState === 'loading' && (
          <div className="flex flex-col items-center gap-4 py-4">
            <Loader className="text-primary animate-spin" size={32} />
            <p className="text-slate-400 text-sm italic">Securing your estimate...</p>
          </div>
        )}

        {/* ── SUCCESS STATE ── */}
        {formState === 'success' && (
          <div className="flex flex-col items-center gap-4 py-4 text-center animate-fade-in">
            <CheckCircle className="text-primary" size={48} strokeWidth={1.5} />
            <div>
              <p className="text-white font-serif font-bold text-xl italic">Estimate Secured.</p>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed italic">
                Our Principal Engineer will contact you within 24 hours to schedule your site survey.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
