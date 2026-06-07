"use client";

import { motion } from "framer-motion";
import { Zap, CircleDot, Link2, KeyRound } from "lucide-react";
import { ActionList, DataTable, ToggleList } from "@/components/ui/widgets";

const enter = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay }
});

export default function AutomationsPage({ setModal, showToast }) {
  return (
    <div className="page">
      {/* WHY: Coverage at a glance — before touching anything, show how much is automated and where it reaches. */}
      <motion.section className="section" {...enter(0)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Automation coverage</h2>
            <span className="why">How much runs on its own and where it reaches</span>
          </div>
        </div>
        <div className="grid-4">
          {[
            ["Active actions", "12", "Calendar, email, CRM", Zap, "chip-blue", 90],
            ["Triggers", "18", "7 keyword based", CircleDot, "chip-violet", 75],
            ["Connectors", "5", "Google Calendar live", Link2, "chip-green", 60],
            ["API keys", "3", "2 domain restricted", KeyRound, "chip-amber", 40]
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

      {/* WHY: Active automations — the core management task: see and create the rules the persona runs unattended. */}
      <motion.section className="section" {...enter(0.05)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Active automations</h2>
            <span className="why">The rules the persona runs without you</span>
          </div>
          <button className="section-action" onClick={() => setModal("Create persona action")}>
            Create action
          </button>
        </div>
        <ActionList
          items={[
            "Offer strategy call when visitor asks about consulting",
            "Collect founder stage before booking",
            "Send verified answer to lead",
            "Create action draft from conversation"
          ]}
        />
      </motion.section>

      {/* WHY: Action inbox — automations need human approval; this is where pending runs are reviewed and confirmed. */}
      <motion.section className="section" {...enter(0.1)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Action inbox &amp; run history</h2>
            <span className="why">Review what ran and what needs your sign-off</span>
          </div>
          <button className="section-action" onClick={() => showToast("Mock action executed")}>
            Run mock
          </button>
        </div>
        <div className="card">
          <DataTable
            rows={[
              ["Book call trigger", "Approved", "2m ago", "Success"],
              ["CRM enrichment", "Draft", "18m ago", "Needs review"],
              ["Calendar check", "Live", "1h ago", "Success"]
            ]}
          />
        </div>
      </motion.section>

      {/* WHY: Connectors & keys — automations only run if integrations and credentials are healthy, grouped for quick audit. */}
      <motion.section className="section" {...enter(0.15)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Connectors &amp; access</h2>
            <span className="why">Integrations and API keys that power every action</span>
          </div>
          <button className="section-action" onClick={() => setModal("Create key modal")}>
            Add connector
          </button>
        </div>
        <div className="grid-2">
          <div className="card">
            <h3>Connectors</h3>
            <ToggleList items={["Google Calendar connected", "HubSpot testing", "Zapier draft"]} />
          </div>
          <div className="card">
            <h3>API keys</h3>
            <div className="list">
              {[
                ["Public key", "2 allowed domains"],
                ["Allowed domains", "arcstudio.com, northstar.io"],
                ["Revoke / update", "Domain restricted"]
              ].map(([main, meta]) => (
                <div className="list-row" key={main}>
                  <span className="lr-main">{main}</span>
                  <span className="lr-meta">{meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
