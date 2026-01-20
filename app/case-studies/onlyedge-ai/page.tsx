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
                When I joined OnlyEdge AI, the company did not yet have a product—it had a <strong className="text-amber-400">founder-led demo</strong>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                The experience required constant explanation, relied heavily on assumptions about user behavior, and could not stand on its own without guidance. The UX was unintuitive, the UI lacked hierarchy, and the core flows were incomplete. As a result, the product could not be sold, and the company risked locking in the wrong direction too early.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I was brought in as the first product designer to <strong className="text-slate-200">fix the fundamentals</strong>, define a real MVP, and establish the foundation the company would build from.
              </p>
            </div>

            {/* What I Did - Summary Cards */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
                <div className="text-slate-300 text-sm font-medium mb-2">Diagnosed</div>
                <p className="text-slate-400 text-sm">A broken mental model that made the product unsellable without founder hand-holding</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
                <div className="text-slate-300 text-sm font-medium mb-2">Simplified</div>
                <p className="text-slate-400 text-sm">Core workflows by applying first principles, not iterating on broken foundations</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
                <div className="text-slate-300 text-sm font-medium mb-2">Designed</div>
                <p className="text-slate-400 text-sm">An intuitive, sellable MVP centered on the company's true differentiator</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
                <div className="text-slate-300 text-sm font-medium mb-2">Established</div>
                <p className="text-slate-400 text-sm">The product foundation and roadmap for an AI-driven platform</p>
              </div>
            </div>
          </section>

          {/* ===== Context & Stakes ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Context & Stakes</h2>
            
            <p className="text-slate-400 leading-relaxed mb-8">
              OnlyEdge AI was pre-seed and actively demoing the product to potential customers and investors. There were no real users yet—only walkthroughs led by the co-founder.
            </p>

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
                  <span>The MVP could not be sold independently</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-rose-400/70 mt-1">▹</span>
                  <span>Funding was at risk</span>
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
                  After completing project creation, users were dropped into a blank screen with no guidance—leading to immediate confusion and drop-off.
                </p>
              </div>
            </div>

            {/* Critical Signal - Key insight, deserves color */}
            <div className="mt-8 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <p className="text-slate-200 leading-relaxed">
                A critical signal that this was not "just UI" was that <strong className="text-amber-400">users could not operate the product without the founder present</strong>. The experience had no self-guiding logic.
              </p>
            </div>
          </section>

          {/* ===== Diagnosis: The Real Problem ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Diagnosis: The Real Problem</h2>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The core issue was a <strong className="text-amber-400">broken mental model driven by unchecked assumptions</strong>.
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
            <p className="text-slate-400 mb-10">Each decision was intentional, not decorative.</p>

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

              {/* Image Placeholder */}
              <div className="bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-xl p-12 flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-4 opacity-30">🖼️</div>
                <p className="text-slate-500 text-sm font-medium">Final Home / Project List Screen</p>
                <p className="text-slate-600 text-xs mt-1">Image placeholder</p>
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
                  <p className="text-sm text-slate-400">Crucially:</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-300">
                    <li>• Users can type or speak</li>
                    <li>• All inputs are visible and editable</li>
                    <li>• Nothing is locked or hidden</li>
                  </ul>
                </div>
                <p className="text-slate-500 text-sm mt-4 italic">
                  This design respects the reality that PE hiring is iterative and precise.
                </p>
              </div>

              {/* Image Placeholders */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-3 opacity-30">🖼️</div>
                  <p className="text-slate-500 text-sm font-medium">Step 1: Basic Project Details</p>
                  <p className="text-slate-600 text-xs mt-1">Image placeholder</p>
                </div>
                <div className="bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-3 opacity-30">🖼️</div>
                  <p className="text-slate-500 text-sm font-medium">Step 2: Chat-Style Context Input</p>
                  <p className="text-slate-600 text-xs mt-1">Image placeholder</p>
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

              {/* Image Placeholders */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-3 opacity-30">🖼️</div>
                  <p className="text-slate-500 text-sm font-medium">Project Overview with Recommendations</p>
                  <p className="text-slate-600 text-xs mt-1">Image placeholder</p>
                </div>
                <div className="bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-3 opacity-30">🖼️</div>
                  <p className="text-slate-500 text-sm font-medium">Navigation Tabs (Info, Recommendations, Search, Pipeline)</p>
                  <p className="text-slate-600 text-xs mt-1">Image placeholder</p>
                </div>
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
                    <span>Clear hierarchy</span>
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
                </ul>
                <p className="text-slate-500 text-sm italic">
                  The most difficult but important removal was the <strong className="text-slate-300">voice-first emphasis</strong>—it added novelty but hurt clarity.
                </p>
              </div>

              {/* Image Placeholders */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-3 opacity-30">🖼️</div>
                  <p className="text-slate-500 text-sm font-medium">Old vs New Candidate Card</p>
                  <p className="text-slate-600 text-xs mt-1">Image placeholder (optional)</p>
                </div>
                <div className="bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-3 opacity-30">🖼️</div>
                  <p className="text-slate-500 text-sm font-medium">Final Candidate Card</p>
                  <p className="text-slate-600 text-xs mt-1">"Why this candidate" emphasis</p>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Impact & Outcomes ===== */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-50 mb-8">Impact & Outcomes</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Immediate Results */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">Immediate Results</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>A complete, intuitive end-to-end flow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>A product that could be demoed without explanation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>A real MVP that could be sold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Alignment around PE as the core ICP</span>
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
                    <span>Prevented costly misdirection and rework later</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Enabled the company to move toward an OS vision from a solid base</span>
                  </li>
                </ul>
              </div>
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
                This wasn't a redesign.
              </p>
              <p className="text-xl text-slate-200 leading-relaxed">
                It was a <strong className="text-amber-400">course correction</strong>—transforming a fragile demo into a product with a clear mental model, real value, and a foundation the company could confidently build on.
              </p>
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
