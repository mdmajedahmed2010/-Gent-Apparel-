"use client";

/**
 * LIHAAZ BY MINHAAZ — Trust Badges
 * Royal Heritage Menswear Trust Strip
 * Studio: House-5, Road 54/A, Gulshan-2, Dhaka
 */

import { useEffect, useRef, useState } from "react";
import { Truck, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const badges = [
  {
    icon: Truck,
    title: "সারাদেশে হোম ডেলিভারি",
    description: "ঢাকা সিটিতে ৳১০০ | ঢাকার বাইরে ৳২০০",
  },
  {
    icon: CreditCard,
    title: "ক্যাশ অন ডেলিভারি (COD)",
    description: "পার্সেল খুলে কোয়ালিটি দেখে মূল্য পরিশোধের সুবিধা",
  },
  {
    icon: ShieldCheck,
    title: "গুলশান-২ ডিজাইন স্টুডিও",
    description: "House-5, Road 54/A, Gulshan-2, Dhaka",
  },
  {
    icon: Sparkles,
    title: "হ্যান্ডক্রাফটেড রাজকীয় নকশা",
    description: "ঐতিহ্যবাহী জারদৌসি এমব্রয়ডারি ও রয়্যাল সিল্ক",
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
    <section ref={sectionRef} className="bg-[#faf8f4] border-y border-[#c9a96e]/25 py-12 md:py-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <div
              key={badge.title}
              className={`group flex flex-col items-center text-center gap-3.5 p-5 md:p-6 rounded-sm bg-white border border-[#eae5dc] shadow-xs transition-all duration-500 hover:shadow-md hover:border-[#c9a96e]/70 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-[0.98]"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 85}ms` : "0ms",
              }}
            >
              {/* Circular Gold Icon Wrapper */}
              <div className="flex items-center justify-center size-13 md:size-14 rounded-full bg-[#f6f2e8] text-[#c9a96e] transition-all duration-500 group-hover:bg-[#0f0e0d] group-hover:text-[#e8ce9e] shadow-xs scale-100 group-hover:scale-110">
                <badge.icon className="h-6 w-6 stroke-[1.5]" />
              </div>

              <div className="space-y-1">
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] text-[#0f0e0d] font-sans">
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
