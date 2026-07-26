// ============================================================================
// Centralized content for the Laksh AI website.
// Edit this file to update copy, contact details, images, and card content
// across the entire site without touching component markup.
// ============================================================================

export const brand = {
  name: "Laksh AI",
  tagline: "Applied AI. Built for Real Business.",
  supportingLine:
    "AI solutions, data platforms, and software products engineered for measurable business outcomes.",
  shortDescription:
    "Laksh AI helps organizations transform business challenges into dependable AI-powered products, scalable data systems, and modern software. From early discovery and prototyping to production deployment and dedicated engineering teams, we provide focused technical expertise without unnecessary complexity.",
  domain: "https://www.yourdomain.com",
};

// Centralize all contact placeholders here so they can be replaced in one place.
export const contactInfo = {
  office: "Bengaluru, Karnataka, India",
  phone: "+91 00000 00000",
  email: "hello@yourdomain.com",
  hours: "Monday\u2013Friday, 9:00 AM\u20136:00 PM",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Specialists", href: "#specialists" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "AI SOLUTIONS \u2022 DATA ENGINEERING \u2022 SOFTWARE DEVELOPMENT",
  headline: "Applied AI. Built for Real Business.",
  supportingText:
    "Laksh AI designs and delivers production-ready AI solutions, scalable data platforms, and modern software products that help businesses automate work, improve decisions, and create better digital experiences.",
  primaryCta: "Discuss Your Project",
  secondaryCta: "Explore Our Solutions",
  trustIndicators: [
    "Business-first AI",
    "Production-ready engineering",
    "Scalable data foundations",
    "Flexible delivery teams",
  ],
  // Royalty-free placeholder image (Unsplash) showing a technology/engineering team.
  backgroundImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
  frameworkCard: {
    title: "AI Delivery Framework",
    stages: ["Discover", "Prototype", "Build", "Deploy"],
  },
};

export const capabilityStrip = [
  {
    icon: "Route",
    title: "AI Strategy to Deployment",
    text: "A single path from problem framing to a running production system.",
  },
  {
    icon: "Database",
    title: "Data Foundations for AI",
    text: "Reliable pipelines and datasets that make AI systems trustworthy.",
  },
  {
    icon: "LayoutGrid",
    title: "Product-Focused Engineering",
    text: "AI features built inside real, usable software products.",
  },
  {
    icon: "Users",
    title: "Dedicated Technical Teams",
    text: "Trained specialists who can embed directly into your team.",
  },
];

