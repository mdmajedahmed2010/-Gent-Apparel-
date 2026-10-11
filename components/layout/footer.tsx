"use client";

/**
 * LIHAAZ BY MINHAAZ — Footer Component
 * Royal Heritage Designer Menswear
 * Studio: House-5, Road 54/A, Gulshan-2, Dhaka-1212
 * Hotline / WhatsApp: +880 1755-627874
 */

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, MessageCircle, Clock, ShieldCheck, Truck, Sparkles, RefreshCw } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const shopLinks = [
  { href: "/categories/royal-heritage", label: "Royal Heritage & Wedding Edition" },
  { href: "/categories/festive-eid", label: "Festive Eid Collection 2026" },
  { href: "/categories/classic-cotton", label: "Classic Signature Cotton" },
  { href: "/categories/evening-black", label: "Evening & Obsidian Black" },
  { href: "/categories/luxury-silk-jacquard", label: "Luxury Raw Silk & Jacquard" },
  { href: "/shop", label: "Browse All Panjabis" },
];

const customerLinks = [
  { href: "/track-order", label: "Track Your Order" },
  { href: "/delivery-info", label: "Delivery Information (ঢাকা ১০০৳, বাইরে ২০০৳)" },
  { href: "/refund-policy", label: "Return & Size Exchange Policy (৭ দিন)" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/about", label: "About Lihaaz by Minhaaz" },
  { href: "/contact", label: "Gulshan-2 Studio & Contact" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  return (
    <footer className="bg-[#0c0b0a] text-white border-t border-[#23201d]">
      {/* 1. Royal VIP Newsletter Bar */}
      <div className="bg-[#141210] border-b border-[#2a2622] py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left max-w-lg">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a96e]/15 border border-[#c9a96e]/30 text-[#c9a96e] text-[10px] uppercase tracking-[0.25em] font-bold">
                <Sparkles className="h-3 w-3" />
                THE ROYAL CIRCLE
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-heading">
                লিহাজ রয়্যাল ক্লাবে যুক্ত হোন
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                নতুন রাজকীয় পাঞ্জাবি কালেকশন ড্রপ, প্রাইভেট প্রিভিউ ও ঈদ স্পেশাল অফার সর্বপ্রথম জানতে আপনার ইমেইল প্রদান করুন।
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("ধন্যবাদ! আপনি লিহাজ বাই মিনহাজ ভিআইপি প্রিভিউ তালিকায় যুক্ত হয়েছেন।");
              }}
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3 items-stretch max-w-md shrink-0"
            >
              <input
                type="email"
                required
                placeholder="আপনার ইমেইল অ্যাড্রেস লিখুন"
                className="h-12 px-5 bg-[#0a0a0a] border border-[#38332c] text-white text-xs placeholder:text-neutral-500 rounded-md focus:outline-none focus:border-[#c9a96e] w-full sm:w-72 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-7 bg-[#c9a96e] hover:bg-[#b5955a] text-black text-xs font-bold uppercase tracking-wider rounded-md transition-all active:scale-[0.98] cursor-pointer shadow-md"
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
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#c9a96e] bg-neutral-900 shadow-md">
                <Image src="/assets/logo.jpg" alt="Lihaaz by Minhaaz" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-white uppercase">
                  Lihaaz by Minhaaz
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#c9a96e] font-semibold">
                  Designer Menswear
                </span>
              </div>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              ঐতিহ্য, আভিজাত্য ও সূক্ষ্ম কারুকার্যের এক অনন্য সংমিশ্রণ। রয়্যাল হেরিটেজ পাঞ্জাবি, উৎসবের জমকালো জারদৌসি নকশা এবং প্রিমিয়াম কাপড়ের আধুনিক কাট—যা আপনাকে দেবে রাজকীয় অনুভূতি।
            </p>
            <div className="pt-2 space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#c9a96e] shrink-0 mt-0.5" />
                <span>House-5, Road 54/A, Gulshan-2, Dhaka-1212, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#c9a96e] shrink-0" />
                <a href={`tel:${BUSINESS.HOTLINE}`} className="hover:text-[#c9a96e] transition-colors">
                  {BUSINESS.HOTLINE}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href={BUSINESS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Concierge
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#c9a96e] shrink-0" />
                <a href={`mailto:${BUSINESS.EMAIL}`} className="hover:text-[#c9a96e] transition-colors">
                  {BUSINESS.EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-neutral-400 shrink-0" />
                <span>Studio: প্রতিদিন সকাল ১১:০০ - রাত ১০:০০</span>
              </div>
            </div>
          </div>

          {/* Luxury Collections */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a96e] border-b border-[#2a2622] pb-2">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a96e] border-b border-[#2a2622] pb-2">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a96e] border-b border-[#2a2622] pb-2">
              আমাদের নিশ্চয়তা
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-[#161412] border border-[#2a2622] rounded-lg flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#c9a96e] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">পার্সেল দেখে পেমেন্ট</span>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    হোম ডেলিভারির সময় পার্সেল খুলে গুণগত মান ও সাইজ যাচাই করে মূল্য পরিশোধ করার ১০০% নিশ্চয়তা।
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#161412] border border-[#2a2622] rounded-lg flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-[#c9a96e] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">৭ দিনের সহজ এক্সচেঞ্জ</span>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    সাইজে কোনো অমিল হলে ৭ দিনের মধ্যে দ্রুত ও ঝামেলাহীন সাইজ এক্সচেঞ্জের সুবিধা।
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#161412] border border-[#2a2622] rounded-lg flex items-start gap-3">
                <Truck className="h-5 w-5 text-[#c9a96e] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">দেশব্যাপী ক্যাশ অন ডেলিভারি</span>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    ঢাকার ভেতরে ১০০৳ (২৪-৪৮ ঘণ্টা) ও ঢাকার বাইরে ২০০৳ (৪৮-৭২ ঘণ্টা)।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-[#1e1c19] py-6 bg-[#080706]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 Lihaaz by Minhaaz (লিহাজ বাই মিনহাজ). All rights reserved. Crafted with Royal Heritage in Dhaka.</p>
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a96e] transition-colors"
            >
              Facebook: lihaazbyminhaaz
            </a>
            <a
              href={BUSINESS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp: 01755-627874
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
