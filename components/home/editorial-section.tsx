"use client";

/**
 * LIHAAZ BY MINHAAZ — Short Brand Story Section (Homepage)
 * Gulshan-2 design studio, bespoke zardozi embroidery & royal heritage couture.
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
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
            <div className="absolute -inset-2 bg-[#f4eee1] border border-[#c9a96e]/25 rounded-sm -z-10 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shadow-md">
              <ImageWithSkeleton
                src="/assets/731105183_122137979606871146_8917897017688220084_n.jpg"
                alt="Lihaaz by Minhaaz — Royal Heritage Champagne Panjabi"
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
                <Sparkles className="h-4 w-4 text-[#c9a96e] animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] font-bold">
                  ABOUT LIHAAZ BY MINHAAZ
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-foreground font-heading">
                ঐতিহ্য ও রাজকীয় আভিজাত্যের <span className="italic font-normal text-[#c9a96e]">অনন্য ফ্যাশন মেলবন্ধন</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <strong>Lihaaz by Minhaaz</strong> ঢাকার ফ্যাশন সচেতন ও রুচিশীল পুরুষদের জন্য নিয়ে এসেছে খাঁটি সিল্ক, ফাইন সুতি ও এক্সক্লুসিভ জারদৌসি এমব্রয়ডারির প্রিমিয়াম পাঞ্জাবি কালেকশন। গুলশান-২ স্টুডিওতে তৈরি প্রতিটি পোশাকে বজায় রাখা হয় আন্তর্জাতিক সেলাই ফিনিশিং, নিখুঁত ড্র্যাপ এবং আরামদায়ক ফিটিং।
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/60">
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-bold text-foreground font-heading">
                  গুলশান-২
                </p>
                <p className="text-xs text-muted-foreground">ডিজাইন স্টুডিও ও ওয়াক-ইন ট্রায়াল</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-bold text-foreground font-heading">
                  ১০০% চেক COD
                </p>
                <p className="text-xs text-muted-foreground">পার্সেল দেখে মূল্য পরিশোধের সুবিধা</p>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:text-[#c9a96e] transition-colors group cursor-pointer"
              >
                Learn More About Our Heritage
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
