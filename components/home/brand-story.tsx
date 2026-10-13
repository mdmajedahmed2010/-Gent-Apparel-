"use client";

/**
 * GENT APPAREL BD — Brand Story Component
 * Better Quality, Better Style!
 * Authentic export craftsmanship & Lalbagh hub narrative.
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
              alt="Gent Apparel BD — Better Quality, Better Style!"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Soft gold accent corner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,162,101,0.15),transparent_50%)]" />
          </div>

          {/* Right Side: Editorial narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c8a265] font-bold">
              100% AUTHENTIC EXPORT MENSWEAR
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground font-heading">
              Better Quality,
              <br />
              <span className="italic font-normal text-foreground/85">Better Style!</span>
            </h2>

            <div className="border-l-2 border-[#c8a265] pl-4 py-1 text-muted-foreground italic text-sm">
              &ldquo;আমরা বিশ্বাস করি পুরুষদের ফ্যাশনে কাপড়ের কোয়ালিটি, স্থায়িত্ব এবং সঠিক ফিটিং-এর চেয়ে গুরুত্বপূর্ণ কিছু নেই।&rdquo;
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong>Gent Apparel BD (জেন্ট অ্যাপারেল বিডি)</strong> বাংলাদেশের আধুনিক ফ্যাশনপ্রেমী পুরুষদের কাছে এনে দিয়েছে আন্তর্জাতিক মানের প্রিমিয়াম এক্সপোর্ট সারপ্লাস পোশাক। লাকি ব্র্যান্ডের হেভি ডিউটি স্ট্রেচ ডেনিম, সি ব্যারিয়ার ইতালিয়ান কাট চিনো, স্ল্যাজেঞ্জার অ্যাথলেটিক ট্র্যাক প্যান্ট ও লিংকন ইউকে নিটওয়্যার—প্রতিটি পোশাক খাঁটি ও ফ্যাক্টরি ট্যাগ সহ যাচাইকৃত।
              </p>
              <p>
                ঢাকার লালবাগ হাব থেকে দেশজুড়ে প্রতিটি গ্রাহকের জন্য আমরা নিশ্চিত করি দ্রুততম ডেলিভারি এবং পার্সেল খুলে দেখার শতভাগ নিশ্চয়তা।
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-11 px-8 bg-foreground text-background text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#c8a265] hover:text-black transition-all rounded-sm shadow-sm active:scale-[0.98]"
              >
                ব্র্যান্ড পরিচিতি
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center h-11 px-6 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.1em] hover:border-foreground transition-all rounded-sm"
              >
                কালেকশন দেখুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
