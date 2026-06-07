"use client";

import { motion } from "framer-motion";
import { Rocket, Upload, Send, Users, Mic, FileText, Shield, Mail } from "lucide-react";

export default function HelpPage() {
  const ease = [0.22, 1, 0.36, 1];
  const topics = [
    { icon: Rocket, label: "Create your first persona" },
    { icon: Upload, label: "Import knowledge sources" },
    { icon: Send, label: "Publish and embed your persona" },
    { icon: Users, label: "Review leads and meetings" },
    { icon: Mic, label: "Voice setup guide" },
    { icon: FileText, label: "Citation and accuracy basics" }
  ];
  const policies = ["Terms of use", "Creator terms", "Privacy policy", "Biometric consent", "Unsubscribe screen"];

  return (
    <div className="page">
      {/* WHY: Quickstart topics lead — the primary task is "find an answer fast," so scannable help links come first as a grid. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Quickstart</h2>
            <span className="why">Get answers to the most common tasks</span>
          </div>
        </div>
        <div className="grid-3">
          {topics.map(({ icon: Icon, label }) => (
            <div key={label} className="card">
              <span className="chip chip-blue">
                <Icon size={16} />
              </span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </motion.section>

      {/* WHY: Policies are a simple reference list — low-frequency but trust-critical, kept calm and out of the way. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0.05 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Policies</h2>
            <span className="why">Terms, privacy, and consent</span>
          </div>
        </div>
        <div className="list">
          {policies.map((p) => (
            <div key={p} className="list-row">
              <span className="lr-main">{p}</span>
              <span className="lr-meta">View</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* WHY: Contact support is the final escape hatch — one clear path when self-serve answers fall short. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0.1 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Contact support</h2>
            <span className="why">Still stuck? Reach a human</span>
          </div>
          <button className="section-action">
            <Mail size={15} /> Email support
          </button>
        </div>
        <p className="legal-copy">
          PersonaOn asks creators to confirm rights to their likeness, uploaded knowledge, and optional voice samples
          before publishing.
        </p>
        <button className="section-action">
          <Shield size={16} /> Review consent
        </button>
      </motion.section>
    </div>
  );
}
