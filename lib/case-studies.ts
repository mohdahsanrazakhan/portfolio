export interface CaseStudyStat {
  label: string;
  value: string;
}

export interface CaseStudyAccordionItem {
  title: string;
  description: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  /** span 2 columns on desktop for a bigger, "hero" style image inside the gallery */
  wide?: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  coverImage: string;
  /** Used for the large hero image on the case study page; falls back to coverImage when omitted */
  heroImage?: string;

  // Overview / meta strip
  client: string;
  role: string;
  timeline: string;
  services: string[];
  liveUrl?: string;
  githubUrl?: string;

  // Narrative sections - eyebrow/title fall back to sensible defaults in
  // CaseStudyContent when omitted, so existing case studies keep rendering
  // unchanged; set them per case study to override the section heading.
  overviewEyebrow?: string;
  overviewTitle?: string;
  overview: string;

  // "Challenges & Project Goals" - rendered as a single flat accordion
  challengesEyebrow?: string;
  challengesTitle?: string;
  challengesIntro: string;
  challenges: CaseStudyAccordionItem[];
  goals?: CaseStudyAccordionItem[];

  // "Our Approach" - rendered as a single accordion group
  approachEyebrow?: string;
  approachTitle?: string;
  approachIntro?: string;
  approach: CaseStudyAccordionItem[];

  // Optional "Key Features & Business Value" - rendered like challenges/goals
  featuresEyebrow?: string;
  featuresTitle?: string;
  featuresIntro?: string;
  features?: CaseStudyAccordionItem[];

  // Optional supporting sections - leave undefined to skip a section entirely
  gallery?: CaseStudyImage[];
  stats?: CaseStudyStat[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };

  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  // {
  //   slug: "flowdesk-crm",
  //   title: "flowdesk CRM",
  //   tagline:
  //     "A modern, scalable CRM that unifies leads, campaigns, and business workflows into a single dashboard.",
  //   coverImage: "/project2.webp",

  //   client: "Personal / Product Project",
  //   role: "Full Stack Developer",
  //   timeline: "2024",
  //   services: ["Product Design", "Frontend Development", "Backend Development"],
  //   liveUrl: "https://flowdesk-crm.vercel.app",
  //   githubUrl: "https://github.com/mohdahsanrazakhan/flowdesk-crm",

  //   overview:
  //     "flowdesk is a CRM dashboard built to help small teams manage leads, campaigns, and day-to-day workflows without juggling multiple disconnected tools. The goal was to design something that felt as approachable as a to-do app, but powerful enough to run an entire sales pipeline.",

  //   challengesIntro:
  //     "Most CRMs available to small teams are either too simplistic to scale with the business, or so feature-heavy that onboarding a new teammate takes days. The real challenge was designing a single, unified workspace that stays fast and legible even as the number of leads, campaigns, and pipelines grows.",
  //   challenges: [
  //     {
  //       title: "Too Many Disconnected Tools",
  //       description:
  //         "Teams were stitching together spreadsheets, email threads, and separate campaign tools - losing context every time a lead moved between stages.",
  //     },
  //     {
  //       title: "Scaling Without Slowing Down",
  //       description:
  //         "The dashboard needed to stay fast and legible whether a team was tracking 20 leads or 2,000, without the UI buckling under its own data.",
  //     },
  //     {
  //       title: "Onboarding Had to Be Instant",
  //       description:
  //         "New teammates needed to understand the pipeline in minutes, not days - every screen had to explain itself.",
  //     },
  //   ],
  //   goals: [
  //     {
  //       title: "One Unified Workspace",
  //       description:
  //         "Replace spreadsheets and scattered tools with a single dashboard for leads, campaigns, and team workflows.",
  //     },
  //     {
  //       title: "Stay Fast at Scale",
  //       description:
  //         "Keep the interface responsive and legible as lead volume and campaign count grow.",
  //     },
  //     {
  //       title: "Ship a Real MVP",
  //       description:
  //         "Deliver a fully functional product - not just a prototype - that could be used by a real sales team from day one.",
  //     },
  //   ],

