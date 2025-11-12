export type CaseStudyMetric = {
  label: string;
  value: string;
  description: string;
};

export type CaseStudyMetadata = {
  label: string;
  value: string;
};

export type CaseStudyNarrativeSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudyProcessPhase = {
  id: string;
  title: string;
  summary: string;
  keyActivities: string[];
  artifacts: string[];
  insights: string[];
};

export type CaseStudyPreview = {
  icon: string;
  gradientClass: string;
  filename: string;
  status: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  meta: CaseStudyMetadata[];
  metrics: CaseStudyMetric[];
  objectives: string[];
  audience: string[];
  problem: CaseStudyNarrativeSection;
  researchInsights: { label: string; description: string }[];
  process: CaseStudyProcessPhase[];
  solutionHighlights: CaseStudyNarrativeSection;
  outcomes: CaseStudyNarrativeSection & { highlights: string[] };
  lessons: string[];
  nextSteps: string[];
  preview: CaseStudyPreview;
};