export const services = [
  {
    id: "ai-ml-solutions",
    icon: "BrainCircuit",
    title: "AI & Machine Learning Solutions",
    shortDescription:
      "Design, train, integrate, and operate machine-learning systems aligned with real business workflows.",
    tags: ["Predictive models", "NLP", "Computer vision"],
    capabilities: [
      "Predictive models",
      "Natural-language processing",
      "Recommendation systems",
      "Computer-vision workflows",
      "Generative AI integration",
      "Model APIs and inference services",
      "Model monitoring",
    ],
    deliverables: [
      "Feasibility assessment",
      "Proof of concept",
      "Model pipeline",
      "Production API",
      "Evaluation framework",
      "Monitoring plan",
    ],
    scenarios: [
      "You have a business problem that could benefit from prediction, classification, or generation but no model yet.",
      "You need to validate whether an AI approach is technically and practically feasible before committing budget.",
      "You already have a model and need it wrapped in a reliable, monitored production service.",
    ],
    relatedSpecialists: ["AI Engineer", "Machine Learning Engineer", "AI/ML Scientist"],
  },
  {
    id: "data-engineering",
    icon: "Database",
    title: "Data Engineering & Analytics",
    shortDescription:
      "Build dependable data pipelines and analytics foundations that make business information usable for reporting, applications, and AI.",
    tags: ["ETL/ELT", "Data modeling", "BI enablement"],
    capabilities: [
      "ETL and ELT pipelines",
      "Data modeling",
      "Data quality validation",
      "Data warehouse preparation",
      "Batch and streaming workflows",
      "Analytics-ready datasets",
      "Dashboard and BI enablement",
    ],
    deliverables: [
      "Data architecture",
      "Automated pipelines",
      "Data-quality checks",
      "Curated datasets",
      "Documentation",
      "Operational monitoring",
    ],
    scenarios: [
      "Your data is scattered across systems and difficult to use reliably for reporting or AI.",
      "You need consistent, quality-checked datasets to feed dashboards or downstream applications.",
      "You are preparing a data foundation ahead of an AI or automation initiative.",
    ],
    relatedSpecialists: ["AI Data Engineer", "Data Scientist"],
  },
  {
    id: "ai-product-engineering",
    icon: "Rocket",
    title: "AI Product Engineering",
    shortDescription:
      "Turn AI concepts into complete, usable software products rather than isolated model demonstrations.",
    tags: ["Prototyping", "Full-stack build", "Deployment"],
    capabilities: [
      "AI product discovery",
      "Rapid prototyping",
      "API and backend engineering",
      "Frontend product development",
      "Model integration",
      "Human-in-the-loop workflows",
      "Production deployment",
    ],
    deliverables: [
      "Product requirements",
      "UX prototype",
      "Working MVP",
      "Backend services",
      "AI integration layer",
      "Deployment package",
    ],
    scenarios: [
      "You have an AI idea and need it shaped into a real, usable product rather than a one-off demo.",
      "You need a working MVP quickly to validate the concept with real users.",
      "You want the frontend, backend, and AI layer engineered together as one coherent product.",
    ],
    relatedSpecialists: ["AI Product Engineer", "AI Full-Stack Engineer"],
  },
  {
    id: "intelligent-automation",
    icon: "Workflow",
    title: "Intelligent Automation",
    shortDescription:
      "Automate repetitive information-heavy processes using AI, structured workflows, and human review where necessary.",
    tags: ["RAG", "Document processing", "Workflow automation"],
    capabilities: [
      "Document processing",
      "Data extraction",
      "Internal AI assistants",
      "Knowledge search",
      "Retrieval-augmented generation",
      "Workflow automation",
      "Approval and review systems",
    ],
    deliverables: [
      "Process assessment",
      "Automation workflow",
      "AI assistant interface",
      "Knowledge integration",
      "Review controls",
      "Audit-ready output",
    ],
    scenarios: [
      "Your team spends significant time on manual, repetitive, document-heavy work.",
      "You need an internal assistant that can search and reason over company knowledge.",
      "You need automation with human review built in for accountability.",
    ],
    relatedSpecialists: ["AI Engineer", "AI Data Engineer"],
  },
  {
    id: "custom-software",
    icon: "Code2",
    title: "Custom Software Development",
    shortDescription:
      "Develop secure, maintainable web applications and backend systems with AI capabilities integrated where they create genuine value.",
    tags: ["Web apps", "APIs", "Modernization"],
    capabilities: [
      "Responsive web applications",
      "Internal business tools",
      "REST APIs",
      "Backend systems",
      "Database integration",
      "AI-enabled product features",
      "Modernization of existing applications",
    ],
    deliverables: [
      "Technical architecture",
      "Responsive frontend",
      "Backend services",
      "Database design",
      "Testing",
      "Deployment documentation",
    ],
    scenarios: [
      "You need a maintainable web application or internal tool built from scratch.",
      "You want to modernize an existing application and selectively add AI-enabled features.",
      "You need backend systems and APIs that a broader product can build on.",
    ],
    relatedSpecialists: ["Software Developer", "AI Full-Stack Engineer"],
  },
];

