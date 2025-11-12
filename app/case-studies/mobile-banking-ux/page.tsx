import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { mobileBankingCaseStudy } from '../data/mobileBanking';

export default function MobileBankingCaseStudyPage() {
  const study = mobileBankingCaseStudy;

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-mono">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* ===== Case Study: Navigation ===== */}
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-green-400 text-sm hover:text-green-300 transition-colors"
            >
              <span className="text-lg mr-2">←</span> Back to Case Studies
            </Link>
          </div>

          {/* ===== Case Study: Hero Header ===== */}
          <header className="space-y-8">
            <div className="space-y-4">
              <span className="text-green-400 uppercase tracking-[0.35em] text-xs">
                {study.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.35)]">
                {study.title}
              </h1>
              <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
                {study.summary}
              </p>
            </div>

            <div className="bg-black border border-green-400/40 rounded-lg p-6 md:p-8">
              <h2 className="text-sm text-green-400 uppercase tracking-[0.3em] mb-4">
                Project Snapshot
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-zinc-300">
                {study.meta.map((item) => (
                  <div key={item.label} className="bg-black/40 border border-green-400/20 rounded-md p-4">
                    <dt className="text-xs uppercase tracking-[0.3em] text-green-400">{item.label}</dt>
                    <dd className="mt-2 text-zinc-100">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </header>

          {/* ===== Case Study: Key Metrics ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">Key Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-green-400/40 rounded-lg p-6 bg-black/60 hover:border-green-300 transition-colors"
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-green-400">{metric.label}</div>
                  <div className="text-3xl font-bold text-zinc-50 mt-4">{metric.value}</div>
                  <p className="text-xs text-zinc-400 mt-3">{metric.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Case Study: Objectives & Audience ===== */}
          <section className="grid lg:grid-cols-2 gap-10 border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50">
            <div className="space-y-4">
              <h3 className="text-sm text-green-400 uppercase tracking-[0.3em]">Objectives</h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {study.objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm text-green-400 uppercase tracking-[0.3em]">Audience</h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {study.audience.map((persona) => (
                  <li key={persona} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>{persona}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ===== Case Study: Problem Statement ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">{study.problem.heading}</h2>
            <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 space-y-4 text-sm text-zinc-300">
              {study.problem.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {study.problem.bullets && (
                <ul className="space-y-3 pt-4 border-t border-green-400/20">
                  {study.problem.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ===== Case Study: Research Insights ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">Research Insights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {study.researchInsights.map((insight) => (
                <div key={insight.label} className="border border-green-400/30 rounded-lg p-6 bg-black/50">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-green-400 mb-3">{insight.label}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Case Study: Process Highlights ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">Process Highlights</h2>
            <div className="space-y-6">
              {study.process.map((phase, index) => (
                <div
                  key={phase.id}
                  className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 transition-shadow hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-green-400">
                        {String(index + 1).padStart(2, '0')} • {phase.title}
                      </div>
                      <p className="text-sm text-zinc-300 mt-3">{phase.summary}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid lg:grid-cols-3 gap-6 text-sm text-zinc-300">
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-[0.3em] text-green-400">Key Activities</h4>
                      <ul className="space-y-2">
                        {phase.keyActivities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2">
                            <span className="text-green-400">▹</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-[0.3em] text-green-400">Artifacts</h4>
                      <ul className="space-y-2">
                        {phase.artifacts.map((artifact) => (
                          <li key={artifact} className="flex items-start gap-2">
                            <span className="text-green-400">▹</span>
                            <span>{artifact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-[0.3em] text-green-400">Insights</h4>
                      <ul className="space-y-2">
                        {phase.insights.map((insight) => (
                          <li key={insight} className="flex items-start gap-2">
                            <span className="text-green-400">▹</span>
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

          {/* ===== Case Study: Solution Snapshot ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">
              {study.solutionHighlights.heading}
            </h2>
            <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 space-y-4 text-sm text-zinc-300">
              {study.solutionHighlights.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {study.solutionHighlights.bullets && (
                <ul className="space-y-3 pt-4 border-t border-green-400/20">
                  {study.solutionHighlights.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ===== Case Study: Outcomes ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">{study.outcomes.heading}</h2>
            <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 space-y-4 text-sm text-zinc-300">
              {study.outcomes.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="pt-4 border-t border-green-400/20 grid gap-3">
                {study.outcomes.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 text-green-300">
                    <span>▹</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== Case Study: Lessons & Next Steps ===== */}
          <section className="grid lg:grid-cols-2 gap-10">
            <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 space-y-4 text-sm text-zinc-300">
              <h3 className="text-sm text-green-400 uppercase tracking-[0.3em]">Lessons Learned</h3>
              <ul className="space-y-3">
                {study.lessons.map((lesson) => (
                  <li key={lesson} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 space-y-4 text-sm text-zinc-300">
              <h3 className="text-sm text-green-400 uppercase tracking-[0.3em]">Next Steps</h3>
              <ul className="space-y-3">
                {study.nextSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ===== Case Study: Footer CTA ===== */}
          <footer className="pt-10 border-t border-green-400/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.35)]">
                  Have a similar challenge?
                </h2>
                <p className="text-sm text-zinc-400 mt-2">
                  Let’s connect and build the next experience together.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="mailto:Pablo@ProgrammingPablo.com"
                  className="border border-green-400 text-green-400 px-5 py-2 rounded-md hover:bg-green-400 hover:text-black transition-colors"
                >
                  Email Pablo
                </Link>
                <Link
                  href="/case-studies"
                  className="text-sm text-green-400 hover:text-green-300 transition-colors"
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


