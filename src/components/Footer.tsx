import Link from "next/link";
import { Zap, ShieldCheck, MapPin, FileText, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20 md:py-32 border-t border-white/5 selection:bg-primary selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          
          {/* BRAND PILLAR */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-white font-serif font-black text-2xl italic uppercase tracking-tighter italic italic italic italic italic italic italic italic italic">
                Pool Builder <span className="gold-gradient">Tulsa.</span>
              </h3>
              <p className="text-slate-500 text-sm font-light italic leading-relaxed max-w-xs">
                Northeastern Oklahoma&apos;s premier geological engineering and luxury aquatic design firm. Engineered for the legacy.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4 text-primary">
              <Zap size={18} strokeWidth={1.5} />
              <ShieldCheck size={18} strokeWidth={1.5} />
              <MapPin size={18} strokeWidth={1.5} />
            </div>
          </div>

          {/* SERVICE PILLARS (Money Pages) */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em]">Engineering Silos</h4>
            <ul className="space-y-4">
              {[
                { name: "Gunite Engineering", href: "/services/gunite-engineering" },
                { name: "Fiberglass Performance", href: "/services/fiberglass-performance" },
                { name: "Vanishing Edge", href: "/services/vanishing-edge-hydraulics" },
                { name: "Silent Bunkers", href: "/services/subterranean-equipment-bunkers" },
                { name: "Historic Restoration", href: "/services/historic-restoration" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm font-light italic flex items-center gap-2 group">
                    {link.name} <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUBURB PILLARS (Location Authority) */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em]">Luxury Enclaves</h4>
            <ul className="space-y-4">
              {[
                { name: "Jenks Luxury", href: "/suburbs/jenks-luxury" },
                { name: "Bixby Estates", href: "/suburbs/bixby-estates" },
                { name: "Midtown Historic", href: "/suburbs/midtown-historic" },
                { name: "Owasso Limestone", href: "/suburbs/owasso-limestone" },
                { name: "Glenpool Alluvial", href: "/suburbs/glenpool-alluvial" },
                { name: "BA Bedrock", href: "/suburbs/broken-arrow-limestone" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm font-light italic flex items-center gap-2 group">
                    {link.name} <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCE PILLARS (E-E-A-T) */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em]">Technical Archive</h4>
            <ul className="space-y-4">
              {[
                { name: "Tulsa Soil & Geology", href: "/resources/tulsa-soil-geology" },
                { name: "Permit Sovereignty", href: "/resources/permit-sovereignty" },
                { name: "Engineering Heritage", href: "/about" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm font-light italic flex items-center gap-2 group">
                    <FileText size={12} className="text-primary/40 group-hover:text-primary transition-colors" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-20 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-800 text-[9px] uppercase font-bold tracking-[0.5em]">
            &copy; {new Date().getFullYear()} Pool Builder Tulsa. All Technical Rights Reserved.
          </p>
          <div className="flex gap-8 text-[9px] uppercase font-black text-slate-700 tracking-[0.3em]">
             <Link href="/" className="hover:text-primary transition-colors">Sovereign Home</Link>
             <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Protocol</Link>
             <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
