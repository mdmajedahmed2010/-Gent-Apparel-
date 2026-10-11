import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Store, Truck, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { getStorefrontSettings } from "@/actions/settings.actions";

export const metadata: Metadata = {
  title: "Contact Us — Lihaaz by Minhaaz | গুলশান-২ স্টুডিও ও হটলাইন",
  description: "Lihaaz by Minhaaz - House-5, Road 54/A, Gulshan-2, Dhaka। রাজকীয় ডিজাইনার পাঞ্জাবি অর্ডার, সাইজ ট্রায়াল ও কাস্টমার সহায়তায় যোগাযোগ করুন।",
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
      <section className="relative py-16 md:py-24 bg-[#faf8f4] border-b border-[#c9a96e]/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a96e]/15 border border-[#c9a96e]/30 text-[#8e6e30] text-[11px] uppercase tracking-[0.25em] font-bold">
              <Sparkles className="h-3.5 w-3.5 text-[#c9a96e]" />
              কাস্টমার কেয়ার ও স্টুডিও ভিজিট
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight leading-tight text-foreground">
              LIHAAZ BY MINHAAZ <br />
              <span className="italic font-normal text-[#c9a96e]">গুলশান-২ স্টুডিও ও হটলাইন</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto pt-2 font-sans">
              পাঞ্জাবি সাইজিং পরামর্শ, হোম ডেলিভারি ট্র্যাকিং, কিংবা গুলশান-২ স্টুডিওতে সরাসরি ট্রায়াল দিতে যোগাযোগ করুন।
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
                  <div className="w-10 h-[1.5px] bg-[#c9a96e]" />
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
                      placeholder="যেমন: তানভীর আহমেদ"
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#c9a96e] focus:ring-0 transition-colors"
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
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#c9a96e] focus:ring-0 transition-colors"
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
                      placeholder="যেমন: সাইজ পরামর্শ / অর্ডার কনফার্মেশন / স্টুডিও অ্যাপয়েন্টমেন্ট"
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#c9a96e] focus:ring-0 transition-colors"
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
                      placeholder="আপনার কাঙ্ক্ষিত পাঞ্জাবির নাম, সাইজ বা কোনো বিশেষ প্রশ্ন বিস্তারিত লিখুন..."
                      className="w-full px-4 py-3 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#c9a96e] focus:ring-0 resize-none transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-11 bg-foreground text-background text-xs font-semibold uppercase tracking-widest hover:bg-[#c9a96e] hover:text-black transition-all active:scale-[0.98] rounded-sm cursor-pointer shadow-sm"
                  >
                    বার্তা পাঠান (Send Message)
                  </button>
                </form>

                {/* Direct WhatsApp Callout */}
                <div className="p-4 bg-[#faf7f2] border border-[#e2d8c3] rounded-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-neutral-900">সরাসরি হোয়াটসঅ্যাপে সহায়তা নিন</p>
                      <p className="text-[11px] text-neutral-600">রিয়েল-টাইম ছবি, ভিডিও এবং সাইজিং গাইডের জন্য</p>
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
                    স্টুডিও ও হটলাইন তথ্য
                  </h2>
                  <div className="w-10 h-[1.5px] bg-[#c9a96e]" />
                </div>

                {/* Info Card */}
                <div className="p-8 rounded-sm bg-[#faf8f4] border border-[#c9a96e]/30 space-y-6 shadow-sm">
                  <div className="space-y-5">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <Phone className="h-4 w-4 text-[#c9a96e] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          হটলাইন ও অর্ডার সহায়তা
                        </p>
                        <div className="text-xs text-muted-foreground font-medium mt-1 space-y-0.5">
                          <p><a href={`tel:${phone}`} className="hover:text-foreground font-semibold">{phone}</a> (Call &amp; WhatsApp)</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail className="h-4 w-4 text-[#c9a96e] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          ইমেইল সহায়তা
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
                      <Store className="h-4 w-4 text-[#c9a96e] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          ডিজাইন স্টুডিও (Gulshan-2)
                        </p>
                        <div className="text-xs text-muted-foreground leading-relaxed font-medium mt-1">
                          <p>{address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className="h-4 w-4 text-[#c9a96e] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          স্টুডিও ভিজিটের সময়সূচি
                        </p>
                        <div className="text-xs text-muted-foreground leading-relaxed font-medium mt-1 space-y-0.5">
                          <p>প্রতিদিন: সকাল ১১:০০টা - রাত ১০:০০টা</p>
                          <p className="text-[#8e6e30] font-semibold">ওয়াক-ইন ট্রায়াল ও প্রিমিয়াম ফিটিং সুবিধা উপলব্ধ</p>
                        </div>
                      </div>
                    </div>

                    {/* Delivery & Inspection Guidelines */}
                    <div className="p-4 rounded-sm bg-[#0f0e0d] text-white border border-[#c9a96e]/30 space-y-2 text-xs">
                      <p className="font-bold uppercase tracking-wider text-[#e8ce9e] text-[10px]">
                        ডেলিভারি ও পার্সেল নিয়মাবলী
                      </p>
                      <p>• সারাদেশে ক্যাশ অন ডেলিভারি (COD) প্রযোজ্য।</p>
                      <p>• ঢাকা সিটিতে ৳১০০ (২৪-৪৮ ঘণ্টা) | ঢাকার বাইরে ৳২০০ (৪৮-৭২ ঘণ্টা)।</p>
                      <p className="text-[#e8ce9e] font-semibold">• ডেলিভারিম্যানের সামনে পার্সেল খুলে গুণগত মান চেক করে পেমেন্ট করার শতভাগ নিশ্চয়তা।</p>
                      <p>• সাইজ এক্সচেঞ্জের জন্য ৭ দিনের সহজ পলিসি উপলব্ধ।</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="border-t border-[#c9a96e]/20 pt-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-3">
                      আমাদের অফিশিয়াল পেজ
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
                      >
                        <svg className="h-3.5 w-3.5 text-[#c9a96e]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook: lihaazbyminhaaz
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
