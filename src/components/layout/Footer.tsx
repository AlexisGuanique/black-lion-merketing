import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { localePath } from "@/lib/locales";
import { siteConfig } from "@/config/site.config";
import {
  getFooterLegalLinks,
  getFooterQuickLinks,
  getFooterServiceCategories,
} from "@/config/navigation";

type FooterProps = { locale: Locale };

const squarePolicyLinks = [
  { label: "Terms of Service", path: "/term-of-services" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Refund Policy", path: "/refund-policy" },
] as const;

export function Footer({ locale }: FooterProps) {
  const legalLinks = getFooterLegalLinks(locale);
  const quickLinks = getFooterQuickLinks(locale);
  const categories = getFooterServiceCategories(locale);
  const phoneHref = siteConfig.phone.replace(/[^\d+]/g, "");

  return (
    <footer className="store-footer">
      <div className="store-footer__inner mx-auto max-w-7xl section-padding">
        <div className="store-footer__grid">
          <div className="store-footer__col">
            <h3 className="store-footer__heading">Our Agency</h3>
            <p className="store-footer__text">
              {siteConfig.brand} is a boutique marketing agency helping small
              businesses improve their online presence through branding,
              consulting, content creation, website development, and digital
              growth strategies.
            </p>
          </div>

          <div className="store-footer__col">
            <h3 className="store-footer__heading">Quick Links</h3>
            <ul className="store-footer__links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="store-footer__col">
            <h3 className="store-footer__heading">Categories</h3>
            <ul className="store-footer__links">
              {categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="store-footer__col">
            <h3 className="store-footer__heading">Legal & Policies</h3>
            <ul className="store-footer__links">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section
          className="store-footer__meta"
          aria-label="Contact and legal information"
        >
          <div className="store-footer__meta-grid">
            <div className="store-footer__meta-col">
              <h4 className="store-footer__meta-title">Contact</h4>
              <address className="store-footer__address-block">
                {siteConfig.address.street ? <span>{siteConfig.address.street}</span> : null}
                <span>{siteConfig.address.suite}</span>
                <span>{siteConfig.address.country}</span>
                {siteConfig.email ? (
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                ) : null}
                {siteConfig.phone ? (
                  <a href={`tel:${phoneHref}`}>{siteConfig.phone}</a>
                ) : null}
              </address>
            </div>

            <div className="store-footer__meta-col">
              <h4 className="store-footer__meta-title">Billing & Compliance</h4>
              <div className="store-footer__compliance">
                <p>Payments are processed securely through Square, Inc.</p>
                <p>
                  All sales are subject to our{" "}
                  {squarePolicyLinks.map((link, index) => (
                    <span key={link.label}>
                      {index > 0 ? (index === squarePolicyLinks.length - 1 ? ", and " : ", ") : null}
                      <Link href={localePath(locale, link.path)}>
                        {link.label}
                      </Link>
                    </span>
                  ))}
                  .
                </p>
                <p>
                  For billing questions, contact{" "}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  {siteConfig.phone ? (
                    <>
                      {" or "}
                      <a href={`tel:${phoneHref}`}>{siteConfig.phone}</a>
                    </>
                  ) : null}
                  .
                </p>
              </div>
            </div>
          </div>

          <hr className="store-footer__rule" />

          <p className="store-footer__disclaimer">{siteConfig.disclaimer}</p>
        </section>

        <hr className="store-footer__rule" />

        <div className="store-footer__bottom">
          <p>{siteConfig.copyright}</p>
          {siteConfig.credit.show ? (
            <a
              href={siteConfig.credit.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.credit.label}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
