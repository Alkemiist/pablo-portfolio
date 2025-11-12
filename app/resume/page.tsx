import Navigation from '../components/Navigation';
import { Linkedin, Github } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden font-mono">
      {/* Terminal scan line overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,.02)_50%,rgba(0,255,0,.04)_51%,transparent_51%)] bg-size-[100%_3px] opacity-60 pointer-events-none animate-[scan_15s_linear_infinite]"></div>
      
      {/* Subtle background noise/grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,.03)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-20"></div>
      
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <h1 className="text-4xl font-bold text-[#00ff41] mb-4 drop-shadow-[0_0_15px_rgba(0,255,65,0.6),0_0_30px_rgba(0,255,65,0.3)] tracking-wider">PABLO VILLARREAL</h1>
            <p className="text-md text-[#ffea00] mb-6 drop-shadow-[0_0_10px_rgba(255,234,0,0.5)] font-medium">Founding Product Designer & Engineer</p>
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
          <section className="mb-12 relative">
            {/* Glitchy scan line effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,.03)_50%,rgba(0,255,0,.05)_51%,transparent_51%)] bg-size-[100%_4px] opacity-80 pointer-events-none animate-[scan_20s_linear_infinite]"></div>
            
            <h2 className="text-2xl font-bold text-[#00ff41] mb-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)] animate-pulse">Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h3 className="text-lg font-semibold text-[#ffea00] mb-4 drop-shadow-[0_0_8px_rgba(255,234,0,0.4)]">Design</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    User Experience Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    User Interface Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    Design Systems
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    Prototyping
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    User Research
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    Figma, Sketch, Adobe
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#ffea00] mb-4 drop-shadow-[0_0_8px_rgba(255,234,0,0.4)]">Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    React, TypeScript
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    Next.js
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    HTML5, CSS3, JS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    Tailwind CSS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    Git, GitHub
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                    Responsive Design
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12 relative z-10">
            <h2 className="text-2xl font-bold text-[#00ff41] mb-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)] animate-pulse">Experience</h2>
            
            <div className="space-y-8">
              {/* Job 1 - ØPUS Intelligence */}
              <div className="border-l-4 border-[#00ff41] pl-6 bg-[#00ff41]/5 p-4 rounded-r-lg hover:bg-[#00ff41]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Founding Designer + Frontend Engineer</h3>
                  <span className="text-[#ffea00] font-medium">May 2023 - Present</span>
                </div>
                <p className="text-[#00ff41]/90 text-sm font-medium mb-3 uppercase tracking-wider">ØPUS Intelligence · Full-time</p>
                <ul className="space-y-2 text-[#00ff41]/70 list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Designed and built AI-driven products from zero to one — shaping the product vision as both designer and engineer</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Architected the entire design lifecycle: discovery, validation, systems thinking, and high-fidelity execution</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Built products using Next.js and Node.js, bringing designs to life in code with seamless vision-to-implementation alignment</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Spent two years designing directly for AI experiences, exploring how intelligence enhances human creativity</li>
                </ul>
              </div>

              {/* Job 2 - IPSY */}
              <div className="border-l-4 border-[#00ff41] pl-6 bg-[#00ff41]/5 p-4 rounded-r-lg hover:bg-[#00ff41]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Lead Product Designer</h3>
                  <span className="text-[#ffea00] font-medium">Aug 2021 - May 2023</span>
                </div>
                <p className="text-[#00ff41]/90 text-sm font-medium mb-3 uppercase tracking-wider">IPSY · Full-time</p>
                <ul className="space-y-2 text-[#00ff41]/70 list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Led design for accounts, subscriptions, and personalization for 4M+ members across IPSY and BoxyCharm</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Redesigned Refreshments brand from the ground up — balancing delight with clarity, improving the entire subscription flow</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Restructured the design process between PMs, UX, and engineering — increased efficiency 50%, fostered transparency and accountability</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Built and scaled a design system that unified brand and product experiences — empowering teams to move faster while maintaining precision</li>
                </ul>
              </div>

              {/* Job 3 - Solo Stove */}
              <div className="border-l-4 border-[#00ff41] pl-6 bg-[#00ff41]/5 p-4 rounded-r-lg hover:bg-[#00ff41]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Lead UX/UI Designer</h3>
                  <span className="text-[#ffea00] font-medium">Mar 2021 - Aug 2021</span>
                </div>
                <p className="text-[#00ff41]/90 text-sm font-medium mb-3 uppercase tracking-wider">Solo Stove · Contract</p>
                <ul className="space-y-2 text-[#00ff41]/70 list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Led the redesign of their core e-commerce experience for U.S. and Canadian markets</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Built a scalable, modular design system that enabled global expansion</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Established the company's first structured workflow between UX, Product, and Engineering</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Transitioned the org to Figma and embedded UX principles into product strategy — evolved them from a functional site into an emotional, high-performing product</li>
                </ul>
              </div>

              {/* Job 4 - Globe Life */}
              <div className="border-l-4 border-[#00ff41] pl-6 bg-[#00ff41]/5 p-4 rounded-r-lg hover:bg-[#00ff41]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Senior UX/UI Designer</h3>
                  <span className="text-[#ffea00] font-medium">Aug 2019 - Mar 2021</span>
                </div>
                <p className="text-[#00ff41]/90 text-sm font-medium mb-3 uppercase tracking-wider">Globe Life · Full-time</p>
                <ul className="space-y-2 text-[#00ff41]/70 list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Led one of the company's most ambitious initiatives: consolidating seven subsidiary brands into a single unified platform</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Developed a tailored process to coordinate across eight distinct teams — ensuring alignment on vision and execution</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Built a comprehensive design system that streamlined collaboration across hundreds of user flows and components</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Contributed to frontend development — ensuring every design decision was grounded in technical feasibility and performance</li>
                </ul>
              </div>

              {/* Job 5 - Masergy */}
              <div className="border-l-4 border-[#00ff41] pl-6 bg-[#00ff41]/5 p-4 rounded-r-lg hover:bg-[#00ff41]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">UX Designer</h3>
                  <span className="text-[#ffea00] font-medium">Aug 2016 - Aug 2019</span>
                </div>
                <p className="text-[#00ff41]/90 text-sm font-medium mb-3 uppercase tracking-wider">Masergy · Full-time</p>
                <ul className="space-y-2 text-[#00ff41]/70 list-none pl-0">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Shaped digital experiences across web, content, and multimedia — pushing the brand into new territory</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Redesigned how the company communicated complex technologies — making networking, cybersecurity, and AI accessible and human</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Built digital campaigns, directed video production, and produced the Artificial Intelligence podcast</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Connected storytelling with execution — ensuring every artifact reinforced the same vision: innovation with purpose</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12 relative z-10">
            <h2 className="text-2xl font-bold text-[#00ff41] mb-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Prompt Engineering</h3>
                <p className="text-[#00ff41]/70 text-sm">Codecademy</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">JavaScript</h3>
                <p className="text-[#00ff41]/70 text-sm">Codecademy</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">TypeScript</h3>
                <p className="text-[#00ff41]/70 text-sm">Codecademy</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Accessibility Best Practices</h3>
                <p className="text-[#00ff41]/70 text-sm">Bureau of Internet Accessibility</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Mobility Accessibility Best Practices</h3>
                <p className="text-[#00ff41]/70 text-sm">Bureau of Internet Accessibility</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">NVDA Training</h3>
                <p className="text-[#00ff41]/70 text-sm">Bureau of Internet Accessibility</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">PDF Accessibility</h3>
                <p className="text-[#00ff41]/70 text-sm">Bureau of Internet Accessibility</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Backend Engineer</h3>
                <p className="text-[#00ff41]/70 text-sm">Codecademy</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Next.js</h3>
                <p className="text-[#00ff41]/70 text-sm">Codecademy</p>
              </div>
              <div className="bg-[#00ff41]/5 p-4 rounded-lg border border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold text-[#00ff41] mb-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Advanced Python</h3>
                <p className="text-[#00ff41]/70 text-sm">Codecademy</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="relative z-10">
            <h2 className="text-2xl font-bold text-[#00ff41] mb-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">Languages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#00ff41]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#00ff41]/30 group-hover:border-[#00ff41] group-hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300">
                  <span className="text-[#00ff41] font-bold text-lg drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">EN</span>
                </div>
                <p className="font-medium text-[#00ff41]">English</p>
                <p className="text-[#00ff41]/70 text-sm">Native</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#00ff41]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#00ff41]/30 group-hover:border-[#00ff41] group-hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300">
                  <span className="text-[#00ff41] font-bold text-lg drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">ES</span>
                </div>
                <p className="font-medium text-[#00ff41]">Spanish</p>
                <p className="text-[#00ff41]/70 text-sm">Fluent</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#00ff41]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#00ff41]/30 group-hover:border-[#00ff41] group-hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300">
                  <span className="text-[#00ff41] font-bold text-lg drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">FR</span>
                </div>
                <p className="font-medium text-[#00ff41]">French</p>
                <p className="text-[#00ff41]/70 text-sm">Conversational</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

