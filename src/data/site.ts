import type { Locale } from "@/lib/locales";
import { siteImages } from "@/config/images";
import { siteConfig } from "@/config/site.config";

export { siteConfig } from "@/config/site.config";
export { getNav } from "@/config/navigation";

export type NavItem = { label: string; href: string };

export type FAQItem = { question: string; answer: string };

export type Office = {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  mapEmbedUrl: string;
};

export type Feature = { title: string; description: string };

export type AboutFeature = {
  title: string;
  description: string;
  icon: "star" | "video" | "email" | "gear";
};

export type Stat = { value: string; label: string };

export type HeroContent = {
  eyebrow?: { white: string; gold: string };
  title: { white: string; gold: string };
  subtitle?: string;
};

export const pageHeroes = {
  home: {
    eyebrow: { white: "BOUTIQUE ", gold: "MARKETING" },
    title: {
      white: "Professional growth for ",
      gold: "small businesses",
    },
    subtitle:
      "Branding, consulting, content, websites, and digital strategies that build credibility online",
  },
  about: {
    eyebrow: { white: "ABOUT ", gold: "US" },
    title: {
      white: "A marketing partner focused on ",
      gold: "credibility and growth",
    },
  },
  contact: {
    title: { white: "Contact ", gold: "Us" },
  },
  blog: {
    title: { white: "Our ", gold: "Blog" },
    subtitle: "Insights and resources for small business marketing.",
  },
  schedule: {
    title: { white: "Schedule a ", gold: "Consultation" },
    subtitle: "Book a call to discuss your brand, goals, and next steps.",
  },
  pricing: {
    title: { white: "Pricing", gold: "" },
    subtitle: "Transparent services designed for small business growth.",
  },
  privacy: {
    title: { white: "Privacy ", gold: "Policy" },
  },
  terms: {
    title: { white: "Terms of ", gold: "Service" },
  },
  cookies: {
    title: { white: "Cookie ", gold: "Policy" },
  },
  refund: {
    title: { white: "Refund ", gold: "Policy" },
  },
} satisfies Record<string, HeroContent>;

export const homeContent = {
  hero: pageHeroes.home,
  consult: {
    intro:
      "We help small businesses strengthen their brand, improve customer engagement, and build a more credible online presence with practical marketing support.",
    carousel: [
      {
        src: siteImages.sections.carousel1,
        alt: "Business analytics dashboard on laptop",
      },
      {
        src: siteImages.sections.carousel2,
        alt: "Team collaborating in modern office",
      },
      {
        src: siteImages.sections.carousel3,
        alt: "Professional meeting with growth charts",
      },
    ],
  },
  whoWeWorkWith: {
    title: "WHO WE WORK WITH",
    segments: [
      { illustration: "online-sellers" as const, label: "Small Businesses" },
      { illustration: "retail-brands" as const, label: "Local Brands" },
      { illustration: "logistics" as const, label: "Service Providers" },
      { illustration: "scaling-businesses" as const, label: "Growing Companies" },
    ],
    subtitle: "Marketing support for businesses ready to look more professional online",
    video: "",
    socialProof: "Trusted by entrepreneurs and small business owners nationwide",
    body: "Whether you need a brand refresh, a stronger website, better social media, or a clear marketing plan, we provide structured services that help you build trust and grow with confidence.",
    detailIllustration: "growth-ecosystem" as const,
    detailIllustrationAlt: "Connected business growth ecosystem illustration",
  },
  elevate: {
    titleLines: ["Elevate Your", "Brand", "Presence Online"],
    paragraphs: [
      "Build credibility, improve engagement, and present your business",
      "with the professionalism your customers expect.",
      "Ready to strengthen your marketing foundation?",
    ],
    closing: "Let us lead the way.",
    image: {
      src: siteImages.sections.elevate,
      alt: "Professional team working together",
    },
  },
  partner: {
    heading: "Partner with a boutique team focused on your brand growth",
    listTitle: "We help you grow through:",
    bullets: [
      "Brand positioning and identity",
      "Social media and content strategy",
      "Website development and SEO",
      "Marketing consulting and planning",
    ],
    image: {
      src: siteImages.sections.partner,
      alt: "Business professionals in meeting",
    },
  },
  customerSuccess: {
    title: "Built to establish trust with potential clients.",
    body: "Our website and service packages are designed to present Black Lion as a legitimate, professional marketing business with clear offerings, secure checkout, and transparent policies.",
  },
  faqTitle: "FREQUENTLY ASKED QUESTIONS",
  faq: [
    {
      question: "What services do you offer?",
      answer:
        "We offer branding, marketing consulting, content creation, website development, social media management, and digital growth strategies for small businesses.",
    },
    {
      question: "Who is this for?",
      answer:
        "Our services are designed for small businesses and entrepreneurs that want to improve their online presence, strengthen brand identity, and engage customers more effectively.",
    },
    {
      question: "How do I get started?",
      answer:
        "Browse our pricing page, purchase a service through secure Square checkout, or contact us to request a consultation.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. We offer one-time projects, social media packages, and premium marketing packages depending on your goals.",
    },
  ] satisfies FAQItem[],
  cta: {
    heading: "Ready to strengthen your brand?",
    buttonLabel: "View Services",
  },
};

