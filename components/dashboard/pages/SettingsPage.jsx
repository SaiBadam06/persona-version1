"use client";

import { motion } from "framer-motion";
import { RefreshCw, Trash2, CircleAlert } from "lucide-react";
import { FormGrid, StatList, ToggleList } from "@/components/ui/widgets";

export default function SettingsPage({ setModal, showToast }) {
  const ease = [0.22, 1, 0.36, 1];
  return (
    <div className="page">
      {/* WHY: Account & billing is the primary task — identity + plan editing live together so the user sets up "who they are" in one place. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Account &amp; billing</h2>
            <span className="why">Your identity, workspace, and plan</span>
          </div>
          <button className="section-action" onClick={() => showToast("Settings saved")}>
            Save changes
          </button>
        </div>
        <FormGrid fields={["Name", "Email", "Company", "Timezone"]} />
        <div className="card">
          <StatList
            stats={[
              ["Plan", "Creator Pro"],
              ["Messages", "3,258 / 4,000"],
              ["Voice", "42 min"],
              ["Builder seats", "3"]
            ]}
          />
          <button className="section-action" onClick={() => setModal("Checkout mock")}>
            Start trial
          </button>
        </div>
      </motion.section>

      {/* WHY: Notifications grouped as one calm toggle surface — no per-row buttons, just clear on/off control. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0.05 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Notifications</h2>
            <span className="why">Choose what reaches your inbox</span>
          </div>
        </div>
        <ToggleList
          items={["Product education emails", "Daily activity emails", "Weekly reports", "Hot lead alerts"]}
        />
      </motion.section>

      {/* WHY: Privacy & data isolates consent + export controls so trust-sensitive settings are easy to audit at a glance. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0.1 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Privacy &amp; data</h2>
            <span className="why">Exports, consent, and visibility</span>
          </div>
        </div>
        <ToggleList
          items={["Consent status accepted", "Export persona data", "API debug visibility", "Allow analytics"]}
        />
      </motion.section>

      {/* WHY: Danger zone is a distinct destructive surface — three non-duplicate, irreversible actions kept apart from everyday settings. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0.15 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Danger zone</h2>
            <span className="why">Irreversible account actions</span>
          </div>
        </div>
        <div className="list">
          <div className="list-row">
            <span className="lr-main">Reset profile</span>
            <button className="section-action" onClick={() => setModal("Reset profile")}>
              <RefreshCw size={15} /> Reset
            </button>
          </div>
          <div className="list-row">
            <span className="lr-main">Delete twin</span>
            <button className="section-action" onClick={() => setModal("Delete twin")}>
              <Trash2 size={15} /> Delete twin
            </button>
          </div>
          <div className="list-row">
            <span className="lr-main">Delete account</span>
            <button className="section-action" onClick={() => setModal("Delete account")}>
              <CircleAlert size={15} /> Delete account
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
