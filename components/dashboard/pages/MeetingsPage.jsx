"use client";

import { motion } from "framer-motion";
import { Calendar, ClipboardCheck, Radio, Mail, Pause, ToggleRight, ArrowUpRight } from "lucide-react";
import { ActionList, LiveTranscript, Timeline } from "@/components/ui/widgets";

const enter = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay }
});

export default function MeetingsPage({ setModal, showToast }) {
  return (
    <div className="page">
      {/* WHY: Readiness strip — the first thing to know is whether the twin is connected and what needs attention before any call. */}
      <motion.section className="section" {...enter(0)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Meeting readiness</h2>
            <span className="why">Is the twin connected and what needs a decision today</span>
          </div>
        </div>
        <div className="grid-4">
          {[
            ["Calendar", "Connected", "Google Calendar", Calendar, "chip-blue", "ui-badge--green", 100],
            ["Booking requests", "4", "2 high intent", ClipboardCheck, "chip-amber", "ui-badge--amber", 65],
            ["Twin attendance", "Standby", "Ready to join", Radio, "chip-violet", "ui-badge--blue", 80],
            ["Weekly digest", "Friday", "Draft prepared", Mail, "chip-green", "ui-badge--neutral", 50]
          ].map(([label, value, sub, Icon, chip, badge, pct]) => (
            <div className="kpi-card card" key={label}>
              <span className={`chip ${chip}`}>
                <Icon size={16} />
              </span>
              <strong className="kpi-value">{value}</strong>
              <span className="kpi-label">{label}</span>
              <span className="kpi-bar">
                <i style={{ width: `${pct}%` }} />
              </span>
              <span className={`ui-badge ${badge}`}>{sub}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* WHY: Bookings inbox — the primary act-on task: approve or reject incoming meeting requests in one place. */}
      <motion.section className="section" {...enter(0.05)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Bookings inbox</h2>
            <span className="why">Approve the meeting requests waiting on you</span>
          </div>
          <button className="section-action" onClick={() => showToast("Booking approved")}>
            Approve selected
          </button>
        </div>
        <ActionList
          items={[
            "Maya Chen – Product Strategy Intro",
            "Daniel Ruiz – Investor Prep Session",
            "Alex Kim – Founder office hours"
          ]}
        />
      </motion.section>

      {/* WHY: Live capture — when a call is running this is the one screen to watch the transcript and control the twin. */}
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
        <div className="card">
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
        </div>
      </motion.section>

      {/* WHY: Recent meetings — closes the loop by showing captured outcomes and action items from past calls. */}
      <motion.section className="section" {...enter(0.15)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Recent meetings</h2>
            <span className="why">Captured outcomes and action items from past calls</span>
          </div>
        </div>
        <Timeline
          items={[
            "Product Strategy Intro – positive sentiment",
            "Investor Prep Session – 12 action items",
            "Workshop Fit Call – twin answered 6 questions"
          ]}
        />
      </motion.section>
    </div>
  );
}