  //   approachIntro:
  //     "To build a CRM that felt simple without cutting corners, the process was broken down into four key stages.",
  //   approach: [
  //     {
  //       title: "Research & Planning",
  //       description:
  //         "Mapped how small sales teams actually track leads today - spreadsheets, inboxes, sticky notes - to define the core workflows flowdesk needed to replace.",
  //     },
  //     {
  //       title: "UI & Component System",
  //       description:
  //         "Designed a reusable component system in Tailwind CSS so every screen - pipeline, campaigns, settings - shares the same visual language and interaction patterns.",
  //     },
  //     {
  //       title: "Build & Iterate",
  //       description:
  //         "Built the dashboard in React with a normalized data layer, shipping the leads pipeline first and layering campaign management on top once the core felt solid.",
  //     },
  //     {
  //       title: "Polish & Ship",
  //       description:
  //         "Tuned performance, responsive layouts, and empty/loading states, then deployed to Vercel for fast, reliable delivery.",
  //     },
  //   ],

  //   gallery: [
  //     { src: "/project2.webp", alt: "flowdesk CRM dashboard overview", wide: true },
  //     { src: "/project2.webp", alt: "flowdesk CRM leads pipeline view" },
  //     { src: "/project2.webp", alt: "flowdesk CRM campaign management screen" },
  //   ],

  //   stats: [
  //     { value: "100%", label: "Responsive across devices" },
  //     { value: "3", label: "Core modules shipped" },
  //     { value: "2024", label: "Year built" },
  //   ],

