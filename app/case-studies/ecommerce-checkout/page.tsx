import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { aiCreativeContentCaseStudy } from '../data/aiCreativeContent';
import Image from 'next/image';

export default function AICreativeContentCaseStudyPage() {
  const study = aiCreativeContentCaseStudy;

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

          {/* ===== Case Study: Communication & Evangelism ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">Communication & Evangelism</h2>
            <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 space-y-4 text-sm text-zinc-300">
              <p>
                I shared this work across multiple touchpoints to build buy-in and help teams get up and running:
              </p>
              <ul className="space-y-3 pt-4 border-t border-green-400/20">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▹</span>
                  <span><strong>Design crits</strong> with product and AI teams to refine the approach and gather feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▹</span>
                  <span><strong>Leadership demos</strong> to get buy-in on broader applications of the framework.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▹</span>
                  <span><strong>Customer onboarding sessions</strong> to help teams get up and running quickly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▹</span>
                  <span><strong>Documentation guide</strong>—"Building for AI Imagination"—which helped onboard new designers and PMs.</span>
                </li>
              </ul>
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

          {/* ===== Case Study: Reflecting on the Work ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">Reflecting on the Work</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-green-400/30 rounded-lg p-6 bg-black/50">
                <h3 className="text-sm uppercase tracking-[0.3em] text-green-400 mb-4">What Worked</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>The structured framework made people feel guided, not boxed in.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>Letting users customize after generation gave them control without pressure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>Bringing in stakeholders early helped prevent churn later.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>Having the realm of possibilities shown made users feel "calmer" as they didn't have to come up with control ideas to iterate.</span>
                  </li>
                </ul>
              </div>
              <div className="border border-green-400/30 rounded-lg p-6 bg-black/50">
                <h3 className="text-sm uppercase tracking-[0.3em] text-green-400 mb-4">What Didn't</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>Our first version was too rigid—creativity isn't always linear.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>Some users just wanted to explore—we added a "quickstart" mode for play.</span>
                  </li>
                </ul>
              </div>
              <div className="border border-green-400/30 rounded-lg p-6 bg-black/50">
                <h3 className="text-sm uppercase tracking-[0.3em] text-green-400 mb-4">What I'd Do Differently</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>Introduce AI-assisted brief writing earlier—it tested well, but came in late.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>Test more with video creators—not just designers—so we could optimize for real-world pacing and structure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>Test faster with marketing specialists at varying levels of creative knowledge.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== Case Study: Visual Walkthrough Sections ===== */}
          <section className="space-y-12">
            <h2 className="text-lg text-green-400 uppercase tracking-[0.3em]">Visual Walkthrough</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* GIF Section 1 */}
              <div className="flex">
                <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 flex flex-col w-full">
                  <div className="aspect-square bg-zinc-900 border border-green-400/20 rounded-lg overflow-hidden mb-4 relative">
                    <Image 
                      src="/number_1.gif" 
                      alt="GIF 1" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-green-400 mb-2 mt-4">
                    Prompt Building Flow
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                  The prompt-building flow grounds the AI with clear context to reduce hallucinations. By choosing the brief, content type, tactic, and medium, the user narrows what the model needs to generate, minimizing ambiguity. Users can then save their favorite outputs as inspiration or mood-board references.
                  </p>
                </div>
              </div>

              {/* GIF Section 2 */}
              <div className="flex">
                <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 flex flex-col w-full">
                  <div className="aspect-square bg-zinc-900 border border-green-400/20 rounded-lg overflow-hidden mb-4 relative">
                    <Image 
                      src="/number_2.gif" 
                      alt="GIF 2" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-green-400 mb-2 mt-4">
                    Generation Controls
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                  The empty boxes show AI-generated options once the user sets the prompt and a control. This gives them a low-pressure way to explore ideas without starting from scratch. Since most people are better curators than creators, offering strong options upfront helps them see what’s possible with no guesswork or expertise required.
                  </p>
                </div>
              </div>

              {/* GIF Section 3 */}
              <div className="flex">
                <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 flex flex-col w-full">
                  <div className="aspect-square bg-zinc-900 border border-green-400/20 rounded-lg overflow-hidden mb-4 relative">
                    <Image 
                      src="/number_3.gif" 
                      alt="GIF 3" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-green-400 mb-2 mt-4">
                    Post-Generation Edits
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                  When generating hybrid content (e.g., image + text or video + text), users can edit each element separately. This allows full control to refine visuals and text independently, avoiding the need to redo the entire creative set.
                  </p>
                </div>
              </div>

              {/* GIF Section 4 */}
              <div className="flex">
                <div className="border border-green-400/30 rounded-lg p-6 md:p-8 bg-black/50 flex flex-col w-full">
                  <div className="aspect-square bg-zinc-900 border border-green-400/20 rounded-lg overflow-hidden mb-4 relative">
                    <Image 
                      src="/number_4.gif" 
                      alt="GIF 4" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-green-400 mb-2 mt-4">
                    Collaboration
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                  Users can save ideas in folders and collaborate in real time. Shared spaces—like moodboards or inspiration boards—help teams iterate faster, make decisions quicker, and keep the creative process fluid and enjoyable.
                  </p>
                </div>
              </div>
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