export const specialists = [
  {
    id: "ai-engineer",
    icon: "Cpu",
    title: "AI Engineer",
    summary:
      "Builds AI-enabled applications, model integrations, inference services, intelligent workflows, and production AI features.",
    tags: ["LLM integration", "Model APIs", "AI workflows"],
    detail: {
      does: "Builds AI-enabled applications, model integrations, inference services, intelligent workflows, and production AI features.",
      responsibilities: [
        "Integrating language and machine-learning models into applications",
        "Building inference services and model-serving APIs",
        "Designing AI-driven workflows and assistant features",
        "Monitoring model behavior in production",
      ],
      outputs: ["Integrated AI features", "Inference APIs", "Workflow logic", "Monitoring dashboards"],
      teamFit:
        "Usually sits alongside a full-stack or backend engineer, connecting the model layer to the rest of the product.",
      relatedSolutions: ["AI & Machine Learning Solutions", "Intelligent Automation"],
      engagement: "Available as a defined project resource or a dedicated AI FTE.",
    },
  },
  {
    id: "ml-engineer",
    icon: "GitBranch",
    title: "Machine Learning Engineer",
    summary:
      "Transforms trained models into scalable, testable, monitored production services and machine-learning pipelines.",
    tags: ["Model serving", "MLOps", "Pipelines"],
    detail: {
      does: "Transforms trained models into scalable, testable, monitored production services and machine-learning pipelines.",
      responsibilities: [
        "Building training and inference pipelines",
        "Packaging and deploying models as services",
        "Setting up evaluation and monitoring for model performance",
        "Working with data engineers on feature pipelines",
      ],
      outputs: ["ML pipelines", "Deployed model services", "Evaluation reports", "Monitoring setup"],
      teamFit:
        "Bridges data science and production engineering, often working closely with an AI Data Engineer.",
      relatedSolutions: ["AI & Machine Learning Solutions", "Data Engineering & Analytics"],
      engagement: "Available as a defined project resource or a dedicated AI FTE.",
    },
  },
  {
    id: "ai-ml-scientist",
    icon: "FlaskConical",
    title: "AI/ML Scientist",
    summary:
      "Researches, evaluates, and validates machine-learning approaches for complex or uncertain problem domains.",
    tags: ["Research", "Evaluation", "Experimentation"],
    detail: {
      does: "Researches, evaluates, and validates machine-learning approaches for complex or uncertain problem domains.",
      responsibilities: [
        "Investigating candidate modeling approaches for a problem",
        "Designing experiments and evaluation criteria",
        "Validating feasibility before committing to a build",
        "Documenting findings for engineering hand-off",
      ],
      outputs: ["Feasibility studies", "Experiment results", "Evaluation criteria", "Technical recommendations"],
      teamFit:
        "Typically engaged early, ahead of a Machine Learning Engineer who productionizes validated approaches.",
      relatedSolutions: ["AI & Machine Learning Solutions"],
      engagement: "Available as a defined project resource or a dedicated AI FTE.",
    },
  },
  {
    id: "data-scientist",
    icon: "BarChart3",
    title: "Data Scientist",
    summary:
      "Analyzes data, develops predictive models, designs experiments, and communicates findings that support business decisions.",
    tags: ["Analytics", "Forecasting", "Statistical modeling"],
    detail: {
      does: "Analyzes data, develops predictive models, designs experiments, and communicates findings that support business decisions.",
      responsibilities: [
        "Exploring and analyzing business and operational data",
        "Building statistical and predictive models",
        "Designing experiments to test business hypotheses",
        "Communicating findings to technical and non-technical stakeholders",
      ],
      outputs: ["Analysis reports", "Predictive models", "Experiment designs", "Decision-support summaries"],
      teamFit:
        "Often the first technical role engaged when a business question needs a data-driven answer.",
      relatedSolutions: ["Data Engineering & Analytics", "AI & Machine Learning Solutions"],
      engagement: "Available as a defined project resource or a dedicated AI FTE.",
    },
  },
  {
    id: "ai-data-engineer",
    icon: "Layers",
    title: "AI Data Engineer",
    summary:
      "Builds the data pipelines, storage systems, feature datasets, and quality controls required by AI applications.",
    tags: ["ETL/ELT", "Data quality", "Feature pipelines"],
    detail: {
      does: "Builds the data pipelines, storage systems, feature datasets, and quality controls required by AI applications.",
      responsibilities: [
        "Building ETL/ELT pipelines feeding AI and analytics systems",
        "Designing feature datasets for model training and inference",
        "Implementing data-quality checks and validation",
        "Maintaining data warehouses and storage layers",
      ],
      outputs: ["Data pipelines", "Feature datasets", "Quality-check reports", "Pipeline documentation"],
      teamFit:
        "Provides the data foundation that Machine Learning Engineers and Data Scientists build on.",
      relatedSolutions: ["Data Engineering & Analytics", "Intelligent Automation"],
      engagement: "Available as a defined project resource or a dedicated AI FTE.",
    },
  },
  {
    id: "ai-full-stack-engineer",
    icon: "Layout",
    title: "AI Full-Stack Engineer",
    summary:
      "Develops complete AI-enabled applications across frontend interfaces, backend services, APIs, databases, and model integrations.",
    tags: ["React", "APIs", "AI integration"],
    detail: {
      does: "Develops complete AI-enabled applications across frontend interfaces, backend services, APIs, databases, and model integrations.",
      responsibilities: [
        "Building frontend interfaces for AI-enabled products",
        "Developing backend services and APIs",
        "Integrating model outputs into user-facing features",
        "Managing database and application architecture",
      ],
      outputs: ["Web application", "Backend services", "API layer", "AI-integrated features"],
      teamFit:
        "Often the primary builder on an AI Product Engineering or Custom Software engagement.",
      relatedSolutions: ["AI Product Engineering", "Custom Software Development"],
      engagement: "Available as a defined project resource or a dedicated AI FTE.",
    },
  },
  {
    id: "ai-product-engineer",
    icon: "Puzzle",
    title: "AI Product Engineer",
    summary:
      "Connects product strategy, user workflows, software engineering, and AI capabilities to deliver usable AI products.",
    tags: ["Product discovery", "Prototyping", "Delivery"],
    detail: {
      does: "Connects product strategy, user workflows, software engineering, and AI capabilities to deliver usable AI products.",
      responsibilities: [
        "Running discovery to define the product and its users",
        "Prototyping AI-enabled workflows before full build",
        "Coordinating between design, engineering, and AI specialists",
        "Owning delivery from prototype through to production release",
      ],
      outputs: ["Product definition", "Prototype", "Delivery roadmap", "Released product"],
      teamFit:
        "Typically leads a Cross-Functional AI Pod, coordinating the other specialist roles.",
      relatedSolutions: ["AI Product Engineering"],
      engagement: "Available as a defined project resource, dedicated AI FTE, or pod lead.",
    },
  },
  {
    id: "software-developer",
    icon: "Terminal",
    title: "Software Developer",
    summary:
      "Builds maintainable web applications, backend services, business tools, integrations, and modern software platforms.",
    tags: ["Web applications", "Backend systems", "Integrations"],
    detail: {
      does: "Builds maintainable web applications, backend services, business tools, integrations, and modern software platforms.",
      responsibilities: [
        "Developing web applications and internal business tools",
        "Building and maintaining backend services and APIs",
        "Implementing integrations between systems",
        "Modernizing existing applications",
      ],
      outputs: ["Web applications", "Backend services", "Integration modules", "Technical documentation"],
      teamFit:
        "Forms the software engineering backbone of most engagements, alongside AI specialists where relevant.",
      relatedSolutions: ["Custom Software Development"],
      engagement: "Available as a defined project resource or a dedicated AI FTE.",
    },
  },
];

