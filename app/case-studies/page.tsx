import Link from 'next/link';
import Navigation from '../components/Navigation';
import { caseStudies } from './data';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black">
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
            <div className="bg-black border border-green-400 rounded-lg p-8 font-mono">
              <div className="flex items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-green-400 text-sm">PROCESS_FLOW.exe</span>
              </div>
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-green-400 mb-4">Design Process Framework</h2>
                <p className="text-zinc-400 text-sm max-w-3xl mx-auto">
                  One of my favorite ways to frame the product design process: as an application of the 
                  <span className="text-green-400 font-semibold"> scientific method</span> to human needs and behavior, 
                  with business goals in mind.
                </p>
              </div>

              {/* Flow Diagram */}
              <div className="relative">
                {/* Terminal Flow Lines */}
                <div className="hidden lg:block absolute inset-0">
                  {/* Horizontal connections */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-green-400/30 transform -translate-y-1/2"></div>
                  {/* Vertical connections */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-px bg-green-400/30 transform -translate-x-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-2/3 w-px bg-green-400/30 transform -translate-x-1/2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {/* Step 1: Observe */}
                  <div className="group h-full">
                    <div className="bg-black border border-green-400 p-6 h-full hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 flex flex-col">
                      <div className="mb-4">
                        <div className="text-green-400 text-sm mb-2 font-bold">
                          <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-bold">[01]</span> <span className="drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] font-bold">OBSERVE.exe</span>
                        </div>
                        <div className="text-xs text-zinc-500 mb-3">
                          <span className="text-green-400">&gt;</span> Scanning user behavior patterns...
                        </div>
                      </div>
                      <div className="text-zinc-300 text-sm leading-relaxed grow">
                        Observe users and systems to uncover unmet needs, pain points and behavioral patterns.
                      </div>
                      <div className="mt-3 text-xs text-green-400 flex items-center gap-2">
                        <span className="animate-pulse">█</span>
                        <span className="text-zinc-500">Status: ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Ask Questions */}
                  <div className="group h-full">
                    <div className="bg-black border border-green-400 p-6 h-full hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 flex flex-col">
                      <div className="mb-4">
                        <div className="text-green-400 text-sm mb-2 font-bold">
                          <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-bold">[02]</span> <span className="drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] font-bold">QUESTION.exe</span>
                        </div>
                        <div className="text-xs text-zinc-500 mb-3">
                          <span className="text-green-400">&gt;</span> Defining problem parameters...
                        </div>
                      </div>
                      <div className="text-zinc-300 text-sm leading-relaxed grow">
                        Define a clear, focused problem or question that aligns user needs with business goals.
                      </div>
                      <div className="mt-3 text-xs text-green-400 flex items-center gap-2">
                        <span className="animate-pulse">█</span>
                        <span className="text-zinc-500">Status: ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Form Hypothesis */}
                  <div className="group h-full">
                    <div className="bg-black border border-green-400 p-6 h-full hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 flex flex-col">
                      <div className="mb-4">
                        <div className="text-green-400 text-sm mb-2 font-bold">
                          <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-bold">[03]</span> <span className="drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] font-bold">HYPOTHESIS.exe</span>
                        </div>
                        <div className="text-xs text-zinc-500 mb-3">
                          <span className="text-green-400">&gt;</span> Generating testable assumptions...
                        </div>
                      </div>
                      <div className="text-zinc-300 text-sm leading-relaxed grow">
                        Develop testable assumptions about how design solutions might address the identified problems.
                      </div>
                      <div className="mt-3 text-xs text-green-400 flex items-center gap-2">
                        <span className="animate-pulse">█</span>
                        <span className="text-zinc-500">Status: ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Experiment */}
                  <div className="group h-full">
                    <div className="bg-black border border-green-400 p-6 h-full hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 flex flex-col">
                      <div className="mb-4">
                        <div className="text-green-400 text-sm mb-2 font-bold">
                          <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-bold">[04]</span> <span className="drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] font-bold">EXPERIMENT.exe</span>
                        </div>
                        <div className="text-xs text-zinc-500 mb-3">
                          <span className="text-green-400">&gt;</span> Running user validation tests...
                        </div>
                      </div>
                      <div className="text-zinc-300 text-sm leading-relaxed grow">
                        Create prototypes and test solutions with real users to validate or invalidate hypotheses.
                      </div>
                      <div className="mt-3 text-xs text-green-400 flex items-center gap-2">
                        <span className="animate-pulse">█</span>
                        <span className="text-zinc-500">Status: ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Analyze */}
                  <div className="group h-full">
                    <div className="bg-black border border-green-400 p-6 h-full hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 flex flex-col">
                      <div className="mb-4">
                        <div className="text-green-400 text-sm mb-2 font-bold">
                          <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-bold">[05]</span> <span className="drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] font-bold">ANALYZE.exe</span>
                        </div>
                        <div className="text-xs text-zinc-500 mb-3">
                          <span className="text-green-400">&gt;</span> Processing feedback data...
                        </div>
                      </div>
                      <div className="text-zinc-300 text-sm leading-relaxed grow">
                        Examine data and feedback to understand what worked, what didn't, and why.
                      </div>
                      <div className="mt-3 text-xs text-green-400 flex items-center gap-2">
                        <span className="animate-pulse">█</span>
                        <span className="text-zinc-500">Status: ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 6: Draw Conclusions */}
                  <div className="group h-full">
                    <div className="bg-black border border-green-400 p-6 h-full hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 flex flex-col">
                      <div className="mb-4">
                        <div className="text-green-400 text-sm mb-2 font-bold">
                          <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-bold">[06]</span> <span className="drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] font-bold">SYNTHESIS.exe</span>
                        </div>
                        <div className="text-xs text-zinc-500 mb-3">
                          <span className="text-green-400">&gt;</span> Generating insights...
                        </div>
                      </div>
                      <div className="text-zinc-300 text-sm leading-relaxed grow">
                        Synthesize learnings and iterate on the solution, feeding insights back into the process.
                      </div>
                      <div className="mt-3 text-xs text-green-400 flex items-center gap-2">
                        <span className="animate-pulse">█</span>
                        <span className="text-zinc-500">Status: ACTIVE</span>
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
              <h2 className="text-3xl font-bold text-green-400 mb-4 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse">Recent Thought Experiments</h2>
              <p className="text-base text-green-500 max-w-3xl mx-auto">
                Deep dives into design challenges, user research, and innovative solutions. 
                Each experiment tells a story of discovery and iteration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-400 focus-visible:ring-offset-black"
                >
                  <div className="bg-black border border-green-400 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300">
                    <div className="flex items-center p-4 border-b border-green-400/30">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-4 text-green-400 text-sm font-mono">{study.preview.filename}</span>
                    </div>

                    <div className={`h-48 ${study.preview.gradientClass} flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">{study.preview.icon}</div>
                        <div className="text-sm font-mono">[IMAGE_PLACEHOLDER]</div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-zinc-50 mb-3 group-hover:text-green-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {study.subtitle}
                      </p>
                      <div className="flex items-center text-green-400 text-sm font-mono">
                        <span className="animate-pulse">█</span>
                        <span className="ml-2">{study.preview.status}</span>
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

