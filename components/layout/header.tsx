"use client";

/**
 * LIHAAZ BY MINHAAZ — Header Component
 * Royal Heritage, Designer Menswear & Festive Panjabi Couture
 * Studio: House-5, Road 54/A, Gulshan-2, Dhaka
 * Hotline: +880 1755-627874
 */

import Link from "next/link";
import Image from "next/image";
import { User, X, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { href: "/categories/royal-heritage", label: "Royal Heritage" },
  { href: "/categories/festive-eid", label: "Festive Eid" },
  { href: "/categories/classic-cotton", label: "Classic Cotton" },
  { href: "/categories/evening-black", label: "Evening Black" },
  { href: "/categories/luxury-silk-jacquard", label: "Luxury Silk" },
  { href: "/shop", label: "All Panjabis" },
  { href: "/about", label: "Our Studio" },
];

const megaMenuData: Record<
  string,
  {
    categories: { label: string; href: string }[];
    styles: { label: string; href: string }[];
    featured: { title: string; subtitle: string; image: string; href: string };
  }
> = {
  "Royal Heritage": {
    categories: [
      { label: "All Heritage & Wedding Panjabis", href: "/categories/royal-heritage" },
      { label: "Curzon Hall Heritage Champagne Edition", href: "/products/curzon-hall-heritage-champagne-panjabi" },
      { label: "Midnight Obsidian Zardozi Edition", href: "/products/midnight-obsidian-heritage-zardozi-panjabi" },
      { label: "Bespoke Groom & Festive Wear", href: "/shop" },
    ],
    styles: [
      { label: "Handcrafted Zardozi Collar & Placket", href: "/products/curzon-hall-heritage-champagne-panjabi" },
      { label: "Matted Gold Metallic Button Details", href: "/products/midnight-obsidian-heritage-zardozi-panjabi" },
      { label: "Royal Raw Silk & Blended Weaves", href: "/categories/luxury-silk-jacquard" },
    ],
    featured: {
      title: "Royal Heritage Edition",
      subtitle: "Opulent hand-embroidery inspired by royal Mughal artistry",
      image: "/assets/731105183_122137979606871146_8917897017688220084_n.jpg",
      href: "/categories/royal-heritage",
    },
  },
  "Festive Eid": {
    categories: [
      { label: "Explore Festive Eid Collection", href: "/categories/festive-eid" },
      { label: "Terracotta Rust Royal Edition", href: "/products/terracotta-rust-royal-heritage-panjabi" },
      { label: "Imperial Emerald Green Panjabi", href: "/products/imperial-emerald-green-festive-panjabi" },
      { label: "Desert Sand Gold Jacquard Panjabi", href: "/products/desert-sand-gold-jacquard-panjabi" },
    ],
    styles: [
      { label: "Tailored Slim & Classic Comfort Fit", href: "/categories/festive-eid" },
      { label: "Breathable Premium Combed Fabrics", href: "/categories/classic-cotton" },
      { label: "Signature Mandarin Collar Finish", href: "/shop" },
    ],
    featured: {
      title: "Festive Eid 2026",
      subtitle: "Rich warm hues celebrating the joy of Eid",
      image: "/assets/731093757_122137979318871146_1303986987175253818_n.jpg",
      href: "/categories/festive-eid",
    },
  },
  "Evening Black": {
    categories: [
      { label: "All Evening & Monochrome Panjabis", href: "/categories/evening-black" },
      { label: "Midnight Obsidian Zardozi Panjabi", href: "/products/midnight-obsidian-heritage-zardozi-panjabi" },
      { label: "Regal Charcoal Hand-Embroidered", href: "/products/regal-charcoal-hand-embroidered-panjabi" },
    ],
    styles: [
      { label: "Tonal Jet Black Embroidery", href: "/categories/evening-black" },
      { label: "Sleek Minimalist Cut with Side Slits", href: "/categories/evening-black" },
      { label: "Velvet Touch Lining & Fine Hemming", href: "/categories/evening-black" },
    ],
    featured: {
      title: "Obsidian Black Collection",
      subtitle: "Unmatched sophistication for receptions & festive nights",
      image: "/assets/731173450_122137979432871146_6950294711652391069_n.jpg",
      href: "/categories/evening-black",
    },
  },
};

export function Header({ settings = {} }: { settings?: Record<string, unknown> }) {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem("lihaaz_announcement_dismissed");
    if (isDismissed) {
      setTimeout(() => setShowAnnouncement(false), 0);
    }
  }, []);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem("lihaaz_announcement_dismissed", "true");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-sm transition-all duration-300">
      {/* Luxury Royal Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#0f0e0d] text-white border-b border-[#c9a96e]/30 text-center text-[10px] md:text-xs font-medium tracking-wide py-2 px-6 relative">
          <div className="container mx-auto flex items-center justify-center gap-2 truncate">
            <span className="inline-block px-2 py-0.5 rounded bg-[#c9a96e] text-black text-[9px] font-black uppercase tracking-widest">
              GULSHAN STUDIO
            </span>
            <span className="truncate">
              👑 LIHAAZ BY MINHAAZ — গুলশান-২ স্টুডিও • সারা দেশে ক্যাশ অন ডেলিভারি ও পার্সেল চেক করার সুবিধা • WhatsApp: {BUSINESS.HOTLINE}
            </span>
          </div>
          <button
            onClick={dismissAnnouncement}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#c9a96e] transition-colors p-1"
            aria-label="Close announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Brand Header — 76px */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 static">
          <div className="flex h-[76px] items-center justify-between">
            {/* Left: Mobile menu + Brand Logo */}
            <div className="flex items-center gap-4">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#c9a96e]/50 bg-neutral-900 shadow-md group-hover:border-[#c9a96e] group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/logo.jpg"
                    alt="Lihaaz by Minhaaz Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-neutral-900 group-hover:text-[#c9a96e] transition-colors uppercase leading-tight">
                    Lihaaz by Minhaaz
                  </span>
                  <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-neutral-500">
                    Gulshan-2 • Designer Menswear
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 static" aria-label="Main navigation">
              {navLinks.map((link) => {
                const hasMegaMenu = link.label in megaMenuData;
                const menu = megaMenuData[link.label];

                if (hasMegaMenu && menu) {
                  return (
                    <MegaMenu key={link.href} label={link.label} href={link.href} data={menu} />
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className="text-[12px] font-semibold uppercase tracking-[0.14em] text-neutral-800 hover:text-[#c9a96e] py-6 block transition-colors relative after:absolute after:bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-[#c9a96e] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Studio WhatsApp + Search + Cart + User */}
            <div className="flex items-center gap-2">
              <a
                href={BUSINESS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#faf6ef] hover:bg-[#f3ebd9] text-[#8e6e30] text-xs font-bold border border-[#c9a96e]/40 transition-colors shadow-xs"
                title="Studio WhatsApp Concierge"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#c9a96e]" />
                <span>{BUSINESS.HOTLINE}</span>
              </a>
              <SearchBar />
              <CartButton />
              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-neutral-700 hover:text-black hover:bg-neutral-100 transition-all"
                aria-label="My account"
              >
                <User className="h-5 w-5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
