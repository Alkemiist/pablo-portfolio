export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden font-mono pt-16">
      {/* Terminal scan line overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,.02)_50%,rgba(0,255,0,.04)_51%,transparent_51%)] bg-size-[100%_3px] opacity-60 pointer-events-none animate-[scan_15s_linear_infinite]"></div>
      
      {/* Subtle background noise/grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,.03)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-20"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 relative z-10">
        {/* Hero Section: Video + Summary Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Video Section - Takes up ~60% (3 columns out of 5) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Video Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-[#00ff41]/30 shadow-[0_0_30px_rgba(0,255,65,0.3)] hover:shadow-[0_0_50px_rgba(0,255,65,0.5)] transition-all duration-300">
              {/* Placeholder for your video */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#00ff41]/10 flex items-center justify-center border-2 border-[#00ff41]/30 shadow-[0_0_20px_rgba(0,255,65,0.4)]">
                    <svg 
                      className="w-8 h-8 text-[#00ff41] ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-[#00ff41]/70 text-sm">Video Coming Soon</p>
                </div>
              </div>
              
              {/* Future: Replace with your actual video */}
              {/* 
              <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
              </video>
              */}
            </div>

            {/* Video Caption */}
            <p className="text-sm text-[#00ff41]/80 text-center lg:text-left">
              Get to know me in 60 seconds
            </p>
          </div>

          {/* Summary Section - Takes up ~40% (2 columns out of 5) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-[#00ff41] tracking-wider leading-tight mb-4 drop-shadow-[0_0_15px_rgba(0,255,65,0.6),0_0_30px_rgba(0,255,65,0.3)] uppercase">
                Hello, I'm Pablo
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00ff41] to-[#ffea00] rounded-full shadow-[0_0_10px_rgba(0,255,65,0.6)]"></div>
            </div>

            <div className="space-y-4 text-[#00ff41]/90 text-base leading-relaxed">
              <p>
              I’m a designer who builds — I move fast, work hands-on, and turn messy ideas into products that feel simple and human. 
              As the Founding Designer at ØPUS, I’m designing and coding AI-driven experiences from scratch, making advanced tech feel 
              intuitive and useful. 
              <br />
              <br />
              I love working where design and engineering overlap, collaborating closely, shipping often, and 
              constantly leveling up the product and the team.</p>
            </div>

            {/* Call-to-action or Additional Info */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-3 text-[#00ff41]/80 text-sm">
                <div className="w-2 h-2 rounded-full bg-[#ffea00] shadow-[0_0_8px_rgba(255,234,0,0.6)] animate-pulse"></div>
                <span>Currently building at ØPUS Intelligence</span>
              </div>
              <div className="flex items-center space-x-3 text-[#00ff41]/80 text-sm">
                <div className="w-2 h-2 rounded-full bg-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.6)]"></div>
                <span>Available for freelance projects</span>
              </div>
            </div>

            {/* Social Links or Contact Info */}
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="mailto:Pablo@ProgrammingPablo.com"
                className="text-[#00ff41]/80 hover:text-[#00ff41] transition-colors duration-200"
              >
                Email
              </a>
              <span className="text-[#00ff41]/30">•</span>
              <a 
                href="https://linkedin.com/in/juanpablovillarreal/"
                className="text-[#00ff41]/80 hover:text-[#00ff41] transition-colors duration-200"
              >
                LinkedIn
              </a>
              <span className="text-[#00ff41]/30">•</span>
              <a 
                href="https://github.com/Alkemiist"
                className="text-[#00ff41]/80 hover:text-[#00ff41] transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
