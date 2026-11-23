/**
 * ─────────────────────────────────────────────────────────────
 *  CODENSTACK — SITE CONFIG
 *  Edit everything about the site from this one file:
 *  products, links, services, tech stack, founder bio, contact.
 *  Lines marked "REPLACE" are placeholders you should update.
 * ─────────────────────────────────────────────────────────────
 */

export type ProductIcon = 'users' | 'bag' | 'voice' | 'target'

export interface Product {
  id: string
  title: string
  subtitle: string
  /** Short, ~2 line description shown on the card */
  description: string
  /** Longer description shown in the "View Details" dialog */
  details: string
  url: string
  icon: ProductIcon
  tags: string[]
  /** First 3 are shown on the card, all are shown in details */
  features: string[]
  credentials: { email: string; password: string }
  /**
   * REPLACE: path to a real screenshot, e.g. '/screenshots/hrms.webp'
   * (put the file in /public/screenshots). Leave empty to show the
   * built-in illustrated placeholder.
   */
  image?: string
  accent: 'mint' | 'iris'
}

export interface ContactConfig {
  email: string
  /** Leave empty to hide the link. Set to a full URL to show it. */
  linkedin: string
  /** Leave empty to hide the link. Set to a full URL to show it. */
  github: string
  replyTime: string
  /**
   * Optional form endpoint. Leave empty to fall back to a mailto: link.
   * Either:
   *  - Formspree:  'https://formspree.io/f/YOUR_FORM_ID'
   *  - Web3Forms:  'https://api.web3forms.com/submit' and set web3formsKey below
   */
  formEndpoint: string
  /** Only needed if you use Web3Forms (public access key). */
  web3formsKey: string
  projectTypes: string[]
}

const contact: ContactConfig = {
  email: 'ayush.vishnoi@codenstack.in',
  linkedin: '',
  github: '',
  replyTime: 'Typically replies within 24 hours',
  formEndpoint: '',
  web3formsKey: '',
  projectTypes: [
    'HRMS / internal tool',
    'E-commerce store',
    'AI voice agent',
    'Dashboard & analytics',
    'API / backend',
    'Something else',
  ],
}

export const site = {
  name: 'Codenstack',
  tagline: 'Build · Ship · Scale',
  domain: 'codenstack.in',
  url: 'https://codenstack.in',

  /**
   * Brand files live in /public/brand (icon .svg/.png, animated .svg/.gif, full logo .png).
   */
  logo: {
    icon: '/brand/codenstack-icon.svg',
    animated: '/brand/codenstack-animated.svg',
    full: '/brand/codenstack-logo.png',
  },

  contact,
} as const

