import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, Play, Activity, Cpu } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenSimulator: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenSimulator }) => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-[#232833]">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#b4c5ff] tracking-wider uppercase">
              [03 // SELECTED PROJECTS]
            </span>
          </div>
          <div className="font-mono text-xs text-[#64748b]">
            02 Deliverables
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Project 1: 360° Feedback Sentiment Hub */}
          <div className="p-6 sm:p-8 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              
              {/* Card Meta Header */}
              <div className="flex items-center justify-between font-mono text-xs text-[#64748b] border-b border-[#232833]/60 pb-3">
                <span>{projects[0].date}</span>
                <span className="text-[#38bdf8] font-medium">{projects[0].category}</span>
              </div>

              {/* Title & Overview */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#f3f4f6] tracking-tight group-hover:text-white transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {projects[0].summary}
                </p>
              </div>

              {/* Numbered Implementation Points */}
              <div className="space-y-2.5 pt-2">
                {projects[0].points.map((pt, i) => (
                  <div key={i} className="text-xs text-[#94a3b8] leading-relaxed flex items-start gap-2">
                    <span className="font-mono text-[#38bdf8] font-medium shrink-0">
                      {pt.slice(0, 2)}
                    </span>
                    <span>{pt.slice(3)}</span>
                  </div>
                ))}
              </div>

              {/* Convergence Curve Visual Box */}
              <div className="mt-5 p-4 rounded bg-[#0c0e11] border border-[#232833] relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#64748b] mb-2">
                  <span>OCR Latency & Polarity Convergence</span>
                  <div className="text-right">
                    <span className="text-base font-semibold text-[#f3f4f6] block leading-none">
                      {projects[0].benchmarkMetric}
                    </span>
                    <span className="text-[10px] text-[#94a3b8]">{projects[0].benchmarkLabel}</span>
                  </div>
                </div>

                {/* SVG Curve Graphic */}
                <div className="h-16 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#818cf8" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Fill */}
                    <path
                      d="M 0 50 Q 50 48, 80 40 T 150 25 T 220 30 T 300 12 L 300 60 L 0 60 Z"
                      fill="url(#areaGradient)"
                    />
                    {/* Stroke */}
                    <path
                      d="M 0 50 Q 50 48, 80 40 T 150 25 T 220 30 T 300 12"
                      fill="none"
                      stroke="url(#curveGradient)"
                      strokeWidth="2"
                    />
                    {/* Final point indicator */}
                    <circle cx="300" cy="12" r="3.5" fill="#38bdf8" className="animate-pulse" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Bottom Actions & Tags */}
            <div className="pt-6 mt-6 border-t border-[#232833] flex flex-col space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#0c0e11] border border-[#232833] text-[10px] font-mono text-[#94a3b8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenSimulator(projects[0].id)}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#1a1c1f] hover:bg-[#232833] border border-[#232833] hover:border-[#38bdf8]/50 text-xs font-mono text-[#e2e2e6] transition-all cursor-pointer group/btn"
              >
                <Activity size={12} className="text-[#38bdf8] group-hover/btn:animate-pulse" />
                <span>Test OCR & Sentiment Pipeline Simulator</span>
              </button>
            </div>
          </div>

          {/* Project 2: Turn Signal Biking Jacket */}
          <div className="p-6 sm:p-8 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              
              {/* Card Meta Header */}
              <div className="flex items-center justify-between font-mono text-xs text-[#64748b] border-b border-[#232833]/60 pb-3">
                <span>{projects[1].date}</span>
                <span className="text-[#f59e0b] font-medium">{projects[1].category}</span>
              </div>

              {/* Title & Overview */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#f3f4f6] tracking-tight group-hover:text-white transition-colors">
                  {projects[1].title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {projects[1].summary}
                </p>
              </div>

              {/* Numbered Implementation Points */}
              <div className="space-y-2.5 pt-2">
                {projects[1].points.map((pt, i) => (
                  <div key={i} className="text-xs text-[#94a3b8] leading-relaxed flex items-start gap-2">
                    <span className="font-mono text-[#f59e0b] font-medium shrink-0">
                      {pt.slice(0, 2)}
                    </span>
                    <span>{pt.slice(3)}</span>
                  </div>
                ))}
              </div>

              {/* Signal Bar Visual Box (Matching the amber bar graphic in screenshot) */}
              <div className="mt-5 p-4 rounded bg-[#0c0e11] border border-[#232833] relative">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#64748b] mb-1">
                  <span>FIELD BENCHMARK</span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-bold font-mono text-[#f59e0b] leading-tight">
                      {projects[1].benchmarkMetric}
                    </div>
                    <div className="text-[11px] font-mono text-[#94a3b8]">
                      {projects[1].benchmarkLabel}
                    </div>
                  </div>

                  {/* Signal bars graphic matching screenshot */}
                  <div className="flex items-end gap-1.5 h-12">
                    <div className="w-1.5 h-3 rounded-xs bg-[#f59e0b]/30"></div>
                    <div className="w-1.5 h-5 rounded-xs bg-[#f59e0b]/50"></div>
                    <div className="w-1.5 h-7 rounded-xs bg-[#f59e0b]/70"></div>
                    <div className="w-1.5 h-9 rounded-xs bg-[#f59e0b]/90"></div>
                    <div className="w-1.5 h-12 rounded-xs bg-[#f59e0b]"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Actions & Tags */}
            <div className="pt-6 mt-6 border-t border-[#232833] flex flex-col space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {projects[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#0c0e11] border border-[#232833] text-[10px] font-mono text-[#94a3b8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenSimulator(projects[1].id)}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#1a1c1f] hover:bg-[#232833] border border-[#232833] hover:border-[#f59e0b]/50 text-xs font-mono text-[#e2e2e6] transition-all cursor-pointer group/btn"
              >
                <Cpu size={12} className="text-[#f59e0b] group-hover/btn:rotate-12 transition-transform" />
                <span>Simulate MPU-6050 Gyro Gestures</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