export const processStages = [
  {
    number: "01",
    icon: "Search",
    title: "Discover & Define",
    description:
      "Clarify the business problem, users, available data, technical constraints, success criteria, and expected outcomes.",
  },
  {
    number: "02",
    icon: "PenTool",
    title: "Design & Prototype",
    description:
      "Create the solution architecture, product flow, data approach, and a focused prototype to validate assumptions early.",
  },
  {
    number: "03",
    icon: "Hammer",
    title: "Build & Validate",
    description:
      "Develop the product, pipelines, integrations, and models using iterative delivery, testing, evaluation, and stakeholder feedback.",
  },
  {
    number: "04",
    icon: "Gauge",
    title: "Deploy & Improve",
    description:
      "Release the system, establish monitoring, document operations, measure performance, and improve the product over time.",
  },
];

export const aboutContent = {
  paragraphs: [
    "Laksh AI helps organizations convert complex business requirements into dependable AI-powered products, data systems, and modern software. We combine applied artificial intelligence with disciplined software engineering so that solutions are useful beyond the prototype stage.",
    "Our work spans discovery, architecture, model development, data engineering, application development, integration, deployment, and continuous improvement. Clients can engage Laksh AI for a defined project, a dedicated technical professional, or a cross-functional delivery team.",
  ],
  checks: [
    "Business requirements translated into practical technical systems",
    "Scalable engineering from early prototype to production",
    "Clear delivery, documentation, and long-term maintainability",
  ],
  image:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
};

