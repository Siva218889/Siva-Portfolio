import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Search, X, FileText, ArrowRight, BookOpen, Activity, Briefcase, Mail, Award } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenPaper: () => void;
  onOpenSimulator: (id: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenPaper,
  onOpenSimulator,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    {
      category: 'Actions',
      name: 'Open Official Resume (PDF)',
      desc: 'Opens full resume PDF in a new page',
      icon: FileText,
      action: () => {
        onClose();
        const a = document.createElement('a');
        a.href = '/Final%20Resume%20(AI&ML).pdf';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.click();
      },
    },
    {
      category: 'Research',
      name: 'IEEE INDIACom 2026 Paper Details',
      desc: 'View abstract, verification pipeline & BibTeX',
      icon: BookOpen,
      action: () => {
        onClose();
        onOpenPaper();
      },
    },
    {
      category: 'Simulators',
      name: '360° Feedback OCR Sentiment Simulator',
      desc: 'Test TextBlob polarity & classification',
      icon: Activity,
      action: () => {
        onClose();
        onOpenSimulator('sentiment-hub');
      },
    },
    {
      category: 'Simulators',
      name: 'MPU-6050 Gyro Biking Jacket Simulator',
      desc: 'Simulate rider arm gestures and LED signals',
      icon: Activity,
      action: () => {
        onClose();
        onOpenSimulator('biking-jacket');
      },
    },
    {
      category: 'Navigation',
      name: 'Jump to Industry Internships',
      desc: 'Fluent Grid, IBM CSRBOX',
      icon: Briefcase,
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      category: 'Navigation',
      name: 'Jump to Selected Projects',
      desc: 'Sentiment Hub, Turn Signal Jacket',
      icon: ArrowRight,
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      category: 'Navigation',
      name: 'Jump to Technical Toolkit',
      desc: 'Languages, Libraries, Data Viz, DBs',
      icon: ArrowRight,
      action: () => {
        onClose();
        document.getElementById('toolkit')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      category: 'Navigation',
      name: 'Jump to Academics & Certifications',
      desc: 'Presidency University, Google AI Essentials',
      icon: Award,
      action: () => {
        onClose();
        document.getElementById('academics')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      category: 'Contact',
      name: 'Direct Contact Coordinates',
      desc: 'Email sivabhaskarkora@gmail.com, WhatsApp',
      icon: Mail,
      action: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const filtered = items.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-[#111317] border border-[#232833] rounded-lg shadow-2xl overflow-hidden">
        
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-[#232833] bg-[#13161b]">
          <Search size={16} className="text-[#64748b] mr-3" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. resume, paper, project)..."
            className="w-full bg-transparent text-sm font-mono text-white focus:outline-none placeholder:text-[#475569]"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-[#64748b] hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#232833]/40">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-[#64748b]">
              No matches found for &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full text-left p-3 rounded hover:bg-[#1a1c1f] flex items-center justify-between group transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-[#13161b] border border-[#232833] text-[#38bdf8] group-hover:border-[#38bdf8]/50">
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#f3f4f6] group-hover:text-white font-mono">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#64748b]">{item.desc}</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-[#475569] px-2 py-0.5 rounded bg-[#0c0e11] border border-[#232833]">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2 bg-[#0c0e11] border-t border-[#232833] flex items-center justify-between text-[10px] font-mono text-[#64748b]">
          <span>Navigation Quick Menu</span>
          <span>ESC to close</span>
        </div>

      </div>
    </div>
  );
};
