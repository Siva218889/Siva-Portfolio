import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Play, RefreshCw, Cpu, Activity, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface ProjectSimulatorModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectSimulatorModal: React.FC<ProjectSimulatorModalProps> = ({ projectId, onClose }) => {
  if (!projectId) return null;

  const isSentiment = projectId === 'sentiment-hub';

  // State for Sentiment Hub
  const [inputText, setInputText] = useState(
    'The practical machine learning coursework and data preprocessing labs were delivered with exceptional depth, although GPU workstation queues required optimization.'
  );
  const [analyzing, setAnalyzing] = useState(false);
  const [sentimentResult, setSentimentResult] = useState({
    polarity: 0.72,
    subjectivity: 0.65,
    classification: 'Positive / High Value Feedback',
    confidence: '94.2%',
    keywords: ['machine learning', 'preprocessing', 'exceptional depth', 'optimization']
  });

  const runSentimentAnalysis = (customText?: string) => {
    const textToAnalyze = customText || inputText;
    setAnalyzing(true);
    setTimeout(() => {
      // Algorithmic evaluation based on input
      const lower = textToAnalyze.toLowerCase();
      let pol = 0.0;
      let subj = 0.5;

      const positiveWords = ['exceptional', 'great', 'depth', 'practical', 'clear', 'good', 'improved', 'excellent'];
      const negativeWords = ['delayed', 'offline', 'poor', 'issue', 'slow', 'fail', 'bad', 'lack'];

      let posCount = 0;
      let negCount = 0;
      positiveWords.forEach(w => { if (lower.includes(w)) posCount++; });
      negativeWords.forEach(w => { if (lower.includes(w)) negCount++; });

      if (posCount > negCount) {
        pol = Math.min(0.95, 0.4 + posCount * 0.2);
      } else if (negCount > posCount) {
        pol = Math.max(-0.85, -0.3 - negCount * 0.2);
      } else {
        pol = 0.05;
      }

      subj = Math.min(0.9, 0.4 + (posCount + negCount) * 0.15);

      setSentimentResult({
        polarity: Number(pol.toFixed(2)),
        subjectivity: Number(subj.toFixed(2)),
        classification: pol > 0.15 ? 'Positive / Actionable' : pol < -0.15 ? 'Negative / Urgent Attention' : 'Neutral / Informational',
        confidence: `${(92 + Math.random() * 4).toFixed(1)}%`,
        keywords: textToAnalyze.split(' ').filter(w => w.length > 5).slice(0, 4)
      });
      setAnalyzing(false);
    }, 400);
  };

  // State for Biking Jacket Gyro Simulator
  const [rollAngle, setRollAngle] = useState(0); // Roll in degrees
  const [pitchAngle, setPitchAngle] = useState(5);
  const [activeSignal, setActiveSignal] = useState<'IDLE' | 'LEFT' | 'RIGHT' | 'VIBRATION'>('IDLE');
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeSignal === 'LEFT' || activeSignal === 'RIGHT') {
      interval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 350);
    } else {
      setIsBlinking(false);
    }
    return () => clearInterval(interval);
  }, [activeSignal]);

  const triggerGesture = (type: 'IDLE' | 'LEFT' | 'RIGHT' | 'VIBRATION') => {
    if (type === 'LEFT') {
      setRollAngle(42);
      setPitchAngle(12);
      setActiveSignal('LEFT');
    } else if (type === 'RIGHT') {
      setRollAngle(-45);
      setPitchAngle(10);
      setActiveSignal('RIGHT');
    } else if (type === 'VIBRATION') {
      // Noise below threshold (< 25 degrees)
      setRollAngle(14);
      setPitchAngle(8);
      setActiveSignal('VIBRATION');
    } else {
      setRollAngle(0);
      setPitchAngle(4);
      setActiveSignal('IDLE');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#111317] border border-[#232833] rounded-lg shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#232833] bg-[#13161b]">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isSentiment ? 'bg-[#38bdf8]' : 'bg-[#f59e0b]'}`}></span>
            <span className="font-mono text-xs font-semibold text-[#f3f4f6]">
              {isSentiment ? '360_FEEDBACK_OCR_NLP_SIMULATOR' : 'MPU6050_GYRO_GESTURE_BENCHMARK'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[#1a1c1f] text-[#64748b] hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {isSentiment ? (
            /* Sentiment Hub Simulator */
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-semibold text-white">
                  OCR-Extracted Text & Sentiment Classifier
                </h3>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Tests TextBlob polarity scoring, subjectivity indices, and tokenized keyword extraction.
                </p>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="text-[#64748b] self-center">Preset Samples:</span>
                <button
                  onClick={() => {
                    const sample = "The faculty presented deep learning architectures with exceptional pedagogical clarity.";
                    setInputText(sample);
                    runSentimentAnalysis(sample);
                  }}
                  className="px-2 py-1 rounded bg-[#1a1c1f] hover:bg-[#282a2d] border border-[#232833] text-[#e2e2e6] transition-colors cursor-pointer"
                >
                  Positive Review
                </button>
                <button
                  onClick={() => {
                    const sample = "Hostel internet infrastructure was frequently offline and administrative resolution was delayed.";
                    setInputText(sample);
                    runSentimentAnalysis(sample);
                  }}
                  className="px-2 py-1 rounded bg-[#1a1c1f] hover:bg-[#282a2d] border border-[#232833] text-[#e2e2e6] transition-colors cursor-pointer"
                >
                  Grievance Sample
                </button>
              </div>

              {/* Text Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#64748b]">OCR Recognized Input Text:</label>
                <textarea
                  rows={3}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full p-3 rounded bg-[#0c0e11] border border-[#232833] text-xs font-mono text-white focus:border-[#38bdf8] focus:outline-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => runSentimentAnalysis()}
                  disabled={analyzing}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#38bdf8] hover:bg-[#0284c7] text-[#0c0e11] text-xs font-mono font-medium transition-colors cursor-pointer"
                >
                  <RefreshCw size={12} className={analyzing ? 'animate-spin' : ''} />
                  <span>Execute NLP Pipeline</span>
                </button>
              </div>

              {/* Output Telemetry Card */}
              <div className="p-4 rounded-lg bg-[#0c0e11] border border-[#232833] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[#64748b] border-b border-[#232833] pb-2">
                  <span>TELEMETRY METRIC</span>
                  <span>EVALUATION VALUE</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8]">Polarity Index (-1.0 to +1.0):</span>
                  <span className={`font-semibold ${sentimentResult.polarity >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {sentimentResult.polarity > 0 ? `+${sentimentResult.polarity}` : sentimentResult.polarity}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8]">Subjectivity Score (0.0 to 1.0):</span>
                  <span className="text-[#e2e2e6] font-semibold">{sentimentResult.subjectivity}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8]">Convergence Accuracy:</span>
                  <span className="text-[#38bdf8] font-semibold">{sentimentResult.confidence}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8]">Class Status:</span>
                  <span className="text-white bg-[#1a1c1f] px-2 py-0.5 rounded border border-[#232833]">
                    {sentimentResult.classification}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Biking Jacket Simulator */
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-white">
                  MPU-6050 6-Axis Gesture Benchmark & Signal Tester
                </h3>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Tests arm extension tilt thresholds vs. road handlebar vibrations to eliminate false triggers.
                </p>
              </div>

              {/* Visual Jacket Diagram */}
              <div className="p-6 rounded-lg bg-[#0c0e11] border border-[#232833] flex flex-col items-center justify-center relative">
                
                {/* Jacket Wireframe Silhouette */}
                <div className="relative w-64 h-48 border border-[#232833] rounded-t-3xl rounded-b-xl bg-[#13161b] flex flex-col items-center justify-between p-4">
                  {/* Collar */}
                  <div className="w-16 h-6 border-b border-x border-[#3b4252] rounded-b-full"></div>

                  {/* Chest MPU-6050 Microcontroller Indicator */}
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#0c0e11] border border-[#232833] text-[9px] font-mono text-[#38bdf8]">
                    <Cpu size={10} />
                    <span>MPU-6050 MCU</span>
                  </div>

                  {/* Left and Right Arm LED Arrays */}
                  <div className="w-full flex justify-between px-2">
                    {/* Left Signal Indicator */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded border flex items-center justify-center font-mono font-bold text-xs transition-all ${
                          activeSignal === 'LEFT' && isBlinking
                            ? 'bg-[#f59e0b] border-[#f59e0b] text-[#0c0e11] shadow-[0_0_15px_#f59e0b]'
                            : 'bg-[#1a1c1f] border-[#232833] text-[#64748b]'
                        }`}
                      >
                        ◄
                      </div>
                      <span className="text-[9px] font-mono text-[#64748b] mt-1">LEFT ARM</span>
                    </div>

                    {/* Right Signal Indicator */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded border flex items-center justify-center font-mono font-bold text-xs transition-all ${
                          activeSignal === 'RIGHT' && isBlinking
                            ? 'bg-[#f59e0b] border-[#f59e0b] text-[#0c0e11] shadow-[0_0_15px_#f59e0b]'
                            : 'bg-[#1a1c1f] border-[#232833] text-[#64748b]'
                        }`}
                      >
                        ►
                      </div>
                      <span className="text-[9px] font-mono text-[#64748b] mt-1">RIGHT ARM</span>
                    </div>
                  </div>

                  {/* Bottom Spine Status */}
                  <div className="text-[10px] font-mono text-[#94a3b8]">
                    Active State: <span className="text-white font-semibold">{activeSignal}</span>
                  </div>
                </div>

              </div>

              {/* Gesture Action Controls */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#64748b]">Simulate Rider Arm Gestures:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => triggerGesture('LEFT')}
                    className={`p-2.5 rounded border text-xs font-mono transition-all cursor-pointer ${
                      activeSignal === 'LEFT'
                        ? 'bg-[#f59e0b] text-[#0c0e11] border-[#f59e0b] font-bold'
                        : 'bg-[#13161b] text-[#e2e2e6] border-[#232833] hover:border-[#3b4252]'
                    }`}
                  >
                    Raise Left (+42°)
                  </button>

                  <button
                    onClick={() => triggerGesture('RIGHT')}
                    className={`p-2.5 rounded border text-xs font-mono transition-all cursor-pointer ${
                      activeSignal === 'RIGHT'
                        ? 'bg-[#f59e0b] text-[#0c0e11] border-[#f59e0b] font-bold'
                        : 'bg-[#13161b] text-[#e2e2e6] border-[#232833] hover:border-[#3b4252]'
                    }`}
                  >
                    Raise Right (-45°)
                  </button>

                  <button
                    onClick={() => triggerGesture('VIBRATION')}
                    className={`p-2.5 rounded border text-xs font-mono transition-all cursor-pointer ${
                      activeSignal === 'VIBRATION'
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500 font-bold'
                        : 'bg-[#13161b] text-[#e2e2e6] border-[#232833] hover:border-[#3b4252]'
                    }`}
                  >
                    Vibration (14°)
                  </button>

                  <button
                    onClick={() => triggerGesture('IDLE')}
                    className={`p-2.5 rounded border text-xs font-mono transition-all cursor-pointer ${
                      activeSignal === 'IDLE'
                        ? 'bg-[#1a1c1f] text-white border-[#38bdf8] font-bold'
                        : 'bg-[#13161b] text-[#94a3b8] border-[#232833]'
                    }`}
                  >
                    Reset Idle (0°)
                  </button>
                </div>
              </div>

              {/* Sensor Readings Grid */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded bg-[#0c0e11] border border-[#232833] text-xs font-mono">
                <div>
                  <div className="text-[10px] text-[#64748b]">ROLL ANGLE</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{rollAngle}°</div>
                  <div className="text-[9px] text-[#94a3b8]">Threshold: ±30°</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#64748b]">PITCH ANGLE</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{pitchAngle}°</div>
                  <div className="text-[9px] text-[#94a3b8]">Inclination filter</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#64748b]">FILTER STATUS</div>
                  <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                    {activeSignal === 'VIBRATION' ? 'Blocked (Noise)' : 'Active (Clean)'}
                  </div>
                  <div className="text-[9px] text-[#94a3b8]">Debounce: 350ms</div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
