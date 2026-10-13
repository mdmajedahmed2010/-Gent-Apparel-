/**
 * GENT APPAREL BD — Register Page
 * Route: /register
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { RegisterForm } from "@/components/auth/register-form";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Create Account — Gent Apparel BD | Better Quality, Better Style!",
  description: "Create your Gent Apparel BD account for a seamless shopping experience.",
};

export default function RegisterPage() {
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
          <h1 className="text-xl font-semibold">Create Your Account</h1>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Join Gent Apparel BD for exclusive export edits &amp; faster checkout
          </p>
        </div>

        {/* Register Form */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          }
        >
          <RegisterForm />
        </Suspense>

        {/* Login Link */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
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
