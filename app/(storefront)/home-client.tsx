/* eslint-disable */
"use client";

/**
 * GENT APPAREL BD — Home UI Orchestrator
 * Better Quality, Better Style!
 * High-fashion menswear experience with lazy-loaded below-fold sections.
 * Lalbagh, Dhaka-1211 | Hotline / WhatsApp: 01560-018131
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
    title: "BETTER QUALITY, BETTER STYLE!",
    subtitle: "১০০% আসল এক্সপোর্ট ডেনিম জিন্স, সি ব্যারিয়ার ইতালিয়ান চিনো এবং আন্তর্জাতিক স্পোর্টসওয়্যার।",
    link: "/shop",
    overline: "GENT APPAREL BD — LALBAGH, DHAKA",
    color: "from-black/85",
  },
  {
    image: "/assets/lucky-brand-light-wash.jpg",
    title: "SUPER PREMIUM EXPORT DENIM",
    subtitle: "Lucky Brand, Sea Barrier & IL Granchio ইতালিয়ান কমফোর্ট স্ট্রেচ জিন্সের সেরা কালেকশন।",
    link: "/categories/denim-jeans",
    overline: "100% AUTHENTIC EXPORT PIECES",
    color: "from-black/80",
  },
  {
    image: "/assets/lincoln-quarter-zip-pullover.jpg",
    title: "WINTER IS BACK 2026",
    subtitle: "Lincoln UK লেয়ার্ড কলার নিট পুলওভার ও Slazenger অরিজিনাল ব্রাশড ফ্লিস ট্র্যাক প্যান্ট ড্রপ।",
    link: "/collections/winter-is-back",
    overline: "SEASONAL WINTER COLLECTION",
    color: "from-black/80",
  },
];

const defaultCollections: CollectionShowcaseItem[] = [
  {
    title: "Original Export Denim",
    image: "/assets/lucky-brand-dark-indigo.jpg",
    href: "/categories/denim-jeans",
    tag: "LUCKY BRAND & SEA BARRIER",
  },
  {
    title: "Italian Gabardine & Chinos",
    image: "/assets/sea-barrier-chino-pants.jpg",
    href: "/categories/gabardine-chinos",
    tag: "EXTRA COMFORT FLEX",
  },
  {
    title: "Activewear & Joggers",
    image: "/assets/slazenger-stripe-trackpants.jpg",
    href: "/categories/joggers-activewear",
    tag: "SLAZENGER ATHLETIC TROUSERS",
  },
  {
    title: "Winter Is Back 2026",
    image: "/assets/lincoln-quarter-zip-pullover.jpg",
    href: "/collections/winter-is-back",
    tag: "LINCOLN UK KNITWEAR DROPS",
  },
  {
    title: "Italian Attitude Series",
    image: "/assets/sea-barrier-raw-indigo.jpg",
    href: "/collections/italian-attitude",
    tag: "CONTINENTAL LUXURY CUT",
  },
  {
    title: "Athletic Streetwear",
    image: "/assets/slazenger-cuffed-joggers.jpg",
    href: "/collections/athletic-streetwear",
    tag: "EVERYDAY COMFORT JOGGERS",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "লাকি ব্র্যান্ডের ১২১ স্লিম স্ট্রেইট জিন্সটা হাতে পেয়ে সত্যি দারুণ লেগেছে। কাপড় ও ফিটিং ১০০% জেনুইন এক্সপোর্ট স্ট্যান্ডার্ড। আর ডেলিভারি ম্যানের সামনে পার্সেল খুলে চেক করে নেওয়ার সুবিধা থাকায় কোনো টেনশনই ছিল না।",
    author: "তানভীর আহমেদ",
    designation: "Dhanmondi, Dhaka — Verified Customer",
    stars: 5,
  },
  {
    quote:
      "সি ব্যারিয়ার ইতালিয়ান চিনো প্যান্টটা অফিসে পরার জন্য এককথায় অসাধারণ। যেমন সফট ফ্যাব্রিক তেমনি আরামদায়ক ফ্লেক্স। জেন্ট অ্যাপারেল বিডি আসলেই বেটার কোয়ালিটি নিশ্চিত করে।",
    author: "ইঞ্জিনিয়ার রাফিদ হাসান",
    designation: "Lalbagh, Dhaka — Verified Customer",
    stars: 5,
  },
  {
    quote:
      "স্ল্যাজেঞ্জার অরিজিনাল ট্র্যাক প্যান্ট আর লিংকন ইউকে সোয়েটার অর্ডার করেছিলাম। ঢাকার বাইরে রাজশাহীতে মাত্র ২ দিনে অক্ষত অবস্থায় কুরিয়ারে পেয়েছি। কাপড়ের মান টপ নচ!",
    author: "সাকিব আল মাহমুদ",
    designation: "Rajshahi — Verified Customer",
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
    const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.price || p.basePrice || 1450);
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
      compareAtPrice: p.compareAtPrice || Math.round(variantPrice * 1.5),
      image: prodImg,
      category: p.category?.name || p.category || "Original Export Denim",
      isNew: p.isNew ?? true,
    };
  });

  /* ── Lookbook looks (authentic Gent Apparel products) ── */
  const lookbookLooks: LookbookLook[] = [
    {
      id: "look1",
      image: "/assets/lucky-brand-light-wash.jpg",
      title: "Original Export Denim",
      subtitle: "Lucky Brand 121 Heritage Slim Straight Light Wash",
      slug: "lucky-brand-121-slim-straight-light-wash-denim",
      price: 1450,
      tag: "USA EXPORT PIECE",
    },
    {
      id: "look2",
      image: "/assets/sea-barrier-raw-indigo.jpg",
      title: "Italian Attitude Series",
      subtitle: "Sea Barrier Italian Attitude Raw Indigo Straight Jeans",
      slug: "sea-barrier-italian-attitude-raw-indigo-straight-jeans",
      price: 1550,
      tag: "ITALIAN HERITAGE",
    },
    {
      id: "look3",
      image: "/assets/lincoln-quarter-zip-pullover.jpg",
      title: "Winter Is Back 2026",
      subtitle: "Lincoln UK Layered Mock Quarter-Zip Knit Pullover",
      slug: "lincoln-uk-layered-mock-collar-quarter-zip-knit-pullover",
      price: 1490,
      tag: "UK EXPORT EDITION",
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
          overline: banner.content?.overline || "GENT APPAREL BD",
          color: banner.content?.color || "from-black/85",
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

      {/* 5. TRENDING / NEW ARRIVALS PRODUCTS SECTION */}
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
