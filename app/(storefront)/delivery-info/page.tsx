import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Clock, ShieldCheck, MapPin, CheckCircle, Package, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Delivery Information — Gent Apparel BD | ডেলিভারি ও শিপিং তথ্য",
  description: "Gent Apparel BD - ডেলিভারি ও শিপিং সংক্রান্ত সকল তথ্যাবলী। ঢাকা সিটিতে ৮০৳ ও ঢাকার বাইরে ১৫০৳। পার্সেল দেখে ক্যাশ অন ডেলিভারি।",
};

export default function DeliveryInfoPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-[#faf8f4] dark:bg-neutral-950 border-b border-[#c8a265]/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8a265]/15 border border-[#c8a265]/30 text-[#8e6e30] dark:text-[#c8a265] text-[11px] uppercase tracking-[0.25em] font-bold">
            <Truck className="h-3.5 w-3.5 text-[#c8a265]" />
            Nationwide Reliable Logistics
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            ডেলিভারি তথ্য (Delivery Information)
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            সারা বাংলাদেশে দ্রুত, বিশ্বস্ত এবং ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করার সুবিধাসহ হোম ডেলিভারি সেবা
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          {/* Rate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#c8a265]">ঢাকা সিটির ভেতর</span>
                <span className="text-2xl font-bold text-foreground">৳৮০</span>
              </div>
              <h3 className="text-base font-bold text-foreground">হোম ডেলিভারি (২৪ - ৪৮ ঘণ্টা)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                অর্ডার নিশ্চিতকরণের পর <strong>২৪ থেকে ৪৮ ঘণ্টার মধ্যে</strong> আপনার ঠিকানায় প্রিমিয়াম এক্সপোর্ট পোশাক পৌঁছে দেওয়া হবে।
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle className="h-4 w-4" /> ক্যাশ অন ডেলিভারি ও পার্সেল চেক সুবিধা
              </div>
            </div>

            <div className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#c8a265]">ঢাকার বাইরে (সারাদেশ)</span>
                <span className="text-2xl font-bold text-foreground">৳১৫০</span>
              </div>
              <h3 className="text-base font-bold text-foreground">জেলা ও থানা পর্যায়ে (২ - ৩ দিন)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                দ্রুতগতির নির্ভরযোগ্য কুরিয়ারের মাধ্যমে <strong>৪৮ থেকে ৭২ ঘণ্টার মধ্যে</strong> জেলা ও থানা পর্যায়ের ঠিকানায় সরাসরি হোম ডেলিভারি।
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle className="h-4 w-4" /> ক্যাশ অন ডেলিভারি প্রযোজ্য
              </div>
            </div>
          </div>

          {/* Key Delivery Features */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-4">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2 font-heading">
              <ShieldCheck className="h-5 w-5 text-[#c8a265]" />
              আমাদের ডেলিভারি প্রতিশ্রুতির বৈশিষ্ট্য
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <Package className="h-4 w-4 text-[#c8a265] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-xs uppercase">ডেলিভারির সময় পার্সেল চেক</p>
                  <p className="text-xs text-muted-foreground">ডেলিভারিম্যানের সামনে পার্সেল খুলে ফেব্রিক, সুইং, ওয়াশ ও সাইজ চেক করে শতভাগ সন্তুষ্ট হয়ে মূল্য পরিশোধ করুন।</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#c8a265] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-xs uppercase">এসএমএস ও ট্র্যাকিং আপডেট</p>
                  <p className="text-xs text-muted-foreground">অর্ডার প্রেরণের সাথে সাথেই এসএমএস ও হোয়াটসঅ্যাপে কুরিয়ার ট্র্যাকিং কোড সরবরাহ করা হয়।</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hub Location */}
          <section className="p-6 rounded-sm bg-[#faf8f4] dark:bg-neutral-900 border border-[#c8a265]/30 space-y-3">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2 font-heading">
              <MapPin className="h-5 w-5 text-[#c8a265]" />
              আমাদের মূল হাব ও ওয়্যারহাউজ
            </h2>
            <p>
              সকল পণ্য সরাসরি আমাদের ঢাকার নিজস্ব হাব থেকে কোয়ালিটি চেকিং ও স্যানিটাইজড প্যাকেজিং শেষে সরবরাহ করা হয়:
            </p>
            <div className="text-xs text-muted-foreground font-medium space-y-1">
              <p>• <strong>ঠিকানা:</strong> {BUSINESS.ADDRESS}</p>
              <p>• <strong>সময়সূচী:</strong> প্রতিদিন সকাল ১০:০০টা থেকে রাত ১০:০০টা পর্যন্ত</p>
              <p>• <strong>হটলাইন:</strong> {BUSINESS.HOTLINE} (Call &amp; WhatsApp)</p>
            </div>
          </section>

          {/* Need help banner */}
          <div className="pt-4 text-center">
            <p className="text-xs text-muted-foreground">
              ডেলিভারি সংক্রান্ত জরুরি তথ্যে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করুন:{" "}
              <a href={BUSINESS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-[#8e6e30] dark:text-[#c8a265] font-bold hover:underline">
                {BUSINESS.HOTLINE}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
