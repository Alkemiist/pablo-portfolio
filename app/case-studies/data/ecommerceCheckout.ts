import { CaseStudy } from './caseStudyTypes';

export const ecommerceCheckoutCaseStudy: CaseStudy = {
  slug: 'ecommerce-checkout',
  title: 'E-Commerce Checkout Redesign',
  subtitle: 'Reducing friction to accelerate conversion',
  summary:
    'A full-stack revamp of a multi-step checkout flow for a high-volume retailer. The focus was on eliminating decision friction, clarifying trust signals, and baking experimentation into the product pipeline.',
  meta: [
    { label: 'Role', value: 'Product Designer & Frontend Partner' },
    { label: 'Company', value: 'Enterprise Retailer (NDA)' },
    { label: 'Timeline', value: '12 weeks — Q2 2024' },
    { label: 'Team', value: 'PM, 2 Engineers, Data Analyst, Myself' },
    { label: 'Tooling', value: 'Figma, React, Mixpanel, Optimizely' },
  ],
  metrics: [
    {
      label: 'Cart Abandonment',
      value: '−40%',
      description: 'Drop-off decreased after clarifying fees, progress, and support.',
    },
    {
      label: 'Conversion Rate',
      value: '+25%',
      description: 'Improved signal-to-noise ratio and trust cues nudged completion.',
    },
    {
      label: 'Time to Checkout',
      value: '−32%',
      description: 'Inline validation and auto-fill trimmed micro-delays.',
    },
  ],
  objectives: [
    'Reduce friction without sacrificing compliance and upsell opportunities.',
    'Make the funnel measurable end-to-end so experiments are reliable.',
    'Design components that engineering can reuse across future flows.',
  ],
  audience: [
    'High-intent repeat buyers on desktop who were abandoning during payment.',
    'First-time mobile shoppers with lower trust and higher sensitivity to fees.',
    'Support teams who needed clarity on where customers were getting stuck.',
  ],
  problem: {
    heading: 'Problem Statement',
    paragraphs: [
      'Customers were dropping off late in the funnel because the experience was uncertain, noisy, and inconsistent across devices. Internal tooling made it hard to see where leaks were happening, so the business was spending on paid acquisition without knowing what was working.',
      'The goal was to simplify decisions, surface trust at the right moments, and build instrumentation so the team could run experiments confidently.',
    ],
    bullets: [
      'Ambiguous shipping costs showed up only at confirmation.',
      'Progress indicators reset between steps, causing confusion.',
      'Support escalations spiked when promotions failed silently.',
    ],
  },
  researchInsights: [
    {
      label: 'Session Replays',
      description: 'Observed rage clicks around hidden fees and error handling.',
    },
    {
      label: 'Intercept Surveys',
      description: 'Customers wanted contextual answers without leaving the flow.',
    },
    {
      label: 'Data Deep Dive',
      description: 'Mixpanel funnel analysis exposed the payment step as the leak.',
    },
  ],
  process: [
    {
      id: 'discover',
      title: 'Discover & Diagnose',
      summary:
        'Mapped the funnel, audited analytics, and triangulated qualitative feedback to isolate friction points.',
      keyActivities: [
        'Heuristic evaluation of current flow across devices.',
        'Instrumentation audit with data analyst to validate events.',
        'Fast-turn user interviews with recent abandoners.',
      ],
      artifacts: [
        'Journey map annotating emotions and questions per step.',
        'Instrumentation backlog tied to funnel stages.',
      ],
      insights: [
        'Customers bailed when price clarity disappeared.',
        'Trust collapsed when errors did not explain next steps.',
      ],
    },
    {
      id: 'define',
      title: 'Define Success & Guardrails',
      summary:
        'Aligned cross-functional team on what success looked like and what constraints mattered (compliance, ops).',
      keyActivities: [
        'Co-creation workshop with PM and Ops to prioritize requirements.',
        'Experiment roadmap drafting with PMM to stage releases.',
      ],
      artifacts: [
        'North-star experience storyboard.',
        'Prioritized OKR stack ranking with target metrics.',
      ],
      insights: [
        'Legal requirements could be satisfied with smarter in-context messaging.',
        'Not every upsell needed a full card; snackbars could carry the load.',
      ],
    },
    {
      id: 'design',
      title: 'Design & Prototype',
      summary:
        'Designed modular UI with clear progress, transparent pricing, and inline support while pairing with engineering.',
      keyActivities: [
        'Low-to-high fidelity prototypes for desktop and mobile.',
        'Component spec shared with engineering for reuse.',
        'Prototype validation with five target users.',
      ],
      artifacts: [
        'Responsive component library in Figma tied to design tokens.',
        'Annotated specs and states documenting validation logic.',
      ],
      insights: [
        'Inline summarizers removed the need for accordion overload.',
        'Customers trusted the flow once we showed totals by default.',
      ],
    },
    {
      id: 'validate',
      title: 'Validate & Iterate',
      summary:
        'Ran A/B tests, measured qualitative reactions post-launch, and tightened copy for clarity.',
      keyActivities: [
        'Experiment monitoring with PM to watch leading indicators.',
        'Follow-up interviews with power users two weeks post-launch.',
      ],
      artifacts: [
        'Experiment scorecard highlighting wins, losses, and neutral results.',
        'Release notes for support with “what changed and why”.',
      ],
      insights: [
        'Simplified guest checkout delivered lift without hurting account creation.',
        'Plain-language error copy reduced support tickets by double digits.',
      ],
    },
    {
      id: 'scale',
      title: 'Scale & Systemize',
      summary:
        'Documented learnings, templatized the checkout system, and handed off a backlog of next experiments.',
      keyActivities: [
        'Design review for parallel product squads to adopt the pattern.',
        'Knowledge base article summarizing key decisions and trade-offs.',
      ],
      artifacts: [
        'Reusable “conversion fundamentals” checklist.',
        'Component usage guidelines embedded in Storybook.',
      ],
      insights: [
        'A shared definition of “trust moment” accelerated future experiments.',
        'Ops teams could now diagnose issues without design bottlenecks.',
      ],
    },
  ],
  solutionHighlights: {
    heading: 'Solution Snapshot',
    paragraphs: [
      'The redesigned flow chunked decisions, surfaced cost clarity at every step, and embedded coaching in the interface. Components were built as tokens and primitives so engineers could scale them across other funnels.',
      'Experiment hooks and analytics events were designed in from day one, so the team could run sequenced tests and learn without breaking the experience.',
    ],
    bullets: [
      'Dynamic order summary with instant feedback for shipping and promo changes.',
      'Progress indicator that persists across sessions, including mobile hand-offs.',
      'Contextual support drawer that answers the “why” without leaving the flow.',
    ],
  },
  outcomes: {
    heading: 'Business Impact',
    paragraphs: [
      'Quantitative metrics moved quickly, but just as important, support escalations dropped and stakeholders finally had visibility into where the funnel leaked.',
      'The design system work upstream unlocked parallel squads, reducing designer context switching and engineering rework.',
    ],
    highlights: [
      'Cart abandonment decreased by 40% within four weeks post-launch.',
      'Overall conversion increased by 25% with statistically significant experiments.',
      'Checkout completion time fell from 3m20s to 2m11s on average.',
    ],
  },
  lessons: [
    'Designing experiments into the product beats retrofitting analytics later.',
    'Trust is a sequence of moments; removing just one cliff can unlock huge gains.',
    'Ops and support teams are critical allies—equip them early.',
  ],
  nextSteps: [
    'Expand the experiment backlog into account creation and loyalty enrolment.',
    'Automate qualitative feedback prompts after checkout completion.',
    'Integrate fraud detection cues without adding unnecessary friction.',
  ],
  preview: {
    icon: '🔍',
    gradientClass: 'bg-gradient-to-br from-blue-500 to-purple-600',
    filename: 'case_study_01.exe',
    status: 'Click to view full case study',
  },
};

