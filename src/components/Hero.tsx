import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortraitCard } from './PortraitCard';
import { Mail, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#232833]">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (8 cols on lg) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col space-y-6 relative">
            
            {/* Top Micro-Badges */}
            <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#13161b] border border-[#232833] text-[#94a3b8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                <span className="font-semibold text-[#e2e2e6] tracking-wider uppercase">AIML GRADUATE</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#13161b] border border-[#232833] text-[#94a3b8]">
                <MapPin size={11} className="text-[#64748b]" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Architectural Name with Watermark Layer */}
            <div className="relative select-none">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#f3f4f6] leading-[1.08] relative z-10">
                Siva Bhaskar
              </h1>
              {/* Secondary Name Line "Kora" with small gap, equal font size, and slightly dark tone */}
              <div className="relative mt-1.5 sm:mt-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-light tracking-tight text-[#64748b] select-none block pointer-events-none">
                  Kora
                </span>
              </div>
            </div>

            {/* Core Mission Sub-headline */}
            <p className="text-lg sm:text-xl font-medium text-[#e2e2e6] leading-snug tracking-[-0.015em] max-w-2xl">
              {personal.headline}
            </p>

            {/* Bio paragraph */}
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-2xl font-normal">
              {personal.bio}
            </p>

            {/* Highlights Grid (as seen in screenshot) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-[#232833]/80">
              {/* Stat 1 */}
              <div className="p-3 rounded bg-[#13161b]/60 border border-[#232833] font-mono">
                <div className="flex items-baseline justify-between text-xs text-[#64748b]">
                  <span>PU 2026</span>
                  <span className="text-[10px] text-[#475569]">6</span>
                </div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-xs text-[#94a3b8]">CGPA:</span>
                  <span className="text-base font-semibold text-[#f3f4f6]">{personal.cgpa}</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-3 rounded bg-[#13161b]/60 border border-[#232833] font-mono">
                <div className="text-xs text-[#64748b]">
                  <span className="text-[#f59e0b] mr-1.5">●</span>
                  IEEE INDIACom '26
                </div>
                <div className="mt-1 text-base font-semibold text-[#f3f4f6]">
                  Author
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-3 rounded bg-[#13161b]/60 border border-[#232833] font-mono col-span-2 sm:col-span-1">
                <div className="text-xs text-[#64748b]">
                  AI &amp; ML Engineer, Data Analysis
                </div>
                <div className="mt-1 text-base font-semibold text-[#38bdf8]">
                  Roles
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#f3f4f6] hover:bg-white text-[#0c0e11] font-medium text-xs font-mono tracking-wide transition-all duration-150 cursor-pointer shadow-md hover:shadow-lg"
              >
                <Mail size={13} />
                <span>Get in touch</span>
              </button>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded bg-[#13161b] hover:bg-[#1a1e26] border border-[#232833] hover:border-[#3b4252] text-xs font-mono text-[#94a3b8] hover:text-[#f3f4f6] transition-all group"
              >
                <span>github</span>
                <ArrowUpRight size={12} className="text-[#64748b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded bg-[#13161b] hover:bg-[#1a1e26] border border-[#232833] hover:border-[#3b4252] text-xs font-mono text-[#94a3b8] hover:text-[#f3f4f6] transition-all group"
              >
                <span>linkedin</span>
                <ArrowUpRight size={12} className="text-[#64748b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column (4 cols on lg) - Architectural Portrait */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <PortraitCard onOpenResume={onOpenResume} />
          </div>

        </div>
      </div>
    </section>
  );
};
