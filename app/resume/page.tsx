import Navigation from '../components/Navigation';
import { Linkedin, Github } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#0f0f23] relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950/20 via-purple-950/10 to-cyan-950/20 pointer-events-none"></div>
      
      {/* Animated grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-40"></div>
      
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-50 mb-4 tracking-tight">Pablo Villarreal</h1>
            <p className="text-lg text-slate-300 mb-6 font-medium">Staff Product Designer & Engineer</p>
            {/* <div className="flex flex-wrap justify-center gap-4 text-[#00ff41]/80">
              <span className="hover:text-[#00ff41] transition-colors">📧 Pablo@ProgrammingPablo.com</span>
              <span className="hover:text-[#00ff41] transition-colors">📱 (469) 475-5508</span>
              <span className="flex items-center gap-1 hover:text-[#00ff41] transition-colors"><Linkedin className="w-4 h-4" /> juanpablovillarreal</span>
              <span className="flex items-center gap-1 hover:text-[#00ff41] transition-colors"><Github className="w-4 h-4" /> Alkemiist</span>
            </div> */}
          </div>

          {/* Download Button */}
          {/* <div className="text-center mb-12 relative z-10">
            <button className="bg-[#00ff41]/20 text-[#00ff41] border-2 border-[#00ff41] px-6 py-3 rounded-lg font-semibold hover:bg-[#00ff41]/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.5)] hover:shadow-[0_0_25px_rgba(0,255,65,0.8)] uppercase tracking-wider">
              Download PDF Resume
            </button>
          </div> */}

          {/* Professional Summary */}
          {/* <section className="mb-12 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-[#00ff41] mb-4 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)] animate-pulse">Professional Summary</h2>
            <p className="text-[#00ff41]/90 leading-relaxed font-mono text-sm">
            I'm a designer who builds — someone who loves translating complex ideas into experiences that feel effortless, human, and a little bit magical. Over the past several years, I've worked across startups and established brands, leading design at the intersection of creativity, systems thinking, and engineering.

            Today, as Founding Designer and Frontend Engineer at ØPUS Intelligence, I'm shaping the future of AI-driven products from the ground up — designing, prototyping, and coding the experiences that define how people interact with intelligence. My work blends curiosity and craft: designing from first principles, testing fast, and using AI to reinforce decision-making, not replace it. I believe great products emerge from tight collaboration, shared learning, and a willingness to challenge assumptions.

            Before ØPUS, I helped lead design at IPSY, Solo Stove, and Globe Life, where I scaled design systems, streamlined cross-functional processes, and drove the alignment between brand storytelling, user experience, and business outcomes. Whether redesigning a global e-commerce platform or unifying multiple brands under one digital ecosystem, I've learned that great design isn't just about pixels — it's about people, process, and momentum.

            <p>I love working in that middle space where design meets engineering, creativity meets systems, and ambition meets execution. I'm obsessed with progress — both personal and collective — and I believe the best teams are the ones that learn together, build fast, and never lose sight of the human on the other side of the screen.</p>
            </p>
          </section> */}

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-4">Design</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    User Experience Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    User Interface Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Design Systems
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Prototyping
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    User Research
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Information Architecture
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Visual Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Accessibility
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Figma, Sketch, Adobe
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-4">Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    React, TypeScript
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Next.js
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    HTML5, CSS3, JS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Tailwind CSS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Node.js
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    API Integration
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Component Libraries
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Git, GitHub
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Responsive Design
                  </span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-indigo-400 mb-4">AI</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Prompt Engineering
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    AI Product Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    LLM Integration
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Human-AI Interaction Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    AI-assisted Workflows
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    AI Prototyping & Testing
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    RAG Systems
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Conversational AI
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    Vector Databases
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Experience</h2>
            
            <div className="space-y-6">
              {/* Job 1 - ØPUS Intelligence */}
              <div className="border-l-4 border-indigo-500 pl-6 bg-slate-800/30 backdrop-blur-sm border-r border-t border-b border-slate-700/50 rounded-r-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-50">Founding Designer + Frontend Engineer</h3>
                  <span className="text-indigo-400 font-medium text-sm">May 2023 - Present</span>
                </div>
                <p className="text-indigo-400 text-sm font-medium mb-3">ØPUS Intelligence · Full-time</p>
                <ul className="space-y-2 text-slate-300 text-sm list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Designed and built AI-driven products from zero to one — shaping the product vision as both designer and engineer</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Architected the entire design lifecycle: discovery, validation, systems thinking, and high-fidelity execution</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Built products using Next.js and Node.js, bringing designs to life in code with seamless vision-to-implementation alignment</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Spent two years designing directly for AI experiences, exploring how intelligence enhances human creativity</li>
                </ul>
              </div>

              {/* Job 2 - IPSY */}
              <div className="border-l-4 border-indigo-500 pl-6 bg-slate-800/30 backdrop-blur-sm border-r border-t border-b border-slate-700/50 rounded-r-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-50">Lead Product Designer</h3>
                  <span className="text-indigo-400 font-medium text-sm">Aug 2021 - May 2023</span>
                </div>
                <p className="text-indigo-400 text-sm font-medium mb-3">IPSY · Full-time</p>
                <ul className="space-y-2 text-slate-300 text-sm list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Led design for accounts, subscriptions, and personalization for 4M+ members across IPSY and BoxyCharm</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Redesigned Refreshments brand from the ground up — balancing delight with clarity, improving the entire subscription flow</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Restructured the design process between PMs, UX, and engineering — increased efficiency 50%, fostered transparency and accountability</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Built and scaled a design system that unified brand and product experiences — empowering teams to move faster while maintaining precision</li>
                </ul>
              </div>

              {/* Job 3 - Solo Stove */}
              <div className="border-l-4 border-indigo-500 pl-6 bg-slate-800/30 backdrop-blur-sm border-r border-t border-b border-slate-700/50 rounded-r-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-50">Lead UX/UI Designer</h3>
                  <span className="text-indigo-400 font-medium text-sm">Mar 2021 - Aug 2021</span>
                </div>
                <p className="text-indigo-400 text-sm font-medium mb-3">Solo Stove · Contract</p>
                <ul className="space-y-2 text-slate-300 text-sm list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Led the redesign of their core e-commerce experience for U.S. and Canadian markets</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Built a scalable, modular design system that enabled global expansion</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Established the company's first structured workflow between UX, Product, and Engineering</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Transitioned the org to Figma and embedded UX principles into product strategy — evolved them from a functional site into an emotional, high-performing product</li>
                </ul>
              </div>

              {/* Job 4 - Tesla */}
              <div className="border-l-4 border-indigo-500 pl-6 bg-slate-800/30 backdrop-blur-sm border-r border-t border-b border-slate-700/50 rounded-r-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-50">Senior Product Designer</h3>
                  <span className="text-indigo-400 font-medium text-sm">Mar 2020 - Mar 2021</span>
                </div>
                <p className="text-indigo-400 text-sm font-medium mb-3">Tesla · Contract</p>
                <ul className="space-y-2 text-slate-300 text-sm list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Designed core user experiences for the Tesla mobile app — focusing on vehicle control, charging, and ownership features that connect millions of owners to their vehicles</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Led design initiatives for tesla.com, creating seamless pathways from discovery to purchase — balancing technical complexity with intuitive user flows</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Collaborated with engineering teams to ensure design fidelity across web and mobile platforms — maintaining consistency while optimizing for each platform's unique capabilities</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Applied systems thinking to complex product ecosystems — designing experiences that scale across multiple touchpoints while preserving Tesla's brand identity</li>
                </ul>
              </div>

              {/* Job 5 - Globe Life */}
              <div className="border-l-4 border-indigo-500 pl-6 bg-slate-800/30 backdrop-blur-sm border-r border-t border-b border-slate-700/50 rounded-r-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-50">Senior UX/UI Designer</h3>
                  <span className="text-indigo-400 font-medium text-sm">Aug 2019 - Mar 2021</span>
                </div>
                <p className="text-indigo-400 text-sm font-medium mb-3">Globe Life · Full-time</p>
                <ul className="space-y-2 text-slate-300 text-sm list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Led one of the company's most ambitious initiatives: consolidating seven subsidiary brands into a single unified platform</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Developed a tailored process to coordinate across eight distinct teams — ensuring alignment on vision and execution</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Built a comprehensive design system that streamlined collaboration across hundreds of user flows and components</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Contributed to frontend development — ensuring every design decision was grounded in technical feasibility and performance</li>
                </ul>
              </div>

              {/* Job 6 - Masergy */}
              <div className="border-l-4 border-indigo-500 pl-6 bg-slate-800/30 backdrop-blur-sm border-r border-t border-b border-slate-700/50 rounded-r-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-50">UX Designer</h3>
                  <span className="text-indigo-400 font-medium text-sm">Aug 2016 - Aug 2019</span>
                </div>
                <p className="text-indigo-400 text-sm font-medium mb-3">Masergy · Full-time</p>
                <ul className="space-y-2 text-slate-300 text-sm list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Shaped digital experiences across web, content, and multimedia — pushing the brand into new territory</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Redesigned how the company communicated complex technologies — making networking, cybersecurity, and AI accessible and human</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Built digital campaigns, directed video production, and produced the Artificial Intelligence podcast</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400">Connected storytelling with execution — ensuring every artifact reinforced the same vision: innovation with purpose</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">Prompt Engineering</h3>
                <p className="text-slate-400 text-sm">Codecademy</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">JavaScript</h3>
                <p className="text-slate-400 text-sm">Codecademy</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">TypeScript</h3>
                <p className="text-slate-400 text-sm">Codecademy</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">Accessibility Best Practices</h3>
                <p className="text-slate-400 text-sm">Bureau of Internet Accessibility</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">Mobility Accessibility Best Practices</h3>
                <p className="text-slate-400 text-sm">Bureau of Internet Accessibility</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">NVDA Training</h3>
                <p className="text-slate-400 text-sm">Bureau of Internet Accessibility</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">PDF Accessibility</h3>
                <p className="text-slate-400 text-sm">Bureau of Internet Accessibility</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">Backend Engineer</h3>
                <p className="text-slate-400 text-sm">Codecademy</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">Next.js</h3>
                <p className="text-slate-400 text-sm">Codecademy</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="font-semibold text-slate-50 mb-1">Advanced Python</h3>
                <p className="text-slate-400 text-sm">Codecademy</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold text-slate-50 mb-6">Languages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-slate-800/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 border border-slate-700/50 group-hover:border-indigo-500/50 group-hover:bg-slate-800/50 transition-all duration-300">
                  <span className="text-indigo-400 font-bold text-lg">EN</span>
                </div>
                <p className="font-medium text-slate-50">English</p>
                <p className="text-slate-400 text-sm">Native</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-slate-800/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 border border-slate-700/50 group-hover:border-indigo-500/50 group-hover:bg-slate-800/50 transition-all duration-300">
                  <span className="text-indigo-400 font-bold text-lg">ES</span>
                </div>
                <p className="font-medium text-slate-50">Spanish</p>
                <p className="text-slate-400 text-sm">Fluent</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-slate-800/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 border border-slate-700/50 group-hover:border-indigo-500/50 group-hover:bg-slate-800/50 transition-all duration-300">
                  <span className="text-indigo-400 font-bold text-lg">FR</span>
                </div>
                <p className="font-medium text-slate-50">French</p>
                <p className="text-slate-400 text-sm">Conversational</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

