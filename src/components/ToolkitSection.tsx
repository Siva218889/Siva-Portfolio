import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, GitFork, LineChart, Database, Search } from 'lucide-react';

export const ToolkitSection: React.FC = () => {
  const { toolkit } = PORTFOLIO_DATA;
  const [filterQuery, setFilterQuery] = useState('');

  const matchesFilter = (text: string) => {
    if (!filterQuery.trim()) return false;
    return text.toLowerCase().includes(filterQuery.toLowerCase().trim());
  };

  return (
    <section id="toolkit" className="py-16 md:py-20 border-b border-[#232833]">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#b4c5ff] tracking-wider uppercase">
              [04 // TECHNICAL TOOLKIT]
            </span>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full sm:w-64">
            <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Highlight skill (e.g. SQL, LoRA)..."
              className="w-full pl-8 pr-3 py-1.5 rounded bg-[#13161b] border border-[#232833] focus:border-[#38bdf8] focus:outline-none text-xs font-mono text-[#e2e2e6] placeholder:text-[#475569] transition-colors"
            />
            {filterQuery && (
              <button
                onClick={() => setFilterQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#64748b] hover:text-white"
              >
                esc
              </button>
            )}
          </div>
        </div>

        {/* 4 Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Languages */}
          <div className="p-6 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#64748b] mb-4">
                <Code2 size={13} className="text-[#38bdf8]" />
                <span>{toolkit.languages.category}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {toolkit.languages.items.map((item) => {
                  const highlighted = matchesFilter(item);
                  return (
                    <span
                      key={item}
                      className={`px-3 py-1 rounded border text-xs font-mono transition-all ${
                        highlighted
                          ? 'bg-[#38bdf8]/20 border-[#38bdf8] text-white shadow-sm'
                          : 'bg-[#1a1c1f] border-[#232833] text-[#e2e2e6]'
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#232833]/80">
              <div className="text-[10px] font-mono text-[#64748b] uppercase mb-1.5">
                CORE COMPETENCIES
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {toolkit.languages.coreCompetencies}
              </p>
            </div>
          </div>

          {/* Card 2: Libraries & ML */}
          <div className="p-6 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#64748b] mb-4">
                <GitFork size={13} className="text-[#818cf8]" />
                <span>{toolkit.libraries.category}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {toolkit.libraries.items.map((item) => {
                  const highlighted = matchesFilter(item);
                  return (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded border text-xs font-mono transition-all ${
                        highlighted
                          ? 'bg-[#818cf8]/20 border-[#818cf8] text-white shadow-sm'
                          : 'bg-[#1a1c1f] border-[#232833] text-[#e2e2e6]'
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
            
            <div className="pt-4 border-t border-[#232833]/80 mt-6 text-[10px] font-mono text-[#64748b]">
              Fine-tuning & tabular modeling
            </div>
          </div>

          {/* Card 3: Data Viz & Math */}
          <div className="p-6 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#64748b] mb-4">
                <LineChart size={13} className="text-[#f59e0b]" />
                <span>{toolkit.dataViz.category}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {toolkit.dataViz.items.map((item) => {
                  const highlighted = matchesFilter(item);
                  return (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded border text-xs font-mono transition-all ${
                        highlighted
                          ? 'bg-[#f59e0b]/20 border-[#f59e0b] text-white shadow-sm'
                          : 'bg-[#1a1c1f] border-[#232833] text-[#e2e2e6]'
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#232833]/80 mt-6 text-[10px] font-mono text-[#64748b]">
              Statistical evaluation & EDA
            </div>
          </div>

          {/* Card 4: Tools & DBs */}
          <div className="p-6 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#64748b] mb-4">
                <Database size={13} className="text-emerald-400" />
                <span>{toolkit.toolsDbs.category}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {toolkit.toolsDbs.items.map((item) => {
                  const highlighted = matchesFilter(item);
                  return (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded border text-xs font-mono transition-all ${
                        highlighted
                          ? 'bg-emerald-400/20 border-emerald-400 text-white shadow-sm'
                          : 'bg-[#1a1c1f] border-[#232833] text-[#e2e2e6]'
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#232833]/80 mt-6 text-[10px] font-mono text-[#64748b]">
              Version control & datastores
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
