export type PricingPlan = {
  id: string;
  category: string;
  name: string;
  description: string;
  setupPrice?: string;
  monthlyPrice?: string;
  priceLabel: string;
  billingNote: string;
  badge?: string;
  features: string[];
  cta: { label: string; href?: string };
  subscriptionNotice?: string;
  highlighted?: boolean;
};

export type PricingAddon = {
  name: string;
  price: string;
  description?: string;
  features?: string[];
};

export const pricingContent = {
  hero: {
    title: { white: "Pricing", gold: "" },
    subtitle:
      "Professional marketing services designed to help small businesses build credibility, strengthen brand identity, and grow online.",
    priceRange: "Services from $80.99 · social media packages from $1,000.99 · premium packages up to $5,000.99",
    disclaimer:
      "All prices are published in USD as one-time payments. Payments are processed securely through Square.",
  },
  shop: {
    title: "Marketing Services & Packages",
    subtitle:
      "Clear service descriptions, transparent pricing, and secure checkout via Square for every package below.",
  },
  plans: [
    {
      id: "social-media-audit",
      category: "Marketing Audit",
      name: "Social Media Audit",
      description:
        "A professional review of your current social presence with clear recommendations to improve credibility and engagement.",
      setupPrice: "$80.99",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Audit of up to 3 social profiles",
        "Profile, content, and branding review",
        "Competitive snapshot",
        "Written recommendations report",
        "Priority improvement checklist",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "marketing-consultation",
      category: "Marketing Consultation",
      name: "Marketing Consultation Session",
      description:
        "A focused strategy session to clarify your goals, identify opportunities, and define your next marketing steps.",
      setupPrice: "$250.99",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "60-minute consultation session",
        "Business and brand goals review",
        "Channel and audience assessment",
        "Actionable strategy recommendations",
        "Session summary with next steps",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "social-media-setup",
      category: "Social Media Services",
      name: "Social Media Setup & Optimization",
      description:
        "Professional setup and optimization of your social profiles so your brand looks credible and consistent online.",
      setupPrice: "$1,000.99",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Profile setup or optimization (up to 2 platforms)",
        "Bio, highlights, and visual alignment",
        "Brand voice and messaging guidance",
        "Content pillar recommendations",
        "Best-practices launch checklist",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "brand-positioning",
      category: "Branding Services",
      name: "Brand Positioning Strategy",
      description:
        "Define how your business should be perceived, who you serve, and what makes your brand stand out in the market.",
      setupPrice: "$500.99",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Brand positioning framework",
        "Target audience definition",
        "Core messaging and value proposition",
        "Brand voice guidelines",
        "Visual and tone direction summary",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "marketing-strategy-blueprint",
      category: "Marketing Strategy",
      name: "Marketing Strategy Blueprint",
      description:
        "A custom marketing roadmap with channel priorities, growth objectives, and a practical plan your team can execute.",
      setupPrice: "$549",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      badge: "Popular",
      highlighted: true,
      features: [
        "Custom marketing strategy document",
        "Channel priorities and KPI framework",
        "90-day action plan",
        "Content and campaign direction",
        "Strategy review session included",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "website-development-seo",
      category: "Website Services",
      name: "Website Development & SEO",
      description:
        "A professional website built to establish trust, support lead generation, and include foundational on-page SEO.",
      setupPrice: "$850.99",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Professional business website build",
        "Mobile-responsive design",
        "On-page SEO foundation",
        "Contact and lead capture setup",
        "Launch support and handoff",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "rush-content-delivery",
      category: "Content Creation",
      name: "Rush Content Delivery",
      description:
        "Accelerated turnaround on eligible content packages when you need brand-ready assets delivered faster.",
      setupPrice: "$199",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Priority production queue",
        "Faster delivery on eligible content packages",
        "Brand-aligned creative direction",
        "Organized files ready to publish",
        "One round of revisions included",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "social-media-content-package",
      category: "Content Creation",
      name: "Social Media Content Creation Package",
      description:
        "A complete batch of custom social content designed to strengthen your brand presence and support consistent posting.",
      setupPrice: "$2,500.99",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Custom social content batch",
        "Graphics and copy for key platforms",
        "Brand-aligned creative direction",
        "Content organized for easy publishing",
        "One round of revisions included",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "marketing-growth-package",
      category: "Premium Marketing",
      name: "Marketing Growth Package",
      description:
        "A premium package combining strategy, content, and ongoing support to accelerate your brand's digital growth.",
      setupPrice: "$1,500.00",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Multi-channel growth strategy",
        "Content planning and creative direction",
        "Social media management support",
        "Performance review session",
        "Priority email support",
      ],
      cta: { label: "Buy Now" },
    },
    {
      id: "premium-brand-launch",
      category: "Premium Marketing",
      name: "Premium Brand Launch Package",
      description:
        "Our most comprehensive package for businesses ready to launch or relaunch with a professional, credible online presence.",
      setupPrice: "$5,000.99",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Brand positioning and messaging support",
        "Website development and SEO foundation",
        "Social media setup and launch content",
        "Launch campaign coordination",
        "Dedicated onboarding and launch review",
      ],
      cta: { label: "Buy Now" },
    },
  ] satisfies PricingPlan[],
  addons: {
    title: "Need something tailored?",
    items: [
      {
        name: "Additional Consultation Session (60 min)",
        price: "$150.99",
        description: "Add another strategy session to any package.",
      },
      {
        name: "Extra Social Platform Setup",
        price: "$100.99",
        description: "Expand setup and optimization to an additional platform.",
      },
      {
        name: "Custom Strategy Add-On",
        price: "$300.99",
        description: "Extended planning for campaigns, launches, or new markets.",
      },
    ] as PricingAddon[],
  },
  policies: {
    cancellation: {
      title: "Cancellation & Refund Policy",
      items: [
        "One-time services: Non-refundable once work has commenced, unless otherwise stated at checkout.",
        "Consultation sessions: Reschedule with 24 hours notice. No-shows may forfeit the session.",
        "Refund requests are reviewed on a case-by-case basis as described in our Refund Policy.",
      ],
    },
    billing: {
      title: "Billing notices",
      items: [
        "All prices are listed in USD as one-time payments. Plus applicable taxes.",
        "Payments are processed securely through Square, Inc.",
        "Service deliverables and timelines are confirmed during onboarding.",
      ],
    },
    disclaimer:
      "We do not guarantee specific results or outcomes. Marketing performance depends on market conditions, client participation, and implementation. See our Refund Policy for full details.",
  },
  faqTitle: "FREQUENTLY ASKED QUESTIONS",
  faq: [
    {
      question: "What services does EC Brand Group offer?",
      answer:
        "We offer branding, marketing consulting, content creation, website development, social media management, and digital growth strategies for small businesses.",
    },
    {
      question: "Can I request a consultation before purchasing?",
      answer:
        "Yes. You can book a consultation through our contact page or purchase a Marketing Consultation Session directly from our pricing page.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards and other methods shown at checkout via Square. All listed services support secure online payment.",
    },
    {
      question: "How do I get started after purchase?",
      answer:
        "After checkout, our team contacts you to confirm service details, gather business information, and schedule onboarding.",
    },
  ],
};
