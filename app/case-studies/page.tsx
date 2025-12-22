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
          <div className="mb-20">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-400 mb-6">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Design Process Framework</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Scientific Method Applied to Design
                </h2>
                <p className="text-slate-400 text-base max-w-3xl mx-auto leading-relaxed">
                  One of my favorite ways to frame the product design process: as an application of the 
                  <span className="text-indigo-400 font-semibold"> scientific method</span> to human needs and behavior, 
                  with business goals in mind.
                </p>
              </div>

              {/* Flow Diagram */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Step 1: Observe */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-6 h-full rounded-xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 font-bold text-sm mb-3">
                          01
                        </div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">Observe</h3>
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed grow">
                        Observe users and systems to uncover unmet needs, pain points and behavioral patterns.
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Ask Questions */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-6 h-full rounded-xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-400 font-bold text-sm mb-3">
                          02
                        </div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">Question</h3>
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed grow">
                        Define a clear, focused problem or question that aligns user needs with business goals.
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Form Hypothesis */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-6 h-full rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 font-bold text-sm mb-3">
                          03
                        </div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">Hypothesis</h3>
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed grow">
                        Develop testable assumptions about how design solutions might address the identified problems.
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Experiment */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-6 h-full rounded-xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 font-bold text-sm mb-3">
                          04
                        </div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">Experiment</h3>
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed grow">
                        Create prototypes and test solutions with real users to validate or invalidate hypotheses.
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Analyze */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-6 h-full rounded-xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-400 font-bold text-sm mb-3">
                          05
                        </div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">Analyze</h3>
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed grow">
                        Examine data and feedback to understand what worked, what didn't, and why.
                      </div>
                    </div>
                  </div>

                  {/* Step 6: Draw Conclusions */}
                  <div className="group h-full">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-6 h-full rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 font-bold text-sm mb-3">
                          06
                        </div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">Synthesize</h3>
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed grow">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] rounded-xl overflow-hidden"
                >
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col">
                    <div className={`h-48 ${index === 0 ? 'relative' : study.preview.gradientClass} flex items-center justify-center overflow-hidden`}>
                      {index === 0 ? (
                        <Image 
                          src="/god-flow.png" 
                          alt={study.title} 
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="text-center text-white">
                          <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{study.preview.icon}</div>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                        {index === 0 ? 'AI-Powered Creative Content Generation' : study.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                        {study.subtitle}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

