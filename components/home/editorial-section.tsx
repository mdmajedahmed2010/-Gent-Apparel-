"use client";

/**
 * GENT APPAREL BD — Short Brand Story Section (Homepage)
 * Better Quality, Better Style!
 * Lalbagh, Dhaka-1211 | Hotline / WhatsApp: 01560-018131
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function ImageWithSkeleton({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="absolute inset-0 skeleton-shimmer z-[1]" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

export function EditorialSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf9f6] relative border-y border-border/40 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-border/20 hidden lg:block" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px 0px" }}
        className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 bg-[#f4eee1] border border-[#c8a265]/25 rounded-sm -z-10 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shadow-md">
              <ImageWithSkeleton
                src="/assets/banner.jpg"
                alt="Gent Apparel BD — Better Quality, Better Style!"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-7 space-y-5 lg:pl-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#c8a265] animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c8a265] font-bold">
                  ABOUT GENT APPAREL BD
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-foreground font-heading">
                Better Quality, <span className="italic font-normal text-[#c8a265]">Better Style!</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <strong>Gent Apparel BD</strong> বাংলাদেশের ফ্যাশন-সচেতন পুরুষদের জন্য ১০০% অথেনটিক এক্সপোর্ট কোয়ালিটির পোশাকের অন্যতম শীর্ষ গন্তব্য। লাকি ব্র্যান্ড, সি ব্যারিয়ার, ইল গ্রাঙ্কিও, অ্যারোপোস্টেল ও স্ল্যাজেঞ্জারের মতো আন্তর্জাতিক ব্র্যান্ডের আসল সারপ্লাস আইটেম সরাসরি সংগ্রহ করে আমরা গ্রাহকের কাছে ন্যায্য মূল্যে পৌঁছে দিই।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#c8a265] shrink-0" />
                <span>১০০% আসল এক্সপোর্ট কোয়ালিটি সারপ্লাস</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#c8a265] shrink-0" />
                <span>পার্সেল খুলে যাচাই করে পেমেন্টের সুযোগ</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#c8a265] shrink-0" />
                <span>৭ দিনের সহজ সাইজ এক্সচেঞ্জ পলিসি</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#c8a265] shrink-0" />
                <span>ঢাকা ৮০৳ ও সারাদেশে ১৫০৳ হোম ডেলিভারি</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c8a265] hover:text-black transition-colors"
              >
                <span>আমাদের সম্পর্কে বিস্তারিত পড়ুন</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
