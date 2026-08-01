export type PortfolioCategory =
  | "SaaS"
  | "Enterprise"
  | "GMP / Pharma"
  | "Manufacturing"
  | "Support"
  | "Retail"
  | "Web App"

export type PortfolioStat = {
  value: string
  label: string
}

export type PortfolioSection = {
  title: string
  body: string
  bullets?: string[]
}

export type PortfolioModule = {
  title: string
  description: string
}

export type PortfolioProject = {
  slug: string
  name: string
  tagline: string
  summary: string
  category: PortfolioCategory
  industry: string
  year: string
  coverImage: string
  coverAlt: string
  accent: string
  liveUrl?: string
  client?: string
  role: string
  challenge: string
  solution: string
  howItWorks: PortfolioSection[]
  modules: PortfolioModule[]
  outcomes: PortfolioStat[]
  tech?: string[]
  ctaNote?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "pharma-gmp",
    name: "Pharmaceutical GMP",
    tagline: "One GMP operating system. From receipt to release.",
    summary:
      "A populated pharmaceutical GMP implementation connecting documents, materials, production, quality, and audit evidence in one role-aware operating model.",
    category: "GMP / Pharma",
    industry: "Pharmaceutical manufacturing",
    year: "2026",
    coverImage: "/images/portfolio/pharma-gmp-cover.png",
    coverAlt: "Pharmaceutical GMP compliance dashboard",
    accent: "#255c84",
    role: "GMP platform implementation, configuration, and operational enablement",
    challenge:
      "A pharmaceutical manufacturer needed more than digitized forms. Documents, materials, production, quality, and inspection evidence had to stay connected across hand-offs—without drifting across files, email, and paper.",
    solution:
      "DotCreative implemented one connected GMP operating system spanning source → receive → control → make → release → improve, with horizontal controls for documents, workflow, approvals, roles, training, and an immutable audit trail.",
    howItWorks: [
      {
        title: "A digital thread across the lifecycle",
        body: "Every stage—from supplier orders and goods receipt through quarantine, BMR/BPR execution, release gates, and CAPA—shares the same controlled backbone.",
        bullets: [
          "Source: requisitions, supplier orders, purchase orders",
          "Receive & control: batch identity, quarantine, QC worksheets",
          "Make & release: BOM, BMR/BPR, approval gates, archive",
          "Improve: deviation, CAPA, change, complaint, recall, OOS/OOT",
        ],
      },
      {
        title: "Management visibility",
        body: "A single cockpit surfaces training, documents, deviations, CAPA, complaints, batches, QC, and procurement signals so risks and workload stay visible.",
        bullets: [
          "Pending and overdue queues as early warning",
          "Cross-function indicators in one view",
          "27 defined roles for accountability and access",
        ],
      },
      {
        title: "Controlled knowledge & materials",
        body: "SOPs, specifications, SAPs, BMRs, and BPRs become governed records. Materials keep batch, expiry, status, and location context from receipt through quarantine.",
        bullets: [
          "Revision, status, and department context on documents",
          "Training linked to controlled knowledge",
          "Warehouse/bin accountability and controlled next actions",
        ],
      },
      {
        title: "Digital batch execution & quality",
        body: "Planning, batch issuance, approved templates, dispensing, manufacturing tables, and QC gates run as governed execution—backed by structured QA/QC modules.",
        bullets: [
          "54-table BMR workspace covering pre-manufacturing to sign-offs",
          "20+ configured workflows across manufacturing and quality",
          "Deviation, CAPA, change, complaint, recall, and OOS/OOT modules",
        ],
      },
      {
        title: "Evidence & point-of-work enablement",
        body: "Critical changes leave a reconstructable trail—who, when, what changed, before/after—while SOP-context assistance and material QR scanning support work where it happens.",
        bullets: [
          "12,000+ recorded audit events",
          "SOP-context assistant against departmental baselines",
          "Material QR scan from physical label to digital context",
        ],
      },
    ],
    modules: [
      {
        title: "Controlled documents",
        description: "Governed SOPs, specs, BMRs/BPRs with revision and lifecycle status.",
      },
      {
        title: "Materials & quarantine",
        description: "Batch identity, expiry, storage location, and status-controlled movement.",
      },
      {
        title: "Production / BMR",
        description: "Template-driven batch execution with QC gates and archive discipline.",
      },
      {
        title: "Digital quality system",
        description: "Deviation, CAPA, change, complaints, recalls, and OOS/OOT in one backbone.",
      },
      {
        title: "Workflow engine",
        description: "Repeatable multi-step processes owned by department and role.",
      },
      {
        title: "Audit trail",
        description: "Actor, timestamp, entity, action, and before/after values for review readiness.",
      },
    ],
    outcomes: [
      { value: "56", label: "Approved batches" },
      { value: "65", label: "Approved QC runs" },
      { value: "8", label: "BMR records" },
      { value: "460", label: "Active items" },
      { value: "31", label: "Approvals visible" },
      { value: "12.4K", label: "Audit events" },
    ],
    tech: [
      "Custom GMP platform",
      "Role-based access",
      "Workflow orchestration",
      "Immutable audit logging",
      "QR material traceability",
    ],
    ctaNote:
      "Building a GMP operating system for manufacturing, distribution, or quality operations? Start with the control gap that matters most.",
  },
  {
    slug: "dotcreative-helpdesk",
    name: "DotCreative Helpdesk",
    tagline: "Support that keeps your systems running",
    summary:
      "A client-facing helpdesk where customers report what broke, open a tracked ticket, and get an agent assigned—so support stays visible from intake to resolution.",
    category: "Support",
    industry: "IT support & customer success",
    year: "2026",
    coverImage: "/images/portfolio/helpdesk-cover.png",
    coverAlt: "DotCreative Helpdesk portal and support workspace",
    accent: "#fb5176",
    liveUrl: "https://helpdesk.dotcreative.co.ke/",
    role: "Support portal design and helpdesk implementation",
    challenge:
      "Clients needed a simple way to report system issues without losing context in email threads—and DotCreative needed every problem to become a tracked ticket with clear ownership.",
    solution:
      "We launched a branded helpdesk portal: report a problem, open My Tickets, and route work to agents so support becomes a managed queue instead of scattered messages.",
    howItWorks: [
      {
        title: "Report what broke",
        body: "Customers describe the issue from the helpdesk home and submit it as a formal problem report—no need to chase the right inbox.",
        bullets: [
          "Clear entry point: Report a problem",
          "Structured intake for faster triage",
          "Branded DotCreative support experience",
        ],
      },
      {
        title: "Turn it into a tracked ticket",
        body: "Every report becomes a helpdesk ticket with history, so nothing disappears into unread mail or chat fragments.",
        bullets: [
          "Ticket created from the customer report",
          "My tickets view for customers to follow progress",
          "Status and conversation stay on one record",
        ],
      },
      {
        title: "Get an agent on it",
        body: "Support staff pick up and work tickets from a shared queue—so ownership is explicit and resolution is accountable.",
        bullets: [
          "Agent assignment and follow-up",
          "Sign-in for authenticated ticket access",
          "Contact path when customers need a human handoff",
        ],
      },
    ],
    modules: [
      {
        title: "Helpdesk home",
        description: "Support messaging and primary actions for reporting and ticket access.",
      },
      {
        title: "Report a problem",
        description: "Customer intake flow that creates a tracked helpdesk ticket.",
      },
      {
        title: "My tickets",
        description: "Customer view of open and historical tickets.",
      },
      {
        title: "Agent workspace",
        description: "Internal handling so agents can pick up, respond, and close work.",
      },
      {
        title: "Sign in & contact",
        description: "Authenticated access plus contact paths for escalations.",
      },
      {
        title: "Support navigation",
        description: "Home, Support, Report a problem, and Contact us in one portal.",
      },
    ],
    outcomes: [
      { value: "1", label: "Unified support portal" },
      { value: "Ticketed", label: "Issue tracking" },
      { value: "Agent", label: "Owned resolution" },
    ],
    tech: ["Odoo Helpdesk", "Customer portal", "Ticket workflows", "Branded support UX"],
    ctaNote: "Need a helpdesk that turns every client issue into owned work? We can stand one up for your products.",
  },
  {
    slug: "doors-windows-erm",
    name: "Doors & Windows ERM",
    tagline: "From quotation to installed openings—one project spine.",
    summary:
      "An enterprise resource management system for glass and aluminium door/window fabricators: sales, design, quotation, materials, production, QC, and field installation tied to a single project record.",
    category: "Manufacturing",
    industry: "Doors, windows & architectural glass",
    year: "2026",
    coverImage: "/images/portfolio/doors-windows-erm-cover.png",
    coverAlt: "Doors and Windows ERP manufacturing operations dashboard",
    accent: "#ec2024",
    role: "Full-stack ERM product design, module architecture, and implementation",
    challenge:
      "Door and window manufacturers run a long chain—lead, site measure, design, quote, deposit, BOM, warehouse, cutting, fabrication, glass fit, QC, and install. When those steps live in separate tools, hand-offs break, stock fights projects, and nobody owns the stage.",
    solution:
      "DotCreative built a project-centric ERM: CRM wins the deal, Project Management owns stage progression, and warehouse, procurement, production, QC, and field emit events into that spine—so fabrication businesses run one connected operating model.",
    howItWorks: [
      {
        title: "Sales → project handoff",
        body: "Leads move through contact, account, site visit, millimetre measurements, design, quotation, and deposit. When the deal is won, a project is created and starts at awaiting deposit or deposit received.",
        bullets: [
          "Lead pipeline through quotation and deal win",
          "Quotation measurements for pricing vs production measurements later",
          "Deposit threshold gates when execution can advance",
        ],
      },
      {
        title: "Design, BOM, and materials",
        body: "Approved measurements become design jobs; fabrication-ready packages feed quotation and later BOM. When the BOM is finalized, warehouse runs an all-or-nothing FIFO reservation—or procurement fills shortages before release to the shop floor.",
        bullets: [
          "Design jobs and fabrication-ready uploads",
          "BOM finalize triggers stock check and reservation",
          "PR → PO → GRN path when materials are short",
          "Glass ordered per project—not held as bin stock",
        ],
      },
      {
        title: "Production → QC → field install",
        body: "Production schedules orders through material prep, cutting, fabrication, sash, glass assembly, finishing, and post-fab QC. Field then runs install jobs, delivery records, unit progress, non-conformities, and tool custody through to site QC and snagging.",
        bullets: [
          "Shop-floor stages with evidence and misfit handling",
          "Install modes for fabrication-only vs full site install",
          "QC gates across warehouse, production, and site",
          "Client portal shows controlled progress without exposing internal ops",
        ],
      },
      {
        title: "Governed integration",
        body: "Warehouse, procurement, production, and field notify Project Management; only PM writes the canonical project stage. Every meaningful action stays attributable to a user—and usually a project—with an audit trail.",
        bullets: [
          "19-stage project lifecycle from deposit to complete",
          "Event-driven module integration",
          "Role + permission access by department",
          "FIFO materials with audited overrides",
        ],
      },
    ],
    modules: [
      {
        title: "CRM & quotation",
        description: "Leads, accounts, deals, site visits, measurements, and proforma quotations.",
      },
      {
        title: "Design",
        description: "Measurement packages to fabrication-ready design jobs and reviews.",
      },
      {
        title: "Project management",
        description: "Stage board, BOM, documents, change orders, dispatch, and timeline.",
      },
      {
        title: "Warehouse & procurement",
        description: "FIFO stock, tools, offcuts, PRs/POs/GRNs, and per-project glass orders.",
      },
      {
        title: "Production & QC",
        description: "Cutting through glass assembly with inspection gates and defects.",
      },
      {
        title: "Field installation",
        description: "Crew jobs, delivery, unit progress, NCs, and site handover.",
      },
    ],
    outcomes: [
      { value: "19", label: "Project stages" },
      { value: "8+", label: "Ops modules" },
      { value: "1", label: "Project spine" },
      { value: "FIFO", label: "Material reservation" },
      { value: "mm", label: "Measurement standard" },
      { value: "Full", label: "Sales-to-install chain" },
    ],
    tech: [
      "Next.js",
      "Laravel API",
      "PostgreSQL / MySQL",
      "Event-driven modules",
      "Role-based access",
      "Client portal",
    ],
    ctaNote:
      "Running a doors, windows, or architectural glass operation? We can map your sales-to-install flow onto a single ERM spine.",
  },
  {
    slug: "stockly",
    name: "Stockly",
    tagline: "One platform. Every shop. Full control.",
    summary:
      "A cloud-based multi-shop POS and inventory platform that unifies sales, stock, and customer loyalty so retailers run every location from one place.",
    category: "SaaS",
    industry: "Retail & Commerce",
    year: "2025",
    coverImage: "/images/portfolio/stockly-cover.png",
    coverAlt: "Stockly POS hardware and retail dashboard showcase",
    accent: "#f97316",
    liveUrl: "https://stockly.co.ke/",
    role: "Product design, full-stack SaaS development, and go-to-market web experience",
    challenge:
      "Retail operators with multiple shops needed one system for POS, inventory, and loyalty—without juggling disconnected tills, spreadsheets, and shop-by-shop tools.",
    solution:
      "DotCreative built Stockly as a cloud POS SaaS: central control for every shop, real-time stock visibility, sales tracking, and loyalty tools wrapped in a dark, high-contrast product experience.",
    howItWorks: [
      {
        title: "Sell from any shop",
        body: "Cashiers run a fast POS flow while managers see consolidated sales across locations. Every transaction feeds the same live inventory and reporting layer.",
        bullets: [
          "Multi-shop POS under one tenant",
          "Product catalog shared or scoped per location",
          "Sales history and shop-level performance",
        ],
      },
      {
        title: "Keep inventory honest",
        body: "Stock movements stay connected to sales and transfers so shops stop overselling and managers always know what is on the shelf.",
        bullets: [
          "Live stock levels across shops",
          "Product movements tied to sales events",
          "Visibility for thousands of SKUs in one catalog",
        ],
      },
      {
        title: "Grow loyalty and control",
        body: "Customer and loyalty features sit beside operations so retailers improve repeat purchase without a second stack of tools.",
        bullets: [
          "Customer profiles linked to purchases",
          "Loyalty-ready transaction history",
          "Role-aware access for owners, managers, and staff",
        ],
      },
    ],
    modules: [
      {
        title: "Cloud POS",
        description: "Checkout and daily sales operations designed for busy retail counters.",
      },
      {
        title: "Multi-shop control",
        description: "One platform for every location—central visibility with shop-level execution.",
      },
      {
        title: "Inventory",
        description: "Track products, stock levels, and movement across the retail network.",
      },
      {
        title: "Loyalty & customers",
        description: "Keep customer history close to the till so retention becomes operational.",
      },
      {
        title: "Security & access",
        description: "Protect business data with controlled access for teams and partners.",
      },
      {
        title: "Integrations-ready",
        description: "Built as a SaaS platform that can grow with payments, reporting, and partner tools.",
      },
    ],
    outcomes: [
      { value: "1,500+", label: "Active users" },
      { value: "5,000+", label: "Products sold" },
      { value: "200+", label: "Clients" },
    ],
    tech: ["Next.js", "Cloud SaaS", "POS workflows", "Multi-tenant retail ops"],
    ctaNote: "Want a POS and inventory platform shaped around your shops? Let’s map your rollout.",
  },
]

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug)
}

export function getAllPortfolioSlugs() {
  return portfolioProjects.map((project) => project.slug)
}
