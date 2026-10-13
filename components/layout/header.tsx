"use client";

/**
 * GENT APPAREL BD — Header Component
 * Better Quality, Better Style!
 * 100% Authentic Export-Quality Menswear, Premium Denim & Smart Casuals
 * Lalbagh, Dhaka-1211 | Hotline / WhatsApp: 01560-018131
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
  { href: "/categories/denim-jeans", label: "Export Denim" },
  { href: "/categories/gabardine-chinos", label: "Italian Chinos" },
  { href: "/categories/joggers-activewear", label: "Activewear" },
  { href: "/categories/sweaters-winter", label: "Winter Drops" },
  { href: "/collections/winter-is-back", label: "Winter Collection" },
  { href: "/shop", label: "All Products" },
  { href: "/about", label: "About Brand" },
];

const megaMenuData: Record<
  string,
  {
    categories: { label: string; href: string }[];
    styles: { label: string; href: string }[];
    featured: { title: string; subtitle: string; image: string; href: string };
  }
> = {
  "Export Denim": {
    categories: [
      { label: "All Original Export Denim", href: "/categories/denim-jeans" },
      { label: "Lucky Brand 121 Slim Straight Light Wash", href: "/products/lucky-brand-121-slim-straight-light-wash-denim" },
      { label: "Lucky Brand 221 Deep Indigo Denim", href: "/products/lucky-brand-221-original-straight-deep-indigo-denim" },
      { label: "Sea Barrier Italian Attitude Straight", href: "/products/sea-barrier-italian-attitude-raw-indigo-straight-jeans" },
      { label: "Sea Barrier Classic Medium Wash Flex", href: "/products/sea-barrier-classic-medium-wash-flex-denim" },
      { label: "IL Granchio Luxury Italian Stretch", href: "/products/il-granchio-luxury-wear-italian-collection-stretch-denim" },
      { label: "Aeropostale Vintage Washed Charcoal", href: "/products/aeropostale-vintage-washed-charcoal-grey-denim-jeans" },
    ],
    styles: [
      { label: "100% Authentic International Surplus", href: "/categories/denim-jeans" },
      { label: "Comfort Flex & Lycra Stretch Recovery", href: "/categories/denim-jeans" },
      { label: "Genuine Leather Badges & Rivets", href: "/categories/denim-jeans" },
      { label: "Factory Tagged with Verified Barcodes", href: "/categories/denim-jeans" },
    ],
    featured: {
      title: "Super Premium Export Denim",
      subtitle: "Authentic Lucky Brand, Sea Barrier & Italian designer denim",
      image: "/assets/lucky-brand-light-wash.jpg",
      href: "/categories/denim-jeans",
    },
  },
  "Italian Chinos": {
    categories: [
      { label: "All Gabardine & Chinos", href: "/categories/gabardine-chinos" },
      { label: "Sea Barrier E-X-TRA Comfort Chino Pants", href: "/products/sea-barrier-extra-comfort-chino-gabardine-pants" },
      { label: "High-Density Compact Twill Gabardine", href: "/categories/gabardine-chinos" },
      { label: "Smart Casual Office & Dinner Trousers", href: "/shop" },
    ],
    styles: [
      { label: "Italian Attire & Continental Silhouette", href: "/categories/gabardine-chinos" },
      { label: "Horn Buttons & Welt Rear Pockets", href: "/categories/gabardine-chinos" },
      { label: "Breathable Long-Staple Cotton Twill", href: "/categories/gabardine-chinos" },
    ],
    featured: {
      title: "Sea Barrier Italian Comfort",
      subtitle: "Extra comfort twill chinos engineered for smart-casual elegance",
      image: "/assets/sea-barrier-chino-pants.jpg",
      href: "/categories/gabardine-chinos",
    },
  },
  "Winter Drops": {
    categories: [
      { label: "Explore Winter Collection 2026", href: "/collections/winter-is-back" },
      { label: "Lincoln UK Layered Mock Quarter-Zip Pullover", href: "/products/lincoln-uk-layered-mock-collar-quarter-zip-knit-pullover" },
      { label: "Slazenger Export Edition Cuffed Joggers", href: "/products/slazenger-export-edition-cuffed-ankle-joggers" },
      { label: "Slazenger Heritage Stripe Track Pants", href: "/products/slazenger-heritage-athletic-stripe-track-pants" },
    ],
    styles: [
      { label: "Woven Plaid Collar Inset (2-in-1 Layered)", href: "/products/lincoln-uk-layered-mock-collar-quarter-zip-knit-pullover" },
      { label: "280 GSM Brushed Cotton Fleece Joggers", href: "/categories/joggers-activewear" },
      { label: "Heavyweight Knitwear with Thermal Insulation", href: "/categories/sweaters-winter" },
    ],
    featured: {
      title: "WINTER IS BACK",
      subtitle: "Authentic UK knits & heavyweight athletic fleece trousers",
      image: "/assets/lincoln-quarter-zip-pullover.jpg",
      href: "/collections/winter-is-back",
    },
  },
};

export function Header({ settings = {} }: { settings?: Record<string, unknown> }) {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem("gent_announcement_dismissed");
    if (isDismissed) {
      setTimeout(() => setShowAnnouncement(false), 0);
    }
  }, []);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem("gent_announcement_dismissed", "true");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-sm transition-all duration-300">
      {/* Luxury Brand Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#0a0a0a] text-white border-b border-[#c8a265]/30 text-center text-[10px] md:text-xs font-medium tracking-wide py-2 px-6 relative">
          <div className="container mx-auto flex items-center justify-center gap-2 truncate">
            <span className="inline-block px-2 py-0.5 rounded bg-[#c8a265] text-black text-[9px] font-black uppercase tracking-widest">
              GENT APPAREL BD
            </span>
            <span className="truncate">
              ⚡ Better Quality, Better Style! • ১০০% অথেনটিক এক্সপোর্ট মেনস ফ্যাশন • ঢাকা ৮০৳, বাইরে ১৫০৳ ডেলিভারি • WhatsApp: {BUSINESS.HOTLINE}
            </span>
          </div>
          <button
            onClick={dismissAnnouncement}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#c8a265] transition-colors p-1"
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
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#c8a265]/50 bg-black shadow-md group-hover:border-[#c8a265] group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/logo.jpg"
                    alt="Gent Apparel BD Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-neutral-900 group-hover:text-[#c8a265] transition-colors uppercase leading-tight">
                    Gent Apparel BD
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-neutral-500">
                    Better Quality, Better Style!
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
                    className="text-[12px] font-semibold uppercase tracking-[0.14em] text-neutral-800 hover:text-[#c8a265] py-6 block transition-colors relative after:absolute after:bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-[#c8a265] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Studio WhatsApp + Search + Cart + User */}
            <div className="flex items-center gap-2">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#faf6ef] hover:bg-[#f3ebd9] text-[#8e6e30] text-xs font-bold border border-[#c8a265]/40 transition-colors shadow-xs"
                title="Gent Apparel WhatsApp Concierge"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#c8a265]" />
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
