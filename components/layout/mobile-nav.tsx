"use client";

/**
 * GENT APPAREL BD — Mobile Navigation Overlay
 * Lalbagh, Dhaka-1211, Bangladesh
 * Hotline & WhatsApp: 01560-018131
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User, ChevronDown, ChevronUp, PhoneCall, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useCartStore } from "@/store/cart-store";
import { BUSINESS } from "@/lib/constants";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleAccordion = (label: string) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  const categoriesWithSubs: Record<string, { label: string; href: string }[]> = {
    "Denim Jeans": [
      { label: "All Denim Jeans", href: "/categories/denim-jeans" },
      { label: "Lucky Brand Light Wash Regular Jeans", href: "/products/lucky-brand-men-light-wash-regular-fit-denim" },
      { label: "Sea Barrier Raw Indigo Stretch Jeans", href: "/products/sea-barrier-raw-indigo-comfort-stretch-jeans" },
      { label: "Il Granchio Ocean Stretch Jeans", href: "/products/il-granchio-ocean-stretch-italian-slim-jeans" },
      { label: "Aéropostale Charcoal Vintage Wash Jeans", href: "/products/aeropostale-charcoal-vintage-wash-stretch-denim" },
    ],
    "Winter Wear": [
      { label: "All Winter Wear", href: "/categories/winter-wear" },
      { label: "Lincoln UK Quarter-Zip Textured Knit Sweater", href: "/products/lincoln-uk-quarter-zip-textured-knit-sweater" },
    ],
    "Trousers & Chinos": [
      { label: "All Trousers & Chinos", href: "/categories/trousers-chinos" },
      { label: "Sea Barrier Premium Export Chino Pants", href: "/products/sea-barrier-premium-export-chino-pants-khaki" },
    ],
    "Joggers & Track Pants": [
      { label: "All Joggers & Track Pants", href: "/categories/joggers-trackpants" },
      { label: "Slazenger Athletic Comfort Track Pants", href: "/products/slazenger-athletic-comfort-track-pants-navy" },
      { label: "Slazenger Urban Cuffed Fleece Joggers", href: "/products/slazenger-urban-cuffed-fleece-joggers-grey" },
    ],
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center size-10 text-neutral-800 hover:bg-neutral-100 rounded-full transition-all duration-200"
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6" strokeWidth={1.75} />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed top-0 left-0 w-screen h-[100dvh] bg-white z-[9999] flex flex-col overflow-y-auto animate-slide-up">
            {/* Header bar within overlay */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-neutral-200 bg-white">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-neutral-900 border border-[#c9a96e]">
                  <Image src="/assets/logo.jpg" alt={BUSINESS.NAME} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold tracking-tight uppercase">
                    {BUSINESS.NAME}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-[#c9a96e]">
                    Better Quality, Better Style!
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center size-10 text-neutral-700 hover:bg-neutral-100 rounded-full transition-all duration-200"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Quick Action Banner */}
            <div className="p-4 bg-[#faf7f2] border-b border-[#e8e2d5] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                <Sparkles className="h-4 w-4 text-[#c9a96e]" />
                <span>অরিজিনাল এক্সপোর্ট ক্লোথিং কালেকশন ২০২৬</span>
              </div>
              <a
                href={BUSINESS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 bg-[#c9a96e] text-black rounded-full text-xs font-bold shadow-xs hover:bg-[#b89555] transition-colors"
              >
                <PhoneCall className="h-3 w-3" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Nav list */}
            <div className="p-6 flex-1 space-y-4">
              <div className="space-y-1">
                {links.map((link) => {
                  const hasSub = link.label in categoriesWithSubs;
                  const isAccordionOpen = activeAccordion === link.label;

                  if (hasSub) {
                    return (
                      <div key={link.href} className="border-b border-neutral-100 pb-2">
                        <button
                          onClick={() => toggleAccordion(link.label)}
                          className="flex items-center justify-between w-full py-3 text-base font-bold uppercase tracking-wider text-neutral-900 text-left"
                        >
                          <span>{link.label}</span>
                          {isAccordionOpen ? (
                            <ChevronUp className="h-4 w-4 text-neutral-500" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-neutral-500" />
                          )}
                        </button>
                        {isAccordionOpen && (
                          <div className="pl-4 pb-2 space-y-2 border-l-2 border-[#c9a96e] mt-1">
                            {categoriesWithSubs[link.label]?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="block py-1.5 text-sm text-neutral-600 hover:text-black font-medium"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-bold uppercase tracking-wider text-neutral-900 hover:text-[#c9a96e] border-b border-neutral-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Policy Quick Links */}
              <div className="pt-4 space-y-2 text-sm text-neutral-600">
                <Link
                  href="/delivery-info"
                  onClick={() => setOpen(false)}
                  className="block hover:text-black"
                >
                  🚚 ডেলিভারি চার্জ (ঢাকা ৮০৳, সারা বাংলাদেশ ১৫০৳)
                </Link>
                <Link
                  href="/refund-policy"
                  onClick={() => setOpen(false)}
                  className="block hover:text-black"
                >
                  🔄 ৭ দিনের সহজ সাইজ এক্সচেঞ্জ সুবিধা
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block hover:text-black"
                >
                  📍 লালবাগ হাব, ঢাকা-১২১১ (সরাসরি যোগাযোগ)
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setOpen(false)}
                  className="block hover:text-black"
                >
                  ❓ সাধারণ জিজ্ঞাসা (FAQ)
                </Link>
              </div>
            </div>

            {/* Footer inside mobile nav */}
            <div className="p-6 border-t border-neutral-200 bg-neutral-50 space-y-4">
              <div className="flex items-center gap-3 text-xs text-neutral-700">
                <MapPin className="h-4 w-4 text-[#c9a96e] shrink-0" />
                <span>{BUSINESS.ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/account"
                  onClick={() => setOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-neutral-300 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-800 hover:border-black transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>My Account</span>
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-neutral-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Cart ({cartCount})</span>
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