/** Pages in the main navigation (each is a separate route) */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How We Work', to: '/process' },
  { label: 'Tech', to: '/tech' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

/** ── HOME: what we stand for ── edit to match how you really work */
export const principles = [
  {
    icon: 'users',
    title: 'Talk to the person writing your code',
    description: 'No account managers or hand-offs. You get a direct line to the developer building your product.',
  },
  {
    icon: 'clock',
    title: 'Progress you can see every week',
    description: 'A live preview link from early on and regular check-ins, so there are never surprises at the end.',
  },
  {
    icon: 'lock',
    title: 'You own what we build',
    description: 'Source code, accounts and documentation are handed over to you. No lock-in.',
  },
  {
    icon: 'rocket',
    title: 'We stay after launch',
    description: 'Shipping is the start, not the end. We remain available for fixes, changes and new features.',
  },
]

/** ── PRODUCTS / LIVE DEMOS ─────────────────────────────────── */
export const products: Product[] = [
  {
    id: 'hrms',
    title: 'HRMS',
    subtitle: 'Human Resource Management System',
    description:
      'An all-in-one HR workspace for employee records, attendance, leave and payroll — built for small and growing teams.',
    details:
      'A role-based HR platform that replaces spreadsheets with a single source of truth. Admins manage employees and policies, managers approve requests, and employees self-serve their leave, attendance and payslips.',
    url: 'https://hrms.codenstack.in',
    icon: 'users',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    features: [
      'Employee directory with role-based access',
      'Attendance, leave requests & approvals',
      'Payroll summaries and downloadable payslips',
      'Admin dashboard with headcount insights',
    ],
    credentials: { email: 'demo@codenstack.in', password: 'demo1234' }, // REPLACE
    image: '',
    accent: 'mint',
  },
  {
    id: 'shop',
    title: 'E-commerce Platform',
    subtitle: 'Storefront + admin panel',
    description:
      'A fast, mobile-first online store with product catalog, cart, checkout and an admin panel to manage orders and inventory.',
    details:
      'A complete commerce stack: a performant storefront for customers and a back-office for the store owner. Includes catalog management, inventory tracking, order lifecycle and payment-ready checkout.',
    url: 'https://shop.codenstack.in',
    icon: 'bag',
    tags: ['Next.js', 'MongoDB', 'Stripe-ready', 'Tailwind'],
    features: [
      'Product catalog with search & filters',
      'Cart, checkout and order tracking',
      'Admin panel for inventory & orders',
      'SEO-friendly, responsive storefront',
    ],
    credentials: { email: 'demo@codenstack.in', password: 'demo1234' }, // REPLACE
    image: '',
    accent: 'iris',
  },
  {
    id: 'voice',
    title: 'AI Voice Agent',
    subtitle: 'Conversational phone & web assistant',
    description:
      'A natural-sounding AI agent that answers calls, handles FAQs and books appointments — so your team can focus on real work.',
    details:
      'Speech-to-text, an LLM reasoning layer and text-to-speech combined into a low-latency voice loop. The agent follows your business rules, captures structured data from conversations and hands off to a human when needed.',
    url: 'https://voice.codenstack.in',
    icon: 'voice',
    tags: ['Python', 'FastAPI', 'LLM', 'WebSockets'],
    features: [
      'Real-time speech in, speech out',
      'Custom knowledge base & business rules',
      'Call summaries and lead capture',
      'Human hand-off when the agent is unsure',
    ],
    credentials: { email: 'demo@codenstack.in', password: 'demo1234' }, // REPLACE
    image: '',
    accent: 'mint',
  },
  {
    id: 'customeriq',
    title: 'CustomerIQ',
    subtitle: 'Customer Intelligence Engine',
    description:
      'Turns raw customer and order data into segments, churn signals and clear dashboards you can actually act on.',
    details:
      'CustomerIQ ingests customer and transaction data, builds behavioural segments (such as RFM), highlights customers at risk of churning and presents everything in an interactive analytics dashboard.',
    url: 'https://customeriq.codenstack.in',
    icon: 'target',
    tags: ['Python', 'Pandas', 'SQL', 'React'],
    features: [
      'Automatic customer segmentation',
      'Churn-risk and lifetime-value signals',
      'Interactive analytics dashboard',
      'CSV / database data import',
    ],
    credentials: { email: 'demo@codenstack.in', password: 'demo1234' }, // REPLACE
    image: '',
    accent: 'iris',
  },
]

/** ── SERVICES ──────────────────────────────────────────────── */
export const services = [
  {
    icon: 'code',
    title: 'Web Application Development',
    description:
      'Production-ready web apps — from internal tools like HRMS to customer-facing stores — built to be fast, secure and easy to maintain.',
    points: ['React / Next.js frontends', 'Auth, roles & permissions', 'Responsive by default'],
  },
  {
    icon: 'mic',
    title: 'AI & Voice Automation',
    description:
      'AI voice agents and LLM-powered workflows that answer customers, qualify leads and automate repetitive tasks.',
    points: ['Voice agents & chatbots', 'LLM integrations', 'Workflow automation'],
  },
  {
    icon: 'chart',
    title: 'Custom Dashboards & Analytics',
    description:
      'Clear dashboards that turn your business data into decisions — sales, customers, operations, all in one view.',
    points: ['KPI dashboards', 'Customer segmentation', 'Reports & exports'],
  },
  {
    icon: 'server',
    title: 'API & Backend Development',
    description:
      'Reliable APIs, databases and integrations that power your product and connect it with the tools you already use.',
    points: ['REST APIs with FastAPI / Node', 'SQL & NoSQL data design', 'Third-party integrations'],
  },
] as const

/** ── TECH STACK ── REPLACE / edit to match what you actually use */
export const techStack: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs'] },
  { group: 'Data', items: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Pandas'] },
  {
    group: 'AI & Voice',
    items: ['OpenAI API', 'LLMs', 'Speech-to-Text', 'Text-to-Speech', 'WebSockets'],
  },
  { group: 'DevOps', items: ['Git', 'Docker', 'Vercel', 'Render', 'GitHub Actions'] },
]

/** ── HOW WE WORK ───────────────────────────────────────────── */
export const process = [
  {
    icon: 'search',
    title: 'Discover',
    description: 'A short call to understand your business, users and goals. You get a clear scope and estimate.',
  },
  {
    icon: 'pen',
    title: 'Design',
    description: 'Wireframes and a clickable flow, so you see exactly what you are getting before code is written.',
  },
  {
    icon: 'terminal',
    title: 'Build',
    description: 'Iterative development with a live preview link and regular check-ins — no black boxes.',
  },
  {
    icon: 'rocket',
    title: 'Deploy & Support',
    description: 'We ship to production, hand over the code and stay around for fixes and improvements.',
  },
] as const

/** ── ABOUT ── REPLACE the bio with your real story */
export const founder = {
  name: 'Ayush Vishnoi',
  role: 'Founder & Developer',
  photo: '', // REPLACE: e.g. '/ayush.webp' (put the file in /public)
  bio: [
    'Codenstack is run by Ayush Vishnoi, a college student and full-stack developer who builds real, working software instead of slide decks.',
    'Every product on this page is something I designed, coded and deployed myself — from HR systems to AI voice agents. I work directly with each client, so you always talk to the person writing your code.',
  ],
}

/**
 * Stats are derived from real data above — nothing invented.
 * Add more only if they are true.
 */
export const stats = [
  { value: '4', label: 'Step delivery process' },
  { value: '24h', label: 'Typical reply time' },
  {
    value: String(techStack.reduce((n, g) => n + g.items.length, 0)),
    label: 'Technologies in our stack',
  },
]
