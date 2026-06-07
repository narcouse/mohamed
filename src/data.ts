import { Service, Project, Review, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    name: 'Website Development',
    iconName: 'Code',
    shortDescription: 'High-performance interactive web systems, built custom with standard security, responsiveness, and speed optimization.',
    fullDescription: 'We build fast, secure, and modern custom web applications optimized for premium conversions. Using React, Node, and Tailwind CSS, we craft interfaces that align perfectly with your business guidelines and load in under a second.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: [
      'React & NextJS Enterprise Architecture',
      'Fast-loading server-side rendering (SSR)',
      'Impeccable responsiveness across tablets & mobiles',
      'Custom API & external integrations',
      'Security auditing and performance optimization'
    ],
    resultsTitle: 'Development Output',
    resultsMetric: '99% Google Lighthouse Speed Score'
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    iconName: 'Megaphone',
    shortDescription: 'Hyper-targeted lead acquisition campaigns across search and social channels, maximizing ROI with granular analysis.',
    fullDescription: 'Stop wasting budget on broad audiences. We configure laser-guided search engine advertising, social channel optimizations, and smart programmatic layouts designed to turn interest into qualified enterprise pipeline.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    features: [
      'Laser targeted PPC campaigns',
      'Multi-channel search & social programmatic ads',
      'Automated marketing funnel setup',
      'Comprehensive conversion rate audit (CRO)',
      'Advanced behavioral attribution maps'
    ],
    resultsTitle: 'Ad Performance',
    resultsMetric: '4.6x Average Campaign ROI'
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    iconName: 'TrendingUp',
    shortDescription: 'Dominating competitive organic search keywords via complete technical audits, content strategies, and authority building.',
    fullDescription: 'Position your business at the very top of Google for the high-intent keywords that drive sales. Our complete structural SEO audits combined with robust keyword modeling and domain authority growth secure lasting organic traffic.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    features: [
      'Exhaustive technical search crawlers analysis',
      'Strategic search intent mapping',
      'High-quality thematic off-page authority growth',
      'Page-speed & Core Web Vitals remediation',
      'Competitor link profile benchmarking'
    ],
    resultsTitle: 'Organic Growth',
    resultsMetric: '+320% Average First-Year Search Traffic'
  },
  {
    id: 'branding-identity',
    name: 'Branding & Identity',
    iconName: 'Palette',
    shortDescription: 'Cohesive visual architectures, naming guidelines, typography libraries, and corporate design kits that capture credibility.',
    fullDescription: 'Create an undeniable premium presence. We develop memorable visual identities, tone-of-voice frameworks, corporate guidelines, and premium asset packages that establish immediate authority in high-end markets.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Unique typographic system selection',
      'Strategic positioning & brand messaging manuals',
      'Corporate logo packages & dynamic graphics patterns',
      'Comprehensive brand asset style guides',
      'Product and packaging visual layout'
    ],
    resultsTitle: 'Brand Recognition',
    resultsMetric: '100% Unique Trademark Ready Style Kits'
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    iconName: 'PenTool',
    shortDescription: 'High-end storytelling, copywriting, strategic newsletters, and industry reports written for demanding executives.',
    fullDescription: 'Capture high-tier mindshare with editorial-grade writing. We structure premium whitepapers, case study narratives, email series, and social thought-leadership that position you as an undisputed industry voice.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Executive-level thought leadership ghostwriting',
      'High-authority case study copy production',
      'SEO-infused technical engineering guides',
      'Interactive newsletter curation workflows',
      'Engaging video scripts & visual assets drafting'
    ],
    resultsTitle: 'Audience Engagement',
    resultsMetric: '3x Higher Lead Magnet Opt-Ins'
  },
  {
    id: 'portfolio-management',
    name: 'Portfolio Management',
    iconName: 'Briefcase',
    shortDescription: 'End-to-end digital portfolio optimization and case-study strategy to convert enterprise-scale pipeline leads.',
    fullDescription: 'For established services and investment groups, we build powerful interactive portfolio platforms that demonstrate your aggregate results, deal flows, asset highlights, and growth curves in high-fidelity interfaces.',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Interactive dashboard for investor reviews',
      'Dynamic deal & case history records',
      'Aggregate performance statistics dashboards',
      'Premium investor relations landing assets',
      'Interactive financial and metrics charts'
    ],
    resultsTitle: 'Platform Conversion',
    resultsMetric: '+85% Client Inquiry Close Rate'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'luminary-fintech',
    title: 'Luminary Fintech Platform',
    category: 'Website Development',
    description: 'An ultra-fast responsive investor platform built with advanced charts, real-time security layers, and an elegant dark UI.',
    fullDetails: 'Luminary required a highly polished digital workspace for their asset management platform. We built a complete React system that integrates custom charts reporting $4B+ visual transaction streams. The client secured an immediate $45M Series B funding round off the strength of the user experience.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Load Time', value: '0.4s' },
      { label: 'Session Time', value: '18min avg' },
      { label: 'Conversion', value: '+340%' }
    ],
    tags: ['React', 'D3 Charts', 'Tailwind', 'Real-Time Sync'],
    client: 'Luminary Asset Mgmt Ltd',
    year: '2025'
  },
  {
    id: 'apex-logistics',
    title: 'Apex Global Organic Expansion',
    category: 'SEO Optimization',
    description: 'Dominating international supply-chain keywords, driving inbound enterprise queries without paid search spend.',
    fullDetails: 'We took Apex Logistics through an extensive sitewide technical architecture repair, crawling millions of indexable variants and rewriting duplicate metadata. By following and constructing contextual resource silos, we rank Apex #1 globally for premier transport logistics keywords.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Search Ranking', value: '#1 Keywords (140+)' },
      { label: 'Monthly Visitors', value: '450k Organic' },
      { label: 'Acquisition Cost', value: '-65% savings' }
    ],
    tags: ['Technical Audit', 'Content Map', 'Keyword Silos', 'Link Growth'],
    client: 'Apex Global Logistics Inc',
    year: '2025'
  },
  {
    id: 'aurora-skincare',
    title: 'Aurora Clean Beauty Branding',
    category: 'Branding & Identity',
    description: 'Complete visual identity overhaul and sustainable packaging design system, yielding strong retail placements.',
    fullDetails: 'Aurora came to us to transition their direct-to-consumer cosmetics into high-end retail chains. We designed a typography-forward visual system, packaging style guidelines, and print collateral. Immediately following the brand refresh, Sephora listed their entire line nationally.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Retail Stores', value: '540+ Locations' },
      { label: 'Social Reach', value: '+1.2M impressions' },
      { label: 'Rebranding Growth', value: '280% Sales Lift' }
    ],
    tags: ['Visual Identity', 'Typography Standard', 'Packaging Layout', 'Design Tokens'],
    client: 'Aurora Beauty Co',
    year: '2024'
  },
  {
    id: 'meridian-software',
    title: 'Meridian Global Lead Funnels',
    category: 'Digital Marketing',
    description: 'Paid traffic pipeline execution targeting Fortune 500 VP decision-makers, keeping CAC incredibly low.',
    fullDetails: 'We established a hyper-customized multi-channel LinkedIn & Google search approach, testing hundreds of creative and message-market match angles. This highly analytical approach connected Meridian directly with SaaS buyers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Cost Per Lead', value: '-48% reduction' },
      { label: 'Deals Attributed', value: '$12M pipeline' },
      { label: 'Ad CTR Score', value: '3.8% Premium' }
    ],
    tags: ['LinkedIn Ads', 'Google Adwords', 'Advanced Attribution', 'ROAS Analysis'],
    client: 'Meridian Enterprise Solutions',
    year: '2025'
  },
  {
    id: 'vanguard-capital',
    title: 'Vanguard Ventures Showcase',
    category: 'Portfolio Management',
    description: 'A luxurious interactive portal demonstrating growth history, asset metrics, and investment transparency.',
    fullDetails: 'Vanguard Ventures needed a premium showcase for their real-estate and tech asset portfolios. We constructed a gorgeous web platform enabling prospective investors to filter assets seamlessly, view performance curves, and get direct deal data in real time.',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Inquiries Logged', value: '1,200+ Qualified' },
      { label: 'Engagement Rate', value: '+240%' },
      { label: 'Platform Security', value: 'SOC2 Certified Layout' }
    ],
    tags: ['Framer Motion', 'Portfolio Filter', 'SaaS Interactive Canvas', 'Responsive Charts'],
    client: 'Vanguard Capital Partners',
    year: '2026'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah Jenkins',
    role: 'Vice President of Growth',
    company: 'Luminary Asset Management',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'MERMO LLC has completely rewritten the industry standard for digital agencies. Their design team transformed our product layout into a breathtaking, premium digital workspace. Our site speeds increased instantly, and investor inquires jumped by 340% within weeks of going live. They deliver unparalleled digital engineering combined with masterclass styling.',
    date: 'May 12, 2026'
  },
  {
    id: 'rev-2',
    author: 'David Vance',
    role: 'Head of Brand Marketing',
    company: 'Aurora Skincare Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Rebranding a successful skincare company was highly risky, but MERMO LLC removed all fear. Their holistic research, typographic choices, and gorgeous packaging design assets struck critical acclaim. Our sales figures practically tripled following launch, and the transition into major retail went smoothly. They are pure creative experts.',
    date: 'April 20, 2026'
  },
  {
    id: 'rev-3',
    author: 'Elena Rostova',
    role: 'Director of Organic Growth',
    company: 'Apex Logistics Global',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'We spent tens of thousands with other agencies only to get fancy slideshows and flat organic traffic. MERMO LLC came in and performed incredibly deep technical SEO surgeries. They built clear page silos and helped craft strategic knowledge hubs. Within six months, we jumped to page one for our absolute highest-value enterprise search targets.',
    date: 'March 15, 2026'
  },
  {
    id: 'rev-4',
    author: 'Marcus Thorne',
    role: 'Chief Executive Officer',
    company: 'Vanguard Ventures Group',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'As an investment group, our online portal is our primary presentation asset. MERMO LLC took our vision and delivered a fast-loading, state-of-the-art interactive canvas showing off-market assets. The glassmorphism card UI looks incredibly rich and behaves flawlessly on desktop and phone screens. Absolute elite performers.',
    date: 'June 01, 2026'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Blueprint of a 0.3s Page Load Time in React',
    excerpt: 'Deep technical breakdown on layout optimization, component isolation, asset formatting, and minimizing main thread blockings.',
    content: `To build exceptionally fast digital agency portfolios that attract leading clients, response speeds must be absolutely flawless. Let's delve into structural steps to optimize client-side React rendering paths in 2026.

### 1. The Bottlenecks of Modern Web Frameworks
In traditional client-side rendering, massive dependency footprints, heavy third-party tracking scripts, and large, unoptimized media files block critical browsers layout threads, inducing heavy layout shifts and sluggish click latencies.

### 2. Radical Asset Optimization
Never use raw PNG or heavy JPEG models on displays:
* Leverage highly compressed Next-Gen WebP and AVIF formats.
* Pre-render or lazy-load lower-hierarchy visual layers.
* Implement custom viewport bounds triggers using standard \`IntersectionObserver\` APIs to only parse image blocks once they transition near active focus realms.

### 3. Eliminating Main-Thread Render Blocks
By utilizing lightweight design frameworks like Tailwind CSS, styles are generated completely inline as short utility abbreviations, bypassing costly CSS layout parser operations. Segmenting heavy components with layout thresholds prevents React from triggering heavy updates over parts of the application that remain in static view, preserving vital CPU power for scrolling and transitions.

Implementing these guidelines consistently ensures that interactive SaaS landing areas and portfolios retain consistent 99%+ mobile and desktop speed benchmarks.`,
    category: 'Website Development',
    readTime: '6 min read',
    date: 'June 05, 2026',
    author: {
      name: 'Julian Mercer',
      role: 'Chief Solutions Architect',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'PageSpeed', 'Tailwind', 'Performance']
  },
  {
    id: 'post-2',
    title: 'How Traditional SEO is Evolving with AI Search Engines',
    excerpt: 'Comprehensive strategy guide to format structured data, schema layers, and high-quality factual content for LLM-based crawlers.',
    content: `Search landscape rules are changing at a blinding pace. As LLMs and answer engines like Gemini begin responding directly to complex questions, how should your commercial business position its content for organic dominance?

### 1. From Search Engine Results Pages to Answer Generation
Traditional optimization focused heavily on repeated keywords and semantic density. In the LLM era, models read whole content structures, extracting high-authority facts, concrete tables, and verified case study numbers directly.

### 2. High-Intent Authority Silos
* **Publish Real Case Studies:** Write articles that include verifiable figures (e.g. "+340% sales increase"), specific software stack implementations, and verified quotes from human experts.
* **Structured JSON-LD Schemas:** Add explicit Schema metadata to define local business coordinates, reviews, services, and product catalogs so AI crawlers parse structured relationships accurately.
* **Expertise and Trustworthiness (E-E-A-T):** Author biographical pages are now audited more rigorously than ever before. Highlight actual practitioner expertise to confirm content is not generated blindly.

Adapting early to authority-based content models establishes you as the reference source of truth that AI models cite directly inside user chat streams.`,
    category: 'SEO Optimization',
    readTime: '8 min read',
    date: 'May 28, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Director of Growth',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    tags: ['SEO', 'Google Search', 'AI Crawlers', 'Growth Strategy']
  },
  {
    id: 'post-3',
    title: 'Premium Brand Positioning: Charging 10x Your Competitors',
    excerpt: 'Uncover the exact psychological design levers, typeface choices, and aesthetic principles that attract high-ticket clients.',
    content: `Many service providers struggle in a race to the bottom, offering cheaper packages to win client transactions. However, premium clients are looking for a completely different set of attributes when onboarding a digital agency: authority, confidence, security, and elite craftsmanship.

### 1. Visual Signals of Immense Authority
Luxury design is defined by what you omit. 
* **Generous Negative Space:** Cramming too many panels, banners, and colorful callouts on a screen screams desperation. Let displays breathe with sweeping padding layouts.
* **Typographic Restraint:** A single, outstanding display typeface like *Space Grotesk* or *Outfit* combined with a clean slate *Inter* establishes instant calm, Swiss-like order.
* **Monochrome-Focused palettes with High Contrast Accents:** Use deep navy or charcoal as the foundation, punctuated by subtle teal or gold highlights. This is the hallmark of modern high-productivity SaaS and private equity.

### 2. The Power of Numeric Proof and Clear Outcomes
Rather than calling your services "stellar" or "industry-leading," lay out concrete portfolios demonstrating hard performance statistics. Highly analytical clients read exact result metrics because numbers communicate direct competence.

By combining extreme detail-focused visual craftsmanship with unquestioned outcomes, your agency earns the trust needed to command five and six-figure budgets.`,
    category: 'Branding & Identity',
    readTime: '5 min read',
    date: 'April 14, 2026',
    author: {
      name: 'Sarah Jenkins',
      role: 'Creative Design Leader',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    tags: ['Branding', 'Design Psychology', 'Agency Business', 'B2B Strategy']
  }
];
