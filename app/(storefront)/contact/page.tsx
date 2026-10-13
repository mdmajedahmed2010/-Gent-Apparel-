import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Store, Truck, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { getStorefrontSettings } from "@/actions/settings.actions";

export const metadata: Metadata = {
  title: "Contact Us — Gent Apparel BD | কাস্টমার সাপোর্ট ও হটলাইন",
  description: "Gent Apparel BD - Lalbagh, Dhaka-1211, Bangladesh। ১০০% এক্সপোর্ট কোয়ালিটি মেনস ফ্যাশন অর্ডার, সাইজ পরামর্শ ও কাস্টমার সহায়তায় যোগাযোগ করুন।",
};

export default async function ContactPage() {
  const { settings } = await getStorefrontSettings();
  const phone = settings?.store_phone || BUSINESS.HOTLINE;
  const email = settings?.store_email || BUSINESS.EMAIL;
  const address = settings?.store_address || BUSINESS.ADDRESS;
  const facebook = settings?.social_facebook || BUSINESS.FACEBOOK;
  const whatsapp = BUSINESS.WHATSAPP;

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Section */}
      <section className="relative py-16 md:py-24 bg-[#faf8f4] dark:bg-neutral-950 border-b border-[#c8a265]/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a265]/15 border border-[#c8a265]/30 text-[#8e6e30] dark:text-[#c8a265] text-[11px] uppercase tracking-[0.25em] font-bold">
              <Sparkles className="h-3.5 w-3.5 text-[#c8a265]" />
              কাস্টমার কেয়ার ও সাপোর্ট
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight leading-tight text-foreground">
              GENT APPAREL BD <br />
              <span className="italic font-normal text-[#c8a265]">সরাসরি হটলাইন ও হেল্পডেস্ক</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto pt-2 font-sans">
              ডেনিম জিন্স ও ট্রাউজার্স সাইজিং পরামর্শ, হোম ডেলিভারি ট্র্যাকিং কিংবা সরাসরি অর্ডারের জন্য আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Dashboard — 2-Column Split */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Form Panel (7 cols) */}
              <div className="lg:col-span-7 space-y-8 reveal">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-foreground font-heading">
                    আমাদের সরাসরি বার্তা পাঠান
                  </h2>
                  <div className="w-10 h-[1.5px] bg-[#c8a265]" />
                </div>

                <form className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-[11px] font-bold uppercase tracking-wider text-foreground"
                    >
                      আপনার নাম (Full Name) *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="যেমন: তানভীর হাসান"
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#c8a265] focus:ring-0 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-phone"
                      className="text-[11px] font-bold uppercase tracking-wider text-foreground"
                    >
                      মোবাইল নম্বর (Phone Number) *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#c8a265] focus:ring-0 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-subject"
                      className="text-[11px] font-bold uppercase tracking-wider text-foreground"
                    >
                      বিষয় (Subject) *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="যেমন: সাইজ পরামর্শ / দ্রুত ডেলিভারি / প্রোডাক্ট তথ্য"
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#c8a265] focus:ring-0 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="text-[11px] font-bold uppercase tracking-wider text-foreground"
                    >
                      আপনার বার্তা (Message) *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="আপনার কাঙ্ক্ষিত জিন্স, ট্রাউজার্স বা সোয়েটারের নাম, ওয়েস্ট সাইজ (যেমন: ৩২ বা ৩৪) অথবা কোনো বিশেষ প্রশ্ন বিস্তারিত লিখুন..."
                      className="w-full px-4 py-3 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#c8a265] focus:ring-0 resize-none transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-11 bg-foreground text-background text-xs font-semibold uppercase tracking-widest hover:bg-[#c8a265] hover:text-black transition-all active:scale-[0.98] rounded-sm cursor-pointer shadow-sm"
                  >
                    বার্তা পাঠান (Send Message)
                  </button>
                </form>

                {/* Direct WhatsApp Callout */}
                <div className="p-4 bg-[#faf7f2] dark:bg-neutral-900 border border-[#e2d8c3] dark:border-neutral-800 rounded-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-foreground">সরাসরি হোয়াটসঅ্যাপে অর্ডার ও সহায়তা নিন</p>
                      <p className="text-[11px] text-muted-foreground">রিয়েল প্রোডাক্ট ফটো, ভিডিও এবং সাইজিং সহায়তার জন্য</p>
                    </div>
                  </div>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-sm transition-colors shadow-xs"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Right Column: Business Info Card (5 cols) */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 reveal [transition-delay:200ms]">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-foreground font-heading">
                    যোগাযোগের মূল ঠিকানা ও হটলাইন
                  </h2>
                  <div className="w-10 h-[1.5px] bg-[#c8a265]" />
                </div>

                {/* Info Card */}
                <div className="p-8 rounded-sm bg-[#faf8f4] dark:bg-neutral-900 border border-[#c8a265]/30 space-y-6 shadow-sm">
                  <div className="space-y-5">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <Phone className="h-4 w-4 text-[#c8a265] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          হটলাইন ও অর্ডার সহায়তা
                        </p>
                        <div className="text-xs text-muted-foreground font-medium mt-1 space-y-0.5">
                          <p><a href={`tel:${phone}`} className="hover:text-foreground font-semibold text-foreground">{phone}</a> (Call &amp; WhatsApp)</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail className="h-4 w-4 text-[#c8a265] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          অফিসিয়াল ইমেইল
                        </p>
                        <a
                          href={`mailto:${email}`}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium mt-1 inline-block"
                        >
                          {email}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <MapPin className="h-4 w-4 text-[#c8a265] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          ব্র্যান্ড হাব ও ওয়্যারহাউজ
                        </p>
                        <div className="text-xs text-muted-foreground leading-relaxed font-medium mt-1">
                          <p>{address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className="h-4 w-4 text-[#c8a265] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          অফিস ও হেল্পডেস্ক সময়সূচি
                        </p>
                        <div className="text-xs text-muted-foreground leading-relaxed font-medium mt-1 space-y-0.5">
                          <p>প্রতিদিন: সকাল ১০:০০টা - রাত ১০:০০টা</p>
                          <p className="text-[#8e6e30] dark:text-[#c8a265] font-semibold">অনলাইন অর্ডার প্রক্রিয়াকরণ ও সাপোর্ট সবসময় সচল</p>
                        </div>
                      </div>
                    </div>

                    {/* Delivery & Inspection Guidelines */}
                    <div className="p-4 rounded-sm bg-[#0a0a0a] text-white border border-[#c8a265]/30 space-y-2 text-xs">
                      <p className="font-bold uppercase tracking-wider text-[#e8ce9e] text-[10px]">
                        ডেলিভারি ও ক্যাশ অন ডেলিভারি সুবিধা
                      </p>
                      <p>• ঢাকা সিটিতে মাত্র ৳৮০ (২৪-৪৮ ঘণ্টার মধ্যে হোম ডেলিভারি)।</p>
                      <p>• ঢাকার বাইরে সারাদেশে মাত্র ৳১৫০ (২-৩ দিনে হোম ডেলিভারি)।</p>
                      <p className="text-[#e8ce9e] font-semibold">• ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করে নিশ্চিন্তে পেমেন্ট করার শতভাগ নিশ্চয়তা।</p>
                      <p>• ৭ দিনের মধ্যে সহজ সাইজ পরিবর্তনের সুবিধা।</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="border-t border-[#c8a265]/20 pt-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-3">
                      আমাদের অফিশিয়াল ফেসবুক পেজ
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
                      >
                        <svg className="h-3.5 w-3.5 text-[#c8a265]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        fb.com/gentapparelbd
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
