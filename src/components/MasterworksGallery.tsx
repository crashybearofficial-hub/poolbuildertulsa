import Image from "next/image";
import Script from "next/script";

const PROJECTS = [
  {
    title: "The Midtown Monolith",
    location: "Maple Ridge, Tulsa",
    spec: "Tight-Access Gunite | 6000 PSI Shell",
    image: "/gallery/midtown.png",
    width: "lg:col-span-2",
    geo: { lat: 36.1364, lng: -95.9814 },
    neighborhood: "Midtown Tulsa"
  },
  {
    title: "Jenks River-Front",
    location: "River Valley Enclave",
    spec: "Hydraulic Relief Mapping | Infinity Edge",
    image: "/gallery/jenks.png",
    width: "lg:col-span-1",
    geo: { lat: 35.9754, lng: -95.9614 },
    neighborhood: "Jenks"
  },
  {
    title: "Owasso Rock Shelf",
    location: "Stone Canyon",
    spec: "Limestone Bedrock Anchoring | 10k Hammer Excavation",
    image: "/gallery/owasso-tech.png",
    width: "lg:col-span-1",
    geo: { lat: 36.2693, lng: -95.8544 },
    neighborhood: "Owasso"
  },
  {
    title: "Glenpool Aquifer Basin",
    location: "Southern Enclave",
    spec: "Alluvial Stabilization | Monolithic Mat",
    image: "/gallery/glenpool-tech.png",
    width: "lg:col-span-2",
    geo: { lat: 35.9461, lng: -96.0028 },
    neighborhood: "Glenpool"
  },
  {
    title: "Bixby Legacy Estate",
    location: "Seven Lakes",
    spec: "Grade 60 Steel | Geologic Piling",
    image: "/gallery/bixby_v2.png",
    width: "lg:col-span-3",
    geo: { lat: 35.9422, lng: -95.8833 },
    neighborhood: "Bixby"
  },
];

export default function MasterworksGallery() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Project",
        "name": p.title,
        "description": p.spec,
        "image": `https://poolbuildertulsa.com${p.image}`,
        "location": {
          "@type": "Place",
          "name": p.neighborhood,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": p.neighborhood,
            "addressRegion": "OK"
          }
        }
      }
    }))
  };

  return (
    <section className="py-24 md:py-32 bg-black">
      <Script
        id="project-gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1440px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-24">
          <div className="space-y-6">
            <p className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">Masterworks Archive</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white italic leading-tight">
              The Portfolio of <br /><span className="gold-gradient">Sovereignty.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base md:text-xl max-w-sm font-light italic leading-relaxed">
            Every project is a technical case study in engineering longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {PROJECTS.map((project, i) => (
            <div 
              key={project.title} 
              className={`group relative overflow-hidden rounded-3xl bg-slate-900 aspect-video lg:aspect-auto lg:h-[500px] ${project.width}`}
            >
              <Image 
                src={project.image} 
                alt={`${project.title} - ${project.location}`} 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="space-y-1">
                  <p className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">{project.location}</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-white italic">{project.title}</h3>
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">
                  <div className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">{project.spec}</span>
                  </div>
                </div>
              </div>

              {/* View Project Button */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-10 group-hover:translate-x-0">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <span className="text-white group-hover:text-black text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <p className="text-[10px] font-black uppercase text-slate-700 tracking-[0.8em]">End of Archive | Secure Your Slot in the 2026 Protocol</p>
        </div>
      </div>
    </section>
  );
}
