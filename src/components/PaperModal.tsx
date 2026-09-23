import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Copy, Check, Layers, ExternalLink, Network, CheckCircle } from 'lucide-react';

interface PaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaperModal: React.FC<PaperModalProps> = ({ isOpen, onClose }) => {
  const [copiedBib, setCopiedBib] = useState(false);
  const { publication } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(publication.bibtex);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#111317] border border-[#232833] rounded-lg shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#232833] bg-[#13161b]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
            <span className="font-mono text-xs font-semibold text-[#f3f4f6]">
              RESEARCH_PAPER_ARCHIVE // INDIACOM_2026
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[#1a1c1f] text-[#64748b] hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-[#94a3b8]">
          
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#94a3b8]">
            <span className="px-2 py-0.5 rounded bg-[#1a1c1f] text-[#38bdf8] border border-[#232833]">
              Oral Presentation
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1a1c1f] text-[#e2e2e6] border border-[#232833]">
              INDIACom 2026
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1a1c1f] text-[#f59e0b] border border-[#232833]">
              IEEE Xplore Scheduled
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-[#f3f4f6] tracking-tight leading-snug">
            &ldquo;{publication.title}&rdquo;
          </h2>

          <div className="font-mono text-xs text-[#64748b] space-y-1">
            <div><strong className="text-[#94a3b8]">Primary Author:</strong> Siva Bhaskar Kora</div>
            <div><strong className="text-[#94a3b8]">Conference:</strong> 13th International Conference on Computing for Sustainable Global Development</div>
            <div><strong className="text-[#94a3b8]">Organizer:</strong> Bharati Vidyapeeth’s Institute of Computer Applications and Management (BVICAM), New Delhi</div>
            <div><strong className="text-[#94a3b8]">Technical Sponsor:</strong> IEEE Delhi Section</div>
            <div><strong className="text-[#94a3b8]">Track:</strong> Artificial Intelligence & Big Data</div>
          </div>

          {/* Abstract */}
          <div className="p-4 rounded-lg bg-[#0c0e11] border border-[#232833] space-y-2">
            <div className="text-xs font-mono uppercase text-[#38bdf8] font-semibold">
              Research Abstract
            </div>
            <p className="text-xs leading-relaxed text-[#94a3b8]">
              {publication.abstract}
            </p>
          </div>

          {/* Verification Pipeline Architecture Diagram */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#f3f4f6] font-semibold">
              <Network size={14} className="text-[#38bdf8]" />
              <span>Algorithmic Verification Pipeline Architecture</span>
            </div>

            <div className="p-4 rounded-lg bg-[#0c0e11] border border-[#232833] space-y-3 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-[11px]">
                <div className="p-2.5 rounded bg-[#13161b] border border-[#232833]">
                  <div className="text-[#38bdf8] font-bold">STAGE 01</div>
                  <div className="text-white mt-1">Multi-Source Ingestion</div>
                  <div className="text-[#64748b] text-[10px] mt-1">Grievances, Tweets & Portal Feeds</div>
                </div>

                <div className="p-2.5 rounded bg-[#13161b] border border-[#232833]">
                  <div className="text-[#38bdf8] font-bold">STAGE 02</div>
                  <div className="text-white mt-1">Hybrid NLP Tokenizer</div>
                  <div className="text-[#64748b] text-[10px] mt-1">TextBlob Lexical + Contextual Embeddings</div>
                </div>

                <div className="p-2.5 rounded bg-[#13161b] border border-[#232833]">
                  <div className="text-[#38bdf8] font-bold">STAGE 03</div>
                  <div className="text-white mt-1">Semantic Credibility</div>
                  <div className="text-[#64748b] text-[10px] mt-1">Weighted Verification Index (WVI)</div>
                </div>

                <div className="p-2.5 rounded bg-[#13161b] border border-[#232833]">
                  <div className="text-[#38bdf8] font-bold">STAGE 04</div>
                  <div className="text-white mt-1">Civic Triage Engine</div>
                  <div className="text-[#64748b] text-[10px] mt-1">Priority Queue & Escalation</div>
                </div>
              </div>
            </div>
          </div>

          {/* BibTeX citation block */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#64748b] uppercase">BibTeX Citation</span>
              <button
                onClick={handleCopyBibtex}
                className="inline-flex items-center gap-1 text-[#38bdf8] hover:text-white transition-colors cursor-pointer"
              >
                {copiedBib ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copiedBib ? 'Copied to Clipboard' : 'Copy BibTeX'}</span>
              </button>
            </div>

            <pre className="p-3.5 rounded bg-[#0c0e11] border border-[#232833] font-mono text-[11px] text-[#94a3b8] overflow-x-auto leading-relaxed">
              {publication.bibtex}
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
};
