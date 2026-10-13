import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, CheckCircle2, AlertCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Return & Refund Policy — Gent Apparel BD | রিটার্ন ও এক্সচেঞ্জ নীতিমালা",
  description: "Gent Apparel BD - ৭ দিনের সহজ সাইজ পরিবর্তন ও রিটার্ন নীতিমালা। পার্সেল দেখে ক্যাশ অন ডেলিভারি এবং ঝামেলাহীন কাস্টমার সেবা।",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-[#faf8f4] dark:bg-neutral-950 border-b border-[#c8a265]/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8a265]/15 border border-[#c8a265]/30 text-[#8e6e30] dark:text-[#c8a265] text-[11px] uppercase tracking-[0.25em] font-bold">
            <RefreshCw className="h-3.5 w-3.5 text-[#c8a265]" />
            Customer Satisfaction Guarantee
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Return &amp; Exchange Policy
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            সাইজ পরিবর্তন ও রিটার্ন সংক্রান্ত স্বচ্ছ ও সম্মানজনক নীতিমালা
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          {/* Highlight Card */}
          <div className="p-6 bg-[#faf7f2] dark:bg-neutral-900 border-l-4 border-[#c8a265] rounded-r space-y-2">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2 font-heading">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ডেলিভারিম্যানের উপস্থিতিতে পার্সেল চেক করার ১০০% নিশ্চয়তা
            </h2>
            <p className="text-muted-foreground">
              হোম ডেলিভারির সময় ডেলিভারিম্যানের সামনে পার্সেলটি খুলে দেখে নিন। কাপড়ের মান, সেলাইয়ের ফিনিশিং, ওয়াশ এবং সাইজে কোনো অমিল থাকলে ডেলিভারিম্যানের কাছেই অন-স্পট রিটার্ন করতে পারবেন কোনো অগ্রিম চার্জ ছাড়াই।
            </p>
          </div>

          {/* Section 1: 7-Day Exchange */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <RefreshCw className="h-5 w-5 text-[#c8a265]" />
              <h2>১. ৭ দিনের সাইজ এক্সচেঞ্জ সুবিধা (Size Exchange)</h2>
            </div>
            <p>
              প্যান্ট বা সোয়েটার হাতে পাওয়ার পর ট্রায়াল দিয়ে যদি সাইজে (Waist / Size) কোনো সমস্যা হয়, তবে পার্সেল পৌঁছানোর <strong>৭ দিনের মধ্যে</strong> আপনি সাইজ পরিবর্তনের আবেদন করতে পারবেন।
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>পোশাকটি অব্যবহৃত, অবিকৃত এবং ফ্রেশ কন্ডিশনে থাকতে হবে।</li>
              <li>ব্র্যান্ডের মূল ট্যাগ ও প্যাকেজিং অক্ষত থাকতে হবে।</li>
              <li>সাইজ পরিবর্তনের ক্ষেত্রে সাধারণ কুরিয়ার ডেলিভারি চার্জ প্রযোজ্য হবে।</li>
            </ul>
          </section>

          {/* Section 2: Defective items */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <h2>২. উৎপাদনগত ত্রুটির ক্ষেত্রে সম্পূর্ণ ফ্রি রিপ্লেসমেন্ট</h2>
            </div>
            <p>
              যদি কোনো কারণে ত্রুটিপূর্ণ বা ভুল প্রোডাক্ট আপনার কাছে পৌঁছে যায়, তবে কোনো প্রকার অতিরিক্ত চার্জ ছাড়াই আমরা নিজস্ব খরচে সঠিক প্রোডাক্টটি আপনার ঠিকানায় পৌঁছে দেব।
            </p>
          </section>

          {/* Section 3: Contact */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <PhoneCall className="h-5 w-5 text-[#c8a265]" />
              <h2>৩. রিটার্ন বা সাইজ এক্সচেঞ্জে যোগাযোগ মাধ্যম</h2>
            </div>
            <p>
              এক্সচেঞ্জ রিকোয়েস্ট করতে আপনার অর্ডার নম্বর (যেমন: GA-XXXX) ও কাঙ্ক্ষিত সাইজের বিবরণ সহ আমাদের সাথে যোগাযোগ করুন:
            </p>
            <div className="text-foreground font-semibold pt-1">
              <p>• ফোন / WhatsApp: <strong>{BUSINESS.HOTLINE}</strong></p>
              <p>• ফেসবুক মেসেঞ্জার: <a href={BUSINESS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-[#8e6e30] dark:text-[#c8a265] underline">fb.com/gentapparelbd</a></p>
            </div>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center h-11 px-8 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-[#c8a265] hover:text-black transition-all rounded-sm shadow-sm"
            >
              সব প্রোডাক্ট ব্রাউজ করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
