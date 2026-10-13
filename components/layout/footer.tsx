"use client";

/**
 * GENT APPAREL BD — Footer Component
 * Better Quality, Better Style!
 * 100% Authentic Export-Quality Menswear, Premium Denim & Smart Casuals
 * Lalbagh, Dhaka-1211 | Hotline / WhatsApp: 01560-018131
 */

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, MessageCircle, Clock, ShieldCheck, Truck, Sparkles, RefreshCw } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const shopLinks = [
  { href: "/categories/denim-jeans", label: "Original Export Denim Jeans" },
  { href: "/categories/gabardine-chinos", label: "Sea Barrier Italian Chinos" },
  { href: "/categories/joggers-activewear", label: "Slazenger Activewear & Joggers" },
  { href: "/categories/sweaters-winter", label: "Lincoln UK Knitwear & Sweaters" },
  { href: "/collections/winter-is-back", label: "Winter Is Back 2026 Collection" },
  { href: "/shop", label: "Browse All Products" },
];

const customerLinks = [
  { href: "/track-order", label: "Track Your Order (অর্ডার ট্র্যাক)" },
  { href: "/delivery-info", label: "Delivery Information (ঢাকা ৮০৳, বাইরে ১৫০৳)" },
  { href: "/refund-policy", label: "Return & Size Exchange Policy (৭ দিন)" },
  { href: "/terms", label: "Terms & Conditions (শর্তাবলী)" },
  { href: "/privacy", label: "Privacy Policy (গোপনীয়তা নীতি)" },
  { href: "/faq", label: "Frequently Asked Questions (FAQ)" },
  { href: "/about", label: "About Gent Apparel BD" },
  { href: "/contact", label: "Lalbagh Hub & Customer Contact" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#222]">
      {/* 1. VIP Newsletter Bar */}
      <div className="bg-[#111111] border-b border-[#222] py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left max-w-lg">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8a265]/15 border border-[#c8a265]/30 text-[#c8a265] text-[10px] uppercase tracking-[0.25em] font-bold">
                <Sparkles className="h-3 w-3" />
                GENT APPAREL CLUB
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-heading">
                এক্সক্লুসিভ অফার ও ড্রপ আপডেট পান
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                নতুন এক্সপোর্ট ডেনিম ড্রপ, উইন্টার কালেকশন ও লিমিটেড অফার সবার আগে জানতে আপনার ইমেইল প্রদান করুন।
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("ধন্যবাদ! আপনি Gent Apparel BD প্রিভিউ তালিকায় যুক্ত হয়েছেন।");
              }}
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3 items-stretch max-w-md shrink-0"
            >
              <input
                type="email"
                required
                placeholder="আপনার ইমেইল অ্যাড্রেস লিখুন"
                className="h-12 px-5 bg-[#0a0a0a] border border-[#333] text-white text-xs placeholder:text-neutral-500 rounded-md focus:outline-none focus:border-[#c8a265] w-full sm:w-72 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-7 bg-[#c8a265] hover:bg-[#b59154] text-black text-xs font-bold uppercase tracking-wider rounded-md transition-all active:scale-[0.98] cursor-pointer shadow-md"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Columns */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Studio Location */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#c8a265] bg-black shadow-md">
                <Image src="/assets/logo.jpg" alt="Gent Apparel BD" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-white uppercase">
                  Gent Apparel BD
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#c8a265] font-semibold">
                  Better Quality, Better Style!
                </span>
              </div>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              বাংলাদেশের ফ্যাশন সচেতন পুরুষদের জন্য ১০০% অথেনটিক এক্সপোর্ট কোয়ালিটির পোশাক। লাকি ব্র্যান্ড, সি ব্যারিয়ার, ইল গ্রাঙ্কিও ও স্ল্যাজেঞ্জারের মতো বিশ্বমানের ব্র্যান্ডের আসল কালেকশন।
            </p>
            <div className="pt-2 space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#c8a265] shrink-0 mt-0.5" />
                <span>লালবাগ, ঢাকা-১২১১, বাংলাদেশ (Lalbagh, Dhaka-1211)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#c8a265] shrink-0" />
                <a href={`tel:${BUSINESS.HOTLINE}`} className="hover:text-[#c8a265] transition-colors">
                  {BUSINESS.HOTLINE}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href={BUSINESS.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Support (01560-018131)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#c8a265] shrink-0" />
                <a href={`mailto:${BUSINESS.EMAIL}`} className="hover:text-[#c8a265] transition-colors">
                  {BUSINESS.EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-neutral-400 shrink-0" />
                <span>প্রতিদিন সকাল ১০:০০ - রাত ১০:০০</span>
              </div>
            </div>
          </div>

          {/* Luxury Collections */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a265] border-b border-[#222] pb-2">
              কালেকশন সমূহ
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Experience & Policies */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a265] border-b border-[#222] pb-2">
              গ্রাহক সেবা ও পলিসি
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {customerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Guarantees */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a265] border-b border-[#222] pb-2">
              আমাদের নিশ্চয়তা
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-[#141414] border border-[#222] rounded-lg flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#c8a265] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">পার্সেল দেখে পেমেন্ট</span>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    হোম ডেলিভারির সময় পার্সেল খুলে গুণগত মান ও সাইজ দেখে মূল্য পরিশোধের ১০০% নিশ্চয়তা।
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#141414] border border-[#222] rounded-lg flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-[#c8a265] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">৭ দিনের সহজ এক্সচেঞ্জ</span>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    সাইজে কোনো সমস্যা হলে ৭ দিনের মধ্যে দ্রুত ও ঝামেলাহীন সাইজ এক্সচেঞ্জের সুবিধা।
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#141414] border border-[#222] rounded-lg flex items-start gap-3">
                <Truck className="h-5 w-5 text-[#c8a265] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">দেশব্যাপী ক্যাশ অন ডেলিভারি</span>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    ঢাকার ভেতরে ৮০৳ (২৪-৪৮ ঘণ্টা) ও ঢাকার বাইরে ১৫০৳ (৪৮-৭২ ঘণ্টা)।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-[#1a1a1a] py-6 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 Gent Apparel BD (জেন্ট অ্যাপারেল বিডি). All rights reserved. Better Quality, Better Style!</p>
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c8a265] transition-colors"
            >
              Facebook: gentapparelbd
            </a>
            <a
              href={BUSINESS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c8a265] transition-colors"
            >
              Instagram: @gent_apparel_bd
            </a>
            <a
              href={BUSINESS.WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp: 01560-018131
            </a>
            <Link href="/privacy" className="hover:text-neutral-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
