/**
 * LIHAAZ BY MINHAAZ — JSON-LD Structured Data Components
 * SEO (Organization, BreadcrumbList, Product schemas)
 */

import { BUSINESS } from "@/lib/constants";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Lihaaz by Minhaaz",
    alternateName: "লিহাজ বাই মিনহাজ",
    description: BUSINESS.TAGLINE,
    telephone: BUSINESS.HOTLINE,
    email: BUSINESS.EMAIL,
    url: "https://lihaazbyminhaaz.com",
    logo: "https://lihaazbyminhaaz.com/assets/logo.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.HOTLINE,
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["Bengali", "English"],
    },
    sameAs: [BUSINESS.FACEBOOK, BUSINESS.WHATSAPP],
    address: {
      "@type": "PostalAddress",
      streetAddress: "House-5, Road 54/A, Gulshan-2",
      addressLocality: "Dhaka",
      postalCode: "1212",
      addressCountry: "BD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lihaaz by Minhaaz",
    url: "https://lihaazbyminhaaz.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://lihaazbyminhaaz.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url?: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lihaazbyminhaaz.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        ...(item.url && {
          item: `https://lihaazbyminhaaz.com${item.url}`,
        }),
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
