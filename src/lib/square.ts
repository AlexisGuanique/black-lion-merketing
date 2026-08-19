/**
 * Square Payment Link URLs — one env var per plan.
 * Example: NEXT_PUBLIC_SQUARE_LINK_SOCIAL_MEDIA_AUDIT=https://square.link/u/xxxxx
 */
const planEnvKeys: Record<string, string> = {
  "social-media-audit": "NEXT_PUBLIC_SQUARE_LINK_SOCIAL_MEDIA_AUDIT",
  "marketing-consultation": "NEXT_PUBLIC_SQUARE_LINK_MARKETING_CONSULTATION",
  "social-media-setup": "NEXT_PUBLIC_SQUARE_LINK_SOCIAL_MEDIA_SETUP",
  "brand-positioning": "NEXT_PUBLIC_SQUARE_LINK_BRAND_POSITIONING",
  "marketing-strategy-blueprint":
    "NEXT_PUBLIC_SQUARE_LINK_MARKETING_STRATEGY_BLUEPRINT",
  "website-development-seo": "NEXT_PUBLIC_SQUARE_LINK_WEBSITE_DEVELOPMENT_SEO",
  "rush-content-delivery": "NEXT_PUBLIC_SQUARE_LINK_RUSH_CONTENT_DELIVERY",
  "social-media-content-package":
    "NEXT_PUBLIC_SQUARE_LINK_SOCIAL_MEDIA_CONTENT_PACKAGE",
  "marketing-growth-package": "NEXT_PUBLIC_SQUARE_LINK_MARKETING_GROWTH_PACKAGE",
  "premium-brand-launch": "NEXT_PUBLIC_SQUARE_LINK_PREMIUM_BRAND_LAUNCH",
};

export function getSquareCheckoutUrl(planId: string): string | null {
  const envKey = planEnvKeys[planId];
  if (!envKey) return null;

  const url = process.env[envKey]?.trim();
  return url || null;
}

export function isSquareCheckoutConfigured(planId: string): boolean {
  return getSquareCheckoutUrl(planId) !== null;
}
