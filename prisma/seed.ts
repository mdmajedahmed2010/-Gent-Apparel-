/**
 * GENT APPAREL BD — Database Seed Script
 * 100% Authentic Export Clothing & Denim Catalog
 * Grounded on Facebook Page: https://www.facebook.com/gentapparelbd/
 * Hub: Lalbagh, Dhaka-1211, Bangladesh
 * Hotline: 01560-018131
 *
 * Usage: npx tsx prisma/seed.ts
 */

import "dotenv/config";
import { prisma } from "../lib/db";
import { ALL_PRODUCTS, CATEGORIES } from "../lib/demo-data";

const COUPONS = [
  { code: "GENT10", type: "PERCENTAGE", value: 10, minOrder: 2000 },
  { code: "WELCOME100", type: "FIXED", value: 100, minOrder: 1500 },
  { code: "EXPORTVIP", type: "PERCENTAGE", value: 15, minOrder: 4000 },
];

async function main() {
  console.log("👕 Seeding Gent Apparel BD database catalog...");

  // 1. Seed Categories
  console.log("\n📁 Seeding categories...");
  const categoryMap = new Map<string, string>();

  for (const [i, cat] of CATEGORIES.entries()) {
    const category = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        image: cat.image,
        sortOrder: i,
      },
      create: {
        name: cat.name,
        slug: cat.slug,
        image: cat.image,
        sortOrder: i,
        isActive: true,
      },
    });
    categoryMap.set(cat.slug, category.id);
    console.log(`  ✓ ${cat.name} (${cat.slug})`);
  }

  // 2. Seed Products and Variants
  console.log("\n✨ Seeding authentic Gent Apparel BD products...");
  let productCount = 0;
  let variantCount = 0;

  for (const prod of ALL_PRODUCTS) {
    const categoryId = categoryMap.get(prod.categorySlug) || Array.from(categoryMap.values())[0]!;

    const product = await prisma.product.upsert({
      where: { slug: prod.slug },
      update: {
        name: prod.name,
        description: prod.description,
        basePrice: prod.basePrice || prod.price,
        status: (prod.status as any) || "ACTIVE",
        isFeatured: prod.isFeatured ?? true,
        category: { connect: { id: categoryId } },
      },
      create: {
        name: prod.name,
        slug: prod.slug,
        description: prod.description,
        basePrice: prod.basePrice || prod.price,
        status: (prod.status as any) || "ACTIVE",
        isFeatured: prod.isFeatured ?? true,
        category: { connect: { id: categoryId } },
      },
    });

    // Delete existing variants and re-seed to avoid duplicates
    await prisma.productVariant.deleteMany({
      where: { productId: product.id },
    });

    for (const variant of prod.variants) {
      const sku = `GA-${prod.slug.slice(0, 8).toUpperCase()}-${variant.size}-${variant.color.slice(0, 3).toUpperCase()}`;

      await prisma.productVariant.create({
        data: {
          productId: product.id,
          sku,
          size: variant.size,
          color: variant.color,
          price: variant.price,
          stock: variant.stock,
          images: variant.images,
          isActive: true,
        },
      });
      variantCount++;
    }

    productCount++;
    console.log(`  ✓ ${prod.name}`);
  }

  // 3. Seed Coupons
  console.log("\n🎟️ Seeding Gent Apparel BD coupons...");
  for (const coupon of COUPONS) {
    await prisma.coupon.upsert({
      where: { code: coupon.code },
      update: { value: coupon.value, minOrder: coupon.minOrder },
      create: {
        code: coupon.code,
        type: coupon.type as any,
        value: coupon.value,
        minOrder: coupon.minOrder,
        isActive: true,
      },
    });
    console.log(`  ✓ ${coupon.code}`);
  }

  // 4. Site Settings
  console.log("\n⚙️ Seeding Site Settings for Gent Apparel BD...");
  const settings = [
    { key: "store_name", value: "Gent Apparel BD" },
    { key: "store_tagline", value: "Better Quality, Better Style!" },
    { key: "store_logo", value: "/assets/logo.jpg" },
    { key: "store_favicon", value: "/assets/logo.jpg" },
    { key: "store_phone", value: "01560-018131" },
    { key: "store_email", value: "gentapparelbd@gmail.com" },
    { key: "store_address", value: "Lalbagh, Dhaka-1211, Bangladesh" },
    { key: "shipping_dhaka", value: "80" },
    { key: "shipping_outside", value: "150" },
    { key: "social_facebook", value: "https://www.facebook.com/gentapparelbd" },
    { key: "social_whatsapp", value: "https://wa.me/8801560018131" },
  ];

  for (const s of settings) {
    try {
      await prisma.siteSetting.upsert({
        where: { key: s.key },
        update: { value: s.value },
        create: { key: s.key, value: s.value },
      });
    } catch {}
  }

  // 5. Ensure Admin User
  console.log("\n👤 Verifying admin account...");
  const bcrypt = await import("bcryptjs");
  const adminEmail = "admin@gentapparelbd.com";
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("Gent@2026", 12);
    await prisma.user.create({
      data: {
        name: "Gent Apparel Admin",
        email: adminEmail,
        passwordHash: hashedPassword,
        role: "SUPER_ADMIN",
      },
    });
    console.log(`  ✓ Admin account ready (${adminEmail})`);
  }

  console.log(`\n✅ Gent Apparel BD Seed Completed Successfully!`);
  console.log(`   Categories: ${CATEGORIES.length}`);
  console.log(`   Products: ${productCount}`);
  console.log(`   Variants: ${variantCount}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
