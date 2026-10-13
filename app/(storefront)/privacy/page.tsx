import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Shield, Eye, Database, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — Gent Apparel BD | গোপনীয়তা নীতিমালা",
  description: "Gent Apparel BD - গ্রাহকের ব্যক্তিগত তথ্য সুরক্ষা ও গোপনীয়তা নীতিমালা। Lalbagh, Dhaka-1211, Bangladesh।",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-[#faf8f4] dark:bg-neutral-950 border-b border-[#c8a265]/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8a265]/15 border border-[#c8a265]/30 text-[#8e6e30] dark:text-[#c8a265] text-[11px] uppercase tracking-[0.25em] font-bold">
            <Shield className="h-3.5 w-3.5 text-[#c8a265]" />
            Data Protection &amp; Security
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Privacy Policy (গোপনীয়তা নীতিমালা)
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            Gent Apparel BD সম্মানিত গ্রাহকদের ব্যক্তিগত তথ্যের সর্বোচ্চ সুরক্ষা ও গোপনীয়তা বজায় রাখতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed font-sans">
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <Database className="h-5 w-5 text-[#c8a265]" />
              <h2>১. আমরা কী কী তথ্য সংগ্রহ করি?</h2>
            </div>
            <p>
              অর্ডার প্রসেসিং, সাইজিং ও নির্ভরযোগ্য হোম ডেলিভারি নিশ্চিত করতে আমরা শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ করি:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>গ্রাহকের পূর্ণ নাম</li>
              <li>সক্রিয় মোবাইল ফোন নম্বর (ডেলিভারি সমন্বয় ও এসএমএস আপডেটের জন্য)</li>
              <li>ডেলিভারির সম্পূর্ণ ঠিকানা (বাসা/রোড/এলাকা/জেলা)</li>
              <li>পছন্দের পণ্যের সাইজ (ওয়েস্ট ২৮-৩৮ অথবা M-XXL) ও ডেলিভারি নোটস</li>
            </ul>
          </section>

          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <Shield className="h-5 w-5 text-[#c8a265]" />
              <h2>২. তথ্যের ব্যবহার ও নিরাপত্তা</h2>
            </div>
            <p>
              আপনার প্রদত্ত তথ্য সর্বোচ্চ সতর্কতায় সুরক্ষিত রাখা হয় এবং কেবল নিম্নলিখিত ক্ষেত্রে ব্যবহৃত হয়:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>আপনার অর্ডারের পণ্য নির্দিষ্ট ঠিকানায় পৌঁছে দেওয়া</li>
              <li>অর্ডার ট্র্যাকিং ও ডেলিভারি স্ট্যাটাস নিশ্চিতকরণ</li>
              <li>আফটার-সেলস সাইজ এক্সচেঞ্জ ও কাস্টমার সাপোর্ট প্রদান</li>
            </ul>
            <p className="font-semibold text-foreground pt-1">
              * আমরা কোনো অবস্থাতেই গ্রাহকের ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রয় বা অননুমোদিতভাবে হস্তান্তর করি না।
            </p>
          </section>

          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <Lock className="h-5 w-5 text-[#c8a265]" />
              <h2>৩. পেমেন্ট তথ্যের সুরক্ষা</h2>
            </div>
            <p>
              আমাদের সিংহভাগ অর্ডারই ক্যাশ অন ডেলিভারি (Cash on Delivery) ভিত্তিক, তাই অনলাইন ট্রানজেকশনে আপনার কোনো ব্যাংক বা কার্ডের তথ্য সংরক্ষণ করা হয় না। গ্রাহক পণ্য হাতে পেয়ে দেখে মূল্য পরিশোধের সুবিধা পান।
            </p>
          </section>

          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <Eye className="h-5 w-5 text-[#c8a265]" />
              <h2>৪. তথ্য হালনাগাদ ও সহায়তা</h2>
            </div>
            <p>
              আপনার অ্যাকাউন্ট বা অর্ডারের তথ্যে কোনো পরিবর্তন আনতে চাইলে যেকোনো সময় আমাদের হটলাইনে যোগাযোগ করতে পারেন:
            </p>
            <p className="text-foreground font-medium pt-1">
              হটলাইন: {BUSINESS.HOTLINE} | ইমেইল: {BUSINESS.EMAIL} | ঠিকানা: {BUSINESS.ADDRESS}
            </p>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c8a265] hover:text-black transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
