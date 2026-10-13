/**
 * GENT APPAREL BD — Login Page
 * Route: /login
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login — Gent Apparel BD | Better Quality, Better Style!",
  description: "Sign in to your Gent Apparel BD account to manage orders and track shipments.",
};

export default function LoginPage() {
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
          <h1 className="text-xl font-semibold">Welcome Back</h1>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <Suspense
          fallback={
            <div className="space-y-4 animate-pulse">
              <div className="h-10 bg-muted/30" />
              <div className="h-10 bg-muted/30" />
              <div className="h-12 bg-muted/40" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        {/* Register Link */}
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-foreground hover:text-[#c8a265] underline underline-offset-4"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
