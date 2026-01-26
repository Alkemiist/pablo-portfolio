import Link from 'next/link';
import Navigation from '../components/Navigation';
import { caseStudies } from './data';
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

          {/* Process Flow Map */}
          <div className="mb-12">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400 mb-4">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Design Process Framework</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Scientific Method Applied to Design
                </h2>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
                  One of my favorite ways to frame the product design process: as an application of the 
                  <span className="text-indigo-400 font-semibold"> scientific method</span> to human needs and behavior, 
                  with business goals in mind.
                </p>
              </div>

              {/* Flow Diagram */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Step 1: Observe */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-4 h-full rounded-xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 font-bold text-xs mb-2">
                          01
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-1.5">Observe</h3>
                      </div>
                      <div className="text-slate-400 text-xs leading-relaxed grow">
                        Observe users and systems to uncover unmet needs, pain points and behavioral patterns.
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Ask Questions */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-4 h-full rounded-xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-400 font-bold text-xs mb-2">
                          02
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-1.5">Question</h3>
                      </div>
                      <div className="text-slate-400 text-xs leading-relaxed grow">
                        Define a clear, focused problem or question that aligns user needs with business goals.
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Form Hypothesis */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-4 h-full rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 font-bold text-xs mb-2">
                          03
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-1.5">Hypothesis</h3>
                      </div>
                      <div className="text-slate-400 text-xs leading-relaxed grow">
                        Develop testable assumptions about how design solutions might address the identified problems.
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Experiment */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-4 h-full rounded-xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 font-bold text-xs mb-2">
                          04
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-1.5">Experiment</h3>
                      </div>
                      <div className="text-slate-400 text-xs leading-relaxed grow">
                        Create prototypes and test solutions with real users to validate or invalidate hypotheses.
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Analyze */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-4 h-full rounded-xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-400 font-bold text-xs mb-2">
                          05
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-1.5">Analyze</h3>
                      </div>
                      <div className="text-slate-400 text-xs leading-relaxed grow">
                        Examine data and feedback to understand what worked, what didn't, and why.
                      </div>
                    </div>
                  </div>

                  {/* Step 6: Draw Conclusions */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-4 h-full rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 font-bold text-xs mb-2">
                          06
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-1.5">Synthesize</h3>
                      </div>
                      <div className="text-slate-400 text-xs leading-relaxed grow">
                        Synthesize learnings and iterate on the solution, feeding insights back into the process.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Status */}
              {/* <div className="mt-8 pt-6 border-t border-green-400/30">
                <div className="text-center">
                  <div className="text-green-400 text-sm mb-2">
                    <span className="text-blue-400">$</span> PROCESS_STATUS
                  </div>
                  <div className="text-xs text-zinc-500 italic max-w-2xl mx-auto">
                    "This iterative cycle ensures that every design decision is backed by evidence, 
                    every assumption is tested, and every solution evolves based on real user feedback."
                  </div>
                  <div className="mt-4 text-xs text-green-400">
                    <span className="animate-pulse">█</span> <span className="text-zinc-500">System Status: RUNNING</span>
                  </div>
                </div>
              </div> */}
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

              {caseStudies.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] rounded-xl overflow-hidden"
                >
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col">
                    {/* Hero Image */}
                    <div className="h-64 md:h-80 relative overflow-hidden bg-slate-900/50">
                      {index === 0 ? (
                        <Image 
                          src="/god-flow.png" 
                          alt={study.title} 
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`absolute inset-0 ${study.preview.gradientClass} flex items-center justify-center`}>
                          <div className="text-center text-white">
                            <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">{study.preview.icon}</div>
                          </div>
                        </div>
                      )}
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      {index === 0 ? (
                        <>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                              B2B SaaS
                            </span>
                            <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                              Generative AI
                            </span>
                            <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-full">
                              Design Strategy
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                            AI-Powered Creative Content Generation
                          </h3>
                          <p className="text-slate-300 font-medium mb-3">
                            Turning Generic AI Outputs into Brand-Aligned Creative Assets
                          </p>
                          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            Designed a structured AI content generation system that transforms creative briefs into production-ready outputs. By adding strategic context layers, we turned generic AI outputs into brand-aligned, channel-optimized creative assets that teams actually trust.
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-slate-300 font-medium mb-3">
                            {study.subtitle}
                          </p>
                          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            {study.summary}
                          </p>
                        </>
                      )}
                      <div className="flex items-center text-indigo-400 text-sm font-medium">
                        <span>View case study</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

