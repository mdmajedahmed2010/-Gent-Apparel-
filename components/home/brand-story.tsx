"use client";

/**
 * LIHAAZ BY MINHAAZ — Brand Story Component
 * Heritage, bespoke craftsmanship & Gulshan-2 design studio narrative.
 */

import Link from "next/link";
import Image from "next/image";

export function BrandStory() {
  return (
    <section className="bg-surface border-t border-border/40 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Photo Frame */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-sm overflow-hidden shadow-sm group reveal">
            <Image
              src="/assets/banner.jpg"
              alt="Lihaaz by Minhaaz Royal Heritage Panjabis at Curzon Hall"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Soft gold accent corner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.15),transparent_50%)]" />
          </div>

          {/* Right Side: Editorial narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] font-bold">
              THE ART OF ROYAL HERITAGE MENSWEAR
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground font-heading">
              Crafted for Regal Elegance,
              <br />
              <span className="italic font-normal text-foreground/85">Woven with Timeless Heritage</span>
            </h2>

            <div className="border-l-2 border-[#c9a96e] pl-4 py-1 text-muted-foreground italic text-sm">
              &ldquo;আমরা বিশ্বাস করি একটি নিখুঁত পাঞ্জাবি কেবল পোশাক নয়—এটি আত্মসম্মান, সংস্কৃতি ও আভিজাত্যের রাজকীয় বহিঃপ্রকাশ।&rdquo;
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong>Lihaaz by Minhaaz (লিহাজ বাই মিনহাজ)</strong> বাংলাদেশের পুরুষদের ঐতিহ্যবাহী পোশাককে পৌঁছে দিয়েছে বিশ্বমানের ফ্যাশন নান্দনিকতায়। প্রতিটি পোশাকে ব্যবহৃত হয় খাঁটি র সিল্ক, ফাইন প্রিমিয়াম সুতি, জ্যাকর্ড ও ঐতিহ্যবাহী জারদৌসি সুতোর নিখুঁত হাতের কাজ।
              </p>
              <p>
                ঢাকার গুলশান-২ এ (House-5, Road 54/A) অবস্থিত আমাদের নিজস্ব ডিজাইন স্টুডিও থেকে প্রতিটি পাঞ্জাবির প্যাটার্ন তৈরি হয় সুক্ষ্ম নিখুঁত মাপে। সারাদেশের সম্মানিত গ্রাহকদের জন্য রয়েছে হোম ডেলিভারি এবং পার্সেল খুলে চেক করে ক্যাশ অন ডেলিভারিতে মূল্য পরিশোধের শতভাগ বিশ্বস্ত সুবিধা।
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-11 px-8 bg-foreground text-background text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#c9a96e] hover:text-black transition-all rounded-sm shadow-sm active:scale-[0.98]"
              >
                Our Studio Story
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center h-11 px-6 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.1em] hover:border-foreground transition-all rounded-sm"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
