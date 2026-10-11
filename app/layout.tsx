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

// Global metadata for Lihaaz by Minhaaz
export const metadata: Metadata = {
  title: {
    default: "Lihaaz by Minhaaz — Designer Menswear & Royal Heritage Panjabi",
    template: "%s — Lihaaz by Minhaaz",
  },
  description:
    "Official store of Lihaaz by Minhaaz (লিহাজ বাই মিনহাজ). Discover bespoke designer Panjabis, opulent silk jacquards, and intricate zardozi embroidery from our Gulshan-2 studio. Nationwide Cash on Delivery with parcel inspection before payment.",
  keywords: [
    "Lihaaz by Minhaaz",
    "Lihaaz Panjabi",
    "Lihaaz by Minhaaz Gulshan",
    "designer Panjabi Dhaka",
    "royal heritage Panjabi",
    "festive Eid Panjabi 2026",
    "wedding Panjabi menswear Bangladesh",
    "luxury zardozi embroidery",
    "bespoke men's ethnic wear",
    "Gulshan 2 fashion studio",
  ],
  authors: [{ name: "Lihaaz by Minhaaz" }],
  creator: "Lihaaz by Minhaaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lihaaz by Minhaaz",
    title: "Lihaaz by Minhaaz — Designer Menswear & Royal Heritage Panjabi",
    description:
      "Exclusive designer Panjabi couture, royal wedding ensembles, and festive luxury from Lihaaz by Minhaaz (House-5, Road 54/A, Gulshan-2, Dhaka).",
    images: [
      {
        url: "/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Lihaaz by Minhaaz Royal Heritage Collection",
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
    title: "Lihaaz by Minhaaz",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0e0d",
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
