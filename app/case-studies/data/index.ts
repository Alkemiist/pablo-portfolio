import { CaseStudy } from './caseStudyTypes';
import { ecommerceCheckoutCaseStudy } from './ecommerceCheckout';
// import { mobileBankingCaseStudy } from './mobileBanking';
// import { saasDashboardCaseStudy } from './saasDashboard';

export const caseStudies: CaseStudy[] = [
  ecommerceCheckoutCaseStudy,
  // mobileBankingCaseStudy,
  // saasDashboardCaseStudy,
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

