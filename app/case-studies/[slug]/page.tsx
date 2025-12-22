import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '../../components/Navigation';
import { caseStudies, getCaseStudyBySlug } from '../data';
import EcommerceCheckoutDemo from '../components/EcommerceCheckoutDemo';
import { ComponentType } from 'react';
import Image from 'next/image';

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyDetail({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const demoRegistry: Record<string, ComponentType | undefined> = {
    'ecommerce-checkout': EcommerceCheckoutDemo,
  };

  const LiveDemo = demoRegistry[study.slug];

  return (
    <div className="min-h-screen bg-[#0f0f23] text-slate-100">
      <Navigation />

      {/* Hero Image - At the very top */}
      <div className="w-full pt-24 pb-12 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="/Feature-output.png" 
            alt={`${study.title} - Final UI Output`}
            className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            style={{ display: 'block', maxHeight: '75vh' }}
            loading="eager"
          />
        </div>
      </div>

      {/* Floating Back Button */}
      <Link
        href="/case-studies"
        className="fixed top-28 left-4 sm:left-6 z-50 inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-lg text-slate-200 text-sm font-medium hover:border-indigo-500/50 hover:bg-slate-700/90 hover:text-indigo-400 transition-all duration-300 shadow-lg"
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        <span>Back</span>
      </Link>

      <div className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">

          <header className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-400">
                {study.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {study.title}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                {study.summary}
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8">
              <h2 className="text-sm text-indigo-400 uppercase tracking-wider mb-6 font-semibold">
                Project Snapshot
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                {study.meta.map((item) => (
                  <div key={item.label} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-indigo-500/50 transition-colors">
                    <dt className="text-xs uppercase tracking-wider text-indigo-400 mb-2 font-medium">
                      {item.label}
                    </dt>
                    <dd className="text-slate-200 font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">Key Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-slate-700/50 rounded-xl p-6 bg-slate-800/30 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="text-sm uppercase tracking-wider text-indigo-400 font-medium mb-2">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mt-4">{metric.value}</div>
                  <p className="text-sm text-slate-400 mt-3">{metric.description}</p>
                </div>
              ))}
            </div>
          </section>

          {LiveDemo && (
            <section className="space-y-6">
              <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-semibold">Live Flow Preview</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Explore the core mechanics our team shipped. This interactive slice mirrors the
                hypotheses we validated around trust cues, progressive disclosure, and experimentation.
              </p>
              <LiveDemo />
              <p className="text-xs text-slate-400">
                This demo is a simplified version of the production experience, built to illustrate the
                systems thinking behind the final release.
              </p>
            </section>
          )}

          <section className="grid lg:grid-cols-2 gap-10 border border-slate-700/50 rounded-xl p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm">
            <div className="space-y-4">
              <h3 className="text-sm text-indigo-400 uppercase tracking-[0.3em] font-semibold">Objectives</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {study.objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm text-indigo-400 uppercase tracking-[0.3em] font-semibold">Audience</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {study.audience.map((persona) => (
                  <li key={persona} className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{persona}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">{study.problem.heading}</h2>
            <div className="border border-slate-700/50 rounded-xl p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              {study.problem.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {study.problem.bullets && (
                <ul className="space-y-3 pt-4 border-t border-slate-700/50">
                  {study.problem.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">Research Insights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {study.researchInsights.map((insight) => (
                <div key={insight.label} className="border border-slate-700/50 rounded-xl p-6 bg-slate-800/30 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300">
                  <h3 className="text-sm uppercase tracking-wider text-indigo-400 mb-3 font-semibold">
                    {insight.label}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">Process Highlights</h2>
            <div className="space-y-6">
              {study.process.map((phase, index) => (
                <div
                  key={phase.id}
                  className="border border-slate-700/50 rounded-xl p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
                        {String(index + 1).padStart(2, '0')} • {phase.title}
                      </div>
                      <p className="text-sm text-slate-300 mt-3">{phase.summary}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid lg:grid-cols-3 gap-6 text-sm text-zinc-300">
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">Key Activities</h4>
                      <ul className="space-y-2">
                        {phase.keyActivities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2">
                            <span className="text-indigo-400">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">Artifacts</h4>
                      <ul className="space-y-2">
                        {phase.artifacts.map((artifact) => (
                          <li key={artifact} className="flex items-start gap-2">
                            <span className="text-indigo-400">•</span>
                            <span>{artifact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">Insights</h4>
                      <ul className="space-y-2">
                        {phase.insights.map((insight) => (
                          <li key={insight} className="flex items-start gap-2">
                            <span className="text-indigo-400">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">
              {study.solutionHighlights.heading}
            </h2>
            <div className="border border-slate-700/50 rounded-xl p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              {study.solutionHighlights.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {study.solutionHighlights.bullets && (
                <ul className="space-y-3 pt-4 border-t border-slate-700/50">
                  {study.solutionHighlights.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">{study.outcomes.heading}</h2>
            <div className="border border-slate-700/50 rounded-xl p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              {study.outcomes.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="pt-4 border-t border-slate-700/50 grid gap-3">
                {study.outcomes.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 text-indigo-300"
                  >
                    <span>•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-10">
            <div className="border border-slate-700/50 rounded-xl p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              <h3 className="text-sm text-indigo-400 uppercase tracking-wider font-semibold mb-4">Lessons Learned</h3>
              <ul className="space-y-3">
                {study.lessons.map((lesson) => (
                  <li key={lesson} className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-700/50 rounded-xl p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              <h3 className="text-sm text-indigo-400 uppercase tracking-wider font-semibold mb-4">Next Steps</h3>
              <ul className="space-y-3">
                {study.nextSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <footer className="pt-10 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Have a similar challenge?
                </h2>
                <p className="text-sm text-slate-400 mt-3">
                  Let's connect and build the next experience together.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:Pablo@ProgrammingPablo.com"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-400 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  Email Pablo
                </a>
                <Link
                  href="/case-studies"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  Explore more case studies →
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

