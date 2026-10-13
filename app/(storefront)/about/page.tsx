import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Truck, Store, PhoneCall, Award, HeartHandshake } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Gent Apparel BD | Better Quality, Better Style!",
  description:
    "Gent Apparel BD (জেন্ট অ্যাপারেল বিডি) - ঢাকার লালবাগে অবস্থিত প্রিমিয়াম ১০০% অরিজিনাল এক্সপোর্ট কোয়ালিটি মেনস ফ্যাশন ও ডেনিম হাব। Better Quality, Better Style!",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Section — Hero Editorial */}
      <section className="relative py-16 md:py-24 bg-[#faf8f4] dark:bg-neutral-950 border-b border-[#c8a265]/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a265]/15 border border-[#c8a265]/30 text-[#8e6e30] dark:text-[#c8a265] text-[11px] uppercase tracking-[0.25em] font-bold">
              <Award className="h-3.5 w-3.5 text-[#c8a265]" />
              আমাদের গল্প • The House of Gent Apparel BD
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold font-heading tracking-tight leading-tight text-foreground">
              GENT APPAREL BD <br />
              <span className="italic font-normal text-[#c8a265]">Better Quality, Better Style!</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto pt-2 font-sans">
              আন্তর্জাতিক মানের খাঁটি ১০০% এক্সপোর্ট সারপ্লাস ডেনিম, ক্যাজুয়াল চিনোস, স্পোর্টস ট্রাউজার্স ও লাক্সারি উইন্টারওয়্যারের সবচেয়ে বিশ্বস্ত নাম।
            </p>
          </div>
        </div>
      </section>

      {/* 2. Brand Story split grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Asymmetrical Editorial Image Panel */}
            <div className="lg:col-span-5 reveal">
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-[#c8a265]/40 shadow-md group">
                <Image
                  src="/assets/banner.jpg"
                  alt="Gent Apparel BD Authentic Export Surplus Collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-300" />
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 reveal [transition-delay:200ms]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-[#c8a265]" />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#c8a265] font-bold">
                    BRAND PHILOSOPHY &amp; VISION
                  </p>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold font-heading tracking-tight text-foreground leading-tight">
                  আন্তর্জাতিক এক্সপোর্ট স্ট্যান্ডার্ড ও সাশ্রয়ী মূল্যের নিখুঁত সমন্বয়
                </h2>
                <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed pt-1">
                  <strong>Gent Apparel BD (জেন্ট অ্যাপারেল বিডি)</strong> বিশ্বাস করে ফ্যাশন মানে কেবল বাহ্যিক পরিধান নয়; এটি একজন ব্যক্তিত্ববান পুরুষের আত্মবিশ্বাস ও স্বাচ্ছন্দ্যের প্রতিফলন।
                </p>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                আমরা সরাসরি ইউরোপ ও আমেরিকার শীর্ষ ব্র্যান্ডের জন্য প্রস্তুতকৃত এক্সপোর্ট সারপ্লাস সংগ্রহ করি—যার মধ্যে রয়েছে Lucky Brand (USA), Sea Barrier (Italy), Il Granchio (Milano), Aeropostale (New York), Slazenger (UK) এবং Lincoln UK। প্রতিটি প্রোডাক্টে ব্যবহৃত হয়েছে হেভি-ওয়েট কম্বড কটন, হাই-টেনাসিটি ডেনিম সুতা, অরিজিনাল ব্রাস মেটাল রিভেটস এবং প্রিমিয়াম ওয়াইকেকে (YKK) জিপার।
              </p>

              {/* Physical Hub Highlight Box */}
              <div className="p-5 md:p-6 bg-[#faf7f2] dark:bg-neutral-900 border border-[#e2d8c3] dark:border-neutral-800 rounded-sm space-y-3">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-[#c8a265]" />
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-foreground">
                    অফিসিয়াল ব্র্যান্ড হাব ও ওয়্যারহাউজ
                  </p>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground space-y-1">
                  <p>• <strong>ঠিকানা:</strong> {BUSINESS.ADDRESS}</p>
                  <p>• <strong>সময়সূচী:</strong> প্রতিদিন সকাল ১০:০০টা থেকে রাত ১০:০০টা পর্যন্ত</p>
                  <p className="text-foreground font-semibold pt-1 flex items-center gap-1.5">
                    <PhoneCall className="h-3.5 w-3.5 text-[#c8a265]" /> হটলাইন ও WhatsApp: {BUSINESS.HOTLINE}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0a0a0a] hover:bg-[#c8a265] text-white hover:text-black text-xs font-bold uppercase tracking-[0.16em] h-12 px-8 rounded-sm transition-all duration-300 shadow-sm"
                >
                  সব প্রোডাক্ট দেখুন
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground border border-border hover:border-foreground h-12 px-6 rounded-sm transition-all"
                >
                  যোগাযোগ ও কাস্টমার কেয়ার
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Philosophy Blockquote Section */}
      <section className="relative py-20 md:py-24 bg-[#faf8f4] dark:bg-neutral-950 border-y border-[#c8a265]/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,162,101,0.08),transparent_70%)]" />
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 reveal">
            <span className="inline-flex items-center justify-center size-10 rounded-full bg-[#f4eee1] dark:bg-neutral-900 text-[#c8a265]">
              <Sparkles className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <blockquote className="text-lg md:text-[24px] font-medium font-heading leading-relaxed italic text-foreground px-4 md:px-8">
              &ldquo;Better Quality, Better Style! আমরা কোনো সেকেন্ডারি বা কপি পোশাক অফার করি না। আন্তর্জাতিক শো-রুমের সমকক্ষ পোশাক গ্রাহকের দোরগোড়ায় ন্যায্যমূল্যে পৌঁছে দেওয়াই আমাদের লক্ষ্য।&rdquo;
            </blockquote>
            <div className="w-12 h-[1px] bg-[#c8a265] mx-auto" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground">
                GENT APPAREL BD — MANAGEMENT &amp; CURATION TEAM
              </p>
              <p className="text-[10px] text-muted-foreground font-semibold mt-1">
                Lalbagh, Dhaka-1211, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Values Section — 3-Column Quality Assurance Cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20 reveal">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c8a265] font-bold">
              OUR PILLARS OF TRUST
            </p>
            <h2 className="text-2xl md:text-[34px] font-bold font-heading tracking-tight text-foreground">
              কেন Gent Apparel BD সেরা পছন্দ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: 100% Export Surplus */}
            <div className="group border border-border/50 hover:border-[#c8a265] p-8 rounded-sm bg-[#fafafa]/50 dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-850 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-xs reveal">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-[#f7f3eb] dark:bg-neutral-800 text-[#c8a265] group-hover:bg-[#0a0a0a] group-hover:text-[#c8a265] transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  ১০০% খাঁটি এক্সপোর্ট কোয়ালিটি
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  লাকি ব্র্যান্ড, সি ব্যারিয়ার, স্ল্যাজেঞ্জার ও অ্যারোপোস্টেল-এর মতো শীর্ষ ব্র্যান্ডের অরিজিনাল ওয়্যারহাউজ স্টক। নিখুঁত ওয়াশিং, স্টিচিং ও অরিজিনাল ব্র্যান্ডিং।
                </p>
              </div>
            </div>

            {/* Card 2: 7 Days Exchange */}
            <div className="group border border-border/50 hover:border-[#c8a265] p-8 rounded-sm bg-[#fafafa]/50 dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-850 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-xs reveal [transition-delay:150ms]">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-[#f7f3eb] dark:bg-neutral-800 text-[#c8a265] group-hover:bg-[#0a0a0a] group-hover:text-[#c8a265] transition-colors duration-300">
                  <HeartHandshake className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  ৭ দিনের সহজ সাইজ পরিবর্তন
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  প্যান্ট বা সোয়েটারের সাইজে কোনো রকম অমিল হলে ৭ দিনের মধ্যে দ্রুত ও ঝামেলাহীন সাইজ এক্সচেঞ্জের সম্পূর্ণ নিশ্চয়তা।
                </p>
              </div>
            </div>

            {/* Card 3: Inspect Before Pay */}
            <div className="group border border-border/50 hover:border-[#c8a265] p-8 rounded-sm bg-[#fafafa]/50 dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-850 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-xs reveal [transition-delay:300ms]">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-[#f7f3eb] dark:bg-neutral-800 text-[#c8a265] group-hover:bg-[#0a0a0a] group-hover:text-[#c8a265] transition-colors duration-300">
                  <Truck className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  পার্সেল খুলে দেখে পেমেন্ট (COD)
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  ঢাকায় ৮০৳ (২৪-৪৮ ঘণ্টা) ও ঢাকার বাইরে ১৫০৳ (২-৩ দিন)। ডেলিভারিম্যানের সামনে পার্সেল খুলে কোয়ালিটি ও সাইজ মিলিয়ে নিশ্চিন্তে মূল্য পরিশোধ করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
