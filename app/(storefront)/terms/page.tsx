import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Truck, Store, PhoneCall, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions — Lihaaz by Minhaaz | সাধারণ শর্তাবলী",
  description: "Lihaaz by Minhaaz - অর্ডার, ডেলিভারি, পার্সেল চেক ও সেবা সংক্রান্ত নিয়মাবলী এবং শর্তসমূহ।",
};

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-[#faf8f4] border-b border-[#c9a96e]/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a96e]/15 border border-[#c9a96e]/30 text-[#8e6e30] text-[11px] uppercase tracking-[0.25em] font-bold">
            <ShieldCheck className="h-3.5 w-3.5 text-[#c9a96e]" />
            Policy &amp; Guidelines
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Terms &amp; Conditions (শর্তাবলী)
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            Lihaaz by Minhaaz — গুলশান-২, ঢাকা। কেনাকাটা ও গ্রাহক সেবার সাধারণ নীতিমালা।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <Store className="h-5 w-5 text-[#c9a96e]" />
              <h2>১. ব্র্যান্ড পরিচিতি ও অর্ডার প্রক্রিয়া</h2>
            </div>
            <p>
              <strong>Lihaaz by Minhaaz (লিহাজ বাই মিনহাজ)</strong> হলো রাজকীয় পাঞ্জাবি ও ডিজাইনার এথনিক পোশাকের গুলশান-২ ভিত্তিক ফ্যাশন স্টুডিও। আমাদের স্টুডিও অবস্থিত House-5, Road 54/A, Gulshan-2, Dhaka-1212 তে। আমরা অনলাইন ও স্টুডিও ওয়াক-ইন উভয় মাধ্যমেই অর্ডার গ্রহণ করি।
            </p>
            <p>
              অর্ডার করার সময় গ্রাহককে তার সঠিক নাম, সচল মোবাইল নম্বর এবং নির্ভুল ডেলিভারি ঠিকানা প্রদান করতে হবে।
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <Truck className="h-5 w-5 text-[#c9a96e]" />
              <h2>২. ডেলিভারি, পেমেন্ট ও পার্সেল চেক নীতিমালা</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>ক্যাশ অন ডেলিভারি (COD):</strong> ঢাকা শহরসহ সারাদেশে সম্পূর্ণ ক্যাশ অন ডেলিভারি সুবিধা কার্যকর রয়েছে।</li>
              <li><strong>ডেলিভারি চার্জ:</strong> ঢাকা সিটির ভেতরে ৳১০০ (২৪-৪৮ ঘণ্টা) এবং ঢাকার বাইরে ৳২০০ (৪৮-৭২ ঘণ্টা)।</li>
              <li><strong>পার্সেল চেক প্রিভিলেজ:</strong> হোম ডেলিভারির সময় ডেলিভারিম্যানের সামনে পার্সেলটি খুলে কাপড়ের কোয়ালিটি, সেলাই ও সাইজ মিলিয়ে নিশ্চিত হয়ে মূল্য পরিশোধের সুযোগ পাবেন।</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <Sparkles className="h-5 w-5 text-[#c9a96e]" />
              <h2>৩. সাইজ পরিবর্তন ও রিটার্ন সুবিধা</h2>
            </div>
            <p>
              পাঞ্জাবি হাতে পাওয়ার পর যদি সাইজে কোনো সমস্যা হয়, পার্সেল প্রাপ্তির ৭ দিনের মধ্যে আমাদের হটলাইনে অবহিত করে সাইজ পরিবর্তনের সুবিধা গ্রহণ করা যাবে। পণ্যটি অব্যবহৃত এবং মূল ট্যাগ অক্ষত থাকতে হবে।
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base font-heading">
              <PhoneCall className="h-5 w-5 text-[#c9a96e]" />
              <h2>৪. কাস্টমার কেয়ার ও সাপোর্ট চ্যানেল</h2>
            </div>
            <p>
              যেকোনো জিজ্ঞাসা, অর্ডার ট্র্যাকিং বা বিশেষ পরামর্শের জন্য আমাদের সাথে যোগাযোগ করতে পারেন:
            </p>
            <div className="pt-1 text-foreground font-medium space-y-1">
              <p>• ফোন ও WhatsApp: <strong>{BUSINESS.HOTLINE}</strong></p>
              <p>• স্টুডিও: {BUSINESS.ADDRESS}</p>
              <p>• ফেসবুক পেজ: <a href={BUSINESS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-[#8e6e30] underline">fb.com/lihaazbyminhaaz</a></p>
            </div>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c9a96e] hover:text-black transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
