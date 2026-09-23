import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, ExternalLink, Calendar } from 'lucide-react';

export const AcademicsSection: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="academics" className="py-16 md:py-20 border-b border-[#232833]">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className="font-mono text-xs font-semibold text-[#b4c5ff] tracking-wider uppercase">
            [05 // ACADEMICS & CERTIFICATIONS]
          </span>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Education (lg: 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-base font-semibold text-[#f3f4f6]">
              <GraduationCap size={18} className="text-[#38bdf8]" />
              <span>Formal Education</span>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-colors"
                >
                  <div className="flex items-center justify-between font-mono text-xs text-[#64748b] mb-1.5">
                    <span>{edu.period}</span>
                    {/* {edu.cgpa && (
                      <span className="text-[#e2e2e6] bg-[#1a1c1f] px-2 py-0.5 rounded border border-[#232833]">
                        CGPA: {edu.cgpa}
                      </span>
                    )} */}
                  </div>
                  <h4 className="text-base font-semibold text-[#f3f4f6]">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-[#94a3b8] mt-1">
                    {edu.degree}
                  </p>
                  {/* {edu.details && (
                    <p className="text-[11px] font-mono text-[#64748b] mt-1.5">
                      Focus: {edu.details}
                    </p>
                  )} */}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Accredited Certifications (lg: 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-base font-semibold text-[#f3f4f6]">
              <Award size={18} className="text-[#f59e0b]" />
              <span>Accredited Certifications</span>
            </div>

            <div className="space-y-2.5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-lg bg-[#13161b] border border-[#232833] hover:border-[#3b4252] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mt-2 shrink-0"></span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#f3f4f6] group-hover:text-white transition-colors">
                        {cert.title}
                      </h4>
                      <div className="text-xs text-[#64748b] font-mono mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono text-xs text-[#64748b] shrink-0 pl-3">
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
