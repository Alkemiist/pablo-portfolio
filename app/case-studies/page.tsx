import Link from 'next/link';
import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#0f0f23]">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Terminal Header */}
          {/* <div className="mb-16">
            <div className="bg-black border border-green-400 rounded-lg p-6 font-mono">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-green-400 text-sm">design_process.exe</span>
              </div>
              <div className="text-green-400">
                <div className="mb-2">
                  <span className="text-blue-400">$</span> <span className="animate-pulse">_</span>
                </div>
                <div className="text-sm leading-relaxed">
                  <div className="mb-1">// Design Process: Scientific Method Application</div>
                  <div className="mb-1">// Framework: Hypothesis-driven, evidence-based design</div>
                  <div className="mb-1">// Status: <span className="text-green-400">ACTIVE</span></div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Process Flow Map — two-line pills */}
          <div className="mb-12">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl px-4 py-4 flex items-center justify-between gap-2 flex-wrap">
              {[
                { n: '01', label: 'Observe',    sub: 'See what\'s real',       color: 'text-indigo-400', border: 'hover:border-indigo-500/40' },
                { n: '02', label: 'Question',   sub: 'Find the real problem',  color: 'text-purple-400', border: 'hover:border-purple-500/40' },
                { n: '03', label: 'Hypothesis', sub: 'Make bets explicit',     color: 'text-cyan-400',   border: 'hover:border-cyan-500/40'   },
                { n: '04', label: 'Experiment', sub: 'Build to learn',         color: 'text-indigo-400', border: 'hover:border-indigo-500/40' },
                { n: '05', label: 'Analyze',    sub: 'Read the evidence',      color: 'text-purple-400', border: 'hover:border-purple-500/40' },
                { n: '06', label: 'Synthesize', sub: 'Extract what transfers', color: 'text-cyan-400',   border: 'hover:border-cyan-500/40'   },
              ].map((step, i, arr) => (
                <div key={step.n} className="flex items-center gap-2 flex-1 min-w-0">
                  <div className={`flex-1 min-w-0 bg-slate-800/60 border border-slate-700/50 rounded-lg px-3 py-2.5 ${step.border} transition-colors duration-200 flex items-center gap-3`}>
                    <span className={`text-[11px] font-mono font-medium ${step.color} opacity-70 shrink-0`}>{step.n}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-100 truncate leading-tight">{step.label}</p>
                      <p className="text-[11px] text-slate-500 leading-tight truncate">{step.sub}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <svg className="w-3 h-3 text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Thought Experiments */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Case Studies
              </h2>
              <p className="text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Deep dives into design challenges, user research, and innovative solutions. 
                Each experiment tells a story of discovery and iteration.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* LOIS for Word — take-home that became a production redesign */}
              <Link
                href="/case-studies/lois"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] rounded-xl overflow-hidden"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col">
                  {/* Card hero — styled placeholder until screenshot is ready */}
                  <div className="h-64 md:h-80 relative overflow-hidden bg-[#0d0d12] flex items-center justify-center">
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(124,111,247,0.12) 0%, transparent 65%), radial-gradient(ellipse at 80% 30%, rgba(196,168,130,0.07) 0%, transparent 60%)' }} />
                    <div className="relative z-10 text-center px-8">
                      <div className="text-xs uppercase tracking-[0.15em] mb-3" style={{ fontFamily: 'monospace', color: 'rgba(124,111,247,0.7)' }}>
                        Legal AI · Word Add-in · 48 hrs
                      </div>
                      <div className="text-3xl font-bold mb-2" style={{ color: '#edeaf5', letterSpacing: '-0.02em' }}>
                        LOIS for Word
                      </div>
                      <div className="text-sm" style={{ color: '#8e8aaa', fontStyle: 'italic' }}>
                        A take-home that became a production redesign
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                        Legal AI
                      </span>
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                        Word Add-in
                      </span>
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-[rgba(124,111,247,0.08)] text-indigo-400 border border-indigo-500/20 rounded-full">
                        48-Hour Build
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                      LOIS for Word — Filevine
                    </h3>
                    <p className="text-slate-300 font-medium mb-3">
                      From a 4-hour take-home to a production-quality redesign
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      Filevine gave me a 4-hour design exercise. I submitted that. Then I kept going — two days of thinking, designing, and building because I couldn't put the problem down. Diagnosed a structural IA failure, formed four testable hypotheses, and shipped a working Next.js redesign with five features the original didn't have.
                    </p>
                    <div className="flex items-center text-indigo-400 text-sm font-medium">
                      <span>View case study</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Featured: OnlyEdge AI - VP of Product / Founder Designer Case Study */}
              <Link
                href="/case-studies/onlyedge-ai"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] rounded-xl overflow-hidden"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col">
                  {/* Hero Image */}
                  <div className="h-64 md:h-80 relative overflow-hidden bg-slate-900/50">
                    <Image 
                      src="/recommendations.png" 
                      alt="OnlyEdge AI - Context-driven recommendations interface" 
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                        Pre-Seed
                      </span>
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                        0 → 1
                      </span>
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                        VP of Product
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                      Designing the Foundation of an AI Product at Pre-Seed
                    </h3>
                    <p className="text-slate-300 font-medium mb-3">
                      Turning a Founder-Led Demo into a Sellable MVP
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      When I joined OnlyEdge AI, the company had a founder-led demo—not a product. I was brought in to fix the fundamentals, define a real MVP, and establish the foundation the company would build from.
                    </p>
                    <div className="flex items-center text-indigo-400 text-sm font-medium">
                      <span>View case study</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Inspo — Opus Intelligence */}
              <Link
                href="/case-studies/opus"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] rounded-xl overflow-hidden"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col">
                  <div className="h-64 md:h-80 relative overflow-hidden bg-[#0d0d12] flex items-center justify-center">
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(124,111,247,0.1) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(196,168,130,0.07) 0%, transparent 55%)' }} />
                    <div className="relative z-10 text-center px-8">
                      <div className="text-xs uppercase tracking-[0.15em] mb-3" style={{ fontFamily: 'monospace', color: 'rgba(124,111,247,0.7)' }}>
                        AI Creative · Opus Intelligence · Feature 0→1
                      </div>
                      <div className="text-3xl font-bold mb-2" style={{ color: '#edeaf5', letterSpacing: '-0.02em' }}>
                        Inspo
                      </div>
                      <div className="text-sm" style={{ color: '#8e8aaa', fontStyle: 'italic' }}>
                        From a 1-way street to a creative playground
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                        AI Creative
                      </span>
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                        Opus Intelligence
                      </span>
                      <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-[rgba(124,111,247,0.08)] text-indigo-400 border border-indigo-500/20 rounded-full">
                        Feature 0→1
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                      Inspo — Opus Intelligence
                    </h3>
                    <p className="text-slate-300 font-medium mb-3">
                      From a 1-way street to a creative playground
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      Started from reading user logs, not a brief. Users were manually re-entering brand assets the system already had. Built Inspo — a campaign idea generator using five user-owned assets — that became the most-requested feature in the platform and reshaped the roadmap.
                    </p>
                    <div className="flex items-center text-indigo-400 text-sm font-medium">
                      <span>View case study</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

