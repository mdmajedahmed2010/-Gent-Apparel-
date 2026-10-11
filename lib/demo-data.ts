/**
 * LIHAAZ BY MINHAAZ — Authentic Product Catalog & Demo Data
 * Grounded on Facebook Page: https://www.facebook.com/lihaazbyminhaaz/
 * High-Resolution Photographic Assets from /assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Categories
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Royal Heritage & Wedding",
    slug: "royal-heritage",
    description: "Architectural Mughal Chikankari, Zari threadwork and heirloom bridal menswear",
    image: "/assets/731105183_1007378862271175_2839197506608792838_n.jpg",
    productCount: 2,
  },
  {
    name: "Festive Eid Collection",
    slug: "festive-eid",
    description: "Raw silk jacquards, shimmering champagne tones and ornate festive panjabis",
    image: "/assets/731173450_1008107675531627_7884714671446302908_n.jpg",
    productCount: 3,
  },
  {
    name: "Classic Signature Cotton",
    slug: "classic-cotton",
    description: "Fine Egyptian Giza cotton, muslin chikankari and bespoke damask accents",
    image: "/assets/728570183_1003994135942981_1995203835787078592_n.jpg",
    productCount: 4,
  },
  {
    name: "Evening & Black Edition",
    slug: "evening-black",
    description: "Deep obsidian silk-cotton with subtle tonal sequin work and antique crest studs",
    image: "/assets/731111670_1005638735778521_305236285496504724_n.jpg",
    productCount: 2,
  },
  {
    name: "Luxury Silk & Jacquard",
    slug: "luxury-silk-jacquard",
    description: "Vintage Persian medallion weaves, fine tapestry and concealed plackets",
    image: "/assets/727886407_1003812822627779_5320585349107522996_n.jpg",
    productCount: 2,
  },
];

export interface DetailedProduct extends ProductCardProps {
  description: string;
  categorySlug: string;
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
// All 10 Authentic Lihaaz by Minhaaz Products
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: DetailedProduct[] = [
  {
    id: "lm-01",
    name: "The Royal Mughal Arch Jharokha Chikankari Panjabi",
    slug: "royal-mughal-arch-jharokha-chikankari-panjabi",
    price: 5450,
    compareAtPrice: 6500,
    image: "/assets/731105183_1007378862271175_2839197506608792838_n.jpg",
    images: [
      "/assets/731105183_1007378862271175_2839197506608792838_n.jpg",
      "/assets/732253170_1009973652011696_2448383532522583757_n.jpg",
    ],
    category: "Royal Heritage & Wedding",
    categorySlug: "royal-heritage",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 25,
    fabric: "Fine Chanderi Silk Blend",
    craftsmanship: "Mughal Jharokha Chikankari & Tone-on-Tone Sequin",
    colorName: "Antique Ivory",
    description:
      "An architectural masterpiece in bespoke menswear. Handcrafted with intricate ivory Chikankari threadwork depicting royal Mughal arches, jharokhas, and botanical lattice jaal. Adorned with heirloom antique gold medallion buttons on the placket and finished with an immaculate mandarin collar. Tailored for grooms, reception galas, and extraordinary festive occasions.",
    specifications: [
      { label: "Fabric", value: "Fine Chanderi Silk Blend with Lustrous Sheen" },
      { label: "Embroidery", value: "Mughal Arch & Botanical Jharokha Chikankari" },
      { label: "Buttons", value: "Handcrafted Antique Gold Medallions" },
      { label: "Collar", value: "Reinforced Structured Mandarin Collar" },
      { label: "Fit", value: "Tailored Royal Silhouette" },
      { label: "Care Instructions", value: "Dry Clean Only to preserve hand-embroidery" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-01-38", sku: "LM-MGH-IVO-38", size: "38 (Chest 40)", color: "Antique Ivory", price: 5450, stock: 5, images: ["/assets/731105183_1007378862271175_2839197506608792838_n.jpg"] },
      { id: "lm-01-40", sku: "LM-MGH-IVO-40", size: "40 (Chest 42)", color: "Antique Ivory", price: 5450, stock: 8, images: ["/assets/731105183_1007378862271175_2839197506608792838_n.jpg"] },
      { id: "lm-01-42", sku: "LM-MGH-IVO-42", size: "42 (Chest 44)", color: "Antique Ivory", price: 5450, stock: 7, images: ["/assets/731105183_1007378862271175_2839197506608792838_n.jpg"] },
      { id: "lm-01-44", sku: "LM-MGH-IVO-44", size: "44 (Chest 46)", color: "Antique Ivory", price: 5450, stock: 4, images: ["/assets/731105183_1007378862271175_2839197506608792838_n.jpg"] },
      { id: "lm-01-46", sku: "LM-MGH-IVO-46", size: "46 (Chest 48)", color: "Antique Ivory", price: 5450, stock: 3, images: ["/assets/731105183_1007378862271175_2839197506608792838_n.jpg"] },
    ],
  },
  {
    id: "lm-02",
    name: "The Golden Blossom Jacquard Raw Silk Panjabi",
    slug: "golden-blossom-jacquard-raw-silk-panjabi",
    price: 4950,
    compareAtPrice: 5800,
    image: "/assets/731173450_1008107675531627_7884714671446302908_n.jpg",
    images: [
      "/assets/731173450_1008107675531627_7884714671446302908_n.jpg",
      "/assets/banner.jpg",
    ],
    category: "Festive Eid Collection",
    categorySlug: "festive-eid",
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    stock: 22,
    fabric: "Pure Raw Silk Jacquard",
    craftsmanship: "Metallic Botanical Branch & Blossom Weave",
    colorName: "Champagne Gold",
    description:
      "Featured prominently on our flagship brand campaign. Woven from rich Champagne Gold raw silk jacquard with glistening branch and floral blossom motifs. Detailed with antique brass engraved dome buttons and tailored for an authoritative, regal festive silhouette.",
    specifications: [
      { label: "Fabric", value: "100% Premium Raw Silk Jacquard" },
      { label: "Weave", value: "Metallic Botanical Branch & Flower Tapestry" },
      { label: "Buttons", value: "Antique Brass Engraved Dome Buttons" },
      { label: "Collar", value: "Structured Mandarin Collar with Piping" },
      { label: "Occasion", value: "Eid Celebrations, Holud, Reception" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-02-38", sku: "LM-BLS-GLD-38", size: "38 (Chest 40)", color: "Champagne Gold", price: 4950, stock: 4, images: ["/assets/731173450_1008107675531627_7884714671446302908_n.jpg"] },
      { id: "lm-02-40", sku: "LM-BLS-GLD-40", size: "40 (Chest 42)", color: "Champagne Gold", price: 4950, stock: 7, images: ["/assets/731173450_1008107675531627_7884714671446302908_n.jpg"] },
      { id: "lm-02-42", sku: "LM-BLS-GLD-42", size: "42 (Chest 44)", color: "Champagne Gold", price: 4950, stock: 6, images: ["/assets/731173450_1008107675531627_7884714671446302908_n.jpg"] },
      { id: "lm-02-44", sku: "LM-BLS-GLD-44", size: "44 (Chest 46)", color: "Champagne Gold", price: 4950, stock: 3, images: ["/assets/731173450_1008107675531627_7884714671446302908_n.jpg"] },
    ],
  },
  {
    id: "lm-03",
    name: "The Midnight Sequin & Black Threadwork Panjabi",
    slug: "midnight-sequin-black-threadwork-panjabi",
    price: 5200,
    compareAtPrice: 6200,
    image: "/assets/731111670_1005638735778521_305236285496504724_n.jpg",
    images: [
      "/assets/731111670_1005638735778521_305236285496504724_n.jpg",
      "/assets/731093757_1006440569031671_1421850103096556184_n.jpg",
    ],
    category: "Evening & Black Edition",
    categorySlug: "evening-black",
    isNew: true,
    isFeatured: true,
    stock: 18,
    fabric: "Premium Silk-Cotton Blend",
    craftsmanship: "Tonal Black Sequin & Silk Resham Jaal",
    colorName: "Midnight Obsidian",
    description:
      "Subtle drama meets timeless noir elegance. Deep Obsidian silk-cotton canvas embellished with tonal black sequin highlights and delicate threadwork floral jaal that catches light with every movement. Crowned with antique silver filigree square buttons with embossed crest detailing.",
    specifications: [
      { label: "Fabric", value: "Premium Silk-Cotton Canvas" },
      { label: "Embellishment", value: "Tonal Black Sequins & Resham Needlework" },
      { label: "Buttons", value: "Antique Silver Filigree Square Crest Studs" },
      { label: "Collar", value: "Structured High Mandarin Collar" },
      { label: "Style", value: "Contemporary Regal Evening Wear" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-03-38", sku: "LM-MID-BLK-38", size: "38 (Chest 40)", color: "Midnight Black", price: 5200, stock: 3, images: ["/assets/731111670_1005638735778521_305236285496504724_n.jpg"] },
      { id: "lm-03-40", sku: "LM-MID-BLK-40", size: "40 (Chest 42)", color: "Midnight Black", price: 5200, stock: 6, images: ["/assets/731111670_1005638735778521_305236285496504724_n.jpg"] },
      { id: "lm-03-42", sku: "LM-MID-BLK-42", size: "42 (Chest 44)", color: "Midnight Black", price: 5200, stock: 5, images: ["/assets/731111670_1005638735778521_305236285496504724_n.jpg"] },
      { id: "lm-03-44", sku: "LM-MID-BLK-44", size: "44 (Chest 46)", color: "Midnight Black", price: 5200, stock: 4, images: ["/assets/731111670_1005638735778521_305236285496504724_n.jpg"] },
    ],
  },
  {
    id: "lm-04",
    name: "The Slate Diamond Lattice Chikankari Panjabi",
    slug: "slate-diamond-lattice-chikankari-panjabi",
    price: 4800,
    compareAtPrice: 5600,
    image: "/assets/731093757_1006440569031671_1421850103096556184_n.jpg",
    images: [
      "/assets/731093757_1006440569031671_1421850103096556184_n.jpg",
      "/assets/731111670_1005638735778521_305236285496504724_n.jpg",
    ],
    category: "Festive Eid Collection",
    categorySlug: "festive-eid",
    isNew: true,
    isFeatured: true,
    stock: 20,
    fabric: "Hand-spun Cotton Silk",
    craftsmanship: "Geometric Diamond Lattice Chikankari",
    colorName: "Slate Charcoal",
    description:
      "A masterclass in geometric finesse. Slate charcoal body crafted with geometric diamond lattice Chikankari and intricate eyelet detailing. Features a cascading row of hand-wrapped fabric potli loop buttons down the split mandarin neckline.",
    specifications: [
      { label: "Fabric", value: "Hand-spun Cotton Silk" },
      { label: "Embroidery", value: "Geometric Diamond Lattice Chikankari" },
      { label: "Placket Detail", value: "Cascading Fabric-wrapped Potli Buttons" },
      { label: "Collar", value: "Split Mandarin Band" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-04-38", sku: "LM-SLT-DIA-38", size: "38 (Chest 40)", color: "Slate Charcoal", price: 4800, stock: 4, images: ["/assets/731093757_1006440569031671_1421850103096556184_n.jpg"] },
      { id: "lm-04-40", sku: "LM-SLT-DIA-40", size: "40 (Chest 42)", color: "Slate Charcoal", price: 4800, stock: 6, images: ["/assets/731093757_1006440569031671_1421850103096556184_n.jpg"] },
      { id: "lm-04-42", sku: "LM-SLT-DIA-42", size: "42 (Chest 44)", color: "Slate Charcoal", price: 4800, stock: 7, images: ["/assets/731093757_1006440569031671_1421850103096556184_n.jpg"] },
      { id: "lm-04-44", sku: "LM-SLT-DIA-44", size: "44 (Chest 46)", color: "Slate Charcoal", price: 4800, stock: 3, images: ["/assets/731093757_1006440569031671_1421850103096556184_n.jpg"] },
    ],
  },
  {
    id: "lm-05",
    name: "The Antique Medallion Paisley Jacquard Silk Panjabi",
    slug: "antique-medallion-paisley-jacquard-silk-panjabi",
    price: 4650,
    compareAtPrice: 5400,
    image: "/assets/727886407_1003812822627779_5320585349107522996_n.jpg",
    images: [
      "/assets/727886407_1003812822627779_5320585349107522996_n.jpg",
      "/assets/730084646_1004632885879106_4033408280096934129_n.jpg",
    ],
    category: "Luxury Silk & Jacquard",
    categorySlug: "luxury-silk-jacquard",
    isNew: false,
    isFeatured: true,
    stock: 16,
    fabric: "Persian Tapestry Jacquard Silk",
    craftsmanship: "Muted Olive & Beige Antique Paisley Medallions",
    colorName: "Antique Cream & Muted Olive",
    description:
      "Inspired by Persian court textiles, this antique cream and muted olive Panjabi showcases intricate medallion and paisley jacquard weaves. Designed with a clean concealed placket and decorative engraved neck button for understated distinction.",
    specifications: [
      { label: "Fabric", value: "Vintage Persian Jacquard Silk Weave" },
      { label: "Motif", value: "Royal Medallion & Paisley Tapestry" },
      { label: "Placket", value: "Concealed Placket with Antique Top Button" },
      { label: "Collar", value: "Tailored Stand Collar" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-05-38", sku: "LM-MED-OLV-38", size: "38 (Chest 40)", color: "Antique Cream", price: 4650, stock: 3, images: ["/assets/727886407_1003812822627779_5320585349107522996_n.jpg"] },
      { id: "lm-05-40", sku: "LM-MED-OLV-40", size: "40 (Chest 42)", color: "Antique Cream", price: 4650, stock: 5, images: ["/assets/727886407_1003812822627779_5320585349107522996_n.jpg"] },
      { id: "lm-05-42", sku: "LM-MED-OLV-42", size: "42 (Chest 44)", color: "Antique Cream", price: 4650, stock: 5, images: ["/assets/727886407_1003812822627779_5320585349107522996_n.jpg"] },
      { id: "lm-05-44", sku: "LM-MED-OLV-44", size: "44 (Chest 46)", color: "Antique Cream", price: 4650, stock: 3, images: ["/assets/727886407_1003812822627779_5320585349107522996_n.jpg"] },
    ],
  },
  {
    id: "lm-06",
    name: "The Egyptian Cotton Gold Damask Panjabi",
    slug: "egyptian-cotton-gold-damask-panjabi",
    price: 4250,
    compareAtPrice: 4950,
    image: "/assets/728570183_1003994135942981_1995203835787078592_n.jpg",
    images: [
      "/assets/728570183_1003994135942981_1995203835787078592_n.jpg",
      "/assets/726432719_1002041632804898_4565876842780552996_n.jpg",
    ],
    category: "Classic Signature Cotton",
    categorySlug: "classic-cotton",
    isNew: true,
    isFeatured: true,
    stock: 24,
    fabric: "100% Giza Egyptian Long-Staple Cotton",
    craftsmanship: "Gold & Bronze Damask Needlework on Collar & Cuffs",
    colorName: "Pristine White",
    description:
      "Pure sophistication in Giza Egyptian long-staple cotton. Featuring baroque gold and bronze damask embroidered collar and wide cuffs, complemented by square metallic rimmed stud buttons down the front placket.",
    specifications: [
      { label: "Fabric", value: "100% Premium Giza Egyptian Combed Cotton" },
      { label: "Embroidery", value: "Royal Damask Baroque Threadwork" },
      { label: "Buttons", value: "Square Metallic Stud Buttons" },
      { label: "Cuff Detail", value: "Wide Embroidered French Cuffs" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-06-38", sku: "LM-EGY-WHT-38", size: "38 (Chest 40)", color: "Pristine White", price: 4250, stock: 5, images: ["/assets/728570183_1003994135942981_1995203835787078592_n.jpg"] },
      { id: "lm-06-40", sku: "LM-EGY-WHT-40", size: "40 (Chest 42)", color: "Pristine White", price: 4250, stock: 7, images: ["/assets/728570183_1003994135942981_1995203835787078592_n.jpg"] },
      { id: "lm-06-42", sku: "LM-EGY-WHT-42", size: "42 (Chest 44)", color: "Pristine White", price: 4250, stock: 8, images: ["/assets/728570183_1003994135942981_1995203835787078592_n.jpg"] },
      { id: "lm-06-44", sku: "LM-EGY-WHT-44", size: "44 (Chest 46)", color: "Pristine White", price: 4250, stock: 4, images: ["/assets/728570183_1003994135942981_1995203835787078592_n.jpg"] },
    ],
  },
  {
    id: "lm-07",
    name: "The Resham Floral Vine Pearl White Panjabi",
    slug: "resham-floral-vine-pearl-white-panjabi",
    price: 4500,
    compareAtPrice: 5200,
    image: "/assets/732253170_1009973652011696_2448383532522583757_n.jpg",
    images: [
      "/assets/732253170_1009973652011696_2448383532522583757_n.jpg",
      "/assets/728503334_1002964499379278_6332609520572502345_n.jpg",
    ],
    category: "Classic Signature Cotton",
    categorySlug: "classic-cotton",
    isNew: false,
    isFeatured: true,
    stock: 20,
    fabric: "Silk-Cotton Blend",
    craftsmanship: "Fluid Aari & Resham Floral Vine Threadwork",
    colorName: "Pearl White",
    description:
      "Pure celestial charm. Pristine Pearl White silk-cotton adorned with fluid flowing vines and blooming floral Resham threadwork. Accented with an uninterrupted row of handmade cloth-covered potli buttons along the placket.",
    specifications: [
      { label: "Fabric", value: "Soft Luster Silk-Cotton Blend" },
      { label: "Embroidery", value: "Aari & Resham Floral Vine Needlework" },
      { label: "Buttons", value: "Hand-rolled Fabric Potli Buttons" },
      { label: "Collar", value: "Graceful Curved Mandarin Collar" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-07-38", sku: "LM-RES-WHT-38", size: "38 (Chest 40)", color: "Pearl White", price: 4500, stock: 4, images: ["/assets/732253170_1009973652011696_2448383532522583757_n.jpg"] },
      { id: "lm-07-40", sku: "LM-RES-WHT-40", size: "40 (Chest 42)", color: "Pearl White", price: 4500, stock: 6, images: ["/assets/732253170_1009973652011696_2448383532522583757_n.jpg"] },
      { id: "lm-07-42", sku: "LM-RES-WHT-42", size: "42 (Chest 44)", color: "Pearl White", price: 4500, stock: 7, images: ["/assets/732253170_1009973652011696_2448383532522583757_n.jpg"] },
      { id: "lm-07-44", sku: "LM-RES-WHT-44", size: "44 (Chest 46)", color: "Pearl White", price: 4500, stock: 3, images: ["/assets/732253170_1009973652011696_2448383532522583757_n.jpg"] },
    ],
  },
  {
    id: "lm-08",
    name: "The Ivory Rose Buta Chikankari Panjabi",
    slug: "ivory-rose-buta-chikankari-panjabi",
    price: 3950,
    compareAtPrice: 4600,
    image: "/assets/728503334_1002964499379278_6332609520572502345_n.jpg",
    images: [
      "/assets/728503334_1002964499379278_6332609520572502345_n.jpg",
      "/assets/732253170_1009973652011696_2448383532522583757_n.jpg",
    ],
    category: "Classic Signature Cotton",
    categorySlug: "classic-cotton",
    isNew: false,
    isFeatured: false,
    stock: 22,
    fabric: "Pure Breathable Muslin Cotton",
    craftsmanship: "Delicate Lucknowi Rose Buta Embroidery",
    colorName: "Natural Off-White",
    description:
      "Lightweight, breathable, and deeply soulful. Handcrafted from premium muslin cotton featuring delicate all-over Chikankari rose buta motifs, loop button closures, and an airy relaxed silhouette perfect for warm festivities.",
    specifications: [
      { label: "Fabric", value: "100% Breathable Muslin Cotton" },
      { label: "Embroidery", value: "Hand-finished Rose Buta Chikankari" },
      { label: "Fastening", value: "Loop Fasteners with Fabric Potli Studs" },
      { label: "Collar", value: "Soft Stand Band Collar" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-08-38", sku: "LM-BUT-IVR-38", size: "38 (Chest 40)", color: "Off-White", price: 3950, stock: 4, images: ["/assets/728503334_1002964499379278_6332609520572502345_n.jpg"] },
      { id: "lm-08-40", sku: "LM-BUT-IVR-40", size: "40 (Chest 42)", color: "Off-White", price: 3950, stock: 6, images: ["/assets/728503334_1002964499379278_6332609520572502345_n.jpg"] },
      { id: "lm-08-42", sku: "LM-BUT-IVR-42", size: "42 (Chest 44)", color: "Off-White", price: 3950, stock: 8, images: ["/assets/728503334_1002964499379278_6332609520572502345_n.jpg"] },
      { id: "lm-08-44", sku: "LM-BUT-IVR-44", size: "44 (Chest 46)", color: "Off-White", price: 3950, stock: 4, images: ["/assets/728503334_1002964499379278_6332609520572502345_n.jpg"] },
    ],
  },
  {
    id: "lm-09",
    name: "The Silver Foliage Collar & Cuffs Panjabi",
    slug: "silver-foliage-collar-cuffs-panjabi",
    price: 3850,
    compareAtPrice: 4500,
    image: "/assets/726432719_1002041632804898_4565876842780552996_n.jpg",
    images: [
      "/assets/726432719_1002041632804898_4565876842780552996_n.jpg",
      "/assets/728570183_1003994135942981_1995203835787078592_n.jpg",
    ],
    category: "Classic Signature Cotton",
    categorySlug: "classic-cotton",
    isNew: false,
    isFeatured: false,
    stock: 25,
    fabric: "Micro-texture Dobby Weave Cotton",
    craftsmanship: "Silver Foliage Foil & Threadwork Collar/Cuffs",
    colorName: "Frost White",
    description:
      "Understated modern minimalism. Micro-textured white dobby cotton elevated with silver metallic foliage motif embroidery along the collar and cuffs, matched with fabric-covered shank buttons.",
    specifications: [
      { label: "Fabric", value: "Micro-texture Dobby Combed Cotton" },
      { label: "Accents", value: "Silver Foil Foliage Collar & Cuffs" },
      { label: "Buttons", value: "Matching Fabric Potli Shank Buttons" },
      { label: "Collar", value: "Tailored Clean Mandarin Collar" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-09-38", sku: "LM-SLV-WHT-38", size: "38 (Chest 40)", color: "Frost White", price: 3850, stock: 5, images: ["/assets/726432719_1002041632804898_4565876842780552996_n.jpg"] },
      { id: "lm-09-40", sku: "LM-SLV-WHT-40", size: "40 (Chest 42)", color: "Frost White", price: 3850, stock: 7, images: ["/assets/726432719_1002041632804898_4565876842780552996_n.jpg"] },
      { id: "lm-09-42", sku: "LM-SLV-WHT-42", size: "42 (Chest 44)", color: "Frost White", price: 3850, stock: 8, images: ["/assets/726432719_1002041632804898_4565876842780552996_n.jpg"] },
      { id: "lm-09-44", sku: "LM-SLV-WHT-44", size: "44 (Chest 46)", color: "Frost White", price: 3850, stock: 5, images: ["/assets/726432719_1002041632804898_4565876842780552996_n.jpg"] },
    ],
  },
  {
    id: "lm-10",
    name: "The Champagne Jacquard Chevron Accent Panjabi",
    slug: "champagne-jacquard-chevron-accent-panjabi",
    price: 4150,
    compareAtPrice: 4800,
    image: "/assets/730084646_1004632885879106_4033408280096934129_n.jpg",
    images: [
      "/assets/730084646_1004632885879106_4033408280096934129_n.jpg",
      "/assets/727886407_1003812822627779_5320585349107522996_n.jpg",
    ],
    category: "Festive Eid Collection",
    categorySlug: "festive-eid",
    isNew: false,
    isFeatured: true,
    stock: 20,
    fabric: "Vertical Self-Stripe Jacquard Cotton",
    craftsmanship: "Black Chevron Lace Needlework on Cuffs",
    colorName: "Biscuit Beige & Black",
    description:
      "A subtle harmony of textures. Biscuit beige champagne self-stripe jacquard fabric paired with striking black chevron lace embroidery accents on the cuffs and dark gunmetal dome buttons on the placket.",
    specifications: [
      { label: "Fabric", value: "Vertical Self-stripe Textured Cotton Jacquard" },
      { label: "Cuff Accent", value: "Contrast Black Chevron Lace Embroidery" },
      { label: "Buttons", value: "Gunmetal Metallic Round Buttons" },
      { label: "Collar", value: "Structured Mandarin Collar" },
    ],
    deliveryInfo: "ঢাকা সিটির ভেতরে ২৪-৪৮ ঘণ্টায় ডেলিভারি (৳১০০)। ঢাকার বাইরে সারাদেশে ২-৩ দিনে হোম ডেলিভারি (৳২০০)।",
    variants: [
      { id: "lm-10-38", sku: "LM-CHV-BEI-38", size: "38 (Chest 40)", color: "Biscuit Beige", price: 4150, stock: 4, images: ["/assets/730084646_1004632885879106_4033408280096934129_n.jpg"] },
      { id: "lm-10-40", sku: "LM-CHV-BEI-40", size: "40 (Chest 42)", color: "Biscuit Beige", price: 4150, stock: 6, images: ["/assets/730084646_1004632885879106_4033408280096934129_n.jpg"] },
      { id: "lm-10-42", sku: "LM-CHV-BEI-42", size: "42 (Chest 44)", color: "Biscuit Beige", price: 4150, stock: 6, images: ["/assets/730084646_1004632885879106_4033408280096934129_n.jpg"] },
      { id: "lm-10-44", sku: "LM-CHV-BEI-44", size: "44 (Chest 46)", color: "Biscuit Beige", price: 4150, stock: 4, images: ["/assets/730084646_1004632885879106_4033408280096934129_n.jpg"] },
    ],
  },
];

// ═══════════════════════════════════════════
// Filtered Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter((p) => p.isFeatured);
export const ROYAL_HERITAGE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.categorySlug === "royal-heritage");
export const FESTIVE_EID_PRODUCTS = ALL_PRODUCTS.filter((p) => p.categorySlug === "festive-eid");
export const CLASSIC_COTTON_PRODUCTS = ALL_PRODUCTS.filter((p) => p.categorySlug === "classic-cotton");
export const EVENING_BLACK_PRODUCTS = ALL_PRODUCTS.filter((p) => p.categorySlug === "evening-black");
export const LUXURY_SILK_PRODUCTS = ALL_PRODUCTS.filter((p) => p.categorySlug === "luxury-silk-jacquard");

// Helper to filter products by category slug
export function getProductsByCategory(slug: string): DetailedProduct[] {
  switch (slug) {
    case "royal-heritage":
    case "wedding":
      return ROYAL_HERITAGE_PRODUCTS;
    case "festive-eid":
    case "eid":
      return FESTIVE_EID_PRODUCTS;
    case "classic-cotton":
    case "cotton":
      return CLASSIC_COTTON_PRODUCTS;
    case "evening-black":
    case "black":
      return EVENING_BLACK_PRODUCTS;
    case "luxury-silk-jacquard":
    case "silk":
    case "jacquard":
      return LUXURY_SILK_PRODUCTS;
    case "new-arrivals":
      return NEW_ARRIVALS;
    case "featured":
      return FEATURED_PRODUCTS;
    default:
      return ALL_PRODUCTS;
  }
}
