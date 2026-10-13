/**
 * GENT APPAREL BD — Authentic Product Catalog & Demo Data
 * Grounded on Facebook Page: https://www.facebook.com/gentapparelbd
 * High-Resolution Photographic Assets from /assets/gent/ and /assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Categories
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Original Export Denim",
    slug: "denim-jeans",
    description: "100% authentic surplus jeans from Lucky Brand, Sea Barrier, Il Granchio and Aeropostale.",
    image: "/assets/lucky-brand-light-wash.jpg",
    productCount: 6,
  },
  {
    name: "Italian Gabardine & Chinos",
    slug: "gabardine-chinos",
    description: "Tailored luxury twill trousers with extra comfort flex from Sea Barrier Italy.",
    image: "/assets/sea-barrier-chino-pants.jpg",
    productCount: 1,
  },
  {
    name: "Activewear & Joggers",
    slug: "joggers-activewear",
    description: "Slazenger export edition athletic track pants, side-striped trousers & joggers.",
    image: "/assets/slazenger-stripe-trackpants.jpg",
    productCount: 2,
  },
  {
    name: "Sweaters & Winter Drops",
    slug: "sweaters-winter",
    description: "Lincoln UK layered mock-collar knitwear, pullovers & winter essentials.",
    image: "/assets/lincoln-quarter-zip-pullover.jpg",
    productCount: 1,
  },
  {
    name: "Casual Polos & Co-Ords",
    slug: "polos-casual-wear",
    description: "Contemporary lifestyle polos, technical cargo joggers & urban coordinates.",
    image: "/assets/banner.jpg",
    productCount: 2,
  },
];

// ═══════════════════════════════════════════
// Collections
// ═══════════════════════════════════════════
export const COLLECTIONS = [
  {
    name: "Winter Is Back 2026",
    slug: "winter-is-back",
    description: "Heavyweight export knits, quarter-zips, brushed fleece joggers and raw denim drops.",
    image: "/assets/lincoln-quarter-zip-pullover.jpg",
    productCount: 4,
  },
  {
    name: "Super Premium Export Denim",
    slug: "super-premium-denim",
    description: "Curated international denim drops with authentic washes, rivets, and flex comfort.",
    image: "/assets/lucky-brand-dark-indigo.jpg",
    productCount: 6,
  },
  {
    name: "Italian Attitude Series",
    slug: "italian-attitude",
    description: "Classic Italian craftsmanship, genuine leather badges and extra comfort chinos.",
    image: "/assets/sea-barrier-raw-indigo.jpg",
    productCount: 3,
  },
  {
    name: "Athletic Leisure & Streetwear",
    slug: "athletic-streetwear",
    description: "Slazenger athletic stripe trousers, technical track joggers and everyday street comfort.",
    image: "/assets/slazenger-cuffed-joggers.jpg",
    productCount: 3,
  },
];

export interface DetailedProduct extends ProductCardProps {
  description: string;
  categorySlug: string;
  collectionSlug?: string;
  fabric: string;
  craftsmanship: string;
  colorName: string;
  isFeatured?: boolean;
  basePrice?: number;
  status?: string;
  specifications: { label: string; value: string }[];
  deliveryInfo: string;
  variants: {
    id: string;
    sku: string;
    size: string;
    color: string;
    price: number;
    stock: number;
    images: string[];
  }[];
}

// ═══════════════════════════════════════════
// All 10 Authentic Gent Apparel BD Products
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: DetailedProduct[] = [
  {
    id: "ga-01",
    name: "Lucky Brand 121 Heritage Slim Straight Light Wash Denim",
    slug: "lucky-brand-121-slim-straight-light-wash-denim",
    price: 1450,
    compareAtPrice: 2250,
    image: "/assets/lucky-brand-light-wash.jpg",
    images: [
      "/assets/lucky-brand-light-wash.jpg",
      "/assets/lucky-brand-dark-indigo.jpg",
    ],
    category: "Original Export Denim",
    categorySlug: "denim-jeans",
    collectionSlug: "super-premium-denim",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 45,
    fabric: "98% Premium Ring-Spun Cotton, 2% Elastane Flex Denim",
    craftsmanship: "Artisan Hand-Sanded Whiskering & Copper Hardware",
    colorName: "Vintage Light Indigo Wash",
    description:
      "100% authentic original export surplus Lucky Brand men's denim jeans. Designed with a timeless light vintage wash, authentic whiskering, and subtle hand-sanded fades. Features premium stretch cotton for unmatched flexibility and all-day comfort, signature heavy-duty copper rivets, smooth zip fly, and classic 5-pocket styling. Verified factory tags attached.",
    specifications: [
      { label: "Brand Origin", value: "Lucky Brand (USA Authentic Export)" },
      { label: "Fit Type", value: "121 Slim Straight Leg Profile" },
      { label: "Fabric Composition", value: "98% Combed Cotton, 2% Elastane" },
      { label: "Wash Type", value: "Artisan Light Stone Wash with Whiskers" },
      { label: "Closure", value: "Branded Metal Shank Button & Heavy-Duty Zip Fly" },
      { label: "Hardware", value: "Reinforced Rivets & Contrast Amber Stitching" },
      { label: "Available Sizes", value: "30, 32, 34, 36, 38, 40 (True to Size)" },
      { label: "Care Instructions", value: "Machine wash cold inside out, tumble dry low" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)। ডেলিভারির সময় পার্সেল খুলে চেক করে নেওয়ার সুবিধা রয়েছে।",
    variants: [
      { id: "v-01-30", sku: "LB-121-LT-30", size: "30", color: "Light Wash", price: 1450, stock: 8, images: ["/assets/lucky-brand-light-wash.jpg"] },
      { id: "v-01-32", sku: "LB-121-LT-32", size: "32", color: "Light Wash", price: 1450, stock: 12, images: ["/assets/lucky-brand-light-wash.jpg"] },
      { id: "v-01-34", sku: "LB-121-LT-34", size: "34", color: "Light Wash", price: 1450, stock: 10, images: ["/assets/lucky-brand-light-wash.jpg"] },
      { id: "v-01-36", sku: "LB-121-LT-36", size: "36", color: "Light Wash", price: 1450, stock: 9, images: ["/assets/lucky-brand-light-wash.jpg"] },
      { id: "v-01-38", sku: "LB-121-LT-38", size: "38", color: "Light Wash", price: 1450, stock: 6, images: ["/assets/lucky-brand-light-wash.jpg"] },
    ],
  },
  {
    id: "ga-02",
    name: "Lucky Brand 221 Original Straight Fit Deep Indigo Denim",
    slug: "lucky-brand-221-original-straight-deep-indigo-denim",
    price: 1490,
    compareAtPrice: 2350,
    image: "/assets/lucky-brand-dark-indigo.jpg",
    images: [
      "/assets/lucky-brand-dark-indigo.jpg",
      "/assets/lucky-brand-light-wash.jpg",
    ],
    category: "Original Export Denim",
    categorySlug: "denim-jeans",
    collectionSlug: "super-premium-denim",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 50,
    fabric: "99% Cotton, 1% Spandex Comfort Flex Stretch Denim",
    craftsmanship: "Deep Indigo Dye, Contrast Stitching & Bar-Tack Reinforcement",
    colorName: "Deep Indigo / Dark Rinse",
    description:
      "Authentic export quality Lucky Brand deep indigo rinse jeans. Crafted with high-grade indigo dye and clean contrast amber stitching. Offers a relaxed straight-leg profile with comfortable waist rise and durable heavy-duty rivets. An essential staple that pairs effortlessly with t-shirts, casual polos, or formal shirts.",
    specifications: [
      { label: "Brand Origin", value: "Lucky Brand (USA Export Surplus)" },
      { label: "Fit Type", value: "221 Original Straight Fit" },
      { label: "Fabric Composition", value: "99% Cotton, 1% Spandex Stretch Denim" },
      { label: "Wash Type", value: "Deep Indigo Clean Rinse with Subtle Slub" },
      { label: "Hardware", value: "Branded Metal Rivets & Solid Brass Zipper" },
      { label: "Available Sizes", value: "30, 32, 34, 36, 38, 40" },
      { label: "Waist Style", value: "Mid-Rise Classic Waistband" },
      { label: "Pocket Style", value: "Classic 5-Pocket with Coin Pocket" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)। ডেলিভারির সময় পার্সেল খুলে চেক করে নেওয়ার সুবিধা রয়েছে।",
    variants: [
      { id: "v-02-30", sku: "LB-221-IND-30", size: "30", color: "Deep Indigo", price: 1490, stock: 10, images: ["/assets/lucky-brand-dark-indigo.jpg"] },
      { id: "v-02-32", sku: "LB-221-IND-32", size: "32", color: "Deep Indigo", price: 1490, stock: 15, images: ["/assets/lucky-brand-dark-indigo.jpg"] },
      { id: "v-02-34", sku: "LB-221-IND-34", size: "34", color: "Deep Indigo", price: 1490, stock: 12, images: ["/assets/lucky-brand-dark-indigo.jpg"] },
      { id: "v-02-36", sku: "LB-221-IND-36", size: "36", color: "Deep Indigo", price: 1490, stock: 8, images: ["/assets/lucky-brand-dark-indigo.jpg"] },
      { id: "v-02-38", sku: "LB-221-IND-38", size: "38", color: "Deep Indigo", price: 1490, stock: 5, images: ["/assets/lucky-brand-dark-indigo.jpg"] },
    ],
  },
  {
    id: "ga-03",
    name: "Sea Barrier Italian Attitude Raw Indigo Straight Jeans",
    slug: "sea-barrier-italian-attitude-raw-indigo-straight-jeans",
    price: 1550,
    compareAtPrice: 2400,
    image: "/assets/sea-barrier-raw-indigo.jpg",
    images: [
      "/assets/sea-barrier-raw-indigo.jpg",
      "/assets/sea-barrier-medium-wash.jpg",
    ],
    category: "Original Export Denim",
    categorySlug: "denim-jeans",
    collectionSlug: "italian-attitude",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 38,
    fabric: "12.5 oz Premium Cotton Denim with Subtle Flex",
    craftsmanship: "Italian Heritage Cut, Leather Waist Patch & Wave Embroidery",
    colorName: "Raw Indigo Blue",
    description:
      "Original Italian export surplus Sea Barrier denim jeans. Features authentic leather back waistband patch, signature wave pocket embroidery, reinforced bar tacks, and premium Italian tailoring attitude. Clean dark rinse suitable for both casual outings and smart-casual office styling.",
    specifications: [
      { label: "Brand Origin", value: "Sea Barrier (Italy Authentic Surplus)" },
      { label: "Fit Type", value: "Regular Straight Continental Cut" },
      { label: "Fabric Weight", value: "12.5 oz Mid-Weight Denim" },
      { label: "Patch Detailing", value: "Embossed Genuine Leather Back Badge" },
      { label: "Back Pocket", value: "Signature Italian Attitude Wave Stitch" },
      { label: "Available Sizes", value: "32, 34, 36, 38, 40, 42" },
      { label: "Colorway", value: "Raw Indigo with Tonal Navy Accents" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)।",
    variants: [
      { id: "v-03-32", sku: "SB-RAW-32", size: "32", color: "Raw Indigo", price: 1550, stock: 10, images: ["/assets/sea-barrier-raw-indigo.jpg"] },
      { id: "v-03-34", sku: "SB-RAW-34", size: "34", color: "Raw Indigo", price: 1550, stock: 12, images: ["/assets/sea-barrier-raw-indigo.jpg"] },
      { id: "v-03-36", sku: "SB-RAW-36", size: "36", color: "Raw Indigo", price: 1550, stock: 8, images: ["/assets/sea-barrier-raw-indigo.jpg"] },
      { id: "v-03-38", sku: "SB-RAW-38", size: "38", color: "Raw Indigo", price: 1550, stock: 8, images: ["/assets/sea-barrier-raw-indigo.jpg"] },
    ],
  },
  {
    id: "ga-04",
    name: "Sea Barrier Italian Attitude Classic Medium Wash Flex Denim",
    slug: "sea-barrier-classic-medium-wash-flex-denim",
    price: 1520,
    compareAtPrice: 2300,
    image: "/assets/sea-barrier-medium-wash.jpg",
    images: [
      "/assets/sea-barrier-medium-wash.jpg",
      "/assets/sea-barrier-raw-indigo.jpg",
    ],
    category: "Original Export Denim",
    categorySlug: "denim-jeans",
    collectionSlug: "italian-attitude",
    isNew: false,
    isFeatured: true,
    isBestseller: false,
    stock: 40,
    fabric: "98% Combed Cotton, 2% Lycra Flex Denim",
    craftsmanship: "Stone Enzyme Medium Wash, Inner Printed Waistband & Metal Crest",
    colorName: "Classic Medium Blue",
    description:
      "100% genuine export quality Sea Barrier Italian attitude trousers jeans. Hand-treated medium blue wash with authentic Italian hardware, branded interior waistband tape, and comfort stretch fit. Styled with signature tonal rear pocket detailing and yellow brand hangtag.",
    specifications: [
      { label: "Brand Origin", value: "Sea Barrier (Italy Collection)" },
      { label: "Fit Type", value: "Modern Slim Straight Leg" },
      { label: "Stretch Technology", value: "2-Way Lycra Flex Recovery" },
      { label: "Inner Waistband", value: "Branded Jacquard Tape 'Sea Barrier'" },
      { label: "Hardware", value: "Antique Silver Shank Button & Branded Rivets" },
      { label: "Available Sizes", value: "30, 32, 34, 36, 38, 40" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)।",
    variants: [
      { id: "v-04-30", sku: "SB-MED-30", size: "30", color: "Medium Blue", price: 1520, stock: 8, images: ["/assets/sea-barrier-medium-wash.jpg"] },
      { id: "v-04-32", sku: "SB-MED-32", size: "32", color: "Medium Blue", price: 1520, stock: 12, images: ["/assets/sea-barrier-medium-wash.jpg"] },
      { id: "v-04-34", sku: "SB-MED-34", size: "34", color: "Medium Blue", price: 1520, stock: 10, images: ["/assets/sea-barrier-medium-wash.jpg"] },
      { id: "v-04-36", sku: "SB-MED-36", size: "36", color: "Medium Blue", price: 1520, stock: 10, images: ["/assets/sea-barrier-medium-wash.jpg"] },
    ],
  },
  {
    id: "ga-05",
    name: "IL Granchio Luxury Wear Italian Collection Stretch Denim",
    slug: "il-granchio-luxury-wear-italian-collection-stretch-denim",
    price: 1590,
    compareAtPrice: 2500,
    image: "/assets/il-granchio-italian-denim.jpg",
    images: [
      "/assets/il-granchio-italian-denim.jpg",
      "/assets/sea-barrier-medium-wash.jpg",
    ],
    category: "Original Export Denim",
    categorySlug: "denim-jeans",
    collectionSlug: "italian-attitude",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 35,
    fabric: "Premium Italian Spec Cotton-Rich Stretch Twill Denim",
    craftsmanship: "Ocean Stone Wash, Genuine Leather Back Badge & Coin Pocket Tag",
    colorName: "Ocean Blue Stone Wash",
    description:
      "Authentic export piece from Italy's luxury casual label IL Granchio. Tailored with refined ocean blue stone washing, signature genuine leather badge, wave stitch back pockets, and coin-pocket metal accent. Unbeatable comfort, soft hand-feel, and sophisticated continental silhouette.",
    specifications: [
      { label: "Brand Origin", value: "IL Granchio Luxury Wear (Italy)" },
      { label: "Fit Type", value: "Italian Tapered Straight Fit" },
      { label: "Fabric", value: "98% Long-Staple Cotton, 2% Elastane" },
      { label: "Back Badge", value: "Tan Saddle Leather with Foil Stamping" },
      { label: "Detailing", value: "Dual Color Needlework & Metal Tab on Coin Pocket" },
      { label: "Available Sizes", value: "30, 32, 34, 36, 38, 40" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)।",
    variants: [
      { id: "v-05-30", sku: "ILG-30", size: "30", color: "Ocean Blue", price: 1590, stock: 6, images: ["/assets/il-granchio-italian-denim.jpg"] },
      { id: "v-05-32", sku: "ILG-32", size: "32", color: "Ocean Blue", price: 1590, stock: 10, images: ["/assets/il-granchio-italian-denim.jpg"] },
      { id: "v-05-34", sku: "ILG-34", size: "34", color: "Ocean Blue", price: 1590, stock: 10, images: ["/assets/il-granchio-italian-denim.jpg"] },
      { id: "v-05-36", sku: "ILG-36", size: "36", color: "Ocean Blue", price: 1590, stock: 9, images: ["/assets/il-granchio-italian-denim.jpg"] },
    ],
  },
  {
    id: "ga-06",
    name: "Aeropostale Vintage Washed Charcoal Grey Denim Jeans",
    slug: "aeropostale-vintage-washed-charcoal-grey-denim-jeans",
    price: 1390,
    compareAtPrice: 2100,
    image: "/assets/aeropostale-charcoal-denim.jpg",
    images: [
      "/assets/aeropostale-charcoal-denim.jpg",
      "/assets/lucky-brand-dark-indigo.jpg",
    ],
    category: "Original Export Denim",
    categorySlug: "denim-jeans",
    collectionSlug: "super-premium-denim",
    isNew: false,
    isFeatured: true,
    isBestseller: false,
    stock: 30,
    fabric: "98% Cotton, 2% Elastane Charcoal Wash Denim",
    craftsmanship: "Acid-Free Mineral Dye, Sanded Thigh Highlight & Tonal Stitch",
    colorName: "Faded Charcoal Grey / Mineral Black",
    description:
      "100% authentic original export Aeropostale men's slim straight denim. Finished in an edgy washed charcoal grey tone with natural fading on the thighs and knees. Engineered with authentic stretch cotton for all-day mobility and urban casual vibes.",
    specifications: [
      { label: "Brand Origin", value: "Aeropostale (USA Authentic Export)" },
      { label: "Fit Type", value: "Slim Straight Urban Cut" },
      { label: "Fabric", value: "Charcoal Slub Stretch Denim" },
      { label: "Finish", value: "Vintage Mineral Wash with Whiskering" },
      { label: "Sizes Available", value: "30, 32, 34, 36, 38" },
      { label: "Pocket Rivets", value: "Matte Black Oxide Hardware" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)।",
    variants: [
      { id: "v-06-30", sku: "AERO-GRY-30", size: "30", color: "Charcoal Grey", price: 1390, stock: 6, images: ["/assets/aeropostale-charcoal-denim.jpg"] },
      { id: "v-06-32", sku: "AERO-GRY-32", size: "32", color: "Charcoal Grey", price: 1390, stock: 10, images: ["/assets/aeropostale-charcoal-denim.jpg"] },
      { id: "v-06-34", sku: "AERO-GRY-34", size: "34", color: "Charcoal Grey", price: 1390, stock: 8, images: ["/assets/aeropostale-charcoal-denim.jpg"] },
      { id: "v-06-36", sku: "AERO-GRY-36", size: "36", color: "Charcoal Grey", price: 1390, stock: 6, images: ["/assets/aeropostale-charcoal-denim.jpg"] },
    ],
  },
  {
    id: "ga-07",
    name: "Sea Barrier E-X-TRA Comfort Chino Gabardine Pants",
    slug: "sea-barrier-extra-comfort-chino-gabardine-pants",
    price: 1350,
    compareAtPrice: 2000,
    image: "/assets/sea-barrier-chino-pants.jpg",
    images: [
      "/assets/sea-barrier-chino-pants.jpg",
      "/assets/slazenger-stripe-trackpants.jpg",
    ],
    category: "Italian Gabardine & Chinos",
    categorySlug: "gabardine-chinos",
    collectionSlug: "italian-attitude",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 42,
    fabric: "100% Export-Grade Cotton Twill Gabardine with Comfort Flex",
    craftsmanship: "Tailored Welt Rear Pockets, Italian Button Fly & Flex Waistband",
    colorName: "Slate Grey / Charcoal Taupe",
    description:
      "Authentic export quality Sea Barrier Extra Comfort gabardine trousers. Engineered with soft-touch combed cotton twill, buttoned welt rear pockets, and tailored front slash pockets. The benchmark of Italian smart-casual comfort, pairing seamlessly with polos, shirts, or blazers.",
    specifications: [
      { label: "Brand Origin", value: "Sea Barrier Extra Comfort (Italy)" },
      { label: "Trousers Type", value: "Smart Casual Chino / Gabardine" },
      { label: "Weave", value: "High-Density Compact Twill Gabardine" },
      { label: "Pockets", value: "Dual Rear Jet Pockets with Horn Buttons" },
      { label: "Rise & Leg", value: "Mid-Rise Clean Tapered Silhouette" },
      { label: "Sizes Available", value: "30, 32, 34, 36, 38, 40, 42" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)।",
    variants: [
      { id: "v-07-30", sku: "SB-CHINO-30", size: "30", color: "Slate Grey", price: 1350, stock: 8, images: ["/assets/sea-barrier-chino-pants.jpg"] },
      { id: "v-07-32", sku: "SB-CHINO-32", size: "32", color: "Slate Grey", price: 1350, stock: 12, images: ["/assets/sea-barrier-chino-pants.jpg"] },
      { id: "v-07-34", sku: "SB-CHINO-34", size: "34", color: "Slate Grey", price: 1350, stock: 10, images: ["/assets/sea-barrier-chino-pants.jpg"] },
      { id: "v-07-36", sku: "SB-CHINO-36", size: "36", color: "Slate Grey", price: 1350, stock: 8, images: ["/assets/sea-barrier-chino-pants.jpg"] },
      { id: "v-07-38", sku: "SB-CHINO-38", size: "38", color: "Slate Grey", price: 1350, stock: 4, images: ["/assets/sea-barrier-chino-pants.jpg"] },
    ],
  },
  {
    id: "ga-08",
    name: "Slazenger Heritage Athletic Stripe Track Pants",
    slug: "slazenger-heritage-athletic-stripe-track-pants",
    price: 850,
    compareAtPrice: 1400,
    image: "/assets/slazenger-stripe-trackpants.jpg",
    images: [
      "/assets/slazenger-stripe-trackpants.jpg",
      "/assets/slazenger-cuffed-joggers.jpg",
    ],
    category: "Activewear & Joggers",
    categorySlug: "joggers-activewear",
    collectionSlug: "athletic-streetwear",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 60,
    fabric: "Premium Interlock Knit (65% Cotton, 35% Polyester)",
    craftsmanship: "Dual White Racing Piping & High-Density Embroidered Panther",
    colorName: "Classic Jet Black with White Piping",
    description:
      "100% authentic export Slazenger activewear trousers. Engineered with breathable double-knit poly-cotton fleece, elasticated waistband with interior drawcord, side zipper pockets, and iconic Slazenger panther logo embroidery. Clean white side racing stripes for an athletic edge.",
    specifications: [
      { label: "Brand Origin", value: "Slazenger UK (Export Authentic)" },
      { label: "Product Type", value: "Athletic Track Trousers / Training Pants" },
      { label: "Waistband", value: "Ribbed Elastic with Heavy-Duty Drawstring" },
      { label: "Pockets", value: "Deep Side Pockets for Phone & Keys" },
      { label: "Logo", value: "Embroidered Slazenger Panther Crest" },
      { label: "Sizes Available", value: "S (28-30), M (31-33), L (34-36), XL (37-39), XXL (40-42)" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)।",
    variants: [
      { id: "v-08-s", sku: "SLZ-ST-S", size: "S (28-30)", color: "Black/White", price: 850, stock: 12, images: ["/assets/slazenger-stripe-trackpants.jpg"] },
      { id: "v-08-m", sku: "SLZ-ST-M", size: "M (31-33)", color: "Black/White", price: 850, stock: 18, images: ["/assets/slazenger-stripe-trackpants.jpg"] },
      { id: "v-08-l", sku: "SLZ-ST-L", size: "L (34-36)", color: "Black/White", price: 850, stock: 15, images: ["/assets/slazenger-stripe-trackpants.jpg"] },
      { id: "v-08-xl", sku: "SLZ-ST-XL", size: "XL (37-39)", color: "Black/White", price: 850, stock: 10, images: ["/assets/slazenger-stripe-trackpants.jpg"] },
      { id: "v-08-xxl", sku: "SLZ-ST-XXL", size: "XXL (40-42)", color: "Black/White", price: 850, stock: 5, images: ["/assets/slazenger-stripe-trackpants.jpg"] },
    ],
  },
  {
    id: "ga-09",
    name: "Slazenger Export Edition Cuffed Ankle Joggers",
    slug: "slazenger-export-edition-cuffed-ankle-joggers",
    price: 890,
    compareAtPrice: 1450,
    image: "/assets/slazenger-cuffed-joggers.jpg",
    images: [
      "/assets/slazenger-cuffed-joggers.jpg",
      "/assets/slazenger-stripe-trackpants.jpg",
    ],
    category: "Activewear & Joggers",
    categorySlug: "joggers-activewear",
    collectionSlug: "athletic-streetwear",
    isNew: false,
    isFeatured: true,
    isBestseller: false,
    stock: 55,
    fabric: "Brushed Fleece Cotton-Poly Blend (280 GSM)",
    craftsmanship: "Cuffed Ankle Ribbing, Full Bar-Tack & Factory Hangtags Attached",
    colorName: "Pitch Black with White Contrast Detail",
    description:
      "Original factory-tagged Slazenger export trousers featuring ribbed cuffed ankles, premium drawstrings, deep welt pockets, and embroidered panther crest. Designed for workouts, weekend lounging, or high-comfort travel with cozy brushed cotton interior.",
    specifications: [
      { label: "Brand Origin", value: "Slazenger UK (Factory Surplus)" },
      { label: "Jogger Cut", value: "Tapered Leg with Ribbed Elastic Ankle Cuffs" },
      { label: "Fabric Weight", value: "280 GSM Brushed Soft Cotton Fleece" },
      { label: "Tags", value: "Original Slazenger Hangtags & Barcodes" },
      { label: "Sizes Available", value: "M, L, XL, XXL" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)।",
    variants: [
      { id: "v-09-m", sku: "SLZ-CF-M", size: "M (30-32)", color: "Pitch Black", price: 890, stock: 15, images: ["/assets/slazenger-cuffed-joggers.jpg"] },
      { id: "v-09-l", sku: "SLZ-CF-L", size: "L (33-35)", color: "Pitch Black", price: 890, stock: 20, images: ["/assets/slazenger-cuffed-joggers.jpg"] },
      { id: "v-09-xl", sku: "SLZ-CF-XL", size: "XL (36-38)", color: "Pitch Black", price: 890, stock: 12, images: ["/assets/slazenger-cuffed-joggers.jpg"] },
      { id: "v-09-xxl", sku: "SLZ-CF-XXL", size: "XXL (39-42)", color: "Pitch Black", price: 890, stock: 8, images: ["/assets/slazenger-cuffed-joggers.jpg"] },
    ],
  },
  {
    id: "ga-10",
    name: "Lincoln UK Layered Mock-Collar Quarter-Zip Knit Pullover",
    slug: "lincoln-uk-layered-mock-collar-quarter-zip-knit-pullover",
    price: 1490,
    compareAtPrice: 2600,
    image: "/assets/lincoln-quarter-zip-pullover.jpg",
    images: [
      "/assets/lincoln-quarter-zip-pullover.jpg",
      "/assets/sea-barrier-chino-pants.jpg",
    ],
    category: "Sweaters & Winter Drops",
    categorySlug: "sweaters-winter",
    collectionSlug: "winter-is-back",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 35,
    fabric: "Fine Gauge Cotton-Cashmere Blend Knit with Woven Plaid Trim",
    craftsmanship: "2-in-1 Layered Plaid Collar Inset, Antique Zipper Pull & Ribbed Cuffs",
    colorName: "Heather Ice Blue / Melange Grey",
    description:
      "Authentic UK export piece from Lincoln (£24 retail tag attached = approx ৳3,800). Crafted with soft ribbed cotton knit in heather ice blue, featuring an integrated woven plaid shirt collar insert and metal quarter-zip puller. Sophisticated 2-in-1 layered sweater look without the bulk. Perfect for winter, office, and smart dinners.",
    specifications: [
      { label: "Brand Origin", value: "Lincoln (UK Official Export Surplus)" },
      { label: "Original Retail Tag", value: "£24.00 (Attached with Barcode)" },
      { label: "Sweater Style", value: "Layered Mock Collar Quarter-Zip Pullover" },
      { label: "Collar Trim", value: "Woven Tartan Plaid Shirt Collar Inset" },
      { label: "Fabric", value: "Fine Cotton Knit with Breathable Insulation" },
      { label: "Sizes Available", value: "S, M, L, XL, XXL (European Sizing)" },
      { label: "Season", value: "Winter Drop 2026 Collection" },
    ],
    deliveryInfo:
      "ঢাকা সিটির ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যাশ অন ডেলিভারি (চার্জ ৮০৳)। ঢাকার বাইরে সারাদেশে ২-৩ দিনের মধ্যে কুরিয়ার ডেলিভারি (চার্জ ১৫০৳)।",
    variants: [
      { id: "v-10-s", sku: "LNC-BLU-S", size: "S", color: "Heather Ice Blue", price: 1490, stock: 5, images: ["/assets/lincoln-quarter-zip-pullover.jpg"] },
      { id: "v-10-m", sku: "LNC-BLU-M", size: "M", color: "Heather Ice Blue", price: 1490, stock: 10, images: ["/assets/lincoln-quarter-zip-pullover.jpg"] },
      { id: "v-10-l", sku: "LNC-BLU-L", size: "L", color: "Heather Ice Blue", price: 1490, stock: 10, images: ["/assets/lincoln-quarter-zip-pullover.jpg"] },
      { id: "v-10-xl", sku: "LNC-BLU-XL", size: "XL", color: "Heather Ice Blue", price: 1490, stock: 6, images: ["/assets/lincoln-quarter-zip-pullover.jpg"] },
      { id: "v-10-xxl", sku: "LNC-BLU-XXL", size: "XXL", color: "Heather Ice Blue", price: 1490, stock: 4, images: ["/assets/lincoln-quarter-zip-pullover.jpg"] },
    ],
  },
];

export function getProductsByCategory(categorySlug: string): DetailedProduct[] {
  return ALL_PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): DetailedProduct | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): DetailedProduct[] {
  return ALL_PRODUCTS.filter((p) => p.isFeatured);
}

export function getProductsByCollection(collectionSlug: string): DetailedProduct[] {
  return ALL_PRODUCTS.filter((p) => p.collectionSlug === collectionSlug);
}

