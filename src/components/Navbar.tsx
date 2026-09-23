import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, ArrowUpRight, Menu, X, Command } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenCommand: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenCommand }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Writing & Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0c0e11]/85 border-b border-[#232833] transition-colors">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left Branding + Status Chip */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#" className="flex items-baseline gap-1.5 group">
            <span className="font-mono text-xs font-semibold text-[#b4c5ff] group-hover:text-white transition-colors">
              {PORTFOLIO_DATA.personal.handle}
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#f3f4f6] group-hover:text-white transition-colors">
              siva bhaskar kora
            </span>
          </a>

          {/* Status Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#13161b] border border-[#232833] text-[11px] font-mono text-[#94a3b8]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate">{PORTFOLIO_DATA.personal.status}</span>
          </div>
        </div>

        {/* Center/Right Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium text-[#94a3b8]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#f3f4f6] transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick command search trigger */}
          <button
            onClick={onOpenCommand}
            className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded bg-[#13161b] hover:bg-[#1a1e26] border border-[#232833] text-[11px] font-mono text-[#64748b] hover:text-[#e2e2e6] transition-colors cursor-pointer"
            title="Search & Jump (Cmd+K)"
          >
            <Command size={11} />
            <span>K</span>
          </button>

          {/* Resume Button - Directly opens the official PDF in a new page */}
          <a
            href="/Final%20Resume%20(AI&ML).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1a1c1f] hover:bg-[#282a2d] border border-[#232833] hover:border-[#3b4252] text-xs font-mono font-medium text-[#e2e2e6] transition-all cursor-pointer group"
            title="Open Resume PDF in new page"
          >
            <FileText size={12} className="text-[#94a3b8] group-hover:text-white transition-colors" />
            <span>Resume</span>
            <ArrowUpRight size={12} className="text-[#64748b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded bg-[#13161b] border border-[#232833] text-[#94a3b8] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232833] bg-[#0c0e11] px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 px-2 py-1 text-[11px] font-mono text-[#94a3b8] border-b border-[#232833]/60 pb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{PORTFOLIO_DATA.personal.status}</span>
          </div>
          <div className="flex flex-col space-y-2 text-sm font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded text-[#94a3b8] hover:text-white hover:bg-[#13161b] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Final%20Resume%20(AI&ML).pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded text-[#38bdf8] hover:text-white hover:bg-[#13161b] transition-colors flex items-center justify-between"
            >
              <span>Resume (PDF)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
