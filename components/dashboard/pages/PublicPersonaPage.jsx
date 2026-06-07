"use client";

import { motion } from "framer-motion";
import { QrCode, MessageSquare, Mic, CalendarCheck } from "lucide-react";
import { RotatingPreview, ToggleList, ActionList } from "@/components/ui/widgets";

const ease = [0.22, 1, 0.36, 1];
const enter = (i) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease, delay: i * 0.05 }
});

export default function PublicPersonaPage({ setModal }) {
  return (
    <div className="page">
      {/* WHY: One primary task — see exactly what a visitor sees. The rotating preview is the hero, calm and centered. */}
      <motion.section className="section" {...enter(0)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Live preview</h2>
            <span className="why">How visitors see your public page</span>
          </div>
          <button className="section-action" onClick={() => setModal("Public share modal")}>
            <QrCode size={16} /> Share
          </button>
        </div>
        <RotatingPreview />
      </motion.section>

      {/* WHY: Progressive disclosure — what visitors can actually do, grouped as simple toggles instead of scattered controls. */}
      <motion.section className="section" {...enter(1)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Visitor capabilities</h2>
            <span className="why">What people can do on your page</span>
          </div>
        </div>
        <ToggleList
          items={[
            "Chat with Aria",
            "Voice conversation",
            "Book a meeting",
            "Capture lead details"
          ]}
        />
        <div className="grid-3">
          <div className="kpi-card">
            <span className="chip chip-blue"><MessageSquare size={16} /></span>
            <strong className="kpi-value">Chat</strong>
            <span className="kpi-label">Cited answers</span>
          </div>
          <div className="kpi-card">
            <span className="chip chip-blue"><Mic size={16} /></span>
            <strong className="kpi-value">Voice</strong>
            <span className="kpi-label">Live transcript</span>
          </div>
          <div className="kpi-card">
            <span className="chip chip-blue"><CalendarCheck size={16} /></span>
            <strong className="kpi-value">Booking</strong>
            <span className="kpi-label">Meeting types</span>
          </div>
        </div>
      </motion.section>

      {/* WHY: Single share surface — bookable slots live here so visitors can act; share action stays at the top only (no duplicate). */}
      <motion.section className="section" {...enter(2)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Book with Aria</h2>
            <span className="why">Slots visitors can request</span>
          </div>
          <button className="section-action" onClick={() => setModal("Booking request")}>
            Request slot
          </button>
        </div>
        <ActionList items={["Product Strategy Intro", "Investor Prep Session", "Founder office hours"]} />
      </motion.section>
    </div>
  );
}
