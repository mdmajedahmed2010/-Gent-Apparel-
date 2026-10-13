/**
 * GENT APPAREL BD — Checkout Layout
 * Isolated layout (focused checkout flow with authentic branding)
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Minimal Header */}
      <header className="border-b border-border/80 bg-background/95 backdrop-blur-md sticky top-0 z-30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Bag
          </Link>
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 rounded-full overflow-hidden border border-[#c8a265]/40 shadow-xs">
              <Image
                src="/assets/logo.jpg"
                alt="Gent Apparel BD Logo"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <span className="font-heading font-bold text-base md:text-lg tracking-wider text-foreground">
              GENT APPAREL BD
            </span>
          </Link>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Minimal Footer */}
      <footer className="border-t border-border py-6 bg-[#faf8f4] dark:bg-neutral-950">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground space-y-1">
          <p>
            © {new Date().getFullYear()} Gent Apparel BD. Better Quality, Better Style!
          </p>
          <p className="text-[11px]">
            <Link href="/terms" className="underline hover:text-foreground">
              Terms &amp; Conditions
            </Link>{" "}
            ·{" "}
            <Link href="/refund-policy" className="underline hover:text-foreground">
              Return &amp; Refund Policy
            </Link>{" "}
            ·{" "}
            <Link href="/delivery-info" className="underline hover:text-foreground">
              Delivery Information
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
