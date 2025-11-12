import { CaseStudy } from './caseStudyTypes';

export const mobileBankingCaseStudy: CaseStudy = {
  slug: 'mobile-banking-ux',
  title: 'Mobile Banking App UX',
  subtitle: 'Designing clarity into complex financial workflows',
  summary:
    'A holistic redesign of a mobile banking app that served both everyday users and power customers. The challenge was to simplify core money management tasks while making advanced insights feel approachable.',
  meta: [
    { label: 'Role', value: 'Product Designer & Design Systems Lead' },
    { label: 'Company', value: 'Regional Bank (Series C fintech)' },
    { label: 'Timeline', value: '16 weeks — Q3 2023' },
    { label: 'Team', value: 'Design (me), 1 PM, 4 Engineers, Compliance' },
    { label: 'Tooling', value: 'Figma, React Native, Amplitude, Maze' },
  ],
  metrics: [
    {
      label: 'Monthly Active Users',
      value: '+40%',
      description: 'Re-engagement campaigns landed because core flows were faster.',
    },
    {
      label: 'Support Tickets',
      value: '−35%',
      description: 'Clearer affordances and contextual tips reduced confusion.',
    },
    {
      label: 'App Store Rating',
      value: '4.7★',
      description: 'User sentiment shifted once reliability and clarity improved.',
    },
  ],
  objectives: [
    'Create a mental model that works for both novice and pro financial users.',
    'Increase trust by making security and compliance features transparent.',
    'Lay the groundwork for cross-platform design system consistency.',
  ],
  audience: [
    'Everyday users checking balances, paying bills, and moving money.',
    'Power users monitoring cash flow across multiple accounts.',
    'Customer success teams helping users troubleshoot in real time.',
  ],
  problem: {
    heading: 'Problem Statement',
    paragraphs: [
      'The existing app was feature-rich but cognitively heavy. Critical actions like paying a bill or moving money took too many taps, and errors lacked guidance. Compliance requirements layered copy onto an already dense UI, compounding the problem.',
      'We needed a structure that clarified hierarchy, made trust visible, and gave users confidence without sacrificing capability.',
    ],
    bullets: [
      'Information architecture grew organically, leading to redundant flows.',
      'Security features felt hidden, which reduced perceived trust.',
      'Cross-platform inconsistencies caused relearning on web vs mobile.',
    ],
  },
  researchInsights: [
    {
      label: 'Diary Study',
      description: 'Tracked how users viewed account health and bill schedules.',
    },
    {
      label: 'App Analytics',
      description: 'Identified drop-offs in transfer flow and budgeting features.',
    },
    {
      label: 'Support Logs',
      description: 'Surfaced top confusion points to turn into UX safeguards.',
    },
  ],
  process: [
    {
      id: 'frame',
      title: 'Frame the Opportunity',
      summary:
        'Mapped the ecosystem, clarified constraints, and aligned on moments that matter for trust.',
      keyActivities: [
        'Business canvas workshop with leadership to prioritize outcomes.',
        'Persona alignment with customer success and compliance leads.',
      ],
      artifacts: [
        'Trust moments map highlighting risk points in the journey.',
        'Jobs-to-be-done statements for primary flows.',
      ],
      insights: [
        'Trust is contextual—users need confirmation before and after money moves.',
        'Compliance copy can reinforce trust when positioned as reassurance.',
      ],
    },
    {
      id: 'structure',
      title: 'Re-architect Information Flow',
      summary:
        'Restructured navigation and IA around tasks and mental models rather than legacy categories.',
      keyActivities: [
        'Card sorting exercises with both novice and expert users.',
        'Prototype tree testing to validate the new navigation structure.',
      ],
      artifacts: [
        'Navigation blueprint with primary/secondary pathways.',
        'Content hierarchy guidelines shared with marketing/legal.',
      ],
      insights: [
        'Grouping by “manage”, “monitor”, “plan” matched user expectations.',
        'A persistent safety bar surfaced key trust cues without clutter.',
      ],
    },
    {
      id: 'design',
      title: 'Design Interaction Patterns',
      summary:
        'Crafted reusable modules and micro-interactions for transfers, bill pay, and insights.',
      keyActivities: [
        'Motion prototypes to clarify loading and confirmation states.',
        'Design system build-out with tokens reflecting bank brand and accessibility.',
      ],
      artifacts: [
        'Pattern library of cards, drawers, and contextual help.',
        'Accessibility checklist shared with engineering.',
      ],
      insights: [
        'Showing “what happens next” after each action reduced anxiety.',
        'Inline smart defaults sped up routine actions by 30%.',
      ],
    },
    {
      id: 'test',
      title: 'Test & Harden',
      summary:
        'Validated flows with in-product intercept tests and moderated sessions before launch.',
      keyActivities: [
        'Maze unmoderated tests for remote coverage.',
        'Security review and copy alignment with compliance.',
      ],
      artifacts: [
        'Usability heatmaps highlighting hesitation zones.',
        'Release playbook outlining comms, rollout, and measurement.',
      ],
      insights: [
        'Progressive disclosure kept novices on track without hiding advanced options.',
        'Trust badges are effective only when tied to specific user actions.',
      ],
    },
    {
      id: 'launch',
      title: 'Launch & Learn',
      summary:
        'Coordinated rollout with CS, marketing, and engineering; set up listener loops for ongoing insight.',
      keyActivities: [
        'Pilot launch with opt-in beta before full rollout.',
        'Post-launch analytics review with leadership.',
      ],
      artifacts: [
        'Voice-of-customer dashboard combining quant + qual signals.',
        'CS scripting toolkit for new flows and features.',
      ],
      insights: [
        'Segmented rollouts let us tune messaging for different user cohorts.',
        'CS scripts reduced average call time by 22%.',
      ],
    },
  ],
  solutionHighlights: {
    heading: 'Solution Snapshot',
    paragraphs: [
      'We restructured the app around three pillars: monitor money at a glance, take action quickly, and plan ahead confidently. Components were built with token-based theming so web and mobile share foundations.',
      'Security cues became part of the experience, threading reassurance through moments where users feel most vulnerable.',
    ],
    bullets: [
      'Home dashboard with prioritized insights and contextual nudges.',
      'Universal action button that adapts to context without overwhelming.',
      'Guided task flows with inline progress, confirmation, and audit trail.',
    ],
  },
  outcomes: {
    heading: 'Business Impact',
    paragraphs: [
      'Engagement climbed because the app now mirrored how users think about money. Fewer support tickets freed up teams to focus on higher leverage work.',
      'The design system became the foundation for upcoming credit and lending products, speeding up roadmap delivery.',
    ],
    highlights: [
      'Monthly active users increased by 40% within two months.',
      'Support tickets related to money movement dropped by 35%.',
      'App Store rating rose from 3.8 to 4.7 stars within the launch quarter.',
    ],
  },
  lessons: [
    'Financial confidence comes from consistent signals, not flashy features.',
    'Design systems should encode trust patterns, not just visuals.',
    'Compliance can be a partner in clarity when engaged early.',
  ],
  nextSteps: [
    'Extend the design system to web for a unified omni-channel experience.',
    'Introduce personalized financial health insights using the new IA backbone.',
    'Evolve accessibility testing into an ongoing scorecard with QA.',
  ],
  preview: {
    icon: '📱',
    gradientClass: 'bg-gradient-to-br from-green-500 to-blue-600',
    filename: 'case_study_02.exe',
    status: 'Click to view full case study',
  },
};

