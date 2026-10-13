/**
 * GENT APPAREL BD — Menswear Size Guide Modal
 * Standard Measurements for Jeans, Chinos, Joggers, and Sweaters
 */

"use client";

import { useState } from "react";
import { Ruler, X, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const pantSizeChart = [
  { size: "30", waist: "30\"", length: "39.5\"", thigh: "22\"", bottom: "13.5\"", fit: "Slim / Straight" },
  { size: "32", waist: "32\"", length: "40.5\"", thigh: "23\"", bottom: "14\"", fit: "Regular / Straight" },
  { size: "34", waist: "34\"", length: "41.5\"", thigh: "24\"", bottom: "14.5\"", fit: "Regular Straight" },
  { size: "36", waist: "36\"", length: "42\"", thigh: "25\"", bottom: "15\"", fit: "Relaxed Fit" },
  { size: "38", waist: "38\"", length: "42.5\"", thigh: "26\"", bottom: "15.5\"", fit: "Comfort Straight" },
];

const topSizeChart = [
  { size: "M", chest: "38 - 40\"", length: "27\"", sleeve: "25\"", waist: "28 - 30\"", fit: "Regular Export Fit" },
  { size: "L", chest: "40 - 42\"", length: "28\"", sleeve: "25.5\"", waist: "31 - 33\"", fit: "Regular Export Fit" },
  { size: "XL", chest: "42 - 44\"", length: "29\"", sleeve: "26\"", waist: "34 - 36\"", fit: "Relaxed Fit" },
  { size: "XXL", chest: "44 - 46\"", length: "30\"", sleeve: "26.5\"", waist: "37 - 39\"", fit: "Comfort Fit" },
];

export function SizeGuideModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"pants" | "tops">("pants");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-[#8e6e30] dark:text-[#c8a265] hover:text-[#0a0a0a] font-semibold underline underline-offset-4 transition-colors"
      >
        <Ruler className="h-3.5 w-3.5" />
        সাইজ গাইড (Size Guide)
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-xs animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-background rounded-lg border border-[#c8a265]/40 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-[fadeInUp_0.3s_ease-out] p-6 md:p-7">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#c8a265]" />
                <h2 className="text-lg font-bold font-heading text-foreground">
                  Gent Apparel BD — Official Size Guide
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                aria-label="Close size guide"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tab switch */}
            <div className="flex gap-2 mb-4 border-b border-border/40 pb-2">
              <button
                onClick={() => setActiveTab("pants")}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                  activeTab === "pants"
                    ? "bg-[#0a0a0a] text-[#e8ce9e] dark:bg-[#c8a265] dark:text-black"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                জিন্স ও চিনোস (Jeans &amp; Chinos)
              </button>
              <button
                onClick={() => setActiveTab("tops")}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                  activeTab === "tops"
                    ? "bg-[#0a0a0a] text-[#e8ce9e] dark:bg-[#c8a265] dark:text-black"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                সোয়েটার ও জগার্স (Sweaters &amp; Joggers)
              </button>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground mb-4 font-sans leading-relaxed">
              সকল পরিমাপ ইঞ্চিতে (Inches) দেওয়া হয়েছে। আমাদের সবগুলো কালেকশন ১০০% অরিজিনাল ইউএসএ/ইউরোপিয়ান এক্সপোর্ট স্ট্যান্ডার্ড অনুযায়ী তৈরি:
            </p>

            {/* Size Table */}
            <div className="overflow-x-auto rounded border border-border/80">
              {activeTab === "pants" ? (
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-border bg-[#faf8f4] dark:bg-neutral-900 text-foreground">
                      <th className="text-left py-2.5 px-3 font-bold">Waist</th>
                      <th className="text-center py-2.5 px-2 font-bold">Length (লম্বা)</th>
                      <th className="text-center py-2.5 px-2 font-bold">Thigh (রান)</th>
                      <th className="text-center py-2.5 px-2 font-bold">Leg Opening (মুহুরি)</th>
                      <th className="text-center py-2.5 px-2 font-bold">Fit Style</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pantSizeChart.map((row) => (
                      <tr key={row.size} className="border-b border-border last:border-0 hover:bg-[#faf7f2]/50 dark:hover:bg-neutral-850 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-foreground">{row.size} ({row.waist})</td>
                        <td className="py-2.5 px-2 text-center text-foreground font-semibold">{row.length}</td>
                        <td className="py-2.5 px-2 text-center text-foreground font-medium">{row.thigh}</td>
                        <td className="py-2.5 px-2 text-center text-foreground font-medium">{row.bottom}</td>
                        <td className="py-2.5 px-2 text-center text-[11px] text-[#8e6e30] dark:text-[#c8a265] font-medium">{row.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-border bg-[#faf8f4] dark:bg-neutral-900 text-foreground">
                      <th className="text-left py-2.5 px-3 font-bold">Size</th>
                      <th className="text-center py-2.5 px-2 font-bold">Chest (বুক)</th>
                      <th className="text-center py-2.5 px-2 font-bold">Length (লম্বা)</th>
                      <th className="text-center py-2.5 px-2 font-bold">Sleeve (হাতা)</th>
                      <th className="text-center py-2.5 px-2 font-bold">Fit Style</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topSizeChart.map((row) => (
                      <tr key={row.size} className="border-b border-border last:border-0 hover:bg-[#faf7f2]/50 dark:hover:bg-neutral-850 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-foreground">{row.size}</td>
                        <td className="py-2.5 px-2 text-center text-foreground font-semibold">{row.chest}</td>
                        <td className="py-2.5 px-2 text-center text-foreground font-semibold">{row.length}</td>
                        <td className="py-2.5 px-2 text-center text-foreground font-medium">{row.sleeve}</td>
                        <td className="py-2.5 px-2 text-center text-[11px] text-[#8e6e30] dark:text-[#c8a265] font-medium">{row.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="mt-4 p-3 bg-[#faf7f2] dark:bg-neutral-900 border border-[#e2d8c3] dark:border-neutral-800 rounded text-xs text-muted-foreground space-y-1">
              <p>• <strong>সাইজ এক্সচেঞ্জ সুবিধা:</strong> হাতে পেয়ে সাইজে কোনো সমস্যা হলে ৭ দিনের মধ্যে সহজ সাইজ এক্সচেঞ্জের সম্পূর্ণ নিশ্চয়তা।</p>
              <p>• <strong>সরাসরি সাইজ সহায়তা:</strong> আপনার সঠিক সাইজ নির্বাচন নিয়ে কোনো প্রশ্ন থাকলে আমাদের WhatsApp করুন: <strong>{BUSINESS.HOTLINE}</strong></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
