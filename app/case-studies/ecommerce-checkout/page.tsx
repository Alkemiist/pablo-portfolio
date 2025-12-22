import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { aiCreativeContentCaseStudy } from '../data/aiCreativeContent';
import Image from 'next/image';

export default function AICreativeContentCaseStudyPage() {
  const study = aiCreativeContentCaseStudy;

  return (
    <div className="min-h-screen bg-[#0f0f23] relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950/20 via-purple-950/10 to-cyan-950/20 pointer-events-none"></div>
      
      {/* Animated grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-40"></div>
      
      <Navigation />

      {/* Hero Image - At the very top */}
      <div className="w-full pt-24 pb-16 relative z-10">
        <div className="w-full border-y border-slate-700/50 bg-slate-800/20 backdrop-blur-sm py-8 sm:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image 
              src="/Feature-output.png" 
              alt={`${study.title} - Final UI Output`}
              width={1200}
              height={675}
              className="w-full h-auto object-contain rounded-lg shadow-2xl shadow-indigo-950/50"
              priority
            />
          </div>
        </div>
      </div>

      <div className="pb-20 px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* ===== Case Study: Hero Header ===== */}
          <header className="space-y-8">
            <div className="space-y-4">
              <span className="text-indigo-400 uppercase tracking-[0.35em] text-xs font-medium">
                {study.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {study.title}
              </h1>
              <p className="text-slate-300 text-base leading-relaxed max-w-3xl">
                {study.summary}
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 md:p-8">
              <h2 className="text-sm text-indigo-400 uppercase tracking-[0.3em] mb-4 font-medium">
                Project Snapshot
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-300">
                {study.meta.map((item) => (
                  <div key={item.label} className="bg-slate-800/50 border border-slate-700/50 rounded-md p-4 hover:border-indigo-500/50 transition-colors">
                    <dt className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">{item.label}</dt>
                    <dd className="mt-2 text-slate-100">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </header>

          {/* ===== Case Study: Key Metrics ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">Key Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/30 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium">{metric.label}</div>
                  <div className="text-3xl font-bold text-slate-50 mt-4">{metric.value}</div>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Case Study: Communication & Evangelism ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">Communication & Evangelism</h2>
            <div className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              <p>
                I shared this work across multiple touchpoints to build buy-in and help teams get up and running:
              </p>
              <ul className="space-y-3 pt-4 border-t border-slate-700/50">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▹</span>
                  <span><strong>Design crits</strong> with product and AI teams to refine the approach and gather feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▹</span>
                  <span><strong>Leadership demos</strong> to get buy-in on broader applications of the framework.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▹</span>
                  <span><strong>Customer onboarding sessions</strong> to help teams get up and running quickly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▹</span>
                  <span><strong>Documentation guide</strong>—"Building for AI Imagination"—which helped onboard new designers and PMs.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ===== Case Study: Objectives & Audience ===== */}
          <section className="grid lg:grid-cols-2 gap-10 border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm">
            <div className="space-y-4">
              <h3 className="text-sm text-indigo-400 uppercase tracking-[0.3em] font-medium">Objectives</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {study.objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm text-indigo-400 uppercase tracking-[0.3em] font-medium">Audience</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {study.audience.map((persona) => (
                  <li key={persona} className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>{persona}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ===== Case Study: Problem Statement ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">{study.problem.heading}</h2>
            <div className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              {study.problem.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
              {study.problem.bullets && (
                <ul className="space-y-3 pt-4 border-t border-slate-700/50">
                  {study.problem.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="text-indigo-400 mt-1">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ===== Case Study: Research Insights ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">Research Insights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {study.researchInsights.map((insight) => (
                <div key={insight.label} className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/30 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-indigo-400 mb-3 font-medium">{insight.label}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Case Study: Process Highlights ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">Process Highlights</h2>
            <div className="space-y-6">
              {study.process.map((phase, index) => (
                <div
                  key={phase.id}
                  className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">
                        {String(index + 1).padStart(2, '0')} • {phase.title}
                      </div>
                      <p className="text-sm text-slate-300 mt-3 leading-relaxed">{phase.summary}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid lg:grid-cols-3 gap-6 text-sm text-slate-300">
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">Key Activities</h4>
                      <ul className="space-y-2">
                        {phase.keyActivities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2">
                            <span className="text-indigo-400">▹</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">Artifacts</h4>
                      <ul className="space-y-2">
                        {phase.artifacts.map((artifact) => (
                          <li key={artifact} className="flex items-start gap-2">
                            <span className="text-indigo-400">▹</span>
                            <span>{artifact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">Insights</h4>
                      <ul className="space-y-2">
                        {phase.insights.map((insight) => (
                          <li key={insight} className="flex items-start gap-2">
                            <span className="text-indigo-400">▹</span>
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
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">
              {study.solutionHighlights.heading}
            </h2>
            <div className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              {study.solutionHighlights.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
              {study.solutionHighlights.bullets && (
                <ul className="space-y-3 pt-4 border-t border-slate-700/50">
                  {study.solutionHighlights.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="text-indigo-400 mt-1">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ===== Case Study: Outcomes ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">{study.outcomes.heading}</h2>
            <div className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 text-sm text-slate-300">
              {study.outcomes.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
              <div className="pt-4 border-t border-slate-700/50 grid gap-3">
                {study.outcomes.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 text-indigo-300">
                    <span>▹</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== Case Study: Reflecting on the Work ===== */}
          <section className="space-y-6">
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">Reflecting on the Work</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/30 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                <h3 className="text-sm uppercase tracking-[0.3em] text-indigo-400 mb-4 font-medium">What Worked</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>The structured framework made people feel guided, not boxed in.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>Letting users customize after generation gave them control without pressure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>Bringing in stakeholders early helped prevent churn later.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>Having the realm of possibilities shown made users feel "calmer" as they didn't have to come up with control ideas to iterate.</span>
                  </li>
                </ul>
              </div>
              <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/30 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                <h3 className="text-sm uppercase tracking-[0.3em] text-indigo-400 mb-4 font-medium">What Didn't</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>Our first version was too rigid—creativity isn't always linear.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>Some users just wanted to explore—we added a "quickstart" mode for play.</span>
                  </li>
                </ul>
              </div>
              <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/30 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                <h3 className="text-sm uppercase tracking-[0.3em] text-indigo-400 mb-4 font-medium">What I'd Do Differently</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>Introduce AI-assisted brief writing earlier—it tested well, but came in late.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>Test more with video creators—not just designers—so we could optimize for real-world pacing and structure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>Test faster with marketing specialists at varying levels of creative knowledge.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== Case Study: Visual Walkthrough Sections ===== */}
          <section className="space-y-12">
            <h2 className="text-lg text-indigo-400 uppercase tracking-[0.3em] font-medium">Visual Walkthrough</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* GIF Section 1 */}
              <div className="flex">
                <div className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm flex flex-col w-full hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="aspect-square bg-slate-900 border border-slate-700/50 rounded-lg overflow-hidden mb-4 relative">
                    <Image 
                      src="/Number_1.gif" 
                      alt="GIF 1" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-indigo-400 mb-2 mt-4">
                    Prompt Building Flow
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                  The prompt-building flow grounds the AI with clear context to reduce hallucinations. By choosing the brief, content type, tactic, and medium, the user narrows what the model needs to generate, minimizing ambiguity. Users can then save their favorite outputs as inspiration or mood-board references.
                  </p>
                </div>
              </div>

              {/* GIF Section 2 */}
              <div className="flex">
                <div className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm flex flex-col w-full hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="aspect-square bg-slate-900 border border-slate-700/50 rounded-lg overflow-hidden mb-4 relative">
                    <Image 
                      src="/number_2.gif" 
                      alt="GIF 2" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-indigo-400 mb-2 mt-4">
                    Generation Controls
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                  The empty boxes show AI-generated options once the user sets the prompt and a control. This gives them a low-pressure way to explore ideas without starting from scratch. Since most people are better curators than creators, offering strong options upfront helps them see what's possible with no guesswork or expertise required.
                  </p>
                </div>
              </div>

              {/* GIF Section 3 */}
              <div className="flex">
                <div className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm flex flex-col w-full hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="aspect-square bg-slate-900 border border-slate-700/50 rounded-lg overflow-hidden mb-4 relative">
                    <Image 
                      src="/number_3.gif" 
                      alt="GIF 3" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-indigo-400 mb-2 mt-4">
                    Post-Generation Edits
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                  When generating hybrid content (e.g., image + text or video + text), users can edit each element separately. This allows full control to refine visuals and text independently, avoiding the need to redo the entire creative set.
                  </p>
                </div>
              </div>

              {/* GIF Section 4 */}
              <div className="flex">
                <div className="border border-slate-700/50 rounded-lg p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm flex flex-col w-full hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="aspect-square bg-slate-900 border border-slate-700/50 rounded-lg overflow-hidden mb-4 relative">
                    <Image 
                      src="/number_4.gif" 
                      alt="GIF 4" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-indigo-400 mb-2 mt-4">
                    Collaboration
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                  Users can save ideas in folders and collaborate in real time. Shared spaces—like moodboards or inspiration boards—help teams iterate faster, make decisions quicker, and keep the creative process fluid and enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Case Study: Footer CTA ===== */}
          <footer className="pt-10 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Have a similar challenge?
                </h2>
                <p className="text-sm text-slate-400 mt-2">
                  Let's connect and build the next experience together.
                </p>
              </div>
              <div className="flex items-center gap-4">
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


