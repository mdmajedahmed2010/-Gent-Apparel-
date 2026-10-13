/**
 * GENT APPAREL BD — Editorial Banner
 * Better Quality, Better Style!
 * Full-width lifestyle banner between product sections
 */

import Link from "next/link";
import Image from "next/image";

export function EditorialBanner() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-black">
      {/* Background with Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/banner.jpg"
          alt="Gent Apparel BD — Better Quality, Better Style!"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-xl text-center mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c8a265] font-bold">
              AUTHENTIC EXPORT DROPS 2026
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight font-heading">
              Better Quality,
              <br />
              <span className="italic font-normal text-[#c8a265]">Better Style!</span>
            </h2>
            <p className="text-xs md:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Lucky Brand, Sea Barrier, Slazenger ও Lincoln UK-এর ১০০% অরিজিনাল এক্সপোর্ট পোশাক। প্রিমিয়াম ফেব্রিক ও পারফেক্ট কমফোর্ট ফিট।
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#c8a265] text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-all duration-300 shadow-lg"
              >
                সব প্রোডাক্ট দেখুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
