import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ChevronRight, PhoneCall, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) — Lihaaz by Minhaaz | সাধারণ জিজ্ঞাসা",
  description: "Lihaaz by Minhaaz - সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তরসমূহ। পাঞ্জাবি কালেকশন, গুলশান-২ স্টুডিও, সাইজ গাইড ও ডেলিভারি সেবা।",
};

const faqs = [
  {
    q: "Lihaaz by Minhaaz-এর পাঞ্জাবির বিশেষত্ব ও কাপড়ের কোয়ালিটি কেমন?",
    a: "আমাদের প্রতিটি পাঞ্জাবিতে ব্যবহার করা হয় প্রিমিয়াম র সিল্ক, ফাইন তুলা ও লাক্সারি বোনা জ্যাকর্ড ফেব্রিক। কলার এবং প্ল্যাকেটে রয়েছে রাজকীয় ঐতিহ্যবাহী জারদৌসি ও মেটালিক সুতোর সূক্ষ্ম হাতের কাজ। প্রতিটি সেলাইয়ে দেওয়া হয় উচ্চমানের মাস্টার-টেইলরিং ফিনিশ যা আপনাকে দেয় দীর্ঘস্থায়ী আভিজাত্য ও রাজকীয় স্বাচ্ছন্দ্য।",
  },
  {
    q: "ডেলিভারি চার্জ কত এবং কত দিনের মধ্যে পার্সেল পৌঁছাবে?",
    a: "ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳১০০ (২৪ থেকে ৪৮ ঘণ্টার মধ্যে সরাসরি হোম ডেলিভারি)। ঢাকার বাইরে জেলা ও থানা পর্যায়ে ডেলিভারি চার্জ ৳২০০ (৪৮ থেকে ৭২ ঘণ্টার মধ্যে প্রিমিয়াম কুরিয়ারে হোম ডেলিভারি)।",
  },
  {
    q: "ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা আছে কি?",
    a: "হ্যাঁ, সম্পূর্ণ বাংলাদেশজুড়ে আমাদের ক্যাশ অন ডেলিভারি সুবিধা রয়েছে। পার্সেল হাতে পেয়ে মূল্য পরিশোধ করতে পারবেন।",
  },
  {
    q: "আমি কি ডেলিভারিম্যানের সামনে পার্সেল চেক করে দেখতে পারব?",
    a: "অবশ্যই! আমাদের নীতিমালায় স্পষ্ট নির্দেশনা রয়েছে—ডেলিভারিম্যানের উপস্থিতিতে পার্সেল খুলে কাপড়ের মান, এমব্রয়ডারি, রঙ এবং সাইজ যাচাই করে শতভাগ সন্তুষ্ট হয়ে মূল্য পরিশোধ করতে পারবেন।",
  },
  {
    q: "সাইজ কীভাবে নির্বাচন করব এবং সাইজ না মিললে কি এক্সচেঞ্জ করা যাবে?",
    a: "আমাদের পাঞ্জাবিগুলো ৩৮, ৪০, ৪২, ৪৪, এবং ৪৬ স্ট্যান্ডার্ড সাইজে নিখুঁত মাপে তৈরি। সাইজ গাইডে চেস্ট ও লেন্থের সঠিক মাপ দেওয়া আছে। হাতে পাওয়ার পর সাইজে কোনো অমিল হলে ৭ দিনের মধ্যে সহজ সাইজ এক্সচেঞ্জের নিশ্চয়তা রয়েছে।",
  },
  {
    q: "গুলশান-২ স্টুডিওতে সরাসরি এসে কি পাঞ্জাবি দেখে ট্রায়াল দেওয়া যাবে?",
    a: "হ্যাঁ, আপনি সরাসরি আমাদের গুলশান-২ স্টুডিওতে এসে ট্রায়াল দিতে পারেন এবং পছন্দের পাঞ্জাবি সংগ্রহ করতে পারেন:\n• ঠিকানা: House-5, Road 54/A, Gulshan-2, Dhaka-1212\n• সময়সূচী: প্রতিদিন সকাল ১১:০০টা থেকে রাত ১০:০০টা পর্যন্ত\n• হটলাইন / WhatsApp: +880 1755-627874",
  },
  {
    q: "বিয়ে বা উৎসবের জন্য বিশেষ পরামর্শ কীভাবে পেতে পারি?",
    a: "ওয়েডিং ও উৎসবের পাঞ্জাবি ম্যাচিং বা সাইজিং সংক্রান্ত যেকোনো বিশেষ পরামর্শের জন্য সরাসরি আমাদের গুলশান স্টুডিওতে ওয়াক-ইন করতে পারেন অথবা আমাদের অফিসিয়াল WhatsApp নম্বরে (+880 1755-627874) মেসেজ পাঠাতে পারেন।",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-[#faf8f4] border-b border-[#c9a96e]/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a96e]/15 border border-[#c9a96e]/30 text-[#8e6e30] text-[11px] uppercase tracking-[0.25em] font-bold">
            <HelpCircle className="h-3.5 w-3.5 text-[#c9a96e]" />
            Client Assistance
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            লিহাজ বাই মিনহাজ গ্রাহকদের সচরাচর জিজ্ঞাসিত প্রশ্ন ও স্পষ্ট উত্তর
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-2 hover:border-[#c9a96e]/60 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-[#c9a96e] shrink-0 mt-0.5" />
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
        <div className="mt-12 p-8 rounded-sm bg-[#0f0e0d] text-white text-center space-y-4 border border-[#c9a96e]/30 shadow-md">
          <h2 className="text-xl font-bold text-[#e8ce9e] font-heading">আরও কোনো বিশেষ জিজ্ঞাসা বা সাইজ পরামর্শ প্রয়োজন?</h2>
          <p className="text-sm text-neutral-300 max-w-md mx-auto font-sans">
            আমাদের ডেডিকেটেড ফ্যাশন কনসিয়ার্জ টিম আপনার সেবায় প্রস্তুত।
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS.HOTLINE}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a96e] text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors"
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
              WhatsApp Concierge
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
