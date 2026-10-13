/**
 * GENT APPAREL BD — Application Constants
 * 100% Authentic Export-Quality Menswear, Premium Denim & Smart Casuals
 * Outlet / Hub: Lalbagh, Dhaka-1211, Bangladesh
 * Hotline / WhatsApp: +880 1560-018131 | 01560-018131
 * Official Facebook: https://www.facebook.com/gentapparelbd
 * Official Instagram: https://www.instagram.com/gent_apparel_bd
 */

// Delivery Charges (BDT) — Verified against Gent Apparel BD official policy
export const DELIVERY_CHARGE = {
  DHAKA_INSIDE: 80,
  OUTSIDE_DHAKA: 150,
} as const;

// Order Number Prefix
export const ORDER_PREFIX = "GA";

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

// Business Info — Gent Apparel BD
export const BUSINESS = {
  NAME: "Gent Apparel BD",
  SHORT_NAME: "Gent Apparel",
  TAGLINE: "Better Quality, Better Style!",
  SUBTITLE: "100% Authentic Export-Quality Men's Fashion & Denim",
  PHONE: "+880 1560-018131",
  HOTLINE: "+880 1560-018131",
  HOTLINE_DISPLAY: "01560-018131",
  WHATSAPP: "01560018131",
  WHATSAPP_LINK: "https://wa.me/8801560018131",
  EMAIL: "gentapparelbd@gmail.com",
  ADDRESS: "Lalbagh, Dhaka-1211, Bangladesh",
  STUDIO_HOURS: "Everyday (10:00 AM - 10:00 PM)",
  MARKET: "Lalbagh, Dhaka-1211",
  FACEBOOK: "https://www.facebook.com/gentapparelbd",
  INSTAGRAM: "https://www.instagram.com/gent_apparel_bd",
  TIKTOK: "https://www.tiktok.com/@gentapparelbd",
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
  GENT10: { type: "percent", value: 10, label: "10% off your first order" },
  WINTERDROP: { type: "percent", value: 15, label: "15% Winter Collection Privilege" },
  DENIM300: { type: "flat", value: 300, label: "৳300 flat export denim discount" },
  WELCOME: { type: "flat", value: 150, label: "৳150 Welcome Gift" },
  FREESHIP: { type: "flat", value: 80, label: "Free Inside Dhaka Delivery" },
} as const;
