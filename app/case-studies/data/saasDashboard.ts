import { CaseStudy } from './caseStudyTypes';

export const saasDashboardCaseStudy: CaseStudy = {
  slug: 'saas-dashboard-redesign',
  title: 'SaaS Dashboard Redesign',
  subtitle: 'Turning noisy data into actionable signal',
  summary:
    'Redesigned a complex analytics dashboard for a B2B SaaS platform. The mission was to help teams move from reactive reporting to proactive decision-making through clearer visualization and workflow support.',
  meta: [
    { label: 'Role', value: 'Lead Product Designer & Prototyper' },
    { label: 'Company', value: 'Growth Analytics Platform' },
    { label: 'Timeline', value: '10 weeks — Q1 2023' },
    { label: 'Team', value: 'PM, Myself, 3 Engineers, Data Scientist' },
    { label: 'Tooling', value: 'Figma, React, D3, Looker, UserTesting' },
  ],
  metrics: [
    {
      label: 'User Efficiency',
      value: '+50%',
      description: 'Teams created reports in half the time thanks to templates.',
    },
    {
      label: 'Adoption',
      value: '+30%',
      description: 'New workspace model encouraged deeper collaboration.',
    },
    {
      label: 'Support Tickets',
      value: '−45%',
      description: 'Clear affordances reduced confusion about data freshness.',
    },
  ],
  objectives: [
    'Help teams move from static reporting to actionable insights.',
    'Give different roles (analysts, managers) tailored yet shared views.',
    'Improve data comprehension without overwhelming visual noise.',
  ],
  audience: [
    'Data analysts assembling reports and monitoring anomalies.',
    'Team leads tracking goals across squads and sharing updates.',
    'Executives needing high-level summaries with drill-down capability.',
  ],
  problem: {
    heading: 'Problem Statement',
    paragraphs: [
      'The original dashboard was a dumping ground for charts. Users struggled to understand status, correlate metrics, or know what to do next. Collaboration happened in screenshots and external decks because sharing and commenting were clunky.',
      'We needed to transform dense, static data into prioritized signal and embed collaboration so teams could act faster together.',
    ],
    bullets: [
      'No clear hierarchy: critical alerts blended into background charts.',
      'Data freshness cues were inconsistent, eroding trust.',
      'Collaborating meant exporting data rather than acting in-product.',
    ],
  },
  researchInsights: [
    {
      label: 'Shadow Sessions',
      description: 'Watched analysts narrate how they built reports under time pressure.',
    },
    {
      label: 'Stakeholder Interviews',
      description: 'Heard managers describe the pain of aligning cross-functional teams.',
    },
    {
      label: 'Instrumented Usage',
      description: 'Found heavy usage of exports but low adoption of in-app comments.',
    },
  ],
  process: [
    {
      id: 'understand',
      title: 'Understand Context',
      summary:
        'Documented user jobs, role-specific needs, and collaboration patterns before touching UI.',
      keyActivities: [
        'Service blueprint mapping data sources to user touchpoints.',
        'Role-based interviews covering analysts, PMs, executives.',
      ],
      artifacts: [
        'Jobs-to-be-done library anchored on decision cadence.',
        'Pain point heatmap categorizing urgency vs frequency.',
      ],
      insights: [
        'Analysts need to flag anomalies fast; managers need narratives.',
        'Time-to-trust hinges on transparent data freshness indicators.',
      ],
    },
    {
      id: 'concept',
      title: 'Concept & Prioritize',
      summary:
        'Explored frameworks to prioritize information and embed collaboration without clutter.',
      keyActivities: [
        'Concept sketches for workspace, alerting, and storytelling modes.',
        'Value/effort prioritization workshops with product leadership.',
      ],
      artifacts: [
        'Concept matrix comparing layout patterns against scenario needs.',
        'Storyboard of a cross-functional weekly review.',
      ],
      insights: [
        'Workspaces unlocked collaboration when scoped to teams/projects.',
        'Narrative-mode reporting made complex data shareable in minutes.',
      ],
    },
    {
      id: 'design',
      title: 'Design & Prototype',
      summary:
        'Built interactive prototypes to validate navigation, visualization, and collaboration patterns.',
      keyActivities: [
        'Data visualization sprints with the data scientist to align on chart vocabulary.',
        'Interactive prototype covering alert triage to share-out.',
      ],
      artifacts: [
        'Visualization guidelines balancing accuracy and readability.',
        'Click-through prototype instrumented for usability sessions.',
      ],
      insights: [
        'Color coding tied to metric direction prevented misreads.',
        'Embeddable comments kept discussion close to the data source.',
      ],
    },
    {
      id: 'validate',
      title: 'Validate & Iterate',
      summary:
        'Ran moderated tests with cross-functional teams to stress flows and gather feedback.',
      keyActivities: [
        'Scenario-based testing with analysts and team leads.',
        'Feedback synthesis with PM to prioritize refinements.',
      ],
      artifacts: [
        'Usability findings report with severity ratings.',
        'Revised interaction specs handed to engineering.',
      ],
      insights: [
        'Surfacing “next best action” next to alerts turned insight into workflow.',
        'Contextual tooltips answered most data-trust questions instantly.',
      ],
    },
    {
      id: 'rollout',
      title: 'Rollout & Enable',
      summary:
        'Partnered with product marketing and customer success to launch and educate users.',
      keyActivities: [
        'In-product tours and onboarding checklists.',
        'Training playbooks for customer success managers.',
      ],
      artifacts: [
        'Narrative-driven release notes for different personas.',
        'Analytics dashboard tracking adoption and collaboration metrics.',
      ],
      insights: [
        'Teams adopted faster when they could import existing decks as starting points.',
        'Highlighting success stories fueled internal advocacy.',
      ],
    },
  ],
  solutionHighlights: {
    heading: 'Solution Snapshot',
    paragraphs: [
      'The new dashboard prioritized alerts and narratives over raw charts. Workspaces gave teams shared context, while guided storytelling let analysts package insights quickly.',
      'Visualization patterns balanced clarity with depth so users could act with confidence without leaving the product.',
    ],
    bullets: [
      'Priority lane that queues critical alerts with recommended actions.',
      'Workspace tabs tailored to roles with customizable panels.',
      'Narrative builder for composing sharable updates with live data.',
    ],
  },
  outcomes: {
    heading: 'Business Impact',
    paragraphs: [
      'Adoption grew because teams could finally collaborate in-product. Leadership gained confidence in the data thanks to transparency around freshness and methodology.',
      'Support load shrank as the interface answered many of the “is this data right?” questions proactively.',
    ],
    highlights: [
      'User efficiency improved by 50% for core reporting tasks.',
      'Team-wide adoption increased by 30% as collaborative workspaces rolled out.',
      'Support tickets tied to analytics workflows fell by 45%.',
    ],
  },
  lessons: [
    'Make the first read effortless; deeper exploration should be opt-in.',
    'Collaboration is a workflow design problem, not just a feature toggle.',
    'Data trust must be visible through freshness, methodology, and provenance cues.',
  ],
  nextSteps: [
    'Integrate anomaly detection to pre-emptively surface emerging trends.',
    'Extend workspace concept to partner teams outside the core org.',
    'Layer in proactive coaching for less experienced data consumers.',
  ],
  preview: {
    icon: '📊',
    gradientClass: 'bg-gradient-to-br from-purple-500 to-pink-600',
    filename: 'case_study_03.exe',
    status: 'Click to view full case study',
  },
};

