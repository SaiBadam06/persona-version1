"use client";

import { motion } from "framer-motion";
import { BookOpen, Mic, Send } from "lucide-react";
import { ChatTranscript } from "@/components/ui/widgets";
import { persona } from "@/data/persona";

const ease = [0.22, 1, 0.36, 1];
const enter = (i) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease, delay: i * 0.05 }
});

export default function ChatPage({ setModal, showToast }) {
  return (
    <div className="page">
      {/* WHY: ChatGPT-style — the conversation IS the screen. Full-width transcript and composer, minimal chrome, one primary task: test the persona. */}
      <motion.section className="section" {...enter(0)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Conversation</h2>
            <span className="why">Test answers as a visitor would</span>
          </div>
          <button className="section-action" onClick={() => setModal("Citations drawer")}>
            <BookOpen size={16} /> Citations
          </button>
        </div>
        <ChatTranscript />
        <div className="composer">
          <Mic size={18} />
          <input placeholder="Ask Aria a test question…" />
          <button onClick={() => showToast("Streaming mock response")}>
            <Send size={18} />
          </button>
        </div>
      </motion.section>

      {/* WHY: Citations are a small side note, not a panel — they support the answer without competing with the chat. */}
      <motion.section className="section" {...enter(1)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Sources</h2>
            <span className="why">Where answers are grounded</span>
          </div>
        </div>
        <div className="list">
          {persona.sources.map((src) => (
            <div className="list-row" key={src}>
              <span className="lr-main">{src}</span>
              <span className="lr-meta">cited</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* WHY: Queued visitor questions become next test prompts — a single list keeps the test loop tight (no duplicate action panels). */}
      <motion.section className="section" {...enter(2)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Queued visitor questions</h2>
            <span className="why">Try these next</span>
          </div>
        </div>
        <div className="list">
          {persona.questions.map((q) => (
            <button className="list-row" key={q} onClick={() => showToast("Streaming mock response")}>
              <span className="lr-main">{q}</span>
              <span className="lr-meta">run</span>
            </button>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
