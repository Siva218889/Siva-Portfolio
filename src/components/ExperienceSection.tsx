import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, CheckCircle, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { internships } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 md:py-20 border-b border-[#232833]">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-10">
          <span className="font-mono text-xs font-semibold text-[#b4c5ff] tracking-wider uppercase">
            [02 // INDUSTRY INTERNSHIPS]
          </span>
        </div>

        {/* Stacked Experience Rows */}
        <div className="space-y-12">
          {internships.map((job, index) => (
            <div
              key={job.id}
              className={`pb-12 ${
                index !== internships.length - 1 ? 'border-b border-[#232833]/70' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left Meta Column (4 cols) */}
                <div className="lg:col-span-4 flex flex-col space-y-2">
                  <div className="font-mono text-xs text-[#64748b]">
                    {job.period}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#f3f4f6] tracking-tight">
                    {job.company}
                  </h3>
                  <div className="text-xs sm:text-sm text-[#94a3b8] font-normal leading-snug">
                    {job.role}
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#13161b] border border-[#232833] text-[10px] font-mono text-[#94a3b8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {job.status}
                    </span>
                  </div>
                </div>

                {/* Right Description & Badges Column (8 cols) */}
                <div className="lg:col-span-8 flex flex-col space-y-4">
                  {/* Descriptions */}
                  <div className="space-y-3 text-sm text-[#94a3b8] leading-relaxed">
                    {job.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="pt-3 flex flex-wrap items-center gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded bg-[#13161b] border border-[#232833] text-[11px] font-mono text-[#94a3b8] hover:text-[#e2e2e6] hover:border-[#3b4252] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
