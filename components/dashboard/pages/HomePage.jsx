"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Calendar,
  Globe2,
  MessageCircle,
  Mic,
  Upload,
  User
} from "lucide-react";
import { activity, persona } from "@/data/persona";

export default function HomePage({ setPage, setModal }) {
  const quickActions = [
    { label: "Add memory", sub: "Upload a source", icon: Upload, tone: "violet", onClick: () => setModal("Add knowledge source") },
    { label: "Test in chat", sub: "Ask a question", icon: MessageCircle, tone: "blue", onClick: () => setPage("Persona") },
    { label: "Capture meeting", sub: "Review a call", icon: Mic, tone: "amber", onClick: () => setPage("Meetings") },
    { label: "Publish", sub: "Share your page", icon: ArrowUpRight, tone: "green", onClick: () => setPage("Publish") }
  ];

  const metrics = [
    { label: "Profile", value: "92%", pct: 92, icon: User, tone: "blue", onClick: () => setPage("Persona") },
    { label: "Knowledge", value: "78%", pct: 78, icon: Brain, tone: "violet", onClick: () => setPage("Persona") },
    { label: "Public page", value: "Live", pct: null, icon: Globe2, tone: "green", onClick: () => setPage("Public Persona Page") },
    { label: "Meetings", value: "Connected", pct: null, icon: Calendar, tone: "amber", onClick: () => setPage("Meetings") }
  ];

  const tasks = [
    { text: "Approve 2 queued answers", action: "Review", onClick: () => setPage("Persona") },
    { text: "Add a founder coaching case study", action: "Add", onClick: () => setModal("Add knowledge source") },
    { text: "Turn on the booking button for your public page", action: "Enable", onClick: () => setPage("Publish") }
  ];

  const activityTimes = ["2h", "5h", "1d", "2d"];

  return (
    <div className="home">
      {/* 1, Persona status */}
      <motion.section
        className="status-card"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="status-top">
          <div className="status-id">
            <span className="status-avatar">AM</span>
            <div className="status-meta">
              <div className="status-name">
                <strong>{persona.name}</strong>
                <span className="status-chip">
                  <span className="status-dot" /> Active
                </span>
              </div>
              <span className="status-role">{persona.role}</span>
              <div className="status-cta">
                <button className="btn-primary" onClick={() => setPage("Persona")}>
                  Continue, test answers <ArrowRight size={15} />
                </button>
                <button className="btn-quiet" onClick={() => setPage("Public Persona Page")}>
                  View public page
                </button>
              </div>
            </div>
          </div>

          <div className="status-ring">
            <div className="ring" style={{ "--score": `${persona.score}%` }}>
              <strong>{persona.score}%</strong>
            </div>
            <span>ready</span>
          </div>
        </div>
      </motion.section>

      {/* 2, Quick actions */}
      <section className="home-block">
        <h2 className="home-label">Quick actions</h2>
        <div className="action-grid">
          {quickActions.map(({ label, sub, icon: Icon, tone, onClick }) => (
            <button key={label} className="action-tile" onClick={onClick}>
              <span className={`chip chip-${tone}`}>
                <Icon size={17} />
              </span>
              <span className="action-text">
                <strong>{label}</strong>
                <small>{sub}</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 3, Key metrics */}
      <section className="home-block">
        <h2 className="home-label">Overview</h2>
        <div className="kpi-grid">
          {metrics.map(({ label, value, pct, icon: Icon, tone, onClick }) => (
            <button key={label} className="kpi-card" onClick={onClick}>
              <span className={`chip chip-${tone}`}>
                <Icon size={16} />
              </span>
              <strong className="kpi-value">{value}</strong>
              <span className="kpi-label">{label}</span>
              {pct !== null && (
                <span className="kpi-bar">
                  <i style={{ width: `${pct}%` }} />
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* 4 + 5, Tasks & Activity, side by side */}
      <div className="home-columns">
        <section className="list-card">
          <h2 className="home-label">Tasks</h2>
          <div className="task-list">
            {tasks.map(({ text, action, onClick }) => (
              <div key={text} className="task-row">
                <span className="task-dot" />
                <span className="task-text">{text}</span>
                <button className="row-action" onClick={onClick}>
                  {action}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="list-card">
          <h2 className="home-label">Activity</h2>
          <div className="activity-list">
            {activity.map((item, i) => (
              <div key={item} className="activity-row">
                <span className="activity-dot" />
                <span className="activity-text">{item}</span>
                <span className="activity-time">{activityTimes[i] || ""}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
