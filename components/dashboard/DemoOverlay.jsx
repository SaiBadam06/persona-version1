"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Compass, Plus } from "lucide-react";
import { useEffect } from "react";

export default function DemoOverlay({ step, total, data, onNext, onBack, onSkip }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "Enter") {
        e.preventDefault();
        onNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onBack();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onSkip();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onBack, onSkip]);

  const isLast = step === total - 1;
  const StepIcon = data.icon || Compass;
  const pct = ((step + 1) / total) * 100;

  return (
    <div className="demo-overlay">
      <motion.div
        className="demo-progress"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
      >
        <span className="demo-progress-label">
          Tour · {step + 1} / {total}
        </span>
        <div className="demo-progress-track">
          <motion.div
            className="demo-progress-bar"
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
          />
        </div>
        <button className="demo-progress-close" onClick={onSkip} aria-label="End tour">
          <Plus size={14} style={{ transform: "rotate(45deg)" }} />
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          className="demo-card"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 0.8, 0.2, 1] }}
        >
          <div className="demo-card-head">
            <div className="demo-card-icon">
              <StepIcon size={18} />
            </div>
            <span className="demo-step-tag">{data.section || `Step ${step + 1}`}</span>
          </div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
          <ul className="demo-features">
            {data.features.map((f) => (
              <li key={f}>
                <Check size={13} /> {f}
              </li>
            ))}
          </ul>
          <div className="demo-actions">
            <button className="demo-btn ghost" onClick={onBack} disabled={step === 0}>
              <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} /> Back
            </button>
            <button className="demo-btn demo-skip" onClick={onSkip}>
              Skip
            </button>
            <button className="demo-btn primary" onClick={onNext}>
              {isLast ? "Finish" : "Next"} <ArrowRight size={15} />
            </button>
          </div>
          <span className="demo-kbd-hint">
            <kbd>←</kbd> <kbd>→</kbd> to navigate · <kbd>esc</kbd> to skip
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
