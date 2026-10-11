/* eslint-disable */
"use client";

/**
 * LIHAAZ BY MINHAAZ — Home UI Orchestrator
 * High-fashion royal menswear experience with lazy-loaded below-fold sections.
 * Studio: House-5, Road 54/A, Gulshan-2, Dhaka
 */

import dynamic from "next/dynamic";
import { HeroSlider, type HeroSlide } from "@/components/home/hero-slider";
import { TrustBadges } from "@/components/home/trust-badges";
import type { CategoryItem } from "@/components/home/category-grid";
import type { LookbookLook } from "@/components/home/lookbook-section";
import type { CollectionShowcaseItem } from "@/components/home/collections-showcase";
import type { ArrivalsProduct } from "@/components/home/new-arrivals-grid";
import type { Testimonial } from "@/components/home/testimonials-carousel";
import { ALL_PRODUCTS, CATEGORIES } from "@/lib/demo-data";

/* ──────────────── Dynamic Imports with Loading Skeletons ──────────────── */

const CategoryGrid = dynamic(
  () => import("@/components/home/category-grid").then((mod) => mod.CategoryGrid),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="h-6 w-48 skeleton-shimmer mx-auto mb-12 rounded" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[3/4] skeleton-shimmer rounded-sm" />
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

const NewArrivalsGrid = dynamic(
  () => import("@/components/home/new-arrivals-grid").then((mod) => mod.NewArrivalsGrid),
  {
    loading: () => (
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="h-6 w-40 skeleton-shimmer mb-12 rounded" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-14">
            {[...Array(8)].map((_, i) => (
              <div key={i}>
                <div className="aspect-[3/4] skeleton-shimmer mb-3 rounded-sm" />
                <div className="h-3 w-3/4 skeleton-shimmer rounded mb-2" />
                <div className="h-3 w-1/2 skeleton-shimmer rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

const LookbookSection = dynamic(
  () => import("@/components/home/lookbook-section").then((mod) => mod.LookbookSection),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-surface-warm">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-5 space-y-4">
              <div className="h-8 w-48 skeleton-shimmer rounded" />
              <div className="h-12 w-full skeleton-shimmer rounded" />
              <div className="h-12 w-full skeleton-shimmer rounded" />
            </div>
            <div className="col-span-7 aspect-[3/4] skeleton-shimmer rounded-sm" />
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

const CollectionsShowcase = dynamic(
  () => import("@/components/home/collections-showcase").then((mod) => mod.CollectionsShowcase),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="h-6 w-48 skeleton-shimmer mx-auto mb-12 rounded" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[4/5] skeleton-shimmer rounded-sm" />
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

const TestimonialsCarousel = dynamic(
  () => import("@/components/home/testimonials-carousel").then((mod) => mod.TestimonialsCarousel),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-5xl">
          <div className="h-6 w-40 skeleton-shimmer mx-auto mb-10 rounded" />
          <div className="h-48 skeleton-shimmer rounded-sm" />
        </div>
      </section>
    ),
    ssr: false,
  }
);

const EditorialSection = dynamic(
  () => import("@/components/home/editorial-section").then((mod) => mod.EditorialSection),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-[#faf9f6]">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="col-span-5 aspect-[4/5] skeleton-shimmer rounded-sm" />
            <div className="col-span-7 space-y-4">
              <div className="h-6 w-32 skeleton-shimmer rounded" />
              <div className="h-10 w-3/4 skeleton-shimmer rounded" />
              <div className="h-20 w-full skeleton-shimmer rounded" />
            </div>
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

/* ──────────────── Static Fallback Data ──────────────── */

const defaultHeroSlides: HeroSlide[] = [
  {
    image: "/assets/banner.jpg",
    title: "CURZON HALL ROYAL HERITAGE",
    subtitle: "Opulent Champagne, Obsidian Black & Terracotta Rust Panjabis with handcrafted zardozi embroidery.",
    link: "/categories/royal-heritage",
    overline: "EID & WEDDING COUTURE 2026",
    color: "from-black/80",
  },
  {
    image: "/assets/731105183_122137979606871146_8917897017688220084_n.jpg",
    title: "CHAMPAGNE ROYAL ZARDOZI",
    subtitle: "Exquisite metallic threadwork on regal silk blend fabric with signature bespoke tailoring.",
    link: "/products/curzon-hall-heritage-champagne-panjabi",
    overline: "MASTERPIECE EDITION",
    color: "from-black/75",
  },
  {
    image: "/assets/731173450_122137979432871146_6950294711652391069_n.jpg",
    title: "MIDNIGHT OBSIDIAN BLACK",
    subtitle: "Intricate tonal and matted gold embroidery designed for unforgettable evening celebrations.",
    link: "/products/midnight-obsidian-heritage-zardozi-panjabi",
    overline: "EVENING & RECEPTION COUTURE",
    color: "from-black/75",
  },
];

const defaultCollections: CollectionShowcaseItem[] = [
  {
    title: "Royal Heritage & Wedding",
    image: "/assets/731105183_122137979606871146_8917897017688220084_n.jpg",
    href: "/categories/royal-heritage",
    tag: "CURZON HALL WEDDING EDITION",
  },
  {
    title: "Festive Eid Collection",
    image: "/assets/731093757_122137979318871146_1303986987175253818_n.jpg",
    href: "/categories/festive-eid",
    tag: "FESTIVE EID 2026 DROPS",
  },
  {
    title: "Classic Signature Cotton",
    image: "/assets/730084646_122134599422871146_2384218671751147055_n.jpg",
    href: "/categories/classic-cotton",
    tag: "PREMIUM COMBED COTTON",
  },
  {
    title: "Evening Obsidian Black",
    image: "/assets/731173450_122137979432871146_6950294711652391069_n.jpg",
    href: "/categories/evening-black",
    tag: "JET BLACK ZARDOZI EMBROIDERY",
  },
  {
    title: "Luxury Silk & Jacquard",
    image: "/assets/728570183_122134599722871146_7459141703632616239_n.jpg",
    href: "/categories/luxury-silk-jacquard",
    tag: "RAW SILK & WOVEN JACQUARD",
  },
  {
    title: "Desert Sand Gold Jacquard",
    image: "/assets/731111670_122137979378871146_3792348301777002016_n.jpg",
    href: "/products/desert-sand-gold-jacquard-panjabi",
    tag: "WARM GOLDEN METALLIC ACCENTS",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Lihaaz by Minhaaz-এর Curzon Hall Champagne Panjabi-টি আমার ভাইয়ের ওয়েডিং রিসেপশনে পরেছিলাম। কলারের জারদৌসি এমব্রয়ডারি ও সিল্কের ড্র্যাপ এক কথায় অনন্য। ডেলিভারিতে পার্সেল চেক করে পেমেন্ট করার সুবিধা খুবই চমৎকার।",
    author: "ব্যারিস্টার আহমেদ জাওয়াদ",
    designation: "Gulshan-2, Dhaka — Verified Client",
    stars: 5,
  },
  {
    quote:
      "গুলশান-২ স্টুডিও ভিজিট করে পাঞ্জাবিটির ট্রায়াল দিয়েছিলাম। ফিটিং একদম মাস্টার কাট আর কাপড়ের আরাম অতুলনীয়। ঈদের জন্য এমন রাজকীয় পোশাকের কোনো বিকল্প নেই।",
    author: "ড. সাজিদুর রহমান",
    designation: "Banani, Dhaka — Verified Client",
    stars: 5,
  },
  {
    quote:
      "চট্টগ্রামে হোম ডেলিভারি নিয়েছিলাম। ৪৮ ঘণ্টার মধ্যে ইনট্যাক্ট পার্সেল পেয়েছি। Midnight Obsidian Black পাঞ্জাবিটির রয়্যাল লুক ছবিতে যেমন দেখেছি বাস্তবে আরও সুন্দর।",
    author: "তানভীর হাসান চৌধুরী",
    designation: "Khulshi, Chattogram — Verified Client",
    stars: 5,
  },
];

/* ──────────────── Main Component ──────────────── */

export function HomeUI({
  dbProducts,
  dbCategories,
  dbBanners = [],
  dbCollections = [],
}: {
  dbProducts: any[];
  dbCategories: any[];
  dbBanners?: any[];
  dbCollections?: any[];
}) {
  /* ── Map categories to UI (always fallback to CATEGORIES if empty) ── */
  const sourceCategories = dbCategories && dbCategories.length > 0 ? dbCategories : CATEGORIES;
  const mappedCategories: CategoryItem[] = sourceCategories.map((c: any, i: number) => ({
    name: c.name,
    slug: c.slug,
    productCount: c._count?.products || c.productCount || 4,
    image: c.image || ALL_PRODUCTS[i % ALL_PRODUCTS.length]?.image || "/assets/banner.jpg",
  }));

  /* ── Map products to UI (always fallback to ALL_PRODUCTS if empty) ── */
  const sourceProducts = dbProducts && dbProducts.length > 0 ? dbProducts : ALL_PRODUCTS;
  const mappedProducts: ArrivalsProduct[] = sourceProducts.slice(0, 8).map((p: any, i: number) => {
    const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.price || p.basePrice || 4850);
    const variantImages = p.variants?.[0]?.images;
    const prodImg =
      Array.isArray(variantImages) && variantImages.length > 0
        ? variantImages[0]
        : (p.image || ALL_PRODUCTS[i % ALL_PRODUCTS.length]?.image || "/assets/banner.jpg");

    return {
      id: p.id || `prod-${i}`,
      name: p.name,
      slug: p.slug,
      price: variantPrice,
      compareAtPrice: p.compareAtPrice || Math.round(variantPrice * 1.2),
      image: prodImg,
      category: p.category?.name || p.category || "Royal Heritage",
      isNew: p.isNew ?? true,
    };
  });

  /* ── Lookbook looks (authentic Lihaaz products) ── */
  const lookbookLooks: LookbookLook[] = [
    {
      id: "look1",
      image: "/assets/731105183_122137979606871146_8917897017688220084_n.jpg",
      title: "Royal Heritage & Wedding",
      subtitle: "Curzon Hall Heritage Champagne Panjabi",
      slug: "curzon-hall-heritage-champagne-panjabi",
      price: 4850,
      tag: "ROYAL MASTERPIECE",
    },
    {
      id: "look2",
      image: "/assets/731173450_122137979432871146_6950294711652391069_n.jpg",
      title: "Evening Obsidian Black",
      subtitle: "Midnight Obsidian Heritage Zardozi Panjabi",
      slug: "midnight-obsidian-heritage-zardozi-panjabi",
      price: 5450,
      tag: "COUTURE BLACK",
    },
    {
      id: "look3",
      image: "/assets/731093757_122137979318871146_1303986987175253818_n.jpg",
      title: "Festive Eid Collection",
      subtitle: "Terracotta Rust Royal Heritage Panjabi",
      slug: "terracotta-rust-royal-heritage-panjabi",
      price: 4950,
      tag: "WARM EARTH TONE",
    },
  ];

  /* ── Hero Slides: DB banners first, fallback to defaults ── */
  const heroSlides: HeroSlide[] =
    dbBanners && dbBanners.length > 0
      ? dbBanners.map((banner: any) => ({
          image: banner.content?.image || "/assets/banner.jpg",
          title: banner.title || "",
          subtitle: banner.subtitle || "",
          link: banner.content?.link || "/shop",
          overline: banner.content?.overline || "ROYAL HERITAGE",
          color: banner.content?.color || "from-black/80",
        }))
      : defaultHeroSlides;

  /* ── Collections: DB collections first, fallback to defaults ── */
  const allCollections: CollectionShowcaseItem[] =
    dbCollections && dbCollections.length > 0
      ? dbCollections.map((c: any, i: number) => ({
          title: c.name,
          image:
            c.image && !c.image.includes("cloudinary")
              ? c.image
              : (defaultCollections[i % defaultCollections.length]?.image || "/assets/banner.jpg"),
          href: `/categories/${c.slug}`,
          tag: c.description?.toUpperCase() || c.name.toUpperCase(),
        }))
      : defaultCollections;

  return (
    <div className="flex flex-col bg-[#fdfcfa] overflow-hidden">
      {/* 1. HERO SLIDER */}
      <HeroSlider slides={heroSlides} />

      {/* 2. TRUST BADGES */}
      <TrustBadges />

      {/* 3. CATEGORY GRID */}
      <CategoryGrid categories={mappedCategories} />

      {/* 4. LOOKBOOK / EDITORIAL SHOWCASE */}
      <LookbookSection looks={lookbookLooks} />

      {/* 5. TRENDING PANJABIS / PRODUCTS SECTION */}
      <NewArrivalsGrid products={mappedProducts} />

      {/* 6. ALL COLLECTIONS */}
      <CollectionsShowcase collections={allCollections} />

      {/* 7. TESTIMONIALS */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* 8. SHORT BRAND STORY */}
      <EditorialSection />
    </div>
  );
}
