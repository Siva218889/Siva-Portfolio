import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, Copy, Check, ExternalLink, BookOpen, Layers } from 'lucide-react';

interface ResearchSectionProps {
  onOpenPaperModal: () => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onOpenPaperModal }) => {
  const { publication } = PORTFOLIO_DATA;
  const [copiedBib, setCopiedBib] = useState(false);

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(publication.bibtex);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2000);
  };

  return (
    <section id="research" className="py-16 md:py-20 border-b border-[#232833]">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs font-semibold text-[#b4c5ff] tracking-wider uppercase">
            [01 // PEER-REVIEWED RESEARCH]
          </span>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Paper Overview Card (lg: 8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-colors flex flex-col justify-between">
            <div>
              {/* Top Meta Tags */}
              <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs mb-4 text-[#94a3b8]">
                <span className="px-2 py-0.5 rounded bg-[#1a1c1f] text-[#38bdf8] border border-[#232833] font-medium">
                  IEEE Conference Publication
                </span>
                <span className="text-[#475569]">/</span>
                <span className="text-[#e2e2e6]">{publication.conference}</span>
                <span className="text-[#475569]">/</span>
                <span className="text-[#64748b]">{publication.location}</span>
              </div>

              {/* Publication Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-[#f3f4f6] tracking-tight leading-snug mb-4">
                &ldquo;{publication.title}&rdquo;
              </h2>

              {/* Publication Abstract/Summary */}
              <p className="text-sm sm:text-[15px] text-[#94a3b8] leading-relaxed mb-6 font-normal">
                {publication.abstract}
              </p>
            </div>

            {/* Bottom Meta & Action Rules */}
            <div className="pt-6 border-t border-[#232833] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#64748b]">
              <div className="space-y-1">
                <div>
                  <span className="text-[#94a3b8]">Organized by:</span> {publication.organizer}
                </div>
                <div>
                  <span className="text-[#94a3b8]">Schedule:</span> {publication.schedule}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenPaperModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1a1c1f] hover:bg-[#282a2d] border border-[#232833] hover:border-[#3b4252] text-xs font-mono text-[#e2e2e6] transition-colors cursor-pointer"
                >
                  <BookOpen size={12} className="text-[#38bdf8]" />
                  <span>Abstract & Architecture</span>
                </button>

                <button
                  onClick={handleCopyBibtex}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#13161b] hover:bg-[#1a1e26] border border-[#232833] hover:border-[#3b4252] text-xs font-mono text-[#94a3b8] hover:text-[#e2e2e6] transition-colors cursor-pointer"
                  title="Copy BibTeX Citation"
                >
                  {copiedBib ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>BibTeX</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Indexing & Track Sidebar Card (lg: 4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-lg bg-[#111317] border border-[#232833] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header Label */}
              <div className="text-[10px] font-mono tracking-widest text-[#64748b] uppercase">
                RESEARCH INDEX
              </div>

              {/* Big IEEE Xplore Visual Identifier */}
              <div className="p-4 rounded bg-[#13161b] border border-[#232833] flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#64748b]">INDEXED REPOSITORY</div>
                  <div className="text-lg font-bold tracking-tight text-[#f3f4f6] font-mono mt-0.5">
                    IEEE <span className="text-[#38bdf8]">Xplore</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded bg-[#1a1c1f] border border-[#232833] flex items-center justify-center text-[#38bdf8]">
                  <Layers size={16} />
                </div>
              </div>

              {/* Conference Track */}
              <div className="text-xs font-mono space-y-1">
                <div className="text-[#64748b]">CONFERENCE TRACK</div>
                <div className="text-sm font-medium text-[#e2e2e6]">{publication.track}</div>
              </div>

            </div>

            {/* Status Footer */}
            <div className="mt-8 pt-4 border-t border-[#232833] font-mono text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="font-medium">Scheduled for Proceedings</span>
              </div>
              <div className="text-[#64748b] text-[10px] leading-tight">
                Publication identifier issued at INDIACom
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
