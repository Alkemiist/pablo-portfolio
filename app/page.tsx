import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f23] relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950/20 via-purple-950/10 to-cyan-950/20 pointer-events-none"></div>
      
      {/* Animated grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-40"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-h-screen flex items-center relative z-10 pt-16 pb-12">
        
        {/* Hero Section - All Above the Fold */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 tracking-wide">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                <span>Current Role: Founding Designer at ØPUS Intelligence</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                <span className="text-slate-50">I design and build</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  enterprise products
                </span>
                <br />
                <span className="text-slate-50">that people actually want to use.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                I'm a designer who codes, working at the intersection of craft and engineering. 
                Over the past two years, I've been deep in AI design—building experiences that make 
                complex intelligence feel intuitive and trustworthy. If you're building AI products, 
                need a thoughtful product designer, working on innovative projects, or looking to build 
                the right culture—I'm your guy. I move fast, collaborate closely, and ship products 
                where design and engineering speak the same language.
              </p>
            </div>

            {/* CTA Buttons & Status */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/case-studies"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-400 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 text-sm"
              >
                View Case Studies
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 font-medium hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 text-sm"
              >
                View Resume
              </Link>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-xs text-slate-300 font-medium">Available for opportunities</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="mailto:Pablo@ProgrammingPablo.com"
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-200 text-sm font-medium"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/juanpablovillarreal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-200 text-sm font-medium"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Alkemiist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-200 text-sm font-medium"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:flex lg:justify-end lg:items-center">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="/pablo.png"
                alt="Pablo Villarreal"
                width={400}
                height={500}
                className="w-full h-auto rounded-3xl object-contain shadow-2xl shadow-indigo-500/20"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
