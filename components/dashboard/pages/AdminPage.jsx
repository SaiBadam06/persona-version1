"use client";

import { motion } from "framer-motion";
import { Users, Bot, MessageCircle, Network } from "lucide-react";
import { DataTable, ActionList } from "@/components/ui/widgets";

const ease = [0.22, 1, 0.36, 1];
const enter = (i) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease, delay: i * 0.05 }
});

export default function AdminPage() {
  return (
    <div className="page">
      {/* WHY: Ops at a glance, KPI tiles give the platform health snapshot first, strong scannable hierarchy. */}
      <motion.section className="section" {...enter(0)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Health metrics</h2>
            <span className="why">Platform status right now</span>
          </div>
        </div>
        <div className="grid-4">
          {[
            ["Users", "12,480", "482 active", Users, "chip-blue"],
            ["Twins", "8,219", "94 review flags", Bot, "chip-blue"],
            ["Conversations", "91k", "Live monitor", MessageCircle, "chip-blue"],
            ["Research runs", "346", "Graph replay ready", Network, "chip-blue"]
          ].map(([label, value, sub, Icon, chip], i) => (
            <div className="kpi-card" key={label}>
              <span className={`chip ${chip}`}><Icon size={16} /></span>
              <strong className="kpi-value">{value}</strong>
              <span className="kpi-label">{label}</span>
              <span className="ui-badge ui-badge--green">{sub}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* WHY: Audit log is the operator's core read, a dense table of recent accounts replaces a vague "recent users" panel. */}
      <motion.section className="section" {...enter(1)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Audit log</h2>
            <span className="why">Recent account activity</span>
          </div>
        </div>
        <DataTable
          rows={[
            ["Aria Morgan", "Active", "84%", "Creator Pro"],
            ["Noah Patel", "Trial", "71%", "Needs onboarding"],
            ["Elena Torres", "Active", "92%", "Enterprise"]
          ]}
        />
      </motion.section>

      {/* WHY: Safety & consent checks are actionable items, not metrics, grouped as one queue so nothing slips. */}
      <motion.section className="section" {...enter(2)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Safety &amp; consent checks</h2>
            <span className="why">Review queue and quality drift</span>
          </div>
        </div>
        <ActionList
          items={[
            "Review queue: 34",
            "Learning inputs: 128",
            "Consent on file for active twins",
            "Source citation drift: low"
          ]}
        />
      </motion.section>
    </div>
  );
}
