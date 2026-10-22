/* eslint-disable react/jsx-key */
const containt = [
  {
    smallTitle: 'AI',
    bigTitle: 'AI Engineering',
    desc: [
      <div className="p-l">I design AI systems where the model interprets and deterministic code decides.</div>,
      <div className="p-l">LLM output is treated as a claim, not a fact: every critical step is validated,</div>,
      <div className="p-l">tested and auditable, in regulated industries like healthcare and fintech.</div>,
    ],
    descMobile: [
      <div className="p-l">I design AI systems where the model interprets and deterministic</div>,
      <div className="p-l">code decides. LLM output is treated as a claim, not a fact: every</div>,
      <div className="p-l">critical step is validated, tested and auditable, in regulated</div>,
      <div className="p-l">industries like healthcare and fintech.</div>,
    ],
    options: [
      { title: 'LLM Agents', desc: 'Ship production agents with Claude and OpenAI behind provider-agnostic abstractions' },
      { title: 'Deterministic Orchestration', desc: 'Keep conversation control in finite-state machines, using the model only for language understanding' },
      { title: 'Evals & Guardrails', desc: 'Gate releases with adversarial eval harnesses and revalidate every field the model extracts' },
      { title: 'RAG Pipelines', desc: 'Ground agents in enterprise knowledge bases with Python retrieval pipelines' },
      { title: 'Model Context Protocol (MCP)', desc: 'Expose API contracts as tools for coding agents' },
      { title: 'Compliance by Design', desc: 'Run auditable AI under ANS, BCB and ANPD oversight' },
    ],
  },
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
    smallTitle: 'Stack',
    bigTitle: 'Fullstack & Cloud',
    desc: [
      <div className="p-l">I build event-driven backends with NestJS and DDD, fast Next.js front ends with</div>,
      <div className="p-l">sub-1s LCP, and cloud infrastructure as code on AWS and GCP, so AI features</div>,
      <div className="p-l">run on a foundation built to scale.</div>,
    ],
    descMobile: [
      <div className="p-l">I build event-driven backends with NestJS and DDD, fast Next.js</div>,
      <div className="p-l">front ends with sub-1s LCP, and cloud infrastructure as code on</div>,
      <div className="p-l">AWS and GCP, so AI features run on a foundation built to</div>,
      <div className="p-l">scale.</div>,
    ],
    options: [
      { title: 'Next.js 15 & React', desc: 'Ship fast, accessible interfaces with modern rendering strategies' },
      { title: 'NestJS & Microservices', desc: 'Architect domain-driven backends with Clean Architecture principles' },
      { title: 'Kafka, RabbitMQ & pg-boss', desc: 'Build event-driven systems with reliable async workflows' },
      { title: 'Core Web Vitals Optimization', desc: 'Achieve sub-1s LCP and near-perfect Lighthouse scores' },
      { title: 'AWS Serverless', desc: 'Lambda, API Gateway and DynamoDB for pay-per-use, scalable APIs' },
      { title: 'GCP', desc: 'Run multi-service production workloads on Google Cloud' },
      { title: 'Terraform (IaC)', desc: 'Provision and version cloud infrastructure declaratively' },
      { title: 'PostgreSQL & Redis', desc: 'Design reliable data layers and low-latency caching' },
      { title: 'Docker', desc: 'Containerize services for consistent, reproducible deployments' },
      { title: 'Cloudflare Workers & Vercel Edge', desc: 'Deploy edge solutions that reduce global latency' },
    ],
  },
];

export default containt;
