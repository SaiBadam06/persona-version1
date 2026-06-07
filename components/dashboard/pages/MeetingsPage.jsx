"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Pause, Plus, ToggleRight } from "lucide-react";
import { LiveTranscript } from "@/components/ui/widgets";

const enter = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay }
});

const UPCOMING = [
  { name: "Product Strategy Intro", meta: "Maya Chen · Today, 3:00 PM", badge: "High intent", tone: "amber" },
  { name: "Investor Prep Session", meta: "Daniel Ruiz · Tomorrow, 11:00 AM", badge: "New", tone: "blue" },
  { name: "Founder office hours", meta: "Alex Kim · Friday, 2:00 PM", badge: "Pending", tone: "neutral" }
];

const PAST = [
  { name: "Product Strategy Intro", meta: "Mon · positive sentiment", badge: "Recorded" },
  { name: "Investor Prep Session", meta: "Last week · 12 action items", badge: "Recorded" },
  { name: "Workshop Fit Call", meta: "Last week · twin answered 6 questions", badge: "Recorded" }
];

export default function MeetingsPage({ setModal, showToast }) {
  return (
    <div className="page">
      {/* Priority 1: single primary action for the page */}
      <motion.div className="page-actions" {...enter(0)}>
        <button className="btn-primary" onClick={() => setModal("Schedule meeting")}>
          <Plus size={16} /> Schedule meeting
        </button>
      </motion.div>

      {/* Upcoming: the act-on list. Title prominent, meta muted, action quiet. */}
      <motion.section className="section" {...enter(0.05)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Upcoming meetings</h2>
            <span className="why">Requests waiting for your approval</span>
          </div>
        </div>
        <div className="meeting-list">
          {UPCOMING.map((m) => (
            <div className="meeting-row" key={m.name + m.meta}>
              <div className="meeting-info">
                <span className="meeting-title">{m.name}</span>
                <span className="meeting-meta">{m.meta}</span>
              </div>
              <div className="meeting-actions">
                <span className={`ui-badge ui-badge--${m.tone}`}>{m.badge}</span>
                <button className="meeting-join" onClick={() => showToast("Booking approved")}>
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Secondary: live call controls, only relevant while a call is running. */}
      <motion.section className="section" {...enter(0.1)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Live capture</h2>
            <span className="why">Watch the transcript and control the twin mid-call</span>
          </div>
          <button className="section-action" onClick={() => setModal("Join meeting workflow")}>
            Join now
          </button>
        </div>
        <LiveTranscript />
        <div className="button-row">
          <button>
            <Pause size={15} /> Mute persona
          </button>
          <button>
            <ToggleRight size={15} /> Attendance on
          </button>
          <button>
            <ArrowUpRight size={15} /> Leave
          </button>
        </div>
      </motion.section>

      {/* Past: closes the loop with captured outcomes. */}
      <motion.section className="section" {...enter(0.15)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Past meetings</h2>
            <span className="why">Captured outcomes from recent calls</span>
          </div>
        </div>
        <div className="meeting-list">
          {PAST.map((m) => (
            <div className="meeting-row" key={m.name + m.meta}>
              <div className="meeting-info">
                <span className="meeting-title">{m.name}</span>
                <span className="meeting-meta">{m.meta}</span>
              </div>
              <div className="meeting-actions">
                <span className="ui-badge ui-badge--neutral">{m.badge}</span>
                <button className="meeting-join" onClick={() => showToast("Opening summary")}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
