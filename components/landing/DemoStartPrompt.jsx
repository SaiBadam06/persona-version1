"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export default function DemoStartPrompt({ onAccept, onDecline }) {
  return (
    <motion.div
      className="demo-prompt-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onDecline}
    >
      <motion.div
        className="demo-prompt"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.96 }}
        transition={{ duration: 0.45, ease: [0.22, 0.8, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="demo-prompt-icon">
          <Compass size={22} />
        </div>
        <span className="demo-prompt-eyebrow">Guided tour · 60 seconds</span>
        <h3>Want a quick tour of PersonaOn?</h3>
        <p>
          We&apos;ll walk you through every page and show you exactly what your work memory can do, one screen at a time.
        </p>
        <div className="demo-prompt-actions">
          <button className="primary" onClick={onAccept}>
            Yes, take the tour <ArrowRight size={15} />
          </button>
          <button className="ghost" onClick={onDecline}>
            Maybe later
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
