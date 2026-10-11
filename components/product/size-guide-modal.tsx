/**
 * LIHAAZ BY MINHAAZ — Panjabi Size Guide Modal
 * Standard Panjabi Measurements for Sizes 38, 40, 42, 44, 46
 */

"use client";

import { useState } from "react";
import { Ruler, X, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const sizeChart = [
  { size: "38", chest: "40", length: "40", sleeve: "24", collar: "15", fit: "Slim / Regular" },
  { size: "40", chest: "42", length: "42", sleeve: "24.5", collar: "15.5", fit: "Tailored Royal" },
  { size: "42", chest: "44", length: "44", sleeve: "25", collar: "16", fit: "Tailored Royal" },
  { size: "44", chest: "46", length: "45", sleeve: "25.5", collar: "16.5", fit: "Comfort Classic" },
  { size: "46", chest: "48", length: "46", sleeve: "26", collar: "17", fit: "Relaxed Classic" },
];

export function SizeGuideModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-[#8e6e30] hover:text-[#0f0e0d] font-semibold underline underline-offset-4 transition-colors"
      >
        <Ruler className="h-3.5 w-3.5" />
        পাঞ্জাবি সাইজ চার্ট (Size Guide)
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-xs animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-background rounded-lg border border-[#c9a96e]/40 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-[fadeInUp_0.3s_ease-out] p-6 md:p-7">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#c9a96e]" />
                <h2 className="text-lg font-bold font-heading text-foreground">
                  Lihaaz by Minhaaz — Panjabi Size Guide
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

            <p className="text-xs md:text-sm text-muted-foreground mb-4 font-sans leading-relaxed">
              সকল পরিমাপ ইঞ্চিতে (Inches) দেওয়া হয়েছে। পারফেক্ট রাজকীয় ফিটিং পেতে আপনার সাধারণ জামা বা পাঞ্জাবির বুকের মাপ এবং লম্বার সাথে মিলিয়ে সাইজ নির্বাচন করুন:
            </p>

            {/* Size Table */}
            <div className="overflow-x-auto rounded border border-border/80">
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#faf8f4] text-foreground">
                    <th className="text-left py-2.5 px-3 font-bold">Size</th>
                    <th className="text-center py-2.5 px-2 font-bold">Chest (বুক)</th>
                    <th className="text-center py-2.5 px-2 font-bold">Length (লম্বা)</th>
                    <th className="text-center py-2.5 px-2 font-bold">Sleeve (হাতা)</th>
                    <th className="text-center py-2.5 px-2 font-bold">Collar (কলার)</th>
                    <th className="text-center py-2.5 px-2 font-bold">Fit</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((row) => (
                    <tr key={row.size} className="border-b border-border last:border-0 hover:bg-[#faf7f2]/50 transition-colors">
                      <td className="py-2.5 px-3 font-bold text-foreground">{row.size}</td>
                      <td className="py-2.5 px-2 text-center text-foreground font-semibold">
                        {row.chest}&quot;
                      </td>
                      <td className="py-2.5 px-2 text-center text-foreground font-semibold">
                        {row.length}&quot;
                      </td>
                      <td className="py-2.5 px-2 text-center text-foreground font-medium">
                        {row.sleeve}&quot;
                      </td>
                      <td className="py-2.5 px-2 text-center text-foreground font-medium">
                        {row.collar}&quot;
                      </td>
                      <td className="py-2.5 px-2 text-center text-[11px] text-[#8e6e30] font-medium">
                        {row.fit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-[#faf7f2] border border-[#e2d8c3] rounded text-xs text-neutral-600 space-y-1">
              <p>• <strong>সাইজ এক্সচেঞ্জ গ্যারান্টি:</strong> হাতে পেয়ে সাইজে কোনো সমস্যা হলে ৭ দিনের মধ্যে নিশ্চিত সাইজ এক্সচেঞ্জ সুবিধা।</p>
              <p>• <strong>পরামর্শ হটলাইন:</strong> সাইজ বা ফিটিং পরামর্শের জন্য সরাসরি গুলশান-২ স্টুডিও কনসিয়ার্জে কল বা WhatsApp করুন: <strong>{BUSINESS.HOTLINE}</strong></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
