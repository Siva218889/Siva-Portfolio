import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Send, MessageSquare, Loader2, Mail, ExternalLink, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Interactive message state
  const [showForm, setShowForm] = useState(true);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      senderName ? `[Portfolio Inquiry] From ${senderName}` : 'Portfolio Inquiry / Opportunity'
    );
    const body = encodeURIComponent(
      `${message || 'Hello Siva,\n\nI came across your portfolio and would like to discuss an opportunity with you.'}\n\nSender: ${senderName || 'Recruiter'}\nEmail: ${senderEmail || 'N/A'}`
    );
    return `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const getWebGmailUrl = () => {
    const subject = encodeURIComponent(
      senderName ? `[Portfolio Inquiry] From ${senderName}` : 'Portfolio Inquiry / Opportunity'
    );
    const body = encodeURIComponent(
      `${message || 'Hello Siva,\n\nI came across your portfolio and would like to discuss an opportunity with you.'}\n\nSender: ${senderName || 'Recruiter'}\nEmail: ${senderEmail || 'N/A'}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;
    
    setIsSubmitting(true);
    setFeedbackMessage(null);
    setIsError(false);
    setSentSuccess(false);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: message,
          _subject: `New Portfolio Message from ${senderName}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && (data?.success === 'true' || data?.success === true)) {
        setSentSuccess(true);
        setFeedbackMessage('Message dispatched! It has been delivered directly to sivabhaskarkora@gmail.com.');
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      } else if (data?.message && data.message.includes('Activation')) {
        setSentSuccess(true);
        setFeedbackMessage("Your message was dispatched! Note: FormSubmit has sent a one-time activation link to sivabhaskarkora@gmail.com to confirm inbox forwarding.");
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      } else {
        throw new Error(data?.message || 'Form dispatch service error');
      }
    } catch (err: any) {
      setIsError(true);
      setFeedbackMessage(
        'Could not dispatch automatically via web API. Please use "Open in Web Gmail" or "Mail App" below to send directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        
        {/* Architectural CTA Box */}
        <div className="p-8 sm:p-12 md:p-14 rounded-xl bg-[#13161b] border border-[#232833] relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1a1c1f] border border-[#232833] text-xs font-mono text-[#94a3b8] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
            <span>Availability Window: {personal.availabilityWindow}</span>
          </div>

          {/* Headline & Description */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#f3f4f6] leading-[1.15] mb-5 max-w-3xl">
            Let&apos;s build intelligent systems together.
          </h2>

          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-3xl mb-10 font-normal">
            Graduated in March 2026. Actively seeking fresher and entry-level opportunities in AI/ML engineering and Data Analysis where I can apply practical ML pipelines, data-driven modeling, and rigorous analytical problem-solving.
          </p>

          {/* Direct Coordinates Grid (Matching the 3 columns in screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-[#232833]">
            
            {/* Box 1: Direct Email */}
            <div className="p-4 rounded-lg bg-[#0c0e11] border border-[#232833] flex flex-col justify-between group">
              <div className="text-[10px] font-mono text-[#64748b] tracking-wider uppercase mb-2">
                DIRECT EMAIL
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs sm:text-sm font-mono text-[#e2e2e6] hover:text-[#38bdf8] transition-colors truncate"
                >
                  {personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded hover:bg-[#1a1c1f] text-[#64748b] hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Box 2: Voice / WhatsApp */}
            <div className="p-4 rounded-lg bg-[#0c0e11] border border-[#232833] flex flex-col justify-between group">
              <div className="text-[10px] font-mono text-[#64748b] tracking-wider uppercase mb-2">
                VOICE / WHATSAPP
              </div>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-mono text-[#e2e2e6] hover:text-[#38bdf8] transition-colors"
                  >
                    {personal.phone}
                  </a>
                  <div className="text-[10px] font-mono text-[#64748b]">{personal.timezone}</div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded hover:bg-[#1a1c1f] text-[#64748b] hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Box 3: Network & Code */}
            <div className="p-4 rounded-lg bg-[#0c0e11] border border-[#232833] flex flex-col justify-between">
              <div className="text-[10px] font-mono text-[#64748b] tracking-wider uppercase mb-2">
                NETWORK & CODE
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#e2e2e6] hover:text-[#38bdf8] transition-colors group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={11} className="text-[#64748b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <span className="text-[#475569]">/</span>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#e2e2e6] hover:text-[#38bdf8] transition-colors group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} className="text-[#64748b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Message Drawer Toggle */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1c1f] hover:bg-[#282a2d] border border-[#232833] text-xs font-mono text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
            >
              <MessageSquare size={12} className="text-[#38bdf8]" />
              <span>{showForm ? 'Close Message Form' : 'Send Direct Message'}</span>
            </button>
          </div>

          {/* Collapsible Direct Message Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="mt-6 pt-6 border-t border-[#232833] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#94a3b8] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Recruiter or Engineering Lead"
                    className="w-full px-3 py-2 rounded bg-[#0c0e11] border border-[#232833] text-xs font-mono text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#94a3b8] mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="recruiter@company.com"
                    className="w-full px-3 py-2 rounded bg-[#0c0e11] border border-[#232833] text-xs font-mono text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#94a3b8] mb-1">Inquiry / Opportunity Details</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Siva about the role, project, or schedule an interview..."
                  className="w-full px-3 py-2 rounded bg-[#0c0e11] border border-[#232833] text-xs font-mono text-white focus:border-[#38bdf8] focus:outline-none"
                />
              </div>

              {/* Feedback alert */}
              {feedbackMessage && (
                <div
                  className={`p-3 rounded text-xs font-mono flex items-start gap-2 border ${
                    isError
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                      : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  }`}
                >
                  {isError ? <AlertCircle size={15} className="shrink-0 mt-0.5" /> : <Check size={15} className="shrink-0 mt-0.5" />}
                  <div className="flex-1 leading-relaxed">
                    {feedbackMessage}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                <div className="flex items-center flex-wrap gap-2 text-[11px] font-mono text-[#64748b]">
                  <span>Target: {personal.email}</span>
                  <span>•</span>
                  <a
                    href={getWebGmailUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Web Gmail</span>
                    <ExternalLink size={10} />
                  </a>
                  <span>•</span>
                  <a
                    href={getMailtoUrl()}
                    className="text-[#38bdf8] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Mail App</span>
                    <Mail size={10} />
                  </a>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#f3f4f6] text-[#0c0e11] text-xs font-mono font-medium hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={12} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : sentSuccess ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span>Sent to Siva!</span>
                      </>
                    ) : (
                      <>
                        <Send size={12} />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
