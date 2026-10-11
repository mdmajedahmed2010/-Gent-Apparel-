import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Collections — Lihaaz by Minhaaz | রাজকীয় পাঞ্জাবি কালেকশন",
  description:
    "Explore exclusive Lihaaz by Minhaaz royal heritage Panjabi collections — Curzon Hall Heritage Series, Festive Eid Edition, Obsidian Black, Luxury Silk Jacquard, and Classic Cotton.",
};

export default async function CollectionsPage() {
  const curatedCollections = [
    {
      title: "Royal Heritage & Wedding Edition",
      image: "/assets/731105183_122137979606871146_8917897017688220084_n.jpg",
      href: "/categories/royal-heritage",
      tag: "WEDDING & HERITAGE",
      desc: "কার্জন হল হেরিটেজ অনুপ্রাণিত শ্যাম্পেন গোল্ড ও জারদৌসি কারুকাজ করা রাজকীয় পাঞ্জাবি",
    },
    {
      title: "Festive Eid Collection 2026",
      image: "/assets/731093757_122137979318871146_1303986987175253818_n.jpg",
      href: "/categories/festive-eid",
      tag: "EID CELEBRATION",
      desc: "টেরাকোটা রাস্ট, পান্না সবুজ ও রাজকীয় নীল রঙের উজ্জ্বল ঈদ উৎসব কালেকশন",
    },
    {
      title: "Classic Signature Cotton",
      image: "/assets/730084646_122134599422871146_2384218671751147055_n.jpg",
      href: "/categories/classic-cotton",
      tag: "BREATHABLE COTTON",
      desc: "প্রিমিয়াম ১০০% কম্বড সুতি ফেব্রিকে তৈরি আরামদায়ক ও মার্জিত পাঞ্জাবি",
    },
    {
      title: "Evening Obsidian Black",
      image: "/assets/731173450_122137979432871146_6950294711652391069_n.jpg",
      href: "/categories/evening-black",
      tag: "MIDNIGHT COUTURE",
      desc: "গভীর কুচকুচে কালো কাপড়ে টোনাল ও অ্যান্টিক গোল্ড জারদৌসি সূক্ষ্ম নকশা",
    },
    {
      title: "Luxury Raw Silk & Jacquard",
      image: "/assets/728570183_122134599722871146_7459141703632616239_n.jpg",
      href: "/categories/luxury-silk-jacquard",
      tag: "OPULENT SILK",
      desc: "রোজউড মেরুন ও পার্ল আইভরি র সিল্ক এবং ওভেন জ্যাকর্ড ট্র্যাডিশনাল এথনিক ওয়্যার",
    },
    {
      title: "Desert Sand Gold Jacquard",
      image: "/assets/731111670_122137979378871146_3792348301777002016_n.jpg",
      href: "/products/desert-sand-gold-jacquard-panjabi",
      tag: "GOLD METALLIC ACCENT",
      desc: "সোনালী বালুকাময় রঙ ও মেটালিক থ্রেডের চোখ ধাঁধানো আভিজাত্য",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Collections" }]} />

        {/* Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#c9a96e]/50 bg-[#c9a96e]/10 text-[#0f0e0d] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ LIHAAZ ROYAL HERITAGE COUTURE ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0e0d] font-heading">
            All Collections
          </h1>
          <div className="w-20 h-[2px] bg-[#c9a96e] mx-auto mt-5" />
          <p className="text-neutral-600 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            গুলশান-২ ডিজাইন স্টুডিওর রয়্যাল হেরিটেজ, ফেস্টিভ ঈদ, লাক্সারি সিল্ক ও ক্ল্যাসিক কটন পাঞ্জাবি কালেকশন এক নজরে ঘুরে দেখুন।
          </p>
        </div>

        {/* Curated Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 mb-24">
          {curatedCollections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden rounded-sm shadow-luxury hover:shadow-gold-glow transition-all duration-500 aspect-[4/5] bg-neutral-900 block border border-[#e8e6e1]/40"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-108"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-4 border border-[#c9a96e]/30 group-hover:border-[#c9a96e]/80 transition-all duration-500 pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#c9a96e]/20 border border-[#c9a96e]/40 text-[#e8ce9e] text-[9px] uppercase tracking-[0.24em] font-bold">
                  ✦ {col.tag}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-heading group-hover:text-[#e8ce9e] transition-colors">
                  {col.title}
                </h2>
                <p className="text-xs text-neutral-300 font-sans line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
                <p className="text-[11px] text-[#c9a96e] font-bold uppercase tracking-[0.16em] pt-2 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
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
