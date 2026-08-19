import type { Locale } from "@/lib/locales";

/**
 * Punto de entrada principal al personalizar una nueva landing.
 * Edita este archivo con los datos de la empresa cliente.
 */
export const siteConfig = {
  brand: "Lion Business",
  tagline: "Boutique Marketing for Small Business Growth",
  description:
    "Lion Business is a boutique marketing agency focused on helping small businesses improve their online presence through branding, marketing consulting, content creation, website development, and digital growth strategies.",

  email: "thelionsbss@gmail.com",
  supportEmail: "thelionsbss@gmail.com",
  phone: "+1 (321) 314-4332",

  address: {
    street: "",
    suite: "United States",
    country: "United States",
    mapEmbedUrl: "",
  },

  operatingHours: "Monday–Friday, 9:00 AM – 6:00 PM Eastern Time (ET)",

  disclaimer:
    "Information on this website is for general purposes only. It does not constitute legal, financial, or professional advice.",

  copyright: "Copyright © 2026 Lion Business. All rights reserved.",

  credit: {
    label: "Developed by Lion Business",
    href: "",
    show: false,
  },

  headerCta: {
    label: "Get Started",
    path: "/pricing",
  },

  scheduleHref: (locale: Locale) => `/${locale}/contact`,

  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",

  bookingWidgetUrl: process.env.NEXT_PUBLIC_BOOKING_WIDGET_URL ?? "",

  contactFormEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "",

  /**
   * Número de WhatsApp para consultas de compra.
   * Formato internacional sin + ni espacios. Ej: 17372969901
   */
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "13213144332",

  logo: {
    src: "/images/logo-mark.png",
    width: 429,
    height: 435,
    wordmark: "Lion Business",
  },

  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    x: "",
  },
} as const;
