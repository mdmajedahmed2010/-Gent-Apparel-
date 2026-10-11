import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, CheckCircle2, AlertCircle, PhoneCall, Store, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Return & Refund Policy — Lihaaz by Minhaaz | রিটার্ন ও এক্সচেঞ্জ নীতিমালা",
  description: "Lihaaz by Minhaaz - ৭ দিনের সহজ সাইজ পরিবর্তন ও রিটার্ন নীতিমালা। গুলশান-২ স্টুডিও ও অনলাইন গ্রাহকদের জন্য বিশ্বস্ত সেবা।",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-[#faf8f4] border-b border-[#c9a96e]/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a96e]/15 border border-[#c9a96e]/30 text-[#8e6e30] text-[11px] uppercase tracking-[0.25em] font-bold">
            <RefreshCw className="h-3.5 w-3.5 text-[#c9a96e]" />
            Customer Satisfaction Guarantee
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Return &amp; Exchange Policy
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            পাঞ্জাবি সাইজ পরিবর্তন ও রিটার্ন সংক্রান্ত স্বচ্ছ ও সম্মানজনক নীতিমালা
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          {/* Highlight Card */}
          <div className="p-6 bg-[#faf7f2] border-l-4 border-[#c9a96e] rounded-r space-y-2">
            <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2 font-heading">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ডেলিভারিম্যানের উপস্থিতিতে পার্সেল চেক করার ১০০% নিশ্চয়তা
            </h2>
            <p className="text-neutral-700">
              হোম ডেলিভারির সময় ডেলিভারিম্যানের সামনে পার্সেলটি খুলে দেখে নিন। কাপড়ের মান, সেলাইয়ের ফিনিশিং, জারদৌসি কাজের নিখুঁততা এবং রঙে কোনো বৈসাদৃশ্য থাকলে ডেলিভারিম্যানের কাছেই কোনো ঝামেলা ছাড়া রিটার্ন করতে পারবেন।
            </p>
          </div>

          {/* Section 1: 7-Day Exchange */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <RefreshCw className="h-5 w-5 text-[#c9a96e]" />
              <h2>১. ৭ দিনের সাইজ এক্সচেঞ্জ সুবিধা (Size Exchange)</h2>
            </div>
            <p>
              পাঞ্জাবি হাতে পাওয়ার পর ট্রায়াল দিয়ে যদি সাইজ (৩৮, ৪০, ৪২, ৪৪, ৪৬) ছোট বা বড় মনে হয়, তবে পার্সেল পৌঁছানোর <strong>৭ দিনের মধ্যে</strong> আপনি সাইজ পরিবর্তনের আবেদন করতে পারবেন।
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>পোশাকটি অব্যবহৃত, অক্ষত এবং ফ্রেশ অবস্থায় থাকতে হবে।</li>
              <li>ব্র্যান্ডের মূল ট্যাগ এবং কভার প্যাকেজিং সংযুক্ত থাকতে হবে।</li>
              <li>সাইজ পরিবর্তনের ক্ষেত্রে সাধারণ কুরিয়ার ডেলিভারি চার্জ প্রযোজ্য হবে।</li>
            </ul>
          </section>

          {/* Section 2: Defective items */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <h2>২. ম্যানুফ্যাকচারিং ত্রুটির ক্ষেত্রে সম্পূর্ণ ফ্রি রিপ্লেসমেন্ট</h2>
            </div>
            <p>
              যদি কোনো কারণে ত্রুটিপূর্ণ বা ভুল সাইজের পাঞ্জাবি পৌঁছে যায়, তবে কোনো প্রকার অতিরিক্ত ডেলিভারি চার্জ ছাড়াই আমরা নিজস্ব খরচে সঠিক পাঞ্জাবিটি আপনার কাছে পৌঁছে দেব।
            </p>
          </section>

          {/* Section 3: Studio exchange */}
          <section className="p-6 rounded-sm bg-[#faf8f4] border border-[#c9a96e]/30 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <Store className="h-5 w-5 text-[#c9a96e]" />
              <h2>৩. সরাসরি গুলশান-২ স্টুডিওতে এসে ট্রায়াল ও এক্সচেঞ্জ</h2>
            </div>
            <p>
              অনলাইনে অর্ডারকৃত পাঞ্জাবি আপনি চাইলে সরাসরি আমাদের গুলশান-২ স্টুডিওতে নিয়ে এসে ট্রায়াল দিয়ে অন্য সাইজ বা মডেলের সাথে সরাসরি এক্সচেঞ্জ করে নিতে পারেন:
            </p>
            <p className="text-foreground font-medium">
              {BUSINESS.ADDRESS} (প্রতিদিন সকাল ১১:০০টা - রাত ১০:০০টা)
            </p>
          </section>

          {/* Section 4: Contact */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <PhoneCall className="h-5 w-5 text-[#c9a96e]" />
              <h2>৪. রিটার্ন বা সাইজ এক্সচেঞ্জে যোগাযোগ মাধ্যম</h2>
            </div>
            <p>
              এক্সচেঞ্জ রিকোয়েস্ট করতে আপনার অর্ডার নম্বর (যেমন: LM-XXXX) ও কাঙ্ক্ষিত সাইজের বিবরণ সহ আমাদের সাথে যোগাযোগ করুন:
            </p>
            <div className="text-foreground font-semibold pt-1">
              <p>• ফোন / WhatsApp: <strong>{BUSINESS.HOTLINE}</strong></p>
              <p>• ফেসবুক মেসেঞ্জার: <a href={BUSINESS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-[#8e6e30] underline">fb.com/lihaazbyminhaaz</a></p>
            </div>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center h-11 px-8 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-[#c9a96e] hover:text-black transition-all rounded-sm shadow-sm"
            >
              Browse All Panjabis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
