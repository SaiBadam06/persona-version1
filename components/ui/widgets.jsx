"use client";

import { motion } from "framer-motion";
import { Brain, Check, CircleDot, MoreHorizontal } from "lucide-react";
import { leads } from "@/data/persona";
import { CountUp, TiltCard } from "./motion";

export function Panel({ title, action, onAction, children }) {
  return (
    <TiltCard className="surface panel">
      <div className="panel-head">
        <h3>{title}</h3>
        {action && <button onClick={onAction}>{action}</button>}
      </div>
      {children}
    </TiltCard>
  );
}

export function PersonaStack() {
  return (
    <div className="persona-stage" aria-label="Floating persona card stack">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`floating-card card-${i}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="avatar large">AM</div>
          <div className="floating-card-body">
            <strong>{i === 0 ? "Aria Morgan" : i === 1 ? "Lead capture" : "Knowledge graph"}</strong>
            <span>{i === 0 ? "Active public twin" : i === 1 ? "2 hot leads today" : "146 verified facts"}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function ReadinessRing({ score }) {
  return (
    <TiltCard className="surface readiness" glow>
      <span>Persona quality</span>
      <motion.div
        className="ring"
        style={{ "--score": `${score}%` }}
        initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 0.8, 0.2, 1] }}
      >
        <strong>
          <CountUp to={score} suffix="%" />
        </strong>
      </motion.div>
      <p>Strong public intro, healthy citations, meeting-ready. Add 2 customer stories to pass 90%.</p>
    </TiltCard>
  );
}

export function KnowledgeGraph({ compact = false }) {
  const nodes = ["LinkedIn", "Website", "PDFs", "Video", "Podcast", "Facts"];
  return (
    <TiltCard className={`surface graph ${compact ? "compact" : ""}`}>
      <div className="panel-head">
        <h3>Knowledge graph</h3>
        <button>Replay</button>
      </div>
      <div className="orbit">
        <div className="center-node">
          <Brain size={24} /> Aria
        </div>
        {nodes.map((n, i) => (
          <motion.span
            key={n}
            className={`node n${i}`}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ delay: i * 0.2, repeat: Infinity, duration: 2.8 }}
          >
            {n}
          </motion.span>
        ))}
      </div>
    </TiltCard>
  );
}

export function StreamingText({ text }) {
  return (
    <span>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.045 }}
        >
          {w}{" "}
        </motion.span>
      ))}
    </span>
  );
}

export function ChatTranscript({ compact = false }) {
  const lines = [
    ["visitor", "How do you evaluate early-stage product ideas?"],
    ["aria", "I start with the shape of the customer pain, the urgency behind it, and whether the team has a credible learning loop."],
    ["aria", "Then I look for a wedge: a narrow audience, a repeatable trigger, and one measurable behavior change."]
  ];
  return (
    <div className={`transcript ${compact ? "compact" : ""}`}>
      {lines.map(([who, text], i) => (
        <motion.div
          key={i}
          className={`bubble ${who}`}
          initial={{ opacity: 0, y: 10, x: who === "visitor" ? 10 : -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: i * 0.2, duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}
        >
          {who === "aria" && i === 2 ? <StreamingText text={text} /> : text}
          {who === "aria" && <small>LinkedIn + Founder Manual.pdf</small>}
        </motion.div>
      ))}
    </div>
  );
}

export function LiveTranscript() {
  return (
    <div className="live-cards">
      {[
        "Visitor: We are pre-seed and need sharper ICP work.",
        "Aria: I would separate buyer urgency from user enthusiasm first.",
        "System: Calendar availability checked for next week."
      ].map((t, i) => (
        <motion.div key={t} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }}>
          {t}
        </motion.div>
      ))}
    </div>
  );
}

export function RotatingPreview() {
  return (
    <TiltCard className="surface rotating-preview" glow>
      <motion.div
        animate={{ rotateY: [0, 12, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="preview-card"
      >
        <div className="avatar large">AM</div>
        <strong>Aria Morgan</strong>
        <span>personaon.ai/p/aria-morgan</span>
        <p>Ask about product strategy, founder coaching, and go-to-market decisions.</p>
        <button>Chat with Aria</button>
      </motion.div>
    </TiltCard>
  );
}

export function Chart() {
  const bars = [38, 62, 48, 82, 74, 96, 68, 88, 52, 77, 91, 84];
  return (
    <div className="chart">
      {bars.map((b, i) => (
        <motion.i
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${b}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, type: "spring" }}
        />
      ))}
    </div>
  );
}

export function ActionList({ items, done = false }) {
  return (
    <div className="action-list">
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <span>{done ? <Check size={15} /> : <CircleDot size={13} />}</span>
          {item}
          <MoreHorizontal size={15} />
        </motion.div>
      ))}
    </div>
  );
}

export function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
        >
          <i />
          {item}
        </motion.div>
      ))}
    </div>
  );
}

export function DataTable({ rows }) {
  return (
    <div className="data-table">
      {rows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          {row.map((cell) => (
            <span key={cell}>{cell}</span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export function MiniFeed({ title, items, icon: Icon }) {
  return (
    <Panel title={title}>
      <div className="mini-feed">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Icon size={16} /> {item}
          </motion.div>
        ))}
      </div>
    </Panel>
  );
}

export function mockValue(field) {
  const values = {
    "Persona name": "Aria Morgan",
    Headline: "Founder clarity for early-stage teams",
    Role: "Founder & Product Strategist",
    Organization: "Northstar Product Lab",
    "Bio/public intro": "I help founders turn ambiguity into focused product bets.",
    "Social links": "linkedin.com/in/ariamorgan",
    "Allowed domains": "arcstudio.com, northstar.io",
    "Bubble color": "Deep charcoal",
    "Widget position": "Bottom right",
    "Welcome message": "Ask me how I would pressure-test your idea.",
    "Lead capture prompt": "Want Aria to follow up with resources?",
    Name: "Sai Deekshith",
    Email: "sai@example.com",
    Company: "PersonaOn",
    Timezone: "Asia/Calcutta"
  };
  return values[field] || field;
}

export function FormGrid({ fields }) {
  return (
    <div className="form-grid">
      {fields.map((f) => (
        <label key={f}>
          <span>{f}</span>
          <input value={mockValue(f)} readOnly />
        </label>
      ))}
    </div>
  );
}

export function ToggleList({ items }) {
  return (
    <div className="toggle-list">
      {items.map((item) => (
        <div key={item}>
          <span>{item}</span>
          <button className="switch on">
            <i />
          </button>
        </div>
      ))}
    </div>
  );
}

export function StatList({ stats }) {
  return (
    <div className="stat-list">
      {stats.map(([a, b]) => (
        <div key={a}>
          <span>{a}</span>
          <strong>{b}</strong>
        </div>
      ))}
    </div>
  );
}

export function LeadList() {
  return (
    <div className="lead-list">
      {leads.map(([n, e, r, p]) => (
        <div key={e}>
          <strong>{n}</strong>
          <span>
            {r} – {e}
          </span>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
}

export function FactCloud() {
  return (
    <div className="chip-row wrap">
      {[
        "Founder clarity framework",
        "ICP scoring",
        "Investor narrative",
        "Coachable founders",
        "Workshop facilitation",
        "AI product bets",
        "Pricing principles"
      ].map((x, i) => (
        <motion.span
          key={x}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05, type: "spring" }}
        >
          {x}
        </motion.span>
      ))}
    </div>
  );
}

export function VoiceWave() {
  return (
    <div className="voice-wave">
      {Array.from({ length: 32 }).map((_, i) => (
        <motion.i
          key={i}
          animate={{ height: [12, 34 + (i % 5) * 7, 14] }}
          transition={{ delay: i * 0.03, duration: 1.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

export function StateStrip() {
  return (
    <div className="state-strip">
      <span>Loading skeleton</span>
      <span>Empty search state</span>
      <span>Error retry state</span>
      <span>Success toast state</span>
    </div>
  );
}
