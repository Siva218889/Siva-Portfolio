import React, { useState } from 'react';
import { CheckCircle2, Sliders } from 'lucide-react';

interface PortraitCardProps {
  onOpenResume?: () => void;
}

export const PortraitCard: React.FC<PortraitCardProps> = () => {
  const [filterMode, setFilterMode] = useState<'raw' | 'monochrome' | 'film'>('raw');
  const [showMetadata, setShowMetadata] = useState(false);

  return (
    <div className="relative group w-full max-w-[420px] mx-auto lg:ml-auto">
      {/* Container with Hairline Precision Border */}
      <div className="relative rounded-xl bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-colors duration-300 overflow-hidden shadow-2xl">
        
        {/* Top Header Strip */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#232833] bg-[#111317]/90 text-[10px] tracking-[0.14em] font-mono text-[#94a3b8]">
          <div className="flex items-center gap-2">
            <span className="flex gap-1 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8]"></span>
            </span>
            <span className="text-[#e2e2e6] font-medium">SIVA_BHASKAR.PORTRAIT</span>
          </div>
          
          <button
            onClick={() => setShowMetadata(!showMetadata)}
            title="Toggle Camera Telemetry"
            className="text-[#64748b] hover:text-[#b4c5ff] transition-colors cursor-pointer"
          >
            <Sliders size={12} />
          </button>
        </div>

        {/* Portrait Image Area */}
        <div className="relative aspect-[3/4] bg-[#0c0e11] overflow-hidden flex items-center justify-center">
          {/* Authentic Portrait Image */}
          <img
            src="/White%20formal%20crop.jpeg"
            alt="Siva Bhaskar Kora"
            className={`w-full h-full object-cover object-top transition-all duration-500 ${
              filterMode === 'monochrome'
                ? 'grayscale contrast-125 brightness-95'
                : filterMode === 'film'
                ? 'grayscale contrast-110 sepia-[0.2] brightness-95'
                : 'grayscale-0 contrast-105 brightness-100'
            }`}
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#13161b] via-transparent to-transparent opacity-50 pointer-events-none" />

          {/* Telemetry / Metadata Overlay */}
          {showMetadata && (
            <div className="absolute top-3 left-3 right-3 p-2.5 rounded bg-[#0c0e11]/90 backdrop-blur-md border border-[#232833] text-[10px] font-mono text-[#94a3b8] space-y-1">
              <div className="flex justify-between">
                <span>ISO: 100</span>
                <span>F/1.8</span>
                <span>1/250s</span>
              </div>
              <div className="flex justify-between text-[#64748b]">
                <span>SUBJECT: Siva Bhaskar Kora</span>
                <span>LOCATION: Bangalore, IN</span>
              </div>
              <div className="pt-1 border-t border-[#232833] flex justify-between text-[#38bdf8]">
                <span>SPECIALIZATION</span>
                <span>AI & ML SYSTEM ARCHITECTURE</span>
              </div>
            </div>
          )}

          {/* Quick Filter Switcher Pill */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 p-1 rounded bg-[#0c0e11]/80 backdrop-blur border border-[#232833] text-[9px] font-mono z-10">
            <button
              onClick={() => setFilterMode('monochrome')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'monochrome' ? 'bg-[#232833] text-white font-bold' : 'text-[#64748b] hover:text-[#e2e2e6]'
              }`}
            >
              MONO
            </button>
            <button
              onClick={() => setFilterMode('film')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'film' ? 'bg-[#232833] text-white font-bold' : 'text-[#64748b] hover:text-[#e2e2e6]'
              }`}
            >
              FILM
            </button>
            <button
              onClick={() => setFilterMode('raw')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'raw' ? 'bg-[#232833] text-white font-bold' : 'text-[#64748b] hover:text-[#e2e2e6]'
              }`}
            >
              RAW
            </button>
          </div>
        </div>

        {/* Bottom Metadata Strip */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-[#232833] bg-[#111317]">
          <div>
            <div className="text-sm font-semibold text-[#f3f4f6] tracking-tight">Siva Bhaskar Kora</div>
            <div className="text-[11px] text-[#64748b] font-mono">AI/ML Engineer & Researcher</div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#1a1c1f] border border-[#232833]">
            <CheckCircle2 size={11} className="text-[#38bdf8]" />
            <span className="text-[10px] font-mono tracking-wider font-semibold text-[#b4c5ff]">VERIFIED</span>
          </div>
        </div>

      </div>
    </div>
  );
};
