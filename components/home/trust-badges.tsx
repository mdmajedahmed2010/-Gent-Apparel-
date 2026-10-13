"use client";

/**
 * GENT APPAREL BD — Trust Badges
 * Better Quality, Better Style!
 * Authentic Export Menswear Trust Strip
 * Lalbagh, Dhaka-1211 | Hotline / WhatsApp: 01560-018131
 */

import { useEffect, useRef, useState } from "react";
import { Truck, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const badges = [
  {
    icon: Truck,
    title: "সারাদেশে হোম ডেলিভারি",
    description: "ঢাকা সিটিতে ৳৮০ | ঢাকার বাইরে ৳১৫০",
  },
  {
    icon: CreditCard,
    title: "ক্যাশ অন ডেলিভারি (COD)",
    description: "পার্সেল খুলে কোয়ালিটি ও সাইজ দেখে পেমেন্ট",
  },
  {
    icon: ShieldCheck,
    title: "১০০% অথেনটিক এক্সপোর্ট",
    description: "আসল ব্র্যান্ড ট্যাগ, প্রিমিয়াম ফেব্রিক ও স্ট্রেচ ফ্লেক্স",
  },
  {
    icon: Sparkles,
    title: "লালবাগ হাব ও দ্রুত সাপোর্ট",
    description: "ঢাকা-১২১১ • WhatsApp: 01560-018131",
  },
];

export function TrustBadges() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#faf8f4] border-y border-[#c8a265]/25 py-12 md:py-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <div
              key={badge.title}
              className={`group flex flex-col items-center text-center gap-3.5 p-5 md:p-6 rounded-sm bg-white border border-[#eae5dc] shadow-xs transition-all duration-500 hover:shadow-md hover:border-[#c8a265]/70 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-[0.98]"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 85}ms` : "0ms",
              }}
            >
              {/* Circular Gold Icon Wrapper */}
              <div className="flex items-center justify-center size-13 md:size-14 rounded-full bg-[#f6f2e8] text-[#c8a265] transition-all duration-500 group-hover:bg-[#0a0a0a] group-hover:text-[#e8ce9e] shadow-xs scale-100 group-hover:scale-110">
                <badge.icon className="h-6 w-6 stroke-[1.5]" />
              </div>

              <div className="space-y-1">
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] text-[#0a0a0a] font-sans">
                  {badge.title}
                </p>
                <p className="text-[11px] md:text-xs text-neutral-500 leading-relaxed font-sans font-medium">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
