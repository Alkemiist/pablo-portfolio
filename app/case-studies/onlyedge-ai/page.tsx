import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function OnlyEdgeAICaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#0f0f23] relative overflow-hidden">
      {/* Subtle gradient background - more muted */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950/40 via-slate-950/20 to-slate-950/40 pointer-events-none"></div>
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-40"></div>
      
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* ===== Hero Header ===== */}
          <header className="space-y-8 mb-20">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                  Pre-Seed
                </span>
                <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                  0 → 1
                </span>
                <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                  Product Strategy
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
                Designing the Foundation of an AI Product at Pre-Seed
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-300 font-medium">
                Turning a Founder-Led Demo into a Sellable MVP
              </p>
            </div>

            {/* Role & Context Card */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-2">Role</div>
                  <div className="text-slate-200 font-medium">VP of Product Development</div>
                  <div className="text-slate-400 text-sm mt-1">First Product Designer</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-2">Company Stage</div>
                  <div className="text-slate-200 font-medium">Pre-seed</div>
                  <div className="text-slate-400 text-sm mt-1">Demo-only · No funding yet</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-2">Product</div>
                  <div className="text-slate-200 font-medium">OnlyEdge AI</div>
                  <div className="text-slate-400 text-sm mt-1">Agentic hiring platform for PE sponsors</div>
                </div>
              </div>
            </div>
          </header>

          {/* ===== Overview ===== */}
          <section className="mb-20">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed">
                When I joined OnlyEdge AI, the company did not yet have a product—it had a <strong className="text-amber-400">founder-led demo that required constant narration</strong>.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                During one demo session, a potential customer said it plainly:
              </p>
              <blockquote className="border-l-4 border-rose-500/50 pl-6 py-2 mb-6 bg-rose-950/10">
                <p className="text-lg text-slate-300 italic">
                  "If you weren't guiding me through this, I wouldn't know what to do."
                </p>
              </blockquote>
              <p className="text-slate-400 leading-relaxed">
                That wasn't feedback—it was a diagnosis. The company was weeks away from losing credibility with investors and customers. We had <strong className="text-rose-400">zero signed contracts</strong>, and the product's broken information architecture made it unsellable without hand-holding.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I was brought in as the first product designer to <strong className="text-slate-200">fix the fundamentals</strong>, define a real MVP, and establish the foundation the company would build from.
              </p>
            </div>

            {/* What I Did - Summary Cards */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
                <div className="text-slate-300 text-sm font-medium mb-2">Diagnosed</div>
                <p className="text-slate-400 text-sm">A broken mental model and 6-step navigation maze that made the product unsellable</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
                <div className="text-slate-300 text-sm font-medium mb-2">Simplified</div>
                <p className="text-slate-400 text-sm">6 steps to 2, eliminating backward navigation and blank-screen drop-offs</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
                <div className="text-slate-300 text-sm font-medium mb-2">Delivered</div>
                <p className="text-slate-400 text-sm">0 → 2 signed contracts in first wave of demos post-redesign</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
                <div className="text-slate-300 text-sm font-medium mb-2">Established</div>
                <p className="text-slate-400 text-sm">The product foundation and roadmap for scalable growth</p>
              </div>
            </div>
          </section>

          {/* ===== Context & Stakes ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Context & Stakes</h2>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              OnlyEdge AI was pre-seed and actively demoing the product to potential customers and investors. There were no real users yet—only walkthroughs led by the co-founder.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
              During demo sessions, the friction was obvious. Potential customers poked at the interface, clearly confused. One said it plainly:
            </p>

            <blockquote className="mb-8 border-l-4 border-rose-500/50 pl-6 py-2 bg-rose-950/10">
              <p className="text-lg text-slate-300 italic">
                "If you weren't guiding me through this, I wouldn't know what to do."
              </p>
            </blockquote>

            {/* The Risk - Highlighted - THIS deserves color */}
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-rose-400 mb-4 flex items-center gap-2">
                <span className="text-xl">⚠</span> The Risk
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-rose-400/70 mt-1">▹</span>
                  <span>Deals were being lost during demos</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-rose-400/70 mt-1">▹</span>
                  <span>The product could not be sold independently</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-rose-400/70 mt-1">▹</span>
                  <span>Funding was at risk with zero signed contracts</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-rose-400/70 mt-1">▹</span>
                  <span>Continuing forward without correction would have made restarting later catastrophic</span>
                </li>
              </ul>
              <p className="mt-6 text-slate-200 font-medium border-t border-rose-500/20 pt-4">
                The company needed more than better UI—it needed <span className="text-amber-400">product clarity</span>.
              </p>
            </div>
          </section>

          {/* ===== The Initial Product State ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">The Initial Product State</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              The issues extended far beyond aesthetics:
            </p>

            <div className="space-y-6">
              {/* Issue 1 */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">Broken mental model</h3>
                <p className="text-slate-400 mb-4">Users had no clear understanding of:</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">—</span>
                    <span>What the product was doing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">—</span>
                    <span>What they were supposed to do next</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">—</span>
                    <span>What success looked like</span>
                  </li>
                </ul>
              </div>

              {/* Issue 2 */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">Over-automation without control</h3>
                <p className="text-slate-400">
                  The product led heavily with voice input, assuming users would be impressed by automation and "figure it out," without the ability to review, edit, or refine answers.
                </p>
              </div>

              {/* Issue 3 */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">High cognitive load</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">—</span>
                    <span>Long, rigid project creation flow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">—</span>
                    <span>No progressive disclosure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">—</span>
                    <span>No clear hierarchy or information architecture</span>
                  </li>
                </ul>
              </div>

              {/* Issue 4 */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">Dead-end experience</h3>
                <p className="text-slate-400">
                  After completing project creation, users were dropped into a blank screen ("CIM & Deal Info" tab) with no guidance—leading to immediate confusion and drop-off.
                </p>
              </div>
            </div>

            {/* Critical Signal - Key insight, deserves color */}
            <div className="mt-8 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <p className="text-slate-200 leading-relaxed mb-4">
                A critical signal that this was not "just UI" was that <strong className="text-amber-400">users could not operate the product without the founder present</strong>. The experience had no self-guiding logic.
              </p>
              <p className="text-slate-400 leading-relaxed italic">
                "If you weren't guiding me through this, I wouldn't know what to do." — Potential customer during demo
              </p>
            </div>
          </section>

          {/* ===== The Navigation Labyrinth ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">The Navigation Labyrinth: Why Users Couldn't Succeed Alone</h2>
            
            <p className="text-slate-400 leading-relaxed mb-8">
              The broken mental model wasn't abstract—it was architectural. The navigation structure made success nearly impossible without guidance.
            </p>

            {/* The Old Flow */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-rose-400 mb-4">The Old Flow (6-7 Steps to See Results)</h3>
              <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-6">
                <ol className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-mono text-sm mt-1">1.</span>
                    <span>Create project → complete context gathering ✓</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-mono text-sm mt-1">2.</span>
                    <span>Land on "CIM & Deal Info" tab → <strong className="text-rose-400">BLANK SCREEN</strong> ❌</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-mono text-sm mt-1">3.</span>
                    <span>Manually handpick extractions from context</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-mono text-sm mt-1">4.</span>
                    <span>Navigate <strong>BACKWARDS</strong> 2 tabs to "Candidate Pipeline"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-mono text-sm mt-1">5.</span>
                    <span>Navigate through 4 children tabs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-mono text-sm mt-1">6.</span>
                    <span>Select tab #4 (far right) to reach "Search"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-mono text-sm mt-1">7.</span>
                    <span>Manually add handpicked criteria and click search to finally see results</span>
                  </li>
                </ol>
                <div className="mt-6 pt-6 border-t border-rose-500/20">
                  <p className="text-slate-300 font-medium">
                    This wasn't just a UX problem—it was an <span className="text-rose-400">architecture problem</span>. Users were punished for completing the flow.
                  </p>
                </div>
              </div>
            </div>

            {/* The New Flow */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">The New Flow (2 Steps to Value)</h3>
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-6">
                <ol className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono text-sm mt-1">1.</span>
                    <span>Create project → complete context gathering ✓</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono text-sm mt-1">2.</span>
                    <span>Auto-land on "Search" with <strong className="text-emerald-400">pre-populated, context-driven results</strong> ✓</span>
                  </li>
                </ol>
                <div className="mt-6 pt-6 border-t border-emerald-500/20">
                  <p className="text-slate-300">
                    <strong className="text-emerald-400">Zero backwards navigation.</strong> Results appear immediately. The system demonstrates understanding before asking users to do anything else.
                  </p>
                </div>
              </div>
            </div>

            {/* Before/After Screenshots - Add CEO demo photos here */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Visual Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before photo 1 - Old Recommendations tab */}
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden border border-rose-500/30">
                    <img src="/old-recs.png" alt="Old: Blank CIM & Deal Info screen after project creation" className="w-full h-auto" />
                  </div>
                  <p className="text-sm text-slate-400">
                    <strong className="text-rose-400">Before:</strong> Users landed on a blank "CIM & Deal Info" screen with no guidance
                  </p>
                </div>

                {/* Before photo 2 - Old Candidate Search */}
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden border border-rose-500/30">
                    <img src="/old-search.png" alt="Old: Manual candidate search requiring backward navigation" className="w-full h-auto" />
                  </div>
                  <p className="text-sm text-slate-400">
                    <strong className="text-rose-400">Before:</strong> Required navigating backward through tabs and manually adding criteria
                  </p>
                </div>

                {/* After: New Recommendations */}
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden border border-emerald-500/30">
                    <img src="/recommendations.png" alt="New: Auto-populated recommendations immediately after project creation" className="w-full h-auto" />
                  </div>
                  <p className="text-sm text-slate-400">
                    <strong className="text-emerald-400">After:</strong> Recommendations auto-populate and learn from user searches
                  </p>
                </div>

                {/* After: New Search */}
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden border border-emerald-500/30">
                    <img src="/candidate-search.png" alt="New: Auto-populated search results based on context" className="w-full h-auto" />
                  </div>
                  <p className="text-sm text-slate-400">
                    <strong className="text-emerald-400">After:</strong> Users land directly on search with pre-populated, context-driven results
                  </p>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <p className="text-slate-200 leading-relaxed">
                The old design assumed users would <em>explore and discover</em>. The new design assumes users want to <strong className="text-amber-400">see value immediately and iterate from there</strong>. This single architectural change eliminated the need for founder narration.
              </p>
            </div>
          </section>

          {/* ===== Diagnosis: The Real Problem ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Diagnosis: The Real Problem</h2>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              The core issue was a <strong className="text-amber-400">broken mental model driven by unchecked assumptions</strong>.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              The navigation labyrinth wasn't the disease—it was a symptom. The real problem was that the product had been built around what the founders <em>thought</em> would impress users, not what users actually needed to accomplish their jobs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Assumptions */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500 font-medium mb-4">Assumptions Baked In</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600">×</span>
                    <span>Voice-first interaction would inherently create delight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600">×</span>
                    <span>Users would tolerate complexity if AI was involved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600">×</span>
                    <span>One system could serve multiple ICPs equally well</span>
                  </li>
                </ul>
              </div>

              {/* Reality - The contrast is the insight */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500 font-medium mb-4">Reality</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>PE workflows demand clarity and specificity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>AI value depends on <strong className="text-slate-100">context and point of view</strong>, not novelty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Users need agency, not magic</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              This required a reset grounded in <strong className="text-slate-200">first principles</strong>, not iteration on top of flawed foundations.
            </p>
          </section>

          {/* ===== The Market Gap ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">The Market Gap: Why Keyword Match Isn't Enough</h2>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              Before defining our MVP, I needed to understand what made us different. The competitive landscape revealed a critical gap.
            </p>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">The Standard Experience</h3>
              <div className="bg-slate-900/50 rounded-lg p-4 mb-4 font-mono text-sm text-slate-400">
                <p>"17 candidates found"</p>
                <p className="mt-2">• Candidate #2: <span className="text-emerald-500">5/5 criteria met</span></p>
                <p>• Candidate #8: <span className="text-emerald-500">5/5 criteria met</span></p>
                <p>• Candidate #14: <span className="text-emerald-500">5/5 criteria met</span></p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The question users always ask: <strong className="text-amber-400">What makes candidate #2 better than candidate #8?</strong>
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Traditional platforms can't answer this. They rely on basic keyword matching against public LinkedIn data. Everyone has access to the same information, so everyone gets the same undifferentiated results.
              </p>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">OnlyEdge's Differentiator</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                We go deeper. By combining <strong className="text-slate-200">proprietary data sources</strong> with the context gathered during project creation, we don't just <em>find</em> candidates—we explain <strong className="text-amber-400">why they're the right fit for this specific role</strong>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                This is what PE sponsors actually need: not more candidates, but <strong className="text-slate-200">better judgment</strong>.
              </p>
            </div>
          </section>

          {/* ===== Product Strategy - THE key insight ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Product Strategy: Defining the Real MVP</h2>
            
            {/* This is THE key strategic insight - deserves emphasis */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 md:p-8 mb-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                I redefined the MVP as:
              </p>
              <blockquote className="text-xl md:text-2xl font-medium text-amber-400 border-l-4 border-amber-500 pl-6">
                The smallest product we could confidently sell, centered on our strongest differentiator.
              </blockquote>
              <p className="mt-6 text-slate-400 leading-relaxed">
                That differentiator was not automation—it was <strong className="text-slate-200">context-driven recommendations with a clear point of view</strong> explaining <em>why</em> a candidate was a strong fit.
              </p>
            </div>

            {/* Why PE Specifically */}
            <div className="mb-8 bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Why PE Specifically?</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Rather than trying to serve everyone, we focused on the ICP with the most acute pain and the highest willingness to pay for a better solution.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Private equity executive hiring is uniquely fragmented:
              </p>
              <ul className="space-y-2 text-slate-400 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-600">—</span>
                  <span>Legacy recruiting firms using manual processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-600">—</span>
                  <span>Disconnected tools and spreadsheets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-600">—</span>
                  <span>No standardization across deals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-600">—</span>
                  <span>High stakes with limited time</span>
                </li>
              </ul>
              <p className="text-slate-200 font-medium">
                This focus shaped everything: the context we gathered, the data we prioritized, and the recommendations we surfaced.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Guiding Principles */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">Guiding Principles</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Reduce cognitive load</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Apply progressive disclosure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Maintain user agency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Always answer: <em className="text-slate-400">Where am I? What's happening? What's next?</em></span>
                  </li>
                </ul>
              </div>

              {/* Intentional Tradeoffs */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">Intentional Tradeoffs</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Fewer steps, but more clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Voice as an option, not the default</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Recommendations first, search second</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Simplification without loss of functionality</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== Execution: Rebuilding the Core Experience ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-2">Execution: Rebuilding the Core Experience</h2>
            <p className="text-slate-400 mb-6">Each decision was intentional, not decorative.</p>

            {/* Working Within Constraints */}
            <div className="mb-10 bg-slate-800/40 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-medium mb-3">Working Within Constraints</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                With limited engineering resources and aggressive timelines, I couldn't rebuild from scratch. Instead, I:
              </p>
              <ul className="space-y-2 text-slate-300 text-sm mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Restructured existing components rather than creating new ones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Focused on <strong>information architecture and UX</strong>, not net-new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Made the current pieces work harder and smarter</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm italic">
                The best 0→1 work isn't about having unlimited resources—it's about making the right tradeoffs.
              </p>
            </div>

            {/* Screen 1: Home Screen */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">01</span>
                <h3 className="text-xl font-semibold text-slate-200">Home Screen — Project List</h3>
              </div>
              
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
                <h4 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-medium mb-3">Intent</h4>
                <p className="text-slate-300 leading-relaxed">
                  Give users a clear starting point: create a new project, or revisit existing projects. No ambiguity. No distractions.
                </p>
              </div>

              {/* Home Screen Image */}
              <div className="rounded-xl overflow-hidden border border-slate-700/50">
                <img 
                  src="/home.png" 
                  alt="OnlyEdge AI Home Screen - Project List" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Screen 2: Project Creation */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">02</span>
                <h3 className="text-xl font-semibold text-slate-200">Project Creation — A Focused 2-Step Wizard</h3>
              </div>
              
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
                <p className="text-slate-300 leading-relaxed mb-4">
                  The original flow was long, rigid, and exhausting. I reduced it to two essential steps:
                </p>
                <ol className="space-y-2 text-slate-300 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500 font-mono text-sm">1.</span>
                    <span>Basic project details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500 font-mono text-sm">2.</span>
                    <span>Context gathering to form an initial thesis</span>
                  </li>
                </ol>
                <p className="text-slate-400 leading-relaxed mb-4">
                  The second step uses a <strong className="text-slate-200">chat-style interface</strong> familiar to users of tools like ChatGPT or Claude, lowering friction and increasing comprehension.
                </p>
                <div className="border-t border-slate-700/50 pt-4 mt-4">
                  <p className="text-sm text-slate-400 font-medium mb-3">Strategic Decision: Voice as Option, Not Mandate</p>
                  <p className="text-sm text-slate-400 mb-3">
                    The original voice-first approach created multiple single points of failure:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">×</span>
                      <span><strong>Accessibility:</strong> Users in public spaces or quiet offices couldn't use the product</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">×</span>
                      <span><strong>Reliability:</strong> If the voice API failed, the entire flow broke</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">×</span>
                      <span><strong>User agency:</strong> Users were locked into a linear path with no escape hatches</span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-300">
                    The redesign wasn't about <em>removing</em> voice—it was about making it <strong className="text-emerald-400">optional, not mandatory</strong>:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-300">
                    <li>• Users can type <strong>or</strong> speak at any point</li>
                    <li>• All inputs are visible and editable</li>
                    <li>• Multiple pathways to success, not one fragile route</li>
                  </ul>
                </div>
                <p className="text-slate-400 text-sm mt-4 italic">
                  This wasn't about features—it was about <strong className="text-slate-200">resilience</strong>. PE hiring is too critical to depend on a single interaction mode.
                </p>
              </div>

              {/* Step Images */}
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-slate-700/50">
                  <img 
                    src="/create-project.png" 
                    alt="Step 1: Basic Project Details" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-700/50">
                  <img 
                    src="/context-gathering.png" 
                    alt="Step 2: Chat-Style Context Gathering" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Screen 3: Project Viewing */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">03</span>
                <h3 className="text-xl font-semibold text-slate-200">Project Viewing — From Confusion to Immediate Value</h3>
              </div>
              
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
                <p className="text-slate-400 leading-relaxed mb-4">
                  Previously, users had to:
                </p>
                <ul className="space-y-2 text-slate-400 text-sm mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600">×</span>
                    <span>Manually select extracted keywords</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600">×</span>
                    <span>Traverse backward through screens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600">×</span>
                    <span>Explicitly trigger search to see anything</span>
                  </li>
                </ul>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I redesigned the information architecture so the system:
                </p>
                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Clearly communicates what it has understood</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Immediately presents <strong>recommended candidates</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Makes next steps obvious</span>
                  </li>
                </ul>
                <p className="text-slate-200 font-medium">
                  This eliminated backward traversal entirely.
                </p>
                
                <div className="mt-6 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                  <p className="text-sm text-slate-400 font-medium mb-2">The new happy path:</p>
                  <p className="text-slate-300 text-sm font-mono">
                    Project details → Context → Recommendations → Search → Pipeline → Outreach
                  </p>
                </div>
              </div>

              {/* Project Viewing Image */}
              <div className="rounded-xl overflow-hidden border border-slate-700/50">
                <img 
                  src="/recommendations.png" 
                  alt="Project Overview with Recommendations" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Screen 4: Candidate Cards */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">04</span>
                <h3 className="text-xl font-semibold text-slate-200">Candidate Cards — Designing for the Right Question</h3>
              </div>
              
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
                <p className="text-slate-400 leading-relaxed mb-4">
                  The original cards tried to say everything and ended up saying nothing.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I redesigned them around a single job:
                </p>
                {/* This question IS the design insight - deserves emphasis */}
                <blockquote className="text-lg font-medium text-amber-400 border-l-4 border-amber-500 pl-4 my-6">
                  Why is this person a strong fit for this specific role?
                </blockquote>
                <p className="text-slate-400 leading-relaxed mb-4">Changes included:</p>
                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Clear visual hierarchy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Reduced color noise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Grouped information by intent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Removed irrelevant or distracting data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">▹</span>
                    <span>Emphasized the AI-generated "fit explanation" as the primary value</span>
                  </li>
                </ul>
                <p className="text-slate-400 text-sm italic">
                  Every element now serves a purpose: help the user understand <strong className="text-slate-200">why this person matters</strong>.
                </p>
              </div>

              {/* Candidate Search Image */}
              <div className="rounded-xl overflow-hidden border border-slate-700/50">
                <img 
                  src="/candidate-search.png" 
                  alt="Candidate Search View" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* ===== Impact & Outcomes ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-8">Impact & Outcomes</h2>
            
            {/* Hard Metrics */}
            <div className="mb-8 bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Measurable Results</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">0 → 2</div>
                  <p className="text-slate-300">Signed contracts in first wave of demos post-redesign</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">6 → 2</div>
                  <p className="text-slate-300">Steps to see value (70% reduction in user effort)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">~15 min → ~2 min</div>
                  <p className="text-slate-300">Time to first value (estimated)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100% → 0%</div>
                  <p className="text-slate-300">Demos requiring founder hand-holding</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Immediate Results */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">Product Improvements</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Eliminated backwards navigation entirely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Auto-populated search results based on context</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Clear mental model users could navigate independently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Multiple interaction pathways (voice + text)</span>
                  </li>
                </ul>
              </div>

              {/* Strategic Impact */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">Strategic Impact</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Established product and design principles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Created a foundation for roadmap planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Prevented costly misdirection and rework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Built momentum with initial customers</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== Product Updates ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-2">Building in Public: Product Updates</h2>
            <p className="text-slate-400 mb-8">Transparency as a feature, not an afterthought.</p>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                One principle I carried forward from rebuilding the foundation: <strong className="text-slate-200">users deserve to know what's happening</strong>. No black boxes. No silent updates. No guessing.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                I designed a Product Updates experience that gives users full visibility into product evolution:
              </p>
              <ul className="space-y-2 text-slate-300 text-sm mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">▹</span>
                  <span>Getting started guides and onboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">▹</span>
                  <span>New features with context on why they matter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">▹</span>
                  <span>Performance improvements and optimizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">▹</span>
                  <span>Bug fixes and quality improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">▹</span>
                  <span>UI/UX refinements based on user feedback</span>
                </li>
              </ul>
              <p className="text-slate-400 leading-relaxed">
                This isn't just documentation—it's a commitment to treating users as partners in the product journey. When people understand what changed and why, they don't feel disoriented after updates. When they see steady progress, they trust the team. When they can influence the roadmap, they feel ownership.
              </p>
            </div>

            {/* Product Updates Image */}
            <div className="rounded-xl overflow-hidden border border-slate-700/50">
              <img 
                src="/documentation.png" 
                alt="Product Updates Screen" 
                className="w-full h-auto"
              />
            </div>
          </section>

          {/* ===== From Foundation to Iteration ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">From Foundation to Iteration</h2>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              Launching the redesigned MVP wasn't the end—it was the beginning.
            </p>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8 mb-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                With a solid foundation in place, we could finally:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">→</span>
                  <span><strong>Build a clear roadmap</strong> grounded in real user behavior, not assumptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">→</span>
                  <span><strong>Iterate with confidence</strong>, knowing the core mental model was sound</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">→</span>
                  <span><strong>Add complexity strategically</strong>, rather than inheriting legacy decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">→</span>
                  <span><strong>Learn from real customers</strong> as they used the product in their actual workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed">
                Features like pipeline management and outreach workflows—previously impossible on the broken foundation—now had a clear home in the product architecture. The recommendations system continues to learn from user searches, getting smarter with each interaction.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                The MVP gave us something more valuable than perfection: <strong className="text-slate-200">clarity on what to build next</strong>.
              </p>
            </div>
          </section>

          {/* ===== Reflection ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-8">Reflection</h2>
            
            <p className="text-slate-400 leading-relaxed mb-8">
              This project reinforced several core lessons:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-slate-200 font-medium">More AI does not mean more value</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-slate-200 font-medium">Context and point of view are the true differentiators</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-slate-200 font-medium">Great 0→1 work is about restraint, not excess</p>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8">
              <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500 font-medium mb-4">The principles that now guide my work</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-slate-500">→</span>
                  <span>First principles thinking</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-slate-500">→</span>
                  <span>Second-order consequences</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-slate-500">→</span>
                  <span>Progressive disclosure</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-slate-500">→</span>
                  <span>User agency over automation</span>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Why This Work Matters - THE conclusion ===== */}
          <section className="mb-20">
            <div className="border border-slate-700/50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-50 mb-6">Why This Work Matters</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-4">
                This wasn't a redesign. It wasn't a polish pass.
              </p>
              <p className="text-xl text-slate-200 leading-relaxed mb-6">
                It was a <strong className="text-amber-400">course correction</strong>—transforming a fragile, founder-dependent demo into a product with a clear mental model, measurable value, and a foundation the company could confidently build on.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">0 → 2</div>
                  <div className="text-sm text-slate-400">Signed contracts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">70%</div>
                  <div className="text-sm text-slate-400">Reduction in user effort</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">100% → 0%</div>
                  <div className="text-sm text-slate-400">Hand-holding required</div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Footer CTA ===== */}
          <footer className="pt-10 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">
                  Building something from 0 → 1?
                </h2>
                <p className="text-sm text-slate-400 mt-2">
                  Let's talk about how to get your foundation right.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/case-studies"
                  className="text-sm text-slate-400 hover:text-slate-200 transition-colors font-medium"
                >
                  ← Back to case studies
                </Link>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