export type AboutStatCircle = { image: string; alt: string };

export const aboutContent = {
  intro: {
    tagline: {
      brand: "Black Lion",
      rest: "...marketing for small businesses",
    },
    stats: [
      {
        image: siteImages.about.stat1,
        alt: "+250 clients",
      },
      {
        image: siteImages.about.stat2,
        alt: "Automated workflows",
      },
      {
        image: siteImages.about.stat3,
        alt: "Global reach",
      },
      {
        image: siteImages.about.stat4,
        alt: "Tailored solutions",
      },
    ] satisfies AboutStatCircle[],
  },
  story: {
    logo: "/images/logo-mark.png",
    logoAlt: "Lion Business logo",
    items: [
      "Black Lion was founded to help small businesses improve their online presence with professional marketing services that are clear, credible, and accessible.",
      "Our focus is branding, consulting, content creation, website development, and digital growth strategies that strengthen trust with potential clients.",
      "Who we serve: small businesses and entrepreneurs that want to establish credibility, improve engagement, and grow online with confidence.",
    ],
  },
  experience: {
    title: "Professional service with a boutique approach",
    description:
      "Personalized marketing support tailored to each client, with transparent services and a focus on credibility.",
  },
  features: [
    {
      title: "Brand Strategy",
      description: "Positioning, messaging, and identity support that helps your business stand out.",
      icon: "star",
    },
    {
      title: "Consulting Sessions",
      description: "Focused strategy sessions to clarify goals and define practical next steps.",
      icon: "video",
    },
    {
      title: "Content & Social Media",
      description: "Content creation and social media services that keep your brand active and consistent.",
      icon: "email",
    },
    {
      title: "Website Development",
      description: "Professional websites with foundational SEO to support trust and lead generation.",
      icon: "gear",
    },
  ] satisfies AboutFeature[],
  fullService: {
    title: "Full-Service Marketing Support",
    description:
      "From audits and consultations to premium launch packages, we help small businesses build a professional presence online.",
    cta: "View services",
    image: {
      src: siteImages.sections.fullService,
      alt: "Modern office workspace",
      width: 508,
      height: 283,
    },
  },
};

export const offices: Office[] = [
  {
    city: "United States",
    country: "USA",
    email: siteConfig.email,
    phone: siteConfig.phone,
    address: siteConfig.address.suite,
    mapEmbedUrl: siteConfig.address.mapEmbedUrl,
  },
];

export const contactContent = {
  offices: {
    title: "Our offices",
    subtitle: "Contact us to speak with our team",
  },
  form: {
    title: "Contact us / Request Information",
    inquiryTitle: "Complete your purchase request",
    whatsappSubmitLabel: "Continue on WhatsApp",
    fields: {
      firstName: { label: "First Name", required: true },
      lastName: { label: "Last Name", required: false },
      phone: { label: "Phone", required: true },
      email: { label: "Email", required: true },
      message: { label: "Message", required: false },
    },
    submitLabel: "Submit",
    legalLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    consentCheckboxLabel:
      "I have read and agree to the Privacy Policy and Terms of Service.",
    consentText:
      "By submitting this form, you consent to receive communications from us regarding your inquiry. You may opt out at any time by contacting us directly.",
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  description?: string;
  status: string;
  image: { src: string; alt: string };
};

export const blogContent = {
  sectionTitle: "Latest Updates",
  posts: [
    {
      slug: "getting-started",
      title: "Getting Started with Your Growth Strategy",
      status: "Coming Soon",
      image: {
        src: siteImages.blog.post1,
        alt: "Planning and strategy session",
      },
    },
    {
      slug: "automation-basics",
      title: "",
      description: "Understanding workflow automation for small teams",
      status: "Coming Soon",
      image: {
        src: siteImages.blog.post2,
        alt: "Team working on laptops",
      },
    },
    {
      slug: "customer-engagement",
      title: "",
      description: "How to improve response times and customer satisfaction",
      status: "Coming Soon",
      image: {
        src: siteImages.blog.post3,
        alt: "Customer support team",
      },
    },
  ] satisfies BlogPost[],
};

export const blogPosts = blogContent.posts;