export const whyLaksh = {
  benefits: [
    {
      icon: "Target",
      title: "Business-First AI",
      text: "Technology decisions begin with the operational problem and desired outcome, not with an AI trend.",
    },
    {
      icon: "Link2",
      title: "End-to-End Delivery",
      text: "One delivery approach can cover discovery, data, models, software, integrations, testing, and deployment.",
    },
    {
      icon: "Building2",
      title: "Scalable Architecture",
      text: "Solutions are designed to move beyond demos and support maintainable, production-ready operation.",
    },
    {
      icon: "MessagesSquare",
      title: "Transparent Collaboration",
      text: "Clear milestones, visible progress, documented decisions, and regular stakeholder feedback.",
    },
  ],
  supportingBenefits: ["Security-conscious development", "Flexible project and team engagement"],
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
};

export const engagementModels = [
  {
    id: "defined-project",
    icon: "ClipboardList",
    title: "Defined Project Delivery",
    bestFor:
      "Best for organizations with a specific product, automation, data, or AI initiative requiring end-to-end ownership.",
    points: [
      "Defined scope and milestones",
      "Cross-functional execution",
      "Regular demonstrations",
      "Deployment and documentation",
    ],
  },
  {
    id: "dedicated-fte",
    icon: "UserCheck",
    title: "Dedicated AI FTE",
    bestFor:
      "Best for organizations that need a trained AI, data, or software professional embedded into an existing team.",
    points: [
      "Role-based selection",
      "Full-time allocation",
      "Client-team collaboration",
      "Flexible engagement duration",
    ],
  },
  {
    id: "cross-functional-pod",
    icon: "Users2",
    title: "Cross-Functional AI Pod",
    bestFor:
      "Best for organizations that need a compact delivery team combining complementary technical roles.",
    points: [
      "AI or ML engineer",
      "Data engineer",
      "Full-stack engineer",
      "Product or technical lead",
    ],
  },
];

export const serviceOptions = [
  "AI & Machine Learning Solutions",
  "Data Engineering & Analytics",
  "AI Product Engineering",
  "Intelligent Automation",
  "Custom Software Development",
  "Dedicated Technical Specialist",
  "Not sure yet",
];

export const engagementOptions = [
  "Defined Project Delivery",
  "Dedicated AI FTE",
  "Cross-Functional AI Pod",
  "Initial Consultation",
  "Not sure yet",
];

export const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Why Laksh AI", href: "#why-laksh" },
    { label: "Contact", href: "#contact" },
  ],
  solutions: [
    { label: "AI & Machine Learning", href: "#solutions" },
    { label: "Data Engineering", href: "#solutions" },
    { label: "AI Product Engineering", href: "#solutions" },
    { label: "Intelligent Automation", href: "#solutions" },
    { label: "Custom Software", href: "#solutions" },
  ],
  specialists: [
    { label: "AI Engineer", href: "#specialists" },
    { label: "ML Engineer", href: "#specialists" },
    { label: "Data Scientist", href: "#specialists" },
    { label: "AI Data Engineer", href: "#specialists" },
    { label: "AI Full-Stack Engineer", href: "#specialists" },
  ],
};