  //   technologies: ["React.js", "Tailwind CSS", "JavaScript"],
  // },
  {
    slug: "gulfsync",
    title: "GulfSync Dashboard",
    tagline:
      "Unified e-commerce intelligence for Gulf multi-channel sellers - one dashboard for Noon, Amazon.ae, and Shopify, with Gulf-specific analytics and AI on top.",
    coverImage: "/gulfsync.webp",

    client: "Self-Initiated Demo Project",
    role: "Full Stack Developer",
    timeline: "4 Weeks - Discovery to Deployment",
    services: [
      "Product Design",
      "Full-Stack Development",
      "AI Integration",
      "Security Hardening",
    ],
    liveUrl: "https://gulfsync.mohdahsanrazakhan.com",
    githubUrl: "https://github.com/mohdahsanrazakhan/gulfsync-dashboard",

    overview:
      "GulfSync Dashboard was built to solve a problem almost every Gulf e-commerce seller runs into: selling on Noon, Amazon.ae, and Shopify at once means three separate seller dashboards, three sets of numbers, and no single source of truth. It's a self-initiated portfolio build - demoed through a hypothetical persona, NoonCart Trading LLC, a Dubai-based seller doing 1,000-5,000 orders a month across all three channels - running on realistic seeded data rather than a live client's transactions. The build pulls all three channels into one authenticated dashboard, layers in the analytics Gulf sellers actually need (COD collection by city, delivery-partner performance, return reasons), and adds AI for the two jobs a lean ops team never has time for: writing bilingual product content and surfacing insights buried in the numbers.",

    challengesIntro:
      "NoonCart had the sales volume of a real business but the operational tooling of a spreadsheet-run startup - three dashboards, no shared view, and Gulf-specific data (COD, BNPL, regional delivery partners) that generic e-commerce tools don't track at all.",
    challenges: [
      {
        title: "No Unified View Across Channels",
        description:
          "Revenue and orders lived in three separate seller dashboards, forcing 2-3 hours a day of manual cross-checking in spreadsheets before any real decision could be made.",
      },
      {
        title: "Inventory Silently Out of Sync",
        description:
          "Warehouse stock and channel-listed stock drifted apart with no alerting - 5 SKUs were regularly oversold on Shopify because the listed stock looked available when it wasn't.",
      },
      {
        title: "COD Performance Was a Blind Spot",
        description:
          "Cash on Delivery makes up roughly 40% of Gulf orders, but with no city-level tracking, a 38% COD rejection rate in Riyadh - nearly double the 22% national average - went completely unnoticed.",
      },
      {
        title: "English-Only Listings Missed Arabic Shoppers",
        description:
          "Writing Arabic descriptions for the 85-product catalog manually was quoted at 2+ weeks of copywriter time, leaving Arabic-first shoppers underserved in the meantime.",
      },
    ],
    goals: [
      {
        title: "One Dashboard, Every Channel",
        description:
          "Replace three separate logins and manual reconciliation with a single authenticated view of revenue, orders, and inventory across Noon, Amazon.ae, and Shopify.",
      },
      {
        title: "Make Gulf-Specific Data Visible",
        description:
          "Track what generic tools ignore - COD collection by city, BNPL split (Tabby/Tamara), UAE vs. KSA VAT, and delivery-partner performance by region.",
      },
      {
        title: "Put AI to Work on Real Bottlenecks",
        description:
          "Use AI for the two tasks a solo ops team has no time for: turning raw data into plain-language insights, and generating bilingual (EN/AR) product content in seconds.",
      },
      {
        title: "Treat Security as Non-Negotiable",
        description:
          "Build to a production security standard from day one - a direct answer to the standard Gulf client question: 'how do I know my data is safe with a solo developer?'",
      },
    ],

    approachIntro:
      "The build was broken into four weekly phases, moving from real Gulf-market data modeling to a hardened, production-standard dashboard.",
    approach: [
      {
        title: "Phase 1: Discovery & Data Modeling",
        description:
          "Mapped the fields Gulf sellers actually deal with - COD vs. Mada vs. Tabby/Tamara BNPL, UAE (5%) vs. KSA (15%) VAT, and regional delivery partners like Aramex, SMSA, Fetchr, J&T, and DHL - into a MongoDB schema built to handle 5,000+ orders without slowing down.",
      },
      {
        title: "Phase 2: Core Dashboard Build",
        description:
          "Built the authenticated dashboard shell in Next.js 14 (App Router), the unified Overview page, a cross-channel Orders module, and an Inventory module with automatic mismatch detection between warehouse and channel-listed stock.",
      },
      {
        title: "Phase 3: Analytics & AI Layer",
        description:
          "Added the deep analytics suite (returns, COD-by-city, delivery-partner performance) and two AI features on OpenAI's API: an Insights engine that surfaces plain-language findings, and a Content Generator that produces bilingual EN/AR product copy in one click.",
      },
      {
        title: "Phase 4: Security Hardening & QA",
        description:
          "Because this handles order and customer data, security was treated as a first-class requirement - bcrypt-hashed credentials, server-side session checks on every route, full Zod validation, security headers, and rate-limited auth.",
      },
    ],

    featuresIntro:
      "Every feature ties back to a specific operational pain point rather than being built for its own sake.",
    features: [
      {
        title: "Unified Overview",
        description:
          "Revenue, orders, COD rate, and return rate across all channels on one screen - kills the daily 2-3 hour manual reconciliation habit.",
      },
      {
        title: "Cross-Channel Order Management",
        description:
          "Filter and search orders by channel, status, payment method, city, and delivery partner - one place to manage 5,000+ orders instead of three logins.",
      },
      {
        title: "Inventory Mismatch Detection",
        description:
          "Flags SKUs where warehouse stock and channel-listed stock disagree - directly prevents overselling and the cancellations that follow.",
      },
      {
        title: "COD & Delivery Analytics",
        description:
          "COD collection rate by city and delivery-partner failure rates - turns the #1 Gulf-specific blind spot most tools ignore into an actionable metric.",
      },
      {
        title: "AI Insights Engine",
        description:
          "Reads the aggregated data and surfaces plain-language findings - like flagging that COD rejection in one city runs well above average - giving a one-person team the output of a data analyst on demand.",
      },
      {
        title: "AI Bilingual Content Generator",
        description:
          "Generates SEO-optimized English and Arabic titles, descriptions, and meta tags in seconds - replacing weeks of copywriting work and opening up the Arabic-speaking customer segment.",
      },
    ],

    gallery: [
      {
        src: "/gulfsync-g1.webp",
        alt: "GulfSync Dashboard - unified overview across Noon, Amazon.ae, and Shopify",
        wide: true,
      },
      {
        src: "/gulfsync-g2.webp",
        alt: "GulfSync Dashboard - unified overview across Noon, Amazon.ae, and Shopify",
        
      },
      {
        src: "/gulfsync-g3.webp",
        alt: "GulfSync Dashboard - unified overview across Noon, Amazon.ae, and Shopify",
        
      },
    ],

    stats: [
      {
        value: "38% vs 22%",
        label: "Riyadh COD rejection vs. national average, surfaced automatically",
      },
      {
        value: "5 SKUs",
        label: "At-risk inventory mismatches flagged before they caused overselling",
      },
      {
        value: "14% vs 6%",
        label: "Fetchr vs. Aramex delivery-failure rate, surfaced for renegotiation",
      },
      {
        value: "< 1 hr",
        label: "To generate bilingual EN/AR content for the full 85-product catalog",
      },
    ],

    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "Mongoose",
      "NextAuth.js",
      "OpenAI API",
      "Recharts",
      "Vercel",
    ],
  },
  {
    slug: "returnlens",
    title: "ReturnLens",
    tagline:
      "Return and COD intelligence for Gulf e-commerce sellers, turning a vague monthly loss number into a ranked, costed action list.",
    coverImage: "/returnlens.webp",
    heroImage: "/returnlens-csh.webp",

    client: "Self-Initiated Demo Project",
    role: "Full Stack Developer",
    timeline: "4 Weeks, Discovery to Deployment",
    services: [
      "Product Design",
      "Full-Stack Development",
      "AI Integration",
      "Security Hardening",
    ],
    liveUrl: "https://returnlens.mohdahsanrazakhan.com",
    githubUrl: "https://github.com/mohdahsanrazakhan/returnlens-analytics",

    overview:
      "ReturnLens was built to solve a problem almost every Gulf e-commerce seller can feel but can't point to: a monthly loss from returns and failed cash-on-delivery orders that shows up as a single lump sum in the accounting export, with no breakdown of why it happens or who's driving it. It's a self-initiated portfolio build, demoed through a hypothetical persona, Al Waha Retail, a Riyadh-based apparel, footwear, and electronics seller doing 800-3,000 orders a month across Noon, Amazon.ae, and Shopify, running on realistic seeded data rather than a live client's transactions. The dashboard ingests order, return, and COD data, calculates financial loss in real time, breaks it down by city, category, product, and customer, then layers AI on top to turn those patterns into a ranked, costed action list.",

    challengesIntro:
      "Al Waha had the order volume of a serious retailer but no instrument that translated a vague 'we're losing money' feeling into exactly where the money was going and what to do about it.",
    challenges: [
      {
        title: "No Visibility Into Why Returns Happen",
        description:
          "Returns were treated as a fixed cost of doing business instead of a solvable pattern, no team member could name the top return reason without pulling raw order exports.",
      },
      {
        title: "COD Rejection Tracked as One National Number",
        description:
          "Riyadh was quietly running an 18% COD rejection rate against a Gulf average near 12%, invisible inside a single blended metric.",
      },
      {
        title: "No Link Between Order Value and COD Risk",
        description:
          "Orders above SAR 500 were rejected at up to 28%, nearly 3.5x the rate of small orders, meaning COD was being accepted on exactly the orders most likely to fail.",
      },
      {
        title: "No Way to Identify Repeat-Offender Customers",
        description:
          "6% of customers were responsible for a disproportionate share of returns and COD rejections, but with no scoring system they were treated the same as every other buyer.",
      },
    ],
    goals: [
      {
        title: "Turn Loss Into a Real-Time, Explainable Number",
        description:
          "Replace the single blended monthly accounting hit with a real-time calculator that splits return cost from COD loss and estimates recoverable savings.",
      },
      {
        title: "Make City and Product-Level Patterns Visible",
        description:
          "Surface COD success by city, return reasons by category, and per-SKU return rates so the team can act on specific, named problems instead of a fixed cost of doing business.",
      },
      {
        title: "Score Customer Risk, Not Just Order Volume",
        description:
          "Build a 0 to 100 risk score per customer from return rate, COD history, and recent behavior, so the small slice of customers driving disproportionate loss can be handled differently.",
      },
      {
        title: "Treat Security as Non-Negotiable",
        description:
          "Build to a production security standard from day one, a direct answer to the standard Gulf client question: 'how do I know my order and customer data is safe with a solo developer?'",
      },
    ],

    approachIntro:
      "The build was broken into four weekly phases, moving from Gulf-market data modeling to a hardened, production-standard dashboard with AI-generated recommendations on top.",
    approach: [
      {
        title: "Phase 1: Discovery & Data Modeling",
        description:
          "Mapped the fields that actually drive Gulf return and COD outcomes, payment method (COD, Mada, Apple Pay, Tabby, Tamara), delivery partner (Aramex, SMSA, Fetchr, J&T, DHL), return reason, days-to-return, and city-level geography across UAE and KSA, into a MongoDB schema indexed for fast filtering across 8,000+ orders.",
      },
      {
        title: "Phase 2: Loss Calculation & Core Dashboard",
        description:
          "Built the authenticated dashboard shell in Next.js 14 (App Router) and the signature Overview screen, a real-time money-lost calculator that separates return cost from COD loss and estimates recoverable savings, backed by configurable cost assumptions rather than hardcoded constants.",
      },
      {
        title: "Phase 3: Analytics & Risk Scoring",
        description:
          "Built the four deep-dive modules, Returns, COD, Products, and Customers, including a city-by-city COD success comparison, a return-timing breakdown, and a 0 to 100 customer risk-scoring algorithm that flags the customers driving a disproportionate share of loss.",
      },
      {
        title: "Phase 4: AI Recommendations & Security Hardening",
        description:
          "Seeded 20 data-backed recommendations ranked by priority and projected savings, added an on-demand AI generator (OpenAI GPT-4o-mini) that drafts new recommendations from live trend data, then hardened the whole application to production security standard.",
      },
    ],

    featuresIntro:
      "Every feature ties back to a specific loss driver rather than being built for its own sake.",
    features: [
      {
        title: "Money Lost Calculator",
        description:
          "Real-time total loss to returns and COD rejections, split by cause, with a projected recoverable-savings figure, turns a vague monthly accounting hit into a specific number the whole team rallies around.",
      },
      {
        title: "City-Level COD Analytics",
        description:
          "COD success rate by city, rejection reasons, and rejection rate by order value, surfaces exactly where COD is bleeding money, the number one Gulf-specific blind spot most tools ignore.",
      },
      {
        title: "Return Analytics",
        description:
          "Reason breakdown, category, city, and channel comparisons, and return-timing distribution, reframes returns from a cost of doing business into a fixable quality and sizing problem.",
      },
      {
        title: "Product Risk Analysis",
        description:
          "Category heatmap plus a sortable product table with per-SKU return rate, top reason, and total loss, tells the merchandising team exactly which SKUs to fix, re-photograph, or discontinue.",
      },
      {
        title: "Customer Risk Scoring",
        description:
          "0 to 100 score per customer from return rate, COD history, and recent behavior, with a recommended action per tier, identifies the small segment driving disproportionate loss with a clear next step.",
      },
      {
        title: "AI Recommendations",
        description:
          "20 pre-ranked, costed actions plus on-demand generation of new ones from live data, gives a lean ops team the output of a data analyst on demand, without hiring one.",
      },
    ],

    gallery: [
      {
        src: "/returnlens-g1.webp",
        alt: "ReturnLens dashboard, real-time return and COD loss calculator",
        wide: true,
      },
      {
        src: "/returnlens-g2.webp",
        alt: "ReturnLens dashboard, real-time return and COD loss calculator",
      },
      {
        src: "/returnlens-g3.webp",
        alt: "ReturnLens dashboard, real-time return and COD loss calculator",
      },
    ],

    stats: [
      {
        value: "SAR 127,450",
        label: "Trailing 30-day loss surfaced, split into returns and COD rejections",
      },
      {
        value: "18% vs 12%",
        label: "Riyadh COD rejection vs. Gulf average, surfaced automatically at the city level",
      },
      {
        value: "28% vs 8%",
        label: "COD rejection rate on orders above SAR 500 vs. smaller orders",
      },
      {
        value: "SAR 38,000/mo",
        label: "Estimated recoverable savings across the top three ranked recommendations",
      },
    ],

    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "Mongoose",
      "NextAuth.js",
      "OpenAI API",
      "Recharts",
      "Vercel",
    ],
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getAllCaseStudySlugs = () => caseStudies.map((c) => c.slug);
