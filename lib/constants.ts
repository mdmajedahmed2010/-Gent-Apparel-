/**
 * LIHAAZ BY MINHAAZ — Application Constants
 * Bespoke Luxury Panjabi Couture & Men's Heritage Attire
 * Studio: House-5, Road 54/A, Gulshan-2, Dhaka, Bangladesh
 * Hotline: +880 1755-627874 | 01755-627874
 * Facebook: https://www.facebook.com/lihaazbyminhaaz/
 */

// Delivery Charges (BDT) — Verified against official policy
export const DELIVERY_CHARGE = {
  DHAKA_INSIDE: 100,
  OUTSIDE_DHAKA: 200,
} as const;

// Order Number Prefix
export const ORDER_PREFIX = "LM";

// Product Status
export const PRODUCT_STATUS = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  ARCHIVED: "ARCHIVED",
} as const;

// Order Status
export const ORDER_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
  RETURNED: "RETURNED",
  REFUNDED: "REFUNDED",
} as const;

// Payment Methods
export const PAYMENT_METHOD = {
  COD: "COD",
  BKASH: "BKASH",
  NAGAD: "NAGAD",
  SSLCOMMERZ: "SSLCOMMERZ",
} as const;

// Rate Limiting
export const RATE_LIMITS = {
  LOGIN: { requests: 5, window: "15m" },
  REGISTER: { requests: 3, window: "1h" },
  PASSWORD_RESET: { requests: 3, window: "1h" },
  CHECKOUT: { requests: 10, window: "1m" },
  API: { requests: 100, window: "1m" },
  ADMIN: { requests: 50, window: "1m" },
} as const;

// Image Upload Limits
export const UPLOAD_LIMITS = {
  MAX_SIZE_MB: 8,
  MAX_SIZE_BYTES: 8 * 1024 * 1024,
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
  MAX_DIMENSION: 4000,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 48,
} as const;

// Session & Auth
export const AUTH = {
  ACCESS_TOKEN_EXPIRY: 15 * 60, // 15 minutes
  REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60, // 7 days
  ADMIN_SESSION_TIMEOUT: 30 * 60, // 30 minutes
  BCRYPT_SALT_ROUNDS: 12,
  PASSWORD_RESET_EXPIRY: 60 * 60, // 1 hour
} as const;

// Business Info — Lihaaz by Minhaaz
export const BUSINESS = {
  NAME: "Lihaaz by Minhaaz",
  TAGLINE: "Elegance in Every Thread | Bespoke Luxury Panjabi Couture",
  PHONE: "+880 1755-627874",
  HOTLINE: "+880 1755-627874",
  HOTLINE_DISPLAY: "01755-627874",
  WHATSAPP: "01755627874",
  WHATSAPP_LINK: "https://wa.me/8801755627874",
  EMAIL: "lihaazbyminhaaz@gmail.com",
  ADDRESS: "House-5, Road 54/A, Gulshan-2, Dhaka, Bangladesh",
  STUDIO_HOURS: "Saturday - Thursday (11:00 AM - 9:00 PM), Friday (3:00 PM - 9:30 PM)",
  MARKET: "Gulshan-2, Dhaka-1212",
  FACEBOOK: "https://www.facebook.com/lihaazbyminhaaz/",
  INSTAGRAM: "https://www.instagram.com/lihaazbyminhaaz",
  TIKTOK: "https://www.tiktok.com/@lihaazbyminhaaz",
} as const;

// Currency
export const CURRENCY = {
  CODE: "BDT",
  SYMBOL: "৳",
  LOCALE: "en-BD",
} as const;

// Coupon Codes
export const COUPON_CODES: Record<
  string,
  { type: "percent" | "flat"; value: number; label: string }
> = {
  LIHAAZ10: { type: "percent", value: 10, label: "10% off your royal order" },
  EIDSPECIAL: { type: "percent", value: 15, label: "15% Eid Festive Privilege" },
  ROYAL500: { type: "flat", value: 500, label: "৳500 flat bespoke discount" },
  WELCOME: { type: "flat", value: 200, label: "৳200 Welcome Gift" },
  WEDDING1000: { type: "flat", value: 1000, label: "৳1,000 Wedding Edition Privilege" },
} as const;
