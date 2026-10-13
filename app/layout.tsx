import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { auth } from "@/lib/auth";
import { CartSyncManager } from "@/components/cart/cart-sync-manager";
import { ServiceWorkerRegistry } from "@/components/pwa/service-worker-registry";
import { PostHogProvider } from "@/components/analytics/posthog-provider";

// Body font — refined, clear, elegant modern sans
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Heading font — regal, luxurious serif for royal heritage couture
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Global metadata for Gent Apparel BD
export const metadata: Metadata = {
  title: {
    default: "Gent Apparel BD — Better Quality, Better Style! | 100% Export Menswear",
    template: "%s — Gent Apparel BD",
  },
  description:
    "Official store of Gent Apparel BD (জেন্ট অ্যাপারেল বিডি). Discover 100% authentic original export denim jeans (Lucky Brand, Sea Barrier, Il Granchio), Italian gabardine chinos, Slazenger track pants, and UK winter knitwear. Hub: Lalbagh, Dhaka. Nationwide Cash on Delivery with parcel inspection before payment.",
  keywords: [
    "Gent Apparel BD",
    "Gent Apparel",
    "gentapparelbd",
    "export denim Bangladesh",
    "Lucky Brand jeans Dhaka",
    "Sea Barrier Italian pants",
    "IL Granchio jeans",
    "Slazenger track pants BD",
    "Lincoln UK sweater Dhaka",
    "mens fashion Dhaka",
    "Lalbagh clothing store",
    "authentic export surplus Bangladesh",
  ],
  authors: [{ name: "Gent Apparel BD" }],
  creator: "Gent Apparel BD",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gent Apparel BD",
    title: "Gent Apparel BD — Better Quality, Better Style! | 100% Export Menswear",
    description:
      "Better Quality, Better Style! 100% authentic export-quality denim jeans, gabardines, activewear, and winter knitwear from Gent Apparel BD (Lalbagh, Dhaka).",
    images: [
      {
        url: "/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Gent Apparel BD — Better Quality, Better Style!",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Gent Apparel BD",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let session = null;
  try {
    session = await auth();
  } catch {
    // Auth fallback
  }
  const userId = session?.user?.id;
  const faviconUrl = "/assets/logo.jpg";

  return (
    <html
      lang="en"
      className={cn("h-full", inter.variable, playfair.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground selection:bg-[#c9a96e] selection:text-black">
        <CartSyncManager userId={userId} />
        {/* Skip to main content — Accessibility (WCAG AA) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextTopLoader
          color="#c9a96e"
          height={3}
          showSpinner={false}
          shadow="0 0 10px #c9a96e,0 0 5px #c9a96e"
        />
        {/* Structured Data — SEO */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <Toaster position="top-right" richColors closeButton />
        <PostHogProvider />
        <ServiceWorkerRegistry />
      </body>
    </html>
  );
}
