import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ChevronRight, PhoneCall, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) — Gent Apparel BD | সাধারণ জিজ্ঞাসা",
  description: "Gent Apparel BD - সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তরসমূহ। এক্সপোর্ট কোয়ালিটি ডেনিম জিন্স, সাইজ গাইড, ডেলিভারি চার্জ ও পার্সেল চেক সুবিধা।",
};

const faqs = [
  {
    q: "Gent Apparel BD-এর প্রোডাক্টের বিশেষত্ব ও এক্সপোর্ট কোয়ালিটি কেমন?",
    a: "আমাদের প্রতিটি প্রোডাক্ট আন্তর্জাতিক মানের ১০০% অরিজিনাল এক্সপোর্ট সারপ্লাস। আমরা Lucky Brand (USA), Sea Barrier (Italy), Il Granchio (Milano), Aeropostale (New York), Slazenger (UK) এবং Lincoln UK-এর মতো ব্র্যান্ডের স্টক সরাসরি কিউরেট করি। প্রতিটি জিন্স এবং ট্রাউজার্সে পাবেন হেভি কটন টুইল, নিখুঁত স্টিচিং, ব্রাস রিভেটস ও দীর্ঘস্থায়ী আরাম।",
  },
  {
    q: "ডেলিভারি চার্জ কত এবং কত দিনের মধ্যে পার্সেল পৌঁছাবে?",
    a: "ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳৮০ (২৪ থেকে ৪৮ ঘণ্টার মধ্যে সরাসরি হোম ডেলিভারি)। ঢাকার বাইরে জেলা ও থানা পর্যায়ে ডেলিভারি চার্জ মাত্র ৳১৫০ (৪৮ থেকে ৭২ ঘণ্টার মধ্যে প্রিমিয়াম কুরিয়ারে হোম ডেলিভারি)।",
  },
  {
    q: "ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা আছে কি?",
    a: "হ্যাঁ, সম্পূর্ণ বাংলাদেশজুড়ে আমাদের ক্যাশ অন ডেলিভারি সুবিধা রয়েছে। কোনো অগ্রিম পেমেন্ট ছাড়াই অর্ডার করতে পারেন এবং পার্সেল হাতে পেয়ে মূল্য পরিশোধ করতে পারবেন।",
  },
  {
    q: "আমি কি ডেলিভারিম্যানের সামনে পার্সেল চেক করে দেখতে পারব?",
    a: "অবশ্যই! আমাদের নীতিমালায় স্পষ্ট নির্দেশনা রয়েছে—ডেলিভারিম্যানের উপস্থিতিতে পার্সেল খুলে ফেব্রিক, সুইং, রঙ এবং সাইজ যাচাই করে শতভাগ সন্তুষ্ট হয়ে মূল্য পরিশোধ করতে পারবেন।",
  },
  {
    q: "সাইজ কীভাবে নির্বাচন করব এবং সাইজ না মিললে কি এক্সচেঞ্জ করা যাবে?",
    a: "জিন্স ও চিনোসের ক্ষেত্রে আপনার নিয়মিত কোমরের ইঞ্চি মাপ (যেমন: 30, 32, 34, 36, 38) অনুযায়ী অর্ডার করুন। ট্র্যাক প্যান্ট ও সোয়েটারের জন্য M, L, XL, XXL সাইজ উপলব্ধ। হাতে পাওয়ার পর সাইজে কোনো সমস্যা হলে ৭ দিনের মধ্যে সহজ সাইজ এক্সচেঞ্জের নিশ্চয়তা রয়েছে।",
  },
  {
    q: "অর্ডার কনফার্ম করার পর ট্র্যাকিং আপডেট কীভাবে পাব?",
    a: "আপনার অর্ডার কনফার্ম হওয়ার পর পার্সেল হ্যান্ডওভার হলে আপনাকে এসএমএস ও হোয়াটসঅ্যাপের মাধ্যমে কুরিয়ার ট্র্যাকিং কোড পাঠানো হবে।",
  },
  {
    q: "জরুরি সাইজ পরামর্শ বা কাস্টমার সাপোর্টে যোগাযোগ করার উপায় কী?",
    a: "আমাদের অফিশিয়াল হটলাইন ও WhatsApp নম্বরে (01560-018131) সরাসরি কল বা মেসেজ দিয়ে রিয়েল ফটো দেখতে পারেন এবং এক্সপার্ট সাইজ গাইডেন্স নিতে পারেন।",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-[#faf8f4] dark:bg-neutral-950 border-b border-[#c8a265]/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8a265]/15 border border-[#c8a265]/30 text-[#8e6e30] dark:text-[#c8a265] text-[11px] uppercase tracking-[0.25em] font-bold">
            <HelpCircle className="h-3.5 w-3.5 text-[#c8a265]" />
            Customer Assistance
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            Gent Apparel BD গ্রাহকদের সচরাচর জিজ্ঞাসিত প্রশ্ন ও স্পষ্ট উত্তর
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-2 hover:border-[#c8a265]/60 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-[#c8a265] shrink-0 mt-0.5" />
                <h2 className="text-base font-bold text-foreground font-heading">
                  {faq.q}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8 whitespace-pre-line font-sans">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-8 rounded-sm bg-[#0a0a0a] text-white text-center space-y-4 border border-[#c8a265]/30 shadow-md">
          <h2 className="text-xl font-bold text-[#e8ce9e] font-heading">আরও কোনো বিশেষ জিজ্ঞাসা বা সাইজ পরামর্শ প্রয়োজন?</h2>
          <p className="text-sm text-neutral-300 max-w-md mx-auto font-sans">
            আমাদের ডেডিকেটেড কাস্টমার সাপোর্ট টিম আপনার সেবায় প্রস্তুত।
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS.HOTLINE}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c8a265] text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              কল করুন: {BUSINESS.HOTLINE}
            </a>
            <a
              href={BUSINESS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-emerald-700 transition-colors"
            >
              WhatsApp Support
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
