/**
 * GENT APPAREL BD — Forgot Password Page
 * Route: /forgot-password
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot Password — Gent Apparel BD | Better Quality, Better Style!",
  description: "Reset your Gent Apparel BD account password.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex flex-col items-center gap-2 group">
            <div className="relative h-14 w-14 rounded-full overflow-hidden border border-[#c8a265]/40 shadow-xs group-hover:scale-105 transition-transform">
              <Image
                src="/assets/logo.jpg"
                alt="Gent Apparel BD"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold font-heading tracking-wider text-foreground">
              GENT APPAREL BD
            </span>
          </Link>
          <h1 className="text-xl font-semibold">Reset Your Password</h1>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Enter your email and we&apos;ll send you a recovery link
          </p>
        </div>

        {/* Form */}
        <ForgotPasswordForm />

        {/* Back to Login */}
        <p className="text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-foreground hover:text-[#c8a265] underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
