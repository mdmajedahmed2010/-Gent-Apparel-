import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Collections — Gent Apparel BD | Better Quality, Better Style!",
  description:
    "Gent Apparel BD - Winter Is Back, Super Premium Denim, Italian Attitude, এবং Athletic & Streetwear এক্সক্লুসিভ এক্সপোর্ট কালেকশন।",
};

export default async function CollectionsPage() {
  const curatedCollections = [
    {
      title: "Winter Is Back",
      image: "/assets/gent/843591931_122191549418659128_6542470716447814781_n.jpg",
      href: "/collections/winter-is-back",
      tag: "WINTER KNITWEAR",
      desc: "Lincoln UK অরিজিনাল এক্সপোর্ট কোয়ার্টার-জিপ ও ফাইন-গেজ নিটওয়্যার সোয়েটার কালেকশন",
    },
    {
      title: "Super Premium Denim",
      image: "/assets/gent/841754223_122188435058659128_315516087754388856_n.jpg",
      href: "/collections/super-premium-denim",
      tag: "USA & ITALY DENIM",
      desc: "Lucky Brand 221 Straight & Sea Barrier 1962 র ডেনিম ও ডার্ক ইন্ডিগো জিন্স",
    },
    {
      title: "Italian Attitude",
      image: "/assets/gent/846564617_122201948942659128_571746200216668784_n.jpg",
      href: "/collections/italian-attitude",
      tag: "MILANO REFINED",
      desc: "Il Granchio Milano ও Sea Barrier ক্লাসিক চিনোস এবং ওশান ব্লু স্ট্রেচ প্যান্টস",
    },
    {
      title: "Athletic & Streetwear",
      image: "/assets/gent/843377882_122191497914659128_2674391456184880590_n.jpg",
      href: "/collections/athletic-streetwear",
      tag: "BRITISH HERITAGE",
      desc: "Slazenger UK জগার্স, ট্র্যাক প্যান্টস এবং Aeropostale নিউ ইয়র্ক চারকোল ওয়াশ ডেনিম",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfa] dark:bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Collections" }]} />

        {/* Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#c8a265]/50 bg-[#c8a265]/10 text-foreground text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ GENT APPAREL BD CURATED EDITIONS ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading">
            All Collections
          </h1>
          <div className="w-20 h-[2px] bg-[#c8a265] mx-auto mt-5" />
          <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            Better Quality, Better Style! — আন্তর্জাতিক এক্সপোর্ট ব্র্যান্ডের প্রিমিয়াম ডেনিম, চিনোস, উইন্টারওয়্যার ও স্পোর্টস কালেকশন
          </p>
        </div>

        {/* Curated Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 md:gap-9 mb-24 max-w-5xl mx-auto">
          {curatedCollections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-lg transition-all duration-500 aspect-[4/3] bg-neutral-900 block border border-border/60 hover:border-[#c8a265]"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-108"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-4 border border-[#c8a265]/30 group-hover:border-[#c8a265]/80 transition-all duration-500 pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#c8a265]/20 border border-[#c8a265]/40 text-[#e8ce9e] text-[9px] uppercase tracking-[0.24em] font-bold">
                  ✦ {col.tag}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-heading group-hover:text-[#e8ce9e] transition-colors">
                  {col.title}
                </h2>
                <p className="text-xs text-neutral-300 font-sans line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
                <p className="text-[11px] text-[#c8a265] font-bold uppercase tracking-[0.16em] pt-2 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Explore Collection →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
