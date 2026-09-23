import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#232833] bg-[#0c0e11] pt-16 pb-12 text-[#94a3b8]">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        
        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#232833]/70">
          
          {/* Column 1: Identity & Bio (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-xs font-semibold text-[#b4c5ff]">{personal.handle}</span>
              <span className="text-sm font-semibold text-[#f3f4f6]">Siva Bhaskar Kora</span>
            </div>
            
            <p className="text-xs text-[#94a3b8] leading-relaxed max-w-md">
              Technical researcher & AI/ML systems engineer bridging deep learning models, mathematical clarity, and purposeful software architecture.
            </p>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748b] pt-1">
              <MapPin size={11} />
              <span>Presidency University, Bangalore / Kakinada</span>
            </div>
          </div>

          {/* Column 2: Direct Coordinates (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
              DIRECT & COORDINATE
            </div>
            <div className="space-y-1 font-mono text-xs">
              <div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-[#e2e2e6] hover:text-[#38bdf8] transition-colors"
                >
                  {personal.email}
                </a>
              </div>
              <div className="text-[#94a3b8]">
                {personal.phone}
              </div>
            </div>
          </div>

          {/* Column 3: Profiles (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
              PROFILES
            </div>
            <div className="space-y-1.5 font-mono text-xs">
              <div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#e2e2e6] hover:text-[#38bdf8] transition-colors group"
                >
                  <span>{personal.githubDisplay}</span>
                  <ArrowUpRight size={11} className="text-[#64748b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              <div>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#e2e2e6] hover:text-[#38bdf8] transition-colors group"
                >
                  <span>{personal.linkedinDisplay}</span>
                  <ArrowUpRight size={11} className="text-[#64748b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748b]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Siva Bhaskar Kora</span>
            <span>/</span>
            <span>Built with strict architectural minimalism</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#94a3b8] hover:text-[#f3f4f6] transition-colors cursor-pointer group"
          >
            <span>back to top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
