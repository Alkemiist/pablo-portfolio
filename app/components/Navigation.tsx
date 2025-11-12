'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono bg-[#0a0a0a]/30 backdrop-blur-lg border-b border-[#00ff41]/30 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-[#00ff41] hover:text-[#ffea00] transition-colors duration-200 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]"
          >
            PABLO VILLARREAL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`transition-colors duration-200 font-medium relative group ${
                pathname === '/' 
                  ? 'text-[#00ff41] drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]' 
                  : 'text-[#00ff41]/70 hover:text-[#00ff41]'
              }`}
            >
              HOME
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00ff41] transition-all duration-200 shadow-[0_0_8px_rgba(0,255,65,0.6)] ${
                pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/resume" 
              className={`transition-colors duration-200 font-medium relative group ${
                pathname === '/resume' 
                  ? 'text-[#00ff41] drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]' 
                  : 'text-[#00ff41]/70 hover:text-[#00ff41]'
              }`}
            >
              RESUME
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00ff41] transition-all duration-200 shadow-[0_0_8px_rgba(0,255,65,0.6)] ${
                pathname === '/resume' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/case-studies" 
              className={`transition-colors duration-200 font-medium relative group ${
                pathname === '/case-studies' 
                  ? 'text-[#00ff41] drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]' 
                  : 'text-[#00ff41]/70 hover:text-[#00ff41]'
              }`}
            >
              CASE STUDIES
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00ff41] transition-all duration-200 shadow-[0_0_8px_rgba(0,255,65,0.6)] ${
                pathname === '/case-studies' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#00ff41]/80 hover:text-[#00ff41] hover:bg-[#00ff41]/10 transition-colors duration-200"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-[#00ff41]/30 bg-[#0a0a0a]/30 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  pathname === '/' 
                    ? 'text-[#00ff41] bg-[#00ff41]/10 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]' 
                    : 'text-[#00ff41]/70 hover:text-[#00ff41] hover:bg-[#00ff41]/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/resume"
                className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  pathname === '/resume' 
                    ? 'text-[#00ff41] bg-[#00ff41]/10 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]' 
                    : 'text-[#00ff41]/70 hover:text-[#00ff41] hover:bg-[#00ff41]/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                RESUME
              </Link>
              <Link
                href="/case-studies"
                className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  pathname === '/case-studies' 
                    ? 'text-[#00ff41] bg-[#00ff41]/10 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]' 
                    : 'text-[#00ff41]/70 hover:text-[#00ff41] hover:bg-[#00ff41]/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                CASE STUDIES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}