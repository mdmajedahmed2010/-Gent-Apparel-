import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Truck, Store, PhoneCall, Crown, HeartHandshake } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Lihaaz by Minhaaz | রাজকীয় ঐতিহ্য ও ডিজাইনার পাঞ্জাবি",
  description:
    "Lihaaz by Minhaaz (লিহাজ বাই মিনহাজ) - ঢাকার গুলশান-২ এ অবস্থিত রাজকীয় ডিজাইনার পাঞ্জাবি ও এথনিক মেয়ার স্টুডিও। ঐতিহ্যবাহী জারদৌসি কাজ ও প্রিমিয়াম সিল্কের আধুনিক প্রকাশ।",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Section — Immersive Royal Editorial */}
      <section className="relative py-16 md:py-24 bg-[#faf8f4] border-b border-[#c9a96e]/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a96e]/15 border border-[#c9a96e]/30 text-[#8e6e30] text-[11px] uppercase tracking-[0.25em] font-bold">
              <Crown className="h-3.5 w-3.5 text-[#c9a96e]" />
              আমাদের ঐতিহ্য • The House of Lihaaz
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold font-heading tracking-tight leading-tight text-foreground">
              LIHAAZ BY MINHAAZ <br />
              <span className="italic font-normal text-[#c9a96e]">Crafting Royal Heritage</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto pt-2 font-sans">
              ঐতিহ্য, আভিজাত্য ও সূক্ষ্ম কারুশিল্পের সংমিশ্রণে পুরুষদের রাজকীয় এথনিক পোশাকের গুলশান-২ ডিজাইন স্টুডিও।
            </p>
          </div>
        </div>
      </section>

      {/* 2. Brand Story split grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Asymmetrical Editorial Image Panel (5 cols) */}
            <div className="lg:col-span-5 reveal">
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-[#c9a96e]/40 shadow-md group">
                <Image
                  src="/assets/banner.jpg"
                  alt="Lihaaz by Minhaaz Royal Heritage Collection at Curzon Hall"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-300" />
              </div>
            </div>

            {/* Right Column: Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 reveal [transition-delay:200ms]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-[#c9a96e]" />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] font-bold">
                    BRAND PHILOSOPHY & VISION
                  </p>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold font-heading tracking-tight text-foreground leading-tight">
                  মোগল রাজকীয়তা ও আধুনিক প্যাটার্নের মেলবন্ধন
                </h2>
                <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed pt-1">
                  <strong>Lihaaz by Minhaaz (লিহাজ বাই মিনহাজ)</strong> শুধুমাত্র পোশাক তৈরি করে না, বরং প্রতিটি পোশাকে তুলে ধরে বাংলার সমৃদ্ধ ঐতিহ্য ও রাজকীয় গাম্ভীর্য।
                </p>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                ঐতিহাসিক কার্জন হলের লাল ইটের ক্ল্যাসিক আর্কিটেকচার থেকে অনুপ্রাণিত আমাদের সিগনেচার কালেকশনগুলো—যেমন শ্যাম্পেন গোল্ড, টেরাকোটা রাস্ট ও মিডনাইট অবসিডিয়ান ব্ল্যাক—বিশেষভাবে তৈরি করা হয়েছে বিবাহ, রিসেপশন এবং ঈদের মতো বিশেষ আনন্দঘন মুহূর্তের জন্য। দক্ষ কারিগরদের নিখুঁত হাতে বোনা জারদৌসি সুতোর কাজ এবং মেটালিক বাটন ফিনিশিং প্রতিটি পাঞ্জাবিকে করে তোলে অনন্য।
              </p>

              {/* Physical Studio Highlight Box */}
              <div className="p-5 md:p-6 bg-[#faf7f2] border border-[#e2d8c3] rounded-sm space-y-3">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-[#c9a96e]" />
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-foreground">
                    গুলশান-২ ডিজাইন স্টুডিও
                  </p>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground space-y-1">
                  <p>• <strong>ঠিকানা:</strong> {BUSINESS.ADDRESS}</p>
                  <p>• <strong>সময়সূচী:</strong> প্রতিদিন সকাল ১১:০০টা থেকে রাত ১০:০০টা পর্যন্ত</p>
                  <p className="text-foreground font-semibold pt-1 flex items-center gap-1.5">
                    <PhoneCall className="h-3.5 w-3.5 text-[#c9a96e]" /> হটলাইন ও WhatsApp: {BUSINESS.HOTLINE}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0f0e0d] hover:bg-[#c9a96e] text-white hover:text-black text-xs font-bold uppercase tracking-[0.16em] h-12 px-8 rounded-sm transition-all duration-300 shadow-sm"
                >
                  সব পাঞ্জাবি দেখুন
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground border border-border hover:border-foreground h-12 px-6 rounded-sm transition-all"
                >
                  স্টুডিও ভিজিট ও যোগাযোগ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Philosophy Blockquote Section */}
      <section className="relative py-20 md:py-24 bg-[#faf8f4] border-y border-[#c9a96e]/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08),transparent_70%)]" />
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 reveal">
            <span className="inline-flex items-center justify-center size-10 rounded-full bg-[#f4eee1] text-[#c9a96e]">
              <Sparkles className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <blockquote className="text-lg md:text-[24px] font-medium font-heading leading-relaxed italic text-foreground px-4 md:px-8">
              &ldquo;পোশাকের প্রতিটি সেলাইয়ে থাকে যত্ন, প্রতিটি মোটিফে থাকে ঐতিহ্য। লিহাজের পাঞ্জাবি গায়ে জড়ালে কেবল ফ্যাশন প্রকাশ পায় না, বরং ফুটে ওঠে একজন ব্যক্তিত্ববান পুরুষের আত্মবিশ্বাস।&rdquo;
            </blockquote>
            <div className="w-12 h-[1px] bg-[#c9a96e] mx-auto" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground">
                Minhaaz — Founder &amp; Creative Director
              </p>
              <p className="text-[10px] text-muted-foreground font-semibold mt-1">
                Lihaaz by Minhaaz Studio, Gulshan-2, Dhaka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Values Section — 3-Column Luxury Cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20 reveal">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] font-bold">
              OUR PILLARS OF EXCELLENCE
            </p>
            <h2 className="text-2xl md:text-[34px] font-bold font-heading tracking-tight text-foreground">
              কেন Lihaaz by Minhaaz অনন্য?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Artisanal Craftsmanship */}
            <div className="group border border-border/50 hover:border-[#c9a96e] p-8 rounded-sm bg-[#fafafa]/50 hover:bg-white transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-xs reveal">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-[#f7f3eb] text-[#c9a96e] group-hover:bg-[#0f0e0d] group-hover:text-[#c9a96e] transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  খাঁটি ফেব্রিক ও জারদৌসি কারুকাজ
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  প্রিমিয়াম র সিল্ক, ফাইন তুলা ও ওভেন জ্যাকর্ড ফেব্রিকে হাতে বোনা জারদৌসি সুতো ও মেটালিক বাটনের পরিশীলিত কারুকাজ যা দীর্ঘস্থায়ী।
                </p>
              </div>
            </div>

            {/* Card 2: Bespoke Tailoring */}
            <div className="group border border-border/50 hover:border-[#c9a96e] p-8 rounded-sm bg-[#fafafa]/50 hover:bg-white transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-xs reveal [transition-delay:150ms]">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-[#f7f3eb] text-[#c9a96e] group-hover:bg-[#0f0e0d] group-hover:text-[#c9a96e] transition-colors duration-300">
                  <HeartHandshake className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  নিখুঁত ফিটিং ও মাপ
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  ৩৮ থেকে ৪৬ পর্যন্ত পাঁচটি স্ট্যান্ডার্ড সাইজে পারফেক্ট বডি ড্রেপিং। সাইজে কোনো সমস্যা হলে ৭ দিনের মধ্যে নিশ্চিত সাইজ এক্সচেঞ্জ সুবিধা।
                </p>
              </div>
            </div>

            {/* Card 3: Inspect Before Pay */}
            <div className="group border border-border/50 hover:border-[#c9a96e] p-8 rounded-sm bg-[#fafafa]/50 hover:bg-white transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-xs reveal [transition-delay:300ms]">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-[#f7f3eb] text-[#c9a96e] group-hover:bg-[#0f0e0d] group-hover:text-[#c9a96e] transition-colors duration-300">
                  <Truck className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  পার্সেল দেখে পেমেন্ট (COD)
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  ঢাকার ভেতরে ১০০৳ (২৪-৪৮ ঘণ্টা) এবং বাইরে ২০০৳ (৪৮-৭২ ঘণ্টা)। ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করে নিশ্চিন্তে পেমেন্ট করার শতভাগ গ্যারান্টি।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
