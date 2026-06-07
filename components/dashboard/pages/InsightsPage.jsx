"use client";

import { motion } from "framer-motion";
import { MessageCircle, Activity, Mail, Brain } from "lucide-react";
import { Chart, ActionList, LeadList } from "@/components/ui/widgets";
import { persona } from "@/data/persona";

const enter = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay }
});

export default function InsightsPage() {
  return (
    <div className="page">
      {/* WHY: Key metrics — the single answer to "is the memory performing?" lives in these headline numbers. */}
      <motion.section className="section" {...enter(0)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Key metrics</h2>
            <span className="why">Source-backed quality: 89% · last 7 days</span>
          </div>
          <button className="section-action">7d · 30d · 90d</button>
        </div>
        <div className="grid-4">
          {[
            ["Total conversations", "1,284", "+18%", MessageCircle, "chip-blue", 92],
            ["Engagement", "64%", "+9%", Activity, "chip-violet", 64],
            ["Widget leads", "38", "+12", Mail, "chip-green", 55],
            ["Answerability", "84%", "7 reviews", Brain, "chip-amber", 84]
          ].map(([label, value, sub, Icon, chip, pct]) => (
            <div className="kpi-card card" key={label}>
              <span className={`chip ${chip}`}>
                <Icon size={16} />
              </span>
              <strong className="kpi-value">{value}</strong>
              <span className="kpi-label">{label}</span>
              <span className="kpi-bar">
                <i style={{ width: `${pct}%` }} />
              </span>
              <span className="lr-sub">{sub}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* WHY: Engagement chart — metrics need a trend; this shows whether conversation volume is rising or falling. */}
      <motion.section className="section" {...enter(0.05)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Daily conversations</h2>
            <span className="why">Conversation volume trend across the period</span>
          </div>
        </div>
        <div className="card">
          <Chart />
        </div>
      </motion.section>

      {/* WHY: Top questions — shows what visitors actually ask, the highest-leverage signal for what memory to improve. */}
      <motion.section className="section" {...enter(0.1)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Top visitor questions</h2>
            <span className="why">What people ask the twin most — where to add memory next</span>
          </div>
        </div>
        <ActionList items={persona.questions.concat(["What is your advisory process?", "Do you work with pre-seed teams?"])} />
      </motion.section>

      {/* WHY: Leads & quality — closes the performance picture: who converted and where answers still fall short. */}
      <motion.section className="section" {...enter(0.15)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Leads &amp; answer quality</h2>
            <span className="why">Who the twin captured and where answers need work</span>
          </div>
        </div>
        <div className="grid-2">
          <div className="card">
            <h3>Widget leads</h3>
            <LeadList />
          </div>
          <div className="card">
            <h3>Quality insights</h3>
            <ActionList
              items={[
                "12 answers need stronger citations",
                "5 learning inputs from conversations",
                "Knowledge freshness improved after LinkedIn refresh"
              ]}
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
