import { siteConfig } from "@/config/site.config";

export type InquiryDetails = {
  plan?: string;
  planId?: string;
  price?: string;
  service?: string;
};

export type ContactFormData = {
  firstName: string;
  lastName?: string;
  phone: string;
  email?: string;
  message?: string;
};

export function getWhatsAppNumber(): string {
  const whatsappDigits = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (whatsappDigits.length >= 10) return whatsappDigits;

  return siteConfig.phone.replace(/\D/g, "");
}

export function isWhatsAppConfigured(): boolean {
  return getWhatsAppNumber().length >= 10;
}

export function buildWhatsAppMessage(
  data: ContactFormData,
  inquiry?: InquiryDetails,
): string {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");
  const lines = [`Hi! I'm ${fullName} and I'd like to get started.`];

  if (inquiry?.plan) {
    lines.push(`Plan: ${inquiry.plan}`);
  }

  if (inquiry?.service) {
    lines.push(`Service: ${inquiry.service}`);
  }

  if (inquiry?.price) {
    lines.push(`Price: ${inquiry.price}`);
  }

  if (data.email?.trim()) {
    lines.push(`Email: ${data.email.trim()}`);
  }

  lines.push(`Phone: ${data.phone}`);

  if (data.message?.trim()) {
    lines.push(`Message: ${data.message.trim()}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppChat(message: string): void {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
