/* eslint-disable react/jsx-key */
const containt = [
  {
    smallTitle: 'A11y',
    bigTitle: 'Accessibility & Compliance',
    desc: [
      <div className="p-l"> With a focus on inclusion and legal compliance, I build interfaces that meet</div>,
      <div className="p-l"> WCAG 2.1/2.2 (AA/AAA) and ADA/Section 508 standards from day one, reducing </div>,
      <div className="p-l">legal exposure while reaching every user.</div>,
    ],
    descMobile: [
      <div className="p-l">With a focus on inclusion and legal compliance, I build interfaces</div>,
      <div className="p-l">that meet WCAG 2.1/2.2 (AA/AAA) and ADA/Section 508 standards </div>,
      <div className="p-l">from day one, reducing legal exposure while reaching every</div>,
      <div className="p-l">user.</div>,
    ],
    options: [
      { title: 'WCAG 2.1/2.2 (AA/AAA) Audits', desc: 'Assess and remediate interfaces against WCAG success criteria for full compliance' },
      { title: 'ADA / Section 508 Compliance', desc: 'Reduce legal exposure by aligning products with U.S. accessibility regulations' },
      { title: 'WAI-ARIA Patterns', desc: 'Implement robust ARIA patterns for complex interactive components' },
      { title: 'Keyboard & Focus Management', desc: 'Ensure every flow is fully operable via keyboard with predictable focus order' },
      { title: 'Screen Reader Testing', desc: 'Validate experiences with NVDA, JAWS, and VoiceOver across real user journeys' },
      { title: 'Axe-core CI/CD Integration', desc: 'Catch accessibility regressions automatically before they reach production' },
    ],
  },
  {
    smallTitle: 'Perf',
    bigTitle: 'Architecture & Performance',
    desc: [
      <div className="p-l">I architect resilient backends with DDD/Clean Architecture and event-driven</div>,
      <div className="p-l">systems, while optimizing Core Web Vitals on the frontend. From Next.js 15 to</div>,
      <div className="p-l">NestJS and Kafka, I deliver systems built to scale.</div>,
    ],
    descMobile: [
      <div className="p-l">I architect resilient backends with DDD/Clean Architecture and</div>,
      <div className="p-l">event-driven systems, while optimizing Core Web Vitals on the</div>,
      <div className="p-l">frontend. From Next.js 15 to NestJS and Kafka, I deliver systems</div>,
      <div className="p-l">built to scale.</div>,
    ],
    options: [
      { title: 'Next.js 15 (SSR/SSG)', desc: 'Ship fast, SEO-friendly interfaces with modern rendering strategies' },
      { title: 'NestJS & Microservices', desc: 'Architect domain-driven backends with Clean Architecture principles' },
      { title: 'Kafka & RabbitMQ', desc: 'Build event-driven systems with reliable async messaging' },
      { title: 'Core Web Vitals Optimization', desc: 'Achieve sub-1s LCP and near-perfect Lighthouse scores' },
      { title: 'React Native / Expo', desc: 'Extend accessible, performant experiences to mobile' },
      { title: 'Technical SEO', desc: 'Align architecture with search intent and Schema markup for organic reach' },
    ],
  },
  {
    smallTitle: 'Cloud',
    bigTitle: 'Data, AI & Cloud',
    desc: [
      <div className="p-l">I design data layers and deploy AI-driven features that reduce manual work,</div>,
      <div className="p-l">backed by cloud infrastructure as code on AWS (Terraform, Lambda, API Gateway,</div>,
      <div className="p-l">DynamoDB, S3 & CloudFront) — currently preparing for the AWS certification exam.</div>,
    ],
    descMobile: [
      <div className="p-l">I design data layers and deploy AI-driven features that reduce</div>,
      <div className="p-l">manual work, backed by cloud infrastructure as code on AWS</div>,
      <div className="p-l">(Terraform, Lambda, API Gateway, DynamoDB, S3 & CloudFront) —</div>,
      <div className="p-l">currently preparing for the AWS certification exam.</div>,
    ],
    options: [
      { title: 'AWS Lambda & API Gateway', desc: 'Design event-driven serverless APIs with pay-per-use scalability' },
      { title: 'DynamoDB', desc: 'Model low-latency NoSQL data for high-throughput serverless workloads' },
      { title: 'S3 & CloudFront', desc: 'Serve static assets and media globally with edge caching and low latency' },
      { title: 'Terraform (IaC)', desc: 'Provision and version cloud infrastructure declaratively for repeatable deployments' },
      { title: 'PostgreSQL & MongoDB', desc: 'Design reliable relational and document data layers for production workloads' },
      { title: 'Redis', desc: 'Cache and coordinate state for low-latency, high-throughput services' },
      { title: 'AI Agents & Predictive Modeling', desc: 'Build contextual AI agents and forecasting pipelines that cut manual analysis time' },
      { title: 'Docker', desc: 'Containerize services for consistent, reproducible deployments' },
      { title: 'Cloudflare Workers & Vercel Edge', desc: 'Deploy edge solutions that reduce global latency and maximize availability' },
    ],
  },
];

export default containt;
