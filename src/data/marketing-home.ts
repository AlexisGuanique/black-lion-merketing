import { siteImages } from "@/config/images";

export type MarketingService = {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  href?: string;
};

export type PromoBanner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
  variant?: "large" | "small";
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  image: string;
  alt: string;
  href: string;
};

export const marketingHomeContent = {
  hero: {
    slides: [
      {
        id: "slide-1",
        eyebrow: "Boutique Marketing Agency",
        title: "Build a Brand Your Customers Trust",
        subtitle:
          "Branding, consulting, content, and digital growth strategies for small businesses",
        cta: "View Services",
        href: "/pricing",
        image: siteImages.hero.slide1,
        alt: "Marketing strategy review",
      },
      {
        id: "slide-2",
        eyebrow: "Professional Presence",
        title: "Strengthen Your Online Credibility",
        subtitle:
          "From social media to websites — we help you look professional and grow with confidence",
        cta: "Book a Consultation",
        href: "/contact",
        image: siteImages.hero.slide2,
        alt: "Marketing consultation session",
      },
      {
        id: "slide-3",
        eyebrow: "Growth That Fits",
        title: "Marketing Solutions Built for Small Business",
        subtitle:
          "Clear services, transparent pricing, and support designed around your goals",
        cta: "Get Started",
        href: "/pricing",
        image: siteImages.hero.slide3,
        alt: "Creative marketing team planning content",
      },
    ],
  },

  marquee: {
    text: "PROFESSIONAL MARKETING FOR SMALL BUSINESSES — BRANDING · CONSULTING · CONTENT · WEB · GROWTH",
  },

  promoBanners: [
    {
      id: "banner-1",
      title: "Start with Clarity",
      subtitle: "Marketing Consultation from $250.99",
      cta: "View Details",
      href: "/pricing",
      image: siteImages.services.seo,
      alt: "Marketing consultation",
      variant: "large" as const,
    },
    {
      id: "banner-2",
      title: "Social Media Audit",
      subtitle: "Know exactly what to improve — $80.99",
      cta: "View Details",
      href: "/pricing",
      image: siteImages.services.social,
      alt: "Social media audit",
      variant: "small" as const,
    },
    {
      id: "banner-3",
      title: "Brand Positioning",
      subtitle: "Define how your business stands out — $500.99",
      cta: "View Details",
      href: "/pricing",
      image: siteImages.services.branding,
      alt: "Brand positioning strategy",
      variant: "small" as const,
    },
    {
      id: "banner-4",
      title: "Premium Brand Launch",
      subtitle: "Full launch support from $5,000.99",
      cta: "View Details",
      href: "/pricing",
      image: siteImages.services.landing,
      alt: "Premium brand launch package",
      variant: "large" as const,
    },
  ] satisfies PromoBanner[],

  topBrands: {
    title: "TOOLS & PLATFORMS WE WORK WITH",
    brands: [
      { name: "Square", initial: "S" },
      { name: "Meta", initial: "M" },
      { name: "Google", initial: "G" },
      { name: "Canva", initial: "C" },
      { name: "WordPress", initial: "W" },
      { name: "Mailchimp", initial: "MC" },
    ],
  },

  trending: {
    title: "Popular Services",
    services: [
      {
        id: "social-media-audit",
        name: "Social Media Audit",
        price: "$80.99",
        image: siteImages.services.social,
        alt: "Social media audit",
        href: "/pricing",
      },
      {
        id: "marketing-consultation",
        name: "Marketing Consultation Session",
        price: "$250.99",
        image: siteImages.services.analytics,
        alt: "Marketing consultation",
        href: "/pricing",
      },
      {
        id: "brand-positioning",
        name: "Brand Positioning Strategy",
        price: "$500.99",
        image: siteImages.services.branding,
        alt: "Brand positioning",
        href: "/pricing",
      },
      {
        id: "marketing-strategy-blueprint",
        name: "Marketing Strategy Blueprint",
        price: "$549",
        image: siteImages.services.content,
        alt: "Marketing strategy blueprint",
        href: "/pricing",
      },
      {
        id: "website-development-seo",
        name: "Website Development & SEO",
        price: "$850.99",
        image: siteImages.services.landing,
        alt: "Website development and SEO",
        href: "/pricing",
      },
    ] satisfies MarketingService[],
  },

  about: {
    title: "About us",
    paragraphs: [
      "Black Lion is a boutique marketing agency built for small businesses that want a more professional online presence without the complexity of a large agency.",
      "We help clients establish credibility, strengthen brand identity, and improve customer engagement through branding, marketing consulting, content creation, website development, and digital growth strategies.",
    ],
  },

  newArrivals: {
    title: "Service Packages",
    subtitle: "FULL CATALOG",
    services: [
      {
        id: "social-media-setup",
        name: "Social Media Setup & Optimization",
        price: "$1,000.99",
        image: siteImages.services.social,
        alt: "Social media setup",
        href: "/pricing",
      },
      {
        id: "rush-content-delivery",
        name: "Rush Content Delivery",
        price: "$199",
        image: siteImages.services.influencer,
        alt: "Rush content delivery",
        href: "/pricing",
      },
      {
        id: "social-media-content-package",
        name: "Social Media Content Creation Package",
        price: "$2,500.99",
        image: siteImages.services.content,
        alt: "Social media content creation",
        href: "/pricing",
      },
      {
        id: "marketing-growth-package",
        name: "Marketing Growth Package",
        price: "$1,500.00",
        image: siteImages.services.ppc,
        alt: "Marketing growth package",
        href: "/pricing",
      },
      {
        id: "premium-brand-launch",
        name: "Premium Brand Launch Package",
        price: "$5,000.99",
        image: siteImages.services.reputation,
        alt: "Premium brand launch package",
        href: "/pricing",
      },
      {
        id: "marketing-strategy-blueprint",
        name: "Marketing Strategy Blueprint",
        price: "$549",
        image: siteImages.services.crm,
        alt: "Marketing strategy blueprint",
        href: "/pricing",
      },
      {
        id: "social-media-audit",
        name: "Social Media Audit",
        price: "$80.99",
        image: siteImages.services.localSeo,
        alt: "Social media audit",
        href: "/pricing",
      },
      {
        id: "website-development-seo",
        name: "Website Development & SEO",
        price: "$850.99",
        image: siteImages.services.landing,
        alt: "Website development",
        href: "/pricing",
      },
    ] satisfies MarketingService[],
  },

  features: [
    {
      title: "Credible Brand Presence",
      description:
        "Professional branding and messaging that helps customers trust your business online.",
      icon: "user" as const,
    },
    {
      title: "Clear Service Packages",
      description:
        "Transparent pricing and defined deliverables for every service we offer.",
      icon: "rocket" as const,
    },
    {
      title: "Secure Square Checkout",
      description:
        "Purchase services online with secure payment processing through Square.",
      icon: "card" as const,
    },
    {
      title: "Consultation Support",
      description:
        "Request information, book a call, and get guidance before you commit.",
      icon: "support" as const,
    },
  ],

  testimonials: {
    title: "Client Feedback",
    items: [
      {
        id: "t1",
        quote:
          "Black Lion helped us look more professional online. Our social profiles finally match the quality of our business, and customers notice the difference.",
        name: "Maria L.",
        role: "Small Business Owner",
      },
      {
        id: "t2",
        quote:
          "The consultation session gave us clarity we did not have before. We knew exactly what to fix, what to prioritize, and how to move forward.",
        name: "James T.",
        role: "Local Service Provider",
      },
      {
        id: "t3",
        quote:
          "From branding to website development, the process felt structured and professional. It gave us the credibility we needed to grow with confidence.",
        name: "Andrea P.",
        role: "Entrepreneur",
      },
    ] satisfies Testimonial[],
  },

  categories: {
    title: "Services by Category",
    items: [
      {
        id: "branding",
        label: "Branding",
        image: siteImages.services.branding,
        alt: "Branding services",
        href: "/pricing",
      },
      {
        id: "social",
        label: "Social Media",
        image: siteImages.services.social,
        alt: "Social media services",
        href: "/pricing",
      },
      {
        id: "content",
        label: "Content Creation",
        image: siteImages.services.content,
        alt: "Content creation",
        href: "/pricing",
      },
      {
        id: "website",
        label: "Website & SEO",
        image: siteImages.services.landing,
        alt: "Website and SEO services",
        href: "/pricing",
      },
    ] satisfies ServiceCategory[],
  },

  newsletter: {
    title: "Request a consultation",
    subtitle:
      "Tell us about your business and receive marketing tips plus updates on new services",
    placeholder: "Enter your email",
    buttonLabel: "Sign Up",
  },
};
