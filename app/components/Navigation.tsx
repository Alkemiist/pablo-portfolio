'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on a case study detail page (not the listing page)
  const isCaseStudyDetail = pathname?.startsWith('/case-studies/') && pathname !== '/case-studies';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0f0f23]/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Logo or Back Button */}
          {isCaseStudyDetail ? (
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-slate-100 hover:bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              <span className="hidden sm:inline">Back to Case Studies</span>
              <span className="sm:hidden">Back</span>
            </Link>
          ) : (
            <Link 
              href="/" 
              className="text-lg font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-indigo-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-300"
            >
              Pablo Villarreal
            </Link>
          )}

          {/* Right side: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                pathname === '/' 
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/resume" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === '/resume' 
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Resume
            </Link>
            <Link 
              href="/case-studies" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === '/case-studies' || pathname?.startsWith('/case-studies')
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Case Studies
            </Link>
          </div>

          {/* Mobile menu button */}
          {!isCaseStudyDetail && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-2 space-y-1">
            <Link
              href="/"
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                pathname === '/' 
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/resume"
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                pathname === '/resume' 
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/case-studies"
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                pathname === '/case-studies' || pathname?.startsWith('/case-studies')
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}